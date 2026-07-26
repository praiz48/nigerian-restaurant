export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  spiceLevel: number;
  isChefsChoice?: boolean;
  isGlutenFree?: boolean;
  isNew?: boolean;
  tags?: string[];
  isFeature?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Smoky Party Jollof",
    description:
      "Traditional firewood-smoked parboiled rice, seasoned with ancestral spices and served with charcoal-grilled protein.",
    price: "₦12,500",
    category: "jollof",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsdsc98LGWMXxx2EScZm7MdkKaugzjAqiR11X_SuyXfxh_KRb4ocmL7S4RG5ZsLDnHXZc74KN7V-fwC5PP6j6rxtyNf0Fnk4dP4DVsiULHq24Jxkaqp2Gd3nys8RwlPm8oBJHU1lc3yZUE5yx66PdCaUc_ENLVdZKiG2YZk7_c08YslSdW2ocKSFem9gu2c5LXSl4QqijK9dkKKGgj1NtIxvnzw4_W9jGHwQfY_ZjeNcU8acvumeHnDgvk",
    spiceLevel: 2,
    isChefsChoice: true,
  },
  {
    id: "2",
    name: "Coconut Infused Jollof",
    description:
      "A decadent twist on the classic. Infused with fresh coconut milk and topped with toasted coconut flakes and jumbo prawns.",
    price: "₦18,500",
    category: "jollof",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlrFVo5l5hAk52f79yAUtPScUOWx22E4oTXpm9zm-ITp3yqCn8Joc4NlICvrYRZiQGhbjpUmL_LxbPtGeFl8Tb7sOomQb_dgMvjfqESVp72bZ_ZdiDBNkWVXpxB7IxYLrUvohSsKvcrDfmz5yr9npGponh_wvCRSvZJdY9z5HJFQavMKQNSY1zFXDYpejvrR4GX-n6hp6NaAe4DHMyDg6Z0UIBfsJgUFeSWG3nsyT2wrqfo9Nf-asQGaLVs5ti8dHvVLhJIEFQNVk",
    spiceLevel: 1,
    isNew: true,
    isFeature: true,
  },
  {
    id: "3",
    name: "Egusi Elegance",
    description:
      "Slow-cooked melon seeds with bitterleaf and spinach, enriched with stockfish and smoked prawns.",
    price: "₦9,000",
    category: "soups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIH_u3tnL9zooPMkjUQEGogRUBP3dwqpuJDY1rr_Y-36lmyQ35q95-35EE1guyNf873z9PjBoWEVRv0Sn2o-WjPDdS2_jZGi95-7AE5n1V504noyLAwwvnhCw6XW5o4xiGiDjO2Pmf_SaHTKWtcAb9B5j3gQ7jI77OYIZg1zr_CUa_ryz_vSy-pPHbZDCkOcGtNdyuMOSRhiucxT3D6a82SOu4g-dGoNP8KQFhtuk0eUZSv4kPZpig5rB3ArCZEoSwNEs1NvVCRks",
    spiceLevel: 1,
    isGlutenFree: true,
  },
  {
    id: "4",
    name: "Seafood Okra",
    description:
      "A premium medley of lobster, calamari, and fresh catch, folded into crunchy, vibrant diced okra.",
    price: "₦22,000",
    category: "soups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACXDNRoSTNmOctJPVSJ3eX5F2UofmpJbGnwBpwrfCmSY-mEmIGy1O8CqgHlPv8_T7XRJjk_8lAnZLum8fJJpZ-oNr7pOR6O_kkphMJIDP0A49gNjpE9wr_lUwvW0elFLdbTedzTDg_4Q865j2b6awR-CjnMmFvRRILkCFPjvcAScx1Bd1Z4bdPB7yEwHYrYnDQpvoS8NrElKTtLXpypXr7A57Aq93g2CQkPdRZ-e76Q7TM66qRJv1lVXMOP377qx3JNRHMandvua4",
    spiceLevel: 3,
  },
  {
    id: "5",
    name: "Abula Trio",
    description:
      "The perfect harmony of Gbegiri, Ewedu, and Buka Stew, served with tender assorted meats.",
    price: "₦15,500",
    category: "soups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuDpuxXJkHFqK9DeXVfr8Mpjj7adFFdSP2gIVidzm_0q6Rl0zcVVe7Q2xCiIU6q6UAoi7JAZeKCkH2Svy1rNSinE7Z6WVKwHLuVGlDAPZ8Vmmxl_4bR39IvEKT4aNWo28IrUV07wgGoVgg6asToEbrevfeLd8b0VdxcOqNmbdgiFSr38yTa845yprmUpqc3OFnQtOv9E9H2gIhgUDRYCdT02huU3knlsGQKHyPrDfU8QKCWQzTLAZA3I0wDOTqKoXlDktw9T6XesM",
    spiceLevel: 2,
  },
];

export const categories = [
  { id: "jollof", label: "Jollof" },
  { id: "rice", label: "Rice Dishes" },
  { id: "soups", label: "Soups" },
  { id: "swallows", label: "Swallows" },
  { id: "grills", label: "Grills" },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
];
