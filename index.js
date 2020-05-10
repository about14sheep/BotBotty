const Discord = require('discord.js');
const Shop = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const { prefix, token } = require('./config.json');

client.on('ready', _ => console.log('I am ready'));
client.on('message', message => {
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if(message.author.id === '215708443363901440'){
    message.channel.send('lol once again, no one cares billy.');

  } else if(message.content === prefix + 'gotem'){
    message.channel.send('ThAtS wHaT ShE sAId!!');
  }
  else if(message.content === `${prefix}get rekt`){
    message.channel.send('happy now billy?\ntrash')
  }
  else if (message.content === prefix + 'greet') {
    message.channel.send('Down here the floors are salt, the walls are salt, and the ceiling is salt. So go fuck-yourself.')
  }
  else if (message.content === prefix + 'nixon') {
    message.channel.send('NIXON IS FUCKING TRASH BROTHER DONT EVEN TYPE HIS NAME IN MY TERMINAL')
  }
  else if(message.content === prefix + 'what is the meaning of life?'){
    message.channel.send('forty-two')
  }
  else if (message.content === `${prefix}me`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  else if(message.author.username === 'Ezra') {
    let msg = repeatLikeALoser(message.content);
    const attachment = new Discord.MessageAttachment('./spongbob.jpg');
    message.channel.send(attachment);
    message.channel.send(`${msg}`)
  }
  else if(command === shop){
    Shop.buildShop();
  }
  else if(command === 'dd'){
    let arr = [...args];
    if(arr[0] === 'battle'){
      message.channel.send(`Player: ${ranNum(21)} hit for ${ranNum(13)} damge`)
    } else {
      getDDDate(arr, obj => {
        for(let key in obj){
          message.channel.send(`${key}:\n${obj[key]}`);
        }
      })
    }
  }
});

const ranNum = function(max){
  return Math.floor(Math.random() * Math.floor(max));
}

const repeatLikeALoser = function(str){
  let words = str.split(" ");
  let result = [];
  words.forEach(el => {
    let letters = el.split('');
    let newWord = [];
    for(let i = 0; i < letters.length; i++){
      if (ranNum(letters.length) % 2 === 0){
        newWord.push(letters[i].toUpperCase());
      } else {
        newWord.push(letters[i]).toLowerCase();
      }
    }
    result.push(newWord.join(''));
  });
  return result.join(' ');
}

const getDDDate = function(args, cb){
  let html = 'http://www.dnd5eapi.co/api';
  args.forEach(el => {
    html += `/${el}`
  });
  http.get(html, res => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
      error = new Error('Fucking request failed brother\n' + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)){
      error = new Error('Invalid Content dumb fuck\n' + `Expected app/json but got ${contentType}`)
    }
    if (error) {
      console.error(error);
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {rawData += chunk;});
    res.on('end', _ => {
      try {
        let parsedJSON = JSON.parse(rawData);
        cb(parsedJSON)
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', e => {
    console.error(`Got error: ${e.message}`);
  })

}

const battle = function(){
  return ranNum(21);
}

client.login(token)
