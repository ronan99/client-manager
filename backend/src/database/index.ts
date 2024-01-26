import { Pool } from 'pg'
import { config } from './config'


class Database {
	client : Pool
	constructor(){
		this.client = new Pool(config)
	}

	async query(query: string){

		const pool = await this.client.connect();

		const data = await pool.query(query);

		pool.release();

		return data.rows;

	}

	async insert(query: string, data?: string[]){

		const pool = await this.client.connect();
		let result;
		try {
			await pool.query('BEGIN')
			console.log(data)
			result = await pool.query(query, data)
			await pool.query('COMMIT')

		} catch (e: any) {

			await pool.query('ROLLBACK')
			if(e.code == "23505") throw Error("Valor já existe na tabela")
			throw e
		} finally {
			pool.release()

		}

		return result?.rows
	}



}

export default new Database();