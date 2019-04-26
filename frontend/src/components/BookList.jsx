import React from 'react';
import Button from 'react-bootstrap/Button';
import {getBooks, deleteBook, getFilteredBooks} from '../models/bookModel';
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
            state: 'favorites',
            sort: 'descending'
        }
        this.onclick = this.onclick.bind(this);
    }
    
    componentDidMount() {
        getBooks()
        .then(json => {
            this.setState({ books : json })
        })
        .catch(function(error) {console.log(error)});
    }

    onclick(id){
        deleteBook(id)
        .then(() => {
            return getBooks()
            })
            .then(json => {
                this.setState({ books : json })
            })
        .catch(function(error) {console.log(error)});
    }



    onFilterBooks(){    
        if (this.state.sort == "ascending"){
            this.state.sort = "descending"
        }
        else{       
            this.state.sort = "ascending"
        }
      //  console.log(getFilteredBooks(this.state.sort));
        getFilteredBooks(this.state.sort)
        .then(filteredBooks => {
        this.setState({ books : filteredBooks })
        })
    }
    
    render(){
        return (
            <div className="text-center">
            <div><Button variant="primary" value= "sort"onClick={() => {this.onFilterBooks()}}>Sort</Button></div>
            <div>
            {
            this.state.books.map((books) => {
                let {title, imageLinks , infoLink} = books.volumeInfo
                    return (
                        <div key={books.id}>
                        <a href ={infoLink}
                        target = "_blank"
                        style={style.book}>
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
                }</div>
                </div>

        );
    }
}

        

