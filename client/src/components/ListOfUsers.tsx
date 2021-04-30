import React from 'react'
import {useGetAllUsersQuery} from '../generated/graphql';
import {useDeleteUserMutation} from '../generated/graphql';
const ListOfUsers =() => {
    const [{data},getAllUsers] = useGetAllUsersQuery()
    const [{error},deleteUser] = useDeleteUserMutation();
    console.log(data);
    return (
        <div>
            {data && (data.getAllUsers?.map((user: any) => {
                return <div key={user?.id}>{user?.name} / {user?.username} <button onClick={() =>{deleteUser({id: user.id})}}>Delete User</button></div>
            }

            ))}
        </div>
    )
}

export default ListOfUsers
