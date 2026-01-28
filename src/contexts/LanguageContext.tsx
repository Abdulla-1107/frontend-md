import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'uz' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.products': 'Mahsulotlar',
    'nav.about': 'Biz haqimizda',
    'nav.contact': 'Aloqa',
    'nav.faq': 'FAQ',
    'nav.cart': 'Savat',
    
    // Hero
    'hero.title': 'An\'anaviy O\'zbek Doppi',
    'hero.subtitle': 'Avlodlar davomida yaratilgan hunarmandchilik',
    'hero.cta.products': 'Mahsulotlarni ko\'rish',
    'hero.cta.order': 'Buyurtma berish',
    
    // Products
    'products.title': 'Bizning Kolleksiya',
    'products.subtitle': 'Har bir doppi o\'ziga xos va qo\'lda tikilgan',
    'products.featured': 'Tanlangan Mahsulotlar',
    'products.viewAll': 'Barchasini ko\'rish',
    'products.addToCart': 'Savatga qo\'shish',
    'products.currency': 'so\'m',
    
    // Product Detail
    'product.description': 'Tavsif',
    'product.quantity': 'Miqdori',
    'product.addedToCart': 'Savatga qo\'shildi!',
    
    // Cart
    'cart.title': 'Savatingiz',
    'cart.empty': 'Savatingiz bo\'sh',
    'cart.total': 'Jami',
    'cart.checkout': 'Buyurtma berish',
    'cart.remove': 'O\'chirish',
    'cart.continueShopping': 'Xarid qilishni davom ettirish',
    
    // Order Modal
    'order.title': 'Buyurtma berish',
    'order.fullName': 'To\'liq ism',
    'order.phone': 'Telefon raqami',
    'order.address': 'Manzil',
    'order.email': 'Email (ixtiyoriy)',
    'order.oferta': 'Men oferta shartlarini qabul qilaman',
    'order.viewOferta': 'Oferta shartlarini ko\'rish',
    'order.submit': 'Buyurtmani tasdiqlash',
    'order.success': 'Buyurtmangiz qabul qilindi!',
    'order.required': 'Majburiy maydon',
    
    // About
    'about.title': 'Biz haqimizda',
    'about.story': 'Bizning tarix',
    'about.mission': 'Bizning maqsadimiz',
    'about.storyText': "Biz — 50 yildan ortiq tajribamiz asosida milliy Doʻpichilik san'ati asosida tayyorlangan 200 dan ortiq mahsulotlarimizni mamlakatimizdagi va chet ellik mijozlarimizga taqdim qilib kelmoqdamiz",
    'about.missionText': 'Bizning maqsadimiz o\'zbek milliy hunarmandchiligini butun dunyoga tanishtirish va kelajak avlodlarga yetkazishdir.',
    
    // Contact
    'contact.title': 'Biz bilan bog\'laning',
    'contact.subtitle': 'Savollaringiz bormi? Biz bilan bog\'laning',
    'contact.name': 'Ismingiz',
    'contact.email': 'Email',
    'contact.message': 'Xabar',
    'contact.send': 'Yuborish',
    'contact.phone': 'Telefon',
    'contact.address': 'Manzil',
    'contact.addressValue': 'Toshkent shahri, Chilonzor tumani',
    
    // FAQ
    'faq.title': 'Ko\'p so\'raladigan savollar',
    'faq.subtitle': 'Eng ko\'p beriladigan savollarga javoblar',
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan',
    'footer.followUs': 'Bizni kuzating',
    
    // Common
    'common.loading': 'Yuklanmoqda...',
    'common.error': 'Xatolik yuz berdi',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.cart': 'Cart',
    
    // Hero
    'hero.title': 'Traditional Uzbek Doppi',
    'hero.subtitle': 'Craftsmanship passed through generations',
    'hero.cta.products': 'View Products',
    'hero.cta.order': 'Order Now',
    
    // Products
    'products.title': 'Our Collection',
    'products.subtitle': 'Each doppi is unique and handcrafted',
    'products.featured': 'Featured Products',
    'products.viewAll': 'View All',
    'products.addToCart': 'Add to Cart',
    'products.currency': 'sum',
    
    // Product Detail
    'product.description': 'Description',
    'product.quantity': 'Quantity',
    'product.addedToCart': 'Added to cart!',
    
    // Cart
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'cart.remove': 'Remove',
    'cart.continueShopping': 'Continue Shopping',
    
    // Order Modal
    'order.title': 'Place Order',
    'order.fullName': 'Full Name',
    'order.phone': 'Phone Number',
    'order.address': 'Address',
    'order.email': 'Email (optional)',
    'order.oferta': 'I accept the terms and conditions',
    'order.viewOferta': 'View Terms',
    'order.submit': 'Confirm Order',
    'order.success': 'Your order has been received!',
    'order.required': 'Required field',
    
    // About
    'about.title': 'About Us',
    'about.story': 'Our Story',
    'about.mission': 'Our Mission',
    'about.storyText': 'We have been preserving the art of doppi making for generations. Each doppi is handcrafted and represents a beautiful example of Uzbek culture.',
    'about.missionText': 'Our mission is to introduce Uzbek national craftsmanship to the world and pass it on to future generations.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? Get in touch with us',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.addressValue': 'Tashkent, Chilanzar district',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to the most common questions',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.followUs': 'Follow Us',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.products': 'Продукты',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.faq': 'FAQ',
    'nav.cart': 'Корзина',
    
    // Hero
    'hero.title': 'Традиционная Узбекская Доппи',
    'hero.subtitle': 'Мастерство, передаваемое из поколения в поколение',
    'hero.cta.products': 'Смотреть продукты',
    'hero.cta.order': 'Заказать сейчас',
    
    // Products
    'products.title': 'Наша Коллекция',
    'products.subtitle': 'Каждая доппи уникальна и сделана вручную',
    'products.featured': 'Рекомендуемые продукты',
    'products.viewAll': 'Смотреть все',
    'products.addToCart': 'В корзину',
    'products.currency': 'сум',
    
    // Product Detail
    'product.description': 'Описание',
    'product.quantity': 'Количество',
    'product.addedToCart': 'Добавлено в корзину!',
    
    // Cart
    'cart.title': 'Ваша корзина',
    'cart.empty': 'Ваша корзина пуста',
    'cart.total': 'Итого',
    'cart.checkout': 'Оформить заказ',
    'cart.remove': 'Удалить',
    'cart.continueShopping': 'Продолжить покупки',
    
    // Order Modal
    'order.title': 'Оформление заказа',
    'order.fullName': 'Полное имя',
    'order.phone': 'Номер телефона',
    'order.address': 'Адрес',
    'order.email': 'Email (необязательно)',
    'order.oferta': 'Я принимаю условия оферты',
    'order.viewOferta': 'Смотреть условия',
    'order.submit': 'Подтвердить заказ',
    'order.success': 'Ваш заказ принят!',
    'order.required': 'Обязательное поле',
    
    // About
    'about.title': 'О нас',
    'about.story': 'Наша история',
    'about.mission': 'Наша миссия',
    'about.storyText': 'Мы сохраняем искусство изготовления доппи на протяжении поколений. Каждая доппи изготавливается вручную и является прекрасным примером узбекской культуры.',
    'about.missionText': 'Наша миссия - познакомить мир с узбекским национальным ремеслом и передать его будущим поколениям.',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы? Свяжитесь с нами',
    'contact.name': 'Ваше имя',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    'contact.phone': 'Телефон',
    'contact.address': 'Адрес',
    'contact.addressValue': 'Ташкент, Чиланзарский район',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на самые распространенные вопросы',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.followUs': 'Подписывайтесь',
    
    // Common
    'common.loading': 'Загрузка...',
    'common.error': 'Произошла ошибка',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('doppi-language');
    return (saved as Language) || 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('doppi-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
