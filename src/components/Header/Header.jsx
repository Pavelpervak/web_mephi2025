// src/components/Header/Header.jsx
import { Layout, Menu, Typography, Avatar } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path === '/') return ['main'];
    if (path === '/movies') return ['movies'];
    if (path === '/profile') return ['profile'];
    return ['main'];
  };

  const menuItems = [
    {
      key: "main",
      label: <Link to="/">Главная</Link>,
    },
    {
      key: "movies",
      label: <Link to="/movies">Фильмы</Link>,
    },
    {
      key: "profile", 
      label: <Link to="/profile">Профиль</Link>,
    },
  ];

  const handleUserClick = () => {
    navigate('/profile');
  };

  return (
    <Layout.Header className="header-main">
      <Menu
        mode="horizontal"
        selectedKeys={getSelectedKeys()}
        items={menuItems}
        className="header-menu"
      />
      <div 
        className="user-container" 
        onClick={handleUserClick} 
        style={{cursor: 'pointer'}}
      >
        <Avatar size={"large"}>К</Avatar>
        <div className="user-name-container">
          <Typography.Text>Ксения Ц.</Typography.Text>
          <Typography.Text type={"secondary"}>Критик</Typography.Text>
        </div>
      </div>
    </Layout.Header>
  );
}

export default Header;