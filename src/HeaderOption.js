import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick, active, arrow }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className={active ? "headerOption headerOption__active" : "headerOption"}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoURL} >{user?.email[0]}</Avatar>}
      <div className="headerOption__text">
        <h3 className="headerOption__title">{title}</h3>
        {arrow && <ArrowDropDown />}
      </div>
    </div>
  );
}

export default HeaderOption;
