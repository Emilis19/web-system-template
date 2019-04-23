import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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
const url = "/api/book"
export default class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.click.bind(this);
    }
    click(item){

        fetch(url, {method: "POST",
                    body: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
        )
        .then(function (response) {
            console.log(response.status);
            return response.json();  
        } )
    .then(function(responseValue){
        console.log(responseValue)
    })}
    render(){
        return (
            <div>
            {
                this.props.items.map((item) => {
                    let {title, imageLinks , infoLink} = item.volumeInfo
                    return (
                        <div>
                        <a href ={infoLink}
                        target = "_blank"
                        key={item.id} style={style.book}>
                        <img 
                        src ={imageLinks !== undefined? imageLinks.thumbnail : ''} 
                        alt = "book image"
                        style={style.bookImage}
                        />
                        <div style={style.titleText}>{title }</div>
                        
                        </a>
                        <div><Button variant="primary" value= "add" onClick={() => {this.click(item)}}>Add to favorites</Button></div>
                        </div>
              
                        
                    );
                })
            }</div>

        );
    }
}