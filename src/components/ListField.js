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
             key={pokemon}
             onClick={()=> handleClickPokemon(pokemon)}
            >
              <span>{pokemon}</span>
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
