const Discord = require('discord.js');

const client = new Discord.Client();

var wyniki = ["Nie i...","Nie...","Nie, ale...","Tak, ale...","Tak...","Tak i..."];

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.OHETEasy') {
        var rzut1 = Math.floor((Math.random()*100))%6;
        var rzut2 = Math.floor((Math.random()*100))%6;
        var tekst = "\nTwoje rzuty: \"" + wyniki[rzut1] + "\" oraz \"" + wyniki[rzut2] + "\"\n";
        if(rzut1 > rzut2) {
            tekst += "Rezultat: \"" + wyniki[rzut1] + "\"";
        }
        else {
            tekst += "Rezultat: \"" + wyniki[rzut2] + "\"";
        }
        message.reply(tekst);
    }
    else if(message.content === '.OHETMedium') {
        var rzut = Math.floor((Math.random()*100))%6;
        var tekst = "\nRezultat: \"" + wyniki[rzut]+ "\"";
        message.reply(tekst);
    }
    else if(message.content === '.OHETHard') {
        var rzut1 = Math.floor((Math.random()*100))%6;
        var rzut2 = Math.floor((Math.random()*100))%6;
        var tekst = "\nTwoje rzuty: \"" + wyniki[rzut1] + "\" oraz \"" + wyniki[rzut2] + "\"\n";
        if(rzut1 > rzut2) {
            tekst += "Rezultat: \"" + wyniki[rzut2] + "\"";
        }
        else {
            tekst += "Rezultat: \"" + wyniki[rzut1] + "\"";
        }
        message.reply(tekst);
    }
});

client.login(process.env.BOT_TOKEN);
