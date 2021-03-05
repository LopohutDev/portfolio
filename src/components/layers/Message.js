import React from "react";
import { GrClose } from "react-icons/gr";

function Message({ newMessage, setNewMessage, popUpMessage }) {
  return newMessage ? (
    <div className="absolute top-0 z-20 flex items-center justify-center w-full h-full text-black lg:p-96 p-5 ">
      <div className="absolute w-full h-full bg-gray-500 opacity-40"></div>
      <div className="relative z-30 w-full p-10 bg-gray-200  rounded-3xl h-96">
        <button
          onClick={() => {
            setNewMessage(!newMessage);
          }}
          className="absolute p-2 text-xl border-2 border-black rounded-full right-5 top-5"
        >
          <GrClose />
        </button>
        {popUpMessage.map(({ name, email, phone, subject, message }) => (
          <div>
            <h3 className="my-2 text-xl lg:text-2xl">
              Hello,<span className="font-semibold"> {name}</span>
            </h3>
            <p className="my-2 lg:text-base text-sm">
              Email:<span className="font-semibold"> {email}</span>
            </p>
            <p className="my-2 lg:text-base text-sm">
              Mobile Number:<span className="font-semibold"> {phone}</span>{" "}
            </p>
            <p className="my-2 lg:text-base text-sm">
              Subject: <span className="font-semibold"> {subject}</span>
            </p>
            <div>
              <p className="my-2 lg:text-base text-sm">Message: </p>
              <p>{message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Message;
