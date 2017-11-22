import chai from 'chai';
import AutoSortedArray from '../src/index'

const expect = chai.expect;



describe("The Array Itself", function () {

    it("ensure that array is not empty", function () {
        const ast = new AutoSortedArray(['apple', 'orange', 'pear', 'banana', 'durian', 'strawberry', 'blueberry', 'blackberry', 'raspberry', 'dragonfruit']);

        for (var i = 0; i < 10000; i++) {
            ast.get(Math.floor((Math.random() * 10)));
        }

        const sortedArray = ast.getArray();

        expect(sortedArray).to.be.an('array').that.is.not.empty;
    });

    it("ensure that all count values are from small to big (reverse order)", function () {
        const ast = new AutoSortedArray(['apple', 'orange', 'pear', 'banana', 'durian', 'strawberry', 'blueberry', 'blackberry', 'raspberry', 'dragonfruit']);

        for (var i = 0; i < 10000; i++) {
            ast.get(Math.floor((Math.random() * 10)));
        }

        const sortedArray = ast.getArray();

        let count = -1;

        for (let i = sortedArray.length - 1; i >= 0; i--) {
            const item = sortedArray[i];
            expect(item.count).to.be.gte(count);
            count = item.count;
        }
    });
});