import React from "react";
const ListField = (props) => {
  const {list,isOpen,handleClickPokemon} = props
  if(!list) return null
  console.log(list) 
  return (
    <div className={`autocomplete__list ${isOpen?'active':null}`}>
      {
          list.length > 0 ?
          list.slice(0, 15).map(pokemon =>(
            <div className="autocomplete__link"
             key={pokemon.name}
             onClick={()=> handleClickPokemon(pokemon.name)}
            >
             <img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png?raw=true`} alt={pokemon.name}/> <span>{pokemon.name}</span>
            </div>
          ) )
          :
          <div className="autocomplete__link">
            <span>Not Found</span>
          </div>
        }

    </div>
  );
}

export default ListField
