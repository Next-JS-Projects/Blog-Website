import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else {
      console.log("Handlechange");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.text();
        setName("");
        setPhone("");
        setEmail("");
        setDesc("");
      })
      .then(() => {
        alert("Submitted Successfully");
      })
      .catch((error) => alert("Error occured please check"));
  };
  return (
    <div className={styles.container}>
      <center>
        <h2>Contact Us</h2>
      </center>
      <center>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Enter your name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              aria-describedby="text"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Enter your email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              aria-describedby="text"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Enter your Phone
            </label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              aria-describedby="text"
            />
          </div>

          <div className={styles.mb3}>
            <label htmlFor="textarea" className={styles.formlabel}>
              Enter your concern
            </label>
            <textarea
              class="form-control"
              id="textarea"
              name="desc"
              placeholder="Write your concern"
              rows="3"
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </center>
    </div>
  );
};

export default Contact;
