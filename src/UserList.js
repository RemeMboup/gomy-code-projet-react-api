
import UserTable from './UserTable';
import React, { useState, useEffect } from "react";
import axios from "axios";
const UserList = () => {
    // Data for add user
    
    const url = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setUsers(res.data));
    };

  useEffect(() => {
    fetchInfo();
  }, []);
    return(
        <>
            <center>
                <h1 style={{ color: "green" }}>Liste des utilisateurs</h1>
                <UserTable data={users}/>
            </center>
        </>
    )
}
export default UserList;