### 使用

1. 安装最新的 node 和 yarn
2. clone 本项目并进入本项目
3. 执行 `yarn install`
4. 相关操作

- 转账：`yarn transfer` 


### 任务描述

1）查询节点当前是否可以payout收益，及对应的数量和周期；（波卡节点的收益，可以由任意一个地址去payout来激活节点收益分发的动作

https://polkadot.js.org/docs/substrate/events#staking

https://polkadot.js.org/docs/api/start/api.query.other

2）执行payout节点收益的动作；

https://polkadot.js.org/docs/substrate/events#staking

https://polkadot.js.org/docs/api/cookbook/tx
const utx = api.tx.claims.claim(beneficiary, ethSignature);


3）查询当前账号的历史转账记录，及其中的数据；

http://blog.boka.network/2020/03/30/polkadotjs-kai-fa-jiao-cheng-cha-xun-jiao-yi-ji-l/

4）转账（已完成）

https://polkadot.js.org/docs/substrate/events#transferaccountid-accountid-balance


### 备注信息

1. 测试网：wss://westend-rpc.polkadot.io
2. 主网：wss://rpc.polkadot.io/