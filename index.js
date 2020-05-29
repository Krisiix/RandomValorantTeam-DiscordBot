var map2 = ['/// SPLIT', '/// BIND', '/// HAVEN']
var membres = []
var messages = []

const Discord = require ('discord.js')
const Canvas = require('canvas');
const  bot = new Discord.Client()

//var membres = []

bot.on('ready', function(){
    //bot.user.setAvatar('./valorant.jpg').catch(console.error)
    bot.user.setActivity('Make Valorant Teams').catch(console.error)
    console.log("Le bot est en ligne")
})

bot.on('message', function(message){
      

    if(message.content=== '!team' || message.content=== '!tema' ){
        //arrays
        membres.length=0
        messages.length=0

   
        message.reply('Je te fait ça bg ! Pour participer au match cliquez sur ✅').then(message => {
            
            message.react('✅')
            message1=message
            
            //on ajoute un addListener lorsqu'une personne ajoute une réaction
            bot.on('messageReactionAdd', (reaction, user) => {
            


                //Verify if the reaction comes from a true player (on vérifie que ce soit bien la bonne réaction et on ne compte pas celui du bot)
                if (reaction.emoji.name === '✅' && user.id !== bot.user.id) {
                    
                    //Vérification you can join the party (marche parfaitement si bug essayez membres.shift)
                    if(user !== membres[0] && user !== membres[1] && user !== membres[2] && user !== membres[3] && user !== membres[4]&& user !== membres[5] && user !== membres[6] && user !== membres[7]&& user !== membres[8]&& user !== membres[9] && membres.length <10){
                        var newLength = membres.push(user)
                        message.channel.send(':arrow_forward: Participation enregistrée pour <@' + user.id + '>.**('+membres.length + '/10)**').then( messageid2 = message.id)
                        
                    }
                    // afficher si les personnes spam le bot
                    /*else if (message.id === messageid2){
                        message.channel.send(':no_entry: Dis donc <@' + user.id + '>, tu peux arrêter de spam ??**('+membres.length + '/10)**')
                        .then((message)=> {

                        setTimeout(function(){
                            message.delete()
                        }, 2000)

                        var newLength = messages.push(message)

                        })
        
                        
                    }*/
                    
                }
                
                

                if(membres.length >= 10 && message.id === messageid2){

                    //supp les message du bot
                    message1.delete()
                    
                    for (let i = 0; i < messages.length; i++) {
                        const element = messages[i];
                        element.delete();
                    } 

                    //chargement en cours
                    message.channel.send(':arrows_counterclockwise: Vérification du nombre de joueurs en cours... :black_square_button::black_square_button::black_square_button::black_square_button: 0%')
                    .then((msg)=> {
                    setTimeout(function(){
                        msg.edit(':arrows_counterclockwise: Répartition des joueurs en cours... :green_square::black_square_button::black_square_button::black_square_button: 25%');
                    }, 1125)
                    setTimeout(function(){
                        msg.edit(':arrows_counterclockwise: Sélection des camps en cours... :green_square::green_square::black_square_button::black_square_button: 50%');
                    }, 2250)
                    setTimeout(function(){
                        msg.edit(':arrows_counterclockwise: Sélection de la carte en cours... :green_square::green_square::green_square::black_square_button: 75%');
                    }, 3375)
                    setTimeout(function(){
                        msg.edit('✅ Préparation du match terminée :green_square::green_square::green_square::green_square: 100%');
                    }, 4500)
                    })
                    
                    setTimeout(function(){
                    bot.emit('ShowTeam', message)
                    }, 1000)


                        
                }    
                
                
            })    
            
            
        })
    }

    if(message.content=== '!restart'){
        if(membres.length >= 10){
            //chargement en cours
            message.channel.send(':arrows_counterclockwise: Vérification du nombre de joueurs en cours... :black_square_button::black_square_button::black_square_button::black_square_button: 0%')
            .then((msg)=> {
            setTimeout(function(){
                msg.edit(':arrows_counterclockwise: Répartition des joueurs en cours... :green_square::black_square_button::black_square_button::black_square_button: 25%');
            }, 1125)
            setTimeout(function(){
                msg.edit(':arrows_counterclockwise: Sélection des camps en cours... :green_square::green_square::black_square_button::black_square_button: 50%');
            }, 2250)
            setTimeout(function(){
                msg.edit(':arrows_counterclockwise: Sélection de la carte en cours... :green_square::green_square::green_square::black_square_button: 75%');
            }, 3375)
            setTimeout(function(){
                msg.edit('✅ Préparation du match terminée :green_square::green_square::green_square::green_square: 100%');
            }, 4500)
            })
            
            setTimeout(function(){
            bot.emit('ShowTeam', message)
            }, 1000)
        }
    }
    
    if(message.content=== '!help'){
        //chargement en cours
        message.channel.send("Voici mon mode d'emploi :")
        message.channel.send("**!team** permet de commencer la création des équipes. Il vous suffit de participer et le Bot va créer les équipes et vous les afficher après quelques calculs.")
      
        
    }
  
    
})



