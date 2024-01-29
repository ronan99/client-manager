import { api } from "../../utils/api";
import { ClientCreate } from "./client.dto";

export default class ClientService {
    private api = api;

    async getAll(){
        return await this.api.get("/client")
    }

    async create(data: ClientCreate){
        return await this.api.post("/client/create", data)
    }

    async getBestRoute(){
        return await this.api.get("/client/getBestRoute")
    }
}