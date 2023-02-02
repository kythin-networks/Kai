require('dotenv').config();

module.exports = {
	name: 'guildMemberRemove',
	once: false,
	execute(mem) {
		const channel = mem.client.channels.cache.get(process.env.W_ID);
		channel.send(`${mem} has left the server.`);
	},
};