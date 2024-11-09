import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../users/userContext";

export default function NewEventButtonComponent() {
  return (
    <button className="new-event-button"><Link to="/new-event-sell">Vender entrada</Link></button>
  );
}