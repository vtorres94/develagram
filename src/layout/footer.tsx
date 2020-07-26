import React from 'react';
import { useUser } from '../reducers/user-context';

export interface IFooterProps {}
const Footer: React.SFC<IFooterProps> = props => {
    const { user } = useUser();
    return(
        <div style={{ position: 'unset', border: '1px solid red'}}>
            <h1>
                {user? user.email : 'No se ha iniciado sesion'}<br/>
                {user? user.photoURL : 'No hay foto'}
                {console.log(`${user?.email}`)}
                {console.log(`${user?.photoURL}`)}
            </h1> 
        </div>
    )
}

export default Footer;