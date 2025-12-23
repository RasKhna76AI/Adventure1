import { Destination, Activity, Testimonial, BlogPost } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Manali Adventure',
    location: 'Himachal Pradesh',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the thrill of mountain adventures in the heart of the Himalayas.',
    difficulty: 'Moderate',
    duration: '5 days',
    price: 12999
  },
  {
    id: '2',
    name: 'Rishikesh Rapids',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'White water rafting and bungee jumping in the adventure capital of India.',
    difficulty: 'Challenging',
    duration: '3 days',
    price: 8999
  },
  {
    id: '3',
    name: 'Ladakh Expedition',
    location: 'Jammu & Kashmir',
    image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-altitude desert adventure with breathtaking mountain landscapes.',
    difficulty: 'Challenging',
    duration: '8 days',
    price: 24999
  },
  {
    id: '4',
    name: 'Kasol Trek',
    location: 'Himachal Pradesh',
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cannabis valley trek through pristine Parvati valley landscapes.',
    difficulty: 'Easy',
    duration: '4 days',
    price: 6999
  },
  {
    id: '5',
    name: 'Andaman Diving',
    location: 'Andaman Islands',
    image: 'https://images.pexels.com/photos/544197/pexels-photo-544197.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Underwater adventures in crystal clear tropical waters.',
    difficulty: 'Moderate',
    duration: '6 days',
    price: 18999
  },
  {
    id: '6',
    name: 'Bir Billing',
    location: 'Himachal Pradesh',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Paragliding capital with world-class flying conditions.',
    difficulty: 'Easy',
    duration: '2 days',
    price: 4999
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    name: 'Trekking',
    icon: 'Mountain',
    description: 'Explore breathtaking mountain trails and hidden valleys.',
    image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    duration: '3-10 days'
  },
  {
    id: '2',
    name: 'River Rafting',
    icon: 'Waves',
    description: 'Navigate thrilling rapids in pristine mountain rivers.',
    image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Challenging',
    duration: '1-3 days'
  },
  {
    id: '3',
    name: 'Paragliding',
    icon: 'Plane',
    description: 'Soar through the skies with panoramic mountain views.',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy',
    duration: '1 day'
  },
  {
    id: '4',
    name: 'Skiing',
    icon: 'Mountain',
    description: 'Carve through pristine powder on Himalayan slopes.',
    image: 'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    duration: '3-7 days'
  },
  {
    id: '5',
    name: 'Scuba Diving',
    icon: 'Fish',
    description: 'Discover underwater worlds in crystal clear waters.',
    image: 'https://images.pexels.com/photos/544197/pexels-photo-544197.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    duration: '2-5 days'
  },
  {
    id: '6',
    name: 'Desert Safari',
    icon: 'Sun',
    description: 'Experience the magic of desert landscapes and starry nights.',
    image: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy',
    duration: '2-4 days'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'The Manali trek was absolutely incredible! Professional guides, stunning views, and an unforgettable experience.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    trip: 'Manali Adventure'
  },
  {
    id: '2',
    name: 'Priya Patel',
    location: 'Delhi',
    rating: 5,
    comment: 'Rafting in Rishikesh was the highlight of my year! Adrenaline rush combined with beautiful nature.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    trip: 'Rishikesh Rapids'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    location: 'Bangalore',
    rating: 5,
    comment: 'Ladakh expedition was life-changing. The team took care of everything while we enjoyed the adventure.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    trip: 'Ladakh Expedition'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Ultimate Guide to Himalayan Trekking',
    excerpt: 'Everything you need to know before embarking on your first Himalayan adventure.',
    image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Adventure Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Trekking'
  },
  {
    id: '2',
    title: 'Safety First: River Rafting Essentials',
    excerpt: 'Learn the essential safety tips and equipment needed for a safe rafting experience.',
    image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Safety Expert',
    date: '2024-01-10',
    readTime: '5 min read',
    category: 'Safety'
  },
  {
    id: '3',
    title: 'Best Time to Visit Ladakh',
    excerpt: 'Discover the perfect timing for your Ladakh adventure based on weather and accessibility.',
    image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Travel Guide',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Travel Tips'
  }
];