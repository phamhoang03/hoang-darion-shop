import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchTitle } from "../../redux-toolkit/featrures/searchSlice";
import ProfileMenu from "./ProfileMenu";
import React, { useEffect, useState } from "react";
import NavigationMobie from "./NavigationMobie";
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const totalCart = useSelector((state) => state.cartSlice.carts.length);
  const totalHeart = useSelector((state) => state.heartSlice.hearts.length);
  // const search = useSelector((state) => state.searchSlice);
  const login = useSelector((state) => state.authenSlice.isLogin);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChangeSearchTitle = (e) => {
    dispatch(searchTitle(e.target.value));
  };

  const listMenu = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "Product", to: "/product" },
    { id: 3, title: "MyCV", to: "/" },
    { id: 4, title: "Blog", to: "/blog" },
  ];

  // Hiệu ứng thay đổi header khi cuộn
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false); // Ẩn khi cuộn xuống
      } else {
        setVisible(true); // Hiện khi cuộn lên
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="container flex items-center transition-all">
        {/* Logo */}
        <h1 className="flex-shrink-0 mr-5">
          <Link to="/" className="block max-w-[130px]">
            <img className="max-w-full" src="/images/logo.webp" alt="Darion" />
          </Link>
        </h1>

        {/* Search Box */}
        <div className="relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block">
          <input
            onChange={handleChangeSearchTitle}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Link
            to="/product"
            className="absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <img className="size-5" src="/images/ico_search.png" alt="Search" />
          </Link>
        </div>

        {/* Navigation trên máy tính */}
        <nav className="mr-28 hidden lg:block ml-auto">
          <ul className="flex justify-center items-center gap-10">
            {listMenu.map((menu) => (
              <li key={menu.id} className="relative">
                <Link
                  to={menu.to}
                  className="after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] 
                    after:transition-all after:duration-300 after:w-full after:scale-x-0 
                    hover:after:scale-x-100"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Actions */}
        {/* User Actions */}
        <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
          {/* Search Icon for Mobile */}
          <a href="#none" className="lg:hidden">
            <img className="size-5" src="/images/ico_search.png" alt="Search" />
          </a>

          {/* User Profile / Login */}
          {login ? (
            <ProfileMenu />
          ) : (
            <Link to="/login">
              <img className="size-5" src="/images/ico_user.png" alt="User" />
            </Link>
          )}

          {/* Wishlist */}
          <Link to="/heart" className="relative">
            {totalHeart > 0 && (
              <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
                {totalHeart}
              </span>
            )}
            <img
              className="size-5"
              src="/images/ico_heart.png"
              alt="Wishlist"
            />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            {totalCart > 0 && (
              <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
                {totalCart}
              </span>
            )}
            <img className="size-5" src="/images/ico_bag.png" alt="Cart" />
          </Link>

          {/* Navigation trên mobile - Chuyển xuống cuối */}
          <nav className="lg:hidden ml-auto">
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Drawer
              open={open}
              anchor="right"
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { width: "250px" } }} // Định kích thước của menu mobile
            >
              <NavigationMobie
                listMenu={listMenu}
                toggleDrawer={toggleDrawer}
              />
            </Drawer>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
