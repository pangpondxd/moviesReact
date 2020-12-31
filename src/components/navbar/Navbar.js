import React, {useState, useEffect} from 'react'
import {Menu, Badge} from 'antd'
import {
    ShoppingOutlined,
    ShoppingCartOutlined,
    AuditOutlined,
    HomeOutlined,
  } from "@ant-design/icons";
  import { useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import './navbar.css'
  const {Item } = Menu;

const Navbar = () => {
    const [state, setState] = useState({
      bg: 'transparent'
    })
    const [current, setCurrent] = useState("home");
    let { cart } = useSelector((state) => ({ ...state }));

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
      };

      const listenScrollEvent = e => {
        if (window.scrollY > 10) {
          setState({ bg: "dark" });
        } else {
          setState({ bg: "transparent" });
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
      }, [state.bg])

    return (
        <Menu
        className={`navbar navbar-expand-sm bg-${state.bg} navbar-dark fixed-top`}
            mode="horizontal"
            theme="light"
            onClick={handleClick}
            selectedKeys={[current]}
            
          >
            <Item
              key="home"
              icon={<HomeOutlined style={{ color: "red", fontWeight: 'bold' }} />}
            >
              <Link style={{ color: "white" }} to="/">
              <a style={{ color: 'red', fontWeight: 'bold' }}>
                  MOVIEHITZ
                  </a>
              </Link>
            </Item>
            {window.location.pathname === '/' ? (
               <Item
               style={{ color: "white" }}
               key="cart"
               icon={<ShoppingCartOutlined />}
             >
               <Link to="/cart">
                 <Badge count={cart.length} offset={[9, 0]}>
                   <a style={{ color: 'white' }}>
                   CART
                   </a>
                 </Badge>
               </Link>
             </Item>
            ) : (
              <Item
              style={{ color: "black" }}
              key="cart"
              icon={<ShoppingCartOutlined />}
            >
              <Link to="/cart">
                <Badge count={cart.length} offset={[9, 0]}>
                  <a style={{ color: 'black' }}>
                  CART
                  </a>
                </Badge>
              </Link>
            </Item>
            )}
           
          </Menu>
    )
}

export default Navbar