import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-4 ">
        <h2 className="text-3xl font-bold">
          Hi<span className="text-green-600 ">link</span>
        </h2>
        <ul className="nav flex items-center justify-center space-x-10 text-gray-600">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">How Hilikin Work?</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact US</li>
        </ul>
        <button className="login bg-stone-800 text-white  rounded-full p-3 px-6 font-bold text-lg">
          <span className="pr-3">
            <FontAwesomeIcon className="" icon={faUser} />
          </span>
          Login
        </button>
        <FontAwesomeIcon className="nav-bar text-2xl" icon={faBars} />
      </div>
    </div>
  );
}

export default Header;
