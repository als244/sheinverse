import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';

export const WalletConnection = () => {
    const { wallet } = useWallet();
    return (
        <>
            <h1>Sheinverse</h1>
            <div>
                <WalletMultiButton />
                {wallet && <WalletDisconnectButton />}
            </div>
        </>
    );
};

export default WalletConnection;