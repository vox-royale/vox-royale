import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import StartBtn from "../../components/StartBtn";
import { Link } from "react-router-dom";
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Login extends Component {
    state = {
        username: "",
        password: "",
        status: ""
    };

    componentDidMount = () => {

    }

    handleUserSubmit = event => {

        event.preventDefault();

        API.getUser({username: this.state.username, password: this.state.password})
        .then(res => this.setState({status: res.data}))
        // .then(console.log(this.state.status))
        .catch(err => console.log(err));

        // API.submitUserInfo(this.state.username, this.state.password)
        // .then(res => this.setState({ status: res.data }))
        // .catch(err => console.log(err));

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
                                <h1 id="vox-title">VOX Royale</h1>
                            </div>
                            <div id="login-container">
                                <form id="login-form">
                                    <br />
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
                                    <FormBtn
                                        disabled={(!this.state.username || !this.state.password)}
                                        onClick={this.handleUserSubmit}>
                                        Login
				    	            </FormBtn>
                                    <h2>{this.state.status}</h2>
                                </form>
                            </div>
                            <div id="sign-up">
                                <Link to="/signup">
                                <FormBtn
                                    onClick={this.handleUserSubmit}>
                                    Sign Up
                      </FormBtn>
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

export default Login;
