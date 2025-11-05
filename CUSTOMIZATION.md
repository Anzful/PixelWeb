# მორგების სახელმძღვანელო

ამ დოკუმენტში აღწერილია როგორ მოარგოთ WebSmiths.btw საიტი თქვენს საჭიროებებზე.

## 🎨 ფერების შეცვლა

### Tailwind Config-ში

შეცვალეთ `tailwind.config.ts` ფაილი:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',   // ღია ტონი
    500: '#0ea5e9',  // ნორმალური
    600: '#0284c7',  // მთავარი (მეტად იყენება)
    700: '#0369a1',  // hover state
  },
  accent: {
    400: '#f59e0b',
    500: '#d97706',  // მთავარი accent ფერი
  }
}
```

### ფერების გამოყენების მაგალითები

პროექტში ფერები გამოიყენება ასე:
- `text-primary-600` - ძირითადი ტექსტი
- `bg-primary-600` - ღილაკები, backgrounds
- `hover:bg-primary-700` - hover states

## 📝 ტექსტის და კონტენტის განახლება

### 1. კომპანიის სახელი

**სად არის:**
- `app/layout.tsx` - meta title და description
- `components/Navbar.tsx` - Logo
- `components/Footer.tsx` - Footer logo

**როგორ შევცვალოთ:**

```tsx
// components/Navbar.tsx
<span className="text-primary-600">თქვენი</span>
<span className="text-gray-800">კომპანია</span>
<span className="text-accent-500">.ge</span>
```

### 2. ფასების განახლება

**სად:** `app/services/page.tsx`

```tsx
const services = [
  {
    name: 'Landing Page',
    price: '500-800',  // <-- შეცვალეთ აქ
    duration: '3-5 დღე',  // <-- და აქ
    // ...
  }
]
```

### 3. პორტფოლიოს პროექტები

**სად:** `app/portfolio/page.tsx`

```tsx
const projects = [
  {
    id: 1,
    title: 'თქვენი პროექტის სახელი',
    category: 'corporate',  // ან ecommerce, restaurant, etc.
    description: 'აღწერა...',
    price: '1,800 ₾',
    // დაამატეთ ან შეცვალეთ
  }
]
```

### 4. გუნდის წევრები

**სად:** `app/about/page.tsx`

```tsx
const team = [
  {
    name: 'გიორგი',  // <-- სახელი
    role: 'Frontend Developer',  // <-- როლი
    description: 'აღწერა...',
    skills: ['React', 'Next.js', ...]  // <-- skills
  }
]
```

## 📞 კონტაქტის ინფორმაცია

### ტელეფონი და ელ-ფოსტა

**შეცვალეთ ეს ფაილები:**

1. `components/Footer.tsx`:
```tsx
<FaPhone className="text-primary-400" />
<span>+995 XXX XX XX XX</span>  // <-- აქ
// და
<FaEnvelope className="text-primary-400" />
<span>info@websmiths.btw</span>  // <-- აქ
```

2. `app/contact/page.tsx`:
```tsx
{
  icon: <FaPhone .../>,
  title: 'ტელეფონი',
  info: '+995 XXX XX XX XX',  // <-- აქ
  subInfo: 'ორშაბათი - შაბათი: 10:00 - 19:00'
}
```

### სოციალური მედია

**შეცვალეთ ბმულები:**

`components/Footer.tsx`:
```tsx
<a href="https://facebook.com/yourpage">  // <-- აქ
  <FaFacebook size={24} />
</a>
<a href="https://instagram.com/yourpage">  // <-- აქ
  <FaInstagram size={24} />
</a>
```

## 🖼️ სურათების დამატება

### 1. Logo-ს დამატება

შექმენით `public/images/logo.png` და შეცვალეთ:

```tsx
// components/Navbar.tsx
import Image from 'next/image'

<Link href="/" className="flex items-center">
  <Image 
    src="/images/logo.png" 
    alt="WebSmiths" 
    width={150} 
    height={50} 
  />
