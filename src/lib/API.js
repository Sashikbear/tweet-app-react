const url =
	"https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

export function getTweet() {
	return fetch(url);
}

export function postTweet(data) {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
}
