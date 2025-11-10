import express from 'express'
import dotenv from 'dotenv'
import database from '../DataBase/DataBase.js'
import {fileURLToPath} from "url";
import {dirname, resolve} from "path";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import authMiddleware from "./Middlewares/authMiddleware.js";

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

const protocol = 'http://'
const host = 'localhost'
const port = 3000

const JWT_ACCESS_SECRET=process.env.JWT_ACCESS_SECRET
const JWT_REFRESH_SECRET=process.env.JWT_REFRESH_SECRET

const refreshTokenExpiresIn = '30d'
const accessTokenExpiresIn = '30m'

app.use(express.static(resolve(__dirname, '../../dist/')))
app.use(express.json())
app.use(cookieParser())
app.use(['/api/posts', '/api/create-post'], authMiddleware)


function generateAccessToken(id, username){
    return jwt.sign(
        {
            id: id,
            username: username
        },
        process.env.JWT_ACCESS_SECRET,
        {expiresIn: accessTokenExpiresIn}
    )
}

function generateRefreshToken(id, username){
    return jwt.sign(
        {
            id: id,
            username: username
        },
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: refreshTokenExpiresIn}
    )
}

app.get('/api/posts', async (req, res) => {
    const [rows] = await database.execute("SELECT posts.title, posts.content, posts.author_id, users.username AS author FROM posts JOIN users ON posts.author_id = users.id")
    res.json(rows)
    .status(200)
})

app.post('/api/create-post', async (req, res) => {
    const request = req.body
    await database.execute("INSERT INTO posts (author_id, title, content) VALUES (?, ?, ?)", [request.author, request.title, request.content])
    res.json({ body: 'The post was created successfully' })
    .status(201)
})

app.post('/api/register', async (req, res) => {
    const {username, password} = req.body
    const hashPassword = await bcrypt.hash(password, 5)

    const [rows] = await database.execute("INSERT INTO users (username, passkey) VALUES (?, ?); ", [username, hashPassword])
    const userId = rows.insertId

    const accessToken = generateAccessToken(userId, username)
    const refreshToken = generateRefreshToken(userId, username)

    await database.execute("UPDATE users SET refreshToken = ?, refreshTokenExpiresIn = DATE_ADD(NOW(), INTERVAL 30 DAY) WHERE id = ?", [refreshToken, userId])

    res.cookie('refreshToken', refreshToken, {
        maxAge: 2592000000,
        httpOnly: true,
    })

    res.json({ accessToken, refreshToken})
    .status(201)

})

app.post('/api/refresh-token', async (req, res) => {
    console.log(req)
})

app.get('/*', (req, res) => {
    res.sendFile(resolve(__dirname, '../../dist/', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server running on ${protocol}${host}:${port}/`)
})