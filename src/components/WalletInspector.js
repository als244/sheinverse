import { useWallet, useConnection} from '@solana/wallet-adapter-react';
import { TOKEN_PROGRAM_ID} from "@solana/spl-token";
import TokenCount from './TokenCount';
import Button from './Button';
import {Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const MINT_ADD = "6rbtgebh89nx2vd9EbzcTMhQS8pKUG9ggoGEijuMFUbC";

export const WalletInspector = () => {
    let location = useLocation();
    const { connection } = useConnection();
    const { wallet, publicKey } = useWallet();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (wallet && publicKey){
            fetchBalance();
        }
    }, [wallet, publicKey]);

    const fetchBalance = async () => {
        const tokens = await connection.getParsedTokenAccountsByOwner(publicKey, {programId: TOKEN_PROGRAM_ID});
        let shein_token = tokens.value.find(t => t.account.data.parsed.info.mint === MINT_ADD);
        let my_balance = shein_token ? shein_token.account.data.parsed.info.tokenAmount.uiAmount: 0;
        setBalance(my_balance);
    }

    return (
        <div style={{textAlign: "center"}}>
            {publicKey && balance > 0 && location.pathname=="/" &&
                <><TokenCount count={balance} /><Link to='/destination'>
                    <Button text="Enter Portal..." color="Green" />
                </Link></>
            }
        </div>
        
    );
};

export default WalletInspector;