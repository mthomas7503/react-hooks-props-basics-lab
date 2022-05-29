import React from "react";
import Links from "./Links";



function Ptag(props) {
  return (
    <>
      <p>{props.bio}</p>
    </>
  )
}

function About(props) {

  function displayPtag() {
    if (props.bio) {return <Ptag bio={props.bio}/>}
    else {return null}
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {displayPtag()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
