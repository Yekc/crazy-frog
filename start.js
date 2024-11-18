const nh = require("node-hill-s")

nh.startServer({
    hostKey: "KWtPXIc8mwYHnddL9JjcI5mKp36vkzqNcCaeVqka2gxBRG9HKl84bjF1lfJ8hcSa",
    gameId: 69,
    port: 42480,
    local: false,
    mapDirectory: "./maps/",
    map: "map.brk",
    scripts: "./user_scripts",
    modules: [
        //"mongoose"
    ]
})