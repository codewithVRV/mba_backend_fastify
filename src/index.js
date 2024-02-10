// import fastify from "fastify";
const fastify = require("fastify")

const app = fastify({
    logger: true,
})


app.get("/ping", async (req, res) => {
    return {mess: "Ping Received Ok"}
})


app.listen({port:3000}, () => {
    console.log("Server started at port no 3000")
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

// try{
//     await app.listen({port: 3000})
//     console.log("Server Started")
// }
// catch(error){
//     console.log(error)
// }