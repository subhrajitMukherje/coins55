import React from 'react';
import { Button,Menu,Typography,Avtar } from 'antd';
import{Link} from 'react-router-dom';
import { HomeOutlined,MoneyColleectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avtar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Coins55</Link>
            </Typography.Title>
            {/*<button className="menu-control-container">

  </button>*/}
        </div>
    </div>
  )
}

export default Navbar