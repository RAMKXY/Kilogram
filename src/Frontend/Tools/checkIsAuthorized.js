export default async function checkIsAuthorized(){
    const path = '/api/posts'

    const accessToken = localStorage.getItem("accessToken").split(" ")[1]
    const accessTokenType = localStorage.getItem("accessToken").split(" ")[0]

    const response = await fetch(path, {
        method: "GET",
        headers: {
            authorization: accessToken !== null ? accessToken : undefined
        }
    })

    if (response.status === 401) {
        return {authorized: false, message: 'Not authorized'}
    }

    if (response.status === 403) {
         await fetch('/api/refresh-token', {
            method: 'POST',
            credentials: 'include'
        })
        return {authorized: false, message: 'Bad or expired'}
    }
}