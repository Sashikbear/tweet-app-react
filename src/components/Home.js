import "../App.css";
import { useEffect, useContext } from "react";
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import { getTweet } from "../lib/API";
import AppContext from "../context/AppContext";
function Home() {
	const appContext = useContext(AppContext);
	// const { profileUserName } = useLocation().state || "";
	// useEffect(() => {
	// 	const json = localStorage.getItem("tweetsArray");
	// 	const storedTweetsArray = JSON.parse(json);
	// 	if (storedTweetsArray) {
	// 		setTweetsArray(storedTweetsArray);
	// 	}
	// }, []);
	// useEffect(() => {
	// 	const json = JSON.stringify(tweetsArray);
	// 	localStorage.setItem("tweetsArray", json);
	// }, [tweetsArray]);
	useEffect(() => {
		getTweet()
			.then((response) => response.json())
			.then((data) => {
				appContext.setTweetsArray(data.tweets);
			});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			getTweet()
				.then((response) => response.json())
				.then((data) => {
					appContext.setTweetsArray(data.tweets);
				});
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="App">
			<CreateTweet />
			<TweetsList />
		</div>
	);
}

export default Home;
