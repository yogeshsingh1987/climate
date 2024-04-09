import Logo from "../../assets/Preserve-logo.png";
import AI from "../../assets/chat_gpt.png";
import Avatar from "../../assets/Avatar.png";
import Notifications from "../../assets/notification.png";
import Voice from "../../assets/voice.png";
import NavBar from "../Navbar";
const Header = () => {
  return (
    <div className="header">
      <div
        data-component="HeaderContent"
        className="pt-10 flex justify-between"
      >
        <section data-component="LeftSection" className="flex items-center">
          <img
            className="ml-8"
            src={Logo}
            alt="Logo"
            height="81px"
            width="253px"
          />
          <NavBar />
        </section>
        <section
          data-component="RightSection"
          className="flex items-center pr-10"
        >
          <img src={AI} alt="AI" height="30px" width="30px" />
          <img
            className="ml-5"
            src={Voice}
            alt="Voice"
            height="30px"
            width="30px"
          />
          <img
            className="ml-5"
            src={Notifications}
            alt="Notifications"
            height="20px"
            width="20px"
          />
          <p className="ml-5">Max Smith</p>
          <img className="ml-5" src={Avatar} alt="Avatar" />
        </section>
      </div>
    </div>
  );
};
export default Header;
