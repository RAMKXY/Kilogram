import jwt from 'jsonwebtoken'

export default function (req, res, next) {
    const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET

    const requestAuthHeader = req.headers.authorization;

    const userAccessToken = requestAuthHeader !== undefined ? requestAuthHeader.split(' ')[1] : undefined

    if (req.method === 'OPTIONS') {
        next()
    }

    if (userAccessToken === undefined) {
        res.json({
            message: 'Not authorized'
        })
        .status(401)
    }

    if (userAccessToken !== undefined) {
        jwt.verify(userAccessToken, JWT_ACCESS_SECRET, err => {
            if (err) {
                return res.json({
                    message: 'Access token expired or invalid'
                })
                .status(403)
            }
             next()
        })
    }
}