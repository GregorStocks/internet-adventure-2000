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
        }
    }
},
"start": "poopy",
"name": "Poop Quest"
};
