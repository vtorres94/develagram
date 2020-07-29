import React, { useState } from 'react';
import * as firebase from 'firebase';
import { useUser }  from '../context/user-context';
import { Segment, Responsive, Header, Input, Button, Icon, Grid } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router-dom';
import { loginStyles } from './styles'
export interface LoginProps extends RouteComponentProps {}

const Login: React.SFC<LoginProps> = props => {
    const { setUser, login } = useUser();
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const handleAuth = () => {
        login(email, pass);
    }
    const handleAuthFirebase = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                setUser(result.user);
                console.log('User : '+result.user?.displayName);
                props.history.push('/')
            })
            .catch(error => console.log('ERROR ' + error.code + ' ' + error.message));
    }
    return(
        <Segment.Group
            style={loginStyles}
        >
            <Responsive>
                <Header as='h1' color='blue'>
                    <Header.Content>
                        Login<br />
                        <Icon name="lock" />
                    </Header.Content>
                </Header>
                <label>Email </label><br />
                <Input
                    value={email}
                    onChange={event => setEmail(event.currentTarget.value)}
                /><br />
                <label>Password </label><br />
                <Input
                    type='Password'
                    value={pass}
                    onChange={event => setPass(event.currentTarget.value)}
                /><pre />
                <label>No tienes una cuenta? </label><a href={'/register'}>Registrate</a><pre />
                <Button color='blue' onClick={handleAuth}>
                    Login
                        </Button>
                <Button color='red' onClick={handleAuthFirebase}>
                    Login with Google
                        </Button>
            </Responsive>
        </Segment.Group>
    );
}

export default Login;