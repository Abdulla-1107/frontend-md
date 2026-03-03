import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doppi.jpg";
import aboutImage from "@/assets/about-craft.jpg";
import { useProduct } from "@/hooks/api/useProduct";
import { mapProduct } from "@/lib/product";

const Index = () => {
  const { t } = useLanguage();
  const { getProduct } = useProduct();
  const { data } = getProduct({});

  const featuredProducts = data?.data
    ? data.data.slice(0, 4).map(mapProduct)
    : [];

  const features = [
    {
      icon: HeartHandshake,
      title: { uz: "Qo'lda tikilgan", en: "Handcrafted", ru: "Ручная работа" },
      description: {
        uz: "Har bir doppi qo'lda tikiladi",
        en: "Every doppi is handmade",
        ru: "Каждая доппи сделана вручную",
      },
    },
    {
      icon: Star,
      title: {
        uz: "Premium sifat",
        en: "Premium Quality",
        ru: "Премиум качество",
      },
      description: {
        uz: "Eng yaxshi materiallardan",
        en: "Made from finest materials",
        ru: "Из лучших материалов",
      },
    },
    {
      icon: Truck,
      title: {
        uz: "Tez yetkazish",
        en: "Fast Delivery",
        ru: "Быстрая доставка",
      },
      description: {
        uz: "O'zbekiston bo'ylab",
        en: "Across Uzbekistan",
        ru: "По всему Узбекистану",
      },
    },
    {
      icon: Shield,
      title: { uz: "Kafolat", en: "Guarantee", ru: "Гарантия" },
      description: {
        uz: "14 kun ichida qaytarish",
        en: "14-day return policy",
        ru: "Возврат в течение 14 дней",
      },
    },
  ];

  const testimonials = [
    {
      name: "Akbar Karimov",
      text: {
        uz: "Ajoyib sifat! Oilam uchun 5 ta doppi oldim, hammasi juda chiroyli.",
        en: "Amazing quality! I bought 5 doppis for my family, all beautiful.",
        ru: "Потрясающее качество! Купил 5 доппи для семьи, все прекрасные.",
      },
      rating: 5,
    },
    {
      name: "Maria Petrova",
      text: {
        uz: "Rossiyadan buyurtma berdim, juda tez yetib keldi.",
        en: "Ordered from Russia, arrived very quickly.",
        ru: "Заказала из России, доставили очень быстро.",
      },
      rating: 5,
    },
    {
      name: "John Smith",
      text: {
        uz: "O'zbek madaniyatiga qiziqaman, bu doppilar ajoyib.",
        en: "I'm interested in Uzbek culture, these doppis are wonderful.",
        ru: "Интересуюсь узбекской культурой, эти доппи великолепны.",
      },
      rating: 5,
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Traditional Uzbek Doppi"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
                ✨{" "}
                {language === "uz"
                  ? "An'anaviy hunarmandchilik"
                  : language === "ru"
                    ? "Традиционное ремесло"
                    : "Traditional Craftsmanship"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("hero.cta.products")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2">
                {t("hero.cta.order")}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">
                  {feature.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t("products.featured")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <Button variant="outline" size="lg">
                {t("products.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {t("about.story")}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("about.storyText")}
              </p>
              <Link to="/about">
                <Button variant="outline">
                  {t("nav.about")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl shadow-lg overflow-hidden mx-auto" // ← qo'shimcha
              // yoki aniqroq: className="... max-w-4xl mx-auto"   (markazga + chetlar cheklanadi)
            >
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Doppi Craftsmanship"
                  className="w-full h-auto max-h-[500px] md:max-h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {language === "uz"
                ? "Mijozlar fikrlari"
                : language === "ru"
                  ? "Отзывы клиентов"
                  : "Customer Reviews"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "{testimonial.text[language]}"
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {language === "uz"
                ? "Hoziroq buyurtma bering!"
                : language === "ru"
                  ? "Закажите сейчас!"
                  : "Order Now!"}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {language === "uz"
                ? "O'zbek milliy hunarmandchiligi bilan tanishing"
                : language === "ru"
                  ? "Познакомьтесь с узбекским национальным ремеслом"
                  : "Experience the beauty of Uzbek craftsmanship"}
            </p>
            <Link to="/products">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                {t("hero.cta.products")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
