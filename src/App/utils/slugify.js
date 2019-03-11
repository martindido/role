import slugify from 'slugify';

import type { SlugifyOptions } from 'slugify';

export default (string: string, options?: SlugifyOptions = { lower: true }) => slugify(string, options);
