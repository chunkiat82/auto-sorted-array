function convertArrayToArrayAndMap(inputArray, keyName) {

    const sortedArray = [];
    const map = {}
    inputArray.forEach((item) => {
        const index = sortedArray.length;
        sortedArray[index] = { index, count: (item.count || 1), ...item };
        if (keyName !== undefined) {            
            map[item[keyName]] = sortedArray[index];
        }        
    });
    sortedArray.sort((a, b) => b.count - a.count);

    return { array: sortedArray, map };
}

function sortArray(index, holder) {
    const { array } = holder;

    let currentIndex = index;

    for (let i = index - 1; i >= 0; i--) {
        const temp = array[i];
        const current = array[currentIndex];
        if (current.count > temp.count) {
            current.index=temp.index;
            temp.index=currentIndex;

            array[i] = current;
            array[currentIndex] = temp;            
            currentIndex = i;
            
        } else {
            break;
        }
    }
}

export default class AutoSortingArray {

    constructor(inputArray, keyName) {
        if (inputArray === undefined) throw new Error("constructor has missing values");

        const { array, map } = convertArrayToArrayAndMap(inputArray, keyName);        
        this.holder = { array , map };
    }

    peek(index) {
        const value = this.holder.array[index];        
        return value;
    }

    peekByKey(index) {
        const item =  this.holder.map[key];      
        return value;
    }

    get(index) {
        const value = this.holder.array[index];
        ++this.holder.array[index].count;        
        sortArray(index, this.holder);        
        return value;
    }

    getByKey(key) {
        const item = this.holder.map[key];
        return this.get(item.index);
    }

    getArray() {
        return this.holder.array;
    }
}