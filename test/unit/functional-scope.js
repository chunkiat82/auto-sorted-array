import AutoSortedArray from '../../src/auto-sorting-array';

describe('Functional Test The Array Itself', () => {

    it('ensure that map and array works in reallife scenario', () => {
        const inputArray = services;
        const astServices = new AutoSortedArray(inputArray, 'id');

        const serviceResults = ['service:5', 'service:1'].map(item => {
            const output = astServices.getByKey(item);            
            return output;
        });

        expect(serviceResults).to.be.deep.equal([{
            count: 904,
            index: 2,
            id: 'service:5',
            service: 'Eye Mask',
            price: 5,
            duration: 0
        },
        {
            count: 1001,
            index: 0,
            id: 'service:1',
            service: 'Full Set - Natural',
            price: 50,
            duration: 70,
            followUp: 'service:3'
        }]);
    });
});

const services = [
    {
        'index': 2,
        'count': 1000,
        'id': 'service:1',
        'service': 'Full Set - Natural',
        'price': 50,
        'duration': 70,
        'followUp': 'service:3'
    },
    {
        'index': 4,
        'count': 1000,
        'id': 'service:2',
        'service': 'Full Set - Dense',
        'price': 60,
        'duration': 70,
        'followUp': 'service:4'
    },
    {
        'index': 3,
        'count': 903,
        'id': 'service:5',
        'service': 'Eye Mask',
        'price': 5,
        'duration': 0
    },
    {
        'index': 9,
        'count': 806,
        'id': 'service:7',
        'service': 'Radiance Facial',
        'price': 50,
        'duration': 60
    },
    {
        'index': 3,
        'count': 506,
        'id': 'service:3',
        'service': 'Touch Up - Natural',
        'price': 20,
        'duration': 25
    },
    {
        'index': 4,
        'count': 500,
        'id': 'service:4',
        'service': 'Touch Up - Dense',
        'price': 25,
        'duration': 25
    },
    {
        'index': 0,
        'count': 400,
        'id': 'service:17',
        'service': 'Eyebrow Threading',
        'price': 5,
        'duration': 5
    },
    {
        'index': 2,
        'count': 301,
        'id': 'service:2a',
        'service': 'Lower Set - Natural',
        'price': 20,
        'duration': 25
    },
    {
        'index': 7,
        'count': 3,
        'id': 'service:18',
        'service': 'Full Face Threading',
        'price': 20,
        'duration': 30
    },
    {
        'index': 9,
        'count': 2,
        'id': 'service:12',
        'service': 'Half Arm Waxing',
        'price': 15,
        'duration': 15
    },
    {
        'index': 10,
        'count': 2,
        'id': 'service:10',
        'service': 'Half Leg Waxing',
        'price': 20,
        'duration': 15
    },
    {
        'index': 11,
        'count': 1,
        'id': 'service:8',
        'service': 'Brazilian Waxing',
        'price': 40,
        'duration': 30
    },
    {
        'index': 12,
        'count': 1,
        'id': 'service:9',
        'service': 'Full Leg Waxing',
        'price': 35,
        'duration': 20
    },
    {
        'index': 13,
        'count': 1,
        'id': 'product:1',
        'service': 'Lash Brush',
        'price': 1,
        'duration': 0
    },
    {
        'index': 14,
        'count': 1,
        'id': 'service:11',
        'service': 'Full Arm Waxing',
        'price': 25,
        'duration': 20
    },
    {
        'index': 15,
        'count': 1,
        'id': 'service:13',
        'service': 'Under Arm Waxing',
        'price': 15,
        'duration': 15
    },
    {
        'index': 16,
        'count': 1,
        'id': 'service:14',
        'service': 'Full Face Waxing',
        'price': 30,
        'duration': 20
    },
    {
        'index': 17,
        'count': 1,
        'id': 'service:15',
        'service': 'Upper Lip Waxing',
        'price': 6,
        'duration': 5
    },
    {
        'index': 18,
        'count': 1,
        'id': 'service:16',
        'service': 'Lower Lip Waxing',
        'price': 4,
        'duration': 5
    },
    {
        'index': 19,
        'count': 1,
        'id': 'service:17m',
        'service': 'Eyebrow Threading (Men)',
        'price': 8,
        'duration': 5
    },
    {
        'index': 20,
        'count': 1,
        'id': 'service:19',
        'service': 'Upper Lip Threading',
        'price': 3,
        'duration': 5
    },
    {
        'index': 21,
        'count': 1,
        'id': 'service:20',
        'service': 'Lower Lip Threading',
        'price': 2,
        'duration': 5
    },
    {
        'index': 22,
        'count': 1,
        'id': 'service:9999',
        'service': 'Others',
        'price': 0,
        'duration': 0
    },
    {
        'index': 8,
        'count': 1,
        'id': 'service:6',
        'service': 'Removal',
        'price': 10,
        'duration': 25
    }
]