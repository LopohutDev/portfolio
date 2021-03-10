import React from "react";
import { GrClose } from "react-icons/gr";

function Message({ newMessage, setNewMessage, popUpMessage }) {
  return newMessage ? (
    <div className="absolute top-0 z-20 flex items-center justify-center w-full h-full p-5 text-black lg:p-96 ">
      <div className="absolute w-full h-full bg-gray-500 opacity-40"></div>
      <div className="relative z-30 w-full p-10 break-words bg-gray-200 rounded-3xl h-96">
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
            <p className="my-2 text-sm lg:text-base">
              Email:<span className="font-semibold"> {email}</span>
            </p>
            <p className="my-2 text-sm lg:text-base">
              Mobile Number:<span className="font-semibold"> {phone}</span>{" "}
            </p>
            <p className="my-2 text-sm lg:text-base">
              Subject: <span className="font-semibold"> {subject}</span>
            </p>
            <div>
              <p className="my-2 text-sm lg:text-base">Message: </p>
              <p className="flex flex-1 ">{message}</p>
            </div>
            <p className="mt-10 text-xs font-semibold lg:text-base">
              This Feature is under Development
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Message;
