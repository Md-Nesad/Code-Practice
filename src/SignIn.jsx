import React, { useState } from "react";
import { useFirebase } from "./context/Firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  return (
    <div>
      <h1>Log in</h1> <hr />
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
      />
      <br /> <br />
      <button onClick={() => firebase.logInWith(email, password)}>
        Log in
      </button>
    </div>
  );
}
