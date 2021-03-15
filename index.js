const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
client.on('ready', () => {
  console.log('Tô pronto chefia');
});
//KICKAR MEMBRO
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`**Canalha Kickado :relieved:(cuidado bobões)** ${user.tag}`);
          })
          .catch(err => {
            message.reply('**Não tenho permissão para kickar o canalha...**');
            console.error(err);
          });
        } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("**Mencione o canalha para ser kickado!**");
    }
  }})
  //EMBED

  //BANIR MEMBROnode .
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Fez merda!',
          })
          .then(() => {
            message.reply(`**Foi taxado bobão :relieved:!** ${user.tag}`);
          })
          .catch(err => {
            message.reply("**Não consigo taxar esse bobão**");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("**Você não mencionou o bobão pra ser Taxado!**");
    }
  }})
  
  //Dúvidas
  client.on('message', message => {
    if (message.content === '!comandos') {
      message.channel.send('**!criador, !loirinha, !cu, !patinho, !meet, !breck, !genteboa, !dawi, !nick, !master, !pain, !theusin, !afax, !sieg, !sevach, !erick, !kalt, !aipedro, !helcias, !sponjo, !leu, !levi, !shadow, !çal, !saitama, !uiik,  !taka, !genial, !pvp, !burro, !progay, !gay, !manto, !bot, !amigos, !grito, !comandos, !murabitan, !objetivo, !hinomurabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!criador') {
      message.channel.send('**Meu criador é o Nick Pereira.**');
    }
  });
  client.on('message', message => {
    if (message.content === '!cu') {
      message.channel.send('**Amigo de cu é rola**');
    }
  });
  client.on('message', message => {
    if (message.content === '!genial') {
      message.channel.send('**PEGA NO MEU PAU**');
    }
  });

  client.on('message', message => {
    if (message.content === '!pvp') {
      message.channel.send('**Afax, Sevach, Sponjo, Saitama, Sieg, Levi, Çal, Erick, Helcias, Master, Kalt e Nickzola**');
    }
  });
  client.on('message', message => {
    if (message.content === '!progay') {
      message.channel.send('**Sieg é um proplayer gay...**');
    }
  });
  client.on('message', message => {
    if (message.content === '!dawi') {
      message.channel.send('**Gente boa, membro da Murabitan**');
      
    }
  });
  client.on('message', message => {
    if (message.content === '!pain') {
      message.channel.send('**O negão do grupo e membro da Murabitan.**');
    }
  });
  client.on('message', message => {
    if (message.content === '!breck') {
      message.channel.send('**Nóia**');
    }
  });
  client.on('message', message => {
    if (message.content === '!genteboa') {
      message.channel.send('**Todo mundo é gente boa aqui meu chapa**');
    }
  });
  
  client.on('message', message => {
    if (message.content === '!nick') {
      message.channel.send('**Gente boa, meu criador, (melhorando no pvp) e membro do Taka-Squad**');
    }
  });
  
  client.on('message', message => {
    if (message.content === '!meet') {
      message.channel.send('**Sponjo é jogador profissional de Google Meet**');
    }
  });
  client.on('message', message => {
    if (message.content === '!master') {
      message.channel.send('**Gente boa, Pro no PvP, Criador do Server e membro do Taka-Squad**');
    }
  });
  
  client.on('message', message => {
    if (message.content === '!erick') {
      message.channel.send('**Gente boa e Pro no PvP, membro do Taka-Squad**');
    }
  });
  client.on('message', message => {
    if (message.content === '!kalt') {
      message.channel.send('**As vezes a canalhice é a melhor opção...**');
    }
  });
  client.on('message', message => {
    if (message.content === '!theusin') {
      message.channel.send('**Fundador da Murabitan e ruim no pvp :sunglasses:**');
    }
  });
  client.on('message', message => {
    if (message.content === '!çal') {
      message.channel.send('**Gente boa e Tryhard, membro do Taka-Squad**');
    }
  });
  client.on('message', message => {
    if (message.content === '!sevach') {
      message.channel.send('**Tryhard fedido e membro da Murabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!patinho') {
      message.channel.send('**"Eu não falo a lingua dos patos - QUACK QUACK"**');
    }
  });
  client.on('message', message => {
    if (message.content === '!afax') {
      message.channel.send('**A realidade em uma entidade sapien celestial. Afax Raça absoluta alem da consciência esse é o poder que beira a omnipotência. Afax o escravo da murabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!uiik') {
      message.channel.send('**Lindão e membro da Murabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!saitama') {
      message.channel.send('**Saitama um soco, membro da Murabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!aipedro') {
      message.channel.send('**Deus no pvp da 1.16 como diria o Sevach, e membro do Taka-Squad**');
    }
  });
  client.on('message', message => {
    if (message.content === '!shadow') {
      message.channel.send('**Solador de ADMs, Proplayer da versão Beta e membro da Murabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!helcias') {
      message.channel.send('**Gente boa, membro da Taka, mediano em ambas as versões**');
    }
  });
  client.on('message', message => {
    if (message.content === '!sponjo') {
      message.channel.send('**Gente boa, rei do humor e membro do Taka-Squad**');
    }
  });
  client.on('message', message => {
    if (message.content === '!sieg') {
      message.channel.send('**Gente boa, tryhard, Pro no PvP e membro da Murabitan**');
    }
  });
  client.on('message', message => {
    if (message.content === '!leu') {
      message.channel.send('**Gente boa e membro do Taka-Squad**');
    }
  });
  client.on('message', message => {
    if (message.content === '!levi') {
      message.channel.send('**Pinto e membro da Murabitan**');
    }
  });
  
  client.on('message', message => {
    if (message.content === '!burro') {
      message.channel.send('**aiPedro, Sieg**');
    }
  });
  client.on('message', message => {
    if (message.content === '!loirinha') {
      message.channel.send('**Ih qual foi meu chapa tá intressado? Talarico morre cedo!**');
    }
  });
  client.on('message', message => {
    if (message.content === '!gay') {
      message.channel.send('**Levi, Sieg**');
    }
  });
  client.on('message', message => {
    if (message.content === '!bot') {
      message.channel.send('**Olá eu sou o Taka-Bot, fui criado com intuito de ajudar no servidor do Taka-Squad**');
    }
  });
  client.on('message', message => {
    if (message.content === '!taka') {
      message.channel.send('**Nickzola, Master, Erick, Sponjo, Leo, Çal, Kalt, aiPedro e Helcias**');
    }
  });
  client.on('message', message => {
    if (message.content === '!amigos') {
      message.channel.send('**Sieg, Uiik, Shadow, Afax, Pain, Theusin, Sevach, Saitama, Dawi, Levi.**');
    }
  });
  client.on('message', message => {
    if (message.content === '!hinomurabitan') {
      message.channel.send('Da escuridão surgem simbolos azuis. Taxados estão na sua aldeia. Criminosos colecionando aldeões. Se ficar no nosso caminho, não tem quem te ajude. Os taxados mais procurados do mundo. **MURABITAN! MURABITAN!**');}
    });
  client.on('message', message => {
    if (message.content === '!objetivo') {
      message.channel.send('**Somos um esquadrão classe A que foi recrutado pela Murabitan com intuito de ajuda-los e reforça-los em seus objetivos.**');
    }
  });
  client.on('message', message => {
    if (message.content === '!murabitan') {
      message.channel.send('**Sieg, Uiik, Afax, Theusin, Dawi, PainKing, Shadow, Sevach, Macone, Levi, Saitama e ???**');
    }
  });
  client.on('message', message => {
  if (message.content === '!grito') {
    message.channel.send('**AAAAAAAAAAAAAA**');
  }
});
client.on('message', message => {
  if (message.content === '!manto') {
    message.channel.send('http://minecraft.novaskin.me/skin/4822974499');
  }
});
  client.on('message', message =>{
    if (message.content === '!patrocinio'){
      message.channel.send('**Murabitan**')
    }
  })
  client.on("ready", () => {
    let activities = [
      `${config.prefix}comandos para saber mais sobre mim.`,
      `${client.guilds.cache.size} mortes na conta!`,
      `${client.channels.cache.size} canalhices feitas!`,
      `${client.users.cache.size}000º Vez que deixamos ovelhas orfãs!`
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
    client.user
      .setStatus("Vendo as vezes que peguei sua mãe")
    });
    client.login('ODE2MzcxMjU4MDQ0MzE3NzA4.YD5--w.sFjDJlgbZp6nAZep-GTQrklsK7M');