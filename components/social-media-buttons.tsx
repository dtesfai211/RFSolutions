import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SocialMediaButtons({
  links,
}: {
  links: Partial<Record<"facebook" | "instagram" | "twitter" | "linkedin", string>>
}) {
  const icons = {
    facebook: <Facebook className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
  }

  return (
    <div className="flex justify-center gap-6">
      {Object.entries(links).map(([platform, url]) => (
        url && (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-riverflow-600 hover:text-riverflow-800 transition"
          >
            {icons[platform as keyof typeof icons]}
          </a>
        )
      ))}
    </div>
  )
}
