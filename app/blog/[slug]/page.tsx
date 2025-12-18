import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageTransition from '@/components/PageTransition'
import { FaCalendar, FaUser, FaArrowLeft, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

// In a real app, you would fetch this data
const posts: Record<string, any> = {
  'ratom-mchirdeba-website': {
    title: 'რატომ სჭირდება ყველა ბიზნესს ვებსაიტი 2025 წელს?',
    image: '/images/Furniture1.jpg',
    content: `
      <p>ციფრულ ეპოქაში ვებსაიტი აღარ არის ფუფუნება, ეს აუცილებლობაა. 2025 წელს, თუ თქვენ გაქვთ ბიზნესი და არ გაქვთ ვებსაიტი, თქვენ კარგავთ დიდ შესაძლებლობებს. აი 5 მიზეზი, თუ რატომ არის საიტის დამზადება კრიტიკულად მნიშვნელოვანი:</p>
      
      <h3>1. სანდოობა (Credibility)</h3>
      <p>მომხმარებლების 84% ფიქრობს, რომ ბიზნესი, რომელსაც აქვს ვებსაიტი, უფრო სანდოა, ვიდრე ის, რომელსაც მხოლოდ Facebook გვერდი აქვს. ვებსაიტი არის თქვენი ციფრული ოფისი, რომელიც მუშაობს 24/7.</p>

      <h3>2. ორგანული ტრაფიკი (SEO)</h3>
      <p>როდესაც თქვენი საიტი SEO ოპტიმიზირებულია, ის ჩნდება Google-ის ძიებაში. ეს ნიშნავს უფასო, მუდმივ კლიენტებს. წარმოიდგინეთ, რომ ვიღაც ეძებს "საუკეთესო რესტორანი თბილისში" და თქვენი საიტი პირველ ადგილზეა. ეს არის SEO-ს ძალა.</p>

      <h3>3. დროის დაზოგვა</h3>
      <p>თქვენი საიტი პასუხობს მომხმარებლის კითხვებს თქვენს მაგივრად. რა ღირს? სად ხართ? რას საქმიანობთ? ეს ყველაფერი საიტზეა, რაც ზოგავს თქვენს დროს.</p>

      <h3>4. კონკურენტული უპირატესობა</h3>
      <p>თუ თქვენს კონკურენტებს არ აქვთ კარგი საიტი, ეს თქვენი შანსია. ხარისხიანი ვებსაიტი გამოგარჩევთ ბაზარზე.</p>

      <h3>5. მარკეტინგი და ანალიტიკა</h3>
      <p>საიტზე შეგიძლიათ დააყენოთ Google Analytics და Facebook Pixel. ეს გაძლევთ საშუალებას ზუსტად იცოდეთ, ვინ არიან თქვენი მომხმარებლები და რა აინტერესებთ მათ.</p>

      <p><strong>დასკვნა:</strong> საიტის დამზადება არის ინვესტიცია, რომელიც აუცილებლად ამოიღებს ხარჯებს.</p>
    `,
    date: '3 ნოემბერი, 2025',
    author: 'PixelWeb Team',
    keywords: 'რატომ მჭირდება საიტი, ბიზნეს ვებსაიტი, საიტის დამზადების მნიშვნელობა'
  },
  'ra-ghirs-saitis-damzadeba': {
    title: 'რა ღირს საიტის დამზადება საქართველოში? (2025 წლის ფასები)',
    image: '/images/ecom1.png',
    content: `
      <p>ერთ-ერთი ყველაზე ხშირი კითხვაა: "რა ღირს საიტი?". 2025 წელს პასუხი დამოკიდებულია იმაზე, თუ რა გჭირდებათ. მოდით განვიხილოთ დეტალურად.</p>
      
      <h3>1. Landing Page (ერთგვერდიანი საიტი)</h3>
      <p><strong>ფასი:</strong> 400₾ - 800₾</p>
      <p>ეს არის მარტივი საიტი, რომლის მიზანია ერთი კონკრეტული მოქმედების შესრულება (მაგ: პროდუქტის ყიდვა, რეგისტრაცია). იდეალურია სარეკლამო კამპანიებისთვის.</p>

      <h3>2. სავიზიტო / კორპორატიული საიტი</h3>
      <p><strong>ფასი:</strong> 1000₾ - 2500₾</p>
      <p>მოიცავს 5-10 გვერდს (მთავარი, ჩვენ შესახებ, სერვისები, ბლოგი, კონტაქტი). სჭირდება ადმინ პანელი და SEO ოპტიმიზაცია.</p>

      <h3>3. E-commerce (ინტერნეტ მაღაზია)</h3>
      <p><strong>ფასი:</strong> 3000₾ - 5000₾+</p>
      <p>ეს არის რთული სისტემა გადახდებით, კალათით, პროდუქტების მართვით. ფასი დამოკიდებულია ფუნქციონალის სირთულეზე.</p>

      <h3>რატომ განსხვავდება ფასები?</h3>
      <p>ფასი დამოკიდებულია:</p>
      <ul>
        <li>დიზაინის სირთულეზე (უნიკალური vs შაბლონი)</li>
        <li>ფუნქციონალზე (გადახდები, კალკულატორები)</li>
        <li>ტექნოლოგიებზე (WordPress vs Custom Code)</li>
      </ul>

      <p>PixelWeb-ში ჩვენ გთავაზობთ საუკეთესო ფასისა და ხარისხის შეფარდებას. ჩვენ ვწერთ სუფთა კოდს (Next.js), რაც უზრუნველყოფს საიტის სისწრაფეს და უსაფრთხოებას.</p>
    `,
    date: '8 ნოემბერი, 2025',
    author: 'PixelWeb Team',
    keywords: 'საიტის ფასი, რა ღირს საიტი, ვებსაიტების დამზადების ფასები'
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | PixelWeb Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''), // Strip HTML tags for description
    keywords: post.keywords,
    alternates: {
      canonical: `https://pixelweb.ge/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <FaArrowLeft className="mr-2" /> უკან ბლოგზე
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-6 border-b border-gray-100 dark:border-gray-800 pb-8">
                <span className="flex items-center"><FaCalendar className="mr-2" /> {post.date}</span>
                <span className="flex items-center"><FaUser className="mr-2" /> {post.author}</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </PageTransition>
  )
}
