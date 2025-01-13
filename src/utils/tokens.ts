import { WMAS as _WMAS } from '@dusalabs/sdk';
import { CHAIN_ID } from './config';
import { Token } from './types';
import { unknownURI } from './constants';
import Massa_Brand_Red from '../assets/Massa_Brand_Red.svg';

const equals = _WMAS[CHAIN_ID].equals;

const WMAS_ADDRESS = {
  0: 'AS12LArwGjZcAQoaiBnL5Vs2SbaqXMj9P8y9oWjTmJzPbVoUeV9AJ', // buildnet
  1: 'AS12U4TZfNK7qoLyEERBBRDMu8nm5MKoRzPXDXans4v9wdATZedz9' // mainnet
}[CHAIN_ID];

export const MASSA: Token = new Token(
  CHAIN_ID,
  WMAS_ADDRESS + '_',
  _WMAS[CHAIN_ID].decimals,
  Massa_Brand_Red,
  'MAS',
  'Massa'
);

export const WMAS: Token = {
  ..._WMAS[CHAIN_ID],
  address: WMAS_ADDRESS,
  name: 'Wrapped MASSA',
  symbol: 'WMAS',
  logoURI: unknownURI,
  equals
};
