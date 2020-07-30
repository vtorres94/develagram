import React, { useContext } from 'react';
import { useUser } from './context/user-context';
import { Segment } from 'semantic-ui-react';

export interface IFooterProps {}
const Footer: React.SFC<IFooterProps> = props => {
    const { user } = useUser();
    return(
        <Segment attached='bottom'>
            <h1>
                {user? user.email : 'No se ha iniciado sesion'}<br/>
                {user? user.img : 'No hay foto'}
                {console.log(`${user?.email}`)}
                {console.log(`${user?.img}`)}
            </h1> 
        </Segment>
      
    )
}

export default Footer;