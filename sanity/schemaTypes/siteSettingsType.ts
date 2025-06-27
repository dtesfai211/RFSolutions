import {
  Globe,
  Megaphone,
  Eye,
  Phone,
  User,
  ShieldCheck,
} from "lucide-react"

export const siteSettingsType = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: Megaphone,
  fieldsets: [
    { name: 'branding', title: 'Branding', icon: Eye, options: { collapsible: true, collapsed: true } },
    { name: 'seo', title: 'SEO', icon: Megaphone, options: { collapsible: true, collapsed: true } },
    { name: 'contact', title: 'Contact Info', icon: Phone, options: { collapsible: true, collapsed: true } },
    { name: 'ui', title: 'UI Options', icon: Eye, options: { collapsible: true, collapsed: true } },
    { name: 'whatsapp', title: 'WhatsApp Integration', icon: User, options: { collapsible: true, collapsed: true } },
    { name: 'legal', title: 'Legal & Policies', icon: ShieldCheck, options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // Branding
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      fieldset: 'branding',
      validation: (Rule: { required: () => any }) => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'branding'
    },

    {
      name: "companyProfile",
      title: "Company Profile (PDF)",
      type: "file",
      options: {
        accept: ".pdf"
      },
      fieldset: "branding"
    },  
    

    // SEO
    {
      name: 'metaTitle',
      title: 'Default Meta Title',
      type: 'string',
      fieldset: 'seo'
    },
    {
      name: 'metaDescription',
      title: 'Default Meta Description',
      type: 'text',
      fieldset: 'seo'
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'seo'
    },

    // Contact Info

    { name: 'contactName', type: 'string', title: 'Contact Name' },
    { name: 'contactPosition', type: 'string', title: 'Position' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'email', type: 'string', title: 'Email' },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        { name: 'line1', type: 'string', title: 'Line 1' },
        { name: 'line2', type: 'string', title: 'Line 2' },
      ]
    },
    {
      name: 'workingHours',
      type: 'object',
      title: 'Working Hours',
      fields: [
        { name: 'weekdays', type: 'string', title: 'Weekdays' },
        { name: 'saturday', type: 'string', title: 'Saturday' },
      ]
    },



    // UI Options
    {
      name: 'showNewsletterSignup',
      title: 'Show Newsletter Signup',
      type: 'boolean',
      initialValue: true,
      fieldset: 'ui'
    },

    // SocialMedia Options
    {
      name: 'showSocialIcons',
      title: 'Show Social Media Icons',
      type: 'boolean',
      initialValue: true,
      fieldset: 'ui'
    },

    {
      title: "Socials",
      name: "socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string" },
            { name: "url", type: "url" },
          ],
        },
      ],
    },

    // WhatsApp
    {
      name: 'whatsappEnabled',
      title: 'Enable WhatsApp Chat Button',
      type: 'boolean',
      initialValue: false,
      fieldset: 'whatsapp'
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'e.g., 971501234567 (no plus sign)',
      fieldset: 'whatsapp'
    },
    {
      name: 'whatsappMessage',
      title: 'Pre-filled Message',
      type: 'string',
      description: 'Optional message pre-filled in the chat',
      fieldset: 'whatsapp'
    },

    // Legal
    {
      name: 'termsUrl',
      title: 'Terms & Conditions URL',
      type: 'url',
      fieldset: 'legal'
    },
    {
      name: 'privacyUrl',
      title: 'Privacy Policy URL',
      type: 'url',
      fieldset: 'legal'
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings"
      }
    }
  }
}
