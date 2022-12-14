const aoijs = require("aoi.js")
const { token } = require("./config.json");
const { prefix } = require("./config.json");

const bot = new aoijs.AoiClient({
    token: token,
    prefix: prefix,
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.readyCommand({
    channel: "$randomChannelID",
    code: `
    $createApplicationCommand[global;avatar;Shows your avatar;true]
    $createApplicationCommand[global;ping;Bot replies with pong and current ms;true]
    $createApplicationCommand[global;invite;Bot replies with a invite link for the bot;true]
    $createApplicationCommand[global;bot-info;Bot replies with infos about the bot;true]
    $createApplicationCommand[global;server-info;Bot replies with infos about the server;true]
    $createApplicationCommand[global;user-info;Bot replies with infos about the mentioned user;true]
    $createApplicationCommand[global;help;Bot replies with all bot commands;true]
    $createApplicationCommand[global;gnuslashlinux;Bot replies with gnu/linux copy pasta;true]
    $createApplicationCommand[global;gnuslashlinux-uwu;Bot replies with gnu/linux uwu copy pasta;true]
    $createApplicationCommand[global;linux-meme;Bot replies with linux meme;true]
    $createApplicationCommand[global;meme;Bot replies with random meme from r/dankmemes;true]
    $createApplicationCommand[global;programming-meme;Bot replies with random programming meme form r/programmingmemes;true]
    $createApplicationCommand[global;wallpaper;Bot replies with random wallpaper form r/wallpapers;true]
    $createApplicationCommand[global;distro-chooser;The bot decides which distribution you should switch to next;true]
    $log[$userTag[$clientID] finished creating slash commands!]`
})