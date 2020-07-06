import React, {useEffect, useState, MouseEvent} from 'react';
// import Home from './Home';
// import { profile } from 'console';
import '../css/Profile.css'
// import { profile } from 'console';
import {Modal, ModalHeader, ModalBody, Input, Button, ModalFooter} from "reactstrap"

// When the user scrolls the page, execute myFunction

// function Profile () {

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

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
// })


    
// return (
{/* <div className="mainDiv"
style={{margin: "auto",border:"1px solid red", padding:"0 5% 0 5%", display:"inline-block"}}> */}
    {/* <p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it
    </p> */}
{/* <div className="header-cont" id="myHeader" 
style={{width:"100%", height:"10%", textAlign:"center", position:"sticky"}}>
  <h2>$username's profile</h2>
</div> */}

{/* <p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye kitty time jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Groom yourself 4 hours
</p>
<p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye kitty time jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Groom yourself 4 hours
</p>
<p>Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye kitty time jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Groom yourself 4 hours
</p>
<p>
Fooled again thinking the dog likes me chase red laser dot but love blinks and purr purr purr purr yawn, poop on floor and watch human clean up. Chew master's slippers cats making all the muffins so i will ruin the couch with my claws, and catch mouse and gave it as a present snuggles up to shoulders or knees and purrs you to sleep do not try to mix old food with new one to fool me!. Meeeeouw try to jump onto window and fall while scratching at wall for shred all toilet paper and spread around the house. Poop in the plant pot meow or see owner,</p>
<p>
Fooled again thinking the dog likes me chase red laser dot but love blinks and purr purr purr purr yawn, poop on floor and watch human clean up. Chew master's slippers cats making all the muffins so i will ruin the couch with my claws, and catch mouse and gave it as a present snuggles up to shoulders or knees and purrs you to sleep do not try to mix old food with new one to fool me!. Meeeeouw try to jump onto window and fall while scratching at wall for shred all toilet paper and spread around the house. Poop in the plant pot meow or see owner,</p>
<p>
Fooled again thinking the dog likes me chase red laser dot but love blinks and purr purr purr purr yawn, poop on floor and watch human clean up. Chew master's slippers cats making all the muffins so i will ruin the couch with my claws, and catch mouse and gave it as a present snuggles up to shoulders or knees and purrs you to sleep do not try to mix old food with new one to fool me!. Meeeeouw try to jump onto window and fall while scratching at wall for shred all toilet paper and spread around the house. Poop in the plant pot meow or see owner,</p> */}
// </div>
// )
// }

const Profile = function (props:any) {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [post, setPost] = useState(props.text ? props.text : "")

    const deleteButton = () => {
        {fetch(`${URL}/posts/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                Authorization : props.sessionToken
            }
        })}
    }

    // const mixButton = () => {
    //     if (props.erase===true)
    //     console.log('Your post has been deleted')
    //     else{
    //     console.log('Your tea has been spilled')
    //     }
    // }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('handle test')
    } 
    useEffect(() => console.log(props.id), [])

    return (
        
    <div id="postID"
    style={{maxWidth:"300px"}}> {props.text}

    <Button onClick={() => {toggle(); props.setErase(true)}}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle}>
        <br/>
        <ModalHeader toggle={toggle}>Post</ModalHeader>
        <ModalBody>
            <Input type="textarea" placeholder="____" rows={5} value={post} onChange={e => setPost(e.target.value)} />
        </ModalBody>
        <ModalFooter>
            <Button color="primary"
            onClick={(e) =>{toggle(); handleSubmit(e)}}>Post</Button>
            <Button color="secondary" onClick={()=>{toggle(); deleteButton(); props.setlogID(props.id)}}>
            {props.erase ? "Delete" : "Close"}
            </Button>
        </ModalFooter>
    </Modal>
            </div>
    )
}

export default Profile
