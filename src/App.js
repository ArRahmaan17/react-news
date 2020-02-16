import React from "react";
import { data } from "./Data";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { info: data };
  }
  render() {
    return (<div>
      <div className="navbar"><p>News App</p></div>
      {
        this.state.info.map((param) => {
          return (<div className="news">
            <div className="poto"><p><img src={param.thumbnail} /></p></div>
            <div className="text">
              <p>{param.title}</p><br />
              <p>{param.pubDate}</p><br />
              <p>{param.author}</p><br />
            </div>
          </div>
          )
        })
      }
      <br /><br /><br /><br />
    </div >
    )
  }
}

export default App;