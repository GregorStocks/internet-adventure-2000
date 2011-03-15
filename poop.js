// Poop Quest 1.0
var game = {
"rooms": {
    "poopy": {
        "name": "a poopy room",
        "desc": "This room is poopy as heck!",
        "links": {
            "north": "less poopy",
            "south": "less poopy",
            "east": "less poopy",
            "west": "less poopy"
        },
        "items": [],
        "actions": function(data) {
            return {"say hi": function(data) {output("Johnny says 'hi' back.");}};
        },
        "backgrounds": function(data) {
            return ["Johnny Fiveaces is here. Say hi to him, maybe?"]
        }
    },
    "less poopy" : {
        "name": "a less poopy room",
        "desc": "This room is less poopy, although there's still some poopiness.",
        "links": {
            "north": "poopy",
            "south": "poopy",
            "east": "poopy",
            "west": "poopy"
        },
        "items": [
            "box of poop"
        ],
        "actions": function(data) { return {}; },
        "backgrounds": function(data) { return []; }
    }
},
"items": {
    "box of poop": {
        "name": "a box of poop",
        "desc": "It's a box of poop."
    }
},
"start": "poopy",
"startwords": "<h3>Poop Quest</h3",
"name": "Poop Quest"
};
