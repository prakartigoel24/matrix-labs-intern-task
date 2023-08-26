import React from 'react'
import { useState } from 'react';


function Searchbar(props) {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };
    let tokenApi = "https://api.dexscreener.io/latest/dex/tokens/";
    let pairApi = "https://api.dexscreener.io/latest/dex/pairs/bsc/";
    let finalApiEndpoint = "";
    const fetchResultsByTokenAddress = async ()=>{
        finalApiEndpoint = tokenApi + searchInput;
        try {
            const response = await fetch(finalApiEndpoint);
            const dataFetched = await response.json();
            dataFetched.pairs?.sort((a, b) => {
                const priceA = parseFloat(a.priceUsd);
                const priceB = parseFloat(b.priceUsd);
                
                if (priceA > priceB) {
                  return -1; // a comes before b
                } else if (priceA < priceB) {
                  return 1; // b comes before a
                } else {
                  return 0; // no change in order
                }
              });
            props.updateResults(dataFetched);
        } catch (error) {
            console.log("ERR0R" + error);
        }
      }
      
      const fetchResultsByPairAddress = async ()=>{
        finalApiEndpoint = pairApi + searchInput;

        try {
            const response = await fetch(finalApiEndpoint);
            const dataFetched = await response.json();
            props.updateResults(dataFetched);
        } catch (error) {
            console.log("ERR0R" + error);
        }

      }
  
    const getResults = ()=>{
        if(window.location.pathname == "/" || window.location.pathname == "/token-address-search")
        {
            fetchResultsByTokenAddress();
        }
        else
        {
            fetchResultsByPairAddress();
        }
    }

    return (
        <div className='search'>

            <input name='search' type='text' value={searchInput} placeholder='search'
                onChange={handleChange}
                className='search-input'
            />

            <button class="search-button" onClick={getResults}>
                <svg class="search-icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default Searchbar