const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    // Exchange the code for an access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/`
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      console.error('GitHub OAuth error:', tokenData);
      return res.status(400).json(tokenData);
    }

    // Return the token response in the format Decap CMS expects
    return res.json({
      token: tokenData.access_token,
      provider: 'github',
    });
  } catch (error) {
    console.error('OAuth error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
