import { Pool } from 'pg'
import connectionConfig from '../config/databaseConfig'
 
const pool = new Pool(connectionConfig)
 
export const query = (text:string, params:string[]) => {
  return pool.query(text, params)
}

export const getClient = async () => {
    const client = await pool.connect()
    return client
  }