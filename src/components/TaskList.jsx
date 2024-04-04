// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { FaWindowClose, FaEdit } from "react-icons/fa";

import "../styles/taskList.css";

export default function TaskList  ({ inputValues, handleRemoveTask, handleEdit }){
  return (
    <>
      <ul>
        {inputValues.map((value, key) => (
          <li key={key}>  {value} {" "}
            <div className="buttons">
              <button className="btn-delete" onClick={() => handleRemoveTask(key)}> <FaWindowClose /> </button>
              <button className="btn-edit" onClick={() => handleEdit(key)}> <FaEdit /> </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

TaskList.propTypes = {
  inputValues: PropTypes.array.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}