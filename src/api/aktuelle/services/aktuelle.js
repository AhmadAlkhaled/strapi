'use strict';

/**
 * aktuelle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aktuelle.aktuelle');
