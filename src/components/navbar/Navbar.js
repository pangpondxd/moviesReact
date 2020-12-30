import React, {useState} from 'react'
import {Menu, Badge} from 'antd'
import {
    ShoppingOutlined,
    ShoppingCartOutlined,
    AuditOutlined,
    HomeOutlined,
  } from "@ant-design/icons";
  import { useSelector } from "react-redux";
  import { Link } from "react-router-dom";
import Search from '../form/Search';
  const {Item } = Menu;

const Navbar = () => {
    const [current, setCurrent] = useState("home");
    let { cart } = useSelector((state) => ({ ...state }));

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
      };

    return (
        <Menu
            theme="dark"
            style={{
              backgroundColor: "#141414",
              color: "white",
            }}
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Item
              style={{ color: "white" }}
              key="home"
              icon={<HomeOutlined />}
            >
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </Item>
            <Item
              style={{ color: "white" }}
              key="cart"
              icon={<ShoppingCartOutlined />}
            >
              <Link to="/cart">
                <Badge count={cart.length} offset={[9, 0]}>
                  <a style={{ color: 'white' }}>
                  Cart
                  </a>
                </Badge>
              </Link>
            </Item>

            <span className="float-right p-1">
              <Search />
            </span>
          </Menu>
    )
}

export default Navbar