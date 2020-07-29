import React, { useContext } from 'react';
import { useUser } from './context/user-context';
import * as firebase from 'firebase';
import { Segment, Responsive, Header as TextHeader, Button, Image, Icon } from 'semantic-ui-react';
import { ReactComponent as Logo } from '../assets/icons/desarrollo-web.svg'
import { headerStyles, headerLogoStyle, headerButtonGroup } from './styles';
import UserMenu from './components/userMenu';
import { Link } from 'react-router-dom';

export interface IHeaderProps {}

const Header: React.SFC<IHeaderProps> = props => {
    const { user, setUser } = useUser();
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
                <Responsive as={Segment}>
                    <TextHeader as={Link} color='black' style={ headerLogoStyle } to='/'>
                        <TextHeader.Content>
                            Develagram
                        </TextHeader.Content>
                            
                    </TextHeader>
                    {user?
                    <div style={{ position: 'absolute', top: '140px', right: 0, width: '100px' }}>
                        <Button icon='photo' circular></Button>
                        <UserMenu/>
                    </div>
                    : null}
                    {/* {user?
                        <div>
                            <Image avatar floated='right' src={user.img}/>
                            <UserMenu/>
                        </div>
                    :
                        <Segment floated="right" compact >
                            <Icon name='photo'/>
                            <Icon name='user'/>
                        </Segment>
                    } */}
                </Responsive>
            </Segment.Group>
        </div>
    )
}

export default Header;