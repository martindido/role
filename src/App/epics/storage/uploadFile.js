import { UPLOAD_FILE } from '../../constants/actions';
import { uploadFileSuccess, uploadFileError } from '../../actions/storage';
import { ofType, Promise } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import createLogger from '../../utils/logger';

import type { ActionsObservable } from 'redux-observable';
import type { UploadFileAction } from '../../types/Action/Storage';

const logger = createLogger(['epics', 'storage', 'uploadFile']);

export default (action$: ActionsObservable<UploadFileAction>) =>
    action$.pipe(
        ofType(UPLOAD_FILE),
        switchMap(
            async (action: UploadFileAction): Promise => {
                try {
                    const file = await Storage.put(action.payload.slug, action.payload.file, {
                        contentType: action.payload.file.type
                    });

                    return uploadFileSuccess(file);
                } catch (error) {
                    logger.error(error);
                    return uploadFileError(error.errors ? error.errors : [error]);
                }
            }
        )
    );
