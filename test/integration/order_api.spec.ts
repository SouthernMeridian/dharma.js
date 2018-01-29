import { BigNumber } from 'bignumber.js'
import { OrderAPI } from 'src/apis/order_api'
import moment from 'moment'
import * as Units from 'utils/units'
import Web3 from 'web3'

import { ACCOUNTS, NULL_ADDRESS } from '../accounts'

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)
const orderApi = new OrderAPI(web3)

// For the unit test's purposes, we use arbitrary
// addresses for all debt order fields that expect addresses.
let debtOrder = {
    kernelVersion: ACCOUNTS[0].address,
    issuanceVersion: ACCOUNTS[1].address,
    principalAmount: Units.ether(1),
    principalToken: ACCOUNTS[2].address,
    debtor: ACCOUNTS[3].address,
    debtorFee: Units.ether(0.001),
    creditor: ACCOUNTS[4].address,
    creditorFee: Units.ether(0.001),
    relayer: ACCOUNTS[5].address,
    relayerFee: Units.ether(0.001),
    underwriter: ACCOUNTS[6].address,
    underwriterFee: Units.ether(0.001),
    underwriterRiskRating: Units.percent(0.001),
    termsContract: ACCOUNTS[7].address,
    termsContractParameters: ACCOUNTS[8].address,
    expirationTimestampInSec: new BigNumber(moment().seconds()),
    salt: new BigNumber(0)
}

describe('Order API (Integration Tests)', () => {
    test('base case', async () => {
        const test = await orderApi.fillDebtOrder(debtOrder)
    })
})
