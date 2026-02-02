# EthosiFi Genesis TrustScore Standard  
**Version 0.1**  
*Published: January 13, 2026*  
*Latest update: February 2026*  
*ENS: ethosifi.eth*  
*Repository: https://github.com/Founder-Trustforge/EthosiFi*

## Abstract

This document defines the **Genesis TrustScore** — a non-transferable, on-chain reputation signal designed to distinguish legitimate builders from malicious actors in DeFi, token launches, and Web3 projects.

The score is calculated purely from **verifiable on-chain and cryptographically signed behavior**, with **no reliance on off-chain documents** (KYC, PDFs, diplomas, company registrations, etc.).

Genesis TrustScore aims to become a foundational trust primitive for launchpads, DAOs, grant programs, DEXes, and community treasuries.

## Motivation

The crypto ecosystem suffers from repeated patterns of:

- Anonymous teams rug-pulling liquidity
- Misleading marketing with fake credentials
- Governance capture by insiders
- Short-term liquidity farming followed by abandonment

Existing reputation systems often depend on centralized or easily faked signals (social media followers, doxxing, off-chain attestations).  

**EthosiFi takes a different approach:**

- Only trust what can be proven on-chain or via cryptographic signatures
- Reward long-term alignment and transparency
- Minimize sybil attack surface
- Keep privacy where possible (future ZK integration planned)

## Genesis TrustScore Overview

- **Type**: Soulbound (non-transferable) NFT or on-chain record
- **Max score**: 500 points (v0.1)
- **Update mechanism**: Permissionless calculation + optional governance-approved adjustments
- **Decay**: Planned soft time-decay for inactive projects (future versions)

### Current Score Tiers (v0.1)

| Range       | Tier Name           | Badge / Visual          | Meaning                              |
|-------------|---------------------|-------------------------|--------------------------------------|
| 0–199       | Unverified          | ⚠️ High Risk            | No meaningful trust signals          |
| 200–349     | Emerging Builder    | Rising                  | Some positive behavior observed      |
| 350–499     | Verified Builder    | ✅ Verified             | Strong alignment with community norms|
| 500+        | Exemplar            | ★ Exemplar              | Exceptional long-term integrity      |

## Scoring Categories (v0.1)

| # | Category                  | Max Points | Weight | Verification Method (v0.1)                                                                 | Notes / Future Improvement                     |
|---|---------------------------|------------|--------|---------------------------------------------------------------------------------------------|------------------------------------------------|
| 1 | Team Identity             | 40         | 8%     | ≥2 core contributors sign SIWE message with ENS or POAP ownership                          | ZK proof of distinct wallets planned           |
| 2 | Code Transparency         | 50         | 10%    | Public GitHub repo ≥3 months old, linked via ENS TXT record or IPFS pointer                | Commit history analysis (future)               |
| 3 | Governance Participation  | 60         | 12%    | ≥6 Snapshot votes/proposals in last 90 days (verified via on-chain vote delegation)       | Multi-chain governance support                 |
| 4 | Treasury Safety           | 70         | 14%    | Gnosis Safe (or equivalent) with ≥3 non-anonymous signers (ENS-linked)                     | Multisig transaction history review            |
| 5 | Liquidity Commitment      | 100        | 20%    | ≥180 days LP lock in non-renounceable timelock contract                                    | Higher weight = highest rug risk               |
| 6 | Community Engagement      | 30         | 6%     | ≥3 public AMAs / updates recorded on IPFS or Livepeer, signed by core wallet               | Video hash verification (future)               |
| 7 | Fair Launch Pledge        | 50         | 10%    | Cryptographically signed message: no private sale, max wallet %, fair token distribution  | On-chain enforcement in later versions         |
|   | **Total**                 | **500**    | **100%**|                                                                                             |                                                |

## Specification

### 1. On-chain Components (planned)

- `GenesisTrustScoreNFT` — ERC-721-like soulbound token (transfer disabled)
- `TrustScoreRegistry` — contract storing score per project wallet / ENS
- Events:
  ```solidity
  event TrustScoreUpdated(
      address indexed project,
      uint256 newScore,
      uint256 timestamp,
      bytes32 scoreHash
  );
2. Score Calculation (v0.1 – off-chain / semi-permissionless)
Project submits core wallet address + supporting evidence (ENS, IPFS hashes, etc.)
Verifier (initially manual / community, later Ethoscan engine) checks each category
Score is calculated → signed by verifier key → stored on-chain or via oracle
Future: fully on-chain calculation for categories 3–7 via event indexing + ZK proofs for privacy-sensitive items.
3. Fair Launch Pledge Message Format (example)
I, {project ENS or 0x...}, solemnly declare for {token contract address}:

- No private sales or pre-mined tokens to insiders
- Maximum wallet size ≤ 1% at launch
- Liquidity added publicly via fair mechanism
- No renounce ownership trickery

Signed: {SIWE message}
Rationale
Why 500 max? Keeps numbers simple and human-readable
Why high weight on LP lock? Liquidity rugs are the #1 cause of user loss
Why no KYC/PDFs? They are easily faked, centralized, and privacy-invasive
Why soulbound? Prevents trading of reputation (core security property)
Security Considerations
Sybil resistance: multiple wallets can be linked but score is not additive per entity
Collusion risk: mitigated by on-chain verifiability and community challenge period
Oracle/verifier compromise: future versions will use decentralized computation or ZK
Front-running score updates: planned commit-reveal scheme
Inactive projects: planned score decay after 12–18 months of no activity
Backwards Compatibility
v0.1 is the genesis version — no prior compatibility required.
Future versions (v1.0+) will introduce:
ZK proofs for privacy
Multi-chain support
Decay function
Challenge / dispute mechanism
Reference Implementation
Status: Planned (Q1–Q2 2026)
Planned repositories:
ethosifi-contracts — Solidity implementation
ethoscan-verifier — scoring logic
genesis-frontend — submission & viewing dApp
Copyright
© 2026 EthosiFi Protocol
Licensed under MIT (see LICENSE in repository)
Comments, suggestions, and pull requests are welcome via GitHub Issues or Discussions.
Building the immune system for Web3 — one verifiable signal at a time.
