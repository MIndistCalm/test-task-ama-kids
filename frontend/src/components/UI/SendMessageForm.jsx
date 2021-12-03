import React from 'react';
import inputClass from '../../styles/SendMessageForm.module.css';
import axios from "axios";
const Sendmessageform = () => {
    const makeApiRequest = () => {
        let message = document.getElementsByClassName("inputClass.input").value;
        console.log("makeApiRequest");
        axios("/api/testCU").then((response) => {
          console.log("response", message);
        });
      };
    return (
        <div>
            <input className={inputClass.input} placeholder="Напишите сообщение..."/>
            <button onClick={makeApiRequest}>Make Api Request</button>
        </div>
    );
}
export default Sendmessageform;