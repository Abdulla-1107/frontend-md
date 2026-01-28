import { Product } from "@/data/products";

export const mapProduct = (item: any): Product => ({
  id: item.id,
  price: Number(item.price),
  image: item.image,

  name: {
    uz: item.name_uz,
    ru: item.name_ru,
    en: item.name_en,
  },

  description: {
    uz: item.description_uz,
    ru: item.description_ru,
    en: item.description_en,
  },
});
