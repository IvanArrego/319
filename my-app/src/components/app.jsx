import React from 'react';
import EnterName from './entername';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.order(this.state);
        this.setState({
          name: '',
          credit: '',
          address: ''
        });
      }

    getName(name){
        
    }

    render(){
        return (
        <EnterName handleChange={this.handleChange} name={this.state.name}/>
        )
    }
}

