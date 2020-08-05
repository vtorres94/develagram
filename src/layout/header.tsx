import React, { useState, useEffect } from 'react';
import { useUser } from './context/user-context';
import * as firebase from 'firebase';
import { Segment, Responsive, Header as TextHeader, Icon } from 'semantic-ui-react';
import { headerStyles, headerLogoStyle } from './styles';
import UserMenu from './components/userMenu';
import { Link, RouteComponentProps } from 'react-router-dom';

export interface IHeaderProps extends RouteComponentProps<{ }>{}

const Header: React.SFC<IHeaderProps> = props => {
    const { user, setUser } = useUser();
    const [ ww, setWw ] = useState<number>(window.innerWidth);
    
    useEffect(()=>{
        window.addEventListener("resize", () => setWw(typeof window !== "undefined" ? window.innerWidth : 0))
    }, []);

    const handleLogOut = () => {
        firebase.auth().signOut()
            .then(result => setUser(firebase.auth().currentUser))
            .catch(error => console.log('ERROR ' + error.code + ' ' + error.message));
    }
    return(
        <div>
            <Segment.Group
                // className="banner"
                style={ headerStyles }
            >
                <Responsive as={Segment} style={{ marginLeft: ww < 768 ? '5%':'25%', marginRight: ww < 768 ? '5%':'25%' }}>
                    <TextHeader as={Link} color='black' style={ headerLogoStyle } to='/'>
                        <TextHeader.Content>
                            Develagram
                        </TextHeader.Content>
                    </TextHeader>
                    {user?
                    <div style={{ position: 'absolute', top: '20px', right: 0, width: '100px' }}>
                        <Link to='/'><Icon color='black' name='home' size='large'/></Link>
                        <Icon name='photo' size='large'/>
                        <UserMenu/>
                    </div>
                    :
                    <div style={{ position: 'absolute', top: '20px', right: 0, width: '20px' }}>
                        <Link to='/login'><Icon color='black' name='user' size='large'/></Link>
                    </div>
                    }
                </Responsive>
            </Segment.Group>
        </div>
    )
}

export default Header;