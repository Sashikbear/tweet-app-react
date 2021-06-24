import React from "react";

const AppContext = React.createContext({
	profileUserName: "",
	setProfileUserName: "",
	tweetsArray: "",
	setTweetsArray: "",
	tweet: "",
	setTweet: "",
});

export default AppContext;
