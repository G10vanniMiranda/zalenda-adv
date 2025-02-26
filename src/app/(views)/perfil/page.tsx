"use client";
import { Zap } from "@/components/zap/Zap";
import Image from "next/image";

export default function Perfil() {
  return (
    <section className="flex flex-col items-center justify-around relative h-screen w-full md:w-screen pb-10">
      <div className="flex flex-col md:flex-row justify-around items-center md:px-20 px-2 py-10">
        <div className="flex flex-col items-center lg:w-[400px] w-[90%] md:w-[50%]">
          <Image
            data-aos="fade-down"
            src="/image/perfil.png"
            alt="Foto de perfil"
            width={250}
            height={0}
            className="w-[300px] md:w-[300px] lg:w-[400px]"
          />

          <h2
            data-aos="fade-left"
            className="text-zinc-50 animate-pulse bg-zinc-950/50 p-3 rounded-md text-2xl lg:text-3xl 
           font-bold mt-3 text-center"
          >
            Iago Zalenda
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="w-[90%] lg:w-[50%] text-white bg-slate-900/70 p-8 
          flex flex-col gap-6 rounded-lg text-justify shadow-lg "
        >
          <p data-aos="fade-up" data-aos-deley="900">
            Zalenda Advogados é uma sociedade de advogados sediada em Porto
            Velho-RO, com atuação online em todo o território nacional,
            fortalecida por parcerias estratégicas. Fundado em 2015 por Iágo
            Zalenda, o escritório nasceu da expertise adquirida pelo
            sócio-fundador durante sua trajetória em renomados escritórios de
            advocacia, consolidando-se como uma referência no mercado jurídico.
            Hoje, conta com uma equipe de profissionais qualificados, dedicados
            a atuar de forma especializada e proativa na defesa dos interesses
            de seus clientes.
          </p>
          <p data-aos="fade-up" data-aos-deley="1700" className="">
            Com vasta experiência no mercado financeiro, adquirida em
            instituições de destaque, Iágo Zalenda traz ao escritório um
            profundo conhecimento em operações bancárias e demandas empresariais
            de diversos setores, com ênfase em Direito Bancário, agronegócio,
            comércio e indústria. Essa expertise fortalece o posicionamento do
            Zalenda Advogados em questões complexas envolvendo instituições
            financeiras e negócios corporativos.
          </p>
          <p data-aos="fade-up" data-aos-deley="1900" className="">
            Aliando uma estrutura robusta e tecnologia de ponta, o escritório
            oferece serviços jurídicos de excelência em todo o Brasil,
            garantindo eficiência, redução de custos e soluções personalizadas.
            O compromisso com a ética, a transparência e a confiabilidade
            consolida o Zalenda Advogados como uma referência em advocacia
            empresarial e bancária, sempre pautado pela cooperação e pela busca
            de resultados excepcionais.
          </p>
        </div>
      </div>

      <Zap />
    </section>
  );
}
