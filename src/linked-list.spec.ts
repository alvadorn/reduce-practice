import {LinkedListReducer, LinkedList, LinkedListReducerFromRight} from './linked-list';

describe('LinkedList', () => {
    describe('LinkedListReducer', () => {
        test('when inputed an empty list', () => {
            const list = [] as number[];
            const result = LinkedListReducer(list);

            expect(result).toBeNull();
        });

        test('when inputed a filled list', () => {
            const desiredLinkedList: LinkedList<number> = {
                value: 1,
                next: {
                    value: 2,
                    next: {
                        value: 3,
                        next: null,
                    }
                }
            };

            const list = [1, 2, 3];
            const result = LinkedListReducer(list);



            expect(result).toMatchObject(desiredLinkedList);
        });
    });

    describe('LinkedListReducerFromRight', () => {
        test('when inputed an empty list', () => {
            const list = [] as number[];
            const result = LinkedListReducerFromRight(list);

            expect(result).toBeNull();
        });

        test('when inputed a filled list', () => {
            const desiredLinkedList: LinkedList<number> = {
                value: 1,
                next: {
                    value: 2,
                    next: {
                        value: 3,
                        next: null,
                    }
                }
            };

            const list = [1, 2, 3];
            const result = LinkedListReducerFromRight(list);



            expect(result).toMatchObject(desiredLinkedList);
        });
    });


});
