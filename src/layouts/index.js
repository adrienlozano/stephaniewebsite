import React from 'react';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { setDisplayName, compose, defaultProps } from 'recompose';
import { injectGlobal } from 'styled-components'

import Head from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import { Flex } from 'rebass';
import { Provider  } from 'rebass';
import 'normalize.css';
import "react-responsive-carousel/lib/styles/carousel.css";
import 'mdi/css/materialdesignicons.css';
import 'typeface-roboto-slab';
import 'typeface-roboto';
import theme from "~/app/theme";

injectGlobal`
  * { box-sizing: border-box; }
  body, html, #PhenomicRoot, #PhenomicRoot > div {
    height: 100%;
  }
`
 
const Body = ({children}) => (<div>{children}</div>);

var Layout = ({children}) =>{
    return (
        <Provider theme={theme}>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <div style={{height: "100%" }}>
                <Header/>
                <Body>{children()}</Body>
                <Footer/>
            </div>
        </Provider>
    );
}

var enhance = compose(
    setDisplayName('Layout')
);

export default enhance(Layout);
export { Layout };
