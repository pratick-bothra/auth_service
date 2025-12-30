import { useState } from "react";
import api from "./api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post(
        "/auth/login",
        new URLSearchParams({
          username: email,
          password: password,
        })
      );

      localStorage.setItem("access_token", res.data.access_token);
      onLogin();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
