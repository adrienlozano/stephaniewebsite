import React from 'react';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { setDisplayName, compose, defaultProps } from 'recompose';
import { injectGlobal } from 'styled-components'

import Head from 'react-helmet';

//import 'mdi/css/materialdesignicons.css'
import { ThemeProvider } from 'styled-components';
import { Flex } from 'rebass';
import { Provider  } from 'rebass';
import 'normalize.css';
import "react-responsive-carousel/lib/styles/carousel.css";
import 'mdi/css/materialdesignicons.css';

injectGlobal`
  * { box-sizing: border-box; }
  body, html, #PhenomicRoot, #PhenomicRoot > div {
    height: 100%;
  }
`

const theme = {
        colors: {
            primary: "#11ACE7",
            secondary:"#0277BD",
            primaryAccent: "#F50057",
            secondaryAccent: "#F06292",
            neutralAccent: "#9CCC65",
            dark: "#263238",
            light: "#EEE",
            danger: "#FF1E57"
        },
        font: "Roboto, Serif"
}
 
const Body = ({children}) => (<div>{children}</div>);

var Layout = ({children}) =>{
    return (
        <Provider theme={theme}>
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
