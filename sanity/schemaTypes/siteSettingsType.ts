// /schemas/siteSettingsType.ts
export const siteSettingsType = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      // ...other fields
      {
        name: 'whatsappEnabled',
        title: 'Enable WhatsApp Chat Button',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'whatsappNumber',
        title: 'WhatsApp Number',
        type: 'string',
        description: 'e.g., 971501234567 (no plus sign)',
      },
      {
        name: 'whatsappMessage',
        title: 'Pre-filled Message',
        type: 'string',
        description: 'Optional message pre-filled in the chat',
      },
    ],
  }
  