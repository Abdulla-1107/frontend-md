import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@/assets/about-craft.jpg";
import heroImage from "@/assets/hero-doppi.jpg";

const About = () => {
  const { language, t } = useLanguage();

  const timeline = [
    {
      year: "1990",
      title: {
        uz: "Oila an'anasi",
        en: "Family Tradition",
        ru: "Семейная традиция",
      },
      description: {
        uz: "Bobomiz Toshkentda doppi tikishni o'rganib, oilaviy an'anani boshladi.",
        en: "Our grandfather learned doppi making in Tashkent, starting the family tradition.",
        ru: "Наш дедушка научился шить доппи в Ташкенте, положив начало семейной традиции.",
      },
    },
    {
      year: "2005",
      title: {
        uz: "Ustaxona ochildi",
        en: "Workshop Opened",
        ru: "Открытие мастерской",
      },
      description: {
        uz: "Oilaviy ustaxonamiz ochildi va mahalliy bozorlarda sotuvni boshladik.",
        en: "Our family workshop opened and we started selling at local markets.",
        ru: "Открылась наша семейная мастерская, и мы начали продавать на местных рынках.",
      },
    },
    {
      year: "2018",
      title: {
        uz: "Onlayn do'kon",
        en: "Online Store",
        ru: "Интернет-магазин",
      },
      description: {
        uz: "Internet-do'konimizni ochdik va butun dunyo bo'ylab yetkazib berishni boshladik.",
        en: "We launched our online store and started shipping worldwide.",
        ru: "Мы запустили интернет-магазин и начали доставку по всему миру.",
      },
    },
    {
      year: "2024",
      title: { uz: "Bugungi kun", en: "Today", ru: "Сегодня" },
      description: {
        uz: "50 dan ortiq turdagi doppilarni taklif qilamiz va minglab mijozlarga xizmat ko'rsatamiz.",
        en: "We offer over 50 types of doppis and serve thousands of customers.",
        ru: "Мы предлагаем более 50 видов доппи и обслуживаем тысячи клиентов.",
      },
    },
  ];

  const values = [
    {
      title: { uz: "Sifat", en: "Quality", ru: "Качество" },
      description: {
        uz: "Faqat eng yaxshi materiallardan foydalanamiz va har bir doppini sinchkovlik bilan tekshiramiz.",
        en: "We use only the finest materials and carefully inspect every doppi.",
        ru: "Мы используем только лучшие материалы и тщательно проверяем каждую доппи.",
      },
    },
    {
      title: { uz: "An'ana", en: "Tradition", ru: "Традиция" },
      description: {
        uz: "Avlodlar davomida o'rnatilgan usullarni saqlab, zamonaviy texnologiyalar bilan boyitamiz.",
        en: "We preserve techniques established over generations while embracing modern technology.",
        ru: "Мы сохраняем техники, установленные поколениями, одновременно внедряя современные технологии.",
      },
    },
    {
      title: { uz: "Hunarmandchilik", en: "Craftsmanship", ru: "Мастерство" },
      description: {
        uz: "Har bir doppi qo'lda tikiladi va unikal naqshlar bilan bezatiladi.",
        en: "Every doppi is handmade and decorated with unique patterns.",
        ru: "Каждая доппи изготавливается вручную и украшается уникальными узорами.",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Doppi"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("about.storyText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {t("about.story")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.storyText")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.missionText")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl shadow-lg overflow-hidden" // overflow-hidden → rasm chiqib ketmaydi
            >
              <img
                src={aboutImage}
                alt="Doppi Craftsmanship"
                className="w-full h-auto max-h-[500px] md:max-h-[600px] object-cover" // ← max balandlik qo‘y
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          >
            {language === "uz"
              ? "Bizning tarix"
              : language === "ru"
                ? "Наша история"
                : "Our History"}
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-xl mb-2">
                    {item.title[language]}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          >
            {language === "uz"
              ? "Bizning qadriyatlarimiz"
              : language === "ru"
                ? "Наши ценности"
                : "Our Values"}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">
                    {index === 0 ? "⭐" : index === 1 ? "🏛️" : "✋"}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-4">
                  {value.title[language]}
                </h3>
                <p className="text-muted-foreground">
                  {value.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
