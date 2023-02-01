module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(guildMember) {
		console.log(`${guildMember}`);
	},
};