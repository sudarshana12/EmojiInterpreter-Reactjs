import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😉": "Winking Face",
  "😗": "Kissing Face",
  "🤩": "Star-Struck",
  "😑": "Expressionless Face",
  "🤔": "Thinking Face",
  "😐": "Neutral Face",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😴": "Sleeping Face",
  "🙂": "Slightly Smiling Face",
  "😀": "Grinning Face",
  "🙃": "Upside-Down Face",
  "😂": "Face with Tears of Joy",
  "🤫": "Shushing Face",
  "🙄": "Face with Rolling Eyes",
  "🤤": "Drooling Face",
  "🥳": "Partying Face",
  "🤓": "Nerd Face",
  "🥺": "Pleading Face",
  "😞": "Disappointed Face",
  "🥱": "Yawning Face",
  "😠": "Angry Face",
  "😫": "Tired Face",
  "😨": "Fearful Face",
  "😲": "Astonished Face"
};

var emojiArr = Object.keys(emojiDict);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInput(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database!";
    }

    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 id="heading">Smileys</h1>
      <input onChange={emojiInput} />
      <h2 id="output-cont">{meaning}</h2>
      <h3 id="heading-three"> Emojis we know </h3>
      {emojiArr.map((emojiitem) => {
        return (
          <span
            onClick={() => clickHandler(emojiitem)}
            style={{ fontSize: "2rem", padding: "0.8rem", cursor: "pointer" }}
            key={emojiitem}
          >
            {emojiitem}
          </span>
        );
      })}
    </div>
  );
}
