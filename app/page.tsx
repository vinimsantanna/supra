'use client';

import { useEffect, useRef, useState } from 'react';
import { BorderRotate } from '@/components/ui/animated-gradient-border';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarX,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  FileX,
  FlaskConical,
  GraduationCap,
  Headphones,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  PanelsTopLeft,
  PenTool,
  PlayCircle,
  Quote,
  Share2,
  Shield,
  Stethoscope,
  Target,
  UserX,
  Users,
  Video,
  X,
  Zap,
  Sparkles,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5573988548309&text=Quero%20multiplicar%20meu%20faturamento!';
const INSTAGRAM_URL = 'https://instagram.com/supra.midia';
const LOGO_URL = '/assets/brand/supra-logo.webp';
const FOUNDER_VINI_URL = '/assets/founders/vinicius.webp';
const FOUNDER_EVE_URL = '/assets/founders/evellin.webp';

const founders = [
  {
    name: 'Vinicius Santanna',
    role: 'Estrategista de Marketing & Tecnologia',
    image: FOUNDER_VINI_URL,
    description: [
      'Vinicius é estrategista de marketing com atuação focada em posicionamento, performance e tecnologia. Sua experiência vem da operação real, onde estratégia, tráfego pago, branding e desenvolvimento de soluções digitais se conectam para gerar crescimento estruturado e previsível.',
      'Com uma visão orientada a negócio, Vinicius vai além das campanhas e atua na construção de infraestrutura digital que sustenta escala e eficiência. O foco é transformar marketing em ativo estratégico, com processos bem definidos, decisões baseadas em dados e execução precisa — sem achismo e sem ruído.',
    ],
  },
  {
    name: 'Evellin Portugal',
    role: 'Especialista em Posicionamento & Conversão',
    image: FOUNDER_EVE_URL,
    description: [
      'Evellin Portugal é formada em Comunicação Social, com MBA em Neuromarketing e MBA em Marketing e Vendas. Com mais de 10 anos de experiência em marketing digital, construiu uma carreira guiada por estratégia, dados e foco em performance.',
      'Especialista em posicionamento e conversão, transforma marcas em máquinas de vendas por meio de estratégias inteligentes e orientadas a resultado. Movida por metas, apaixonada por crescimento e obcecada por performance, acredita que marketing só faz sentido quando gera impacto real no faturamento.',
    ],
  },
] as const;

const audiences = [
  {
    title: 'Médicos e especialistas',
    description:
      'Profissionais que precisam consolidar autoridade, fortalecer reputação e transformar atenção em agenda.',
    icon: Stethoscope,
  },
  {
    title: 'Clínicas e consultórios',
    description:
      'Operações que querem previsibilidade comercial, presença digital forte e aquisição consistente de pacientes.',
    icon: Building2,
  },
  {
    title: 'Negócios da saúde',
    description:
      'Laboratórios, estética, diagnóstico e serviços correlatos que precisam crescer com estrutura, não no improviso.',
    icon: FlaskConical,
  },
] as const;

const painPoints = [
  { label: 'Agenda instável', icon: CalendarX },
  { label: 'Dependência de indicação', icon: Users },
  { label: 'Anúncios sem estratégia', icon: CircleAlert },
  { label: 'Conteúdo sem autoridade', icon: FileX },
  { label: 'Leads que não convertem', icon: UserX },
] as const;

const method = [
  {
    number: '01',
    title: 'Tráfego Pago Estratégico',
    description:
      'Meta Ads e Google Ads com segmentação inteligente, leitura de dados e otimização contínua para lead qualificado.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Conteúdo de Autoridade',
    description:
      'Planejamento editorial e roteiros que posicionam o profissional como referência, sem parecer panfleto com jaleco.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Produção Audiovisual',
    description:
      'Vídeos e imagens que traduzem confiança, sofisticação e clareza. Porque percepção também converte.',
    icon: Video,
  },
  {
    number: '04',
    title: 'Funil + Atendimento',
    description:
      'Da campanha ao agendamento: estrutura comercial, roteiro de atendimento e melhoria de conversão em toda a jornada.',
    icon: Headphones,
  },
] as const;

const services = [
  { title: 'Tráfego Pago', description: 'Meta Ads e Google Ads com foco em custo por lead e retorno real.', icon: Target },
  { title: 'Gestão de Redes Sociais', description: 'Conteúdo estratégico para autoridade, frequência e percepção de valor.', icon: Share2 },
  { title: 'Google Meu Negócio', description: 'Presença local para ser encontrado no exato momento da busca.', icon: MapPin },
  { title: 'Landing Pages', description: 'Páginas desenhadas para transformar clique em conversa qualificada.', icon: PanelsTopLeft },
  { title: 'Produção Audiovisual', description: 'Captação, roteiro e edição com padrão premium para campanhas e redes.', icon: Video },
  { title: 'Ensaio Fotográfico', description: 'Imagem profissional que fortalece posicionamento e credibilidade.', icon: Camera },
  { title: 'Identidade Visual', description: 'Sistema visual coeso para marcar presença e sair do genérico.', icon: Sparkles },
  { title: 'Treinamento de Atendimento', description: 'Estrutura comercial para converter melhor cada lead gerado.', icon: GraduationCap },
] as const;

