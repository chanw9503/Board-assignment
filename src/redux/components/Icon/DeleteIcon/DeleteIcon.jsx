import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './DeleteIcon.css';
function DeleteIcon({ onClick }) {
  return <RiDeleteBin6Line onClick={onClick} className="deleteIcon" />;
}

export default DeleteIcon;
