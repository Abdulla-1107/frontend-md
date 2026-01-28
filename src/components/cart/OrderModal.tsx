import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react"; // Loader2 qo'shildi
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OfertaModal } from "./OfertaModal";
import { useCreateOrder } from "@/hooks/api/useOrder";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  phone: string;
  address: string;
  email: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
}

export const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const { items, clearCart, totalPrice } = useCart();
  const { t } = useLanguage();
  const { mutate: createOrder, isPending: isSubmitting } = useCreateOrder(); // ← mutationdan foydalanamiz

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    address: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [ofertaAccepted, setOfertaAccepted] = useState(false);
  const [isOfertaOpen, setIsOfertaOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = t("order.required");
    if (!formData.phone.trim()) newErrors.phone = t("order.required");
    if (!formData.address.trim()) newErrors.address = t("order.required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !ofertaAccepted) return;

    const orderPayload = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      email: formData.email.trim() || undefined,
      oferta: true, // backend talab qilsa true yuboramiz
      totalPrice: totalPrice, // agar backend’da kerak bo'lsa
      items: items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };

    createOrder(orderPayload, {
      onSuccess: (data) => {
        // muvaffaqiyatli bo'lsa
        setIsSuccess(true);
        setTimeout(() => {
          clearCart();
          setIsSuccess(false);
          setFormData({ fullName: "", phone: "", address: "", email: "" });
          setOfertaAccepted(false);
          onClose();
        }, 2200); // animatsiya uchun biroz ko'proq vaqt
      },
      onError: (error) => {
        console.error("Order creation failed:", error);
        // Bu yerda user’ga xato ko'rsatish mumkin (toast yoki alert)
        alert(
          t("order.error") ||
            "Buyurtma yuborishda xato yuz berdi. Iltimos qayta urinib ko'ring.",
        );
      },
    });
  };

  const handleInputChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {t("order.title")}
            </DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto flex items-center justify-center mb-4"
                >
                  <Check className="h-10 w-10 text-green-600" />
                </motion.div>
                <p className="text-lg font-medium">{t("order.success")}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("order.orderReceived")}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="fullName">{t("order.fullName")} *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange("fullName")}
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">{t("order.phone")} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    placeholder="+998 XX XXX XX XX"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address">{t("order.address")} *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange("address")}
                    className={errors.address ? "border-destructive" : ""}
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">{t("order.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                  />
                </div>

                {/* Order Summary */}
                <div className="py-4 border-t border-b border-border">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>{t("cart.total")}:</span>
                    <span className="text-primary">
                      {formatPrice(totalPrice)} {t("products.currency")}
                    </span>
                  </div>
                </div>

                {/* Oferta */}
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="oferta"
                    checked={ofertaAccepted}
                    onCheckedChange={(checked) => setOfertaAccepted(!!checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="oferta"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("order.oferta")} *
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsOfertaOpen(true)}
                      className="text-sm text-primary hover:underline text-left"
                    >
                      {t("order.viewOferta")}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  size="lg"
                  disabled={isSubmitting || !ofertaAccepted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t("order.submitting")}
                    </>
                  ) : (
                    t("order.submit")
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <OfertaModal
        isOpen={isOfertaOpen}
        onClose={() => setIsOfertaOpen(false)}
      />
    </>
  );
};
