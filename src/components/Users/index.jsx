import React from 'react'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


function Users() {
    const [user, setUser] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) =>{
            setUser(res.data)

        })
    }, [])

  return (
    <div>
        <h1>Nama nama User</h1>
        {
            user.map(data=> {
                return(
                    <div role={'nama'}>{data.name}</div>
                )
            })
        }
    </div>
  )
}

export default Users