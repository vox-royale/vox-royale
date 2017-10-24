import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import StartBtn from "../../components/StartBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./main.css";

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
            <Jumbotron>
                <div id="title-container">
                <img src="Favi.png" alt="mic"/>
                    <h1 id="vox-title">VOX Royale</h1>
                </div>
                <br />
                <br />
                <Link to="/login">
                    <StartBtn>
                        <i className="fa fa-microphone" aria-hidden="true"></i> Start
                    </StartBtn>
                </Link>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
