export type Language = "uz" | "ru" | "en";

export interface Product {
  id: string;
  price: number;
  image: string;
  featured?: boolean;

  name: Record<Language, string>;
  description: Record<Language, string>;
}
