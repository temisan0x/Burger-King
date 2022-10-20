import React from 'react'
import me from "../../assets/Temisan.jpg";

const Users = () => {
    const userArr = [1,2,3,4]
  return (
    <section className='tableClass'>
         <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
           {
            userArr.map((i)=> (
                <tr key={i}>
                <td>#{i}</td>
                <td>Temisan</td>
                <td>
                    <img src={me} alt="user profile" />
                </td>
                <td>Admin</td>
                <td>{"13-12-2019"}</td>
              </tr>
            ))
           }
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default Users