import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Glyphicon from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
//require('../index.css');
import Gallery from './Gallery.jsx';
 
const style = {
  Global: {
    textAlign: 'center',
    padding: '10px'
}
}


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      query : '',
      items : []

    };
    this.search=this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event){
    if(event.key ==='Enter')
    this.search();

  }
 


  search(){
    let query = this.state.query;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(BASE_URL, {method:"GET"})
    .then(response =>  response.json())
    .then(json => {
      let {items} = json;
      this.setState({
        items : items
      })

    })
    console.log("veikia mygtukas" , this.state.query);
  }
  handleChange(event){
    this.setState({
      query: event.target.value
    })
  }
  render() {
    return (
     <div style={style.Global}>
     <h2>Book search</h2>
     <FormGroup>
     <InputGroup>
     <FormControl type="text" placeholder="Book title or author" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
     <InputGroup onClick={this.search}>
     <Button variant="outline-dark"><i className="glyphicon glyphicon-search"></i></Button>
     </InputGroup>
     </InputGroup>
     
     
     </FormGroup>
     <Gallery items={this.state.items} />
     </div>
      );
  }
}
