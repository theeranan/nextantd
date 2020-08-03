import React from 'react';
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import Layouts from 'components/Layouts';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ApolloProvider>
  );
}
export default MyApp;
