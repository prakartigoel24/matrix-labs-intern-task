import { Icon } from '@iconify/react'
import React from 'react'

export function BasicInfoCard(props) {
  return (
    <div className='card'>
      <table>
        <thead>
          <th>Basic Info</th>
        </thead>
        <tbody>
          <tr>
            <td>Pair Created at</td>
            <td>{props.createdAt}</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>{props.symbol}</td>
          </tr>
          <tr>
            <td>Dex ID</td>
            <td>{props.dexId}</td>
          </tr>
          <tr>
            <td>Pair Address</td>
            <td>{props.pairAddress}</td>
          </tr>
        </tbody>
      </table>
      <div className='iconDiv'>
      <Icon icon="ic:outline-info" color="white" width="26" height="26"/>
      </div>
    </div>
  )
}

export function BaseTokenCard(props) {
  return (
    <div className='card'>
      <table>
        <thead>
          <th>Base Token</th>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>{props.symbol}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{props.address}</td>
          </tr>
        </tbody>
      </table>
      <div className='iconDiv'>
      <Icon icon="material-symbols:token-outline" color="white" width="26" height="26" />      </div>
    </div>
  )
}
export function QuoteTokenCard(props) {
  return (
    <div className='card'>
      <table>
        <thead>
          <th>Quote Token</th>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>{props.symbol}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{props.address}</td>
          </tr>
        </tbody>
      </table>
      <div className='iconDiv'>
      <Icon icon="material-symbols:token-outline" color="white" width="26" height="26" />      </div>
    </div>
  )
}

export function PriceCard(props) {
  return (
    <div className='card'>
      <table>
        <thead>
          <th>Price</th>
        </thead>
        <tbody>
          <tr>
            <td>Price Native</td>
            <td>{props.priceNative}</td>
          </tr>
          <tr>
            <td>Price USD</td>
            <td>{props.priceUsd}</td>
          </tr>
        </tbody>
      </table>
      <div className='iconDiv'>
      <Icon icon="pepicons-pop:dollar" color="white" width="26" height="26" />
      </div>

    </div>
  )
}

