import { uploadFile, uploadFileError, uploadFileSuccess } from '../../actions/storage';
import { FileUpload, S3File } from '../Storage';
import { Errors } from '../Sync';

export type UploadFileAction = {
    type: 'UPLOAD_FILE';
    payload: FileUpload;
};

export type UploadFileActionCreator = typeof uploadFile;

export type UploadFileSuccessAction = {
    type: 'UPLOAD_FILE_SUCCESS';
    payload: S3File;
};

export type UploadFileSuccessActionCreator = typeof uploadFileSuccess;

export type UploadFileErrorAction = {
    type: 'UPLOAD_FILE_ERROR';
    payload: Errors;
};

export type UploadFileErrorActionCreator = typeof uploadFileError;

export type StorageAction = UploadFileAction | UploadFileSuccessAction | UploadFileErrorAction;
