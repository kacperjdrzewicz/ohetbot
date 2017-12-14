const Discord = require('discord.js');

const client = new Discord.Client();

var wyniki = ["Nie i...","Nie...","Nie, ale...","Tak, ale...","Tak...","Tak i..."];

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.OHETE') { //Łatwy Rzut
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
    else if(message.content === '.OHETM') { //Przeciętny Rzut
        var rzut = Math.floor((Math.random()*100))%6;
        var tekst = "\nRezultat: \"" + wyniki[rzut]+ "\"";
        message.reply(tekst);
    }
    else if(message.content === '.OHETH') { //Trudny Rzut
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
    else if(message.content === '.OHETR') { //Tabela Reakcji
        var rzut1 = (Math.floor((Math.random()*100))%6) + 1;
        var rzut2 = (Math.floor((Math.random()*100))%6) + 1;
        var tekst = "\nSuma rzutów: " + (rzut1+rzut2) + " (" + rzut1 + " + " + rzut2 + ")\n";
        switch(rzut1+rzut2) {
            case 2:
                tekst += "Rezultat: " + reakcje[0];
            break;
            case 3:
                tekst += "Rezultat: " + reakcje[1];
            break;
            case 4:
            case 5:
                tekst += "Rezultat: " + reakcje[2];
            break;
            case 6:
            case 7:
            case 8:
                tekst += "Rezultat: " + reakcje[3];
            break;
            case 9:
            case 10:
                tekst += "Rezultat: " + reakcje[4];
            break;
            case 11:
                tekst += "Rezultat: " + reakcje[5];
            break;
            case 12:
                tekst += "Rezultat: " + reakcje[6];
        }
        message.reply(tekst);
    }
    else if(message.content === '.OHETT') { //Tabela Pułapek
        var rzut1 = Math.floor((Math.random()*100))%6;
        var rzut2 = Math.floor((Math.random()*100))%6;
        var tekst = "\nWiersz: " + (rzut1+1) + ", Kolumna: " + (rzut2+1) + "\n";
        tekst += "Rezultat: " + pulapki[rzut1][rzut2];
        message.reply(tekst);
    }
});

client.login(process.env.BOT_TOKEN);
