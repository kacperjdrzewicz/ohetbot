const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ".";

var wyniki = ["Nie i...","Nie...","Nie, ale...","Tak, ale...","Tak...","Tak i..."];
var reakcje = ["nienawiść, chęć absolutnej anihilacji", "wrogość, intryganctwo, arogancja", "podejrzliwość, nieufność", "neutralność", "zainteresowanie, chęć poznania", "fascynacja, przyjaźń", "absolutne uwielbienie, miłość"];
var pulapki = [];
pulapki[0] = ["petryfikacja ciała", "mutacja ciała", "zmiana płci", "oszpecenie twarzy lub całego ciała", "drastyczne zmniejszenie ciała", "drastyczne powiększenie ciała"];
pulapki[1] = ["zatopienie", "zasypanie piaskiem", "trująca chmura", "ożywiony posąg", "żyjące i głodne ściany", "halucynogenne zarodniki" ];
pulapki[2] = ["dekapitujący dysk", "jama z kwasem", "alarm", "ściana włóczni", "otwarcie niebezpiecznego grobu", "ogłuszający wrzask"];
pulapki[3] = ["przemiana w roślinę", "przemiana w ostatnio dotykaną istotę", "przemiana w złotego golema", "klątwa wampiryzmu", "klątwa likantropii", "przemiana w dzikie zwierzę"];
pulapki[4] = ["spadające kraty", "miażdżące ściany", "eksplozja", "latające ostrza", "gotujący się olej", "wytworzenie próżni"];
pulapki[5] = ["pełzające pod skórą robactwo", "obłęd", "pasożyt mózgu", "choroba oczu", "hemofilia", "pożarcie duszy"];

