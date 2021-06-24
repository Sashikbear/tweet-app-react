import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import { useState } from "react";
import AppContext from "./context/AppContext";
import Navbar from "./components/Navbar";
function App() {
	const [profileUserName, setProfileUserName] = useState("");
	const [tweetsArray, setTweetsArray] = useState([]);
	const [tweet, setTweet] = useState({});
	return (
		<div className="App">
			<Router>
				<AppContext.Provider
					value={{
						profileUserName: profileUserName,
						setProfileUserName: setProfileUserName,
						tweetsArray: tweetsArray,
						setTweetsArray: setTweetsArray,
						tweet: tweet,
						setTweet: setTweet,
					}}
				>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/profile" component={Profile} />
					</Switch>
				</AppContext.Provider>
			</Router>
		</div>
	);
}

export default App;
