const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const Jimp = require("jimp");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./profile.sqlite');
const child_process = require('child_process')
bot.commands = new Discord.Collection();
console.log(`logging in`)
const config = require('../config/config.json')
const prefix = config.prefix

const devs = config.devs



   bot.on("message", message => {
    if (message.content === ".membercount") {
      if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
      const memberc = new Discord.RichEmbed()
      .addField('Members:', `${message.guild.memberCount}`)
 message.channel.sendEmbed(memberc)
    }})

const p = {}
bot.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "."
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return;
    p[message.guild.id].prefix = newPrefix
} 


});
bot.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
        let pages = [`
        /$$$$$$$  /$$                     /$$       /$$                   /$$    
        | $$__  $$| $$                    | $$      | $$                  | $$    
        | $$  \ $$| $$  /$$$$$$   /$$$$$$$| $$   /$$| $$$$$$$   /$$$$$$  /$$$$$$  
        | $$$$$$$ | $$ |____  $$ /$$_____/| $$  /$$/| $$__  $$ /$$__  $$|_  $$_/  
        | $$__  $$| $$  /$$$$$$$| $$      | $$$$$$/ | $$  \ $$| $$  \ $$  | $$    
        | $$  \ $$| $$ /$$__  $$| $$      | $$_  $$ | $$  | $$| $$  | $$  | $$ /$$
        | $$$$$$$/| $$|  $$$$$$$|  $$$$$$$| $$ \  $$| $$$$$$$/|  $$$$$$/  |  $$$$/
        |_______/ |__/ \_______/ \_______/|__/  \__/|_______/  \______/    \___/                                                                        
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    :earth_africa: ~~The Public Commands~~ :earth_africa:
    
    :fire: __Action Commands:__
    ❯ ${prefix}new → create ticket for you (need support-team role)
    ❯ ${prefix}close → close the ticket
    ❯ ${prefix}slap → slap someone
    ❯ ${prefix}hug → hug someone
    ❯ ${prefix}tickle → tickle someone
    ❯ ${prefix}poke → poke someone
    ❯ ${prefix}cuddle → cuddle someone
    ❯ ${prefix}pat → cuddle someone
    ❯ ${prefix}afk → To make in afk status
    :video_game: __Game Commands:__
    ❯ ${prefix}xo → xo game
    ❯ ${prefix}8ball → Ask magic 8ball something
    ❯ ${prefix}rps → Paper scissors game
    ❯ ${prefix}math → Math game
    ❯ ${prefix}points → To View Your Games Points
    ❯ ${prefix}top → To View The Games Top Points
    ❯ ${prefix}pubg → Pubg Questions Game
    ❯ ${prefix}minecraft → Minecraft Questions Game
    ❯ ${prefix}hack → To Hack Someone {Just A Joke}
    :globe_with_meridians: __General Commands:__
    ❯ ${prefix}avatar → Shows yours or the user avatar
    ❯ ${prefix}invite → Invite BlackBot To Your Server
    ❯ ${prefix}membercount → Shows membercount in your server
    ❯ ${prefix}support → Dah It's support!?
    ❯ ${prefix}td → Get the date in nice looking way!
    ❯ ${prefix}topinvites → To View The TopInvites List
    ❯ ${prefix}colors → View the colors menu
    ❯ ${prefix}mcskin → Shows Minecraft Skin With The Minecraft Name
    ❯ ${prefix}allbots → Shows All Server Bots
    ❯ ${prefix}tag → To Decoration The Words You Wrote
    :information_source: __Info Commands:__
    ❯ ${prefix}ping → Shows the bot ping.
    ❯ ${prefix}botinfo → Shows informations about the bot.
    ❯ ${prefix}server → Shows informations about the server.
    ❯ ${prefix}userinfo → Shows informations about the user.
    :high_brightness: Ulti Commands:
    ❯ ${prefix}short → Shorten the url provided
    
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    Click On ▶ To Go Administor Side
       `
    ,`
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    :key:  ~~Moderator Commands~~ :key: 
    
    :globe_with_meridians: __General Commands:__
    ❯ ${prefix}options → To View The Bot Options
    ❯ ${prefix}bans → Shows a bans size
    ❯ ${prefix}ban → To ban a member **Permanently**
    ❯ ${prefix}allunban → **To Unban All Members**
    ❯ ${prefix}role → To give someone a role (you can use >role all to give everyone the role of your choice)
    ❯ ${prefix}-role → To Pull the rank of a particular person (you can use >-role all to Pull everyone the rank of your choice)
    ❯ ${prefix}temp on → To Turn on the temporary rooms 
    ❯ ${prefix}temp off → To Turn off the temporary rooms 
    ❯ ${prefix}tempban → To ban a member **Temporary**
    ❯ ${prefix}mute → To mute a member **Permanently**
    ❯ ${prefix}tempmute → To mute a member **Temporary**
    ❯ ${prefix}kick → To kick a member
    ❯ ${prefix}unban → Unban member by id
    ❯ ${prefix}unmute → Unmutes a member
    ❯ ${prefix}banslist → Banned Members List
    ❯ ${prefix}warn → Warns a member
    ❯ ${prefix}setSug → Set the suggest channel
    ❯ ${prefix}setReport → Set the report channel
    ❯ ${prefix}setLog → Set the log channel
    ❯ ${prefix}setMedia → Set the Media channel
    ❯ ${prefix}setSay → Set the say command
    ❯ ${prefix}figlet → Transform normal text to figlet
    ❯ ${prefix}syt → Search Anything In Youtube
    ❯ ${prefix}anime → Search Anime In MyAnimeList
    ❯ ${prefix}setReply → Set the autoreply command (to set 3 autoreplys type >2setReply , >3setReply)
    ❯ ${prefix}toggleEmbed → To Enable Or Disable The EmbedSay Command
    ❯ ${prefix}toggleLog → To Enable The Log
    ❯ ${prefix}setTime → Create Hour Room 
    ❯ ${prefix}setDate → Create Date Room 
    ❯ ${prefix}setDays → Create Day Room 
    ❯ ${prefix}setCount → Member Count Room 
    ❯ ${prefix}prune → To clear the chat 
    ❯ ${prefix}setVoice → Create Voice Online Room
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    Click On ▶ To Go To Bot Info
       `,`
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    :closed_lock_with_key: ~~Adminstrator Commands~~ :closed_lock_with_key:
    ❯ ${prefix}setWelcomer → To set the welcome channel
    ❯ ${prefix}setLeave → To set the leave msg 
    ❯ ${prefix}toggleWelcome → To Turn On , Off The Welcomer
    ❯ ${prefix}toggleInvitedby → To Turn On , Off Invited By
    ❯ ${prefix}setRole → To Set The Reaction Role And Send An Reaction Role Message
    ❯ ${prefix}toggleLeave → To Turn On , Off The Leave Msg
    ❯ ${prefix}toggleLink → To Turn On , Off Get Invite Link Cmd
    ❯ ${prefix}autorole → autorole options **(to set the role type >autorole set rolename and to turn on the autorole type >autorole toggle)**
    ❯ ${prefix}autoreply1 on → To Turn On The AutoReply 1 
    ❯ ${prefix}autoreply2 on → To Turn On The AutoReply 2
    ❯ ${prefix}autoreply3 on → To Turn On The AutoReply 3
    ❯ ${prefix}autoreply1 off → To Turn Off The AutoReply 1
    ❯ ${prefix}autoreply2 off → To Turn Off The AutoReply 2
    ❯ ${prefix}autoreply3 off → To Turn Off The AutoReply 3
    ❯ ${prefix}setRainbow → To Set The Rainbow Code To Your Server
    :shield: __Guard Commands:__
    ❯ ${prefix}antispread on → To Turn On The Antispread (Anti Share Links)
    ❯ ${prefix}antispread off → To Turn Off The Antispread (Anti Share Links)
    ❯ ${prefix}settings limtskick → To Change The Kick In Sametime limit
    ❯ ${prefix}settings limtsban → To Change The Ban In Sametime limit
    ❯ ${prefix}settings limitsroleD → To Change The Delete Roles In Sametime limit
    ❯ ${prefix}settings limitsroleC → To Change The Create Roles In Sametime limit
    ❯ ${prefix}settings limitschannelD → To Change The Delete Channels In Sametime limit
    ❯ ${prefix}antihack off → To Turn Off The Anti Bot Hacking 
    ❯ ${prefix}antibots off → To Turn Off The Anti Bots This Will Kick Any Bot Join After The Turning On 
    ❯ ${prefix}antibots on → To Turn On The Anti Bots This Will Kick Any Bot Join After The Turning On
    ❯ ${prefix}antijoin on → To Turn On The Anti Fake Accounts
    ❯ ${prefix}antijoin off → To Turn Off The Anti Fake Accounts
    ❯ ${prefix}setJoin → To Set The Defualt Create Account Duration
        :barber: __Colors Commands:__
    ❯ ${prefix}deletecolors → delete 132 colors
    ❯ ${prefix}createcolors → create 132 colors
    ❯ ${prefix}color → To give the color you want
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    `,`

    
     ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    🎼 ~~Music Commmands~~ :musical_note: 
    ❯ ${prefix}play → To Play A Video From Youtube
    ❯ ${prefix}loop → To Turn On The Video Loop Everything That Ends Up Automatically Replay
    ❯ ${prefix}stop → To Stop The Video Are Playing
    ❯ ${prefix}queue → To View The Videos In The Queue List
    ❯ ${prefix}skip → To Stop The Video And Play The Next Video In The Queue
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
  
       `,`
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
    :busts_in_silhouette: ~~Social Commands:~~ :card_index: 
    ❯ ${prefix}credit → Shows your credit card balance [If you interact in writing, you get Credits]
    ❯ ${prefix}profile → To View Your Profile
    ❯ ${prefix}store → To View The Profile Background Store
    ❯ ${prefix}buy → To Buy A Background Profile
    ❯ ${prefix}rep → To Give Someone A Like
    ❯ ${prefix}transfer → To Transfer A Credits To Someone
    ❯ ${prefix}id → Shows the user ID card.
    ❯ ${prefix}rep → Give someone a reputation point!
    ❯ ${prefix}rank → Shows Your Text , Voice Rank
    ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   **__Soon I Will Translate The Bot To The Arabic Language__**
       `]
        let page = 1;
    
        let embed = new Discord.RichEmbed()
        .setColor('#310c52')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
    
        message.author.sendEmbed(embed).then(msg => {
    
            msg.react('◀').then( r => {
                msg.react('▶')
    
    
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
    
    
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
    
    
    
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
    });
    
    bot.on('message', message => {
         if (message.content === (prefix + "help")) {
         let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#310c52")
      .addField("Done" , ":white_check_mark: I've DMed you with my help list")
      message.channel.sendEmbed(embed);
        }
    });
    
    
    

   bot.on('message', message => {
	   if(message.content.startsWith(`${prefix}invite`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${bot.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?bot_id=" + `${bot.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.channel.send(":white_check_mark: | Check Your DM! تم الأرسال بلخاص")
		   message.author.send({embed})
	   }
   });


const adminprefix = config.adminsprefix
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    bot.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "gleave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  bot.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  bot.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
        bot.destroy();
        child_process.fork(__dirname + "/index.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

});

console.log(`Logged In`)

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  const profile = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'profile';").get();
  if (!profile['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE profile (UserID TEXT PRIMARY KEY, GuildID TEXT, xp INTEGER, lvl INTEGER, coins INTEGER, bg INTEGER, note TEXT, likes INTEGER, rep INTEGER, w0 INTEGER, w1 INTEGER, w2 INTEGER, w3 INTEGER, w4 INTEGER, w5 INTEGER);").run();
  }
  const rep = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'rep';").get();
  if (!rep['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE rep (UserID, LikedUser TEXT PRIMARY KEY, GuildID TEXT, Time TEXT);").run();
  }
  const liked = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'liked';").get();
  if (!liked['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE liked (UserID, LikedUser TEXT PRIMARY KEY, GuildID TEXT, Time TEXT);").run();
  }

  const about = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'about';").get();
  if (!about['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE about (UserID TEXT PRIMARY KEY, career TEXT, age TEXT, club TEXT, model TEXT, study TEXT, future TEXT, life TEXT, words TEXT);").run();
  }

  
  bot.setInterval(() =>{
    let d = Date.now()
  
   let rep = sql.prepare(`SELECT * FROM rep`).all()
      if(!rep)return;
      for (var i = 0; i < rep.length ; i++){
        if(rep[i].Time < d){
          sql.prepare(`DELETE FROM rep WHERE UserID = '${rep[i].UserID}' AND Time = ${rep[i].Time}`).run();
          
        }
      }
  }, 5000)
  
});


function generateXp() {
  let min = 2
  let max = 7
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



bot.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type ==="dm") return;

let coinAmt = Math.floor(Math.random() * 3) + 1;
let baseAmt = Math.floor(Math.random() * 3) + 1;

  let profile = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()

  let sqlstr;

  if(!profile){
    sqlstr = `INSERT INTO profile (UserID, GuildID, xp, lvl, coins, bg, note, likes, rep, w0, w1, w2, w3, w4, w5) VALUES ('${message.author.id}', '${message.guild.id}', ${generateXp()}, '1', '0', '1', 'لايوجد', '0', '0', '1', '0', '0', '0', '0', '0')`
  }
  else if(coinAmt === baseAmt){
    let coins = profile.coins
    let xp = profile.xp
    sqlstr = `UPDATE profile SET coins = ${coins + coinAmt}, xp = ${xp + generateXp()} WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
  }
  else{
    let xp = profile.xp
    sqlstr = `UPDATE profile SET xp = ${xp + generateXp()} WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
    let curlvl = profile.lvl;
    let nxtLvl = profile.lvl * 1000;
    if(nxtLvl <= profile.xp){
      sqlstr = `UPDATE profile SET lvl = ${curlvl + 1} WHERE UserID = '${message.author.id}'`;
      sql.prepare(sqlstr).run();
      let lvlico = message.author.displayAvatarURL;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(lvlico)
    .setTitle("إرتقاء بالمستوى!")
    .setColor("#6E0A51")
    .addField("مستواك الحالي", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
  }
  sql.prepare(sqlstr).run();

let about = sql.prepare(`SELECT * FROM about WHERE UserID = '${message.author.id}'`).get()



  if(!about){
    sqlstr = `INSERT INTO about (UserID, career, age, club, model, study, future, life, words) VALUES ('${message.author.id}', '#منصبي', '#عمري', '#نادي', '#قدوتي', '#تخصصي', '#طموحي', '#حكمتي', '#خاطري')`
     sql.prepare(sqlstr).run();
  }


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  if (!message.content.startsWith(prefix)) return;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args, sql);


});


bot.login(config.token);
