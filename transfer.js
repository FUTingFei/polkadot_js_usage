// 转账
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');

const Bob = '5HBydZ1bXZbAJfC83n83ZvdoGMrrSfaVrgDcMBEimLrw1sQy';

async function main () {
    // 连接到测试网，并提供 provider
    const provider = new WsProvider('wss://westend-rpc.polkadot.io');
    // 获取 API
    const api = await ApiPromise.create({ provider });
    // 等待 api 链接完成
    await api.isReady;

    // 导入账户
    const keyring = new Keyring({ type: 'sr25519' });
    const PHRASE = 'bulb cement day limb trim start dance law slush notable canyon raise';
    const Alice = keyring.addFromUri(PHRASE);
    console.log(`Alice has address ${Alice.address} with publicKey [${Alice.publicKey}]`);
    
    // 签名、转账并发送交易
    const transfer = api.tx.balances.transfer(Bob, 100000000);
    const hash = await transfer.signAndSend(Alice);
    console.log('Transfer sent with hash', hash.toHex());

}

main().catch(console.error).finally(() => process.exit());