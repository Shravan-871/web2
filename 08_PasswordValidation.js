import React, { useState } from "react";

const App = () => {
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(newPassword)) {
      setError("Password Is Strong");
    } else {
      setError("Password Is Not Strong");
    }
  };

  return (
    <div>
      <h2>Password Validation</h2>
      <form>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
          />
        </div>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default App;
