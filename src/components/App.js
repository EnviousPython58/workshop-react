import React,{Component} from 'react'
import AutoComplete  from './AutoComplete'
import ListField from "./ListField";
import {searchingFor} from '../helpers'
class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            pokemonList:[],
            pokemonStorage:[],
            text:'',
            active:false
        }
   
    }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')
        .then((response) => response.json())
        .then((data) => this.setState({pokemonStorage:data.results,pokemonList:data.results}));
        
        
    }
    handleOpen = (active)=>{
        this.setState({active})
    }
    handleTextChange=(text)=>{
        const {pokemonStorage} = this.state
        const newPokemonList= pokemonStorage.filter(searchingFor(text)).map(pokemon =>pokemon)     
        this.setState({
            text,
            pokemonList:newPokemonList
        })
    }
    handleClickPokemon=(text)=>{
        this.setState({
            text
        })
    }
    render(){
        const {active,text,pokemonList} =this.state
        return(
            <>
                <AutoComplete onTextChange={this.handleTextChange} text={text} handleOpen={this.handleOpen}>
                    <ListField handleClickPokemon={this.handleClickPokemon} isOpen={active} text={text} list={pokemonList}/>
                </AutoComplete>
            </>
        )
    }
}
export default App