let uuid = 0;

export default {
	beforeCreate() {
		this.uuid = `uuid-${uuid.toString()}`;
		uuid += 1;
	},
};