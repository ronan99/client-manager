import { api } from "../../utils/api";
import { ClientCreate } from "./client.dto";

export default class ClientService {
    private api = api;

    async getAll(){
        return await this.api.get("/user")
    }

    async create(data: ClientCreate){
        return await this.api.post("/user/create", data)
    }
}