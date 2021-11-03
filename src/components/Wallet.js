import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    getLedgerWallet,
    getPhantomWallet,
    getSolflareWallet,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useCallback, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import WalletConnection from './WalletConnection';
import WalletInspector from './WalletInspector';


export const Wallet = () => {
    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets imports all the adapters but supports tree shaking --
    // Only the wallets you want to support will be compiled into your application
    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSolflareWallet(),
            getLedgerWallet(),
        ],
        [network]
    );

    const onError = useCallback(
        (error) => console.log(error)
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect>
                <WalletModalProvider>
                    <nav>
                        <WalletConnection/>
                    </nav>
                    <WalletInspector/>
                </WalletModalProvider>
                <Toaster position="bottom-left" reverseOrder={false} />
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Wallet