import { Layout, Breadcrumb } from 'antd';
import Headers from '../Headers';
import Siders from '../Siders';
const { Content } = Layout;
const Layouts = (props) => (
  <Layout>
    <Headers />
    <Layout>
      <Siders />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
export default Layouts;
