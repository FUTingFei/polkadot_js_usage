// 查询当前账号的历史转账记录及其中的数据
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');

async function main () {
    // 连接到测试网，并提供 provider
    const provider = new WsProvider('wss://rpc.polkadot.io/');
    // 获取 API
    const api = await ApiPromise.create({ provider });
    // 等待 api 链接完成
    await api.isReady;

    console.log(api.genesisHash.toHex());

    // // 导入账户
    // const keyring = new Keyring({ type: 'sr25519' });
    // const PHRASE = 'bulb cement day limb trim start dance law slush notable canyon raise';
    // const Alice = keyring.addFromUri(PHRASE);
    // console.log(`Alice has address ${Alice.address} with publicKey [${Alice.publicKey}]`);
    
    // // 查询账户转账记录

    // const unsub = await api.query.system.events((event) => {
    //     console.log(`Event: ${JSON.stringify(event)}`);
    // });
}

main().catch(console.error).finally(() => process.exit());