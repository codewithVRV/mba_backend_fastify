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

// try{
//     await app.listen({port: 3000})
//     console.log("Server Started")
// }
// catch(error){
//     console.log(error)
// }