var stwory = [];
stwory[4] = ["Goblin(4)", "Kobold(4)", "Leśny duszek(4)"];
stwory[5] = ["Wielki nietoperz(5)", "Ognisty robak(5)", ];
stwory[6] = ["Wielki szczur(6)", "Szkielet(6)"];
stwory[7] = ["Szaleniec/kultysta(7)", "Diablik(7)"];
stwory[8] = ["Ork(8)", "Wielki skorpion(8)", "Upiór(8)"];
stwory[9] = ["Zombie(9)", "Centaur(9)", "Minotaur(9)"];
stwory[10] = ["Ghoul(10)", "Gargulec(10)", "Ogromny niedźwiedź(10)", "Troll(10)"];
stwory[11] = ["Harpia(11)", "Zjawa(11)", "Galaretowata kostka(11)", "Syrena(11)"];
stwory[12] = ["Ogr(12)", "Wilkołak(12)", "Wampir(12)"];
stwory[13] = ["Demoniczny sługa(13)", "Chimera(13)", "Wywerna(13)"];
stwory[14] = ["Bazyliszek(14)", "Sukub/Inkub(14)", "Mumia(14)"];
stwory[15] = ["Licz(15)", "Banshee(15)", "Piekielny ogar(15)", "Cyklop(15)"];
stwory[16] = ["Dżinn(16)", "Demon(16)"];
stwory[17] = ["Żywiołak(17)", "Gryf(17)"];
stwory[18] = ["Ifrit(18)", "Mantykora(18)"];
stwory[19] = ["Hydra(19)", "Pegaz(19)"];
stwory[20] = ["Meduza(20)", "Pazuzu(20)"];
stwory[21] = ["Tytan(21)", "Kraken(21)"];
stwory[22] = ["Smok(22)"];
stwory[23] = ["Demogorgon(23)"];

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ohethelp') {
        const embed = new Discord.RichEmbed()
            .setAuthor("OHETBot - Komendy", client.user.avatarURL)
            .setColor("#0000aa")
            .addField(".OHETE", "Łatwy rzut.")
            .addField(".OHETM", "Przeciętny rzut.")
            .addField(".OHETH", "Trudny rzut.")
            .addField(".OHETR", "Tabela reakcji przeciwników.")
            .addField(".OHETT", "Tabela pułapek.")
            .addField(".OHETRM Koncepcja Ilość[opcjonalne]", "Spotkanie losowe.\nKoncepcja - Suma koncepcji druzyny\nIlość - Ilość członków drużyny.[Standardowo = 1]")
            .addField(".OHETHelp", "Lista komend.")
            .setFooter("© GaniGhost", "https://cdn.discordapp.com/avatars/182159433030303744/1dc5d660c12cf28deb38cf144a3a6dfc.png")
            .setTimestamp();
        message.channel.send({embed});
    }
    else if (command === 'ohete') { //Łatwy Rzut
        var rzut1 = Math.floor((Math.random()*100))%6;
        var rzut2 = Math.floor((Math.random()*100))%6;
        var tekst = "Twoje rzuty: *" + wyniki[rzut1] + "* oraz *" + wyniki[rzut2] + "*\n";
        if(rzut1 > rzut2) {
            tekst += "Rezultat: ***" + wyniki[rzut1] + "***";
        }
        else {
            tekst += "Rezultat: ***" + wyniki[rzut2] + "***";
        }
        const embed = new Discord.RichEmbed()
            .setAuthor("Łatwy rzut!", client.user.avatarURL)
            .setColor("#00aa00")
            .setDescription(tekst);
        message.channel.send({embed});
    }
    else if(command === 'ohetm') { //Przeciętny Rzut
        var rzut = Math.floor((Math.random()*100))%6;
        var tekst = "Rezultat: ***" + wyniki[rzut] + "***";
        const embed = new Discord.RichEmbed()
            .setAuthor("Przeciętny rzut!", client.user.avatarURL)
            .setColor("#ffaa00")
            .setDescription(tekst);
        message.channel.send({embed});
    }
    else if(command === 'oheth') { //Trudny Rzut
        var rzut1 = Math.floor((Math.random()*100))%6;
        var rzut2 = Math.floor((Math.random()*100))%6;
        var tekst = "Twoje rzuty: *" + wyniki[rzut1] + "* oraz *" + wyniki[rzut2] + "*\n";
        if(rzut1 > rzut2) {
            tekst += "Rezultat: ***" + wyniki[rzut2] + "***";
        }
        else {
            tekst += "Rezultat: ***" + wyniki[rzut1] + "***";
        }
        const embed = new Discord.RichEmbed()
            .setAuthor("Trudny rzut!", client.user.avatarURL)
            .setColor("#aa0000")
            .setDescription(tekst);
        message.channel.send({embed});
    }
    else if(command === 'ohetr') { //Tabela Reakcji
        var rzut1 = (Math.floor((Math.random()*100))%6) + 1;
        var rzut2 = (Math.floor((Math.random()*100))%6) + 1;
        var tekst = "Suma rzutów: *" + (rzut1+rzut2) + "[" + rzut1 + " + " + rzut2 + "]*\n";
        switch(rzut1+rzut2) {
            case 2:
                tekst += "Rezultat: ***" + reakcje[0] + "***";
            break;
            case 3:
                tekst += "Rezultat: ***" + reakcje[1] + "***";
            break;
            case 4:
            case 5:
                tekst += "Rezultat: ***" + reakcje[2] + "***";
            break;
            case 6:
            case 7:
            case 8:
                tekst += "Rezultat: ***" + reakcje[3] + "***";
            break;
            case 9:
            case 10:
                tekst += "Rezultat: ***" + reakcje[4] + "***";
            break;
            case 11:
                tekst += "Rezultat: ***" + reakcje[5] + "***";
            break;
            case 12:
                tekst += "Rezultat: ***" + reakcje[6] + "***";
        }
        const embed = new Discord.RichEmbed()
            .setAuthor("Tabela reakcji przeciwników.", client.user.avatarURL)
            .setColor("#0000aa")
            .setDescription(tekst);
        message.channel.send({embed});
    }
    else if(command === 'ohett') { //Tabela Pułapek
        var rzut1 = Math.floor((Math.random()*100))%6;
        var rzut2 = Math.floor((Math.random()*100))%6;
        var tekst = "Wiersz: *" + (rzut1+1) + "*, Kolumna: *" + (rzut2+1) + "*\n";
        tekst += "Rezultat: ***" + pulapki[rzut1][rzut2] + "***";
        const embed = new Discord.RichEmbed()
        .setAuthor("Tabela pułapek.", client.user.avatarURL)
            .setColor("#0000aa")
            .setDescription(tekst);
        message.channel.send({embed});
    }
    else if(command === 'ohetrm') { //Losowe Spotkanie arg[0] - koncept, arg[1] = 1 - ilosc
        var koncept = args[0];
        var ilosc = (typeof args[1] === 'undefined') ? 1 : Number(args[1]);
        var srednia = Math.floor(koncept/ilosc);
        var wartosc = [];
        var sumaWartosci = 0;

        for(i = srednia; i >= 4; i--) {
            if(i === srednia) wartosc[i] = 13;
            else if(srednia-5 <= i)
                wartosc[i] = 10;
            else {
                var zmienna = 10-((srednia-5-i)*2);
                wartosc[i] = (zmienna < 1) ? 1 : zmienna;
            }
        }

        for(i = srednia; i <= 23; i++) {
            if(i === srednia) wartosc[i] = 13;
            if(srednia+3 >= i)
                wartosc[i] = 10;
            else {
                var zmienna = 10-((i-srednia+3)*2);
                wartosc[i] = (zmienna < 1) ? 1 : zmienna;
            }
        }

        for(i = 4; i < 24; i++) {
            sumaWartosci += wartosc[i];
            wartosc[i] = sumaWartosci;
        }
        var rzut1 = Math.floor((Math.random()*1000)%sumaWartosci) + 1;
        var koncepcjaPotwora;

        for(i = 4; i < 24; i++) {
            if(rzut1 <= wartosc[i]) {
                koncepcjaPotwora = i;
                break;
            }
        }
        var rzut2 = Math.floor((Math.random()*10)%stwory[koncepcjaPotwora].length);

        var rzut3 = (Math.floor((Math.random()*100))%6) + 1;

        var iloscPotworow;

        if(srednia - koncepcjaPotwora > 5)
            iloscPotworow = Math.floor(rzut3/2 + 2 + ilosc*2);
        else if(srednia - koncepcjaPotwora > 0)
            iloscPotworow = Math.floor(rzut3/2 + 1 + ilosc);
        else if(srednia - koncepcjaPotwora === 0)
            iloscPotworow = Math.floor(rzut3/2 + ilosc);
        else if(srednia - koncepcjaPotwora >= -3)
            iloscPotworow = Math.floor(rzut3/3 + ilosc);
        else
            iloscPotworow = 1;

        var tekst = "Rezultat: ***" + iloscPotworow + "x " + stwory[koncepcjaPotwora][rzut2] + "***";
        const embed = new Discord.RichEmbed()
            .setAuthor("Spotkanie losowe.", client.user.avatarURL)
            .setColor("#0000aa")
            .setDescription(tekst);
        message.channel.send({embed});
    }
});

client.login(process.env.BOT_TOKEN);
