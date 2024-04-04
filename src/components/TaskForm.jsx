// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPlus} from "react-icons/fa";
import PropTypes from "prop-types"

import "../styles/form.css";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function TaskForm({input, handleSubmit, handleInput}) {
  return (
    <>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={input} />
        <button type="submit"><FaPlus /></button>
      </form>

    </>
  );
}

TaskForm.propTypes = {
  input: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired
}

