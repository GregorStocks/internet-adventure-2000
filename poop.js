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
        "items": []
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
        ]
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
