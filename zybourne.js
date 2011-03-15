// Zybourne Quest 1.0
var game = {
"rooms": {
    "bar": {
        "titlename": "Bar",
        "sentencename": "less of the bar",
        "desc": "You're in a bar in Shakiri. You were fleeing from the armies of Capital once, but that was a long time ago...before the horrors of the \"CITY5\" conflagration. Now you're in a bar. A bar in Shakiri, on the road to Kinthmora, and from there to Bookworld. There's more bar to the south.",
        "links": {
            "South": "morebar"
        },
        "items": [],
        "state": 0,
        "actions": function(data) {
            if(data.rooms.bar.state == 0) {
                return {
                    "Talk to man": function(data) {
                        data.rooms.bar.state = 1;
                        update(data, data.currentroom, "\"What you got there?\"<br>The man pauses for a moment, considering plots which might've employed you as a spy, paid in food, to inquire. Exhausted and drawn to your virginal innocence, the walls of secrecy melt for a moment.<br>\"This, my darling, is a device. A device many men and many women have died to see, to understand, and to own. In many ways it is like one of your toys, but a toy for adults. This, darling, is The Zybourne Clock.\"");
                    },
                    "Steal egg": function(data) {
                        output("Who do you think you are, Johnny Fiveaces?");
                    }
                };
            } else if(data.rooms.bar.state == 1) {
                return {
                    "Kick man": function(data) {
                        data.rooms.bar.state = 2;
                        data.rooms.bar.items.push("clock");
                        update(data, data.currentroom, "You kick the man. He runs away crying that you touched him. He leaves the clock.");
                    }
                }
            }
        },
        "backgrounds": function(data) {
            if(data.rooms.bar.state == 0) {
                return ["At the end of a long room filled with whispers and handshakes sits a man fondling a small, dark object. The ancient wooden benches along the room's perimeter are full, mostly of women and children, leaving the men to mingle. The man sits firmly offering avoiding eye contact which could be misinterpreted as an offer of his seat. He clutches the object nervously."];
            } else if(data.rooms.bar.state == 1) {
                return ["The man looks easy to kick."];
            } else {
                return [];
            }
        }
    },
    "morebar": {
        "titlename": "More Bar",
        "sentencename": "more of the bar",
        "desc": "You were in a bar in Shakiri. Now you're in more of it.",
        "links": {
            "North": "bar"
        },
        "items": [],
        "state": 0,
        "actions": function(data) {
            if(data.rooms.morebar.state == 0) {
                return {
                    "Talk to Johnny": function(data) {
                        if(data.gotitems["clock"] == 1) {
                            data.rooms.morebar.state = 1;
                            update(data, data.currentroom, "Johnny sees your clock and seems to get very excited.");
                        } else {
                            output("Johnny says \"hi\" and goes back to playing poker. How does he win so much?");
                        }
                    }
                };
            } else {
                if(data.gotitems["clock"] == 1) {
                    return {
                        "Offer Johnny the clock": function(data) {
                            data.gotitems["clock"] = 0;
                            data.rooms.morebar.links = {};
                            data.rooms.morebar.state = 2;
                            update(data, data.currentroom, "You and Johnny go off on all sorts of adventures. THE END(?)");
                        }
                    };
                } else {
                    return {};
                }
            }
        },
        "backgrounds": function(data) {
            if(data.rooms.morebar.state == 0) {
                return ["Johnny Fiveaces is here, playing poker.<br><img src='images/johnny.jpg'/>"];
            } else if(data.rooms.morebar.state == 1) {
                return ["Johnny Fiveaces is here. He appears to be excited.<br><img src='images/johnny.gif' />"];
            } else {
                return ["<br><img src='images/win.jpg'>"];
            }
        }
    },
},
"items": {
    "clock": {
        "name": "the Zybourne Clock",
        "desc": "This, darling, is the Zybourne Clock."
    }
},
"start": "bar",
"name": "Quest for Zybourne"
};
