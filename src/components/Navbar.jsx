import React, { useEffect } from "react";
import { navLinks } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateSection } from "../Redux/features/selection/selecitonSlice";
import { Link, useParams } from "react-router-dom";

function Navbar() {
  let { selection_id } = useParams();
  if (selection_id == null) {
    selection_id = 1;
  }

  const dispatch = useDispatch();

  //function to update the selection in the store
  useEffect(() => {
    dispatch(updateSection(selection_id));
  }, [selection_id]);

  return (
    <div className="navbar w-full mb-7">
      <ul className="nav-links flex justify-center sm:justify-start items-center gap-3">
        {navLinks.map((navlink) => {
          return (
            <Link
              to={`/${navlink.id}`}
              key={navlink.id}
              className={`navlink cursor-pointer font-semibold text-sm sm:text-base px-3 sm:px-6 py-3 rounded-2xl sm:rounded-3xl  ${
                selection_id == navlink.flag
                  ? "bg-main_purple text-white"
                  : "bg-deactive_gray text-main_text hover:bg-gray-200"
              }`}
            >
              {navlink.text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
