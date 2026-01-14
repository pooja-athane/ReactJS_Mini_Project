import react, { useContext, useState } from 'react';
import UserContext from '../context/userContext';


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} =useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
        // console.log(username, password);

        setUsername("")
        setPassword("")

    }


    return (

        <>
            <div>
                <input
                    type='text'
                    placeholder='User Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={HandleSubmit}>Submit</button>

            </div>
        </>
    )
}