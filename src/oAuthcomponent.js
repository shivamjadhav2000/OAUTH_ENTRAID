import React from 'react';
import { useOAuth } from 'react-oauth';

const Auth = () => {
  const { loading, error, signIn, signOut, data } = useOAuth({
    provider: 'microsoft',
    clientId: ' e135f58b-232a-42ed-8301-d9c02f23ec60',
    redirectUri: 'google.com',
    scopes: ['openid', 'profile', 'email'],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data ? (
        <>
          <p>Welcome, {data.name}!</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={signIn}>Sign In with Microsoft</button>
      )}
    </div>
  );
};

export default Auth;
