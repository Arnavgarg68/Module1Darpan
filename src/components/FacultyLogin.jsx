import React from 'react'

export default function FacultyLogin() {
  return (
    <div className='faculty-login-body'>
      <div className="faculty-login-card">
        <span className="login-card-head">FACULTY LOGIN</span>
        <div className="input-collection">
        <label htmlFor="faculty-id" className='faculty-input-label'>Faculty ID</label>
        <input type="text" className='faculty-login-input' placeholder='Enter here' autoFocus/>
        <label htmlFor="password" className='faculty-input-label'>Password</label>
        <input type="text" className='faculty-login-input' placeholder='Enter here'/>
        </div>
        <button className='faculty-login-button' to="/modules">Login</button>
      </div>
    </div>
  )
}
