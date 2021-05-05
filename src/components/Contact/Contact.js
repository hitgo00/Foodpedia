import React from 'react'
import '../home.css';

export default function Contact() {
    return (
        <div id="contact">
        <h1>Share Your Experience</h1>
        <form>
         <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="type your email"/>
            <textarea placeholder="description..."></textarea>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}
