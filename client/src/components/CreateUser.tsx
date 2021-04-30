import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import {useCreateUserMutation} from '../generated/graphql';


const CreateUser = () => {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [,createUser ] = useCreateUserMutation()
    return (
        <div className="createUser"> 
            <input type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}} /> 
            <input type="text" placeholder="username" onChange={(e) => {setUserName(e.target.value)}} /> 
            <input type="text" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
            {/* @ts-ignore */}
            <button onClick={async() => {
                const res = await createUser({
                    name,
                    username: userName,
                    password
                })
                console.log(res);
            }}>Create User</button>
        </div>
    )
}

export default CreateUser
