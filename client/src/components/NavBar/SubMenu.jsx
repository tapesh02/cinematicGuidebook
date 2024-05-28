import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlinePlaylistPlay, MdOutlineManageAccounts } from "react-icons/md";
import axios from "axios";
import { urlPath } from "../../Helpers/ApiHelpers";
import { GlobalContext } from "../../useContext/Context";

const SubMenu = (props) => {
  const { setShowMenuItem, showMenuItem } = props;
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(GlobalContext);

  const handleSignOut = async () => {
    try {
      const url = `${urlPath}/signout`;
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data.message);
      if (response?.status === 200) {
        navigate("/signin");
        setIsLoggedIn(false);
        sessionStorage.clear();
      }
      setShowMenuItem(!showMenuItem);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfile = () => {
    navigate("/profile");
    setShowMenuItem(!showMenuItem);
  };

  const handleWatchList = () => {
    navigate("/watchlist");
    setShowMenuItem(!showMenuItem);
  };

  const subMenu = [
    {
      menuItem: "Sign out",
      icon: <IoIosLogOut size={20} />,
      click: handleSignOut,
    },
    {
      menuItem: "Profile",
      icon: <MdOutlineManageAccounts size={20} />,
      click: handleProfile,
    },
    {
      menuItem: "Watchlist",
      icon: <MdOutlinePlaylistPlay size={20} />,
      click: handleWatchList,
    },
  ];

  //TODO NOTES: fixed this code as this is not working as expected

  // useEffect(() => {
  //     const handleClickOutside = (e) => {
  //         if (showMenuItem && !buttonRef.current?.contains(e.target)) {
  //             setShowMenuItem(!showMenuItem);
  //         }
  //     };
  //     document.addEventListener("mousedown", handleClickOutside);

  //     return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //     };
  // }, [buttonRef, showMenuItem, setShowMenuItem]);

  const RenderMenuItems = () => (
    <div className="menu-item">
      {subMenu?.map((menu) => {
        const { menuItem, icon, click } = menu;
        return (
          <button ref={buttonRef} className="menu-list" onClick={click} key={menuItem}>
            {icon} {menuItem}
          </button>
        );
      })}
    </div>
  );

  return <RenderMenuItems />;
};

SubMenu.propTypes = {
  setShowMenuItem: PropTypes.func,
  showMenuItem: PropTypes.bool,
};

export default SubMenu;
