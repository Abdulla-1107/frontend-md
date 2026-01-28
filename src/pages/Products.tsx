import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useProduct } from "@/hooks/api/useProduct";
import { mapProduct } from "@/lib/product";

const Products = () => {
  const { t } = useLanguage();

  const { getProduct } = useProduct();
  const { data } = getProduct({});

  const products = data?.data ? data.data.map(mapProduct) : [];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t("products.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </motion.div>

        {/* Products Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Products;
