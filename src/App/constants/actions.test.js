import * as actions from './actions';

for (const constant in actions) {
    it(`${constant} is correct`, () => {
        expect(constant).toEqual(actions[constant]);
    });
}
