import React from 'react';
import { Responsive, Segment, Grid } from 'semantic-ui-react';
import FileUpload from '../components/fileUpload'
import { useUser } from '../context/user-context';

export interface IIndexProps {}

const Index: React.SFC = (props:IIndexProps) => {
    const { user, setUser } = useUser();

    return(
        <Segment.Group style={{ marginTop: '25px', marginLeft: '10%', marginRight: '10%'}}>
        {user?
            <Responsive as={Segment}>
            <Grid>
                {/* <FileUpload/> */}
            </Grid>
            </Responsive>
        :
            <Responsive as={Grid}>
                <Grid>
                    {/* <FileUpload/> */}
                </Grid>
            </Responsive>
        }
        </Segment.Group>
    );
}

export default Index;