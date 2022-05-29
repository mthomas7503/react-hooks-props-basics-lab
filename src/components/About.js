import React from "react";
import user from "../data/user";

function Links (props){
  return (
  <div>
    <h3>Links</h3>
    <a href={props.github}>{props.github}</a>
    <a href={props.linkedin}>{props.linkedin}</a>
  </div>)
}

function Ptag(props) {
  return (
    <>
      <p>{props.bio}</p>
    </>
  )
}

function displayPtag() {
  if (user.bio) {return <Ptag bio={user.bio}/>}
  else {return null}
}

function About() {

  return (
    <div id="about">
      <h2>About Me</h2>
      {displayPtag()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
