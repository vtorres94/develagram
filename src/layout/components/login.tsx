import React, { useState } from 'react';
import * as firebase from 'firebase';
import { useUser } from '../../reducers/user-context';
import { Segment, Responsive, Header, Input, Button, Icon, Grid } from 'semantic-ui-react';
import { Link, RouteComponentProps } from 'react-router-dom';

export interface LoginProps extends RouteComponentProps {}

const Login: React.SFC<LoginProps> = props => {
    const { setUser } = useUser();
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const handleAuth = () => {
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
            style={{
                /* width: '600px',
                height: 'auto',
                // boxShadow: '0px 0px 8px',
                position: 'absolute',
                marginLeft: '35%',
                marginRight: '30%', */
                position: 'absolute',
                textAlign: 'center',
                borderRadius: '3px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.9)',
            }}
        >
            <Responsive>
                <Grid >
                    <Grid.Column largeScreen={16}>
                        <Header as='h1' color='blue'>
                            <Header.Content>
                                Login<br/>
                                <Icon name="lock"/>
                            </Header.Content>
                        </Header>
                        <label>Email </label><br/>
                        <Input 
                            value={email}
                            onChange={event => setEmail(event.currentTarget.value)}
                        /><br/>
                        <label>Password </label><br/>
                        <Input
                            type='Password'
                            value={pass}
                            onChange={event => setPass(event.currentTarget.value)}
                        /><pre/>
                        <label>No tienes una cuenta? </label><a href={'/register'}>Registrate</a><pre/>
                        <Button color='blue' onClick={handleAuth}>
                            Login
                        </Button>
                        <Button color='red' onClick={handleAuth}>
                            Login with Google
                        </Button>
                    </Grid.Column>
                </Grid>
            
            </Responsive>
        </Segment.Group>
    );
}

export default Login;