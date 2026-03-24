export interface Article {
  id: string;
  title: string;
  category: 'Film' | 'Music' | 'Visual';
  date: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
  excerpt: string;
  body: string;
}
