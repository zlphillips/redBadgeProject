import React, {useEffect, useState, MouseEvent} from 'react';
// import Home from './Home';
// import { profile } from 'console';
import '../css/Profile.css'
import NewPost from "../components/CreatePost"
// import { profile } from 'console';

// When the user scrolls the page, execute myFunction

function Profile () {

// When the user scrolls the page, execute myFunction
window.onscroll = function() {Function()};

// removeEventListener -- takes it away to new page
// useEffect - use on higher up components
// useEffect(() => {
    // Get the header
// as HTMLElement tells ts to change the type to an html element
// var header = document.getElementsByClassName("header-cont")[0] as HTMLElement;

// Get the offset position of the navbars
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
//     window.addEventListener("scroll", myFunction)
//     return(()=>window.removeEventListener("scroll", myFunction))
// }


    
return (
<div className="mainDiv"
style={{border:"1px solid red", padding:"0 5% 0 5%", display:"inline-block"}}>
<div className="header-cont" id="myHeader" 
style={{width:"100%", height:"10%", textAlign:"center", position:"sticky"}}>
  <h2>$username's profile</h2>
</div>
<div>
<p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye kitty time jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Groom yourself 4 hours
</p>
<p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye kitty time jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Groom yourself 4 hours
</p>
<p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye kitty time jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Groom yourself 4 hours
</p>
</div>
</div>
)
}

export default Profile
