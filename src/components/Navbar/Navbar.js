import React from "react";
import { Layout, Menu } from "antd";
import "./Navbar.scss";

const { Header, Content, Footer } = Layout;

const items = [
  { label: "Home", key: "item-1" },
  { label: "Volunteers", key: "item-2" },
  { label: "Organizations", key: "item-3" },
  { label: "Log-in", key: "item-4" },
];

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">This is just a dummy data</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Be There ©2022 Created for HackZurich 2022
      </Footer>
    </Layout>
  );
};

export default Navbar;
