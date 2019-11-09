import React,{Component} from 'react'
import AutoComplete  from './AutoComplete'
import ListField from "./ListField";
import list from '../data/data'
import {searchingFor} from '../helpers'
class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            pokemonList:list,
            text:'',
            active:false
        }
   
    }
    handleOpen = (active)=>{
        this.setState({active})
    }
    handleTextChange=(text)=>{
        const newPokemonList= list.filter(searchingFor(text)).map(pokemon =>pokemon)      
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
                    <ListField handleClickPokemon={this.handleClickPokemon} isOpen={active} text={text} list ={pokemonList}/>
                </AutoComplete>
            </>
        )
    }
}
export default App