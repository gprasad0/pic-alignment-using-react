import React, { Component } from "react";
import ImageList from "./Components/Images";
import SearchBar from "./Components/SearchBar";
import Api from "./Components/Api";
class App extends Component {
  state = {
    images: []
  };
 
  onSearchSubmit = async term => {
    const response = await Api.get("/search/photos", {
      params: { query: term }
    });
    this.setState({
      images: response.data.results
    });

    console.log("this the response",response.data.results);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitImage={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
