import React from 'react';
import FileUpload from './components/fileUpload';
import firebase from 'firebase';
import Routes from './routes';

export interface IBodyProps {};

const Body: React.SFC<IBodyProps> = props => {
    const handleUpload = (src: string) => {
        const storageRef = firebase.storage().ref(`/fotos/${src}`);
        console.log('Archivo : '+ src);
    }
    return (
        <div style={{ backgroundColor: '#fafafa', minHeight: '700px'}}>
            <Routes/> 
        </div>
    );
}

export default Body;