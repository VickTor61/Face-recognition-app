import React, { Component } from "react";
import Background from "./Background";
import Form from "./form/Form";
import FaceRecognition from "./FaceRecognition";
import Navigation from "./signin/Navigation";
import Rank from "./rank/Rank";
import Brain from "./brain/Brain";
import SignIn from "./signin/SignIn";
import Register from "./signin/Register";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageurl: "",
      box: {},
      isSignedin: false,
      route: "home",
    };
  }

  calculateFaceLocation = (data) => {
    const box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("imginput");
    const height = Number(image.height);
    const width = Number(image.width);

    return {
      left_col: box.left_col * width,
      top_row: box.top_row * height,
      bottom_row: height - box.bottom_row * height,
      right_col: width - box.right_col * width,
    };
  };

  displayFaceBox = (data) => {
    this.setState({ box: data });
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = () => {
    this.setState({ imageurl: this.state.input });

    const USER_ID = process.env.REACT_APP_USER_ID;
    const PAT = process.env.REACT_APP_API_KEY;
    const APP_ID = "Face-recognition";
    const MODEL_ID = "face-detection";

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    if (this.state.imageurl.length > 0) {
      fetch(
        "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => this.displayFaceBox(this.calculateFaceLocation(data)));
    }
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
    if (route === "home") {
      this.setState({ isSignedin: true });
    } else {
      this.setState({ isSignedin: false });
    }
  };

  render() {
    return (
      <div className="App">
        <Background />
        <Navigation
          isSignedin={this.state.isSignedin}
          onRouteChange={this.onRouteChange}
        />

        {this.state.route === "home" ? (
          <div>
            <Brain />
            <Rank />
            <Form
              buttonSubmit={this.handleSubmit}
              inputHandler={this.handleInput}
            />
            <FaceRecognition
              imageurl={this.state.imageurl}
              boundary_box={this.state.box}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
