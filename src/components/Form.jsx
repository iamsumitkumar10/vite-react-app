import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>form</h2>

      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
