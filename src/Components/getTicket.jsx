import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Get() {
  const [element, setElement] = useState({
    agency: "",
    from: "",
    to: "",
    numberOfTickets: "",
    departureTime: "",
  });

  const handleChange = (e) => {
    setElement({ ...element, [e.target.class]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://shy-gray-wombat-gear.cyclic.app/api/ticket/create", {
      agency: element.agency,
      from: element.from,
      to: element.to,
      numberOfTickets: element.numberOfTickets,
      departureTime: element.departureTime,
    });
  };
}
