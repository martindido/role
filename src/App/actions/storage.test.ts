import {
    uploadFileAction,
    uploadFileErrorAction,
    uploadFileErrorStringAction,
    uploadFileSuccessAction
} from '../mocks/actions/storage';
import { errors, errorStrings } from '../mocks/error';
import { fileUpload, s3File } from '../mocks/storage';

import * as actionCreators from './storage';

describe('.uploadFile', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.uploadFile(fileUpload)).toEqual(uploadFileAction);
    });
});

describe('.uploadFileSuccess', () => {
    it('returns the corresponding action', () => {
        expect(actionCreators.uploadFileSuccess(s3File)).toEqual(uploadFileSuccessAction);
    });
});

describe('.uploadFileError', () => {
    it('returns the corresponding action with errors', () => {
        expect(actionCreators.uploadFileError(errors)).toEqual(uploadFileErrorAction);
    });
    it('returns the corresponding action with error strings', () => {
        expect(actionCreators.uploadFileError(errorStrings)).toEqual(uploadFileErrorStringAction);
    });
});
