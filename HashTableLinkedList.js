//依赖于 <script src="LinkedList.js"></script>
function HashTableLinkedList() {
    var table = [];
    var loseLoseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash;
    };
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = key;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        };
    };
    this.put = function (key, value) {
        var position = loseLoseHashCode(key);
        if (table[position]===undefined) {
            table[position]=new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };
    this.remove = function (key) {
        var position = loseLoseHashCode(key);
        if(table[position]!==undefined) {
            var current =table[position].head;
            while(current.next){
                if(current.element.key===key){
                    table[position].remove(current.element);
                    if(table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if(current.element.key===key) {
                table[position].remove(current.element);
                if(table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false
    };
    this.get = function (key) {
        var position = loseLoseHashCode(key);
        if(table[position]!==undefined) {/**/
            var current = table[position].getHead();
            while(current.next) {
                if(current.element.key===key) {
                    return current.element.value;
                }
                current = current.next;
            }
            if (current.element.key===key) {
                return current.element.value;
            }
        }
        return undefined;
    };
    this.getTable = function () {
        return table;
    };
}