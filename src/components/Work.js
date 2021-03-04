import React from "react";
import "../styles/custom.css";
import { Route, Switch, Link } from "react-router-dom";

//components
import TodoPage from "../projects/TodoList/TodoPage";
import LoginPage from "../projects/LoginPage/LoginPage";
import Shopee from "../projects/Shopee/pages/DashBoard";
import DashBoard from "../projects/DashBoard/DashBoard";
import Hackreactor from "../projects/Hackreactor/Hackreactor";
import Twitter from "../projects/Twitter/Twitter";

//images
import Shopeeimg from "../images/Shopee2.png";
import Hackreactorimg from "../images/HackReactor.png";
import Dashboardimg from "../images/Dashboard.png";
import TodoImg from "../images/Todo List.png";
import Twitterimg from "../images/twitter.png";
import Loginimg from "../images/login.png";

//react-reveal
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Work({ match }) {
  return (
    <div className="w-full">
      <Switch>
        <Route path={match.url + "/todolist"} component={TodoPage} />
        <Route path={match.url + "/dashboard"} component={DashBoard} />
        <Route path={match.url + "/hackreactor"} component={Hackreactor} />
        <Route path={match.url + "/loginpage"} component={LoginPage} />
        <Route path={match.url + "/shopee"} component={Shopee} />
        <Route path={match.url + "/shopee"} component={Shopee} />
        <Route path={match.url + "/twitter"} component={Twitter} />
        <Route
          path={match.url + "/"}
          render={() => (
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto lg:h-screen">
              <Zoom>
                <h1 className="my-20 text-6xl font-bold text-center lg:text-left">
                  My Recent Works.
                </h1>
              </Zoom>
              <Fade bottom>
                <div className="flex flex-col flex-wrap w-full lg:flex-row justify-evenly">
                  <Link
                    to="/work/shopee"
                    className="h-32 m-5 border border-red-500 lg:w-1/4 rounded-2xl"
                  >
                    <div className="flex flex-col items-center justify-around h-full p-5">
                      <img
                        alt="none"
                        className="h-16 lg:h-auto"
                        src={Shopeeimg}
                      />
                      <p className="mt-2 font-bold">Sample Shopee Project</p>
                    </div>
                  </Link>
                  <Link
                    to="/work/hackreactor"
                    className="h-32 m-5 border border-red-500 lg:w-1/4 rounded-2xl"
                  >
                    <div className="flex flex-col items-center h-full p-5">
                      <img
                        alt="none"
                        className="h-16 lg:h-auto"
                        src={Hackreactorimg}
                      />
                      <p className="mt-2 font-bold">
                        Sample Hackreactor Project
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/work/todolist"
                    className="h-32 m-5 border border-red-500 lg:w-1/4 rounded-2xl"
                  >
                    <div className="flex flex-col items-center justify-between h-full p-5">
                      <img alt="none" className="h-16" src={TodoImg} />
                      <p className="mt-2 font-bold">Sample Todo-List Project</p>
                    </div>
                  </Link>
                  <Link
                    to="/work/loginpage"
                    className="h-32 m-5 border border-red-500 lg:w-1/4 rounded-2xl"
                  >
                    <div className="flex flex-col items-center justify-between h-full p-5">
                      <img alt="none" className="h-12" src={Loginimg} />
                      <h1 className="text-xl font-bold">Login</h1>
                      <p className="mt-1 font-bold">Sample Login Project</p>
                    </div>
                  </Link>
                  <Link
                    to="/work/dashboard"
                    className="h-32 m-5 border border-red-500 lg:w-1/4 rounded-2xl"
                  >
                    <div className="flex flex-col items-center justify-between h-full p-5">
                      <img alt="none" className="h-12" src={Dashboardimg} />
                      <h1 className="text-xl font-bold">Dashboard </h1>
                      <p className="mt-1 font-bold">Sample Dashboard Project</p>
                    </div>
                  </Link>
                  <Link
                    to="/work/twitter"
                    className="h-32 m-5 border border-red-500 lg:w-1/4 rounded-2xl"
                  >
                    <div className="flex flex-col items-center justify-between h-full p-5 ">
                      <img alt="none" className="h-12" src={Twitterimg} />
                      <h1 className="text-xl font-bold">Twitter</h1>
                      <p className="mt-1 font-bold">Sample Twitter Project</p>
                    </div>
                  </Link>
                </div>
              </Fade>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default Work;
