import React, { useState, useMemo, useCallback } from 'react'
import axios from 'axios';
import UserModel from '../../models/User.model';

export interface ContextProps {
  user: UserModel | null,
  setUser: any,
  login: any,
  logout: any
}
export const UserContext = React.createContext<Partial<ContextProps>>({});

export default function UserContextProvider(props: any) {
  const [user, setUser] = useState<UserModel | null>(null);

  const login = (email: string, password: string) => {
      axios
        .post('http://localhost:3333/api/v1/users/login', {
          email,
          password
        })
        .then(response => {
          // setUser({ token: response.data.token})
          window.sessionStorage.setItem('jwt', response.data.token)
        })
        .catch(error => {
          throw new Error('Error al iniciar sesión ' + error)
        })
    return user;
  }

  const logout = useCallback(() => {
    setUser(null);
    window.sessionStorage.removeItem('jwt')
  }, [])

  const value = useMemo(() => {
    return ({
      user,
      setUser,
      login,
      logout
    })
  }, [user]);

  return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('variables globales deben estar dentro del provedor');
  }
  return context;
}
