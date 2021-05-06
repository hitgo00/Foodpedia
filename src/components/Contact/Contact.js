import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "../home.css";
import axios from "axios";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div id="contact">
      {isSubmitted ? (
        <Typography color="inherit" variant="h1">
          Thanks for your review!
        </Typography>
      ) : (
        <>
          <h1>Share Your Experience</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (name && description)
                axios
                  .post("https://foodpedia2.herokuapp.com/addReview", {
                    name,
                    email,
                    description,
                  })
                  .then((response) => {
                    console.log(response);
                    setIsSubmitted(true);
                  });
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="type your email"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              name="description"
              placeholder="description..."
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </>
      )}
    </div>
  );
}
