import React from 'react';
import Button from 'react-bootstrap/Button';
//import PropTypes from 'prop-types';
const style = {
    book: {
        display: 'inline-block',
        width: '220px',
        height: '220px',
        margin: '10px',
        textAlign: 'left',
        cursor: 'pointer',
        position: 'relative',
    },
    bookImage: {
        width: '220px',
        height: '220px',
        border: '4px solid #000',
        borderRadius: '4px',
        objectFit: 'cover',
        position: 'absolute'
    },
    titleText: {
        backgroundColor: '#000',
        color: '#fff',
        opacity: '0.75',
        width: '214px',
        marginLeft: '3px',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        padding: '10px'
    
    }
}

export default class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            state: 'favorites'
        }
        this.onclick = this.onclick.bind(this);
    }
    
   /* getBooks = () => fetch('/api/books')
    .then(response => response.json());*/

    componentDidMount() {
        fetch('/api/books', {
            method: 'GET',
        })
        .then(results => results.json())
        .then(json => {
            this.setState({ books : json })
        })
        .catch(function(error) {console.log(error)});
    }

    onclick(id){
        fetch('/api/book/'+ id, {
            method: 'DELETE',
        })
        .then(results => results.json())
        .then(() => {
            return fetch('/api/books', {
                method: 'GET',
            })
            .then(results => results.json())
            .then(json => {
                this.setState({ books : json })
            })
            .catch(function(error) {console.log(error)});
        })
        .catch(function(error) {console.log(error)});
    }

    render(){
        return (
            this.state.books.map((books) => {
                let {title, imageLinks , infoLink} = books.volumeInfo
                
                    return (
                        <div>
                        <a href ={infoLink}
                        target = "_blank"
                        key={books.id} style={style.book}>
                        <img 
                        src ={imageLinks !== undefined? imageLinks.thumbnail : ''} 
                        alt = "book image"
                        style={style.bookImage}
                        />
                        <div style={style.titleText}>{title }</div>
                        </a>
                        <div><Button variant="primary" value= "delete"onClick={() => {this.onclick(books.id)}}>Remove</Button></div>
                        </div>          
                    );
            })
        
        );
    }
};

        

