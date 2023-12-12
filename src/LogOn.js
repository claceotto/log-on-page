function LogOn({ logIn }) {
    return (
        <div>
            <h1>You need to log on</h1>
            <form>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <br />
                <label>
                    Password:
                    <input type='password' name='password' />
                </label>
            </form>
            <button onClick={logIn}>Log in</button>
        </div>)
}

export default LogOn