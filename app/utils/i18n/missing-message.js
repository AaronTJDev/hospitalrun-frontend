import { getOwner } from '@ember/application';
import { makeArray } from '@ember/array';
import { get } from '@ember/object';
import Ember from 'ember';
import Locale from 'ember-i18n/utils/locale';
import config from '../../config/environment';

const DEFAULT_LOCALE = config.i18n.defaultLocale;

let missingMessage = function(locale, key, data) {
  if (locale === DEFAULT_LOCALE || window.env === 'development') {
    return `Missing translation: ${key}`;
  } else {

    Ember.Logger.warn(`Missing translation: ${key}`);

    // NOTE This relies on internal APIs and is brittle.
    // Emulating the internals of ember-i18n's translate method
    let i18n = this;
    let count = get(data, 'count');
    let defaults = makeArray(get(data, 'default'));
    defaults.unshift(key);
    let localeObj = new Locale(DEFAULT_LOCALE, getOwner(i18n));
    let template = localeObj.getCompiledTemplate(defaults, count);
    return template(data);
  }
};

export default missingMessage;
