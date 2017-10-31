import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import MainBtn from "../../components/StartBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
  state = {
    newArticles: [],
    savedArticles: [],
    topic: "",
    startDate: "",
    endDate: ""
  };

  componentDidMount() {
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.topic) {

      API.searchNYT(this.state.topic, this.state.startDate, this.state.endDate)
        .then(result => this.setState({newArticles: result.data.response.docs}))
        .then(result => console.log(this.state.newArticles))
        .catch(err => console.log(err));
    }

    // clear out input forms on submit
    this.setState( { topic: "", startDate: "", endDate: "" } );
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <img className="favi" src="Favi.png" alt=""/>
          <h1 id="title">VOX Royale</h1>
          <div className="jumbotron jumbotron-fluid jumbotron-title">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="main-block-header">{"Speech Therapy"}</h2>
                  <p>{"Everyone needs more diction in their life. Use Vox Royale to make those pesky consonants work for you! Practice every day and you'll be a diction master!"}</p>
                </div>
                <div className="col-md-6">
                <img className="img" src="Tech.png" alt="tech"/>
                </div>
              </div>
            </div>
          </div>
          <div className="jumbotron jumbotron-fluid jumbotron-title">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                <img className="img" src="Enun.png" alt="ennunciation"/>
                </div>
                <div className="col-md-6">
                  <h2 className="main-block-header">{"Accent Reduction"}</h2>
                <p>{"The English language got you down? Maybe it's not your first language? Don't worry. Vox Royale is here to help. Playing our fun and exciting tongue twister game is a great way to train your tongue, mouth, and brain to start spitting out some sweet English phrases. Play today!"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="jumbotron jumbotron-fluid jumbotron-title" id="last-jumbo">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="main-block-header">{"Party Game"}</h2>
                <p>{"Step 1: Play Vox Royale. Step 2: LOL. Repeat. That's the easiest recipe for a good time! Hours of fun and laughs can be yours at your next party by adding Vox Royale to the mix!"}</p>
                </div>
                <div className="col-md-6">
                <img className="img" src="Party.png" alt="party"/>
                </div>
              </div>
            </div>
          </div>
            <Jumbotron>
              <Link to="/game">
                  <MainBtn>
                      <i className="fa fa-microphone" aria-hidden="true"></i> Start Game
                  </MainBtn>
              </Link>
                <Link to="/practice">
                    <MainBtn>
                        <i className="fa fa-microphone" aria-hidden="true"></i> Practice
                    </MainBtn>
                </Link>
            </Jumbotron>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;