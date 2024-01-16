// import React from "react";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export const Navbar = (props) => {
//   let isLoggedIn = props.isLoggedIn;
//   let setIsLoggedIn = props.setIsLoggedIn;
//   return (
//     <div className="relative">
//     <nav
//     className="flex justify-between items-center justify-around py-8 mx-auto relative top-[52px] left-[
//       152px] w-[100%] fixed bg-[#865de0ac] z-30"
//   >
//     <Link to="/">
//       <img src={logo} alt="Logo" className="w-[214px] h-[40px]" />
//     </Link>

//     <div>
//       <ul className="text-richblack-100 flex gap-x-6">
//         <li>
//           <Link to="/">About</Link>
//         </li>
//         <li>
//           <Link to="/courses">Courses</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </div>

//     {/* Login - SignUp - LogOut - Dashboard */}
//     <div className="flex items-center gap-x-4">
//       {!isLoggedIn && (
//         <Link to="/login">
//           <button
//             className="bg-richblack-800 text-richblack-100 py-[8px] 
//           px-[12px] rounded-[8px] border border-richblack-700"
//           >
//             Log in
//           </button>
//         </Link>
//       )}
//       {!isLoggedIn && (
//         <Link to="/signup">
//           <button
//             className="bg-richblack-800 text-richblack-100 py-[8px] 
//           px-[12px] rounded-[8px] border border-richblack-700"
//           >
//             Sign up
//           </button>
//         </Link>
//       )}
//       {isLoggedIn && (
//         <Link to="/">
//           <button
//             onClick={() => {
//               setIsLoggedIn(false);
//               toast.success("Logged Out");
//             }}
//             className="bg-richblack-800 text-richblack-100 py-[8px] 
//           px-[12px] rounded-[8px] border border-richblack-700"
//           >
//             Log Out
//           </button>
//         </Link>
//       )}
//       {isLoggedIn && (
//         <Link to="/dashboard">
//           <button
//             className="bg-richblack-800 text-richblack-100 py-[8px] 
//           px-[12px] rounded-[8px] border border-richblack-700"
//           >
//             Dashboard
//           </button>
//         </Link>
//       )}
//     </div>
//   </nav>
//     </div>
   
//   );
// };


import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  
  return (
    <div className="relative">
      <nav
        className="flex justify-between items-center justify-around py-8 mx-auto fixed top-0 left-0 w-full bg-[#865de0ac] z-30 shadow-2xl shadow-[#0e0e1c]"
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[214px] h-[40px]" />
        </Link>

        <div>
          <ul className="text-[#FFFFFF] flex gap-x-6 font-[700] text-[22px]">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className="flex items-center gap-x-4">
          {!isLoggedIn && (
            <Link to="/login">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log in
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                px-[12px] rounded-[8px] border border-richblack-700"
              >
                Sign up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log Out
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                px-[12px] rounded-[8px] border border-richblack-700"
              >
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};



