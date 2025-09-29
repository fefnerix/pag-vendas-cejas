import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import OptimizedSocialProof from "@/components/OptimizedSocialProof";
import StepsSection from "@/components/StepsSection";
import MistakesSection from "@/components/MistakesSection";
import BenefitsSection from "@/components/BenefitsSection";
import IncludesSection from "@/components/IncludesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import OptimizedFAQ from "@/components/OptimizedFAQ";
import FinalUrgencySection from "@/components/FinalUrgencySection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import ScarcityBar from "@/components/ScarcityBar";

const Index = () => {
  return (
    <>
      <main className="min-h-screen w-full overflow-x-hidden" role="main">
        {/* 1. Hero com promessa direta + botão */}
        <HeroSection />
        
        {/* 2. Oferta clara com valor original e preço com escassez (contador 1) */}
        <ScarcityBar />
        
        <PricingSection />
        
        {/* 3. Prova social leve (print de aluna + selo 4.9 + número de alunas) */}
        <OptimizedSocialProof />
        
        {/* 4. Método explicado (passo 1, 2, 3 com ícones ou bullets) */}
        <StepsSection />
        
        {/* 5. Erro comum de iniciantes + como o método resolve */}
        <MistakesSection />
        
        {/* 6. Benefícios concretos (bullets rápidos e diretos) */}
        <BenefitsSection />
        
        {/* 7. Conteúdo incluso (módulos e bônus agrupados) */}
        <IncludesSection />
        
        {/* 8. Garantia visual + selos de segurança (uma única vez) */}
        <GuaranteeSection />
        
        {/* 9. FAQ enxuto (máx 5 perguntas não óbvias) */}
        <OptimizedFAQ />
        
        {/* 10. Última chamada com botão e contador final */}
        <FinalUrgencySection />
        
        {/* 11. Rodapé com links institucionais */}
        <Footer />
      </main>
      <FloatingCTA />
    </>
  );
};

export default Index;
