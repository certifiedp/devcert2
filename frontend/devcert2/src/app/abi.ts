export const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "addX",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "addY",
          "type": "uint256"
        }
      ],
      "name": "add_liquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pool_state",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "supply_x",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "supply_y",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "deposited_y",
          "type": "uint256"
        }
      ],
      "name": "swap_x",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "deposited_x",
          "type": "uint256"
        }
      ],
      "name": "swap_y",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const