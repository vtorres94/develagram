import React, { useState } from 'react';
import * as firebase from 'firebase';
import { useUser }  from '../context/user-context';
import { Segment, Responsive, Header, Input, Button, Icon, Grid, Modal} from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router-dom';
import { loginStyles } from './styles'
import { TextField } from '@material-ui/core';
export interface LoginProps extends RouteComponentProps {}

const Login: React.SFC<LoginProps> = props => {
    const { user, setUser, login } = useUser();
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ open, setOpen ] = useState<boolean>(true);
    const handleAuth = async () => {
        await login(email, pass);
        if (user?.user !== '') { props.history.push('/')} else { console.log('no entro al if perro')}
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
    const handleClose = () => {
        props.history.goBack();
        setOpen(false)
    }
    return(
        <Modal
            open={open}
            centered
            closeOnEscape={true}
            closeIcon
            onClose={handleClose}
            closeOnTriggerBlur
            size='mini'
        >
            <Modal.Content>
                <Segment.Group>
                    <Responsive clearing style={{ textAlign: 'center', height: '350px' }}>
                        <Header as='h1' color='blue' style={{ marginTop: '50px'}}>
                            <Header.Content>
                                Login<br />
                                <Icon name="lock" />
                            </Header.Content>
                        </Header>
                        <TextField
                            style={{ width: '70%' }}
                            label='Correo'
                            value={email}
                            onChange={event => setEmail(event.currentTarget.value)}
                            variant='outlined'
                            size='small'
                        /><pre />
                        <TextField
                            style={{ width: '70%' }}
                            label='Contraseña'
                            type='Password'
                            value={pass}
                            onChange={event => setPass(event.currentTarget.value)}
                            variant='outlined'
                            color='secondary'
                            size='small'
                        /><pre />
                        <label>No tienes una cuenta? </label><a href={'/register'}>Registrate</a><pre />
                        <Button color='blue' onClick={handleAuth} >
                            Login
                        </Button>
                        <Button color='red' onClick={handleAuthFirebase}>
                            Login with Google
                        </Button>
                    </Responsive>
                </Segment.Group>
            </Modal.Content>
            
        </Modal>
    );
}

export default Login;