import AutoSortedArray from '../../src/auto-sorting-array';

describe('The Array Itself', () => {

    it('ensure that array is not empty', function () {
        const ast = new AutoSortedArray(['apple', 'orange', 'pear', 'banana', 'durian', 'strawberry', 'blueberry', 'blackberry', 'raspberry', 'dragonfruit']);

        for (var i = 0; i < 10000; i++) {
            ast.get(Math.floor((Math.random() * 10)));
        }

        const sortedArray = ast.getArray();

        expect(sortedArray).to.be.an('array').that.is.not.empty;
    });

    it('ensure that all count values are 1 for a normal get', () => {
        const ast = new AutoSortedArray(['apple', 'orange', 'pear', 'banana', 'durian', 'strawberry', 'blueberry', 'blackberry', 'raspberry', 'dragonfruit']);

        for (var i = 0; i < 10000; i++) {
            const out = ast.get(Math.floor((Math.random() * 10)));
            expect(out).to.not.be.null;
        }

        const sortedArray = ast.getArray();

        let count = -1;

        for (let i = sortedArray.length - 1; i >= 0; i--) {
            const item = sortedArray[i];
            expect(item.count).to.be.equal(1);
            count = item.count;
        }
    });

    it('ensure that all count values are from small to big (reverse order) in GetByIndex', () => {
        const ast = new AutoSortedArray(['apple', 'orange', 'pear', 'banana', 'durian', 'strawberry', 'blueberry', 'blackberry', 'raspberry', 'dragonfruit']);

        for (var i = 0; i < 10000; i++) {
            const out = ast.getByIndex(Math.floor((Math.random() * 10)));
            expect(out).to.not.be.null;
        }

        const sortedArray = ast.getArray();

        let count = -1;

        for (let i = sortedArray.length - 1; i >= 0; i--) {
            const item = sortedArray[i];
            expect(item.count).to.be.gte(count);
            expect(item.count).to.be.gte(1);
            count = item.count;
        }
    });

    it('ensure that all count values are from small to big (reverse order) in GetByKey', () => {
        const inputArray = [{ 'id': 'apple' }, { 'id': 'orange' }, { 'id': 'banana' }];
        const ast = new AutoSortedArray(inputArray, 'id');

        for (let i = 0; i < 10; i++) {
            const id = inputArray[Math.floor((Math.random() * 3))].id;            
            const out =  ast.getByKey(id);
            expect(out).to.not.be.null;
        }

        const sortedArray = ast.getArray();

        let count = -1;

        for (let i = sortedArray.length - 1; i >= 0; i--) {
            const item = sortedArray[i];
            expect(item.count).to.be.gte(count);
            expect(item.count).to.be.gte(1);
            count = item.count;
        }        
    });

    it('ensure that map holds the same object as array', () => {
        const inputArray = [{ 'id': 'apple' }, { 'id': 'orange' }, { 'id': 'banana' }];
        const ast = new AutoSortedArray(inputArray, 'id');

        for (let i = 0; i < 10; i++) {
            const id = 'banana';            
            const out =  ast.getByKey(id);
            expect(out).to.not.be.null;
        }

        expect(ast.get(0).count).to.be.equal(11);        
    });
});