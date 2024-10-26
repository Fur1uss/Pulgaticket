import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../users/userContext";

export default function NewEventButtonComponent() {
  return (
    <button className="new-event-button">Vender entrada</button>
  );
}