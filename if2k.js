function startif(data) {
    data.gotitems = {};
    arrive(data, data.start);
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

function arrive(data, room) {
    data.currentroom = room;
    clear_output();
    clear_buttons();
    addbutton("inventory", function() {show_inventory(data);});
    output("You have arrived in " + data.rooms[room].name + ". " + data.rooms[room].desc + ".");
    update(data, room);
}

function be_in(data, room) {
    clear_output();
    clear_buttons();
    addbutton("inventory", function() {show_inventory(data);});
    update(data, room);
}

function update(data, room) {
    for(var dir in data.rooms[room].links) {
        output("To the " + dir + " is " + data.rooms[data.rooms[room].links[dir]].name + ".");
        addbutton(dir, function() {arrive(data, data.rooms[room].links[dir]);});

    }

    var items = data.rooms[room].items;
    for(var i in items) {
        if(!data.gotitems[items[i]]) {
            output("There is " + data.items[items[i]].name + " here.");
            addbutton("get " + data.items[items[i]].name, function() {
                data.gotitems[items[i]] = 1;
                be_in(data, room);
                output("Picking up " + data.items[items[i]].name + ".");
            });
        }
    }

    var npcs = data.rooms[room].npcs
    for(var i in npcs) {
        output(npcs[i].name + " is here. " + npcs[i].desc + ".");
        for(var text in npcs[i].actions) {
            addbutton(text, function() {npcs[i].actions[text](data);});
        }
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
