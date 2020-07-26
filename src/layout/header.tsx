import React from 'react';
import { useUser } from '../reducers/user-context';
import * as firebase from 'firebase';
import { Segment, Responsive, Header as TextHeader, Button, Image } from 'semantic-ui-react';
import { ReactComponent as Logo } from '../assets/icons/desarrollo-web.svg'
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
                className="banner"
                style={{
                    position: 'static',
                    backgroundColor: 'black',
                    height: '350px',
                    textAlign: 'center',
                    marginBottom: '0'
                }}
            >
                <TextHeader as='h1' color='black' inverted style={{ fontSize: 60, marginTop: 90, fontFamily: 'Jazz LET'}}>
                    <TextHeader.Content>
                        Develagram
                    </TextHeader.Content>
                    <TextHeader.Subheader>
                        <Logo style={{ width: 80, height: 80}} />
                    </TextHeader.Subheader>
                </TextHeader>
                {user?
                    <Image avatar floated='right' src={user.photoURL}/>
                : null}
            </Segment.Group>
            <Button.Group attached='bottom' size='mini' color='black' floated='right'>
                <Button floated='right' as={Link} to='/'>Inicio</Button>
                <Button floated='right'>Info</Button>
                <Button floated='right' as={Link} to='/login'>Login</Button>
            </Button.Group>
        </div>
    )
}

export default Header;