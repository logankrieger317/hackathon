import "../CSS/login.css"
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [showSignup, setShowSignup] = useState(false);

  return (
    
    <div className="flex items-center justify-center h-screen main" >
      <div className="w-full max-w-lg ">
        {/* <h2 className="text-3xl font-bold text-center"></h2> */}
        
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
    
    // try {
    //     const { data } = await axios.post('/api/login', formData) 
    // } catch (err){
    //     console.error(err)
    // }
  }



  return (
    <>

    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow m-4">
    <div className="logo-container "></div>
      <input 
        type="text"
        name="username"
        placeholder="E-mail address"
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
        className="w-1/2 ml-28 py-2 rounded-md btn"
      >
        Login
      </button>
      <div className="social-Icons">
        <a href="https://www.facebook.com/">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png" alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png" alt="Instagram" />
        </a>

        <a href="https://twitter.com/">
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-512.png" alt="Twitter" /> 
        </a>

        <a href="mailto:info@example.com">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Gmail_envelope_letter_email-512.png" alt="Email" />
        </a>
      </div>
        <p className="webLink flex justify-center mt-3"> https://urbanbloom.surge.sh</p>
    </form>
    
    </>
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
    <>
    <div>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
    <div className="logo-container "></div>
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
        className="w-1/2 ml-28 py-2 rounded-md btn"  
      >
        Sign Up
      </button>
      <div className="social-Icons">
        <a href="https://www.facebook.com/">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png" alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png" alt="Instagram" />
        </a>

        <a href="https://twitter.com/">
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-512.png" alt="Twitter" /> 
        </a>

        <a href="mailto:info@example.com">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Gmail_envelope_letter_email-512.png" alt="Email" />
        </a>
        </div>
        <p className="webLink flex justify-center mt-3"> htts://urbanbloom.surge.sh</p>
    </form>
      </div>
    </>
  )
}

export default Login;
