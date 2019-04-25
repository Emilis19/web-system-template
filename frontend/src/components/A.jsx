import React from 'react';
import SearchList from './SearchList';
import BookList from './BookList';
import TabState from './TabState';

export default class A extends React.Component{
 constructor (props){
   super(props);
   this.state = {selected: 'search'}
   this.onSetSelected = this.onSetSelected.bind(this);
 }

 onSetSelected(selected){
   this.setState({selected : selected})
 }
 
  render () {
    let content;
    switch(this.state.selected) {
    case 'search' : {content = <SearchList></SearchList>} break;
    case 'favorites' : {content = <BookList></BookList>} break;
    }

    return (
    <div>
      <TabState changeState={this.onSetSelected}></TabState> 
      {content} 
    </div>);
  
    }
}