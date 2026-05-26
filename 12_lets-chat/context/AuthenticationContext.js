import { createContext, useState } from 'react';

const AuthenticationContext = createContext({
  user: null,
  setUser: () => {},
});

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationProvider, AuthenticationContext };