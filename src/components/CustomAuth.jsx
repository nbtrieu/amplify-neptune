import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { signUp as customSignUp } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const services = {
  async handleSignUp(input) {
    console.log("SignUp input received:", input);
    const username = input.username.toLowerCase();
    const password = input.password;
    const email = input.attributes?.email?.toLowerCase() ?? "";

    return customSignUp({
      username,
      password,
      attributes: {
        ...input.attributes,
        email: email,
      },
    });
  },
};

const CustomAuth = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle authentication state changes
  const handleAuthStateChange = (state) => {
    if (state === 'signedin') {
      navigate('/');  // Redirect to the home page after sign-in
    }
  };

  return (
    <Authenticator 
      initialState="signIn" 
      services={services} 
      onStateChange={handleAuthStateChange}
    >
      {({ signOut, user }) => (
        <div>
          <h1>Welcome, {user ? user.username : 'User'}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default CustomAuth;
