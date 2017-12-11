import React from 'react'


var headerStyle={
    margin:"10px",
    padding:"20px",
   fontFamily:"Arial",
  // borderRadius:"30px",   
   //boxShadow:"5px 5px 5px 5px #505359"
}
export default function Home() {
    return (
        <div>
        <div>
            <h1 style={headerStyle}>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
        <div style={{margin:"20px"}}>
            <h2>About</h2>
            <h3>
            Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago. Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program. Fullstack Academy offers beginner courses in Javascript (JavaScript Jumpstart) and front-end development, as well as a summer program for college-age students (Summer of Code), and a part-time version of their full-time curriculum (Flex).
            </h3>
            <h2>History</h2>
            <h3>
            Fullstack Academy was founded in 2012 by David Yang (formerly of Yahoo!, Gilt) and Wharton School alumnus Nimit Maru (formerly of Yahoo!, Bloomspot). After succeeding as a Y-Combinator-backed startup, Fullstack graduated its first cohort of students in 2013, and moved to its current location at 5 Hanover Sq., New York, NY in November 2014.
            </h3>
            </div>
        </div>
    );
}
