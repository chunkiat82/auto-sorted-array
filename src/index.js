//bubble array and bubble sort

// initialize array
// get
// sort


function convertArrayToSortedArray(inputArray) {
    const bubbleArray = [];
    inputArray.forEach((item) => {
        bubbleArray[bubbleArray.length] = { value: item, count: 1 };
    });
    return bubbleArray;
}

function sortArray(index, holder) {
    const { sortedArray } = holder;

    let currentIndex = index;

    for (let i = index - 1; i>=0; i--) {
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



export default class SelfSortingArray {

    constructor(inputArray) {
        this.holder = { "sortedArray": convertArrayToSortedArray(inputArray) };
    }

    get(index) {
        const value = this.holder.sortedArray[index].value;
        ++this.holder.sortedArray[index].count;
        // console.time("sortArray");
        sortArray(index, this.holder);        
        // console.timeEnd("sortArray");
        return value;
    }

    getArray() {
        return this.holder.sortedArray;
    }

}