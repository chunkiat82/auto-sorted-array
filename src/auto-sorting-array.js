function convertArrayToSortedArray(inputArray) {
    const bubbleArray = [];
    inputArray.forEach((item) => {
        bubbleArray[bubbleArray.length] = { count: (item.count || 1), ...item };
    });
    bubbleArray.sort((a, b) => b.count - a.count);
    return bubbleArray;
}

function sortArray(index, holder) {
    const { sortedArray } = holder;

    let currentIndex = index;

    for (let i = index - 1; i >= 0; i--) {
        const temp = sortedArray[i];
        const current = sortedArray[currentIndex];
        if (current.count > temp.count) {
            sortedArray[i] = current;
            sortedArray[currentIndex] = temp;
            currentIndex = i;
        } else {
            break;
        }
    }
}

export default class AutoSortingArray {

    constructor(inputArray) {
        this.holder = { "sortedArray": convertArrayToSortedArray(inputArray) };
    }

    get(index) {
        const value = this.holder.sortedArray[index];
        ++this.holder.sortedArray[index].count;
        // console.time("sortArray");
        sortArray(index, this.holder);
        // console.timeEnd("sortArray");
        return value;
    }

    getByKey(key, value) {

        for (let index = 0; index < this.holder.sortedArray.length; index++) {
            if (this.holder.sortedArray[index][key] === value) {
               return this.get(index);
            }
        }

        return null;
    }

    getArray() {
        return this.holder.sortedArray;
    }
}