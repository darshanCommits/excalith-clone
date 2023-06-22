import ElementBuilder from "./dom.js";

const content = document.querySelector("#content");

const bookmarkList = {
	social: [
		{ name: "Reddit", href: "https://www.reddit.com" },
		{ name: "Facebook", href: "https://www.facebook.com" },
		{ name: "Instagram", href: "https://www.instagram.com" },
		{ name: "Whatsapp", href: "https://web.whatsapp.com" },
	],
	coding: [
		{ name: "Github", href: "https://github.com" },
		{ name: "CodePen", href: "https://codepen.io" },
		{ name: "Dev.to", href: "https://dev.to" },
		{ name: "Codewars", href: "https://www.codewars.com" },
		{ name: "LeetCode", href: "https://leetcode.com" },
	],

	mixed: [
		{ name: "GPT", href: "https://www.chatgpt.com" },
		{ name: "Youtube", href: "https://www.youtube.com" },
		{ name: "Spotify", href: "https://www.spotify.com" },
	],
	documentation: [
		{ name: "The Odin Project", href: "https://www.theodinproject.com" },
		{ name: "Fullstack Open", href: "https://fullstackopen.com" },
		{ name: "JavaScript.info", href: "https://javascript.info" },
		{ name: "Learn You a Haskell", href: "https://learnyouahaskell.com" },
		{ name: "CSS-Tricks", href: "https://css-tricks.com" },
		{ name: "MDN Web Docs", href: "https://developer.mozilla.org" },
		{ name: "React Docs", href: "https://react.dev" },
	],
};

// console.log("bruh");

const bookmarkContainer = new ElementBuilder("main").setProperties({ id: "bookmarkContainer" });

for (const category in bookmarkList) {
	const categoryContainer = new ElementBuilder("ul").setProperties({ class: category });
	const categoryTitle = new ElementBuilder("h3", category);
	categoryContainer.addChild(categoryTitle.build());	//by this time structure looks like main > div > h3
	// console.log({ categoryContainer, categoryTitle })

	for (const bookmarks of bookmarkList[category]) {
		const bookmark = new ElementBuilder("li")
		const bookmarkLink = new ElementBuilder("a")
			.setTextContent(bookmarks.name)
			.setProperties({
				class: "bookmark",
				href: bookmarks.href,
				// rel: "noopener noreferrer" 		// uncomment to open in new tab	
			})

		bookmark.addChild(bookmarkLink.build());
		categoryContainer.addChild(bookmark.build());
		console.log(bookmarks)
	}

	bookmarkContainer.addChild(categoryContainer.build());
}

content.appendChild(bookmarkContainer.build());