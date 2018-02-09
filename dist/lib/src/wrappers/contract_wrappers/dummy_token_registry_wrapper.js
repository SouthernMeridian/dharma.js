"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tiny_promisify_1 = require("tiny-promisify");
var class_utils_1 = require("utils/class_utils");
var fs = require("fs-extra");
var web3_wrapper_1 = require("@0xproject/web3-wrapper");
var base_contract_wrapper_1 = require("./base_contract_wrapper");
var DummyTokenRegistryContract = (function (_super) {
    __extends(DummyTokenRegistryContract, _super);
    function DummyTokenRegistryContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.setTokenAddress = {
            sendTransactionAsync: function (symbol, token, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setTokenAddress.estimateGasAsync.bind(self, symbol, token))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, tiny_promisify_1.default(self.web3ContractInstance.setTokenAddress, self.web3ContractInstance)(symbol, token, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (symbol, token, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, tiny_promisify_1.default(self.web3ContractInstance.setTokenAddress.estimateGas, self.web3ContractInstance)(symbol, token, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (symbol, token, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.setTokenAddress.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.symbolToTokenAddress = {
            callAsync: function (index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, tiny_promisify_1.default(self.web3ContractInstance.symbolToTokenAddress.call, self.web3ContractInstance)(index)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.getTokenAddress = {
            callAsync: function (symbol, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, tiny_promisify_1.default(self.web3ContractInstance.getTokenAddress.call, self.web3ContractInstance)(symbol)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        class_utils_1.classUtils.bindAll(_this, ["web3ContractInstance", "defaults"]);
        return _this;
    }
    DummyTokenRegistryContract.deployed = function (web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Wrapper, currentNetwork, _a, abi, networks, contractAddress, contractExists, web3ContractInstance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(web3.currentProvider);
                        return [4 /*yield*/, web3Wrapper.getNetworkIdAsync()];
                    case 1:
                        currentNetwork = _b.sent();
                        return [4 /*yield*/, this.getArtifactsData()];
                    case 2:
                        _a = _b.sent(), abi = _a.abi, networks = _a.networks;
                        if (!networks[currentNetwork]) return [3 /*break*/, 4];
                        contractAddress = networks[currentNetwork].address;
                        return [4 /*yield*/, web3Wrapper.doesContractExistAtAddressAsync(contractAddress)];
                    case 3:
                        contractExists = _b.sent();
                        if (contractExists) {
                            web3ContractInstance = web3.eth.contract(abi).at(contractAddress);
                            return [2 /*return*/, new DummyTokenRegistryContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("DummyTokenRegistry", currentNetwork));
                        }
                        return [3 /*break*/, 5];
                    case 4: throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("DummyTokenRegistry", currentNetwork));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DummyTokenRegistryContract.at = function (address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Wrapper, abi, contractExists, currentNetwork, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(web3.currentProvider);
                        return [4 /*yield*/, this.getArtifactsData()];
                    case 1:
                        abi = (_a.sent()).abi;
                        return [4 /*yield*/, web3Wrapper.doesContractExistAtAddressAsync(address)];
                    case 2:
                        contractExists = _a.sent();
                        return [4 /*yield*/, web3Wrapper.getNetworkIdAsync()];
                    case 3:
                        currentNetwork = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = web3.eth.contract(abi).at(address);
                            return [2 /*return*/, new DummyTokenRegistryContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK("DummyTokenRegistry", currentNetwork));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DummyTokenRegistryContract.getArtifactsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var artifact, _a, abi, networks, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.readFile("src/artifacts/DummyTokenRegistry.json", "utf8")];
                    case 1:
                        artifact = _b.sent();
                        _a = JSON.parse(artifact), abi = _a.abi, networks = _a.networks;
                        return [2 /*return*/, { abi: abi, networks: networks }];
                    case 2:
                        e_1 = _b.sent();
                        throw new Error(base_contract_wrapper_1.CONTRACT_WRAPPER_ERRORS.ARTIFACTS_NOT_READABLE("DummyTokenRegistry"));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DummyTokenRegistryContract;
}(base_contract_wrapper_1.BaseContract)); // tslint:disable:max-file-line-count
exports.DummyTokenRegistryContract = DummyTokenRegistryContract;
//# sourceMappingURL=dummy_token_registry_wrapper.js.map