import axios from 'axios';
import React from 'react';


export default class PokemonList extends React.Component{
    state = {
        pokemones: []
    }
    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
        .then(res =>{
            console.log(res);
            this.setState({pokemones: res.data.cards})
        });
    }
    
    render(){
        return(
            <ul>
                {this.state.pokemones.map(pokemon => <li>{pokemon.name}</li>)}
            </ul>
        )
    }



    
}


