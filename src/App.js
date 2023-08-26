import './App.css';
import Sidebar from './Components/Sidebar.js';
import Searchbar from './Components/Searchbar';
import { BasicInfoCard, QuoteTokenCard, BaseTokenCard, PriceCard } from './Components/Cards';
import { useEffect, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  const [results, updateResults] = useState(null);
  return (
    <div className="App">
      <Sidebar />
      <Searchbar updateResults={updateResults} />
      <div className = "btn"> <ConnectButton /> </div>
      <h1 id='result-heading'>{window.location.pathname == "/" || window.location.pathname == "/token-address-search" ? "Token Search Results" : "Pair Search Results"}</h1>
      <div>
        {console.log(results)}
        {results && (
          <div className='CardDiv'>
              {results.pairs.map((pair) => (
                <>
                  <BasicInfoCard createdAt="Ethereum" symbol="ETH" dexId={pair.dexId} pairAddress={pair.pairAddress.slice(0,4)} />

                  <BaseTokenCard name="Ethereum" symbol={pair.baseToken.symbol} address={pair.baseToken.address.slice(0,4)} />

                  <QuoteTokenCard name="Ethereum" symbol={pair.quoteToken.symbol} address={pair.baseToken.address.slice(0,4)} />

                  <PriceCard priceNative={pair.priceNative} priceUsd={pair.priceUsd} />
                </>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default App;
