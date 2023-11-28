import { useState } from "react";

export default function SignupForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      console.log(res);
      const json = await res.json();
      console.log(json.token);
      setToken(json.token);
    } catch (err) {}
  };
  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmitForm}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
