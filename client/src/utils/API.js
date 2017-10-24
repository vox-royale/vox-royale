import axios from "axios";
import openSocket from "socket.io-client";

export default {
	getUsers: function () {
		return axios.get("/users");
	},
	getPhrases: function () {
		return axios.get("/phrases");
	},
	compare: function (targetPhrase, userPhrase) {
		return axios.post("/compare", { targetPhrase: targetPhrase, userPhrase: userPhrase });
	},
	getUser: function (user) {
		return axios.post("/user", user);
	},
	submitNewUserInfo: function (user) {
		return axios.post("/user/new", user);
	},
	io: function () {
		const socket = openSocket("http://localhost:3001");
		console.log(socket);
	}
};