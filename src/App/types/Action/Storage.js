import type { FileUpload, S3File } from '../Storage';
import type { Errors } from '../Sync';

export type UploadFileAction = {
    type: 'UPLOAD_FILE',
    payload: FileUpload
};

export type UploadFileSuccessAction = {
    type: 'UPLOAD_FILE_SUCCESS',
    payload: S3File
};

export type UploadFileErrorAction = {
    type: 'UPLOAD_FILE_ERROR',
    payload: Errors
};

export type StorageAction = UploadFileAction | UploadFileSuccessAction | UploadFileErrorAction;
