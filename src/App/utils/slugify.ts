import slugify from 'slugify';

export default (string: string, options = { lower: true }) => slugify(string, options);
