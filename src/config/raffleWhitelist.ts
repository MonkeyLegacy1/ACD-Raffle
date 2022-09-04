import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  ['AopPMW9k4Q5K8bw9Vf8KEqk5wJNrkvkBWDCKzq1eDUBr', { name: 'dRafflenet #1' }],
  [
    '3u7t4uGkMP1VW5obT78rgk74zdATTuNuy6BWPfRucLfj',
    {
      name: 'dRaffle for the win',
      alternatePurchaseMints: [
        new PublicKey('72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh'),
      ],
    },
  ],
  [
    '2mrwjEz67DXTWKaVPjWwkwVPtGRWyKrTeyK5VzintsC5',
    { name: 'dRaffle with a loooooooooooooooong name' },
  ],
  [
    '9FoUjfUpWwhHYaGKM9G5eYab7qow3oWqdo2G5Ehj3h5L',
    {
      name: 'Oh my dRaffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '9ngm7zokA8AdLMqAaWgD3T5tmWBarHsNjFCrMFEF2dLn',
    {
      name: 'ACD SoDead Holo',
      overviewImageUri: '/resources/acdR.jpg',
    },
  ],
  [
    'A1wVWixCR5yU95orRKa5B5AXwbF5Fuici2Sywu9XkL5A',
    {
      name: 'SoDead',
      overviewImageUri: '/resources/acdR2.jpg',
    },
  ],
  [
    'H3wuSuYDhhRQeJXSZCg1GiQ2JrwmPi5Y7iKq5TSQbXLp',
    {
      name: 'Lost Dino Ark',
      overviewImageUri: '/resources/acdE3.jpg',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING
  ? testWhitelist
  : prodWhitelist;
