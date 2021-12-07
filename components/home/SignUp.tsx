import React from "react";
import axios from "axios";
import { useState } from "react";
import styles from "./Home.module.scss";

import { signup_api } from "../../utils/constant";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setregistration] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandler = (e: any) => {
    e.preventDefault();

    axios
      .post(`${signup_api}`, {
        name,
        email,
        registration,
        phone,
      })
      .then((response) => {
        console.log(response);
        setEmail("");
        setName("");
        setPhone("");
        setregistration("");
      });
  };
  return (
    <div className={styles.signup}>
      <div style={{ padding: "6.5rem" }}>
        <div className={styles.head}>
          <h2>Signup</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className={styles.flex}>
            <div className={styles.marginright}>
              <label htmlFor="fname" className={styles.block}>
                Name
              </label>
              <input
                className={styles.inputField}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                required
                id="name"
                name="name"
                placeholder="Your name.."
              />

              <label htmlFor="lname" className={styles.block}>
                Registration #
              </label>
              <input
                className={styles.inputField}
                onChange={(e) => {
                  setregistration(e.target.value);
                }}
                value={registration}
                type="text"
                maxLength={13}
                id="registration"
                name="registration"
                placeholder="Registration.."
              />
            </div>

            <div>
              <label htmlFor="fname" className={styles.block}>
                Your Email*
              </label>
              <input
                className={styles.inputField}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                required
                id="email"
                name="email"
                placeholder="Your email.."
              />

              <label htmlFor="lname" className={styles.block}>
                Contact Number
              </label>
              <input
                className={styles.inputField}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                type="text"
                maxLength={11}
                id="contct"
                name="phone"
                placeholder="Contact number.."
              />
            </div>
          </div>
          <div className={styles.btn}>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
