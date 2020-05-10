
const buildShop = function(){
  const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTile('The Bot Shop')
        .setImage('https://livekamp.com/wp-content/uploads/2020/02/Deniece-Williams-1.jpg')
        .setDescription('Some of the finest wares for all your cares.')
        .addFields(
          {name: 'Master Sword', value: 'about tree fiddy'},
          {name: '\u200B', value: '\u200B'},
          {name: 'Wooden Sword', value: 'also about tree fiddy'},
          {name: 'Breastplate', value: 'an even tree fiddy'},
        )
        .setTimestamp();
        .setFooter('Come back soon suga');


  channel.send(exampleEmbed);

}
