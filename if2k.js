function startif(data) {
    data.gotitems = {};
    update(data, data.start, "");
}

function clear_buttons() {
    $("#buttons").empty();
    funcs = {}
}

var funcs = {}
function addbutton(text, func) {
    funcs[text] = func;
    $("#buttons").append("<button type='button' onclick=\"funcs['" + text + "']()\">" + text + "</button>");
}

function clear() {
    clear_output();
    clear_buttons();
}

function header(data, room, words) {
    addbutton("Inventory", function() {show_inventory(data);});
    output("<i>" + data.rooms[room].titlename + "</i>");
    output(words);
    if(!data.rooms[room].visited) {
        data.rooms[room].visited = true;
        output(data.rooms[room].desc);
    }
}

function update(data, room, words) {
    clear();
    data.currentroom = room;
    header(data, room, words);
    boilerplate(data, room);
}

function boilerplate(data, room) {
    for(var dir in data.rooms[room].links) {
        output("To the " + dir.toLowerCase() + " is " + data.rooms[data.rooms[room].links[dir]].sentencename + ".");
        addbutton(dir, function() {update(data, data.rooms[room].links[dir], "");});

    }

    var items = data.rooms[room].items;
    for(var i in items) {
        if(!data.gotitems[items[i]]) {
            output("There is " + data.items[items[i]].name + " here.");
            addbutton("Get " + data.items[items[i]].name, function() {
                data.gotitems[items[i]] = 1;
                update(data, room, "");
                output("Got " + data.items[items[i]].name + ".");
            });
        }
    }

    var actions = data.rooms[room].actions(data)
    for(var text in actions) {
        (function(t) {addbutton(t, function() {actions[t](data);});})(text);
    }
    var backgrounds = data.rooms[room].backgrounds(data)
    for(var b in backgrounds) {
        output(backgrounds[b]);
    }
}

function show_inventory(data) {
    var something = false;
    for(var i in data.gotitems) {
        if(data.gotitems[i]) {
            output("You have " + data.items[i].name + ". " + data.items[i].desc);
            something = true;
        }
    }
    if(!something) {
        output("You have nothing.");
    }
}

function clear_output() {
    $("p#output").text("");
}

function output(text) {
    $("p#output").append(text + "<br />");
}

$(document).ready(function() {
    startif(game);
});
