'use strict';

const KeyvSequelize = require('keyv-sequelize');

class KeyvSqlite extends KeyvSequelize {
	constructor(opts) {
		if (typeof opts === 'string') {
			opts = { uri: opts };
		}
		opts = Object.assign({
			dialect: 'sqlite',
			uri: 'sqlite://:memory:'
		}, opts);

		super(opts);
	}
}

module.exports = KeyvSqlite;