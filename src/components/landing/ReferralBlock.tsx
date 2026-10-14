import { WhatsAppIcon } from '../WhatsAppIcon'
import { siteConfig } from '@/config/site'
import { ScrollReveal } from '../ScrollReveal'

export const ReferralBlock = () => {
  const { partner, links } = siteConfig
  const registerUrl = links.mimix.registerUrl

  return (
    <section className="py-8">
      <ScrollReveal>
        <div className="relative rounded-3xl p-6 sm:p-12 text-center overflow-hidden border border-[#00ff88]/35 bg-gradient-to-br from-[#0e1520] via-[#131c2b] to-[#0a111a] shadow-[0_0_35px_rgba(0,255,136,0.15),0_20px_50px_rgba(0,0,0,0.7)]">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none z-0"
            style={{
              background:
                'radial-gradient(circle at center, rgba(0, 255, 136, 0.08) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[820px] mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] mb-4 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse-dot" />
              <span>COMECE DO JEITO CERTO</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
              Pronto pra começar?
            </h2>

            {/* Passo 1 - Main Highlight Card */}
            <div className="bg-gradient-to-br from-[#101926]/95 to-[#090f18]/98 border-2 border-[#00ff88] rounded-2xl p-6 sm:p-9 my-6 shadow-[0_0_30px_rgba(0,255,136,0.35),0_15px_40px_rgba(0,0,0,0.8)] animate-neon-step-pulse text-center">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 flex items-center justify-center gap-2 flex-wrap">
                <span>1️⃣ Acesse o grupo de suporte gratuito</span>
              </h3>

              <p className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed max-w-[660px] mx-auto mb-6">
                No grupo você recebe os vídeos ensinando passo a passo como se cadastrar e começar a
                ganhar.
              </p>

              <div>
                <a
                  href={links.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_45px_rgba(0,255,136,0.9),0_0_70px_rgba(0,229,255,0.5)] cursor-pointer"
                  aria-label="Entrar no grupo de suporte no WhatsApp"
                >
                  <WhatsAppIcon size={22} className="shrink-0" />
                  <span>Entrar no grupo de suporte</span>
                </a>
              </div>
            </div>

            {/* Passo 2 - Plafatormas Parceiras Oficiais: Mimix e Hub */}
            <div className="bg-[#0b111a]/85 border border-[#00e5ff]/35 rounded-2xl p-5 sm:p-7 mb-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-[#00e5ff] hover:shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(0,229,255,0.15)]">
              <h3 className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2 flex items-center justify-center gap-2 flex-wrap">
                <span>
                  2️⃣ Quer adiantar? Os cadastros oficiais já estão aqui embaixo — é só acessar:
                </span>
              </h3>

              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-[620px] mx-auto mb-6">
                Não precisa copiar nada: toque no link de cada plataforma oficial para abrir seu
                cadastro gratuito.
              </p>

              {/* Grid com os 2 links: Mimix e Hub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px] mx-auto mb-4">
                {/* Mimix */}
                <div className="flex flex-col items-center justify-between p-4 rounded-xl bg-[#070c14] border border-[#00ff88]/30">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff88]">
                      Plataforma 1
                    </span>
                    <h4 className="text-base font-bold text-white">Mimix</h4>
                  </div>
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-sm text-[#021a0e] bg-gradient-to-br from-[#00ff88] to-[#00d26a] shadow-[0_0_18px_rgba(0,255,136,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-102"
                    aria-label="Ir direto para o cadastro oficial da Mimix"
                  >
                    <span>Cadastro Mimix</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 font-mono text-xs text-[#00ff88] underline underline-offset-2 break-all hover:text-[#55ffb2]"
                    title="Link oficial da Mimix"
                  >
                    {registerUrl}
                  </a>
                </div>

                {/* Hub */}
                <div className="flex flex-col items-center justify-between p-4 rounded-xl bg-[#070c14] border border-[#00e5ff]/35">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00e5ff]">
                      Plataforma 2
                    </span>
                    <h4 className="text-base font-bold text-white">Hub</h4>
                  </div>
                  <a
                    href={links.hub.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-sm text-[#021a0e] bg-gradient-to-br from-[#00e5ff] to-[#00b4d8] shadow-[0_0_18px_rgba(0,229,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-102"
                    aria-label="Ir direto para o cadastro oficial da Hub"
                  >
                    <span>Cadastro Hub</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href={links.hub.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 font-mono text-xs text-[#00e5ff] underline underline-offset-2 break-all hover:text-[#67e8f9]"
                    title="Link oficial da Hub"
                  >
                    {links.hub.registerUrl}
                  </a>
                </div>
              </div>

              {/* Aviso de segurança */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#94a3b8]">
                <span aria-hidden="true">ⓘ</span>
                <span>
                  Cadastros oficiais em <strong className="text-white">Mimix</strong> (mimix-ai.xyz)
                  e <strong className="text-white">Hub</strong> (ai.hub.xyz).
                </span>
              </div>
            </div>

            {/* Microtext */}
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-[680px] mx-auto leading-relaxed m-0">
              {partner.referralCredit}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
