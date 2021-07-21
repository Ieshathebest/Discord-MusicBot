module.exports = {
  Admins: ["277060454549815296", "391944863974948866"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "ry!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/XTbSNv8SE7", //Support Server Link
  Token: process.env.Token || "ODA3NjE5OTA0OTExMDQ4NzA0.YB6opg._FvnSYT-XpesKBoRMXJYW5ybF68", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "807619904911048704", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "21ckOzrwjC6GJq4yiImz3u6nzAhygsRt", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "rytrosecret", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "node-1.adkynet.net",
    port: 1111,
    pass: "youshallnotpass",
},

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};

