const app = require("express")()
const port = 8080
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

app.get('/games', (req, res) => {res.send(["Team Fortress 2", "Super Mario Bros", "Sonic the Hedgehog"])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`Api up at: Http://localhost:${port}`)})