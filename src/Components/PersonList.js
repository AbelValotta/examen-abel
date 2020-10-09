import axios from 'axios';
import React from 'react';


export default class PersonList extends React.Component{
    state = {
        person: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res);
            this.setState({person: res.data})
        });
    }
    
    render(){
        return(
            <ul>
                {this.state.person.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}


