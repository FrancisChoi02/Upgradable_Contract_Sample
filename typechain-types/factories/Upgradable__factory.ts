/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Upgradable, UpgradableInterface } from "../Upgradable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "words",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106a23803806106a28339818101604052810190610032919061011c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610149565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b61054a806101586000396000f3fe6080604052600436106100435760003560e01c80630900f010146100d15780635c60da1b146100fa578063f2c31bd914610125578063f851a4401461015057610044565b5b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003660405161008f92919061032f565b600060405180830381855af49150503d80600081146100ca576040519150601f19603f3d011682016040523d82523d6000602084013e6100cf565b606091505b005b3480156100dd57600080fd5b506100f860048036038101906100f391906103ab565b61017b565b005b34801561010657600080fd5b5061010f610218565b60405161011c91906103e7565b60405180910390f35b34801561013157600080fd5b5061013a61023c565b6040516101479190610492565b60405180910390f35b34801561015c57600080fd5b506101656102ca565b60405161017291906103e7565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101d557600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028054610249906104e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610275906104e3565b80156102c25780601f10610297576101008083540402835291602001916102c2565b820191906000526020600020905b8154815290600101906020018083116102a557829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081905092915050565b82818337600083830152505050565b600061031683856102f0565b93506103238385846102fb565b82840190509392505050565b600061033c82848661030a565b91508190509392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103788261034d565b9050919050565b6103888161036d565b811461039357600080fd5b50565b6000813590506103a58161037f565b92915050565b6000602082840312156103c1576103c0610348565b5b60006103cf84828501610396565b91505092915050565b6103e18161036d565b82525050565b60006020820190506103fc60008301846103d8565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561043c578082015181840152602081019050610421565b60008484015250505050565b6000601f19601f8301169050919050565b600061046482610402565b61046e818561040d565b935061047e81856020860161041e565b61048781610448565b840191505092915050565b600060208201905081810360008301526104ac8184610459565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104fb57607f821691505b60208210810361050e5761050d6104b4565b5b5091905056fea2646970667358221220e475e87fda8c94eaf312120ba834aba157643c37faec2829136c59314f56e14164736f6c63430008120033";

type UpgradableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Upgradable__factory extends ContractFactory {
  constructor(...args: UpgradableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Upgradable> {
    return super.deploy(
      _implementation,
      overrides || {}
    ) as Promise<Upgradable>;
  }
  override getDeployTransaction(
    _implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_implementation, overrides || {});
  }
  override attach(address: string): Upgradable {
    return super.attach(address) as Upgradable;
  }
  override connect(signer: Signer): Upgradable__factory {
    return super.connect(signer) as Upgradable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradableInterface {
    return new utils.Interface(_abi) as UpgradableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Upgradable {
    return new Contract(address, _abi, signerOrProvider) as Upgradable;
  }
}
