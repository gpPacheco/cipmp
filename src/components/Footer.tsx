import Image from "next/image";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-3">
          <Image
            src="/logo_evento.png"
            alt="Logo do congresso de saúde, medicina preventiva e bem-estar CIPMP 2026"
            width={132}
            height={42}
            className="h-8 w-auto"
          />
          <span className="font-semibold text-foreground">
            1º CIPMP 2026
          </span>
        </div>
        <span className="flex items-center gap-1">
          Feito com <Heart size={14} className="text-primary" /> em Franca – SP
        </span>
      </div>
      <p className="mt-6 text-center text-xs text-muted max-w-4xl mx-auto leading-relaxed">
        Congresso de saúde e simpósio médico voltado para atualização profissional,
        medicina preventiva, cuidados paliativos, saúde integral e qualidade de
        vida no interior de São Paulo.
      </p>
    </footer>
  );
}
