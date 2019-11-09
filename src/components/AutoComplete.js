import React from "react";
class AutoComplete extends React.Component {
  render() {
    const {handleOpen,onTextChange,text} = this.props
    return (
      <div className="autocomplete">
        <input
          className="autocomplete__search"
          type="text"
          placeholder="Type a pokemon..."
          value={text}
          onChange={(event)=>{
              const newText = event.target.value
              onTextChange(newText)
            }
          }
          onBlur={()=>{
              setTimeout(() => handleOpen(false), 300);
          }}
          onFocus={() => {
              handleOpen(true);
            }
          }
        />
        {this.props.children}
      </div>
    );
  }
}
export default AutoComplete