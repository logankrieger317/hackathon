import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

const updateUser = async (updatedUserData) => {
  try {
    const response = await axios.patch('http://localhost:3001/user/edit', updatedUserData);
    const updatedUser = response.data.user;
    setUser(updatedUser);
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
};

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
