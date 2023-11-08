import React from 'react'

const UsersPage = async () => {
  
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' });
  const users = await res.json();
  
  return (
    <>
      <h1> UsersPage</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage