import "../CSS/login.css"
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [showSignup, setShowSignup] = useState(false);

  return (

    <div className="flex items-center justify-center h-screen main" >
      <div className="w-full max-w-lg ">
        <h2 className="text-3xl font-bold text-center"></h2>
        
        {showSignup ? (
          <SignupForm />  
        ) : (
          <LoginForm />
        )}

        <div className="text-center mt-4">
          <button
            className="text-green-500 hover:underline"
            onClick={() => setShowSignup(!showSignup)}
          >
            {showSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
          </button>
        
        </div>
      </div>
    </div>
  );
}

function LoginForm() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
};
console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const { data } = await axios.post('/api/login', formData) 
    } catch (err){
        console.error(err)
    }
  }



  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
    <img src="../images/Group10.jpeg"></img>
      <input 
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded" 
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Login
      </button>
    </form>
  )
}

function SignupForm() {

  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zipCode: '' 
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle form submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/users', formData);
    
    // User created successfully
    console.log(response.data); 

  } catch (err) {
    console.log(err);
  }
}
console.log(formData);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="text" 
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"  
      >
        Sign Up
      </button>
    </form>
  )
}

export default Login;
