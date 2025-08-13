interface BaseEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image?: string | null;  // URL or path to uploaded image
  imageFile?: string | null;  // Path to uploaded file
  imageType?: 'url' | 'file' | null;
  startDate: Date | string;
  endDate: Date | string;
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
  categories?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Event extends BaseEvent {}

export interface EventFormData {
  title: string;
  description: string;
  content: string;
  image?: File | string | null;  // For file uploads or existing image URL
  imageFile?: string | null;     // Path to uploaded file
  imageType?: 'url' | 'file' | null;
  startDate: string;             // ISO date string
  endDate: string;               // ISO date string (required)
  location: string;
  isPublished: boolean;
  isFeatured: boolean;
  categoryIds?: string[];        // For associating categories with the event
}

// Type for updating an event (matches Prisma's update input)
export interface EventUpdateInput {
  title?: string;
  description?: string;
  content?: string;
  image?: string | null;
  imageFile?: string | null;
  imageType?: 'url' | 'file' | null;
  startDate?: Date | string;
  endDate?: Date | string;
  location?: string;
  isPublished?: boolean;
  isFeatured?: boolean;
  updatedAt?: Date;
  categories?: {
    set?: Array<{ id: string }>;
    connect?: Array<{ id: string }>;
  };
}
