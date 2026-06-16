/**
 * ============================================================
 *  📧 EMAIL CONFIGURATION — Web3Forms (Free Email API)
 * ============================================================
 *
 *  SETUP GUIDE (30 seconds, completely free):
 *
 *  1. Visit https://web3forms.com
 *  2. Enter YOUR admin email address (where you want to receive submissions)
 *  3. Click "Create Access Key"
 *  4. Open your inbox → click the verification link
 *  5. Copy the access key you received
 *  6. Paste it below as the `accessKey` value
 *
 *  ✅ Done! Every form submission will now send a real email
 *     to your inbox instantly — with all the details.
 *
 *  Free tier: 250 emails/month. No credit card. No backend needed.
 *  The access key is PUBLIC-safe (like a Firebase key).
 *
 * ============================================================
 */

export const EMAIL_CONFIG = {
  /**
   * 🔑 YOUR Web3Forms Access Key
   *
   * Get yours free → https://web3forms.com
   *
   * ⚠️  REPLACE the key below with your own to receive emails
   *     at YOUR inbox. The default key sends to a demo inbox.
   */
  accessKey: '3026885e-057e-4a3b-b53e-95b65021571c',

  /** API endpoint — do NOT change */
  endpoint: 'https://api.web3forms.com/submit',

  /** Sender name shown in the email notification */
  fromName: 'GVENT Engineering Website',

  /** Subject line prefix for all emails */
  subjectPrefix: '[GVENT Website]',

  /** Honeypot spam protection (recommended: true) */
  honeypot: true,
};
