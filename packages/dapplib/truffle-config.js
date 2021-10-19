require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stomach response meadow comic hunt praise army gather'; 
let testAccounts = [
"0x6e53fd25adeca0a5300edf5b85d7979597bcdb65ce3436ccefc45aa1f707bee1",
"0x21303df999a0fe39cc2dfff2fb3bff38fe4b47bd6c875a38cc67ef74de060c31",
"0xcb3ecb88cefad1e61481a852e879d1808a0c0e8b5323281ffe8ba06f52a84255",
"0xede74d6c04ba46fa056fe9e148b70c3cc6506f7fb405c9243b71507ab2ba9647",
"0x23cbb734ec0acf05b6713b492c99cef2d4a2424d6dcd3c3dddebb273ffbe3052",
"0xb461757b3a4aa53717084ea557738ff51c5330daf60c3790ccf0d56afd2f9716",
"0x8e056a0011938d8305d65bab791e9a5f092f67c4a45a5593f71fe4dabc55801d",
"0xf7fbf58c41178c4bdc4a6cea6870c3492a8d8735ddc6eccfabb3a767d1e43d48",
"0x6530a7b3dfbbdf6801299c36878a0936d421821590bafab095b5f9292143da40",
"0xfe159bb5136163f302e892d5d2a7cd06a0c797dd69100575b2b5620a4f47a9a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

