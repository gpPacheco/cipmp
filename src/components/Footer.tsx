import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span className="font-semibold text-foreground">
          1º CIPMP – MedPodo Interior 2026
        </span>
        <span className="flex items-center gap-1">
          Feito com <Heart size={14} className="text-primary" /> em Franca – SP
        </span>
      </div>
    </footer>
  );
}
