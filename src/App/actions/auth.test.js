import {
    SIGN_IN
} from '../constants/actions';
import * as actionCreators from './auth';

it('this is a test', () => {
    // $FlowFixMe
    expect(actionCreators.signIn().type).toEqual(SIGN_IN);
});
