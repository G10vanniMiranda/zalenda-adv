export default function Servicos() {
    return (
        <section className="flex flex-col relative min-h-screen justify-start max-w-[1280px] mx-auto bg-white">
        <div
          className="relative w-full h-[30vh] bg-cover bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `url("./image/topo.png")`,
          }}
        >
          <h2 className="absolute top-5 text-center pt-16 text-white text-3xl lg:text-5xl font-bold">
            Conheça nossos <br /> serviços
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full p-5 lg:p-10 text-black">
          <ItemBox
            data-aos="zoom-in"
            icon={<CiBag1 size={100} className="w-14 lg:w-20" />}
            title="Blindagem patrimonial"
            items={[
              { conteudoText: "Defesa estratégica em execuções fiscais" },
              { conteudoText: "Recuperação eficaz de créditos" },
              { conteudoText: "Revisão e planejamento tributário" },
              { conteudoText: "Elaboração e análise de contratos" },
              { conteudoText: "Regularização e gestão imobiliária" },
            ]}
          />

          <ItemBox
            icon={<FaHandshakeAngle size={100} className="w-14 lg:w-20" />}
            title="Trabalhista"
            items={[
              { conteudoText: "Defesa especializada em ações trabalhistas" },
              { conteudoText: "Gestão estratégica de riscos trabalhistas" },
              { conteudoText: "Acompanhamento técnico em perícias" },
            ]}
          />

          <ItemBox
            icon={<AiOutlineGlobal size={100} className="w-14 lg:w-20" />}
            title="Empresarial"
            items={[
              { conteudoText: "Registro de marcas e patentes" },
              { conteudoText: "Obtenção de licenças e alvarás" },
              { conteudoText: "Assessoria em licitações e editais" },
              { conteudoText: "Defesa em processos ambientais" },
            ]}
          />

          <ItemBox
            icon={<FaRegUser size={100} className="w-14 lg:w-20" />}
            title="Para você"
            items={[
              { conteudoText: "Benefícios de assistência social" },
              { conteudoText: "Previdência e planejamento financeiro" },
              { conteudoText: "Planos de saúde e cobertura médica" },
              { conteudoText: "Defesa em processos administrativos" },
            ]}
          />
        </div>
      </section>
    );
}