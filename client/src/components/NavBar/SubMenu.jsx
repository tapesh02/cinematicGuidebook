import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlinePlaylistPlay, MdOutlineManageAccounts } from "react-icons/md";

const SubMenu = (props) => {
    const { setShowMenuItem, showMenuItem } = props;
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/signin");
        setShowMenuItem(!showMenuItem);
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
            menuItem: "Logout",
            icon: <IoIosLogOut size={20} />,
            click: handleLogout,
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

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showMenuItem && !buttonRef.current?.contains(e.target)) {
                setShowMenuItem(!showMenuItem);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [buttonRef, showMenuItem, setShowMenuItem]);

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
