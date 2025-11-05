# WebSmiths.btw - პროფესიონალური ვებსაიტების შექმნა

თანამედროვე სერვის-პორტფოლიო ვებსაიტი ვებ დეველოპმენტის სერვისისთვის, რომელიც ფოკუსირებულია საქართველოს ბაზარზე და გთავაზობთ ხელმისაწვდომ ფასებს.

## 🚀 მახასიათებლები

- **თანამედროვე დიზაინი**: მაღალი ხარისხის UI/UX დიზაინი Tailwind CSS-ით
- **სრულად რესპონსიული**: იდეალურად მუშაობს ყველა მოწყობილობაზე
- **ანიმაციები**: გლუვი ანიმაციები Framer Motion-ის გამოყენებით
- **ქართული კონტენტი**: სრულად ადაპტირებული ქართულ ენაზე
- **SEO ოპტიმიზირებული**: Next.js 14-ის უახლესი ფუნქციები
- **TypeScript**: ტიპ-უსაფრთხო კოდი
- **სწრაფი წარმადობა**: Next.js App Router და Server Components

## 📄 გვერდები

1. **მთავარი** (`/`) - Hero სექცია, მახასიათებლები, ფასების preview, CTA
2. **სერვისები** (`/services`) - დეტალური ფასები და პაკეტები
   - Landing Page (500-800 ₾)
   - საწარმოს ვებსაიტი (1,500-2,500 ₾)
   - E-Commerce (3,000-5,000 ₾)
   - პორტფოლიო საიტი (800-1,200 ₾)
   - დამატებითი სერვისები
3. **პორტფოლიო** (`/portfolio`) - პროექტების showcase ფილტრაციით
4. **ჩვენ შესახებ** (`/about`) - კომპანიის შესახებ, ღირებულებები, გუნდი
5. **კონტაქტი** (`/contact`) - კონტაქტის ფორმა და ინფორმაცია

## 🛠️ ტექნოლოგიური Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📦 ინსტალაცია

```bash
# დეპენდენსების ინსტალაცია
npm install

# ან
yarn install

# ან
pnpm install
```

## 🚀 დეველოპმენტ

```bash
# დეველოპმენტ სერვერის გაშვება
npm run dev

# ან
yarn dev

# ან
pnpm dev
```

ღია გახსენით [http://localhost:3000](http://localhost:3000) ბრაუზერში შედეგის სანახავად.

## 🏗️ ბილდი

```bash
# პროდაქშენ ბილდის შექმნა
npm run build

# ან
yarn build

# ან
pnpm build
```

## 🚀 პროდაქშენ სერვერის გაშვება

```bash
# ბილდის შემდეგ
npm start

# ან
yarn start

# ან
pnpm start
```

## 📁 პროექტის სტრუქტურა

```
websmiths-btw/
├── app/
│   ├── about/
│   │   └── page.tsx          # ჩვენ შესახებ გვერდი
│   ├── contact/
│   │   └── page.tsx          # კონტაქტის გვერდი
│   ├── portfolio/
│   │   └── page.tsx          # პორტფოლიო გვერდი
│   ├── services/
│   │   └── page.tsx          # სერვისები და ფასები
│   ├── globals.css           # გლობალური სტილები
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # მთავარი გვერდი
├── components/
│   ├── Footer.tsx            # Footer კომპონენტი
│   └── Navbar.tsx            # Navigation კომპონენტი
├── public/
│   └── images/               # სურათების ფოლდერი
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 მორგება

### ფერები

ფერები შეგიძლიათ შეცვალოთ `tailwind.config.ts` ფაილში:

```typescript
colors: {
  primary: {
    // ძირითადი ფერები
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
  accent: {
    // აქცენტის ფერები
    500: '#d97706',
  }
}
```

### კონტენტი

ყველა ტექსტი და კონტენტი პირდაპირ გვერდებშია განთავსებული და ადვილად შესაცვლელია.

## 🌟 ფუნქციები

### ანიმაციები
- გლუვი fade-in და slide ანიმაციები
- Hover ეფექტები ყველა ინტერაქტიულ ელემენტზე
- Scroll-based ანიმაციები Framer Motion-ით

### რესპონსიული დიზაინი
- მობილური: 320px+
- ტაბლეტი: 768px+
- დესკტოპი: 1024px+

### SEO
- Next.js Metadata API
- სემანტიკური HTML
- ოპტიმიზირებული სტრუქტურა

## 📱 მობილურზე ტესტირება

```bash
npm run dev
```

შემდეგ გახსენით თქვენი ლოკალური IP მობილურ მოწყობილობაზე, მაგ:
`http://192.168.1.XXX:3000`

## 🚀 Deploy

### Vercel (რეკომენდებული)

```bash
# Vercel CLI-ის ინსტალაცია
npm i -g vercel

# Deploy
vercel
```

ან დააკონექტეთ GitHub repository Vercel-თან ავტომატური deployment-ისთვის.

### სხვა პლატფორმები
- Netlify
- AWS Amplify
- Cloudflare Pages
- DigitalOcean App Platform

## 📝 კონტენტის განახლება

### სოციალური მედიის ლინკები

`components/Footer.tsx` და `components/Navbar.tsx` ფაილებში განაახლეთ სოციალური მედიის ლინკები:

```tsx
<a href="https://facebook.com/yourpage">...</a>
```

### კონტაქტის ინფორმაცია

`components/Footer.tsx` და `app/contact/page.tsx`-ში განაახლეთ:
- ტელეფონის ნომერი
- ელ-ფოსტა
- მისამართი

### ფორმის ინტეგრაცია

`app/contact/page.tsx`-ში `handleSubmit` ფუნქცია უნდა განახლდეს რეალური API-ით:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // თქვენი API ლოგიკა აქ
}
```

რეკომენდებული სერვისები:
- EmailJS
- Formspree
- SendGrid
- Custom API Route

## 🔧 დამატებითი გაუმჯობესებები

რომ გააუმჯობესოთ საიტი, შეგიძლიათ დაამატოთ:

1. **რეალური სურათები**: `/public/images/` ფოლდერში
2. **Blog სექცია**: პროექტების და ტიპების გასაზიარებლად
3. **Admin Panel**: CMS კონტენტის მოსამართავად
4. **ანალიტიკა**: Google Analytics ან Plausible
5. **Chat Widget**: რეალურ დროში მხარდაჭერისთვის
6. **მრავალენოვანი მხარდაჭერა**: ქართული და ინგლისური

## 📄 License

This project is created for WebSmiths.btw. All rights reserved.

## 🤝 მხარდაჭერა

კითხვების შემთხვევაში დაგვიკავშირდით:
- Email: info@websmiths.btw
- Phone: +995 XXX XX XX XX

---

შექმნილია ❤️-ით WebSmiths.btw-ის მიერ

