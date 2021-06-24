import { useEffect, useState, useContext } from "react";
import { postTweet } from "../lib/API";
import AppContext from "../context/AppContext";
function CreateTweet() {
	const { userName } = "";
	const [content, setContent] = useState("");
	const { date } = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const [tweetError, setTweetError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const appContext = useContext(AppContext);
	useEffect(() => {
		appContext.setTweet({
			content: content,
			userName: appContext.profileUserName || "anonymous user",
			date: Date.now(),
		});
	}, [content, userName, date]);

	const handleContent = (e) => {
		setContent(e.target.value);
		if (e.target.value.length > 140) {
			setIsDisabled(true);
			setTweetError("The tweet can't contain more then 140 chars.");
		} else {
			setIsDisabled(false);
			setTweetError("");
		}
	};

	const handleClick = () => {
		setIsLoading(true);

		const postedTweet = {
			content: appContext.tweet.content,
			userName: appContext.tweet.userName,
			date: new Date(appContext.tweet.date),
		};
		postTweet(postedTweet)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				setTimeout(() => {
					setIsLoading(false);
				}, [1000]);
				appContext.setTweetsArray((prevState) => {
					return [appContext.tweet, ...prevState];
				});
				appContext.setTweet({});
				setContent("");
			})
			.catch((error) => {
				console.error(error);
				setError(error);
			});
	};

	return (
		<div className="create-tweet-wrapper">
			<input
				type="text"
				className="create-tweet-input"
				placeholder="What you have in mind.."
				onInput={handleContent}
				value={content}
			></input>
			<div className="error-button-wrapper">
				{tweetError && <div className="error">{tweetError} </div>}
				{error && <div className="error">"{error}" </div>}
				{isLoading && (
					<div className="lds-ripple">
						<div></div>
						<div></div>
					</div>
				)}
				{!isLoading && (
					<button
						disabled={isDisabled}
						className="tweet-button"
						onClick={handleClick}
					>
						Tweet
					</button>
				)}
			</div>
		</div>
	);
}
export default CreateTweet;
