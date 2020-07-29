import React, { useContext } from 'react';
import { useUser } from './context/user-context';

export interface IFooterProps {}
const Footer: React.SFC<IFooterProps> = props => {
    const { user } = useUser();
    return(
        <div style={{ position: 'unset', border: '1px solid red'}}>
            <h1>
                {user? user.email : 'No se ha iniciado sesion'}<br/>
                {user? user.img : 'No hay foto'}
                {console.log(`${user?.email}`)}
                {console.log(`${user?.img}`)}
            </h1> 
        </div>
    )
}

export default Footer;