const mediaVideos = [
  {
    title: 'Vietnam Hair',
    poster: '/assets/portfolio/poster-vietnam.webp',
    url: '/assets/videos/video-vietnam-hair.mp4',
  },
  {
    title: 'Intermed',
    poster: '/assets/portfolio/poster-intermed.webp',
    url: '/assets/videos/video-intermed.mp4',
  },
] as const;

const mediaImages = [
  '/assets/gallery/foto-semper.webp',
  '/assets/gallery/foto-pattiara.webp',
  '/assets/gallery/foto-naturally.webp',
  '/assets/gallery/foto-dra-rita.webp',
  '/assets/gallery/foto-dr-paulo-2.webp',
  '/assets/gallery/foto-dr-paulo.webp',
  '/assets/gallery/foto-dr-joao-2.webp',
  '/assets/gallery/foto-dr-joao.webp',
] as const;

const plans = [
  {
    name: 'Silver',
    description: 'Para operações que precisam organizar aquisição e presença digital com consistência.',
    highlight: false,
    features: [
      'Gestão de tráfego no Meta Ads',
      'Gestão de conteúdo estratégico',
      'Roteiros básicos para vídeos autorais',
      'Implementação de funil estratégico',
      'Acompanhamento recorrente',
    ],
  },
  {
    name: 'Gold',
    description: 'A configuração mais contratada para operações que buscam crescimento com previsibilidade.',
    highlight: true,
    features: [
      'Meta Ads + Google Ads',
      'Conteúdo com foco em autoridade',
      'Relatórios mensais com insights',
      'Produção de vídeos profissionais',
      'Otimização contínua de campanhas',
      'Treinamento de atendimento e conversão',
    ],
  },
  {
    name: 'Supra',
    description: 'Para negócios que precisam de operação mais robusta, posicionamento premium e expansão estruturada.',
    highlight: false,
    features: [
      'Operação completa de tráfego',
      'Conteúdo premium e campanhas sazonais',
      'Produção audiovisual avançada',
      'Ensaio fotográfico corporativo',
      'Estratégia de posicionamento e crescimento',
      'Treinamento comercial recorrente',
    ],
  },
] as const;

const testimonials = [
  {
    name: 'Dr. Paulo Acácio',
    role: 'Implantodontista',
    avatar: '/assets/gallery/foto-dr-paulo.webp',
    quote:
      'Entregaram o que eu precisava, meta batida em tempo recorde. E se precisar de referência pode mandar qualquer possível cliente falar comigo!',
  },
  {
    name: 'Regiane Querino',
    role: 'Clínica Intermed',
    avatar: '/assets/portfolio/poster-intermed.webp',
    quote:
      'Me entregaram tudo o que realmente estava precisando, pontualidade, responsabilidade, conteúdos riquíssimos...',
  },
  {
    name: 'Pattiara Freitas',
    role: 'Fisioterapeuta',
    avatar: '/assets/gallery/foto-pattiara.webp',
    quote:
      'Trabalhar com a Supra foi uma das melhores decisões que tomamos para o nosso negócio. Desde o início percebemos o profissionalismo, a criatividade e, principalmente, a estratégia por trás de cada ação. Não é só sobre marketing, é sobre entender a marca, posicionar da forma certa e gerar resultados de verdade. A equipe é atenciosa, comprometida e sempre traz ideias que fazem a diferença.',
  },
] as const;

const faq = [
  {
    q: 'Em quanto tempo começo a ver movimento?',
    a: 'Os primeiros sinais costumam aparecer nas primeiras semanas, mas consistência comercial vem da combinação entre oferta, posicionamento, verba e atendimento. Crescimento real não nasce de truque; nasce de estrutura.',
  },
  {
    q: 'A verba de anúncios está inclusa?',
    a: 'Não. A verba de mídia é separada da operação estratégica e é definida conforme o objetivo, região, especialidade e nível de competitividade do mercado.',
  },
  {
    q: 'Vocês fazem promessas de resultado?',
    a: 'Não trabalhamos com promessas irreais. Trabalhamos com estratégia, dados, execução e melhoria contínua. Marketing sério não vende milagre em embalagem dourada.',
  },
  {
    q: 'Como funciona o onboarding?',
    a: 'Após o fechamento, organizamos briefing, acesso às plataformas, alinhamento de metas, cronograma de produção e estrutura inicial da operação.',
  },
  {
    q: 'Tenho consultório pequeno. Faz sentido?',
    a: 'Sim, desde que exista intenção real de crescimento e capacidade mínima de operação. Estrutura pequena pode crescer muito; improviso grande costuma crescer pouco.',
  },
] as const;

