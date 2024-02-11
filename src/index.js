const fastify = require("fastify")

const serverConfig = require("./config/server_config")
const apiRoutes = require("./routes")

const app = fastify({
    logger: true,
})




app.register(apiRoutes, {prefix: "/api"})


app.get("/ping", async (req, res) => {
    return {mess: "Ping Received Ok"}
})



app.listen({port:3000}, () => {
    console.log(`Server started at port no ${serverConfig.PORT}`)
})

