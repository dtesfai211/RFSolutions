// lib/portableTextComponents.tsx
import Image from "next/image"
import Link from "next/link"
import { PortableTextComponents } from "@portabletext/react"

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null

      return (
        <div className="my-6">
          <Image
            src={value.asset.url || ""}
            alt={value.alt || " "}
            width={800}
            height={450}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 border-riverflow-500 my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4 leading-relaxed text-gray-800">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const isExternal = value?.href?.startsWith("http")
      return isExternal ? (
        <a
          href={value.href}
          className="text-riverflow-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={value.href} className="text-riverflow-600 hover:underline">
          {children}
        </Link>
      )
    },
  },
}
