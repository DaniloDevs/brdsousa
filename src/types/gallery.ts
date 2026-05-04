export interface Category {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  photoCount: number;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
}
