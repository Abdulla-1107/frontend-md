import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/data/products';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/products/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name[language as Language]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Quick Add Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Button
              onClick={handleAddToCart}
              className={`w-full ${
                isAdded
                  ? 'bg-green-600 hover:bg-green-600'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
              }`}
              size="sm"
            >
              {isAdded ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  {t('product.addedToCart')}
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  {t('products.addToCart')}
                </>
              )}
            </Button>
          </motion.div>

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
            {product.name[language as Language]}
          </h3>
          <p className="text-primary font-semibold">
            {formatPrice(product.price)} {t('products.currency')}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
