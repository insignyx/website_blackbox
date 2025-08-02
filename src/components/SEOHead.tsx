import { Helmet } from 'react-helmet-async'

interface BreadcrumbItem {
  name: string
  url: string
}

interface FAQItem {
  question: string
  answer: string
}

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  hreflang?: Array<{ lang: string; url: string }>
  breadcrumbs?: BreadcrumbItem[]
  faqData?: FAQItem[]
  articleData?: {
    headline: string
    datePublished: string
    dateModified: string
    author: string
    wordCount?: number
    readingTime?: number
  }
  reviewData?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://insignyx.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  hreflang,
  breadcrumbs,
  faqData,
  articleData,
  reviewData
}) => {
  const fullTitle = title.includes('Insignyx') ? title : `${title} | Insignyx Technologies`
  const baseUrl = 'https://insignyx.com'
  const fullCanonicalUrl = canonicalUrl || window.location.href

  // Enhanced hreflang with more target markets
  const defaultHreflang = [
    { lang: 'en', url: fullCanonicalUrl },
    { lang: 'en-us', url: fullCanonicalUrl },
    { lang: 'en-gb', url: fullCanonicalUrl },
    { lang: 'en-au', url: fullCanonicalUrl },
    { lang: 'en-sg', url: fullCanonicalUrl },
    { lang: 'x-default', url: fullCanonicalUrl }
  ]
  const finalHreflang = hreflang || defaultHreflang

  // Generate breadcrumb structured data
  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  } : null

  // Generate FAQ structured data
  const faqSchema = faqData ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  } : null

  // Generate Article structured data
  const articleSchema = articleData ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': articleData.headline,
    'datePublished': articleData.datePublished,
    'dateModified': articleData.dateModified,
    'author': {
      '@type': 'Organization',
      'name': articleData.author || 'Insignyx Technologies'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Insignyx Technologies',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://insignyx.com/logo.png'
      }
    },
    'wordCount': articleData.wordCount,
    'timeRequired': articleData.readingTime ? `PT${articleData.readingTime}M` : undefined
  } : null

  // Generate Review/Rating structured data
  const reviewSchema = reviewData ? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Insignyx Technologies',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': reviewData.ratingValue,
      'reviewCount': reviewData.reviewCount,
      'bestRating': reviewData.bestRating || 5,
      'worstRating': reviewData.worstRating || 1
    }
  } : null

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Insignyx Technologies" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Insignyx Technologies" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@InsignyxTech" />
      <meta name="twitter:creator" content="@InsignyxTech" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Insignyx Technologies" />
      <meta name="apple-mobile-web-app-title" content="Insignyx" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance & Core Web Vitals */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
      
      {/* International SEO - Currency & Region */}
      <meta name="currency" content="USD,INR,EUR" />
      <meta name="target-country" content="IN,US,GB,AU,SG" />
      
      {/* Enhanced Hreflang Tags for International SEO */}
      {finalHreflang.map((lang, index) => (
        <link key={index} rel="alternate" hrefLang={lang.lang} href={lang.url} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Article Schema */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {/* Review/Rating Schema */}
      {reviewSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead