const fastify = require("fastify")

const serverConfig = require("./config/server_config")

const app = fastify({
    logger: true,
})

function myPlugin1 (fastify, options, done) {
    console.log("this is plugin 1")
    console.log(options)
    fastify.get("/home", (req, res) => {
        return {mess: "plugin return"}
    })
    done()
}


function myPlugin2 (fastify, options, done) {
    console.log("this is plugin 2")
    console.log(options)
    done()
}


app.register(myPlugin1, {name: "vishnu", prefix: "/api"})
app.register(myPlugin2, {name: "neha"})


app.get("/ping", async (req, res) => {
    return {mess: "Ping Received Ok"}
})



app.listen({port:3000}, () => {
    console.log(`Server started at port no ${serverConfig.PORT}`)
})

