(function() {


    var app = angular.module("nexo", []);

    app.controller("tableController", function() {

        this.table = json;

        this.addRound = function(band) {
            ++this.table.server[band].rounds;
        };

        this.addStat= function(band, player_id, stat) {
            ++this.table.server[band].players[player_id].Stats[stat];
        };

    });

    var json  = {
        "server": {

            "type" : "Ranked Game",

            "map" : "de_dust2",

            "date" : new Date(),

            "time" : "$ERVER_TIME()",
            "url_spectate" : "url_spectate",

            "T" : {
                "name" : "Terrorist",
                "rounds" : "4",
                "players" : [
                    {
                        "id": 1,
                        "Steam_Community" : "steamcommunity.com/asd",
                        "Steam_Picture" : "http://placeholder.ws/png/25",
                        "Steam_Name" : "Steam_Name",
                        "SteamID" : "123456789",
                        "ESL_profile" : "esl.eu/player/dios",
                        "Range" : "Global Elite",
                        "Medal" : "Operation Payback",
                        "Hours" : "1000",
                        "MatchesWon" : "888",
                        "Stats" : { "kill" : "3", "death" : "4", "assist" : "5" }
                    },
                    {
                        "id": 2,
                        "Steam_Community" : "steamcommunity.com/asd",
                        "Steam_Picture" : "http://placeholder.ws/png/25",
                        "Steam_Name" : "Steam_Name",
                        "SteamID" : "123456789",
                        "ESL_profile" : "esl.eu/player/dios",
                        "Range" : "Global Elite",
                        "Medal" : "Operation Payback",
                        "Hours" : "1000",
                        "MatchesWon" : "888",
                        "Stats" : { "kill" : "3", "death" : "4", "assist" : "5" }
                    }  
                ]
            },

             "CT" : { 
                "name" : "Counter Terrorist",
                "rounds" : "3",
                "players" : [
                    {
                        "id": 1,
                        "Steam_Community" : "steamcommunity.com/asd",
                        "Steam_Picture" : "http://placeholder.ws/png/25",
                        "Steam_Name" : "Steam_Name",
                        "SteamID" : "123456789",
                        "ESL_profile" : "esl.eu/player/dios",
                        "Range" : "Global Elite",
                        "Medal" : "Operation Payback",
                        "Hours" : "1000",
                        "MatchesWon" : "888",
                        "Stats" : { "kill" : "3", "death" : "4", "assist" : "5" }
                    },
                    {
                        "id": 2,
                        "Steam_Community" : "steamcommunity.com/asd",
                        "Steam_Picture" : "http://placeholder.ws/png/25",
                        "Steam_Name" : "Steam_Name",
                        "SteamID" : "123456789",
                        "ESL_profile" : "esl.eu/player/dios",
                        "Range" : "Global Elite",
                        "Medal" : "Operation Payback",
                        "Hours" : "1000",
                        "MatchesWon" : "888",
                        "Stats" : { "kill" : "3", "death" : "4", "assist" : "5" }
                    }   
                ]
            }
        }
    }

})();
