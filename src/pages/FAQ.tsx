import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { faqItems } from '@/data/faq';

const FAQ = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <AccordionItem
                  value={item.id}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {item.question[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer[language]}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-2xl bg-card border border-border max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold mb-2">
            {language === 'uz'
              ? "Savolingizga javob topmadingizmi?"
              : language === 'ru'
              ? 'Не нашли ответ на свой вопрос?'
              : "Didn't find your answer?"}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'uz'
              ? 'Biz bilan bog\'laning, yordam beramiz!'
              : language === 'ru'
              ? 'Свяжитесь с нами, мы поможем!'
              : "Contact us, we'll help!"}
          </p>
          <a href="/contact" className="text-primary font-medium hover:underline">
            {t('nav.contact')} →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
