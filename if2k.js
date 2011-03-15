function startif(data) {
    arrive(data, data.start);
}

function arrive(data, room) {
    data.currentroom = room;
    output("You have arrived in " + data.rooms[room].name + ". " + data.rooms[room].desc + ".");
    var dirs = ["north", "south", "east", "west"];
    for(var i in dirs) {
        var dir = dirs[i];
        if(data.rooms[room][dir]) {
            output("To the " + dir + " is " + data.rooms[data.rooms[room][dir]].name);
        }
    }
}

function input(text, data) {
    var r = data.rooms[data.currentroom];
    if(r[text]) { //AAAAAAAAAAAAAAAAA
        arrive(data, r[text]);
    } else {
        output("that's silly, try again.");
    }
}

function output(text) {
    $("p#output").append(text + "<br />");
}

$(document).ready(function() {
    startif(game);
});
