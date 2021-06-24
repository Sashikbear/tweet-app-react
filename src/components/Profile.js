import "../App.css";
import { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import AppContext from "../context/AppContext";
function Profile() {
	const storedUserName = JSON.parse(window.localStorage.getItem("username"));
	const [userName, setUserName] = useState(storedUserName);
	const [isDisabled, setIsDisabled] = useState(false);
	const appContext = useContext(AppContext);
	const handleProfileNameChange = (event) => {
		setUserName(event.target.value);
	};
	useEffect(() => {
		if (userName.length > 0) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [userName]);
	const handleProfileNameSubmit = (event) => {
		appContext.setProfileUserName(userName);
		window.localStorage.setItem("username", JSON.stringify(userName));
		window.alert("User name has been succesfully changed to " + userName + "!");
	};

	return (
		<div>
			<div className="profile-wrapper">
				<h1>Profile</h1>
				<div>User Name</div>
				<input
					type="text"
					className="profile-input"
					value={userName}
					onInput={(event) => handleProfileNameChange(event)}
				></input>
				<button
					disabled={isDisabled}
					className="tweet-button"
					type="submit"
					onClick={(event) => handleProfileNameSubmit(event)}
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default Profile;