bot.on('ShowTeam', async message => {
    
    
    //choix de nombres random
    var i1 = Math.floor(Math.random() * 10)
                
    do {
        var i2 = Math.floor(Math.random() * 10)
    } while (i2 === i1)

    do {
        var i3 = Math.floor(Math.random() * 10)
    } while (i3 === i1 || i3 === i2)
    
    do {
        var i4 = Math.floor(Math.random() * 10)
    } while (i4 === i1 || i4 === i2 || i4 === i3)

    do {
        var i5 = Math.floor(Math.random() * 10)
    } while (i5 === i1 || i5 === i2 || i5 === i3 || i5 === i4)

    do {
        var i6 = Math.floor(Math.random() * 10)
    } while (i6 === i1 || i6 === i2 || i6 === i3 || i6 === i4 || i6 === i5)
    
    do {
        var i7 = Math.floor(Math.random() * 10)
    } while (i7 === i1 || i7 === i2 || i7 === i3 || i7 === i4 || i7 === i5 || i7 === i6)

    do {
        var i8 = Math.floor(Math.random() * 10)
    } while (i8 === i1 || i8 === i2 || i8 === i3 || i8 === i4 || i8 === i5 || i8 === i6 || i8 === i7)

    do {
        var i9 = Math.floor(Math.random() * 10)
    } while (i9 === i1 || i9 === i2 || i9 === i3 || i9 === i4 || i9 === i5 || i9 === i6 || i9 === i7 || i9 === i8)

    do {
        var i10 = Math.floor(Math.random() * 10)
    } while (i10 === i1 || i10 === i2 || i10 === i3 || i10 === i4 || i10 === i5 || i10 === i6 || i10 === i7 || i10 === i8|| i10 === i9)
    
    //map random and show map
    var imap = Math.floor(Math.random() * 3)
    

    //canva
	const canvas = Canvas.createCanvas(1920, 1080);
	const ctx = canvas.getContext('2d');

    //background
	const background = await Canvas.loadImage('./showteamvalorant.png').catch(console.error);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Show contourmap and the text map with info text
    const contourmap = await Canvas.loadImage('./contourmap.png');
    ctx.drawImage(contourmap, canvas.width-500, 0, 600, 80);
    ctx.font = '60px Valorant';
    ctx.fillStyle = '#161a25';
    ctx.fillText(map2[imap], canvas.width-400, 65);

    ctx.font = '35px Valorant';
	// Select the style that will be used to fill the text in
    ctx.fillStyle = '#161a25';

    
   
    // Wait for Canvas to load the image
    //team1
	const avatar1 = await Canvas.loadImage(membres[i1].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar1, 335/3, 180, 250, 250);
    const contour1 = await Canvas.loadImage('./contour.png');
    ctx.drawImage(contour1, 335/3, 180, 250, 320);
    ctx.fillText(membres[i1].username, 335/3+20, 485);
    
    const avatar2 = await Canvas.loadImage(membres[i2].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar2, 1420/3, 180, 250, 250);
    const contour2 = await Canvas.loadImage('./contour.png');
    ctx.drawImage(contour2, 1420/3, 180, 250, 320);
    ctx.fillText(membres[i2].username, 1420/3+20, 485);

    const avatar3 = await Canvas.loadImage(membres[i3].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar3, 835, 180, 250, 250);
    const contour3 = await Canvas.loadImage('./contour.png');
    ctx.drawImage(contour3, 835, 180, 250, 320);
    ctx.fillText(membres[i3].username, 835+20, 485);

    const avatar4 = await Canvas.loadImage(membres[i4].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar4, 3590/3, 180, 250, 250);
    const contour4 = await Canvas.loadImage('./contour.png');
    ctx.drawImage(contour4, 3590/3, 180, 250, 320);
    ctx.fillText(membres[i4].username, 3590/3+20, 485);

    const avatar5 = await Canvas.loadImage(membres[i5].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar5, 4675/3, 180, 250, 250);
    const contour5 = await Canvas.loadImage('./contour.png');
    ctx.drawImage(contour5, 4675/3, 180, 250, 320);
    ctx.fillText(membres[i5].username, 4675/3+20, 485);

    
    //team2
    const avatar6 = await Canvas.loadImage(membres[i6].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar6, 335/3, 770, 250, 250);
    const contour6 = await Canvas.loadImage('./contour2.png');
    ctx.drawImage(contour6, 335/3, 700, 250, 320);
    ctx.fillText(membres[i6].username, 335/3+20, 760);

    const avatar7 = await Canvas.loadImage(membres[i7].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar7, 1420/3, 770, 250, 250);
    const contour7 = await Canvas.loadImage('./contour2.png');
    ctx.drawImage(contour7, 1420/3, 700, 250, 320);
    ctx.fillText(membres[i7].username, 1420/3+20, 760);

    const avatar8 = await Canvas.loadImage(membres[i8].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar8, 835, 770, 250, 250);
    const contour8 = await Canvas.loadImage('./contour2.png');
    ctx.drawImage(contour8, 835, 700, 250, 320);
    ctx.fillText(membres[i8].username, 835+20, 760);

    const avatar9 = await Canvas.loadImage(membres[i9].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar9, 3590/3, 770, 250, 250);
    const contour9 = await Canvas.loadImage('./contour2.png');
    ctx.drawImage(contour9, 3590/3, 700, 250, 320);
    ctx.fillText(membres[i9].username, 3590/3+20, 760);

    const avatar10 = await Canvas.loadImage(membres[i10].avatarURL({ format: 'png' }));
    ctx.drawImage(avatar10, 4675/3, 770, 250, 250);
    const contour10 = await Canvas.loadImage('./contour2.png');
    ctx.drawImage(contour10, 4675/3, 700, 250, 320);
    ctx.fillText(membres[i10].username, 4675/3+20, 760);
    
    

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'team.png');

    message.channel.send(attachment).catch(console.error);

    

});



bot.login('process.env.TOKEN')





