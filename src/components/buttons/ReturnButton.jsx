import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ReturnButton({ positionClass = "fixed left-5 bottom-10", linkTo= '/', borderColor= 'white', textColor='white' }) {
  return (
    <Link
      to={linkTo}
      className={`${positionClass} z-50 fixed bottom-10 left-10 justify-start border-2 boder-${borderColor} hover:border-none w-max cursor-pointer hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-full`}
    >
      <i className={`bi bi-caret-left-fill text-2xl text-${textColor}`}></i>
    </Link>
  );
}

export default ReturnButton;