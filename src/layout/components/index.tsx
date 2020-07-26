import React from 'react';
import { Responsive, Segment, Grid } from 'semantic-ui-react';
import { useUser } from '../../reducers/user-context';
import FileUpload from '../components/fileUpload'

export interface IIndexProps {}

const Index: React.SFC = (props:IIndexProps) => {
    const { user } = useUser();
    return(
        
        <Segment.Group>
            {user? 
            <Responsive as={Segment}>
            <Grid>
                <FileUpload/>
            </Grid>
            </Responsive>
            :null}
        </Segment.Group>
    );
}

export default Index;