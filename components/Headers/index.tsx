import { Layout, Menu, Dropdown, Button } from 'antd';
import Link from 'next/link';
const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a rel='noopener noreferrer' href='/signout'>
        Sign Out
      </a>
    </Menu.Item>
  </Menu>
);

const Headers = (props: any) => {
  return (
    <Header className='header'>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link href='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link href='/about'>About</Link>
        </Menu.Item>
        <Dropdown overlay={menu} placement='bottomLeft' arrow>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            {props.email}
          </a>
        </Dropdown>
      </Menu>
    </Header>
  );
};
export default Headers;
