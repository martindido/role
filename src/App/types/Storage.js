export type File = {
    name: string,
    size: number,
    type: string,
    extension: string,
    src?: string
};

export type S3File = {
    key: string
}

export type FileUpload = {
    slug: string,
    file: File
}
