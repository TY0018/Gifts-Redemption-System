import { Pool } from 'pg'
import connectionConfig from '../config/databaseConfig'
 
const pool = new Pool(connectionConfig)
 
export const query = (text:string, params:string[]) => {
  return pool.query(text, params)
}

export const getClient = async () => {
    const client = await pool.connect()
    const query = client.query
    const release = client.release
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
        console.error('A client has been checked out for more than 5 seconds!')
    }, 5000)

    client.release = () => {
        // clear our timeout
        clearTimeout(timeout)
        // set the methods back to their old un-monkey-patched version
        client.query = query
        client.release = release
        return release.apply(client)
    }
    return client
  }