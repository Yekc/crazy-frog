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

Game.on("initialSpawn", player => {
    player.message("\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=")
    player.message("\\c9>\\c5>\\c8> \\c7each time you listen through crazy frog entirely you get 1 point \\c8<\\c5<\\c9<")
    player.message("\\c9>\\c5>\\c8> \\c7progress does not save if you leave \\c8<\\c5<\\c9<")
    player.message("\\c9>\\c5>\\c8> \\c7have fun \\c8<\\c5<\\c9<")
    player.message("\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=\\c9-\\c5=\\c8-\\c7=")

    player.topPrint("\\c9>\\c5>\\c8> \\c7read chat lol \\c8<\\c5<\\c9<", 2)
    player.centerPrint("\\c9>\\c5>\\c8> \\c7read chat lol \\c8<\\c5<\\c9<", 2)
    player.bottomPrint("\\c9>\\c5>\\c8> \\c7read chat lol \\c8<\\c5<\\c9<", 2)

    player.setInterval(() => {
        player.setScore(player.score + 1)
        player.playSound(congrats)
        player.topPrint("\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<", 5)
        player.centerPrint("\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<", 5)
        player.bottomPrint("\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<#\\c9>\\c5>\\c8> \\c7CONGRATS! YOU GOT 1 POINT! \\c8<\\c5<\\c9<", 5)
    }, 172000)
})