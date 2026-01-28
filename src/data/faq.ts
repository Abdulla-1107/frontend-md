export interface FAQItem {
  id: string;
  question: {
    uz: string;
    en: string;
    ru: string;
  };
  answer: {
    uz: string;
    en: string;
    ru: string;
  };
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: {
      uz: 'Doppi qanday materiallardan tayyorlanadi?',
      en: 'What materials are doppis made from?',
      ru: 'Из каких материалов изготавливаются доппи?',
    },
    answer: {
      uz: 'Bizning doppilarimiz yuqori sifatli ipak, paxta va tabiiy tolalardan tayyorlanadi. Naqshlar qo\'lda kashta qilinadi.',
      en: 'Our doppis are made from high-quality silk, cotton, and natural fibers. The patterns are hand-embroidered.',
      ru: 'Наши доппи изготавливаются из высококачественного шелка, хлопка и натуральных волокон. Узоры вышиты вручную.',
    },
  },
  {
    id: '2',
    question: {
      uz: 'Yetkazib berish qancha vaqt oladi?',
      en: 'How long does delivery take?',
      ru: 'Сколько времени занимает доставка?',
    },
    answer: {
      uz: 'Toshkent shahrida 1-2 kun, viloyatlarga 3-5 kun ichida yetkazib beramiz. Xalqaro yetkazib berish 7-14 kun.',
      en: 'Delivery within Tashkent takes 1-2 days, to regions 3-5 days. International delivery takes 7-14 days.',
      ru: 'Доставка по Ташкенту занимает 1-2 дня, в регионы 3-5 дней. Международная доставка занимает 7-14 дней.',
    },
  },
  {
    id: '3',
    question: {
      uz: 'Doppini qanday parvarish qilish kerak?',
      en: 'How should I care for my doppi?',
      ru: 'Как ухаживать за доппи?',
    },
    answer: {
      uz: 'Doppini qo\'lda yoki nozik rejimda yuvish tavsiya etiladi. To\'g\'ridan-to\'g\'ri quyosh nuridan saqlang va tekis joyda quritiladi.',
      en: 'Hand washing or delicate cycle is recommended. Avoid direct sunlight and dry flat.',
      ru: 'Рекомендуется ручная стирка или деликатный режим. Избегайте прямых солнечных лучей и сушите в горизонтальном положении.',
    },
  },
  {
    id: '4',
    question: {
      uz: 'O\'lchamni qanday tanlash kerak?',
      en: 'How do I choose the right size?',
      ru: 'Как выбрать правильный размер?',
    },
    answer: {
      uz: 'Bosh aylanasini o\'lchab, bizning o\'lchamlar jadvaliga qarang. Oddiy kattalar uchun 56-60 sm, bolalar uchun 50-54 sm.',
      en: 'Measure your head circumference and check our size chart. Standard adult sizes are 56-60 cm, children 50-54 cm.',
      ru: 'Измерьте окружность головы и сверьтесь с нашей таблицей размеров. Стандартные размеры для взрослых 56-60 см, для детей 50-54 см.',
    },
  },
  {
    id: '5',
    question: {
      uz: 'Qaytarish mumkinmi?',
      en: 'Can I return a product?',
      ru: 'Можно ли вернуть товар?',
    },
    answer: {
      uz: 'Ha, 14 kun ichida ishlatilmagan mahsulotni qaytarishingiz mumkin. Mahsulot original holatida bo\'lishi kerak.',
      en: 'Yes, you can return unused products within 14 days. The product must be in its original condition.',
      ru: 'Да, вы можете вернуть неиспользованный товар в течение 14 дней. Товар должен быть в оригинальном состоянии.',
    },
  },
  {
    id: '6',
    question: {
      uz: 'Maxsus buyurtma bersa bo\'ladimi?',
      en: 'Can I place a custom order?',
      ru: 'Можно ли сделать индивидуальный заказ?',
    },
    answer: {
      uz: 'Albatta! Maxsus dizayn, rang yoki o\'lcham uchun biz bilan bog\'laning. Buyurtma 7-14 kun ichida tayyorlanadi.',
      en: 'Absolutely! Contact us for custom design, color, or size. Custom orders are ready within 7-14 days.',
      ru: 'Конечно! Свяжитесь с нами для индивидуального дизайна, цвета или размера. Индивидуальные заказы готовятся за 7-14 дней.',
    },
  },
];
