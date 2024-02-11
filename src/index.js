const fastify = require("fastify")
const fastifyEnv = require('@fastify/env')

const serverConfig = require("./config/server_config")
const apiRoutes = require("./routes")

const app = fastify({
    logger: true,
})




app.register(fastifyEnv, {
    schema: {
        type: 'object',
        required: [ 'PORT' ],
        properties: {
            PORT: {
                type: 'string',
                default: 8888,
            }
        }
    }, 
    dotenv: true,
})

app.register(apiRoutes, {prefix: "/api"})


app.get("/ping", async (req, res) => {
    return {mess: "Ping Received Ok"}
})


app.ready(() => {
    // this executes when all plugin registration is also done!
    app.listen({port:app.config.PORT}, () => {
        console.log(`Server started at port no ${app.config.PORT}`)
    })
})

