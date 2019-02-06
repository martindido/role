import * as actionCreators from './storage';
import {
    uploadFileAction,
    uploadFileSuccessAction,
    uploadFileErrorAction,
    uploadFileErrorStringAction
} from '../types/Action.mock';
import { fileUpload, s3File } from '../types/Storage.mock';
import { errors, errorStrings } from '../types/Sync.mock';

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
