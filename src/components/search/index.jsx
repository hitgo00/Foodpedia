import React, { Component } from "react";
import { debounce } from "lodash";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
    };
  }

  imgsearch = (query) => {
    const request = require("request");
    request.get(
      {
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: {
          "X-Api-Key": "IvocvEFKL6QxwxtZC1WPIT2AofJlV4JS3ctsE6Ng",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode !== 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          console.log(body);
          //this.setState({searchData : body});
        }
      }
    );
  };

  search = debounce((query) => {
    const request = require("request");
    request.get(
      {
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: {
          "X-Api-Key": "IvocvEFKL6QxwxtZC1WPIT2AofJlV4JS3ctsE6Ng",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode !== 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          console.log(body);
          //this.setState({searchData : body});
        }
      }
    );
  }, 1000);

  render() {
    return (
      <div>
        <h1>TextSearch</h1>
        <input
          type="text"
          onChange={(event) => this.search(event.target.value)}
        />
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.map((item) => (
                <div className="search-row"> {item} </div>
              ))}
            </div>
          ) : (
            "-------------------------"
          )}
        </div>

        <h1>ImageSearch</h1>
        <input
          type="text"
          onChange={(event) => this.imgsearch(event.target.value)}
        />
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.map((item) => (
                <div className="search-row"> {item} </div>
              ))}
            </div>
          ) : (
            "-------------------------"
          )}
        </div>
      </div>
    );
  }
}

export default Search;
