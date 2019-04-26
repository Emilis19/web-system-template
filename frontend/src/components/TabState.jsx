import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default class TabState extends React.Component{
 constructor (props){
   super(props);
 }
 
  render () {

    return (
    
    <Navbar as="span" bg="dark" variant="dark">
    <Container>
    <Form inline>
    <Navbar.Brand className="">Library</Navbar.Brand>
    <Button as="span" variant="dark" onClick={() => this.props.changeState('search')}>Search</Button>
    <Button as="span" variant="danger" onClick={() => this.props.changeState('favorites')}>Favorites</Button>
    </Form>
    </Container>
    </Navbar>

    );
    }
}