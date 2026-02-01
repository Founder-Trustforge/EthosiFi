// api/verify.js
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query;
  
  // Validate address parameter
  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Invalid address parameter' });
  }

  // Normalize and validate Ethereum address format
  const normalized = address.toLowerCase().trim();
  if (!/^0x[a-f0-9]{40}$/.test(normalized)) {
    return res.status(400).json({ error: 'Invalid Ethereum address format (must be 42 chars, start with 0x)' });
  }

  try {
    // ✅ Use Basescan's PUBLIC eth_getCode endpoint — NO API KEY NEEDED
    const apiUrl = `https://api.basescan.org/api?module=proxy&action=eth_getCode&address=${normalized}`;
    
    const response = await fetch(apiUrl, {
      headers: { 'User-Agent': 'EthosiFi-Verifier/1.0 (+https://ethosifi.com)' },
      next: { revalidate: 300 } // Optional: cache for 5 minutes (ISR)
    });

    if (!response.ok) {
      // Handle 404 or network issues
      if (response.status === 404) {
        return res.status(404).json({ error: 'Address not found on Base Mainnet' });
      }
      throw new Error(`Basescan returned ${response.status}`);
    }

    const data = await response.json();

    // Basescan returns { jsonrpc: "2.0", result: "0x...", id: 1 } on success
    if (data.jsonrpc && data.result !== undefined) {
      return res.status(200).json({
        address: normalized,
        bytecode: data.result,
        timestamp: new Date().toISOString()
      });
    }

    // Fallback: likely an error
    return res.status(400).json({
      error: 'Address not found or invalid on Base Mainnet'
    });

  } catch (error) {
    console.error('Verification error:', error.message);
    return res.status(500).json({
      error: 'Verification service temporarily unavailable'
    });
  }
}
