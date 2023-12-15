import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  //The sidebar for developer guides
  "/build": [
    // {
    //   text: "Introduction",
    //   link: "/build/",
    // },
    // {
    //   text: "Getting started",
    //   link: "/dev/building-on-zksync/hello-world.md",
    //   children: [
    //     "/dev/building-on-zksync/hello-world.md",
    //     "/dev/building-on-zksync/interacting.md",
    //     "/dev/building-on-zksync/best-practices.md",
    //     "/dev/building-on-zksync/useful-address.md",
    //   ],
    // },
    {
      text: "Quick Start",
      link: "/build/quick-start/README.md",
      collapsible: true,
      children: [
        { 
          text: "Bridge funds", 
          link: "/build/quick-start/bridge-funds.md", 
          collapsible: false,
          children: [
            "/build/quick-start/add-zksync-to-metamask.md",
            "/build/quick-start/testnet-faucets.md",
            "/build/quick-start/portals.md"
          ] 
        },
        { 
          text: "Deploy contract", 
          link: "/build/quick-start/deploy-contract.md", 
          children: [
            "/build/quick-start/zksync-cli.md",
            "/build/quick-start/hardhat-foundry.md", 
            {
              text: "Remix",
              link: "/build/quick-start/remix.md",
            }
          ] },
        { 
          text: "Differences between Era and Ethereum", link: "/build/quick-start/differences-era-ethereum.md",
          children: []
        },
      ]
    },
    {
      text: "Development",
      link: "/build/development/README.md",
      collapsible: true,
      children: [
        "/build/development/zksync-cli.md",
        {
          text: "Foundry",
          link: "/build/development/foundry/README.md",
          collapsible: true,
          children: [
            "/build/development/foundry/get-started.md",
          ]
        },
        {
          text: "Hardhat Plugins",
          link: "/build/development/hardhat-plugins/README.md",
          collapsible: true,
          children: [
            "/build/development/hardhat-plugins/hardhat-zksync-solc.md",
            "/build/development/hardhat-plugins/hardhat-zksync-vyper.md",
            "/build/development/hardhat-plugins/hardhat-zksync-deploy.md",
            "/build/development/hardhat-plugins/hardhat-zksync-upgradable.md",
            "/build/development/hardhat-plugins/hardhat-zksync-chai-matchers.md",
            "/build/development/hardhat-plugins/hardhat-zksync-verify.md",
            "/build/development/hardhat-plugins/hardhat-zksync-verify-vyper.md"
          ]
        },
        "/build/development/IDEs.md",
        {
          text: "Frontend",
          collapsible: true,
          link: "/build/development/frontend/README.md",
          children: [
            {
              text: "Frameworks",
              link: "/build/development/frontend/frameworks/README.md",
          
              children: [
                "/build/development/frontend/frameworks/wagmi.md",
              ]
            },
            {
              text: "Libraries",
              link: "/build/development/frontend/libraries/README.md",
              children: [
                "/build/development/frontend/libraries/viem.md",
              ]
            },
            {
              text: "Wallets",
              link: "/build/development/frontend/wallets/README.md",
            
              children: [
                "/build/development/frontend/wallets/wallet-connect.md",
              ]
            },
          ]
        },
        {
          text: "SDKs",
          link: "/build/development/sdks/README.md",
          collapsible: true,
          children: [
            {
              text: "Javascript",
              collapsible: true,
              link: "/build/development/sdks/javascript/README.md",
              children: [
                { 
                  text: "Ethers V5",
                  link: "/build/development/sdks/javascript/ethers-v5.md"
                },
                { 
                  text: "Ethers V6",
                  link: "/build/development/sdks/javascript/ethers-v6.md"
                },
                {
                  text: "API Reference",
                  collapsible: true,
                  link: "/build/development/sdks/javascript/api-reference/README.md",
                  children: [
                    {
                      text: "Provider",
                      link: "/build/development/sdks/javascript/api-reference/provider/README.md",
                      children: [
                        {
                          text: "Account",
                          link: "/build/development/sdks/javascript/api-reference/provider/account.md"
                        },
                        {
                          text: "Block and Transaction",
                          link: "/build/development/sdks/javascript/api-reference/provider/block-and-transaction.md"
                        },
                        {
                          text: "Estimate Gas",
                          link: "/build/development/sdks/javascript/api-reference/provider/estimate-gas.md"
                        },
                        {
                          text: "Event and Log",
                          link: "/build/development/sdks/javascript/api-reference/provider/event-and-log.md"
                        },
                        {
                          text: "Network and Chain",
                          link: "/build/development/sdks/javascript/api-reference/provider/network-and-chain.md"
                        },
                        {
                          text: "Token and Contract",
                          link: "/build/development/sdks/javascript/api-reference/provider/token-and-contract.md"
                        }
                      ]
                    }
                  ]
                },
                // {
                //   text: "Core Concepts",
                //   link: "/build/development/sdks/javascript/core-concepts.md"
                // }
              ]
            },
            {
              text: "Python",
              collapsible: true,
              link: "/build/development/sdks/python/README.md",
              children: [
                {
                  text: "Accounts: L1->L2 transactions",
                  link: "/build/development/sdks/python/accounts-l1-l2.md"
                },
                {
                  text: "Accounts",
                  link: "/build/development/sdks/python/accounts.md"
                },
                {
                  text: "API Reference",
                  link: "/build/development/sdks/python/api-reference.md"
                },
                {
                  text: "Contracts",
                  link: "/build/development/sdks/python/contracts.md"
                },
                {
                  text: "Core Concepts",
                  link: "/build/development/sdks/python/core-concepts.md"
                },
                {
                  text: "Getting Started",
                  link: "/build/development/sdks/python/getting-started.md"
                },
                {
                  text: "Paymaster utilities",
                  link: "/build/development/sdks/python/paymaster-utils.md"
                },
                {
                  text: "Providers",
                  link: "/build/development/sdks/python/providers.md"
                },
                {
                  text: "Python SDK Types",
                  link: "/build/development/sdks/python/types.md"
                },

              ]
            },
            {
              text: "Rust",
              collapsible: true,
              link: "/build/development/sdks/rust/README.md",
              children: [
                {
                  text: "Getting Started",
                  link: "/build/development/sdks/rust/getting-started.md",
                },
                {
                  text: "Rust SDK Contract Deployment and Interaction",
                  link: "/build/development/sdks/rust/contract-deployment-and-interaction.md",
                },
              ]
            },
            {
              text: "Go",
              collapsible: true,
              link: "/build/development/sdks/go/README.md",
              children: [
                {
                  text: "Examples",
                  children: [
                    {
                      text: "Custom Paymaster",
                      children: [
                        {
                          text: "Deploy Account",
                          link: "/build/development/sdks/go/examples/custom-paymaster/deploy-account.md"
                        },
                        {
                          text: "Deploy Token",
                          link: "/build/development/sdks/go/examples/custom-paymaster/deploy-token.md"
                        },
                        {
                          text: "Use Paymaster",
                          link: "/build/development/sdks/go/examples/custom-paymaster/use-paymaster.md"
                        },
                      ]
                    },
                    {
                      text: "Go SDK Create Example",
                      link: "/build/development/sdks/go/examples/create.md"
                    },
                    {
                      text: "Deploy contract with CREATE2 opcode",
                      link: "/build/development/sdks/go/examples/create2.md"
                    },
                    {
                      text: "Deposit",
                      link: "/build/development/sdks/go/examples/deposit.md"
                    },
                    {
                      text: "Get all confirmed tokens on zkSync Era",
                      link: "/build/development/sdks/go/examples/get-confirmed-tokens.md"
                    },
                    {
                      text: "Transfer",
                      link: "/build/development/sdks/go/examples/transfer.md"
                    },
                    {
                      text: "Withdraw",
                      link: "/build/development/sdks/go/examples/withdraw.md"
                    },
                  ]
                },
              ]
            },
            {
              text: "Java",
              collapsible: true,
              link: "/build/development/sdks/java/README.md",
              children: [
                {
                  text: "Getting Started",
                  link: "/build/development/sdks/java/getting-started.md"
                },
                {
                  text: "Java SDK L1/L2 Transactions",
                  link: "/build/development/sdks/java/accounts-l1-l2.md"
                },
                {
                  text: "Accounts",
                  link: "/build/development/sdks/java/accounts.md"
                },
                {
                  text: "Providers",
                  link: "/build/development/sdks/java/providers.md"
                }
              ]
            }
          ]
        },
        {
          text: "Contribution Track",
          link: "/build/development/contribution-track.md",
        },
      ],
    },
    // {
    //   text: "How to",
    //   link: "/dev/how-to/README.md",
    //   children: [
    //     "/dev/how-to/estimate-gas.md",
    //     "/dev/how-to/send-transaction-l1-l2",
    //     "/dev/how-to/send-message-l2-l1",
    //     "/dev/how-to/transfer-token-l2",
    //     "/dev/how-to/verify-contracts",
    //   ],
    // },
    // {
    //   text: "Tutorials",
    //   link: "/dev/tutorials.md",
    //   children: [
    //     { text: "Community", link: "/dev/community-tutorials/README.md", children: [] },
    //     { text: "zkSync Team", link: "/dev/tutorials/README.md", children: [
    //       "/dev/tutorials/cross-chain-tutorial.md",
    //       "/dev/tutorials/custom-aa-tutorial.md",
    //       "/dev/tutorials/aa-daily-spend-limit.md",
    //       "/dev/tutorials/custom-paymaster-tutorial.md",
    //       "/dev/tutorials/api3-usd-paymaster-tutorial.md",
    //       "/dev/tutorials/gated-nft-paymaster-tutorial.md",
    //     ]},
    //   ],
    // },
  ],
  "/reference": [
    {
      text: "Technical reference",
      link: "/reference/",
    },
    {
      text: "Concepts",
      link: "/reference/concepts/rollups.md",
      children: [
        "/reference/concepts/rollups.md",
        "/reference/concepts/zkSync.md",
        "/reference/concepts/hyperscaling.md",
        "/reference/concepts/validiums.md",
        "/reference/concepts/account-abstraction.md",
        "/reference/concepts/transactions.md",
        "/reference/concepts/blocks.md",
        "/reference/concepts/fee-model.md",
        "/reference/concepts/finality.md",
        "/reference/concepts/bridging-asset.md",
        "/reference/concepts/l1-l2-interop.md",
      ],
    },
    {
      text: "Architecture",
      link: "/reference/architecture/differences-with-ethereum.md",
      children: [
        "/reference/architecture/differences-with-ethereum.md",
        "/reference/architecture/system-contracts.md",
        "/reference/architecture/contract-development.md",
        "/reference/architecture/contract-deployment.md",
        "/reference/architecture/events.md",
      ],
    },
    {
      text: "Troubleshooting",
      link: "/reference/troubleshooting/README.md",
      children: [
        "/reference/troubleshooting/changelog.md",
        "/reference/troubleshooting/withdrawal-delay.md",
        "/reference/troubleshooting/audit-bug-bounty.md",
        "/reference/troubleshooting/docs-contribution/docs.md",
        "/reference/troubleshooting/faq.md",
      ],
    },
  ],
  //The sidebar for Tools and SDKs
  "/api": [
    {
      text: "Web3 JSON-RPC API", // required
      link: "/api/api.md", // optional, which should be a absolute path.
    },
    {
      text: "JavaScript SDK", // required
      link: "/api/js", // optional, which should be a absolute path.
      children: [
        {
          text: "JavaScript Ethers V5 SDK",
          link: "/api/js",
          children: [
            "/api/js/getting-started",
            "/api/js/providers",
            "/api/js/accounts",
            "/api/js/accounts-l1-l2",
            "/api/js/contracts",
            "/api/js/features",
            "/api/js/utils",
            "/api/js/paymaster-utils",
            "/api/js/types",
            "/api/js/front-end",
          ],
        },
        {
          text: "JavaScript Ethers V6 SDK",
          link: "/api/js/zksync2-js",
          children: [
            {
              text: "Getting started",
              link: "/api/js/zksync2-js/getting-started",
              collapsible: true,
              children: [
                "/api/js/zksync2-js/examples/deposit",
                "/api/js/zksync2-js/examples/transfer",
                "/api/js/zksync2-js/examples/withdraw",
                "/api/js/zksync2-js/examples/get-confirmed-tokens",
                "/api/js/zksync2-js/examples/create",
                "/api/js/zksync2-js/examples/create2",
                "/api/js/zksync2-js/examples/custom-paymaster/deploy-token",
                "/api/js/zksync2-js/examples/custom-paymaster/deploy-account",
                "/api/js/zksync2-js/examples/custom-paymaster/use-paymaster",
              ],
            },
            "/api/js/zksync2-js/providers",
            "/api/js/zksync2-js/accounts",
            "/api/js/zksync2-js/accounts-l1-l2",
            "/api/js/zksync2-js/contracts",
            "/api/js/zksync2-js/features",
            "/api/js/zksync2-js/utils",
            "/api/js/zksync2-js/paymaster-utils",
            "/api/js/zksync2-js/types",
            "/api/js/zksync2-js/front-end",
            "/api/js/zksync2-js/migration"
          ],
        }
      ]
    },
    {
      text: "Python SDK",
      link: "/api/python",
      children: ["/api/python/getting-started", "/api/python/providers", "/api/python/accounts", "/api/python/accounts-l1-l2", "/api/python/contracts", "/api/python/types"],
    },
    {
      text: "Go SDK",
      link: "/api/go",
      children: [
        {
          text: "Getting started",
          link: "/api/go/getting-started",
          collapsible: true,
          children: [
            "/api/go/examples/deposit",
            "/api/go/examples/transfer",
            "/api/go/examples/withdraw",
            "/api/go/examples/get-confirmed-tokens",
            "/api/go/examples/create",
            "/api/go/examples/create2",
            "/api/go/examples/custom-paymaster/deploy-token",
            "/api/go/examples/custom-paymaster/deploy-account",
            "/api/go/examples/custom-paymaster/use-paymaster",
          ],
        },

        "/api/go/clients",
        "/api/go/accounts",
        "/api/go/accounts-l1-l2",
        "/api/go/contracts",
        "/api/go/features",
        "/api/go/paymaster-utils",
        "/api/go/utils",
        {
          text: "Types",
          link: "/api/go/types/intro",
          collapsible: true,
          children: ["/api/go/types/types", "/api/go/types/eip712", "/api/go/types/clients", "/api/go/types/accounts"],
        },
      ],
    },
    {
      text: "Java SDK", // required
      link: "/api/java/getting-started", // optional, which should be a absolute path.
      children: ["/api/java", "/api/java/providers", "/api/java/accounts", "/api/java/accounts-l1-l2"],
    },
    {
      text: "Rust SDK", // required
      link: "/api/rust/getting-started", // optional, which should be a absolute path.
      children: [
        "/api/rust",
        "/api/rust/getting-started",
        "/api/rust/contract-deployment-and-interaction"
      ],
    },
  ],
  //The sidebar for Tools and SDKs
  "/tools": [
    {
      text: "Developer tools", // required
      link: "/tools/", // optional, which should be a absolute path.
      children: [],
    },
    {
      text: "zkSync Era CLI", // required
      link: "/tools/zksync-cli/", // optional, which should be a absolute path.
      children: [],
    },
    {
      text: "Hardhat", // required
      link: "/tools/hardhat", // optional, which should be a absolute path.
      children: [
        "/tools/hardhat/getting-started",
        "/tools/hardhat/migrating-to-zksync",
        {
          text: "Plugins", // required
          link: "/tools/hardhat/plugins", // optional, which should be a absolute path.
          collapsible: true,
          children: [
            "/tools/hardhat/hardhat-zksync-solc",
            "/tools/hardhat/hardhat-zksync-vyper",
            "/tools/hardhat/hardhat-zksync-upgradable",
            "/tools/hardhat/hardhat-zksync-deploy",
            "/tools/hardhat/hardhat-zksync-chai-matchers",
            "/tools/hardhat/hardhat-zksync-verify",
            "/tools/hardhat/hardhat-zksync-verify-vyper",
            "/tools/hardhat/hardhat-zksync-node",
            "/tools/hardhat/hardhat-zksync-ethers",
            "/tools/hardhat/other-plugins",
          ],
        },
        "/tools/hardhat/compiling-libraries",
      ],
    },
    {
      text: "Testing", // required
      link: "/tools/testing/", // optional, which should be a absolute path.
      children: ["/tools/testing/dockerized-testing.md", "/tools/testing/era-test-node.md"],
    },
    {
      text: "Compiler Toolchain",
      link: "/tools/compiler-toolchain",
      children: ["/tools/compiler-toolchain/overview.md", "/tools/compiler-toolchain/solidity.md", "/tools/compiler-toolchain/vyper.md", "/tools/compiler-toolchain/llvm.md"],
    },
    {
      text: "Block Explorer", // required
      link: "/tools/block-explorer", // optional, which should be a absolute path.
      children: ["/tools/block-explorer/block-explorer-menu", "/tools/block-explorer/contract-verification", "/tools/block-explorer/block-explorer-api"],
    },
  ],
});
