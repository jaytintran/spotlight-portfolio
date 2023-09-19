import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tin Tran',
    default:
      'Tin Tran - Software developer, entrepreneur, and jack of all trades',
  },
  description:
    'I’m Tin, a software developer and entrepreneur based in Ho Chi Minh city, Vietnam. I’m launching my digital agency TUDO, where we offer high ROI solutions for SMMA, copywriting, SEO, and funnel design. Besides I am a full time remote developer for an international company based in France.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
