import { App } from "./app"

const server = new App().server


server.listen(8080, () => {
	console.log("Rodando na porta 8080")
})
