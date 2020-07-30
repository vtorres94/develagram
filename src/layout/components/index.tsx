import React from 'react';
import { Responsive, Segment, Grid, Image, Header, Button, Icon } from 'semantic-ui-react';
import { TextField } from '@material-ui/core';
import FileUpload from '../components/fileUpload'
import { useUser } from '../context/user-context';
import { Link } from 'react-router-dom';

export interface IIndexProps {}

const Index: React.SFC = (props:IIndexProps) => {
    const { user, setUser } = useUser();

    return(
        <Segment.Group style={{ marginTop: '25px', marginLeft: '10%', marginRight: '10%' }}>
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
                                label='Nombre'
                                variant='outlined'
                            /><pre/>
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Correo'
                                variant='outlined'
                                type='email'
                            /><pre/>
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Telefono'
                                variant='outlined'
                            /><pre/>
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Contraseña'
                                variant='outlined'
                                type='password'
                            /><pre/>
                            <TextField
                                style={{ width: '90%' }}
                                size='small'
                                label='Confirma tu contraseña'
                                variant='outlined'
                                type='password'
                            /><pre/>
                            <Button color='blue'>Registrate</Button><pre/>
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