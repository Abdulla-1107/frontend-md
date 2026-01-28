import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';

interface OfertaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfertaModal = ({ isOpen, onClose }: OfertaModalProps) => {
  const { language } = useLanguage();

  const content = {
    uz: {
      title: 'Ommaviy Oferta',
      sections: [
        {
          title: '1. Umumiy qoidalar',
          text: 'Ushbu ommaviy oferta (keyingi o\'rinlarda "Oferta" deb yuritiladi) Doppi.uz internet-do\'koni (keyingi o\'rinlarda "Sotuvchi" deb yuritiladi) tomonidan taqdim etiladi va sotib oluvchi (keyingi o\'rinlarda "Xaridor" deb yuritiladi) bilan shartnoma tuzish shartlarini belgilaydi.',
        },
        {
          title: '2. Shartnoma predmeti',
          text: 'Sotuvchi Xaridorga saytda ko\'rsatilgan mahsulotlarni sotishni, Xaridor esa ularni sotib olishni va to\'lashni majburiyat sifatida qabul qiladi.',
        },
        {
          title: '3. Buyurtma berish tartibi',
          text: 'Xaridor buyurtmani sayt orqali yoki telefon raqami orqali berishi mumkin. Buyurtma tasdiqlangandan so\'ng, u qayta ishlashga qabul qilinadi.',
        },
        {
          title: '4. Yetkazib berish',
          text: 'Yetkazib berish Toshkent shahrida 1-2 kun, viloyatlarga 3-5 kun ichida amalga oshiriladi. Yetkazib berish narxi buyurtma miqdoriga qarab belgilanadi.',
        },
        {
          title: '5. To\'lov shartlari',
          text: 'To\'lov naqd pul yoki bank kartasi orqali amalga oshirilishi mumkin. Buyurtma qabul qilingandan so\'ng to\'lov talab qilinadi.',
        },
        {
          title: '6. Qaytarish va almashtirish',
          text: 'Mahsulotni 14 kun ichida qaytarish yoki almashtirish mumkin, agar u ishlatilmagan va original holatda bo\'lsa.',
        },
      ],
    },
    en: {
      title: 'Public Offer',
      sections: [
        {
          title: '1. General Provisions',
          text: 'This public offer (hereinafter referred to as the "Offer") is provided by Doppi.uz online store (hereinafter referred to as the "Seller") and defines the terms of the contract with the buyer (hereinafter referred to as the "Buyer").',
        },
        {
          title: '2. Subject of the Agreement',
          text: 'The Seller undertakes to sell the products displayed on the website to the Buyer, and the Buyer undertakes to purchase and pay for them.',
        },
        {
          title: '3. Ordering Procedure',
          text: 'The Buyer can place an order through the website or by phone number. Once the order is confirmed, it will be accepted for processing.',
        },
        {
          title: '4. Delivery',
          text: 'Delivery is made within 1-2 days in Tashkent, 3-5 days to regions. Delivery cost depends on the order amount.',
        },
        {
          title: '5. Payment Terms',
          text: 'Payment can be made in cash or by bank card. Payment is required after the order is accepted.',
        },
        {
          title: '6. Returns and Exchanges',
          text: 'Products can be returned or exchanged within 14 days if unused and in original condition.',
        },
      ],
    },
    ru: {
      title: 'Публичная Оферта',
      sections: [
        {
          title: '1. Общие положения',
          text: 'Настоящая публичная оферта (далее - "Оферта") предоставляется интернет-магазином Doppi.uz (далее - "Продавец") и определяет условия договора с покупателем (далее - "Покупатель").',
        },
        {
          title: '2. Предмет договора',
          text: 'Продавец обязуется продать Покупателю товары, представленные на сайте, а Покупатель обязуется их приобрести и оплатить.',
        },
        {
          title: '3. Порядок оформления заказа',
          text: 'Покупатель может оформить заказ через сайт или по номеру телефона. После подтверждения заказ принимается в обработку.',
        },
        {
          title: '4. Доставка',
          text: 'Доставка осуществляется в течение 1-2 дней по Ташкенту, 3-5 дней в регионы. Стоимость доставки зависит от суммы заказа.',
        },
        {
          title: '5. Условия оплаты',
          text: 'Оплата может быть произведена наличными или банковской картой. Оплата требуется после принятия заказа.',
        },
        {
          title: '6. Возврат и обмен',
          text: 'Товар можно вернуть или обменять в течение 14 дней, если он не использовался и находится в оригинальном состоянии.',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{currentContent.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
