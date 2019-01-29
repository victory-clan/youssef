const Discord = require("discord.js");
const client = new Discord.Client();
const iKhaled = ['402838820262772748','402838820262772748'];


  client.on('message', Khaled => {
    var argresult = Khaled.content.split(` `).slice(1).join(' ');
      if (!iKhaled.includes(Khaled.author.id)) return;
  
      if (Khaled.content.startsWith('!wt')) {
        client.user.setActivity(argresult, {type:'WATCHING'});
          client.user.setStatus("dnd")
          Khaled.channel.send(` ** Done. :white_check_mark: ** `)
      } else //Khaled 
      if (Khaled.content.startsWith('!ls')) {//Khaled
          client.user.setActivity(argresult , {type:'LISTENING'});
            client.user.setStatus("idle")
            Khaled.channel.send(` ** Done. :white_check_mark: ** `)
      } else //Khaled
          if (Khaled.content.startsWith('!st')) {
            client.user.setGame(argresult, "https://www.twitch.tv/ikhaled321");
              client.user.setStatus("dnd")
              Khaled.channel.send(` ** Done. :white_check_mark: ** `)//Khaled
      } else 
      if (Khaled.content.startsWith('!pl')) {
        client.user.setActivity(argresult , {type:'PLAYING'});//Khaled
         client.user.setStatus("idle")
         Khaled.channel.send(` ** Done. :white_check_mark: ** `)
       }
  
  });

client.login(process.env.BOT_TOKEN);
