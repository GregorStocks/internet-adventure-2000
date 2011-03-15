function startif(data) {
    data.gotitems = {};
    update(data, data.start);
}

function clear_buttons() {
    $("#buttons").empty();
    funcs = {}
}

var funcs = {}
function addbutton(text, func) {
    funcs[text] = func;
    $("#buttons").append("<button type='button' onclick='funcs[\"" + text + "\"]()'>" + text + "</button>");
}

function update(data, room) {
    clear_output();
    clear_buttons();
    addbutton("inventory", function() {show_inventory(data);});
    output("<i>" + data.rooms[room].name + "</i>");
    if(!data.rooms[room].visited) {
        data.rooms[room].visited = true;
        output(data.rooms[room].desc);
    }

    for(var dir in data.rooms[room].links) {
        output("To the " + dir + " is " + data.rooms[data.rooms[room].links[dir]].name + ".");
        addbutton(dir, function() {update(data, data.rooms[room].links[dir]);});

    }

    var items = data.rooms[room].items;
    for(var i in items) {
        if(!data.gotitems[items[i]]) {
            output("There is " + data.items[items[i]].name + " here.");
            addbutton("get " + data.items[items[i]].name, function() {
                data.gotitems[items[i]] = 1;
                update(data, room);
                output("Picking up " + data.items[items[i]].name + ".");
            });
        }
    }

    var actions = data.rooms[room].actions()
    for(var text in actions) {
        addbutton(text, function() {actions[text](data);});
    }
    var backgrounds = data.rooms[room].backgrounds()
    for(var b in backgrounds) {
        output(backgrounds[b]);
    }
}

function show_inventory(data) {
    for(var i in data.gotitems) {
        if(data.gotitems[i]) {
            output("You have a " + data.items[i].name + ". It is " + data.items[i].desc + ".");
        }
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
