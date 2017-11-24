function convertArrayToArrayAndMap(inputArray, indexName) {

    const sortedArray = [];
    const map = {}
    inputArray.forEach((item) => {
        const index = sortedArray.length;
        sortedArray[index] = { index, count: (item.count || 1), ...item };
        if (indexName !== undefined) {            
            map[item[indexName]] = sortedArray[index];
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

    constructor(inputArray, indexName) {
        if (inputArray === undefined) throw new Error("constructor has missing values");

        const { array, map } = convertArrayToArrayAndMap(inputArray, indexName);        
        this.holder = { array , map };
    }

    get(index) {
        const value = this.holder.array[index];        
        return value;
    }

    getByIndex(index) {
        const value = this.holder.array[index];
        ++this.holder.array[index].count;
        // console.time("sortArray");
        sortArray(index, this.holder);
        // console.timeEnd("sortArray");
        return value;
    }

    getByKey(key) {
        const item =  this.holder.map[key];
        return this.getByIndex(item.index)        
    }

    getArray() {
        return this.holder.array;
    }
}