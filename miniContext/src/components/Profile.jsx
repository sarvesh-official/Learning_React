import React from "react";
import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return !user ? <h1>Not Logged In</h1> : <div>Profile {user}</div>;
}
