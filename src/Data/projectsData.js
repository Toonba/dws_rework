import avalytics from '../Assets/avalytics-logo.png'
import ferdyFlip from '../Assets/ferdyflip-logo_1.png'
import raffllrr from '../Assets/raffllrr-logo.png'
import sausagers from '../Assets/sausagers-logo.jpeg'
import mamboMakers from '../Assets/mambomakers-logo.png'

export const projects = [
  {
    title: 'Avalytics',
    picture: avalytics,
    link: 'https://www.avalytics.xyz',
    description: 'Avalytics aggregates data from on-chain NFT marketplaces in the Avalanche ecosystem & provides users with a free NFT analytics platform.',
    scope: ['UI/UX design', 'Database and request serving API', 'Complex offline web3 processing pipeline']
  },
  {
    title: 'FerdyFlip',
    picture: ferdyFlip,
    link: 'https://www.ferdyflip.xyz/',
    description: 'FerdyFlip is an on-chain decentralised gaming dApp.',
    scope: ['Website design / UX focused on creating fun experiences', 'Social integration via custom site chat server, user to user interactions via tipping, and automatic Twitter posts', 'Multiple smart contracts with Chainlink VRF integration and a shared treasury', 'Offline web3 indexer feeding analytics and user API']
  },
  {
    title: 'Raffllrr',
    picture: raffllrr,
    link: 'https://www.raffllrr.xyz/',
    description: 'Raffllrr is the premier raffling dApp on Avalanche. Providing artists and collectors the power to raffle NFTs safely and securely.',
    scope: ['Website design / UX to simplify raffle creation and entice participants', 'Social integrations', 'Smart contract to handle escrow and payment, with Chainlink integration', 'Offline web3 indexer feeding analytics and user API']
  },
  {
    title: 'Sausagers',
    picture: sausagers,
    link: 'https://www.sausagers.xyz',
    description: 'Enter the fanciful wonderland of Sausagers, spawn of the mysterious blue condiment and beautiful inhabitants of Sausagers City.',
    scope: ['Snapshots and airdrops', 'Custom reveal server to prevent metadata leaks and reveal sniping', 'Custom coding for image generation', 'Four contracts:', ['Exchangeable token NFT + mint', 'Extendable NFT', 'Exchange/reveal contract', 'Separate honoraries NFT']]
  },
  {
    title: 'MamboMakers',
    picture: mamboMakers,
    link: 'https://www.mambomakers.com/',
    description: 'The Mambo Makers ecosystem is a testbed for smart contract and backend innovation, bringing new ideas to the blockchain in a lighthearted way.',
    scope: ['Custom Discord bot integrations with the blockchain', 'API server for hidden reveals, bot-protected mints, and community information', 'Smart contract to handle escrow and payment, with Chainlink integration', 'Four contracts:', ['Holder leaderboard scoring', 'On-chain username and profile picture', 'AVAX raffle ticket entry', 'Various custom NFTs including soulbound mechanics, on-chain metadata, and more']]
  }
]
