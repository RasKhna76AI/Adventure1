export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  duration: string;
  price: number;
}

export interface Activity {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  trip: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}