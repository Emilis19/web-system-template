import React from 'react';
import Button from 'react-bootstrap/Button';

export default class TabState extends React.Component{
 constructor (props){
   super(props);
 }
 
  render () {

    return (
    <div>
      <Button variant="dark" onClick={() => this.props.changeState('search')}>Search</Button>
      <Button variant="danger" onClick={() => this.props.changeState('favorites')}>Favorites</Button>
    </div>);
  
    }
}