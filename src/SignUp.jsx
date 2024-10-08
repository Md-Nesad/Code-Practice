import React, { useState } from "react";
import { useFirebase } from "./context/Firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  return (
    <div>
      <label>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />
      <label>Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
      />{" "}
      <br /> <br />
      <button
        onClick={() => {
          firebase.signinWith(email, password);
          firebase.putData("User/" + "Second", { email, password });
        }}
      >
        Create
      </button>
      <button onClick={firebase.signInhPopup}>Sign in with goggle</button>
    </div>
  );
}
