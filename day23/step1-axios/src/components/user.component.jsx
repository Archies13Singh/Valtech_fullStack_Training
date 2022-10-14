import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


let Users = ()=>{
    let [users, setUsers] = useState([])


    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=1").then(res=>{
            setUsers(res.data.data)
        })
    })



    return<div>
        <h2>Users List</h2>
        <table class="table">
            <thead> 
                <tr>
                <th scope="col">Si#</th>
                <th scope="col">Avatar</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(function(value,idx){
                        return<tr>
                        <td>{idx+1}</td>
                        <td>
                            <img src={value.avatar} alt="" />
                        </td>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}




export default Users