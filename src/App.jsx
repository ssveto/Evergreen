import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import { songs, instruments, colors } from "./songs.jsx"

export default function App() {
  const [item, newItem] = useState(Math.floor(Math.random() * 9));

 
  

  

  function handleClick() {


    const random = Math.floor(Math.random() * 9);
    if (random !== item) {
      return newItem(random);
    } else {
      return newItem(Math.floor(Math.random() * 9));
    }
    
    
    
  }

  document.body.style.backgroundColor = colors[item];

  const answers = songs[item];

  let social =
    "https://twitter.com/intent/tweet?text=" + "I am now listening to ";


  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timeout called!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="quote-box">
        <div className="first-row">
          <span className="instrument-icon" style={{ color: colors[item] }}>
            {instruments[Math.floor(Math.random() * instruments.length)]}
          </span>
          <p id="text" style={{ color: colors[item] }}>
            {answers.title}
          </p>
        </div>

        <div className="second-row">
          <p id="author" style={{ color: colors[item] }}>
            By {answers.author}
          </p>
          <p id="year" style={{ color: colors[item] }}>
            Year: {answers.year}
          </p>
        </div>
        <div className="third-row">
          <div>
            <a id="tweet-quote" rel="noreferrer" href={social + answers.title} target="_blank">
              <i
                className="fa-brands fa-square-x-twitter"
                style={{ color: colors[item] }}
              ></i>
            </a>
            <a id="youtube" href={answers.link} rel="noreferrer" target="_blank">
              <i
                className="fa-brands fa-youtube"
                style={{ color: colors[item] }}
              ></i>
            </a>
          </div>
          <button
            type="button"
            id="new-quote"
            className="btn"
            onClick={handleClick}
            style={{ backgroundColor: colors[item] }}
          >
            New Song
          </button>
        </div>
      </div>
    </>
  );
}
