import { UPLOAD_FILE, UPLOAD_FILE_ERROR, UPLOAD_FILE_SUCCESS } from '../constants/actions';
import { UploadFileAction, UploadFileErrorAction, UploadFileSuccessAction } from '../types/Action/Storage';
import { FileUpload, S3File } from '../types/Storage';
import { Errors } from '../types/Sync';

export function uploadFile(payload: FileUpload): UploadFileAction {
    return {
        type: UPLOAD_FILE,
        payload
    };
}

export function uploadFileSuccess(payload: S3File): UploadFileSuccessAction {
    return {
        type: UPLOAD_FILE_SUCCESS,
        payload
    };
}

export function uploadFileError(payload: Errors): UploadFileErrorAction {
    return {
        type: UPLOAD_FILE_ERROR,
        payload
    };
}
