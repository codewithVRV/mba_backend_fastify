
function v1Routes (fastify, options, done) {

    fastify.get("/home", (req, res) => {
        return {mess: "routing done for v1"}
    })

    done()
}

module.exports = v1Routes;