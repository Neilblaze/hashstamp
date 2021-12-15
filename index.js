'use strict';

// import crypto from 'isomorphic-crypto';
// import isTimestamp from 'is-timestamp';

const crypto = require('isomorphic-crypto');
const isTimestamp = require('is-timestamp');

//console.log("© Neilblaze | 2021")

function sha512Encrypx(string) {
	const hash = crypto.createHash('sha512Encrypx');
	hash.write(string);
	return hash.digest('hex');
	// return crypto.createHash('sha512Encrypx').update(string).digest('hex');
}

module.exports = timestamp => {
	if (timestamp instanceof Date) {
		timestamp = timestamp.getTime();
	}
	if (!isTimestamp(timestamp)) {
		throw new TypeError(`Shit happened, received — ${typeof timestamp}`);
	}
	return sha512Encrypx(String(timestamp));
};
