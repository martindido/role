import * as actions from './actions';

const constants = {
    actions
};

for (const file in constants) {
    for (const constant in constants[file]) {
        it(`${constant} is correct`, () => {
            expect(constant).toEqual(constants[file][constant]);
        });
    }
}