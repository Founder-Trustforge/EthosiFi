<div align="center">

# EthosiFi – On-chain Reputation for Ethical Crypto

Genesis TrustScore: verifiable builder reputation without KYC  
Protecting users • Rewarding integrity • Built for DeFi & Web3

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![X1 Testnet](https://img.shields.io/badge/network-X1%20Testnet-00c853)](https://maculatus-scan.x1eco.com)

</div>

## What is EthosiFi?

EthosiFi is an **on-chain reputation protocol** that verifies project integrity through behavioral proof — not marketing hype. We score wallets based on **actionable integrity signals** that protect builders and investors from scams.

**Core principle:** Trust through action, not words. No KYC. No fabricated scores. Only verifiable on-chain proof.

## Current Verification Capabilities (X1 Testnet)

| Pillar | Status | Verification Method | Points |
|--------|--------|---------------------|--------|
| **Treasury Transparency** | ✅ ACTIVE | Real Gnosis Safe detection via bytecode pattern matching + owner count verification | 250 |
| **Liquidity Commitment** | ⚠️ PENDING | Requires LP lock registry contract (not yet deployed on X1 testnet) | 150 |
| **Team Transparency** | ⚠️ PENDING | Requires team verification registry (not yet deployed on X1 testnet) | 50 |
| **Fair Launch Pledge** | ⚠️ PENDING | Requires pledge registry contract (not yet deployed on X1 testnet) | 50 |

> 🔒 **Zero Fabrication Policy**  
> We NEVER fabricate verification results. Pending pillars show transparent disclosure:  
> *"❌ LP Lock verification requires registry contract (not deployed)"*  
> This protects builder credibility — grant reviewers can verify every claim on-chain.

## Current Status

🟢 **Working Prototype on X1 Testnet** (February 2026)

- ✅ Real Gnosis Safe detection deployed and operational
- ✅ Transparent frontend with authentic matrix background
- ✅ Honest UI disclosure of verification limitations
- ⚠️ LP/Team/Pledge registries pending deployment (see Upgrade Path below)
- ⚠️ $ETHOS token not yet minted (see Tokenomics section)

## How Verification Works Today

### Treasury Transparency (250 pts) — REAL ON-CHAIN CHECK
1. **Bytecode pattern matching**: Scans contract bytecode for Gnosis Safe v1.3.0 signature
2. **Owner count verification**: Calls `getOwners()` to confirm ≥3 signers
3. **Scoring**:
   - ✅ 250 pts: Gnosis Safe with ≥3 owners
   - ⚠️ 200 pts: Gnosis Safe with <3 owners (partial credit)
   - ❌ 0 pts: EOA wallet or non-Gnosis contract

### Other Pillars — TRANSPARENT DISCLOSURE (NO FABRICATION)
- ❌ Shows clear message: *"registry contract not deployed"*
- ❌ Awards 0 points (no fabricated results)
- ✅ Documents upgrade path when registries are deployed

## Upgrade Path to Full 500/500 Verification

| Step | Action | Timeline |
|------|--------|----------|
| 1 | Deploy LP Lock Registry contract | Ready to deploy now |
| 2 | Deploy Team Verification Registry contract | Ready to deploy now |
| 3 | Deploy Fair Launch Pledge Registry contract | Ready to deploy now |
| 4 | Register builder wallets in all registries | Post-deployment |
| 5 | Update verifier.js with registry addresses | 5-minute update |

> 💡 **No redeployment needed** — registries are independent contracts. Updating verifier.js with new addresses activates full 500/500 scoring.

## $ETHOS Tokenomics (PLANNED — NOT YET DEPLOYED)

**Total Supply**: 100,000,000 $ETHOS (fixed – no inflation)

**Purpose**  
$ETHOS will power the EthosiFi protocol. Every verification will burn tokens permanently, creating scarcity as adoption grows.

**Allocation Breakdown**

| Allocation | Percentage | Amount | Status |
|------------|------------|--------|--------|
| Verification Rewards Pool | 40% | 40,000,000 | ⚠️ Not deployed — will issue non-transferable vouchers |
| Protocol Treasury | 20% | 20,000,000 | ⚠️ Not deployed — controlled by Gnosis Safe (planned) |
| Core Team | 20% | 20,000,000 | ⚠️ Not deployed — vesting schedule planned |
| Ecosystem Growth | 10% | 10,000,000 | ⚠️ Not deployed |
| Early Contributor Round | 5% | 5,000,000 | ⚠️ Not deployed |
| Public Launch | 5% | 5,000,000 | ⚠️ Not deployed |

> ⚠️ **Critical Disclosure**  
> $ETHOS token contract has **NOT YET BEEN DEPLOYED** to X1 testnet.  
> Token gating is **NOT ACTIVE** in current prototype.  
> All verification is currently **free and permissionless**.  
> Token deployment requires explicit authorization (see Security section below).

## Security & Credibility Commitments

### What We Will NEVER Do
- ❌ Fabricate LP lock data ("mockLpLock = { locked: true }")
- ❌ Hardcode "verified" team addresses without on-chain proof
- ❌ Claim fake pledge status ("hasPledge = true" without registry)
- ❌ Hide verification limitations behind marketing language
- ❌ Deploy token contract without explicit written authorization

### What We DO
- ✅ Show real Gnosis Safe verification via bytecode pattern matching
- ✅ Transparently disclose all limitations in UI and documentation
- ✅ Provide upgrade path when X1 deploys native primitives
- ✅ Protect builder credibility through radical honesty

## How to Use the Current Prototype

### Local Development
```bash
# Install local web server (one time)
npm install -g http-server

# Serve files
cd ~/ethosifi-x1
http-server -p 8080
