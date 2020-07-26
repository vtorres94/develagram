import React, {useState} from 'react';
import { Image } from 'semantic-ui-react';
export interface IFileUploadProps {

}

const FileUpload: React.SFC<IFileUploadProps> = props => {
    const [file, setFile] = useState<FileList | null>();
    const [uploadValue, setUploadValue] = useState();

    const onFilesChange = (files: any) => {
        console.log(files)
    }
    const onFilesError = (error: any, file: any) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    return (
        <div>
            <label>{file ? file[0].name : null}</label><br/>
            <progress value={uploadValue} max={100}></progress><br/>
            <input type='file' onChange={event => setFile(event.target.files) } />
            <Image src={file ? file[0].name : ''}/>
        </div>
    )
}

export default FileUpload;

