import React, { useState } from 'react';
import './style.css'

const SignupForm = () => {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    setErrors(prevErrors => ({...prevErrors, [name]: ''}));
  }

  const addUser = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formInfo;
    if (email === '') {
      setErrors(prevErrors => ({...prevErrors, email: 'Email is required'}));
    }
    if (password === '') {
      setErrors(prevErrors => ({...prevErrors, password: 'Password is required'}));
    }
    if (confirmPassword === '') {
      setErrors(prevErrors => ({...prevErrors, confirmPassword: 'Confirm Password is required'}));
    }

    if (password !== confirmPassword) {
      setErrors(prevErrors => ({...prevErrors, confirmPassword: 'Passwords not match'}));
    }

    if(email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword) {
      const user = {
        id: Date.now(),
        email,
        password,
      };
      setUsers(prevUsers => [...prevUsers, user]);
      setErrors({
        email: '',
        password: '',
        confirmPassword: '',
      })
      setFormInfo({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }

  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  }

  return (
    <>
      <form className='signup-form'>
        <div className="form-group">
          <input type="email" name='email' placeholder="Email Address" value={formInfo.email} onChange={(e) => handleChange(e)} />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder='Password' value={formInfo.password} onChange={(e) => handleChange(e)} />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <div className="form-group">
          <input type="password" name="confirmPassword" placeholder='Confirm Password' value={formInfo.confirmPassword} onChange={(e) => handleChange(e)} />
          {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
        </div>
        <button className="btn" onClick={(e) => addUser(e)}>Signup</button>
      </form>
      <ul className='users'>
        {
          users.length ? (
            <>
              <h2>Users Data</h2>
              {users.map(user => (
                <li key={user.id} className="user">
                  <div className="user-info">
                    <p className="email"><strong>Email:</strong> {user.email}</p>
                    <p className="password"><strong>Password:</strong> {user.password}</p>
                  </div>
                  <button className="btn" onClick={() => deleteUser(user.id)}>
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </li>
              ))}
            </>
          ) : 
          null
        }
      </ul>
    </>
  )
}

export default SignupForm;