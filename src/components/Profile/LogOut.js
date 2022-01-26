import React from 'react'

function Logout() {
  function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    window.location = '/'
  }
  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default Logout