const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Sends information about the user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user to retrieve info from')
				.setRequired(true))
		.setDMPermission(false),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const guild = interaction.guild;
		const u = await guild.members.fetch(target.id);
		await interaction.reply(`Avatar hash ${u.user.avatar} \n Display Name ${u.displayName} \n Joined server ${u.joinedAt}`);
	},
};