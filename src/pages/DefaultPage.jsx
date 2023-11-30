import { useEffect, useState } from "react";
import Loader from "./Loader";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../styles/style.scss";

const DefaultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const path = window.location.pathname;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Loader isLoading={isLoading}>
      <div className="default-container">
        <div className="form-container">
          {path == "/signIn" ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </Loader>
  );
};

export default DefaultPage;
