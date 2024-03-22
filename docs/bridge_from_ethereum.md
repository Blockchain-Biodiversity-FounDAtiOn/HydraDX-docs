---
id: bridge_from_ethereum
title: Bridge Assets from Ethereum
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bridging assets from the Ethereum ecosystem is easy using the [Wormhole](https://wormhole.com/) bridge which is implemented by the [Moonbeam network](https://moonbeam.network/).

When bridging an asset, Wormhole will lock it on the source network and mint an equivalent amount of Wormhole-wrapped assets on the Moonbeam network. The assets are then transferred to the HydraDX chain where they can be used for trading. In a few clicks and seamlessly.

To bridge assets from Ethereum to HydraDX, follow the steps below.

### Prerequisites

- A Polkadot wallet
- An Ethereum wallet
- ETH for transaction fees

### Step-by-step
1. Navigate to the [Carrier UI](https://www.carrier.so/)
2. As Destination, select `HydraDX`
3. Connect your Ethereum wallet
4. Connect your HydraDX wallet*
5. Select the asset you wish to bridge and the amount
6. Click on `Settings` and turn on `Auto Relay`
7. Confirm and sign the transaction

*If you have any issues with the transaction stopping at Step 4 of 5 on carrier you may need to manualy redeem the bridged assets via Moonbeam (with a small fee using the 'GLMR' token). 
Check the carrier.so url for the trasaction it will look like: https://www.carrier.so/progress/2/[Transaction Hash]?isUsingRelayer=true and change the end of the webpage url to https://www.carrier.so/progress/2/[Transaction Hash]?enableManualRedemption=true – you can then connect the source wallet you used (e.g. MetaMask) to pay the GLMR fee to redeem it and it will then automatically show up on the hdx destination wallet.*

Once finalized, the assets will appear in your HydraDX wallet.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/mb3.jpg')} width="600px" />
</div>
