
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dn");
  var oyun = [
    "Roliz",
    "Yenilendi!",
    "Yeni Özellikler!",
    "Made By FunsT",
    "!medya | 🎉",
    "Otorol Geldi!",
    "Sayaç Eklendi!",
    "Reklam Engel Geliştirildi!"
    
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "https://www.twitch.tv/theefunst");
  }, 2 * 2500);
};
