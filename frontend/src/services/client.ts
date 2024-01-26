import { api } from "../utils/api";

export default class Client {
    private api = api;

    async getAll(){
        return await this.api.get("/user")
    }
}