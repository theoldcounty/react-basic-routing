import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Menu, Icon, Alert } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// this is a class because it needs state
class Header extends Component {

  state = {
    current: 'home',
  }
  
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  componentDidMount() {    

  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/home" rel="noopener noreferrer">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" rel="noopener noreferrer">About</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header