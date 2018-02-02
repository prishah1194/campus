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
            <h1 style={headerStyle}>JavaScript</h1>
        </div>
        <div style={{margin:"20px"}}>
            <h2>About</h2>
            <h3>
                This is Margaret Hamilton Interplanetary Academy of JavaScript
            </h3>
            <h2>History</h2>
            <h3>
                It was founded by Priyanka Shah &#9786;
            </h3>
            </div>
        </div>
    );
}
