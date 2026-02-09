export interface DummyResponse {
  products: DummyItem[];
  total: number;
  skip: number;
  limit: number;
}

export interface DummyItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO string
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  barcode: string;
  qrCode: string;
}

export const baseRepoName = '/ai-aboutme'


export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
  status?: 'sent' | 'pending' | 'error';
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}
