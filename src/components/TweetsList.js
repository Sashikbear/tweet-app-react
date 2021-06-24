import Moment from "react-moment";
import { useContext } from "react";
import AppContext from "../context/AppContext";
function TweetsList() {
	const appContext = useContext(AppContext);
	const sortedTweetsArray = appContext.tweetsArray.sort(
		(a, b) => b.date - a.date
	);
	return (
		<div>
			{sortedTweetsArray.map((tweet, index) => {
				return (
					<div className="tweet-item" key={tweet + index}>
						<div className="user-date">
							<div className="opaque-text">{tweet.userName}</div>
							<div className="opaque-text">
								<Moment format="MMM Do YYYY h:mm:ss a">{tweet.date}</Moment>
							</div>
						</div>
						<div>{tweet.content}</div>
					</div>
				);
			})}
		</div>
	);
}
export default TweetsList;
