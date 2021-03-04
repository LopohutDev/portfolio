import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Message from "./Message";

function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopUpMessage([
      {
        name,
        email,
        phone,
        subject,
        message,
      },
    ]);

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="">
      <Message
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        popUpMessage={popUpMessage}
      />
      <Fade cascade>
        <div className="flex flex-col items-center justify-center h-32 p-5 mt-10">
          <h1 className="text-4xl font-bold lg:text-6xl">GET IN TOUCH.</h1>
          <p className="text-center text-gray-400">
            Please fill out the form to send me a message. or you can contact me
            using <br /> the details above.
          </p>
        </div>
      </Fade>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm p-10 mx-auto mt-5 lg:mt-20 lg:max-w-6xl"
      >
        <Fade left cascade>
          <div className="block text-xs lg:flex lg:h-14 lg:justify-between">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 my-2 text-gray-400 bg-black border rounded-lg focus:outline-none lg:mr-4 lg:w-1/3 input"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 my-2 text-gray-400 bg-black border rounded-lg focus:outline-none lg:mx-4 lg:w-1/3 input"
              placeholder="Email Address"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 my-2 text-gray-400 bg-black border rounded-lg focus:outline-none lg:ml-4 lg:w-1/3 input"
              placeholder="Phone Number"
            />
          </div>
        </Fade>
        <Fade>
          <div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full p-3 my-3 text-xs text-gray-400 bg-black border rounded-lg focus:outline-none input"
            />
          </div>
        </Fade>
        <Fade>
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="15"
              cols="100"
              placeholder="Message"
              className="w-full p-3 mt-3 text-xs text-gray-400 bg-black border focus:outline-none lg:mb-10 rounded-xl input"
            ></textarea>
            <button
              type="submit"
              onClick={() => setNewMessage(!newMessage)}
              className="w-32 h-10 btn2 rounded-xl"
            >
              Submit
            </button>
          </div>
        </Fade>
      </form>
    </div>
  );
}

export default GetInTouch;
