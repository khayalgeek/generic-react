import axios from "axios";
import { useEffect, useState } from "react";
import style from './style.module.css'
import Thead from "./thead";



const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                setUsers(data);
                console.log(data);
            })
    }, [])

    return (
        <>
            <h1 className={style.h1}>Users </h1>
            <table className={style.users}>
                <Thead />
                <tbody>
                    {
                        users.map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}



export default Users;