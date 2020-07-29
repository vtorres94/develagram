import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    updating: false,
    error: '',
    post: {},
    token: ''
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case 'USER_LOGIN':
            // setUser({ ...user, token: action.payload })
            return {
                loading: false,
                error: '',
                post: action.payload,
                token: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something wrong',
                post: {}
            }
        default:
            return state;
    }
}

export const UserLogin = ( email: string, password: string ) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        axios
            .post('http://localhost:3333/api/v1/users/login', {
                email:'user@gmail.com',
                password: 'user'
            })
            .then(response => {
                console.log(response.data)
                dispatch({ type: 'USER_LOGIN', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR'})
            })
    }, [])

    return state?.post;
}
