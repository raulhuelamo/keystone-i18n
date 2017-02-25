/**
 * Created by raul on 11/20/16.
 */

// Require keystone and i18n-node
var keystone = require('keystone'),
	extend = require('util')._extend,
	i18n = require('i18n');

// define module
var _this = {
	defaultOptions: {
		locales: ['en', 'es'],
		directory: __dirname + '/locales',
    		endpoint: '/lang',
		defaultLocale: 'en',
		cookie: 'language'
	},
    init: function (options) {
		// Get options
		options = extend(_this.defaultOptions, options);
        // Configure i18n
        i18n.configure(options);
        // Add-in i18n support
        keystone.pre('routes', i18n.init);
	console.log('/' + options.endpoint.replace(/^\|+|\|+$/g, ''));
        // Locale switch endpoint
        keystone.app.get('/' + options.endpoint.replace(/^\/|\/$/g, '') + '/:lang', _this.switchLocale);
    },
    switchLocale: function (req, res) {
        res.cookie('language', req.params.lang, { maxAge: 900000, httpOnly: true });
        res.redirect('back');
    }
};

// export
module.exports = _this;
