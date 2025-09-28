import TextInput from "../../UI/TextInput/TextInput.jsx";
import SuccessButton from "../../UI/SuccessButton/SuccessButton.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import FieldLabel from "../../UI/FieldLabel/FieldLabel.jsx";
import styles from './AuthPage.module.css'

export default function AuthPage(){
    return(
        <>
            <h1 className={styles.WebSiteName}>Kilogram</h1>

            <h2 className={styles.registerTitle}>Create a new account</h2>

            <form className={styles.registerForm}>
                <FieldLabel>Login</FieldLabel>
                <TextInput maxLength={30} placeholder={"Enter login"}/><br/>

                <FieldLabel>Password</FieldLabel>
                <TextInput maxLength={100} placeholder={"Enter password"}/><br/>

                <FieldLabel>Confirm password</FieldLabel>
                <TextInput maxLength={100} placeholder={"Enter password again"}/><br/>

                <SuccessButton  marginTop={'40px'} marginBottom={'10px'}>Register</SuccessButton><br/>

                <CustomLink marginBottom={"20px"} to={"/"}>Already have an account?</CustomLink>

            </form>
        </>
    )
}