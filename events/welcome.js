require('dotenv').config();

module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(mem) {
		const user = mem.fetch()
		const channel = mem.client.channels.cache.get(process.env.W_ID);
		channel.send(`${mem} has joined the server!`);
	},
};