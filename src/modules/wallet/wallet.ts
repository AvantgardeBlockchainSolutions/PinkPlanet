    import Web3 from "web3";
    import { WalletTypes } from "./walletConfig";
    import WalletConnectProvider from "@walletconnect/web3-provider";
    import detectEthereumProvider from "@metamask/detect-provider";
    import { Networks } from "./walletConfig";
    import { walletTestConnectId, walletMainConnectId, networkTestChainId, networkMainChainId, } from "./walletConfig";

    const getBinanceUrl = () => {
        let currBscArr = 'https://bsc-dataseed1.binance.org:443'
        let bscArr = ['https://bsc-dataseed1.binance.org:443']
        currBscArr = bscArr[Math.floor(Math.random() * bscArr.length)]
        return currBscArr
    }

                    //? new Web3(new Web3.providers.HttpProvider("https://delicate-rough-sea.bsc.quiknode.pro/80dc27e919b81c1abbd395c860ebdb31a23d83b6/"))
    class Wallet {
        web3: any;
        walletType = 0;

        constructor() {
            this.web3 = 
                window.ethereum !== undefined && window.ethereum.chainId === '0x38'
                    ? new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"))
                    : new Web3(new Web3.providers.HttpProvider(getBinanceUrl()))

            //this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545/"))
        }

        getNetwork = (network: string): string => {
            switch (network) {
                case Networks.mainnet:
                    return "Mainnet";

                case Networks.ropsten:
                    return "Ropsten";

                case Networks.rinkeby:
                    return "Rinkeby";

                case Networks.goerli:
                    return "Goerli";

                case Networks.kovan:
                    return "Kovan";

                case Networks.moonBaseAlpha:
                    return "Moonbase Alpha";

                default:
                    return "Unknown";
            }
        };

        async setProvider(type: number) {
            let provider;
            switch (type) {
                case WalletTypes.metamask:
                    try {
                        const provider: any = await detectEthereumProvider()
                        const { ethereum } = window;
                        const data = [
                            {
                                chainId: '0x38',
                                chainName: 'Binance Smart Chain',
                                nativeCurrency: {
                                    name: 'BNB',
                                    symbol: 'BNB',
                                    decimals: 18,
                                },
                                rpcUrls: [walletMainConnectId],
                                blockExplorerUrls: ['https://bscscan.com/'],
                            },
                        ]

                        await provider.request({ method: 'wallet_addEthereumChain', params: data }).catch()
                        if (provider === ethereum) {
                            this.web3.setProvider(provider);
                            this.walletType = type;
                        } else {
                            window.alert('Please activate MetaMask first.')
                        }
                    } catch (error) {
                        window.alert('Please activate MetaMask first.')
                    }
                    break;

                case WalletTypes.walletConnect:
                    provider = new WalletConnectProvider({
                        // infuraId:'0fe795d7c0254f8096cdeba845d83e99'
                        rpc: {
                            [networkMainChainId]: walletMainConnectId,
                            [networkTestChainId]: walletTestConnectId,
                        },
                        chainId: 56,
                        bridge: "https://bridge.walletconnect.org",
                        qrcode: true,
                        pollingInterval: 12000,
                    });
                    this.walletType = type;
                    this.web3.setProvider(provider);
                    // console.log("curr provider ", this.web3.currentProvider);
                    break;

                case WalletTypes.binance:
                    // console.log(window.BinanceChain);
                    this.web3.setProvider(window.BinanceChain);
                    this.walletType = type;

                    break;
                default:
                    throw new Error("Invalid wallet type");
            }
        }

        login = async (type: number) => {
            let accounts: Array<string>;
            let address: String;

            switch (type) {
                case WalletTypes.metamask:
                    accounts = await this.web3.currentProvider.request({
                        method: "eth_requestAccounts",
                    });

                    const chainId = await this.web3.currentProvider.request({
                        method: "eth_chainId",
                    });
                    if (accounts.length) {
                        address = accounts[0];
                    } else {
                        throw new Error("No account found");
                    }

                    this.web3.currentProvider.on(
                        "accountsChanged",
                        async (accounts: Array<string>) => {

                            const chainId = await this.web3.currentProvider.request({
                                method: "eth_chainId",
                            });

                            if (accounts.length) {
                                address = accounts[0];
                            }
                        }
                    );

                    this.web3.currentProvider.on("chainChanged", () => {
                        window.location.reload();
                    });
                    break;

                case WalletTypes.walletConnect:
                    accounts = await this.web3.currentProvider.enable();

                    const chainIdWalletConnect = await this.web3.eth.getChainId();

                    if (accounts.length) {
                        address = accounts[0];
                        // window.location.reload();
                    } else {
                        throw new Error("No account found");
                    }

                    this.web3.currentProvider.on("chainChanged", () => {
                        window.location.reload();
                    });

                    this.web3.currentProvider.on(
                        "accountsChanged",
                        async (accounts: string[]) => {
                            if (accounts.length) {
                                address = accounts[0];

                                const chainIdWalletConnect = await this.web3.eth.getChainId();
                            }
                        }
                    );

                    break;

                case WalletTypes.binance:
                    accounts = await this.web3.currentProvider.request({
                        method: "eth_requestAccounts",
                    });

                    const binancechainId = await this.web3.currentProvider.request({
                        method: "eth_chainId",
                    });
                    if (accounts.length) {
                        address = accounts[0];
                    } else {
                        throw new Error("No account found");
                    }

                    this.web3.currentProvider.on(
                        "accountsChanged",
                        async (accounts: Array<string>) => {

                            const chainId = await this.web3.currentProvider.request({
                                method: "eth_chainId",
                            });

                            if (accounts.length) {
                                address = accounts[0];
                            }
                        }
                    );

                    this.web3.currentProvider.on("chainChanged", () => {
                        window.location.reload();
                    });
                    break;
                default:
                    throw new Error("Invalid wallet type");
            }
            return address;
        };

        disconnect = async () => {
            switch (this.walletType) {
                case WalletTypes.metamask:
                    await this.web3.currentProvider._handleDisconnect();
                    localStorage.clear();
                    window.location.reload();
                    break;

                case WalletTypes.walletConnect:
                    localStorage.clear();
                    window.location.reload();
                    break;

                case WalletTypes.binance:
                    localStorage.clear();
                    window.location.reload();
                    break;

                default:
                    localStorage.clear();
                    window.location.reload();
            }
        };

        setMobileProvider = async (provider: any) => {
            this.web3.setProvider(provider);
        }
    }

    export default new Wallet();
