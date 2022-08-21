import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import MainNavigation from '../components/MainNavigation'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers';

const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
};

function MyApp({ Component, pageProps }) {
    return (

        <ChakraProvider>
            <Web3ReactProvider getLibrary={getLibrary}>
                <header>
                    <title>Workies</title>
                    <meta name="Workies" content="Workies" />
                    <link rel="icon" href="/favicon.ico" />
                </header>
                <MainNavigation />
                <Component {...pageProps} />
            </Web3ReactProvider>
        </ChakraProvider>
    );
}

export default MyApp;
