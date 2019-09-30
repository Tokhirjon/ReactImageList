import React from "react";
class SearchBar extends React.Component {
  state = { term: " " };

  onFormSubmit = event => {
    event.preventDefault();
    // event.stopPropagation();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ backgroundColor: "#4F6C8F" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ fontSize: "19px", color: "white", marginLeft: '5px' }}>
              Image Search
            </label>
            <input
              type="text"
              placeholder="Type here ..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
