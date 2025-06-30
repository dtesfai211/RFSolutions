import { useTranslation } from "@/hooks/use-translation";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Globe } from "lucide-react";
import React from "react";

interface SocialLink {
  platform: string;
  url: string;
}

interface SocialLinksProps {
  socials: SocialLink[];
}

const iconMap: Record<string, React.ElementType> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  github: Github,
  website: Globe,
};

const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => {

    const { t } = useTranslation();
  return (
    <div className="mt-8 text-center space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">{t("common.followUs")}</h2>
      <div className="flex justify-center gap-4">
        {socials.map((social) => {
          const IconComponent = iconMap[social.platform.toLowerCase()];
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-gray-300 dark:border-white/20 p-3 hover:bg-riverflow-600 hover:text-white transition-all duration-300 shadow-md"
              aria-label={social.platform}
            >
              <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
                {IconComponent ? (
                  <IconComponent className="w-6 h-6" />
                ) : (
                  <Globe className="w-6 h-6" />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
