async function ping(req, res) {
    const result = await this.todoService.getTodos();
    console.log(result);
    return {mess: "ping received ok"}
}

module.exports = {
    ping,
}