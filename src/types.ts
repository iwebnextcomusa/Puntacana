export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  highlights: string[];
  image: string;
  category: "all" | "private" | "group" | "romantic" | "adventure";
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Boats" | "Beaches" | "Snorkeling" | "Wildlife" | "Families" | "Couples" | "Sunset" | "Group";
  image: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
