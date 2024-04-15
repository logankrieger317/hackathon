import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from './UserContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import parkAndSkylineImage from '../images/parkAndSkyline.jpeg';


function Profile() {
  const { user } = useUser();

  return (
    <>
    <h1>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h1>
    <Link to="/editprofile" className="text-blue-500 underline"> 
      <p>Edit Profile</p>
    </Link>

    <h1>Test</h1>

    <span>_________________________________________________</span>

    <Link to="/favorites" className="text-blue-500 underline"> 
      <p>View My Favorites</p>
    </Link>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={parkAndSkylineImage} />
      <Card.Body>
        <Card.Title>MY SAVED PLANTS</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>

  )
}

export default Profile