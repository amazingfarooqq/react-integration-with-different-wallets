import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import { abi } from './SmartContract/abi';

export const ContextAPI = React.createContext()

export const useContextAPI = () => {
    return useContext(ContextAPI)
}

export const ContextProvider = ({children}) => {

    // const ContractAddress = '';
    // const provider = new ethers.providers.Web3Provider(window.ethereum).getSigner()
    // const Contract = new ethers.Contract(ContractAddress, abi, provider);
    
    const {active , activate , deactivate , account , chainId} = useWeb3React()

    const baseUrl = 'http://localhost:5000'

    const values = {
        baseUrl,
        active,
        activate,
        deactivate,
        account,
        chainId
    }


    return (
    <ContextAPI.Provider value={values}>
        {children}
    </ContextAPI.Provider>
  )
}