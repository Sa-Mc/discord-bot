/* Startup */

const Discord = require("discord.js");
const config = require("./resources/config.json")
const moment = require("moment");

var args = process.argv.slice(2);

const client = new Discord.Client();
client.login(config.token);

client.on("ready", () => {
  console.log(`Croatia Bot connected at ${moment().format("h:mm a")}.`);
});

/* Message Triggers */

const triggers1 = [
  "222739377724325888"
]

/* const triggers2 = [
  ""
] */

function react1(input) {
  input.react("🇭🇷");
}

/* function react2(input) {
  input.react("");
} */

/* React 1 */

client.on("message", (message) => {
  if (triggers1.some(triggers1 => message.author.id.toLowerCase().includes(triggers1))) {
    react1(message);
    if (args.includes("-d")) console.log(`[${moment().format("h:mm a")}] Reacted to a new message.`);
  }
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if (triggers1.some(triggers1 => newMessage.author.id.toLowerCase().includes(triggers1))) {
    react1(newMessage);
    if (args.includes("-d")) console.log(`[${moment().format("h:mm a")}] Reacted to edited message.`);
  }

  if (!triggers1.some(triggers1 => newMessage.author.id.toLowerCase().includes(triggers1))) {
    newMessage.clearReactions();
    if (args.includes("-d")) console.log(`[${moment().format("h:mm a")}] Removed reaction to edited message.`);
  }
})

/* React 2 

client.on("message", (message) => {
  if (triggers2.some(triggers2 => message.author.id.toLowerCase().includes(triggers2))) {
    react2(message);
    if (args.includes("-d")) console.log(`[${moment().format("h:mm a")}] Reacted to a new message.`);
  }
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if (triggers2.some(triggers2 => newMessage.author.id.toLowerCase().includes(triggers2))) {
    react2(newMessage);
    if (args.includes("-d")) console.log(`[${moment().format("h:mm a")}] Reacted to edited message.`);
  }

  if (!triggers2.some(triggers2 => newMessage.author.id.toLowerCase().includes(triggers2))) {
    newMessage.clearReactions();
    if (args.includes("-d")) console.log(`[${moment().format("h:mm a")}] Removed reaction to edited message.`);
  }
})

*/

/* Debug */ 

client.on("debug", (info) => {
  if (args.includes("-d")) console.log(info);
})