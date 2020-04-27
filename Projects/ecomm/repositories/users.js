const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
	// saved -> password saved in databse, plus 'hashed.salt
	// supplied -> user input sign in password
	async comparePasswords(saved, supplied) {
		const [ hashed, salt ] = saved.split('.');
		const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

		return hashed === hashedSuppliedBuf.toString('hex');
	}

	// account creation/hash/salt bundle function
	async create(attrs) {
		// creating random id and giving it to the user
		attrs.id = this.randomId();

		// salted string
		const salt = crypto.randomBytes(8).toString('hex');
		// hash
		const buf = await scrypt(attrs.password, salt, 64);

		// push new user to getAll collection
		const records = await this.getAll();
		const record = {
			// attrs are the non-password incoming parameters
			...attrs,
			password: `${buf.toString('hex')}.${salt}`
		};
		records.push(record);

		// save new user/collection
		await this.writeAll(records);

		// return newly created user/along with id, hashed password
		return record;
	}
}

module.exports = new UsersRepository('users.json');

// export to:
// const repo = require('./users');
// repo.funcName()
