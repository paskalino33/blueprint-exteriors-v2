export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY environment variable.' });
  }

  const { name, phone, email, address, service, message } = req.body || {};

  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Name, phone, and service are required.' });
  }

  const safe = (value) => String(value || '').replace(/[<>]/g, '');

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2>New Blueprint Exteriors Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:700px">
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${safe(name)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${safe(phone)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${safe(email)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Address</strong></td><td style="padding:8px;border:1px solid #ddd">${safe(address)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Service</strong></td><td style="padding:8px;border:1px solid #ddd">${safe(service)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Project Details</strong></td><td style="padding:8px;border:1px solid #ddd">${safe(message).replace(/\n/g, '<br>')}</td></tr>
      </table>
      <p style="margin-top:18px">Submitted from blueprintexteriorsnj.com.</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'Blueprint Exteriors <onboarding@resend.dev>',
        to: ['lino@londonlcs.com'],
        reply_to: email || undefined,
        subject: `New Quote Request - ${safe(service)}`,
        html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.message || 'Resend failed to send the email.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Server error sending quote request.' });
  }
}
