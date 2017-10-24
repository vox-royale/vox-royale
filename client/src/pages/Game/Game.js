import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import StartBtn from "../../components/StartBtn";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import Player from "./Player";
import './game.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

class Game extends Component {
	state = {
		phrases: [],
		users: [],
		currPhraseToMatch: "",
		userPhrase: "",
		timer: 0,
		roundStatus: "",
		interval: "",
		inProgress: false
	};

	componentDidMount() {
		this.setState({phrases: [{title: "Press start to begin"}]});
	}

	loadUsers = () => {
		API.getUsers()
			.then(res =>
				this.setState({ users: res.data })
			)
			.catch(err => console.log(err));
	};

	loadPhrases = () => {
		API.getPhrases()
			.then(res =>
				this.setState({ phrases: res.data })
			)
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handlePhraseSubmit = event => {

		event.preventDefault();

		clearInterval(this.state.interval);

		let targetPhrase = this.state.phrases[0].title.trim();
		let userPhrase = this.state.userPhrase.trim();

		// quickly check for exact match
		if (targetPhrase === userPhrase) {
			this.setState({ roundStatus: "100% Match!" });
			return;
		};

		// otherwise head to server for comparison
		// returns percentage match string to display
		API.compare(targetPhrase, userPhrase)
			.then(res => {
				this.setState({ roundStatus: res.data });
			})
			.catch(err => console.log(err));
	};


	startGame = () => {
		clearInterval(this.state.interval);
		this.setState({
			timer: 0,
			interval: setInterval(this.increment, 1000),
			roundStatus: "",
			userPhrase: "",
			inProgress: true
		});
		this.loadPhrases();
	};

	increment = () => {
		this.setState({ timer: this.state.timer + 1 });
	};

	render() {
		return (
			<Container fluid>
				<Row>
					
					<Navbar /> 
					
				</Row><br /><br />
				<Row>
					<Col size="md-1">
					</Col>
					<Col size="md-2">
							
						  <div className="thumbnail" id="thumbBord1">
							<Player imgURL="https://d30y9cdsu7xlg0.cloudfront.net/png/16846-200.png" alter="image1"/> 
						  </div>
           
					</Col>
					<Col size="md-6">
						<Jumbotron>
							<div id="title-container">
								<h1 id="vox-title">VOX Royale</h1>
							</div>
							<List>
								{this.state.phrases.map(phrase => (
									<ListItem key={phrase._id}>
										{<strong>{phrase.title}</strong>}
										<br />
									</ListItem>
								))}
							</List>
							<div id="timer">
								<h2>{this.state.inProgress ? this.state.timer : " "}</h2>
							</div>
							<StartBtn onClick={() => this.startGame()}>
								<i className="fa fa-microphone" aria-hidden="true"></i> Start
				</StartBtn>
							<br />
							<h4>User Phrase: {this.state.userPhrase}</h4>
							<form>
								<Input
									className="text"
									value={this.state.userPhrase}
									onChange={this.handleInputChange}
									name="userPhrase" />
								<FormBtn
									disabled={(!this.state.userPhrase || !this.state.inProgress)}
									onClick={this.handlePhraseSubmit}>
									Submit
					</FormBtn>
							</form>
							<h2>{this.state.roundStatus}</h2>
						</Jumbotron>
					</Col>
					<Col size="md-2">
					<div className="thumbnail" id="thumbBord2">
							<Player imgURL="https://d30y9cdsu7xlg0.cloudfront.net/png/16846-200.png" alter="image1"/> 
						  </div>
					</Col>
					<Col size="md-1">
					</Col>
				</Row><br /><br/><br/><br /><br/><br/>
				<Row>
					<Col size="md-12">
						 <Footer /> 
					</Col>
				</Row>
			</Container>
             
		);
	}
}

export default Game;
