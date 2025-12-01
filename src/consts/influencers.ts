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
    name: "Cata Cohan", // La fitness
    instagram: "@catacohan",
    productSlug: "crema-mani-natural",
    videoSrc: "/src/assets/videos/ambassadors/cata_cohan_IMG_7502.MOV",
  },
  // {
  //   id: 2,
  //   name: "Delfina Rivas", // La bailarina de tango
  //   instagram: "@delfinarivasok",
  //   productSlug: "crema-mani-chocolate",
  //   videoSrc:
  //     "/src/assets/videos/ambassadors/delfi_rivas_WhatsApp Video 2025-11-12 at 16.24.41.mp4",
  // },
  // {
  //   id: 3,
  //   name: "Candelaria Diaz", // La rubia de pelo corto
  //   instagram: "@candelariacontent",
  //   productSlug: "crema-mani-natural",
  //   videoSrc: "/src/assets/videos/ambassadors/cande_diaz_IMG_1995.MOV",
  // },
  {
    id: 4,
    name: "Florencia Gatti", // La nutri
    instagram: "@thehealthynutrii",
    productSlug: "crema-mani-natural",
    videoSrc:
      "/src/assets/videos/ambassadors/flor_nutri_WhatsApp Video 2025-11-19 at 16.10.33.mp4",
  },
];
