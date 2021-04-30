import React, { useState } from 'react'
import {useUpdatePasswordMutation} from '../generated/graphql';
function UpdatePassword() {
    const [username, setUsername] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [, updatePassword] = useUpdatePasswordMutation()
    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}} />
            <input type="text" placeholder="Current Password" onChange={(e) => {setCurrentPassword(e.target.value)}} />
            <input type="text" placeholder="New Password" onChange={(e) => {setNewPassword(e.target.value)}} /> 

            <button onClick={() => {updatePassword({
                username,
                oldPassword: currentPassword,
                newPassword
            })}}>UPDATE PASSWORD</button>
        </div>
    )
}

export default UpdatePassword
