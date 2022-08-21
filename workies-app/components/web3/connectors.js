import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 137]
});

const walletconnect = new WalletConnectConnector({
    rpcUrl: `https://polygon-mumbai.infura.io/v3/d21346ef58fa48caa585fab7ab62662b`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true
});

export const connectors = {
    injected: injected,
    walletConnect: walletconnect,
};