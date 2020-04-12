const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
	constructor(filename) {
		if (!filename) {
			throw new Error('Creating a repository requires a filename');
		}

		this.filename = filename;
		try {
			fs.accessSync(this.filename);
		} catch (err) {
			fs.writeFileSync(this.filename, '[]');
		}
	}

	// Get all users
	async getAll() {
		return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
	}

	// account creation bundle function
	async create(attrs) {
		// creating random id and giving it to the user
		attrs.id = this.randomId();

		// push new user to getAll collection
		const records = await this.getAll();
		records.push(attrs);

		// save new user/collection
		await this.writeAll(records);

		// return newly created user/along with id
		return attrs;
	}

	// write/save all to memory
	async writeAll(records) {
		await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
	}

	// randomID
	randomId() {
		return crypto.randomBytes(4).toString('hex');
	}

	// getOne
	async getOne(id) {
		const records = await this.getAll();
		return records.find((record) => record.id === id);
	}

	// delete
	async delete(id) {
		const records = await this.getAll();
		// filter out the deleted id
		const filteredRecords = records.filter((record) => record.id !== id);
		await this.writeAll(filteredRecords);
	}

	// update
	async update(id, attrs) {
		const records = await this.getAll();
		const record = records.find((record) => record.id === id);

		if (!record) {
			throw new Error(`Record with id ${id} not found`);
		}

		// if error not thrown, take attrs and copy => on to record object
		Object.assign(record, attrs);

		await this.writeAll(records);
	}

	// getOneBy
	// loop through users,
	// loop/filter through users key.value === key.value
	async getOneBy(filters) {
		const records = await this.getAll();

		for (let record of records) {
			let found = true;

			// loop "in" object to access object keys
			for (let key in filters) {
				if (record[key] !== filters[key]) {
					found = false;
				}
			}

			if (found) {
				return record;
			}
		}
	}
}

module.exports = new UsersRepository('users.json');

// export to:
// const repo = require('./users');
// repo.funcName()
