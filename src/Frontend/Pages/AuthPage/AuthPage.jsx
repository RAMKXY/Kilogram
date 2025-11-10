import TextInput from "../../UI/TextInput/TextInput.jsx";
import SuccessButton from "../../UI/SuccessButton/SuccessButton.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import FieldLabel from "../../UI/FieldLabel/FieldLabel.jsx";
import FieldError from "../../UI/FieldError/FieldError.jsx";
import styles from './AuthPage.module.css'
import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function AuthPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value)
    }

    async function handlePostRequest(e) {
        e.preventDefault()

        let newErrors = {}

        if (username.length < 3 && username.length !== 0) {
            newErrors.username = 'Please, enter a longest username'
        }

        if (username.length === 0) {
            newErrors.username = 'Please, enter username'
        }

        if (password.length < 8 && password.length !== 0) {
            newErrors.password = 'Please, enter a longest password'
        }

        if (password.length === 0) {
            newErrors.password = 'Please, enter a password'
        }

        if (confirmPassword !== password && confirmPassword.length !== 0) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        if (confirmPassword.length === 0) {
            newErrors.confirmPassword = 'Please, confirm password'
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length !== 0) {
            return errors
        }

        const response = await fetch('api/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        const responseJSON = await response.json()

        const accessToken = responseJSON.accessToken
        localStorage.setItem('accessToken', accessToken)

        return <Navigate to={'/'} replace={true}/>
    }

    return(
        <>
            <h1 className={styles.WebSiteName}>Kilogram</h1>

            <h2 className={styles.registerTitle}>Create a new account</h2>

            <form onSubmit={handlePostRequest} className={styles.registerForm}>
                <FieldLabel>Username</FieldLabel>
                <TextInput onChange={handleUsernameChange} maxLength={30} placeholder={"Enter username"}/><br/>
                <FieldError>{errors.username}</FieldError>

                <FieldLabel>Password</FieldLabel>
                <TextInput onChange={handlePasswordChange} maxLength={100} placeholder={"Enter password"}/><br/>
                <FieldError>{errors.password}</FieldError>

                <FieldLabel>Confirm password</FieldLabel>
                <TextInput onChange={handleConfirmPasswordChange} maxLength={100} placeholder={"Enter password again"}/><br/>
                <FieldError>{errors.confirmPassword}</FieldError>

                <SuccessButton marginTop={'40px'} marginBottom={'10px'} type="submit">Register</SuccessButton><br/>

                <CustomLink marginBottom={"20px"} to={"/"}>Already have an account?</CustomLink>

            </form>
        </>
    )
}