# README for NestJS Ethereum Token Balance API

## Overview

This repository contains a NestJS-based API for querying the balance of an Ethereum token for a given address. It uses the ethers.js library to interact with the Ethereum blockchain. The API retrieves the balance of a specified ERC-20 token and returns it in Ether units.

## Features

- **Token Balance Retrieval**: Fetches the balance of a specified ERC-20 token for a given Ethereum address.
- **Ethereum Blockchain Integration**: Utilizes ethers.js for blockchain interactions.
- **Environmental Variable Support**: Configurable through a `.env` file for sensitive data like API keys.

## Prerequisites

- Node.js
- npm or yarn
- An Ethereum JSON RPC provider URL (e.g., Alchemy, Infura)
- ERC-20 token contract address (configured in `src/utils/contractAddresses.js`)

## API Endpoints

- **GET `/token/balance/:address`**: Returns the balance of the ERC-20 token for the specified address.

## Architecture

- `src/controllers/token.controller.ts`: Handles incoming HTTP requests and routes them to the appropriate service.
- `src/services/token.service.ts`: Contains the business logic to interact with the Ethereum blockchain and fetch token balances.
- `src/token/token.module.ts`: Groups and organizes the controller and service for the token functionality.
