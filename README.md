#  [![NPM version][npm-image]][npm-url]

> Very simple KeystoneJS i18n based on JSON locale files & cookies

This plugin is a simple integration for Keystone of mashable/i18n node package, an amazingly powerful i18n for node - https://www.npmjs.com/package/i18n
If you are looking for a more extensive i18n configuration, check their docs!

## Installation

```sh
npm install --save keystone-i18n
```

## Usage
1. Create directory **locales** and default JSON file for each locale you want to use. You can parse more advanced locale files following [mashup/i18n](https://www.npmjs.com/package/i18n) package markup guidelines

Example JSON locale file
```json
{
  "Hello": "Hello",
  "Hello %s": "Hello %s",
  "weekend": "weekend",
  "Hello %s, how are you today? How was your %s.": "Hello %s, how are you today? How was your %s.",
  "Hi": "Hi",
  "Howdy": "Howdy",
  "%s cat": {
    "one": "%s cat",
    "other": "%s cats"
  },
  "cat": {
    "one": "%s cat",
    "other": "%s cats"
  }
}
```

2. Load the plugin module
```js
// Require keystone-i18n
var keystonei18n = require('keystone-i18n');
```

3. Initialize keystone-i18n right before keystone app - default options are shown below
```js
// Initialize Keystone i18n before starting keystone
keystonei18n.init({
    locales: ['en', 'es'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    cookie: 'language'
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();
```

4. Basic syntax - Use __() to translate a single phrase and add it to locales files if unknown. Returns translated parsed and substituted string.

```javascript
// template and global (this.locale == 'es') 
__('Hello'); // Hola 
__('Hello %s', 'Andrea'); // Hola Andrea
```

5. Or use it into templates
```html
//- Jade
h1 #{__('Hello')}
//- Twig / Nunjucks / Handlebars
<h1>{{ __('Hello') }}</h1>
```

## License

GNU General Public License

## Author
Raul Huelamo - http://huelamo.info - raul@huelamo.info

[npm-url]: https://npmjs.org/package/keystone-i18n
[npm-image]: https://badge.fury.io/js/keystone-i18n.svg

