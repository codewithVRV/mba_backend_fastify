// import fastify from "fastify";
const fastify = require("fastify")

const serverConfig = require("./config/server_config")

const app = fastify({
    logger: true,
})


app.get("/ping", async (req, res) => {
    return {mess: "Ping Received Ok"}
})

app.get("/vishnu", async (req, res) => {
    return {mess: "Vishnu is the lord of the universe"}
})

app.route({
    url: "/home",
    method: "GET",
    handler: (req, res) => {
        return {message:"Home Page Route"}
    }
})

app.post("/home/:id", (req, res) => {
    console.log(req.query, req.params, req.headers, req.body)
    return {data: ["I am vishnu"]}
})

app.listen({port:3000}, () => {
    console.log(`Server started at port no ${serverConfig.PORT}`)
})

// try{
//     await app.listen({port: 3000})
//     console.log("Server Started")
// }
// catch(error){
//     console.log(error)
// }