export default function Page() {
  return (
    <main id="top" className="relative overflow-x-clip bg-background text-foreground">
      <SiteBackground />
      <RocketLaunchScene />
      <Header />
      <FloatingWhatsApp />
      <Hero />
      <Founders />
      <Audience />
      <Pain />
      <Method />
      <Services />
      <MediaShowcase />
      <Plans />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Método', '#metodo'],
    ['Serviços', '#servicos'],
    ['Planos', '#planos'],
    ['Provas', '#provas'],
    ['FAQ', '#faq'],
    ['Contato', '#contato'],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9c7a6]/70 bg-[#fbf7ef]/72 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <a href="#top" className="inline-flex items-center">
          <img src={LOGO_URL} alt="Supra" className="h-[72px] w-auto lg:h-24" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted transition-colors hover:text-goldSoft">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full border border-[#d9c7a6]/75 bg-white/64 p-2 text-muted transition hover:border-gold/40 hover:text-[#7b6223]">
            <Instagram className="h-4 w-4" />
          </a>
          <GoldButton href={WHATSAPP_URL}>Falar no WhatsApp</GoldButton>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-[#d9c7a6]/70 bg-white/60 p-2 lg:hidden" aria-label="Abrir menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-[#d9c7a6]/70 bg-[#fbf4e7]/95 lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm text-muted transition hover:text-goldSoft">
                {label}
              </a>
            ))}
            <GoldButton href={WHATSAPP_URL}>Falar no WhatsApp</GoldButton>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      <Container className="relative z-10 grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex rounded-full border border-gold/25 bg-gold/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-goldSoft">
            Marketing médico com direção estratégica
          </div>
          <h1 className="text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-7xl">
            A Supra não nasceu para <span className="text-gradient-gold">“fazer marketing”</span>.<br className="hidden lg:block" />
            {' '}Nasceu para gerar <span className="text-gradient-gold">crescimento real</span>.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Estratégia, execução e performance para médicos, clínicas e negócios da saúde — com foco em previsibilidade, posicionamento e conversão.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <GoldButton href={WHATSAPP_URL}>Falar no WhatsApp</GoldButton>
            <GoldButton href={WHATSAPP_URL} outline>Quero uma avaliação</GoldButton>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Dados & Performance', 'Conteúdo de Autoridade', 'Funil & Conversão', 'Audiovisual Profissional'].map((item) => (
              <span key={item} className="rounded-full border border-gold/30 bg-white/68 px-4 py-2 text-xs font-semibold text-[#7b6223] backdrop-blur-md">
                {item}
              </span>
            ))}
          </div>
        </div>
        <HeroMetricsCard />
      </Container>
    </section>
  );
}

function HeroMetricsCard() {
  return (
    <div className="relative rounded-[34px] border border-[#dcc9a4]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(251,245,234,0.72))] p-0 shadow-soft backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-10 top-6 h-24 rounded-full bg-gold/14 blur-3xl" />
      <div className="relative grid gap-4 p-6 md:grid-cols-2 md:p-8">
        {([
          ['Leads qualificados', BarChart3],
          ['Previsibilidade', BadgeCheck],
          ['Autoridade', Shield],
          ['Eficiência de mídia', Zap],
        ] as const).map(([label, Icon]) => (
          <div key={label} className="rounded-[28px] border border-[#dcc9a4]/75 bg-[#fbf4e8]/88 p-5 backdrop-blur-md">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
              <Icon className="h-6 w-6 text-gold" />
            </div>
            <p className="text-xl font-semibold text-foreground">{label}</p>
            <p className="mt-3 text-base leading-8 text-muted">
              Operação estruturada para transformar atenção em crescimento mensurável.
            </p>
          </div>
        ))}
      </div>
      <div className="relative border-t border-[#dcc9a4]/75 px-8 py-5 text-xs uppercase tracking-[0.22em] text-muted">
        Sem promessas vazias. Com processo, dados e execução.
      </div>
    </div>
  );
}

