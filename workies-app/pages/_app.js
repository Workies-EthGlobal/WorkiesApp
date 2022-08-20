import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import MainNavigation from '../components/MainNavigation'



function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <header>
                <title>Workies</title>
                <meta name="Workies" content="Workies" />
                <link rel="icon" href="/favicon.ico" />
            </header>
            <MainNavigation/>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
