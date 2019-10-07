const Discord = require("discord.js");

const config = require('./config.json');
const bot = new Discord.Client({
	disableEveryone: true
});


bot.on("ready", async() => {
	console.log(`${bot.user.username} is online`);

	bot.user.setActivity("I am Online!");
});





bot.on("message", async message => {



	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if (cmd === `${prefix}serverinfo`) {

		let sicon = message.guild.iconURL;
		let serverembed = new Discord.RichEmbed()
			.setDescription("Server Info")
			.setColor("#15f153")
			.setThumbnail(sicon)
			.addField("Server Name", message.guild.name)
			.addField("Created On", message.guild.createdAt)
			.addField("You Joined", message.member.joinedAt)
			.addField("Total Member(s)", message.guild.memberCount);

		return message.channel.send(serverembed);
	}


	if (cmd === `${prefix}botinfo`) {

		let bicon = bot.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
			.setDescription("Bot Information")
			.setColor("#15f153")
			.setThumbnail(bicon)
			.addField("Bot Name", bot.user.username)
			.addField("Created On", bot.user.createdAt);



		return message.channel.send(botembed);
	}

	if (cmd === `${prefix}report`) {

		if (!rUser) return message.channel.send("Couldn't find user.");
		let reason = args.join(" ").slice(22);
		let rUser = message.guild.member(message.mentions.users.first() || message.guild
			.members.get(args[0]));

		let reportEmbed = new Discord.RichEmbed()
			.setDescription("reports")
			.setColor("#15f153")
			.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
			.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
			.addField("Time", message.createdAt)
			.addField("Reason", reason);

		message.channel.send(reportEmbed);
		return;
	}


	if (cmd === `${prefix}strike`) {


		let aUser = message.guild.member(message.mentions.users.first() || message.guild
			.members.get(args[0]));

		if (!aUser) return message.channel.send("Couldn't find user.");
		if (message.content.startsWith("add")) {

		}



		let strikeEmbed = new Discord.RichEmbed()
			.setDescription("Strike(s)", )
			.setColor("#15f153")

		message.channel.send(strikeEmbed);
		return;
	}

	function RPS(x,y) {
		if (x == y) {
			return "It was a draw";
		}
		if (y + 1 == x) {
			return "You Lose!";
		}
		if (x + 1 == y) {
			return "You Win!";
		}
		if (x + 2 == y) {
			return "You Lose!";
		}
		if (y + 2 == x) {
			return "You Win!";
		}
	}

	if (cmd === `${prefix}rps`) {
		message.channel.send("Lets play rock paper Scissors!\n 1 = Rock\n 2 = Paper\n 3 = Scissors ");
		var rpsrnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		if (rpsrnumber == 1) {
			var rpss = "Rock";
		} else if (rpsrnumber == 2) {
			var rpss = "Paper";
		}else {
			var rpss = "Scissors";
		}
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 7000 });
		collector.on('collect', message => {
            if (message.content == "1") {
                message.channel.send("You answered Rock");
								var rpsanswer = 1;
								message.channel.send(`I chose ${rpss}`);
								var x = RPS(rpsrnumber,rpsanswer);
								message.channel.send(x);
								return;
            } else if (message.content == "2") {
                message.channel.send("You answered Paper");
								var rpsanswer = 2;
								message.channel.send(`I chose ${rpss}`);
								var x = RPS(rpsrnumber,rpsanswer);
								message.channel.send(x);
								return;
            } else if (message.content == "3") {
							message.channel.send("You answered Scissors");
							var rpsanswer = 3;
							message.channel.send(`I chose ${rpss}`);
							var x = RPS(rpsrnumber,rpsanswer);
							message.channel.send(x);
							return;
						} else {
							message.channel.send("Invalid answer");
							return;
						}
		})





	}

});
bot.login(config.token);
