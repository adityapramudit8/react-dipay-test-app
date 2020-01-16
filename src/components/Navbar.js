import React from 'react'
import { Menu, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item style={{color: "#FFDD00"}} name="Dipay Ecommerce"/>
                <Link to='/'>
                    <Menu.Item style={{color: "#FFDD00"}} name="Home"/>
                </Link>
                <Link to='/admin'>
                    <Menu.Item style={{color: "#FFDD00"}} name="Admin"/>
                </Link>
            </Container>
        </Menu>
    );
}
