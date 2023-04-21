import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../../utils/firebaseFetching";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <nav className="header__nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <NavLink to="/shop" className="nav__link">
        Tienda
      </NavLink>

      <div className="dropdown-menu">
        <button className="nav__link" onClick={handleOpen}>
          Productos
        </button>
        <div
          className={`dropdown-menu__categories 
          ${open ? "active" : "inactive"}`}
          onMouseLeave={handleLeave}
        >
          {categories &&
            categories.map((category) => {
              return (
                <Link
                  to={`/shop/category/${category.name}`}
                  className="nav__link nav__link--category"
                  key={category.id}
                >
                  {category.name}
                </Link>
              );
            })}
        </div>
      </div>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
