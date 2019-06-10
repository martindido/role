import { UPLOAD_FILE, UPLOAD_FILE_ERROR, UPLOAD_FILE_SUCCESS } from '../../constants/actions';
import { UploadFileAction, UploadFileErrorAction, UploadFileSuccessAction } from '../../types/Action/Storage';
import { errors, errorStrings } from '../error';
import { fileUpload, s3File } from '../storage';

export const uploadFileAction: UploadFileAction = {
    type: UPLOAD_FILE,
    payload: fileUpload
};

export const uploadFileSuccessAction: UploadFileSuccessAction = {
    type: UPLOAD_FILE_SUCCESS,
    payload: s3File
};

export const uploadFileErrorAction: UploadFileErrorAction = {
    type: UPLOAD_FILE_ERROR,
    payload: errors
};

export const uploadFileErrorStringAction: UploadFileErrorAction = {
    type: UPLOAD_FILE_ERROR,
    payload: errorStrings
};
