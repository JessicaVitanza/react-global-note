import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store";
import users from "../../utils/userAccess";
import styles from "./index.module.scss";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };


  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Nome utente..."
        />
        <input
          type="password"
          value={username} //stesso valore dello username *temporaneo*
          onChange={(e) => setUsername(() => e.target.value)} //stesso valore dello username *temporaneo*
          placeholder="Password"
        />
        <input type="submit" value="Accedi" />
      </form>
    </div>
  );
};

export default Login;