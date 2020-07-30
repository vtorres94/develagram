import React, { useState } from 'react'
import { Button, Popup, Input, Label, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useUser } from '../context/user-context';

const UserMenu = () => {
    const { logout } = useUser();
    const [ activeItem, setActiveItem ] = useState<string>();
    const handleLogOut = () => {
        logout();
        setActiveItem('logout');
    }
    return (
        <Popup trigger={<Button icon='user' circular as={Link} to="/user"/>} flowing hoverable position="bottom center">
            <Menu vertical>
                <Link onClick={() => setActiveItem('inbox')} to='/inbox'>
                    <Menu.Item
                    name='inbox'
                    active={activeItem === 'inbox'}
                    to='/inbox'
                    >
                        <Label color='teal'>51</Label>
                        Inbox
                    </Menu.Item>
                </Link>
                <Link onClick={() => setActiveItem('profile')} to='/profile'>
                    <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                    >
                        <Label>51</Label>
                        Profile
                    </Menu.Item>
                </Link>
                <Link onClick={handleLogOut} to='/'>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                    >
                        <Label>1</Label>
                        LogOut
                    </Menu.Item>
                </Link>
            </Menu>
        </Popup>
    )
}

export default UserMenu