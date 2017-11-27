function convertArrayToArrayAndMap(inputArray, keyName) {

    const sortedArray = [];
    const map = {}
    inputArray.sort((a, b) => {
        if (!b.count || !a.count ) return 1;
        return b.count - a.count
    });

    // console.log(inputArray);

    inputArray.forEach((item, index) => {      
        // console.log(index);
        if (Object.getPrototypeOf( item ) === Object.prototype ) {
            item.index = index;
        } else {
            item = { value: item, index };
        }
        
        sortedArray[index] = { count: (item.count || 1), ...item };
        if (keyName !== undefined) {            
            map[item[keyName]] = sortedArray[index];
        }        
    });

    //  console.log(map);
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
        const item = this.holder.array[index];        
        return item;
    }

    peekByKey(key) {
        const item =  this.holder.map[key];      
        return item;
    }

    get(index) {
        const item = this.holder.array[index];
        ++this.holder.array[index].count;        
        sortArray(index, this.holder);        
        return item;
    }

    getByKey(key) {
        const item = this.holder.map[key];
        // console.log(item);
        // console.log(this.holder.array);
        return this.get(item.index);
    }

    getArray() {
        return this.holder.array;
    }
}