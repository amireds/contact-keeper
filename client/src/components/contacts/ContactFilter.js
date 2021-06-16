import React, { useRef, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      contactContext.filterContact(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
}

export default ContactFilter;
