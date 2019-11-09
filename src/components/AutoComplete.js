import React from "react";
class AutoComplete extends React.Component {
  render() {
    const {handleOpen} = this.props
    return (
      <div className="autocomplete">
        <input
          className="autocomplete__search"
          type="text"
          placeholder="Type a pokemon..."
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