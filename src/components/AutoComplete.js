import React from "react";
import ListField from "./ListField";
class AutoComplete extends React.Component {
  render() {
    return (
      <div className="autocomplete">
        <input
          className="autocomplete__search"
          type="text"
          placeholder="Type a pokemon..."
        />
        <ListField/>
      </div>
    );
  }
}
export default AutoComplete