</Link>
```

### 2. პორტფოლიოს სურათები

შექმენით ფოლდერი: `public/images/portfolio/`

დაამატეთ სურათები:
- `builder.jpg`
- `restaurant.jpg`
- `fashion-store.jpg`
- და ა.შ.

### 3. Favicon-ის შეცვლა

შექმენით `app/favicon.ico` ან დაამატეთ `app/layout.tsx`-ში:

```tsx
export const metadata: Metadata = {
  // ...
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  }
}
```

## 📧 კონტაქტის ფორმის ინტეგრაცია

### EmailJS-ის გამოყენება

1. **ინსტალაცია:**
```bash
npm install @emailjs/browser
```

2. **EmailJS აკაუნტი:**
- შექმენით account: https://www.emailjs.com/
- შექმენით Email Service
- შექმენით Email Template
- მიიღეთ თქვენი Public Key

3. **კოდის განახლება** (`app/contact/page.tsx`):

```tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',      // <-- Service ID
      'YOUR_TEMPLATE_ID',     // <-- Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'       // <-- Public Key
    )
    
    setSubmitStatus('success')
    setFormData({ /* reset fields */ })
  } catch (error) {
    console.error('Error:', error)
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Formspree-ის გამოყენება (უფრო მარტივი)

1. შექმენით account: https://formspree.io/
2. მიიღეთ თქვენი Form Endpoint
3. განაახლეთ form:

```tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  {/* form fields */}
</form>
```

## 🔧 სერვისების დამატება/შეცვლა

### ახალი სერვისის დამატება

`app/services/page.tsx`:

```tsx
const services = [
  // არსებული სერვისები...
  {
    icon: <FaYourIcon className="text-5xl text-primary-600" />,
    name: 'ახალი სერვისი',
    price: '1,000-2,000',
    duration: '5-7 დღე',
    description: 'სერვისის აღწერა',
    features: [
      'ფუნქცია 1',
      'ფუნქცია 2',
      // ...
    ],
    notIncluded: [
      'რაც არ შედის',
    ],
    marketPrice: '3,000-4,000',
    popular: false  // true თუ გსურთ "პოპულარული" badge
  }
]
```

## 🌐 მრავალენოვანი მხარდაჭერა

თუ გსურთ ქართული + ინგლისური:

### 1. i18n პაკეტის ინსტალაცია

```bash
npm install next-intl
```

### 2. სტრუქტურის შექმნა

```
app/
├── [locale]/
│   ├── ka/
│   │   └── page.tsx
│   ├── en/
│   │   └── page.tsx
```

### 3. Translation ფაილები

შექმენით `locales/ka.json` და `locales/en.json`

## 🎯 SEO-ს გაუმჯობესება

### Meta Tags-ის განახლება

`app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'თქვენი სათაური - Keywords',
  description: 'დეტალური აღწერა თქვენი სერვისის შესახებ',
  keywords: 'ვებსაიტი, საქართველო, თბილისი, web development',
  authors: [{ name: 'თქვენი კომპანია' }],
  openGraph: {
    title: 'თქვენი სათაური',
    description: 'აღწერა',
    images: ['/og-image.jpg'],
    type: 'website',
    url: 'https://yoursite.ge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'თქვენი სათაური',
    description: 'აღწერა',
    images: ['/twitter-image.jpg'],
  }
}
```

### Sitemap-ის დამატება

შექმენით `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoursite.ge',
      lastModified: new Date(),
    },
    {
      url: 'https://yoursite.ge/services',
      lastModified: new Date(),
    },
    // დაამატეთ ყველა გვერდი
  ]
}
```

### Robots.txt

შექმენით `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yoursite.ge/sitemap.xml',
  }
}
```

## 📊 Google Analytics-ის დამატება

1. **GA4 Property შექმნა**
   - გადით: https://analytics.google.com
   - შექმენით ახალი Property
   - მიიღეთ Measurement ID (G-XXXXXXXXXX)

2. **კოდის დამატება**

შექმენით `app/analytics.tsx`:

```tsx
'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  )
}
```

და `app/layout.tsx`-ში:

```tsx
import Analytics from './analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔒 უსაფრთხოება

### Environment Variables

შექმენით `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.ge
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EMAIL_SERVICE_API_KEY=your_secret_key
```

**მნიშვნელოვანი:** 
- `NEXT_PUBLIC_` პრეფიქსი = ხილულია browser-ში
- პრეფიქსის გარეშე = მხოლოდ server-ზე

არასოდეს commit-ოთ `.env.local` - უკვე არის `.gitignore`-ში!

## 🚀 Performance ოპტიმიზაცია

### სურათების ოპტიმიზაცია

გამოიყენეთ Next.js Image კომპონენტი:

```tsx
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="აღწერა"
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
/>
```

### Font ოპტიმიზაცია

უკვე კონფიგურირებულია Inter font-თან.

დამატებითი font-ები:

```tsx
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
```

## 💡 დამატებითი რჩევები

### 1. Custom 404 გვერდი

შექმენით `app/not-found.tsx`:

```tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p>გვერდი ვერ მოიძებნა</p>
      </div>
    </div>
  )
}
```

### 2. Loading States

შექმენით `app/loading.tsx`:

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin ...">Loading...</div>
    </div>
  )
}
```

### 3. Error Handling

შექმენით `app/error.tsx`:

```tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

---

კითხვების შემთხვევაში: info@websmiths.btw 📧

