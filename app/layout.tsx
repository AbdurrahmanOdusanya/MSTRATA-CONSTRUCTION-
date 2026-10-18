import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MStrata Construction Company | Building & Development in Lagos',
  description:
    'MStrata Construction Company delivers dependable construction solutions through quality craftsmanship, thoughtful planning, and lasting results in Mushin, Lagos, Nigeria.',
  keywords: [
    'Construction company in Lagos',
    'Building construction in Lagos',
    'Residential construction Lagos',
    'Commercial construction Lagos',
    'Structural engineering Lagos',
    'Construction project management Lagos',
    'MStrata Construction Company',
    'Construction services in Mushin Lagos',
  ],
  authors: [{ name: 'MStrata Construction Company' }],
  creator: 'MStrata Construction Company',
  publisher: 'MStrata Construction Company',
  icons: {
    icon: '/images/MSTRATA LOGO 1.png',
    shortcut: '/images/MSTRATA LOGO 1.png',
    apple: '/images/MSTRATA LOGO 1.png',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'MStrata Construction Company | Quality Construction in Lagos',
    description:
      'We Build More Than Structures. We Build Confidence. Dependable residential, commercial, and project management solutions in Lagos, Nigeria.',
    url: 'https://mstrataconstruction.ng',
    siteName: 'MStrata Construction Company',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/images/hero_construction_lagos_1791823192443.jpg',
        width: 1200,
        height: 675,
        alt: 'MStrata Construction Company - Building With Purpose',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MStrata Construction Company | Lagos, Nigeria',
    description:
      'Dependable construction solutions through quality craftsmanship, thoughtful planning, and lasting results.',
    images: ['/images/hero_construction_lagos_1791823192443.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'MStrata Construction Company',
  image: '/images/hero_construction_lagos_1791823192443.jpg',
  description:
    'MStrata Construction Company delivers dependable construction solutions through quality craftsmanship, thoughtful planning, and a commitment to lasting results.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mushin',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
  },
  telephone: '+2347036189196',
  email: 'mstrataconstructionc@gmail.com',
  url: 'https://mstrataconstruction.ng',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/mstrataconstructionc',
    'https://www.linkedin.com/company/mstrata-construction-company/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon & Web App Icons */}
        <link rel="icon" type="image/png" href="/images/MSTRATA LOGO 1.png" />
        <link rel="apple-touch-icon" href="/images/MSTRATA LOGO 1.png" />

        {/* Preconnects for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Avant Garde Web Fonts */}
        <link rel="preload" href="/fonts/AVGARDR2.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AVGARDD2.woff" as="font" type="font/woff" crossOrigin="anonymous" />

        {/* DM Sans Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-neutral-900 antialiased selection:bg-[#FF007B] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
