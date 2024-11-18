/*
const sound = new SoundEmitter(1088)
sound.setVolume(2)
sound.setRange(50)
Game.newSoundEmitter(sound)

const map = "zsxdcvgbhnjmq2w3er5t6y7ui9o0p"

Game.on("initialSpawn", player => {
    player.keypress(async(key) => {
        let index = map.indexOf(key)
        if (index !== -1) {
            sound.setPosition(player.position)
            sound.setPitch(2 ** (index / 12))
            player.playSound(sound)
        }
    })
})
*/