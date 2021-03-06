import React, { useState, useMemo, useCallback, useEffect } from 'react'
import axios from 'axios';
import UserModel from '../../models/User.model';

export interface ContextProps {
  user: UserModel | null,
  setUser: any,
  signIn: any,
  login: any,
  logout: any,
  loading: boolean,
  error: boolean,
}
export const UserContext = React.createContext<Partial<ContextProps>>({});
const api = 'http://localhost:3333/api/v1/users/'
export default function UserContextProvider(props: any) {
  const [user, setUser] = useState<UserModel | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=>{
    getUser(window.sessionStorage.getItem('jwt'));
  }, []);

  const login = async (email: string, password: string) => {
      await axios
        .post(api + 'login', {
          email,
          password
        })
        .then(response => {
          console.log(response);
          setError(false);
          window.sessionStorage.setItem('jwt', response.data.token)
          getUser(response.data.token);
        })
        .catch(error => {
              console.log('error al iniciar sesion')
              setError(true);
        })
    return user;
  }

  const signIn = async (email: string, password: string, phone: string, name: string) => {
    await axios
      .post(api + 'signin', {
        email,
        password,
        phone,
        name,
        username : email
      })
      .then(response => {
        console.log(response);
        setError(false);
        return response
      })
      .catch(error => {
        console.log(error.message)
        setError(true);
      })
  return user;
}

  const getUser = async (token: string | null) => {
    await axios
      .get(api, {
        headers: { 
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response)
        setUser({ email: response.data.email, user: response.data.username, img: 'image', active: true })
      })
      .catch(error => {
        console.log('error despues de iniciar sesion')
      })
  }

  const logout = useCallback(() => {
    setUser(null);
    window.sessionStorage.removeItem('jwt')
  }, [])

  const value = useMemo(() => {
    return ({
      user,
      setUser,
      signIn,
      login,
      logout,
      loading,
      error
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
