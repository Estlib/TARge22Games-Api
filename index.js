const app = require("express")()
const port = 8080

app.listen(port, () => {
    console.log(`Api up at: Http://localhost:${port}`)})