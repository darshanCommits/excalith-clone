import ElementBuilder from "../dom.js";

const categoryTitleWrapper = new ElementBuilder("div");
const categoryUlWrapper = new ElementBuilder("div");

export default function renderInit(bookmarkList, terminal) {
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
      // console.log(categoryUlWrapper.build());
    }

    terminal.addChild(categoryTitleWrapper.build());
    terminal.addChild(categoryUlWrapper.build());
  };

  content.appendChild(terminal.build());
}
