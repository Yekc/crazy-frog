const mongoose = getModule("mongoose")

const playerSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    listened: {
        type: Number,
        required: true,
    }
})
const Player = mongoose.model("Player", playerSchema)

connect = async() => {
    console.log("Attempting to establish connection with MongoDB...")
    mongoose.connect("mongodb+srv://yekware:GRkpLPA7f8o0fq7p@savedata1.mhvce.mongodb.net/?retryWrites=true&w=majority&appName=savedata1")
    .then(() => console.log("CONNECTED TO DATABASE!"))
    .catch(error => console.log(`FAILED TO CONNECT TO DATABASE: ${error}`))
}
connect()

save = async function(player) {
    try {
        await Player.updateOne(
            { userId: player.userId },
            { $set: player.data }
        )
        console.log(`Saved player data for ${player.username} (${player.userId})`)
    } catch (error) {
        console.log(`Failed to save player data for ${player.username} (${player.userId}): ${error}`)
    }
}


const crazyfrog = new SoundEmitter(1098)
const congrats = new SoundEmitter(1099)

crazyfrog.global = true
crazyfrog.loop = true
crazyfrog.playing = true
crazyfrog.setVolume(1000)

congrats.global = true
congrats.setVolume(100000)

Game.newSoundEmitter(crazyfrog)
Game.newSoundEmitter(congrats)

let weather = ["sun", "rain", "snow"]
setInterval(() => {
    let color1 = "#" + Math.floor(Math.random() * 16777215).toString(16)
    let color2 = "#" + Math.floor(Math.random() * 16777215).toString(16)
    let color3 = "#" + Math.floor(Math.random() * 16777215).toString(16)
    let w = Math.floor(Math.random() * 3)
    Game.setEnvironment({ baseSize: Math.random() * 1000, baseColor: color1, skyColor: color2, weather: weather[w], ambient: color3 })
}, 100)

Game.on("playerJoin", async(player) => {
    //Look for player's data in the database
    let playerData = await Player.findOne({ userId: player.userId }).catch((error) => {
        player.kick(`Something went wrong when retreiving your listen count: ${error}`)
        console.log(`Failed to retreive player data for ${player.username} (${player.userId})`)
    })

    if (playerData) {
        //Player has data saved
        player.data = playerData
        console.log(`Loaded player data for ${player.username} (${player.userId}) (#${player.data.listened})`)
    } else {
        //New player
        let playerData = new Player()
        playerData.userId = player.userId
        playerData.listened = 0
        await playerData.save()
        player.data = playerData
        console.log(`Created player data for ${player.username} (${player.userId}) (#0)`)
    }

    player.setScore(player.data.listened)

    player.message("\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=")
    player.message("\\c9>\\c5>\\c8> \\c7each time you listen through crazy frog entirely you get 1 point \\c8<\\c5<\\c9<")
    player.message("\\c9>\\c5>\\c8> \\c7you earn badges for earning certain amounts of points \\c8<\\c5<\\c9<")
    player.message("\\c9>\\c5>\\c8> \\c7have fun \\c8<\\c5<\\c9<")
    player.message("\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=")

    player.topPrint("\\c9>\\c5>\\c8> \\c7read chat lol \\c8<\\c5<\\c9<", 2)
    player.centerPrint("\\c9>\\c5>\\c8> \\c7read chat lol \\c8<\\c5<\\c9<", 2)
    player.bottomPrint("\\c9>\\c5>\\c8> \\c7read chat lol \\c8<\\c5<\\c9<", 2)

    player.setInterval(() => {
        player.data.listened++
        player.setScore(player.data.listened)
        switch (player.data.listened) {
            case 1:
                p.grantBadge(19)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 10:
                p.grantBadge(20)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 50:
                p.grantBadge(21)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 100:
                p.grantBadge(30)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 500:
                p.grantBadge(31)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 1000:
                p.grantBadge(32)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 2500:
                p.grantBadge(33)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 5000:
                p.grantBadge(34)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 7500:
                p.grantBadge(35)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
            case 10000:
                p.grantBadge(36)
                player.message("\\c9>\\c5>\\c8> \\c7YOU GOT A BADGE!!!!!! \\c8<\\c5<\\c9<")
                player.message("\\c9>\\c5>\\c8> \\c7check ur badge inventory bucko \\c8<\\c5<\\c9<")
        }
        player.playSound(congrats)
        player.topPrint("\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<", 5)
        player.centerPrint("\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<", 5)
        player.bottomPrint("\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<", 5)
        
        save(player)
    }, 172000)
})

Game.on("playerLeave", (player) => {
    save(player)
})