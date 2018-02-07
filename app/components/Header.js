import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Carousel} from 'react-bootstrap'
var headerStyle={
    //margin:"10px",
    //paddingLeft:"20px",
    textAlign:"center",
   fontFamily:"Times New Roman",
   //paddingBottom:"10px"
  // borderRadius:"30px",   
   //boxShadow:"5px 5px 5px 5px #505359"
}
var ib={
    display:"inline-block",
    width:"710px",
    padding:"50px",
    paddingRight:"20px",

}




export default function Home() {
    return (
        <div style={{color:"#5d5d5e"}}>
             <link href="../bootstrap/css/bootstrap.css" rel="stylesheet"></link>
             <link href="../bootstrap/css/bootstrap-responsive.css" rel="stylesheet"></link>                   
        
        <div>
            <h1 style={headerStyle}>Lorem Ipsum</h1>
        </div>
        
        <div style={{ fontFamily:"Times New Roman"}}>
        <div style={ib}>
        <h2> About</h2>
        <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
        </h3>
        </div>
        <div style={ib}>
        <Carousel style={{width:"500px",height:"300px"}}>
  <Carousel.Item>
    <img width={1900} height={100} alt="900x500" src="https://images5.alphacoders.com/389/389874.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1900} height={100} alt="900x500" src="https://intuitturbotax.files.wordpress.com/2010/12/books.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1900} height={100} alt="900x500" src="https://images7.alphacoders.com/692/692579.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div style={{paddingLeft:"50px", paddingRight:"20px"}}>
            <h2>Where does it come from?</h2>
            <h3>       
Contrary to popular belief, 
Lorem Ipsum is not simply random text. 
It has roots in a piece of classical Latin literature from 45 BC, 
making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
College in Virginia, looked up one of the more obscure Latin words, consectetur, 
from a Lorem Ipsum passage, and going through the cites of the word in classical l
iterature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 
and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by 
Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
sit amet..", comes from a line in section 1.10.32.<br/>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for 
those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
by Cicero are also reproduced in their exact original form, accompanied by English 
versions from the 1914 translation by H. Rackham.<br/>
    </h3>
        </div>
        
        </div>
        </div>
    );
}
