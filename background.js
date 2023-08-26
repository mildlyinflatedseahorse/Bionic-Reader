// function createBoldWordHtml(word) {
//   const wordLength = word.length;
//   return word;

// }

function bionicReader() {
  let iterator = 0;
  const paragraphElements = document.getElementsByTagName("p");
  for (const paragraph of paragraphElements) {
    const paragraphLength = paragraph.innerText.length
    if (paragraphLength === 0 || paragraphLength === "\n") {
      continue;
    }
    const paragraphText = paragraph.innerText
    let paragraphHtml = "";
    console.log(paragraph.innerText);
    const paragraphWords = paragraphText.split(" ")
    console.log("paragraphWords", paragraphWords)
    for (const word of paragraphWords) {
      let newWord = "<b>" + word;
      newWord = newWord.split("");
      // Takes the leading < b > chars into account to ensure we bold each word, even if it is less than 5 chars.
      const newWordLen = newWord.length + 3;
      const oddOrEven = iterator % 2
      if (oddOrEven === 0) {
        newWord.splice(Math.floor(newWordLen * .5), 0, "</b>")
        paragraphHtml += newWord.join("") + " "
      } else {
        newWord.splice(Math.floor(newWordLen * .5), 0, "</b>")
        paragraphHtml += newWord.join("") + " "
      }  
      iterator++;
      console.log("newWord", newWord)
    }
    // console.log("paragraphhtml", paragraphHtml)
    paragraph.innerHTML = paragraphHtml
  }
}
  
  chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: bionicReader
      });
    }
  });