import React from 'react';


class SearchBar extends React.Component{


state={
    term:''
}

onInputChange = event => {  
    this.setState({
        term: event.target.value
    })
}
onFormSubmit = event => { 
    event.preventDefault();   
    this.props.onFormSubmit(this.state.term); //calling parent component
}

    render(){
        return(
       <div className="container">
           <form onSubmit={this.onFormSubmit} className="formContainer">
           <div className="inputContainer">
            <button className="ui inverted teal button" data-inverted="" data-tooltip="Refresh the Page" data-position="right center"><a href='/'>Video Search</a></button>
            <input type="text" placeholder="Search here..." onChange={this.onInputChange} value={this.state.term}></input>
            </div>
           </form>
       </div>
         
        );
    }
}
export default SearchBar;