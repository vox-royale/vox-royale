import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import StartBtn from "../../components/StartBtn";
import { Link } from "react-router-dom";
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Signup extends Component {
    state = {
        username: "",
        password: "",
        verify: "",
        status: ""
    };

    componentDidMount = () => {

    }

    handleUserSubmit = event => {

        event.preventDefault();

        API.submitNewUserInfo({ username: this.state.username, password: this.state.password })
        .then(res => this.setState({ status: res.data }))
        .catch(err => console.log(err));

        // clear out input forms on submit
        this.setState({ username: "", password: "" });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render = () => {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <div id="title-container">
                                <h1 id="title">VOX Royale</h1>
                            </div>
                            <div id="login-container">
                                <form id="login-form">
                                    <label>Username {this.state.username}</label><br />
                                    <input
                                        name="username"
                                        onChange={this.handleInputChange}
                                        value={this.state.username}
                                        placeholder="Username" />
                                    <br /><br />
                                    <label >Password {this.state.password}</label><br />
                                    <input
                                        name="password"
                                        type="password"
                                        onChange={this.handleInputChange}
                                        value={this.state.password}
                                        placeholder="Password" />
                                    <br /><br />
                                    <label >Confirm Password {this.state.verify}</label><br />
                                    <input
                                        name="verify"
                                        type="password"
                                        onChange={this.handleInputChange}
                                        value={this.state.verify}
                                        placeholder="Confirm Password" />
                                    <br />
                                    <br />
                                    <FormBtn
                                        disabled={(!this.state.username || !this.state.password || this.state.verify !== this.state.password)}
                                        onClick={this.handleUserSubmit}>
                                        Signup
				    	            </FormBtn>
                                    <h2>{this.state.status}</h2>
                                </form>
                            </div>
                            <div id="sign-up">
                                <Link to="/login">
                                    Back to Login
                                </Link>
                            </div>
                            <br />
                            <Link to="/game">
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

export default Signup;