import { useEffect, useState } from "react";
import api from "./api";

export default function Profile({ onLogout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  if (!user) return null;

  return (
     <div className="card">
      <h2>Profile</h2>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
