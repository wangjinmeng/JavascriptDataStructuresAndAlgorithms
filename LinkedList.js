function LinkedList() {
    var Node = function (ele) {
        this.element = ele;
        this.next = null;
    };
    var head=null;
    var length=0;
    this.append = function (ele) {
        var node=new Node(ele);
        if(head===null) {
            head=node;
        } else {
            var currentNode=head;
            while(currentNode.next){
                currentNode=currentNode.next;
            }
            currentNode.next=node;
        }
        length++;
    };
    this.insert = function (position,ele) {
        if(position>=0&&position<length) {
            var current=head,
                previous=null,
                index=0;
            var node = new Node(ele);
            if(position===0) {
                node.next = head;
            }else {
                while (index<position) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
            return true;
        }else {
            return false
        }
    };
    this.removeAt = function (position) {
        if(position>=0&&position<length) {
            var current=head,
                previous,
                index=0;
            if(position===0){
                head=current.next;//不再引用将会被回收
            }else {
                while (index<position) {
                    previous=current;
                    current=current.next;
                    index++
                }
                previous.next=current.next;//失去对current的引用，将被回收
            }
            length--;
            return current.element
        }else {
            return null
        }
    };
    this.remove = function (ele) {
        var index = this.indexOf(ele);
        return this.removeAt(index);
    };
    this.indexOf = function (ele) {
        var current = head,
            index = 0;
        while (current) {
            if(ele===current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        var current = head,
            index = 0;
        while (current) {
            current = current.next;
            index++;
        }
        return index;
    };
    this.getHead = function () {
        return head;
    };
    this.toString = function () {
        var current = head,
            string = '';
        while (current) {
            current = current.next;
            string += current.element + ' ';
        }
        return string;
    };
    this.print = function () {
        console.log(head)
    };
}