import originalSlugify from 'slugify';

import type { SlugifyOptions } from 'slugify';

export const slugify = (string: string, options?: SlugifyOptions = { lower: true }) => originalSlugify(string, options);
