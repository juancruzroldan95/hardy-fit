export interface Influencer {
  id: number;
  name: string;
  instagram: string;
  productSlug: string;
  videoSrc: string;
  thumbnail?: string;
}

export const INFLUENCERS: Influencer[] = [
  {
    id: 1,
    name: "Influencer 1",
    instagram: "@influencer1",
    productSlug: "crema-mani-natural",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
  },
  {
    id: 2,
    name: "Influencer 2",
    instagram: "@influencer2",
    productSlug: "crema-mani-chocolate",
    videoSrc: "https://www.w3schools.com/html/movie.mp4", // Placeholder
  },
];
