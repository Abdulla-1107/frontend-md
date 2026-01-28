import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/hooks/api/useProduct";
import { mapProduct } from "@/lib/product";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const { getOneProduct } = useProduct();

  // ✅ React Query bilan product data olish
  const { data: productData, isLoading, isError } = getOneProduct(id!);

  const product = productData ? mapProduct(productData) : null;


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t("nav.products")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("uz-UZ").format(price);

  const handleAddToCart = () => {
    addToCart(
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity,
    );
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/products">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              {t("nav.products")}
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
              <motion.img
                src={product.image}
                alt={product.name[language as Language]}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {product.name[language as Language]}
              </h1>
              <p className="text-3xl font-bold text-primary">
                {formatPrice(product.price)} {t("products.currency")}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">{t("product.description")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description[language as Language]}
              </p>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">{t("product.quantity")}</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-2xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isAdded ? "added" : "add"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className={`w-full md:w-auto ${isAdded ? "bg-green-600 hover:bg-green-600" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}`}
                  disabled={isAdded}
                >
                  {isAdded ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      {t("product.addedToCart")}
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      {t("products.addToCart")}
                    </>
                  )}
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* Total */}
            <div className="pt-6 border-t border-border">
              <div className="flex justify-between items-center text-lg">
                <span className="text-muted-foreground">
                  {t("cart.total")}:
                </span>
                <span className="font-bold text-2xl text-primary">
                  {formatPrice(product.price * quantity)}{" "}
                  {t("products.currency")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
