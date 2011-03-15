function startif(data) {
    output("poop");
    output("poop");
    output("poop");
}

function input(text, data) {
    output(text);
    output("what a stupid input that was!");
    return false;
}

function output(text) {
    $("p#output").append(text + "<br />");
}

$(document).ready(function() {
    startif(game);
});
