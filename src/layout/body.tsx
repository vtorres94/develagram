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
        <div style={{ minHeight: '800px'}}>
            <Routes/> 
        </div>
    );
}

export default Body;