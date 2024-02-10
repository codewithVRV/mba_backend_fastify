import fastify from "fastify";

const app = fastify({
    logger: true,
})


app.get("/home", async (req, res) => {
    return {mess: "Ok with fastify"}
})


try{
    await app.listen({port: 3000})
    console.log("Server Started")
}
catch(error){
    console.log(error)
}