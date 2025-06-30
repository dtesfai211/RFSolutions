import { Link } from "lucide-react";

export default function FAQSidebarLeft() {
    return (
      <div className="space-y-6 text-sm text-slate-300">
        <div>
          <h4 className="text-white font-semibold mb-2">Popular Topics</h4>
          <ul className="space-y-1">
            {["Licensing", "Bank Account", "Visa", "Business Setup"].map((topic, i) => (
              <li key={i}>
                <Link href={`/faq#${topic.toLowerCase()}`} className="hover:underline">
                  {topic}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h4 className="text-white font-semibold mb-2">Support Resources</h4>
          <ul className="space-y-1">
            <li><Link href="/guides" className="hover:underline">Guides</Link></li>
            <li><Link href="/contact" className="hover:underline">Customer Support</Link></li>
            <li><Link href="/team" className="hover:underline">Meet Our Team</Link></li>
          </ul>
        </div>
      </div>
    )
  }
  