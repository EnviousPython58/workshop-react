import React from "react";
const ListField = (props) => {
  const {list,isOpen,handleClickPokemon} = props
  if(!list) return null 
  return (
    <div className={`autocomplete__list ${isOpen?'active':null}`}>
      {
          list.length > 0 ?
          list.map(pokemon =>(
            <div className="autocomplete__link"
             key={pokemon.name}
             onClick={()=> handleClickPokemon(pokemon.name)}
            >
              <span>{pokemon.name}</span>
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
