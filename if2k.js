function startif(data) {
    data.gotitems = {};
    arrive(data, data.start);
}

function arrive(data, room) {
    data.currentroom = room;
    output("You have arrived in " + data.rooms[room].name + ". " + data.rooms[room].desc + ".");
    for(var dir in data.rooms[room].links) {
        output("To the " + dir + " is " + data.rooms[data.rooms[room].links[dir]].name + ".");
    }
    var items = data.rooms[room].items;
    for(var i in items) {
        if(!data.gotitems[items[i]]) {
            output("There is " + data.items[items[i]].name + " here.");
        }
    }

    var npcs = data.rooms[room].npcs
    for(var i in npcs) {
        output(npcs[i].name + " is here. " + npcs[i].desc + ".");
    }
}

function show_inventory(data) {
    for(var i in data.gotitems) {
        if(data.gotitems[i]) {
            output("You have a " + data.items[i].name + ". It is " + data.items[i].desc + ".");
        }
    }
}

function input(text, data) {
    if (text == "n") text = "north";
    if (text == "s") text = "south";
    if (text == "e") text = "east";
    if (text == "w") text = "west";

    var r = data.rooms[data.currentroom];
    if(r.links[text]) {
        arrive(data, r.links[text]);
    } else if (text == "i") {
        show_inventory(data);
    } else if (/^get /.test(text)) {
        //FIXME doesn't actually parse their get, just gets first item
        for(var i in r.items) {
            if(data.gotitems[r.items[i]] == 1) {
                continue;
            }
            output("Picking up " + data.items[r.items[i]].name + ".");
            data.gotitems[r.items[i]] = 1;
            return;
        }
        output("Nothing here, dummy!");
        return;
    } else {
        for(var i in r.npcs) {
            if(r.npcs[i].actions[text]) {
                r.npcs[i].actions[text](data);
                return;
            }
        }
        output("what?");
    }
}

function output(text) {
    $("p#output").append(text + "<br />");
}

$(document).ready(function() {
    startif(game);
});
