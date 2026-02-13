<div align="center">

# EthosiFi – On-chain Reputation for Ethical Crypto

Genesis TrustScore: verifiable builder reputation without KYC  
Protecting users • Rewarding integrity • Built for DeFi & Web3

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/EthosiFi?style=social)](https://twitter.com/EthosiFi)

</div>

## What is EthosiFi?

EthosiFi is an **on-chain reputation protocol** that awards **Genesis TrustScores** (soulbound NFTs) to builders who demonstrate verifiable ethical behavior — no PDFs, no KYC, only on-chain proof + optional ZK privacy.

The system aims to become a **trust & safety layer** for DeFi, DAOs, launchpads, grants, and community treasuries.

## Genesis TrustScore Standard (v0.1)

Full specification → [GENESIS_STANDARD.md](./GENESIS_STANDARD.md)

**Current score tiers (planned):**

- 0–199     Unverified (⚠️ High risk)  
- 200–349   Emerging Builder  
- 350–499   Verified Builder  
- 500+      Exemplar

## Current Status

🟡 **Early design & specification stage** (February 2026)

- Protocol standard published  
- Static landing page live  
- Smart contracts, ZK verifier, Ethoscan scoring engine → coming soon

## Planned Tech Stack

- Chain: Base (low-cost optimistic rollup)  
- Smart contracts: Solidity  
- ZK proofs: circom / noir (TBD)  
- Frontend: Next.js / React / wagmi  
- Indexing: The Graph or custom event indexing  
- Off-chain components: minimal, privacy-first

## How to Contribute

1. Read [GENESIS_STANDARD.md](./GENESIS_STANDARD.md)  
2. Open an issue or discussion with your idea  
3. Submit small, focused pull requests

We especially welcome help with:
- Smart contract design & security patterns
- ZK circuit ideas
- Documentation & diagrams
- Test ideas & edge cases

## 2026 Roadmap – Early Targets

**Q1**  
- Solidity contracts: TrustScoreNFT (soulbound), verification registry  
- Basic Ethoscan scoring logic (on-chain behavior signals)  
- Improved documentation & formal spec

**Q2**  
- ZK proof integration (privacy-preserving checks)  
- Public testnet deployment  
- Builder beta application flow

# $ETHOS Tokenomics

**Total Supply**: 100,000,000 $ETHOS (fixed – no inflation)

**Purpose**  
$ETHOS powers the EthosiFi protocol. Every verification burns tokens permanently, creating scarcity as adoption and trust grow. The token aligns incentives between builders, users, and the ecosystem.

**Allocation Breakdown**

| Allocation                | Percentage | Amount         | Unlock / Vesting Details                                      | Purpose |
|---------------------------|------------|----------------|---------------------------------------------------------------|---------|
| Verification Rewards Pool | 40%        | 40,000,000     | Non-transferable credits distributed to early adopters<br>100 $ETHOS burned per verification redemption | Direct deflation tied to real usage |
| Protocol Treasury         | 20%        | 20,000,000     | Controlled by Gnosis Safe multi-sig<br>Milestone & DAO governed (post-mainnet) | Development, audits, security, grants, X1 partnerships |
| Core Team                 | 20%        | 20,000,000     | 10% (10,000,000) unlocked at TGE<br>10% (10,000,000) vested linearly over 36 months with 6-month cliff | Immediate runway + long-term alignment |
| Ecosystem Growth          | 10%        | 10,000,000     | Released via grants, incentives, builder rewards, partnerships | Accelerates adoption & network effects |
| Early Contributor Round   | 5%         | 5,000,000      | Fully unlocked at TGE<br>Sold at fixed price to early supporters (capped round) | Rewards early belief, replaces part of public allocation |
| Public Launch             | 5%         | 5,000,000      | Fully unlocked at TGE<br>Transparent distribution (no pre-sales, no insider advantage) | Open access for community at launch |

**Core Economic Mechanism**  
- Builders pay 100 $ETHOS to verify → 100% of fee is **permanently burned**  
- 10,000 verifications = 1,000,000 $ETHOS destroyed (1% of total supply)  
- 400,000 verifications = full 40% pool burned (40% supply reduction)  
- Scarcity scales directly with real protocol usage and ecosystem trust

**Vesting Details**  
- No vesting on public launch, early contributor round, or verification pool  
- Treasury unlocks are milestone-based and multi-sig controlled  
- Team vesting uses standard linear vesting contract with 6-month cliff followed by monthly unlocks over 36 months

**Why this structure is aligned & sustainable**  
- 40% of supply is deflationary by design  
- Team has meaningful skin in the game but long-term lockup  
- No pre-mined VC/insider dumps  
- Ecosystem & public portions ensure broad distribution  
- Burn flywheel creates value accrual as trust grows

EthosiFi is built to make ethical behavior profitable and scams the expensive outlier.
## Contact & Follow

- Twitter: [@EthosiFi](https://twitter.com/EthosiFi)  
- ENS: ethosifi.eth (if claimed)  
- Discussion: GitHub Issues / Discussions

Building the immune system for Web3 — one verifiable signal at a time.

</div>
