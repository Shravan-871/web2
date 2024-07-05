import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [languages, setLanguages] = useState([
    { name: "JavaScript", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "C++", votes: 0 },
    { name: "Java", votes: 0 },
  ]
);

  const vote = (i) => {
    const newLanguages = [...languages];
    newLanguages[i].votes++;
    setLanguages(newLanguages);
  };

  return (
    <>
      <h1>Vote Your Language!</h1>
      <div>
        {languages.map((lang, i) => (
          <div key={i}>
            <div>{lang.votes}</div>
            <div>{lang.name}</div>
            <button onClick={() => vote(i)}>Click Here</button>
          </div>
          ))}
      </div>
    </>
  );
};
export default App;
