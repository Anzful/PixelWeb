import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'ბლოგი | სასარგებლო რჩევები ვებსაიტებზე | PixelWeb',
  description: 'გაიგეთ მეტი საიტის დამზადების, SEO ოპტიმიზაციის და ციფრული მარკეტინგის შესახებ ჩვენს ბლოგზე.',
  alternates: {
    canonical: 'https://pixelweb.ge/blog',
  },
}

// Sample blog data (In a real app, this would come from a CMS or MDX files)
const posts = [
  {
    slug: 'ratom-mchirdeba-website',
    title: 'რატომ სჭირდება ყველა ბიზნესს ვებსაიტი 2025 წელს?',
    excerpt: 'ციფრულ ეპოქაში ვებსაიტი აღარ არის ფუფუნება, ეს აუცილებლობაა. გაიგეთ 5 მიზეზი, თუ რატომ კარგავთ კლიენტებს საიტის გარეშე.',
    date: '3 ნოემბერი, 2025',
    author: 'PixelWeb Team',
    image: '/images/Furniture1.jpg', // Using existing coding image
    category: 'ბიზნესი'
  },
  {
    slug: 'ra-ghirs-saitis-damzadeba',
    title: 'რა ღირს საიტის დამზადება საქართველოში?',
    excerpt: 'ფასები, ვადები და ხარისხი. დეტალური გზამკვლევი ვებსაიტის ფასწარმოქმნის შესახებ.',
    date: '8 ნოემბერი, 2025',
    author: 'PixelWeb Team',
    image: '/images/ecom1.png', // Using existing e-commerce image
    category: 'ფასები'
  }
]

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20 bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="bg-primary-900 text-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ჩვენი ბლოგი</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              სიახლეები, რჩევები და საინტერესო სტატიები ვებ ტექნოლოგიების შესახებ
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="h-48 relative overflow-hidden group">
                   <Image 
                     src={post.image} 
                     alt={post.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                    <span className="flex items-center"><FaCalendar className="mr-2" /> {post.date}</span>
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded text-xs font-semibold uppercase">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto"
                  >
                    წაიკითხე სრულად <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
