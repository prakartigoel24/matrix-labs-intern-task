import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'matrix-labs-internship-project',
  projectId: '861876bde24d8dccd4bb13c9cb34964e',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}
      theme={darkTheme({
      accentColor: "linear-gradient(95.24deg, #7C0F35 7.59%, #581266 104.01%)",
      accentColorForeground: 'white',
      borderRadius: 'large',
      fontStack: 'system',
      overlayBlur: 'small',
    })}
>
    <App />
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
