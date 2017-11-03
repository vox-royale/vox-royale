import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import StartBtn from "../../components/StartBtn";
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";
import './Practice.css';

class Game extends Component {
	state = {
		phrases: [],
		phrasesMaster: [],
		targetPhrase: "",
		userPhrase: "",
		timer: 0,
		round: 0,
		counter: 0,
		roundStatus: "",
		roundScore: 0,
		roundScoreDisplay: "",
		interval: "",
		inProgress: false,
		playerOneScore: 0,
		recording: false
	};

	componentDidMount() {
		this.setState({phrases: [{phrase: "Press start to begin"}]});
		this.loadPhrases();
	}

	loadPhrases = () => {
		
		let game = this;
		API.getPhrases()
			.then(res => {
				game.setState({ phrases: res.data });
				game.setState({ phrasesMaster: game.state.phrases.slice(0) });
			})
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	
	startGame = (event) => {

		event.preventDefault();
		this.state.counter++;

		this.getTargetPhrase();
		clearInterval(this.state.interval);

		this.setState({
			timer: 0,
			round: this.state.round + 1,
			interval: setInterval(this.increment, 1000),
			roundStatus: "",
			userPhrase: "",
			roundScoreDisplay: "",
			inProgress: true,
			recording: true
		});
	};

	replay = (event) => {

		event.preventDefault();
		this.state.counter++;
		clearInterval(this.state.interval);

		this.setState({
			timer: 0,
			round: this.state.round + 1,
			interval: setInterval(this.increment, 1000),
			roundStatus: "",
			userPhrase: "",
			roundScoreDisplay: "",
			inProgress: true,
			recording: true
		});
	}

	getTargetPhrase = () => {
	
		// handle case where phrases is empty & refresh.
		if(this.state.phrases.length <= 1) {
			this.setState({ phrases: this.state.phrasesMaster.slice(0) });
		}

		// get a random phrase and remove from phrases array
		else {
			let tempPhrases = this.state.phrases;
			let tempPhrase = tempPhrases.splice(Math.floor(Math.random() * tempPhrases.length), 1);

			// set targetPhrase and phrases array
			this.setState({
				phrases: tempPhrases,
				targetPhrase: tempPhrase[0].phrase
			});
		}
	}

	handlePhraseSubmit = event => {

		event.preventDefault();

		this.setState({ recording: false});
		let game = this;

		clearInterval(this.state.interval);

		let targetPhrase = this.state.targetPhrase.trim();
		let userPhrase = document.getElementById("inputPhrase").innerHTML;

		// hit server for string comparison.
		// returns match object with data for display
		API.compare(targetPhrase, userPhrase)
			.then(function(res) {

				game.setState({ roundStatus: res.data.numMatchedTokens + " out of " + res.data.numTargetTokens + " words: " +
				    (res.data.percentage * 100).toFixed(1).toString() + "% Match (" + res.data.numCharactersMatched + " / " +
					res.data.numTotalCharacters + " characters)" });
					
				game.setState({
					roundScore: Math.round(res.data.percentage * 100) + res.data.numCharactersMatched + (20 - game.state.timer)
				});

				game.setState({
					roundScoreDisplay: "Score: " + Math.round(res.data.percentage * 100) + " + " +
					res.data.numCharactersMatched + " + " + (20 - game.state.timer) + " = " + game.state.roundScore
				});
				

				game.setState({
					playerOneScore: game.state.playerOneScore + game.state.roundScore
				});

		}).catch(err => console.log(err));
	};

	increment = () => {
		this.setState({ timer: this.state.timer + 1 });
	};

	render() {
		return (
			<Container fluid>
				<div id="nav">
					<a id="game-link" href="/game"><span>Play Game</span></a>
				</div>
				<Row>
					<Col size="md-12">
						<div id="roundHeight">
							<h2><span id="vox">VOX Royale</span></h2>
							<h3>Phrase Count: {this.state.counter}</h3>
						</div>
						<div  id="textPhrase">
							<h3>{(!this.state.inProgress) ? "Press start to begin" : this.state.targetPhrase}</h3>
						</div>
						<Jumbotron id="practice-jumbo">
							<div id="timer">
								<h2>{this.state.inProgress ? this.state.timer : " "}</h2>
							</div>
							<br />
							<StartBtn onClick={this.startGame}
								id="startButton"
								disabled={this.state.recording}>
								<i className="fa fa-microphone" aria-hidden="true"></i> Start
							</StartBtn>
							{(this.state.inProgress && !this.state.recording) ? (
								<button onClick={this.replay}
								id="replayButton"
								className="btn btn-default">Replay Phrase
								</button>
							 ) : ""}
							<h4 id="inputPhrase">{this.state.userPhrase}</h4>
							<form>
								<FormBtn
									disabled={!this.state.recording}
									onClick={this.handlePhraseSubmit}
									id="submitButton">
									Submit
								</FormBtn>
							</form>
						</Jumbotron>
						<div  id="userStatus">
							<h2 id="fontH2">{this.state.roundStatus}</h2>
							<h2 id="fontH2">{this.state.roundScoreDisplay}</h2>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Game;