import LogOn from "./LogOn"
import Welcome from "./Welcome"
import { useState } from 'react';

function CheckUser() {
    const [checkUser, setCheckUser] = useState(false)

    function handleLogOff() {
        setCheckUser(false)
    }
    function handleLogIn() {
        let userIDs = [
            {
                Name: 'Clarisse',
                Password: 'Ceotto'
            },
            {
                Name: 'Felipe',
                Password: 'Gagno'
            }
        ]
        return (
            setCheckUser(true)
        )
    }
    //I know this is wrong. I need 'imput' to be what the user types. And this need to be inside the 
    //handleClick function.
    // let user = users.find(user => user.Name = input, user.Password = input)

    return (
        < div >
            {checkUser ? (
                <Welcome
                    logOff={handleLogOff} />
            ) : (
                <LogOn
                    logIn={handleLogIn} />
            )}
        </div >
    )
}
export default CheckUser