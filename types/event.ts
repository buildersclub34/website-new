interface BaseEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image?: string | null;
  imageFile?: string | null;
  imageType?: 'url' | 'file' | null;
  startDate: Date | string;
  endDate: Date | string | null;
  location: string;
  isPublished: boolean;
  isFeatured: boolean;
  authorId: string;
  author?: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  };
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Event extends BaseEvent {}

export interface EventFormData {
  title: string;
  description: string;
  content: string;
  image?: any;
  imageUrl?: string; // Optional image URL
  startDate: string;
  endDate?: string;
  location: string;
  isPublished: boolean;
  isFeatured: boolean;
}
