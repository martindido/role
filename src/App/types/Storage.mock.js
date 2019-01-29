export const file = {
    name: 'name',
    size: 123456,
    type: 'type',
    extension: 'ext'
};

export const fileWithSrc = {
    ...file,
    src: 'src'
};

export const s3File = {
    key: 'key'
};

export const fileUpload = {
    slug: 'slug',
    file
};
