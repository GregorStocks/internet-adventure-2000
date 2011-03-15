// Zybourne Quest 1.0
var game = {
"rooms": {
    "bar": {
        "name": "Bar",
        "desc": "You're in a bar in Shakiri. You were fleeing from the armies of Capital once, but that was a long time ago...before the horrors of the \"CITY5\" conflagration. Now you're in a bar. A bar in Shakiri, on the road to Kinthmora, and from there to Bookworld. ",
        "links": {

        },
        "items": [],
        "state": 0,
        "actions": function(data) {
            if(data.rooms.bar.state == 0) {
                return {
                    "Talk to man": function(data) {
                        data.rooms.bar.state = 1;
                        update(data, data.currentroom, "");
                        output("\"What you got there?\"<br>The man pauses for a moment, considering plots which might've employed you as a spy, paid in food, to inquire. Exhausted and drawn to your virginal innocence, the walls of secrecy melt for a moment.<br>\"This, my darling, is a device. A device many men and many women have died to see, to understand, and to own. In many ways it is like one of your toys, but a toy for adults. This, darling, is The Zybourne Clock.\"");
                    },
                    "Steal egg": function(data) {
                        output("Who do you think you are, Johnny Fiveaces?");
                    }
                };
            } else if(data.rooms.bar.state == 1) {
                data.rooms.bar.state = 2;
                return {
                    "Kick man": function(data) {
                        data.rooms.bar.items.push("clock");
                        clear();
                        header(data, data.currentroom, "");
                        output("You attack the man until he runs away crying that you touched him. He drops the Clock in his haste.");
                        boilerplate(data, data.currentroom);
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
},
"items": {
    "clock": {
        "name": "the Zybourne Clock",
        "desc": "This, darling, is the Zybourne Clock."
    }
},
"start": "bar",
"startwords": "<h3>Quest for Zybourne: A <u>Steampunk</u> Adventure</h3>",
"name": "Quest for Zybourne"
};