function Founders() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Fundadores"
          title="Quem está por trás da Supra"
          description="Estratégia, posicionamento, performance e conversão tratados como sistema — não como peças soltas tentando parecer sofisticadas."
        />
        <div className="mt-16 space-y-12">
          {founders.map((f, index) => (
            <ScrollReveal key={f.name} delay={index * 120} y={30} scale={0.982}>
              <BorderRotate
                animationMode="rotate-on-hover"
                animationSpeed={2.4}
                borderWidth={1.5}
                borderRadius={34}
                backgroundColor="rgba(10,10,10,0.9)"
                gradientColors={{
                  primary: '#2f250b',
                  secondary: '#d4af37',
                  accent: '#f4df9f',
                }}
                className="overflow-hidden shadow-soft"
              >
                <div className="grid items-center gap-8 p-6 backdrop-blur-xl md:p-8 lg:grid-cols-[320px_1fr]">
                  <div>
                    <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-gold/20 shadow-[12px_-10px_30px_-8px_rgba(212,175,55,0.3)]">
                        <img src={f.image} alt={f.name} className="h-full w-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-gradient-gold">{f.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">{f.role}</p>
                    <div className="mt-6 space-y-4 text-base leading-8 text-muted">
                      {f.description.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderRotate>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Audience() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Para quem é"
          title="Operação construída para o seu tipo de negócio"
          description="Atrair pacientes e contatos qualificados, fortalecer reputação e transformar presença digital em crescimento mensurável."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 90}>
                <Card className="h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Pain() {
  return (
    <section className="relative py-20 md:py-28">
      <Container className="max-w-5xl">
        <SectionHeading eyebrow="O problema" title="Reconhece algum desses cenários?" />
        <div className="mt-14 space-y-4">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.label} delay={index * 75} y={18}>
                <div className="flex items-center gap-4 rounded-[22px] border border-[#dcc9a4]/75 bg-white/68 p-5 backdrop-blur transition hover:border-gold/35 hover:bg-white/82">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal delay={160} y={18}>
          <p className="mt-12 text-center text-xl font-semibold">
            <span className="text-gradient-gold">Marketing atrai.</span> <span className="text-muted">Atendimento converte.</span>
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Metodologia"
          title="Quatro pilares que transformam presença em resultado"
          description="Quando posicionamento, mídia, conteúdo e atendimento operam juntos, o crescimento deixa de ser episódico e passa a ser estrutural."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.number} delay={index * 90}>
                <Card className="h-full">
                  <p className="text-4xl font-semibold text-gold/25">{item.number}</p>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Serviços" title="Tudo o que o seu negócio precisa para crescer com clareza" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 70}>
                <Card className="h-full p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function MediaShowcase() {
  const duplicated = [...mediaImages, ...mediaImages];
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfólio Vivo"
          title="Fotos e vídeos que elevam percepção de valor"
          description="O visual certo não serve apenas para ficar bonito. Ele organiza a narrativa da marca, sustenta autoridade e ajuda o paciente a confiar antes mesmo da primeira conversa."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <Card className="overflow-hidden p-0">
            <div className="grid gap-4 p-4 md:grid-cols-2">
              {mediaVideos.map((video, index) => (
                <ScrollReveal key={video.title} delay={index * 110} y={20} className="relative overflow-hidden rounded-[24px] border border-gold/20 bg-[#eee2cb]">
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-gold/35 bg-[#fbf7ef]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7b6223] backdrop-blur">
                    <PlayCircle className="h-3.5 w-3.5" />Vídeo
                  </div>
                  <video controls playsInline preload="metadata" poster={video.poster} className="aspect-[4/5] h-full w-full bg-[#eee2cb] object-contain">
                    <source src={video.url} type="video/mp4" />
                  </video>
                </ScrollReveal>
              ))}
            </div>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={120} scale={0.98}>
            <Card className="flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ativos visuais</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Presença premium não nasce por acidente</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              A Supra combina posicionamento, captação e direção criativa para que cada ponto de contato transmita confiança. Sim, até o frame parado precisa vender. Especialmente ele.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Autoridade visual', 'Imagem, enquadramento, narrativa e acabamento com padrão premium.'],
                ['Conversão', 'Conteúdo que ajuda o lead a confiar mais rápido e decidir melhor.'],
                ['Consistência', 'Marca coerente em tráfego, redes sociais, site e atendimento.'],
                ['Percepção de valor', 'Quando a estética conversa com a estratégia, o ticket sente.'],
              ].map(([title, text], index) => (
                <ScrollReveal key={title} delay={index * 80} y={18} className="rounded-2xl border border-[#dcc9a4]/70 bg-white/62 p-4">
                  <p className="text-sm font-semibold text-goldSoft">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </ScrollReveal>
              ))}
            </div>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent md:w-40" />
        <div className="flex w-max gap-5 animate-marquee px-4 hover:[animation-play-state:paused] md:gap-6">
          {duplicated.map((url, i) => (
            <div key={`${url}-${i}`} className="group relative w-[220px] flex-shrink-0 md:w-[280px] lg:w-[320px]">
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-gold/20 via-transparent to-gold/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[26px] border border-gold/25 bg-[#eee2cb] shadow-[0_18px_42px_rgba(102,78,31,0.14)]">
                <img src={url} alt="Cliente Supra" className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="planos" className="relative py-20 md:py-28">
      <Container className="max-w-6xl">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para o seu momento"
          description="Três formatos para diferentes estágios de operação. Todos desenhados para unir estratégia, execução e crescimento com mais previsibilidade."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 100} scale={0.978}>
              <div
                className={`relative h-full rounded-[30px] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${plan.highlight ? 'border-gold bg-white/82 shadow-[0_22px_60px_rgba(212,175,55,0.18)]' : 'border-[#dcc9a4]/75 bg-white/68 shadow-soft hover:border-gold/35'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#e7c45f] via-[#d4af37] to-[#b78617] px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-black">
                    Mais contratado
                  </div>
                )}
                <div className="flex h-full flex-col">
                  <h3 className="text-center text-3xl font-semibold text-gradient-gold">{plan.name}</h3>
                  <p className="mt-8 text-center text-base leading-8 text-muted">{plan.description}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm leading-6 text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <GoldButton href={WHATSAPP_URL} outline={!plan.highlight}>
                      Falar sobre {plan.name}
                    </GoldButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">• Verba de mídia não inclusa</p>
      </Container>
    </section>
  );
}

function Testimonials() {
  const [width, setWidth] = useState(1024);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const visible = width >= 1280 ? 3 : width >= 768 ? 2 : 1;
  const max = Math.max(0, testimonials.length - visible);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p >= max ? 0 : p + 1)), 5200);
    return () => clearInterval(id);
  }, [max]);

  return (
    <section id="provas" className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Provas"
          title="Quem confia na Supra percebe a diferença na operação"
          description="Resultado sólido costuma deixar rastro. Aqui ele aparece em relato, percepção de valor e negócios mais organizados para crescer."
        />
        <div className="mt-14">
          <div className="mb-5 flex justify-center gap-2 md:justify-end">
            <button onClick={() => setIndex((p) => Math.max(0, p - 1))} className="rounded-full border border-gold/30 bg-white/68 p-2.5 text-[#7b6223] transition hover:bg-gold/12">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => setIndex((p) => Math.min(max, p + 1))} className="rounded-full border border-gold/30 bg-white/68 p-2.5 text-[#7b6223] transition hover:bg-gold/12">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * (100 / visible)}%)` }}>
              {testimonials.map((item, index) => (
                <div key={item.name} className={`w-full flex-shrink-0 p-2 ${visible === 3 ? 'xl:w-1/3' : visible === 2 ? 'md:w-1/2' : 'w-full'}`}>
                  <ScrollReveal delay={index * 90} y={20}>
                  <Card className="flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between">
                      <img src={item.avatar} alt={item.name} className="h-16 w-16 rounded-full border border-gold/30 object-cover object-top" />
                      <Quote className="h-10 w-10 text-gold/25" />
                    </div>
                    <p className="text-base leading-8 text-foreground/92">“{item.quote}”</p>
                    <div className="mt-auto border-t border-[#dcc9a4]/70 pt-4 text-center">
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted">{item.role}</p>
                    </div>
                  </Card>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7 flex justify-center gap-2">
            {Array.from({ length: max + 1 }).map((_, d) => (
              <button key={d} onClick={() => setIndex(d)} className={`h-2.5 w-2.5 rounded-full ${d === index ? 'bg-gold' : 'bg-white/20'}`} />
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {['Kinder Klinik', 'Dra Rita Carvalho', 'Dr João Eduardo', 'Clínica Semper Odontologia'].map((item, index) => (
              <ScrollReveal key={item} delay={index * 70} y={16}>
                <div className="rounded-full border border-gold/20 bg-gold/5 px-5 py-2 text-xs font-medium text-gold/80">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <Container className="max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mt-14 space-y-3">
          {faq.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 70} y={18}>
              <details className="group rounded-[24px] border border-[#dcc9a4]/75 bg-white/68 p-6 backdrop-blur transition open:border-gold/35 open:bg-white/82">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-foreground">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-goldSoft transition group-open:rotate-180" />
                </summary>
                <p className="pt-4 text-sm leading-7 text-muted">{item.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="relative overflow-visible py-20 md:py-28">
      <Container className="max-w-4xl">
        <ScrollReveal className="relative z-10 space-y-7" y={26} scale={0.985}>
          <SectionHeading
            eyebrow="Contato"
            title="Se o seu negócio precisa crescer com direção, a Supra entra para organizar o jogo"
            description="Posicionamento, tráfego, autoridade, atendimento e conversão não precisam continuar operando como departamentos que mal se falam."
            center={false}
          />
          <div className="space-y-4">
            {[
              'Estratégia para médicos, clínicas e negócios da saúde',
              'Execução com padrão premium e lógica comercial',
              'Foco em crescimento real, não em vaidade de dashboard',
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 80} y={16}>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-gold" />
                  <span>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={160} y={18}>
            <div className="rounded-[28px] border border-gold/30 bg-[linear-gradient(180deg,rgba(255,252,244,0.9),rgba(248,239,221,0.82))] p-6 shadow-[0_18px_60px_rgba(212,175,55,0.14)]">
              <p className="font-semibold text-foreground">Operação orientada por dados</p>
              <p className="mt-2 text-sm text-muted">Sem promessa vazia. Sem ruído. Sem marketing de fumaça com verniz dourado.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={220} y={18}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <GoldButton href={WHATSAPP_URL}>Quero falar com a Supra</GoldButton>
              <GoldButton href={WHATSAPP_URL} outline>Quero uma avaliação</GoldButton>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function Footer() {
  const links = ['#metodo', '#servicos', '#planos', '#provas', '#faq', '#contato'];
  return (
    <footer id="site-footer" className="relative border-t border-[#d9c7a6]/70 bg-[#f4ecdd]/78 py-14 backdrop-blur-xl">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 border-b border-[#d9c7a6]/70 pb-10 md:flex-row md:items-start">
          <a href="#top" className="inline-flex items-center">
            <img src={LOGO_URL} alt="Supra" className="h-16 w-auto" />
          </a>
          <p className="max-w-sm text-center text-sm leading-7 text-muted md:text-left">
            Estratégia, posicionamento e performance para negócios da saúde que precisam crescer com consistência.
          </p>
          <nav className="flex flex-wrap justify-center gap-5 text-xs font-medium tracking-[0.18em] text-muted">
            {links.map((href) => (
              <a key={href} href={href} className="transition hover:text-goldSoft">
                {href.replace('#', '').toUpperCase()}
              </a>
            ))}
            <a href="#" className="transition hover:text-goldSoft">TERMOS</a>
            <a href="#" className="transition hover:text-goldSoft">PRIVACIDADE</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full border border-[#d9c7a6]/75 bg-white/65 p-2 text-[#7b6223] transition hover:border-gold/35 hover:bg-gold/12">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-[#d9c7a6]/75 bg-white/65 p-2 text-[#7b6223] transition hover:border-gold/35 hover:bg-gold/12">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 text-center text-xs leading-7 text-muted md:flex-row md:items-center md:justify-between md:text-left">
          <p>A Supra atua em marketing e comunicação. Não prometemos resultados clínicos ou garantias irreais.</p>
          <p className="mt-1">© 2026 SUPRA. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-[#f6eddc]/94 px-4 py-3 text-sm font-semibold text-[#6d551f] backdrop-blur-xl transition hover:border-gold/60 hover:bg-[#efe2c7]"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function GoldButton({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60';
  const styles = outline
    ? 'border border-gold/35 bg-white/68 text-[#6d551f] backdrop-blur hover:border-gold hover:bg-gold/12 hover:text-foreground'
    : 'bg-gradient-to-r from-[#e7c45f] via-[#d4af37] to-[#b78617] text-black shadow-[0_10px_28px_rgba(212,175,55,0.18)] hover:translate-y-[-1px]';
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] border border-[#dcc9a4]/75 bg-white/68 p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold/35 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_32%)] opacity-60 transition duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, center = true }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return (
    <ScrollReveal y={18} scale={0.992}>
      <div className={`${center ? 'text-center' : 'text-left'} mx-auto max-w-3xl`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-7 text-muted">{description}</p>}
      </div>
    </ScrollReveal>
  );
}

function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars = Array.from({ length: 260 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.2,
      a: Math.random() * 0.55 + 0.2,
      s: Math.random() * 0.02 + 0.004,
    }));

    const streaks = Array.from({ length: 8 }, () => ({
      progress: Math.random() * 1.2 - 0.2,
      speed: 0.00045 + Math.random() * 0.00065,
      x: -0.18 + Math.random() * 1.1,
      y: 0.35 + Math.random() * 0.7,
      len: 18 + Math.random() * 24,
      size: 0.8 + Math.random() * 0.9,
      alpha: 0.16 + Math.random() * 0.18,
    }));

    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const fullHeight = Math.max(document.body.scrollHeight, window.innerHeight);
      canvas.width = window.innerWidth * dpr;
      canvas.height = fullHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${fullHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawConstellationLines = (w: number, h: number) => {
      ctx.save();
      ctx.strokeStyle = 'rgba(176,138,56,0.12)';
      ctx.lineWidth = 1;
      for (let i = 0; i < stars.length; i += 18) {
        const a = stars[i];
        const b = stars[(i + 7) % stars.length];
        const c = stars[(i + 11) % stars.length];
        ctx.beginPath();
        ctx.moveTo(a.x * w, a.y * h);
        ctx.lineTo(b.x * w, b.y * h);
        ctx.lineTo(c.x * w, c.y * h);
        ctx.stroke();
      }
      ctx.restore();
    };

    const render = () => {
      const w = window.innerWidth;
      const h = Math.max(document.body.scrollHeight, window.innerHeight);
      frame += 1;
      ctx.clearRect(0, 0, w, h);

      stars.forEach((star, i) => {
        const twinkle = 0.16 + Math.sin(frame * star.s + i) * 0.16;
        ctx.fillStyle = `rgba(118,96,58,${Math.max(0.12, star.a * 0.42 + twinkle * 0.4)})`;
        ctx.beginPath();
        ctx.arc(star.x * w, star.y * h, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      drawConstellationLines(w, h);

      streaks.forEach((streak) => {
        streak.progress += streak.speed;

        if (streak.progress >= 1.18) {
          streak.progress = -0.18 - Math.random() * 0.35;
          streak.x = -0.2 + Math.random() * 0.95;
          streak.y = 0.45 + Math.random() * 0.6;
          streak.len = 18 + Math.random() * 24;
          streak.size = 0.8 + Math.random() * 0.9;
          streak.speed = 0.00045 + Math.random() * 0.00065;
          streak.alpha = 0.16 + Math.random() * 0.18;
        }

        const startX = streak.x * w + streak.progress * w * 0.78;
        const startY = streak.y * h - streak.progress * h * 0.72;
        const tailX = startX - streak.len;
        const tailY = startY + streak.len * 0.72;

        const grad = ctx.createLinearGradient(startX, startY, tailX, tailY);
        grad.addColorStop(0, `rgba(255,245,220,${Math.min(1, streak.alpha + 0.08)})`);
        grad.addColorStop(0.24, `rgba(224,183,84,${streak.alpha * 0.72})`);
        grad.addColorStop(1, 'rgba(212,175,55,0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = streak.size;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        const glow = ctx.createRadialGradient(startX, startY, 0, startX, startY, 7);
        glow.addColorStop(0, `rgba(255,250,235,${Math.min(1, streak.alpha + 0.06)})`);
        glow.addColorStop(0.55, `rgba(224,183,84,${streak.alpha * 0.45})`);
        glow.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(startX, startY, 3.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,248,232,${Math.min(1, streak.alpha + 0.1)})`;
        ctx.beginPath();
        ctx.arc(startX, startY, streak.size * 1.05, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(render);
    };

    resize();
    render();

    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    window.addEventListener('resize', resize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,251,244,0.76),rgba(245,235,220,0.88)),radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_22%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(212,175,55,0.12),transparent_16%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.38),transparent_18%),radial-gradient(circle_at_24%_72%,rgba(212,175,55,0.09),transparent_18%),radial-gradient(circle_at_90%_85%,rgba(212,175,55,0.1),transparent_18%)]" />
    </div>
  );
}

function RocketLaunchScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const trigger = document.getElementById('provas');
    const footer = document.getElementById('site-footer');
    if (!trigger || !footer) return;

    let engaged = false;
    let launched = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    let raf = 0;
    let t = 0;
    let launchProgress = 0;

    type SmokeParticle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      grow: number;
    };

    const smoke: SmokeParticle[] = Array.from({ length: 84 }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      life: 0,
      grow: 0,
    }));

    const resetSmoke = (p: SmokeParticle, x: number, y: number) => {
      p.x = x + (Math.random() - 0.5) * 18;
      p.y = y + Math.random() * 16;
      p.vx = (Math.random() - 0.5) * 0.7 + 0.18;
      p.vy = 3.8 + Math.random() * 3.2;
      p.r = 8 + Math.random() * 12;
      p.life = 0.98;
      p.grow = 0.22 + Math.random() * 0.28;
    };

    const drawRocket = (x: number, y: number, scale: number, bob: number) => {
      ctx.save();
      ctx.translate(x, y + bob);
      ctx.rotate(0);
      ctx.scale(scale, scale);

      const bodyGlow = ctx.createRadialGradient(0, -10, 8, 0, -10, 80);
      bodyGlow.addColorStop(0, 'rgba(255,215,120,0.18)');
      bodyGlow.addColorStop(1, 'rgba(255,215,120,0)');
      ctx.fillStyle = bodyGlow;
      ctx.beginPath();
      ctx.arc(0, 0, 72, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#b44a22';
      ctx.beginPath();
      ctx.moveTo(-16, 28);
      ctx.lineTo(-44, 56);
      ctx.lineTo(-18, 8);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(16, 28);
      ctx.lineTo(44, 56);
      ctx.lineTo(18, 8);
      ctx.closePath();
      ctx.fill();

      const bodyGrad = ctx.createLinearGradient(0, -74, 0, 30);
      bodyGrad.addColorStop(0, '#f2efe7');
      bodyGrad.addColorStop(0.55, '#d9d2c6');
      bodyGrad.addColorStop(1, '#9f9b96');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.moveTo(0, -84);
      ctx.quadraticCurveTo(26, -42, 24, 4);
      ctx.lineTo(18, 38);
      ctx.lineTo(-18, 38);
      ctx.lineTo(-24, 4);
      ctx.quadraticCurveTo(-26, -42, 0, -84);
      ctx.closePath();
      ctx.fill();

      const noseGrad = ctx.createLinearGradient(0, -92, 0, -48);
      noseGrad.addColorStop(0, '#d78c2d');
      noseGrad.addColorStop(1, '#8f3b14');
      ctx.fillStyle = noseGrad;
      ctx.beginPath();
      ctx.moveTo(0, -102);
      ctx.lineTo(18, -58);
      ctx.lineTo(-18, -58);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#2a4a5b';
      ctx.beginPath();
      ctx.arc(0, -16, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#9fd5ec';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.strokeStyle = 'rgba(70,70,70,0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-12, -42);
      ctx.quadraticCurveTo(0, -35, 12, -42);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-16, -2);
      ctx.quadraticCurveTo(0, 6, 16, -2);
      ctx.stroke();

      const flameGrad = ctx.createLinearGradient(0, 38, 0, 132);
      flameGrad.addColorStop(0, 'rgba(255,250,220,0.98)');
      flameGrad.addColorStop(0.3, 'rgba(255,186,80,0.96)');
      flameGrad.addColorStop(0.75, 'rgba(214,84,26,0.75)');
      flameGrad.addColorStop(1, 'rgba(214,84,26,0)');
      ctx.fillStyle = flameGrad;
      ctx.beginPath();
      ctx.moveTo(-9, 38);
      ctx.quadraticCurveTo(-20, 84, -8, 134);
      ctx.quadraticCurveTo(0, 116 + Math.sin(t * 5) * 10, 8, 134);
      ctx.quadraticCurveTo(20, 84, 9, 38);
      ctx.closePath();
      ctx.fill();

      const innerFlame = ctx.createLinearGradient(0, 38, 0, 110);
      innerFlame.addColorStop(0, 'rgba(255,255,245,1)');
      innerFlame.addColorStop(0.5, 'rgba(255,219,116,0.9)');
      innerFlame.addColorStop(1, 'rgba(255,160,46,0)');
      ctx.fillStyle = innerFlame;
      ctx.beginPath();
      ctx.moveTo(-4, 38);
      ctx.quadraticCurveTo(-10, 78, -2, 112);
      ctx.quadraticCurveTo(0, 104 + Math.sin(t * 8) * 6, 2, 112);
      ctx.quadraticCurveTo(10, 78, 4, 38);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      if (engaged) {
        launched = true;
        launchProgress = Math.min(1, launchProgress + 0.0029);
      }

      if (!launched) {
        raf = requestAnimationFrame(render);
        return;
      }

      const progress = launchProgress;
      const shaking = progress < 0.16;
      const jitter = shaking ? Math.sin(t * 34) * 5.2 + Math.sin(t * 21) * 2.2 : Math.sin(t * 8) * 0.9;
      const footerRect = footer.getBoundingClientRect();
      const footerDocTop = footerRect.top + window.scrollY;
      const footerAnchorY = footerDocTop + Math.min(footerRect.height * 0.22, 120);
      const rocketBaseX = w < 768 ? w * 0.58 : w < 1280 ? w * 0.72 : w * 0.78;
      const rocketX = rocketBaseX + (shaking ? Math.sin(t * 24) * 2.4 : Math.sin(t * 8) * 0.5) - progress * 12;
      const rocketDocY = footerAnchorY - progress * (footerAnchorY + 340);
      const rocketY = rocketDocY - window.scrollY;
      const bob = jitter - progress * 12;
      const plumeBaseY = rocketY + 118;
      const rocketVisible = progress < 0.995 && rocketY < h + 220 && rocketY > -320;

      smoke.forEach((p) => {
        if (p.life <= 0 && rocketVisible) resetSmoke(p, rocketX, plumeBaseY);

        p.x += p.vx * (engaged ? 1.25 : 0.8);
        p.y += p.vy * (engaged ? 1.55 : 1);
        p.r += p.grow;
        p.life -= engaged ? 0.016 : 0.012;

        const alpha = Math.max(0, p.life * (engaged ? 0.34 : 0.22));
        const smokeGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        smokeGrad.addColorStop(0, `rgba(255,230,180,${alpha})`);
        smokeGrad.addColorStop(0.35, `rgba(225,176,96,${alpha * 0.88})`);
        smokeGrad.addColorStop(0.68, `rgba(144,108,78,${alpha * 0.52})`);
        smokeGrad.addColorStop(1, 'rgba(30,22,18,0)');
        ctx.fillStyle = smokeGrad;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.r * 0.88, p.r * 1.28, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      if (rocketVisible) {
        drawRocket(rocketX, rocketY, 1.02, bob);
      }

      const activeSmoke = smoke.some((p) => p.life > 0.02);
      if (progress >= 1 && !rocketVisible && !activeSmoke) {
        return;
      }

      raf = requestAnimationFrame(render);
    };

    resize();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !launched) engaged = true;
      },
      { threshold: 0.12 }
    );
    io.observe(trigger);
    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    render();

    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-visible"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
