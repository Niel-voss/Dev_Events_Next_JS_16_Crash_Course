/**
 * Events Array - Central data source for all developer conferences and tech events
 * 
 * Each event object contains:
 * - id: Unique identifier for the event
 * - image: Path to the event poster image (from public/images folder)
 * - title: Name of the event
 * - slug: URL-friendly version of the event name (used for routing)
 * - location: City and country where the event takes place (or "Virtual" for online events)
 * - date: The date range of the event in format "Month Day-Day, Year"
 * - time: Operating hours of the event in 12-hour format
 * - description: Detailed information about the event
 * 
 * Usage: Import this array in any component that needs to display events
 * Example: import { events } from '@/lib/constants';
 */
export const events = [
  {
    // React Summit 2026 - Europe's largest React conference
    id: 1,
    image: '/images/event1.png',
    title: 'React Summit 2026',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: 'April 15-16, 2026',
    time: '09:00 AM - 06:00 PM',
    description: 'The biggest React conference in Europe featuring talks from industry leaders, workshops, and networking opportunities.',
  },
  {
    // Web3 Dev Hackathon - 48-hour intensive coding competition
    id: 2,
    image: '/images/event2.png',
    title: 'Web3 Dev Hackathon',
    slug: 'web3-dev-hackathon',
    location: 'San Francisco, CA',
    date: 'May 10-12, 2026',
    time: '10:00 AM - 08:00 PM',
    description: 'Build the future of decentralized applications. 48-hour hackathon with $50,000 in prizes.',
  },
  {
    // JavaScript Conf Japan - Asia's premier JavaScript conference
    id: 3,
    image: '/images/event3.png',
    title: 'JavaScript Conf Japan',
    slug: 'js-conf-japan',
    location: 'Tokyo, Japan',
    date: 'June 2-3, 2026',
    time: '09:00 AM - 05:30 PM',
    description: 'Join the vibrant JavaScript community in Japan for talks, workshops, and cultural exchange.',
  },
  {// Next.js Conf 2026 - Official conference for the Next.js framework

    id: 4,
    image: '/images/event4.png',
    title: 'Next.js Conf 2026',
    slug: 'nextjs-conf-2026',
    location: 'Virtual',
    date: 'June 23-24, 2026',
    time: '10:00 AM - 06:00 PM',
    description: 'The official Next.js conference bringing together the global React ecosystem.',
  },
  {// DevOps Days London - Infrastructure and deployment best practices

    id: 5,
    image: '/images/event5.png',
    title: 'DevOps Days London',
    slug: 'devops-days-london',
    location: 'London, UK',
    date: 'July 8-9, 2026',
    time: '08:30 AM - 05:00 PM',
    description: 'Connect with DevOps professionals. Learn about cloud infrastructure, CI/CD, and containerization.',
  },
  {
    // AI & Machine Learning Summit - Latest in artificial intelligence and ML
    id: 6,
    image: '/images/event6.png',
    title: 'AI & Machine Learning Summit',
    slug: 'ai-ml-summit',
    location: 'Seattle, WA',
    date: 'August 18-20, 2026',
    time: '09:00 AM - 06:00 PM',
    description: 'Explore cutting-edge AI/ML technologies, hear from researchers, and network with tech leaders.',
  },
];
