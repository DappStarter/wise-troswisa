require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot elbow dash soccer unfold inflict another army gaze'; 
let testAccounts = [
"0x32d4e2192523afa9e1e5d18830113d8f0e87038b1d7f79267d917e7ecf0fd74a",
"0xd9aa9c83396bff546179ffa183780eab0368f65d85c3406b5838a263912ee982",
"0x271bc818e08faeb76c1b0c34920c83442b883c1fae050e4bc9adca852d6faa93",
"0x9a6de916c933d5ec810c697b824ad97b23069e4e59b080416ffea1c49926e8b6",
"0x922ed845f0751ca40f56300b7977be731a185c04fc62884466977ed6091de815",
"0x2172d3aca315de9d280a7abe267034c3b9a5aa10de71cdfa1870778c3d783d48",
"0x2fae8753b50fd9362db61520bfcd899e93811269928b471f09d2841d723c659e",
"0xbf7c699c2fa4e0daae5cb837da6b5c62254be10bde56a5b266a589090ecaaea9",
"0x99c3d24f4434ac1250e476609727fbec613fa355f21b3c2ecebdb4c8b0caa645",
"0xd37f17fdf94567d033828960e13251b675d03f601be827b2f91330c2da7ef262"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
