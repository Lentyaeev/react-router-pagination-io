import React from 'react'

export default function UserList (users) {
  const preparedusers = users.users
  return (
    <>
      {preparedusers.length !== 0
        ? (
            <div className='card-wrapper'>
              {preparedusers.map(user => (
                <div className='card' key={user.id}>
                  <div className='card-image'>
                    <figure className="card-image">
                      <img
                        className="card-image"
                        src={user.avatar}
                        alt="Avatar"
                      />
                    </figure>
                  </div>
                  <div>
                    {`${user.first_name} ${user.last_name}`}
                  </div>
                  <div className='card-link'>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </div>
                </div>
              ))}
            </div>
          )
        : (
            <h1>No users on this page</h1>
          )}
    </>
  )
}
