function HashTable() {
    var table = [];
    var loseLoseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash;
    };
    this.put = function (key, value) {
        var position = loseLoseHashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    };
    this.remove = function (key) {
        table[loseLoseHashCode(key)] = undefined;
    };
    this.get = function (key) {
        return table[loseLoseHashCode(key)];
    };
    this.getTable = function () {
        return table;
    };
    this.print=function () {
        for (var i=0;i<table.length;i++) {
            if (table[i]!==undefined) {
                console.log(i+': '+table[i]);
            }
        }
    }
}