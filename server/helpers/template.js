var templates     = {},
    hbs           = require('express-hbs'),
    errors        = require('../errors');
    // i18n          = require('../i18n');

// ## Template utils

// Execute a template helper
// All template helpers are register as partial view.
templates.execute = function (name, context, options) {
    var partial = hbs.handlebars.partials[name];

    if (partial === undefined) {
        errors.logAndThrowError('warnings.helpers.template.templateNotFound');
        return;
    }

    // If the partial view is not compiled, it compiles and saves in handlebars
    if (typeof partial === 'string') {
        hbs.registerPartial(partial);
    }

    return new hbs.handlebars.SafeString(partial(context, options));
};

module.exports = templates;
