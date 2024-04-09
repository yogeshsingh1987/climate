import LoginImage from "../../assets/login.png";
import Card from "../commons/Card";
import Input from "../commons/Input";
import Logo from "../../assets/logo.png";
import Button from "../commons/Button";
import { useState } from "react";
import { login } from '../../firebase/services'
import {useNavigate } from 'react-router-dom';


const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  let navigate = useNavigate();
  const onSubmit = async () => {
    if(userName && password && validateEmail(userName)){
      try {
        const user = await login(userName, password);
            console.log('USER: ', user) ;
            localStorage.setItem('isLoggedIn', true);
            navigate('/')
      } catch (error) {
        console.error("Login Failed: ", error)
          // setSnack({
          //     open: true,
          //     msg: error.message || 'Please enter valid Email Id & Password',
          //     severity: 'error'
          // })
      } finally{
          // setLoading(false)
      }
    }
  }
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${LoginImage})`,
        }}
      >
        <div className="flex h-full justify-end pr-60 items-center">
          <Card variant="dark">
            <div className="pt-2">
              <img
                className="pb-10"
                src={Logo}
                height="76px"
                width="238px"
                alt="Logo"
              />
            </div>
            <Input labelText="User Name" type="text" name-="userName" onChange={setUserName} />
            <Input labelText="Password" type="password" name="password" onChange={setPassword} />
            {/* <div className="forgot_password flex justify-end my-7">
              <p>Forgot Password?</p>
            </div> */}
            <div className="mb-16 my-7">
              <Button
                name="Signin"
                clickHandler={onSubmit}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Login;
