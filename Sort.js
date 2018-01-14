// 排序
function ArrayList() {
    var array = [];
    var swap = function (index1, index2) {
        var aux =array[index1] ;
        array[index1] = array[index2];
        array[index2] = aux;
    };
    this.insert = function (item) {
        array.push(item);
    };
    this.toString=function () {
        return array.join()
    }
    //冒泡排序
    this.bubbleSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };
    // 快速排序
    // 选择排序
    this.selectionSort = function () {
        var length = array.length,
            indexMin;
        for (var i = 0; i < length; i++) {
            indexMin = i;
            for (var j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (indexMin !== i) {
                swap(i, indexMin);
            }
        }
    };
    // 插入排序
    this.insertionSort=function () {
        var length = array.length,
            j, temp;
        for (var i=0;i<array.length;i++) {
            j = i;
            temp = array[i];
            while(j>0&&array[j-1]>temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    };
    // 归并排序
    var mergeSortRec=function (array) {
        var length = array.length;
        if(length===1){
            return array
        }
        var mid = Math.floor(length / 2);
        var left = array.slice(0, mid);
        var right = array.slice(mid, length);
        return merge(mergeSortRec(left), mergeSortRec(right));
    };
    var merge = function (left, right) {
        var result=[],
            ir=0,
            il=0;
        while (il<left.length&&ir<right.length) {
            if(left[il]<right[ir]){
                result.push(left[il]);
                il++;
            }else{
                result.push(right[ir]);
                ir++
            }
        }
        while(il<left.length) {
            result.push(left[il]);
            il++;
        }
        while (ir<right.length) {
            result.push(right[ir]);
            ir++;
        }
        return result;
    };
    this.mergeSort=function () {
        array = mergeSortRec(array);
    }
    // 快速排序
    var quick = function (array,left,right) {
        var index;
        if(array.length>1) {
            index = partition(array, left, right);
            if(left<index-1) {
                quick(array, left, index - 1);
            }
            if(right>index) {
                quick(array, index, right);
            }
        }
    };
    var partition = function (arr, left, right) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        debugger
        while (i<=j) {
            while(arr[i]<pivot) {
                i++;
            }
            while(arr[j]>pivot) {
                j--;
            }
            if(i<=j) {
                swapQuickSort(arr, i, j);
                i++;
                j--;
            }
        }
        return i;
    };
    var swapQuickSort = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };
    this.quickSort=function () {
        quick(array, 0, array.length - 1);
    }
}

var arr = new ArrayList();
arr.insert(5);
arr.insert(4);
arr.insert(3);
arr.insert(2);
arr.insert(1);
