import ElementBuilder from "./dom.js";

const content = document.querySelector("#content");

const bookmarkList = {
	Docs: [
		{ name: "JS", href: "https://javascript.info" },
		{ name: "CSS", href: "https://css-tricks.com" },
		{ name: "MDN", href: "https://developer.mozilla.org" },
		{ name: "React", href: "https://react.dev" },
	],
	Social: [
		{ name: "Reddit", href: "https://www.reddit.com" },
		{ name: "Facebook", href: "https://www.facebook.com" },
		{ name: "Instagram", href: "https://www.instagram.com" },
		{ name: "Whatsapp", href: "https://web.whatsapp.com" },
	],
	Coding: [
		{ name: "Github", href: "https://github.com" },
		{ name: "CodePen", href: "https://codepen.io" },
		{ name: "Codewars", href: "https://www.codewars.com" },
		{ name: "LeetCode", href: "https://leetcode.com" },
	],

	General: [
		{ name: "GPT", href: "https://www.chatgpt.com" },
		{ name: "Youtube", href: "https://www.youtube.com" },
		{ name: "Spotify", href: "https://www.spotify.com" },
		{ name: "Canva", href: "https://www.canva.com" },
	],
	Esoteric: [
		{ name: "Haskell", href: "https://learnyouahaskell.com" },
		{ name: "TOP", href: "https://www.theodinproject.com" },
		{ name: "FSO", href: "https://fullstackopen.com" },
		{ name: "Rust", href: "https://doc.rust-lang.org/stable/rust-by-example/" }
	]
};

// console.log("bruh");
const terminal = new ElementBuilder("main")
	.setProperties({ id: "terminal" })
	.addClass("window-glow");

const categoryTitleWrapper = new ElementBuilder("div");
const categoryUlWrapper = new ElementBuilder("div");

for (const category in bookmarkList) {
	const categoryContainer = new ElementBuilder("ul").addClass("category");
	const categoryTitle = new ElementBuilder("h3", category);

	categoryTitleWrapper.addChild(categoryTitle.build());
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
		// console.log(bookmarks)

		categoryUlWrapper.addChild(categoryContainer.build());
		console.log(categoryUlWrapper.build());
	}

	terminal.addChild(categoryTitleWrapper.build());
	terminal.addChild(categoryUlWrapper.build());
};



content.appendChild(terminal.build())