import { File, FileUpload, S3File } from '../types/Storage';

export const file: File = {
    name: 'name',
    size: 123456,
    type: 'type',
    extension: 'ext'
};

export const fileWithSrc: File = {
    ...file,
    src: 'src'
};

export const s3File: S3File = {
    key: 'key'
};

export const fileUpload: FileUpload = {
    slug: 'slug',
    file
};
