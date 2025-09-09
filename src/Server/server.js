import express from 'express'
import database from '../DataBase/DataBase.js'
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

const protocol = 'http://'
const host = 'localhost'
const port = 3000

app.use(express.static(resolve(__dirname, '../../dist/')))
app.use(express.json())

app.get('/api/posts', async (req, res) => {
    const [rows] = await database.execute("SELECT posts.title, posts.content, posts.author_id, users.username AS author FROM posts JOIN users ON posts.author_id = users.id")
    res.json(rows)
})

app.get('/*', (req, res) => {
    res.sendFile(resolve(__dirname, '../../dist/', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server running on ${protocol}${host}:${port}/`)
})

