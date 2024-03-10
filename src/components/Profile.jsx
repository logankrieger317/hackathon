import React from 'react'
import { Link } from 'react-router-dom';


function Profile() {
  return (
    <>
    <div>Profile Page</div>
    <Link to="/editprofile" className="text-blue-500 underline"> 
      <p>Edit Profile</p>
    </Link>
    <Link to="/favorites" className="text-blue-500 underline"> 
      <p>View My Favorites</p>
    </Link>

    </>

  )
}

export default Profile