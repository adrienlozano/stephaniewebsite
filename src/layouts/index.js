import React from 'react';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { setDisplayName, compose, defaultProps } from 'recompose';
import Head from 'react-helmet';

//import 'mdi/css/materialdesignicons.css'
import { ThemeProvider } from 'styled-components';
import { Flex } from 'rebass';
import { Provider  } from 'rebass';

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

/*
    primary: ["#11ACE7", "#0277BD" ],
    accent: ["#F50057", "#F06292", "#9CCC65"],
    text: "#212121",
    grayscale: ['#263238', '#EEEEEE'],
    divider: "#BDBDBD",
*/
 
const Body = ({children}) => (<div>{children}</div>);

var Layout = ({children}) =>{
    return (
        <Provider theme={theme}>
            <div style={{height: "100%" }}>
           
                <Body>{children}</Body>
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
