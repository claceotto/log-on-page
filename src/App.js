import './App.css';
import { useState } from 'react';
import LogOn from './LogOn';
import Welcome from './Welcome';

function App() {

  const [user, setUser] = useState(false)

  function handleLogOff() {
    setUser(false)
  }

  function handleLogIn(inputName, inputPassword) {

    const userIDs = [
      {
        Name: 'Clarisse',
        Password: 'Ceotto'
      },
      {
        Name: 'Felipe',
        Password: 'Gagno'
      }
    ]
    const idFound = userIDs.find((id) => { return inputName == id.Name && inputPassword == id.Password });

    setUser(idFound !== undefined)
    return idFound !== undefined
  }

  return (
    < div >
      {user ? (
        <Welcome
          logOff={handleLogOff} />
      ) : (
        <LogOn
          logIn={handleLogIn} />
      )}
    </div >
  )
}


export default App;
