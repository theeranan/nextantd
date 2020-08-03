import { Layout, Breadcrumb } from 'antd';
import Headers from '../Headers';
import Siders from '../Siders';
import Link from 'next/link';
const { Content } = Layout;
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;
const Layouts = (props: any) => {
  const router = useRouter();
  const { loading, error, data } = useQuery(ViewerQuery);
  const [viewer, setviewer] = useState();
  var shouldRedirect = false;
  useEffect(() => {
    setviewer(data?.viewer);
  }, [data]);
  useEffect(() => {
    shouldRedirect = !(loading || error || viewer);
  }, [viewer]);
  useEffect(() => {
    if (router.pathname != '/signup') {
      if (shouldRedirect) {
        router.push('/signin');
      }
    }
  }, [shouldRedirect]);
  if (error) {
    return (
      <Layout>
        <p>{error.message}</p>
      </Layout>
    );
  }
  if (viewer) {
    if (router.pathname == '/signin') router.push('/');
    if (router.pathname == '/signup') {
      alert('Please Sign out First');
      router.push('/');
    }
    return (
      <Layout>
        <Headers {...viewer} />
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
  } else {
    return <Layout> {props.children}</Layout>;
  }
  // return <p>Loading...</p>;
};
export default Layouts;
