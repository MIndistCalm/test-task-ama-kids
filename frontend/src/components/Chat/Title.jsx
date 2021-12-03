import React from "react";
import TitleClass from "../../styles/Title.module.css";

const Title = () => {
  return (
    <div className={TitleClass.title}>
      <p>My awesome chat app</p>
    </div>
  );
};

export default Title;
