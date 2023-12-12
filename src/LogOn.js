import { useState } from "react"

function LogOn({ logIn }) {
    const [inputName, setInputName] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [showError, setShowError] = useState(false)
    function handleLoginClick() {
        const isLoginSuccessful = logIn(inputName, inputPassword)
        setShowError(!isLoginSuccessful)
    }

    return (
        <div>
            <h1>You need to log on</h1>
            <form>
                {showError ? (<h2 className="error">User or Password invalid</h2>) : null}
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        onChange={event => {
                            setInputName(event.target.value)
                        }} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type='password'
                        name='password'
                        onChange={event => {
                            setInputPassword(event.target.value)
                        }} />
                </label>
            </form>
            <button onClick={handleLoginClick}>Log in</button>
        </div>)
}

export default LogOn