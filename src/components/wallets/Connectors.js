import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";

// MetaMask
export const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56 , 97]
});

// CoinBase Wallet
export const CoinbaseWallet = new WalletLinkConnector({
    url: `https://rinkeby.infura.io/v3/def1eb9ab3244b6abcee692610557bc7`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42, 56 , 97],
    qrcode: true
});

// connect wallet
// export const WalletConnect = new WalletConnectConnector({
//   rpc: { 1: 'https://rinkeby.infura.io/v3/def1eb9ab3244b6abcee692610557bc7' },
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   pollingInterval: 1200
// });

// portis
export const portis = new PortisConnector({
  dAppId: "211b48db-e8cc-4b68-82ad-bf781727ea9e",
  networks: [1, 100]
});

// fortmatic
export const fortmatic = new FortmaticConnector({
  apiKey: "pk_live_F95FEECB1BE324B5",
  chainId: 1
});