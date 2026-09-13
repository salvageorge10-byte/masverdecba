export interface Review {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
  profileUrl?: string;
}

export interface ReviewsSummary {
  rating: number;
  count: number;
  placeUrl: string;
}
