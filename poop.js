// Poop Quest 1.0
var game = {
"rooms": {
    "poopy": {
        "name": "a poopy room",
        "desc": "This room is poopy",
        "links": {
            "north": "less poopy",
            "south": "less poopy",
            "east": "less poopy",
            "west": "less poopy"
        },
        "items": [],
        "npcs": {
            "johnny fiveaces": {
                "name": "Johnny Fiveaces",
                "desc": "He is really pretty. Say hi to him",
                "actions": {
                    "say hi": function(data) {output("Johnny says 'hi' back.");}
                }
            }
        }
    },
    "less poopy" : {
        "name": "a less poopy room",
        "desc": "This room is less poopy",
        "links": {
            "north": "poopy",
            "south": "poopy",
            "east": "poopy",
            "west": "poopy"
        },
        "items": [
            "box of poop"
        ],
        "npcs": {}
    }
},
"items": {
    "box of poop": {
        "name": "box of poop",
        "desc": "a box of poop"
    }
},
"start": "poopy",
"name": "Poop Quest"
};
