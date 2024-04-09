import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom'
import { useUser } from './UserContext';
import {useNavigate} from 'react-router-dom';

import axios from 'axios';


function EditProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        password: ''
    });
    
    const { user, updateUser } = useUser();
    console.log('user data in EditProfile => ', user)
    
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    console.log('formData in EditProfile => ', formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = {
                ...formData,
                oldEmail: user.email
            };
            // await axios.patch('http://localhost:3001/user/edit', requestData);
            await updateUser(requestData)
          // redirect the user to their profile page
            navigate('/profile')
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <>
        <div>Edit Profile Page</div>
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
            />

            <input
                type='text'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
            />

            <input
                type='text'
                name='location'
                placeholder='Zip Code'
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
            />

            <input
                type='password'
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
            />

            <button
                type="submit"
                className="w-1/2 ml-28 py-2 rounded-md btn"  
            >
                Submit
            </button>

        </form>
    </>
  )
}

export default EditProfile