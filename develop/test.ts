import { GmailAuth } from './api/gmail/GmailAuth'
import { listLabels, createLabel } from './api/gmail/label'

(async () => {
	const oAuth2Client = await GmailAuth.authorize()
	const gmailLabels = await listLabels(oAuth2Client)	
	// createLabel(oAuth2Client)
})()