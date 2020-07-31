import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header } = Layout;
const linkStyle = {
  marginRight: 15,
};
const Headers = () => (
  <Header className='header'>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
      <Menu.Item key='1'>
        <Link href='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link href='/about'>About</Link>
      </Menu.Item>
    </Menu>
  </Header>
);
export default Headers;
