function runif(data) {
    output("poop");
    output("poop");
    output("poop");
}
function output(text) {
    $("p#output").append(text + "<br />");
}


$(document).ready(function() {
    runif(game);
});
