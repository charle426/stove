import { useState, useRef } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import logo from "../assets/IMG-20231007-WA0005-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
export default function AdminLogin({ setAdminAuth }) {
    setAdminAuth(false);
    const passwordRef = useRef()
    function seePassword() {
        if (passwordRef.current.type == "password")
        {
            passwordRef.current.type = "type"
        } else
        {
            passwordRef.current.type = "password"
        }
    }
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()  
    
  function handleChange(e) {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
          setAdminAuth(true)
          navigate("/blog/stove/admin/234813649");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage + "code" + errorCode)
      });
  }
  return (
    <section className="my-20 p-5">
      <div className="flex justify-center items-center flex-col gap-10 w-full">
        <div className="items-center justify-center h-[100px] w-[100px] p-7 rounded-full bg-white origin-center">
          <img src={logo} alt="logo" className="md:w-[200px] w-[140px]" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-lg flex justify-center items-center max-w-[500px] w-full flex-col gap-4"
        >
          <div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={login.email}
              className="outline-none rounded-[10px] px-2 py-3 max-w-[400px] bg-white border border-[#323942] focus:border-[#a8e92f]  invalid:border-red-500 w-full"
            />

            <br />
            <label>Email</label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              autoComplete
              value={login.password}
              className="outline-none rounded-[10px] px-2 py-3 max-w-[400px] bg-white border border-[#323942] focus:border-[#a8e92f]  invalid:border-red-500 w-full"
              ref={passwordRef}
            />
            <FontAwesomeIcon
              icon={faEye}
              className="absolute cursor-pointer hover:text-[#a8e92f] left-[88%] top-[18px]"
              onClick={seePassword}
            />
            <br />
            <label>Password</label>
          </div>
          <button className="button px-5 py-2">login</button>
        </form>
      </div>
    </section>
  );
}