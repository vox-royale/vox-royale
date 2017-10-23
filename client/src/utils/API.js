import axios from "axios";

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
	submitUserInfo: function (user) {
		return axios.post("/user/new", { username: user.username, password: user.password });
	}
};