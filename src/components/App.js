import React,{Component} from 'react'
import AutoComplete  from './AutoComplete'
import ListField from "./ListField";
import list from '../data/data'

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            pokemonList:[],
            text:'',
            active:false
        }
   
    }
    handleOpen = (active)=>{
        this.setState({active})
    }

    render(){
        const {active} =this.state
        return(
            <>
                <AutoComplete  handleOpen={this.handleOpen}>
                    <ListField isOpen={active} list ={list}/>
                </AutoComplete>
            </>
        )
    }
}
export default App