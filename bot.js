const Discord = require('discord.js');

const client = new Discord.Client();

var wyniki = ["Nie i...","Nie...","Nie, ale...","Tak, ale...","Tak...","Tak i..."];
var reakcje = ["nienawiść, chęć absolutnej anihilacji", "wrogość, intryganctwo, arogancja", "podejrzliwość, nieufność", "neutralność", "zainteresowanie, chęć poznania", "fascynacja, przyjaźń", "absolutne uwielbienie, miłość"];
var pulapki = [];
pulapki[0] = ["petryfikacja ciała", "mutacja ciała", "zmiana płci", "oszpecenie twarzy lub całego ciała", "drastyczne zmniejszenie ciała", "drastyczne powiększenie ciała"];
pulapki[1] = ["zatopienie", "zasypanie piaskiem", "trująca chmura", "ożywiony posąg", "żyjące i głodne ściany", "halucynogenne zarodniki" ];
pulapki[2] = ["dekapitujący dysk", "jama z kwasem", "alarm", "ściana włóczni", "otwarcie niebezpiecznego grobu", "ogłuszający wrzask"];
pulapki[3] = ["przemiana w roślinę", "przemiana w ostatnio dotykaną istotę", "przemiana w złotego golema", "klątwa wampiryzmu", "klątwa likantropii", "przemiana w dzikie zwierzę"];
pulapki[4] = ["spadające kraty", "miażdżące ściany", "eksplozja", "latające ostrza", "gotujący się olej", "wytworzenie próżni"];
pulapki[5] = ["pełzające pod skórą robactwo", "obłęd", "pasożyt mózgu", "choroba oczu", "hemofilia", "pożarcie duszy"];

var stwory = ["Goblin(4)", "Kobold(4)", "Leśny Duszek(4)", "Wielki Nietoperz(5)", "Ognisty Robak(5)", "Szkielet(6)", "Wielki Szczur(6)", "Wojownik(7)", "Barbarzyniec(7)", "Kultysta(7)", "Ork(8)", "Upiór(8)", "Zombie(9)", "Centaur(9)", "Troll(10)", "Harpia(11)", "Zjawy(11)", "Ogr(12)", "Wilkolak(12)", "Wampir(12)"];

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.OHETHelp') { //Pomoc
        var tekst = "Komendy:\n```\n.OHETE - Łatwy rzut\n.OHETM - Przeciętny rzut\n.OHETH - Trudny rzut\n.OHETR - Tabela reakcji\n.OHETT - Tabela pułapek\n.OHETRM - Spotkania losowe\n```";
        message.reply(tekst);
    }
    else if (message.content === '.OHETE') { //Łatwy Rzut
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
    else if(message.content === '.OHETRM') { //Losowe Spotkanie
        var rzut1 = Math.ceil(((Math.floor((Math.random()*100))%6) + 1)/2);
        var rzut2 = (Math.floor((Math.random()*100))%6) + 1
        var rzut3 = Math.floor((Math.random()*100))%20;
        var tekst = "\nLosowe spotkanie(Koncepcja): " + (rzut1+rzut2) + "x " + stwory[rzut3];
        message.reply(tekst);
    }
});

client.login(process.env.BOT_TOKEN);
