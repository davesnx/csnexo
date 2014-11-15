(function() {

    var app = angular.module("nexo", []);

    app.controller("tableController", ['$http', function($http) {

        var table = this;

        table.data = [];

        $http.get('http://localhost:8080/example.json').success(function(data) {
            table.data = data;
        });

        this.addRound = function(band) {
            ++this.table.server[band].rounds;
        };

        this.addStat= function(band, player_id, stat) {
            ++this.table.server[band].players[player_id].Stats[stat];
        };

    }]);
})();
