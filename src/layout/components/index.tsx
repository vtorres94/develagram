import React, { useState, useEffect } from 'react';
import { Responsive, Segment, Grid, Image, Header, Button, Icon, Label } from 'semantic-ui-react';
import { TextField } from '@material-ui/core';
import FileUpload from '../components/fileUpload'
import { useUser } from '../context/user-context';
import { Link } from 'react-router-dom';

export interface IIndexProps {}
export interface IIndexState {
    name: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string,
    nameValid: boolean,
    emailValid: boolean,
    phoneValid: boolean,
    passwordValid: boolean,
    confirmPasswordValid: boolean
}
const Index: React.SFC = (props:IIndexProps) => {
    const { signIn, user, setUser } = useUser();
    const [ state, setState ] = useState<IIndexState>({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        nameValid: true,
        emailValid: true,
        phoneValid: true,
        passwordValid: true,
        confirmPasswordValid: true
    });

    const [ ww, setWw ] = useState<number>(window.innerWidth);
    
    useEffect(()=>{
        window.addEventListener("resize", () => setWw(typeof window !== "undefined" ? window.innerWidth : 0))
    }, []);

    const validateFields = () => {
        setState({
            ...state,
            nameValid: state.name.trim() !== '' ? true : false,
            emailValid: state.email.trim() !== '' ? true : false,
            phoneValid: state.phone.trim() !== '' ? true : false,
            passwordValid: state.password.trim() !== '' ? true : false,
            confirmPasswordValid: state.password === state.confirmPassword ? true : false
        })
    }
    const registrarUsuario = async () => {
        await validateFields();
        const { emailValid, passwordValid, phoneValid, nameValid } = state;
        if (emailValid && passwordValid && phoneValid && nameValid) {
            const response = await signIn(state.email, state.password, state.phone, state.name);
            console.log(response)
            switch(response?.data) {
                case 'email error':
                    setState({...state, emailValid: false})
                    break;
                case 'password error':
                    setState({...state, passwordValid: false})
                    break;
                case 'phone error':
                    setState({...state, phoneValid: false})
                    break;
                case 'name error':
                    setState({...state, nameValid: false})
                    break;
            }
        }
    }
    return(
        <Segment.Group style={{ marginTop: '25px', marginLeft: ww < 700 ? '0%' : '25%', marginRight: ww > 700 ? '25%' : '0%' }}>
        {user?
            <Responsive as={Segment}>
            <Grid>
                {/* <FileUpload/> */}
            </Grid>
            </Responsive>
        :
            <Responsive as={Grid} style={{ backgroundColor: '#fafafa'}}>
                <Grid columns={2}>
                    <Grid.Column largeScreen={8}>
                        <Image src={require('../../assets/images/signup.png')} size='large' floated='right'/>
                    </Grid.Column>
                    <Grid.Column largeScreen={8}>
                        <Responsive as={Segment} style={{ textAlign: 'center', width: '40%', minWidth: '150px', marginTop: '20px' }}>
                            <Header>
                                <Header.Content as='h2' style={{ fontFamily: 'Roboto', marginTop: '50px' }}>
                                    Develagram
                                </Header.Content>
                                <Header.Subheader>
                                    Regístrate y comparte fotos con tus amigos!
                                </Header.Subheader>
                            </Header>
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Nombre *'
                                variant='outlined'
                                value={state.name}
                                onChange={event => 
                                    setState({
                                        ...state,
                                        name: event.currentTarget.value,
                                        nameValid: event.currentTarget.value.trim() !== '' ? true : false 
                                    })
                                }
                            /><pre/>
                            {!state.nameValid ? <Label color='red'>Nombre invalido</Label> : null}
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Correo *'
                                variant='outlined'
                                type='email'
                                value={state.email}
                                onChange={event => 
                                    setState({
                                        ...state,
                                        email: event.currentTarget.value,
                                        emailValid: event.currentTarget.value.trim() !== '' ? true : false 
                                    })
                                }
                            /><pre/>
                            {!state.emailValid ? <Label color='red'>El correo ya está registrado</Label> : null}
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Teléfono *'
                                variant='outlined'
                                value={state.phone}
                                onChange={event => 
                                    setState({
                                        ...state,
                                        phone: event.currentTarget.value,
                                        phoneValid: event.currentTarget.value.trim() !== '' ? true : false 
                                    })
                                }
                            /><pre/>
                            {!state.phoneValid ? <Label color='red'>El teléfono ya está registrado</Label> : null}
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Contraseña *'
                                variant='outlined'
                                type='password'
                                value={state.password}
                                onChange={event => 
                                    setState({
                                        ...state,
                                        password: event.currentTarget.value,
                                        passwordValid: event.currentTarget.value.trim() !== '' ? true : false 
                                    })
                                }
                            /><pre/>
                            {!state.passwordValid ? <Label color='red'>Contraseña invalida</Label> : null}
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Confirma tu contraseña'
                                variant='outlined'
                                type='password'
                                value={state.confirmPassword}
                                onChange={event => 
                                    setState({
                                        ...state,
                                        confirmPassword: event.currentTarget.value,
                                        confirmPasswordValid: event.currentTarget.value === state.password ? true : false 
                                    })
                                }
                            /><pre/>
                            {!state.confirmPasswordValid ? <Label color='red'>No coincide con la contraseña</Label> : null}
                            <Button color='blue' onClick={registrarUsuario}>Registrate</Button><pre/>
                            <Button color='red'>Registrate con&nbsp;&nbsp; <Icon name='google plus g'/></Button><pre/>
                            <Header>
                                <Header.Content>
                                    Ya tienes una cuenta?
                                </Header.Content>
                                <Header.Subheader>
                                    <Link to='/login'>Inicia Sesión</Link>
                                </Header.Subheader>
                            </Header>
                        </Responsive>
                    </Grid.Column>
                </Grid>
            </Responsive>
        }
        </Segment.Group>
    );
}

export default Index;