import languages from './languages.json';
import translation from './translation.json';
import { renderToStaticMarkup } from 'react-dom/server';

const options = { renderToStaticMarkup };

export { languages, translation, options };
