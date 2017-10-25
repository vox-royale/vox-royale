import React, { Component } from "react";
import openSocket from "socket.io-client";
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
        status: "",
        socket: ""
    };

    componentDidMount = () => {

        const socket = openSocket("http://localhost:3001");
        const login = this;
		
		socket.on("connect", function(data) {
			socket.emit("join", "Hello Server from client id #");
		});

		socket.on("id", function(data) {
            login.setState({ socket: data });
		});
    }

    handleUserSubmit = event => {

        event.preventDefault();

        API.getUser({
            username: this.state.username,
            password: this.state.password,
            socket: this.state.socket
        })
        .then(res => this.setState({status: res.data}))
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
                                <h1 id="vox-title">VOX<span id="royale-badge">Royale</span></h1>
                            </div>
                            <div id="login-container">
                                <form id="login-form">
                                    <h3>Socket ID: {this.state.socket}</h3>
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
                                    Sign up for Vox Royale
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