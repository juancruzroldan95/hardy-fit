export interface Influencer {
  id: number;
  name: string;
  instagram: string;
  productSlug?: string;
  videoSrc: string;
  thumbnail?: string;
}

export const INFLUENCERS: Influencer[] = [
  {
    id: 1,
    name: "Cata Cohan", // La fitness
    instagram: "@catacohan",
    videoSrc: "/videos/cata_cohan_01.MOV",
  },
  // {
  //   id: 2,
  //   name: "Delfina Rivas", // La bailarina de tango
  //   instagram: "@delfinarivasok",
  //   videoSrc: "/videos/delfi_rivas_01.mp4",
  // },
  // {
  //   id: 3,
  //   name: "Candelaria Diaz", // La rubia de pelo corto
  //   instagram: "@candelariacontent",
  //   videoSrc: "/videos/cande_diaz_01.MOV",
  // },
  {
    id: 4,
    name: "Florencia Gatti", // La nutri
    instagram: "@thehealthynutrii",
    videoSrc: "/videos/flor_nutri_01.mp4",
  },
  {
    id: 5,
    name: "Juana Lujan",
    instagram: "@juanilujan",
    videoSrc: "/videos/juana_lujan.mp4",
  },
  {
    id: 5,
    name: "Alex Sigler",
    instagram: "@sigleralex.fitness",
    videoSrc: "/videos/alex_sigler.mp4",
  },
];
