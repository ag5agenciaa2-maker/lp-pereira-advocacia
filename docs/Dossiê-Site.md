Quero que você crie o Site institucional "Dossiê Cobalto — Editorial Vertical" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.

REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.

IDENTIDADE VISUAL BASE:

Paleta:

--azul #17459C — Azul Cobalto (primária, extraída do fundo da logo)
--azul-profundo #004996 — Azul do losango interno (extraída da logo)
--azul-noite #0A2456 — derivada, para rodapé e blocos de profundidade
--dourado #D5B463 — Dourado do "P" (extraída da logo) — uso fino, apenas filetes/detalhes
--dourado-claro **
#E3CB8C` — derivada, hover
--nogueira #4A331F — madeira nogueira (extraída das fotos internas reais)
--pedra #F4F2EE — base clara (derivada do mármore cinza da fachada)
--pedra-2 #E7E3DC — superfícies/cards
--grafite #161A1F — texto de títulos
--cinza-texto #5A6068 — corpo de texto
--branco #FFFFFF

Tipografia (Google Fonts):

Display/Títulos: Syne (700, 800) — geométrica larga, brutalista-elegante
Corpo: IBM Plex Sans (400, 500, 600) — institucional, com DNA documental/jurídico
Numeração e labels: IBM Plex Mono (500) — usada em 01–05, eyebrows e dados

Estilo: Editorial institucional claro com blocos sólidos de cor. Base clara em pedra/off-white, blocos cobalto de sangria total, madeira nogueira como bloco de calor, dourado apenas em filetes de 1–2px e underlines. Motivo gráfico proprietário: o losango (quadrado rotacionado 45°) da logo, usado como máscara de imagem, marcador de lista e elemento decorativo — nunca como ícone genérico.

Sensação: firmeza, clareza, proximidade de bairro. Advocacia multiárea acessível, com acabamento sério — não é escritório de elite corporativa nem escritório popular.

LAYOUT ESCOLHIDO:

Hero (opção C — Editorial): tipografia dominando ~70% da tela. Título em Syne 800, clamp(3.2rem, 9vw, 9.5rem), line-height: 0.88, quebrado em 4 linhas empilhadas e alinhadas à esquerda ("PEREIRA / ADVOCACIA / EM SANTA CRUZ / DESDE 2014"), sobre fundo --pedra. A palavra "ADVOCACIA" recebe fill --azul. Imagem pequena flutuante (retrato do advogado, ChatGPT_Image_20_de_ago...png) posicionada à direita, ~26vw de largura, mascarada em losango via clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%) suavizado, deslocada verticalmente para quebrar o alinhamento da baseline do título. Bloco cobalto sólido sangrando pela borda direita atrás da imagem. Sem fundo escuro, sem centralização. Referência estrutural: hero empilhado do MAAT (H1 7.6em/1, 4 linhas).
Serviços (opção F — Numeração grande): 5 linhas horizontais full-width, uma por área do Direito. Cada linha: 01 em IBM Plex Mono 500 (~4rem, cor --pedra-2, atrás do texto) + título em Syne 700 (~2.4rem) + descrição curta em IBM Plex Sans + seta. Linha divisória de 1px --pedra-2 entre cada. Sem ícones, sem cards, sem 3 colunas. Referência: seção "our expertises" do MAAT (numeração 01–08 em lista vertical).
Depoimentos (opção A — Marquee infinito horizontal): duas faixas horizontais em direções opostas (linha 1 → esquerda, linha 2 → direita), cards de 380px com texto real da avaliação + nome + tempo. Fundo --azul sólido, cards em --branco. Acima das faixas, bloco fixo com logo oficial do Google + 4,9 em Syne 800 (~6rem) + 5 estrelas + "30 avaliações no Google" + botão para o perfil.
Sobre/Credenciais (opção A — Counters animados + texto curto): 4 counters em Syne 800 (~5rem) sobre fundo --nogueira: +10 (anos de atuação) · 4,9 (nota no Google) · 30 (avaliações) · 5 (áreas do Direito). Texto institucional curto de 2 parágrafos ao lado, em coluna estreita (max 46ch). Referência: "key figures" do MAAT.

ANIMAÇÕES DO PROJETO (do breakdown Webflow):

Linhas do H1 do hero → de translateY(105%) para translateY(0) em 900ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: load, stagger: sim (120ms entre linhas), com overflow:hidden no wrapper de cada linha (máscara de revelação, sem fade)
Imagem flutuante do hero → de scale(1.14) + opacity 0 para scale(1) + opacity 1 em 1400ms, easing: cubic-bezier(0.22, 1, 0.36, 1), trigger: load, delay 400ms, stagger: não
Bloco cobalto do hero → de scaleX(0) (origin right) para scaleX(1) em 1100ms, easing: cubic-bezier(0.76, 0, 0.24, 1), trigger: load, stagger: não
Barra marquee de áreas/atendimento → de translateX(0) para translateX(-50%) em 32000ms, easing: linear, trigger: load, loop infinito, pausa no hover (animation-play-state: paused)
Linhas de serviço (01–05) → de translateY(38px) + opacity 0 para translateY(0) + opacity 1 em 700ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: IntersectionObserver (threshold 0.2), stagger: sim (90ms)
Hover na linha de serviço → número 01 de --pedra-2 para --dourado + underline scaleX(0)→scaleX(1) (origin left) + título translateX(0)→translateX(14px) em 420ms, easing: cubic-bezier(0.33, 1, 0.68, 1), trigger: hover
Counters → de 0 para o valor final em 1800ms, easing: easeOutExpo via requestAnimationFrame, trigger: IntersectionObserver (threshold 0.4), dispara uma única vez, stagger: sim (150ms entre counters)
Fotos do escritório (grid quebrado) → de clip-path: inset(0 0 100% 0) para inset(0 0 0 0) + imagem interna de scale(1.12) para scale(1) em 1000ms, easing: cubic-bezier(0.65, 0, 0.35, 1), trigger: IntersectionObserver (threshold 0.25), stagger: sim (140ms)
Marquee de depoimentos → de translateX(0) para translateX(-50%) (linha 1) e translateX(-50%) para translateX(0) (linha 2) em 48000ms, easing: linear, trigger: load, infinito, pausa no hover
Nota 4,9 do Google → de opacity 0 + translateY(24px) para 1 + 0 em 800ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: IntersectionObserver, stagger: não
Navbar ao rolar → de background: transparent + height: 96px para background: rgba(244,242,238,0.94) + backdrop-filter: blur(12px) + height: 68px + border-bottom: 1px solid var(--pedra-2) em 320ms, easing: ease-out, trigger: scroll > 80px (via IntersectionObserver em sentinela no topo, nunca scroll event direto)
Hover nos links da nav → underline de scaleX(0) para scaleX(1) com transform-origin: left em 300ms, easing: cubic-bezier(0.33, 1, 0.68, 1), trigger: hover
Cards de vídeo (conteúdo jurídico) → hover: translateY(0) → translateY(-10px) + ícone de play scale(1) → scale(1.15) em 380ms, easing: cubic-bezier(0.34, 1.56, 0.64, 1), trigger: hover
Itens do FAQ → altura de 0 para scrollHeight em 420ms, easing: cubic-bezier(0.4, 0, 0.2, 1), trigger: click, com rotação do + de 0deg para 45deg no mesmo tempo
Títulos de seção → máscara de revelação translateY(100%) → 0 em 760ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: IntersectionObserver, stagger: não

SEÇÕES OBRIGATÓRIAS (nesta ordem):

Navbar — logo à esquerda, links centrais (Áreas · Escritório · Avaliações · Conteúdo · Contato), botão WhatsApp cobalto à direita
Hero — modelo C Editorial (descrito acima)
Barra animada horizontal (marquee) — "DIREITO CIVIL · PENAL · TRABALHO · PREVIDENCIÁRIO · CONSUMIDOR · SANTA CRUZ · RIO DE JANEIRO ·" em IBM Plex Mono uppercase, fundo --azul-noite, texto --pedra, losango dourado como separador
Seção de alto impacto: dor e solução — bloco cobalto full-bleed, texto grande em Syne à esquerda, colunas de contraponto à direita (formato "O problema → O que fazemos"). Sem imagem.
Áreas de Atuação — modelo F, numeração 01 a 05 (Civil, Penal, Trabalho, Previdenciário, Consumidor)
Seção de encantamento — "Nosso escritório" — grid quebrado assimétrico com as 3 fotos reais (fachada em destaque grande à esquerda ocupando 2 linhas; recepção e sala de atendimento empilhadas à direita em tamanhos diferentes). Legendas curtas em IBM Plex Mono. Inclua também o Tour Virtual do Google em iframe abaixo do grid.
Sobre/Credenciais — modelo A, counters sobre fundo nogueira
Depoimentos — modelo A, marquee duplo + bloco de nota Google
Conteúdo Jurídico (8 cards) — grid 4×2 (desktop) / scroll horizontal (mobile) com os 8 vídeos do Instagram como cards de link: título real da publicação + ícone de play em losango dourado + selo "Instagram", abrindo o post em nova aba (target="_blank" rel="noopener"). Fundo --pedra-2.
FAQ — acordeão, apenas com as perguntas confirmadas (ver dossiê, item 5)
Localização — endereço + iframe do mapa + botão "Como Chegar" + telefone/WhatsApp + Instagram
CTA com formulário ao lado — split 50/50: bloco cobalto com chamada em Syne à esquerda, formulário à direita (Nome, Telefone/WhatsApp, E-mail, Área de interesse [select com as 5 áreas], Mensagem)
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Nome → https://share.google/x3u8LxCRu5mNGIFWN (perfil Google Business)
Endereço: Rua Auristela, 450 – Loja C, Santa Cruz, Rio de Janeiro – RJ, 23550-351 → https://www.google.com/maps/dir//Pereira+Advocacia,+Rua+Auristela,+450+-+Loja+C+-+Santa+Cruz,+Rio+de+Janeiro+-+RJ,+23550-351/@-22.9141308,-43.445982,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bfb6f15070ff7:0xa0e11a6e7093c5b3!2m2!1d-43.6886969!2d-22.9348134?hl=pt-BR
Telefone/WhatsApp: (21) 3246-8501 → tel:+552132468501 e https://wa.me/552132468501
Instagram: @advocaciapereiraoficial → https://www.instagram.com/advocaciapereiraoficial/
Horário: Seg. a Sex., 9h às 18h · Sáb., Dom. e Feriados: fechado

CRÉDITOS:

Esquerda: © Pereira Advocacia 2026
Direita: Desenvolvido por AG5 Agência (AG5 em --azul 
#17459C, link para www.ag5agencia.com.br)

EMBEDS (usar exatamente):

Mapa:

html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.418396465705!2d-43.68869689999999!3d-22.9348134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfb6f15070ff7%3A0xa0e11a6e7093c5b3!2sPereira%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1787251670775!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

Tour Virtual:

html
<iframe src="https://www.google.com/maps/embed?pb=!4v1787251756514!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3FyZTc5Umc.!2m2!1d-22.93470922731276!2d-43.6888312764283!3f302.332149559404!4f10.518294322361555!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções (usar máscaras de revelação, clip-path e scaleX conforme especificado)
Sem paleta azul + branco + cinza corporativa genérica — o azul aqui é cobalto saturado da marca, sempre ancorado em pedra quente + nogueira + dourado
Sem 3 colunas de ícone + título + texto
Sem balança da justiça, martelo, colunas gregas ou livros de lei como ícone decorativo
Nunca usar Playfair Display, Cormorant, Crimson, Cinzel, Montserrat, Lora, Outfit ou Poppins (saturados no portfólio AG5 de advocacia)
NÃO inventar depoimentos, números de processo, valores ganhos, quantidade de clientes, prêmios ou número da OAB. Usar apenas os dados fornecidos.

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções (#areas, #escritorio, #sobre, #avaliacoes, #conteudo, #faq, #localizacao, #contato)
Variáveis CSS no :root para cores, fontes e espaçamentos (escala: 0.5 / 1 / 2 / 3 / 4 / 6 / 8 rem — herdada do sistema do MAAT)
Mobile-first com media queries (breakpoints 480 / 768 / 1024 / 1280)
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion: reduce) desativando todas as animações e marquees, loading="lazy" em todas as imagens e iframes
Formulário com validação real (nome mín. 3 caracteres, telefone com máscara brasileira, e-mail com regex, mensagem obrigatória) e feedback visual inline
Marquees construídos com duplicação de conteúdo no DOM + transform: translateX(), nunca com <marquee>
1 — MÍDIAS PRINCIPAIS

Declarado no formulário: 19 fotos (incluindo a logo) e 8 vídeos.
Recebido nesta sessão: 5 arquivos (4 fotos + logo) e 0 arquivos de vídeo.

Tipo	Arquivo	Resolução	Status
Logo	logo.jpg	722×722	⚠️ JPG com fundo azul sólido, sem transparência. Baixa resolução para retina.
Fachada	WhatsApp_Image_..._4_.jpeg	960×1280	✅ Utilizável. Mármore cinza + madeira + logo aplicada na testeira.
Interna — sala de atendimento	WhatsApp_Image_..._2_.jpeg	960×1280	✅ Utilizável. Divisória de vidro, colaborador em estação de trabalho, mármore marrom. ⚠️ Climatizador portátil em primeiro plano — recomendar crop.
Interna — recepção/corredor	WhatsApp_Image_..._5_.jpeg	960×1280	✅ Utilizável. Mármore preto marmorizado, ripado de madeira, sofá. ⚠️ Caixa de papelão encostada no sofá — necessita retoque ou crop.
Retrato do proprietário	ChatGPT_Image_20_de_ago...png	1092×1441	✅ Melhor arquivo do lote. Advogado sentado, parede de madeira com certificados (incluindo OAB) ao fundo.

Ausências (vão para o checklist):

14 fotos declaradas não foram enviadas (19 declaradas − 5 recebidas)
Foto da equipe: ausente. Apenas 1 colaborador aparece de costas/perfil na foto interna e 1 proprietário no retrato. Não há foto de grupo.
Nenhum arquivo de vídeo foi enviado. Os 8 vídeos existem apenas como links de publicações do Instagram — não podem ser usados como vídeo de fundo do hero nem hospedados. Serão tratados como cards de link.
Nota: havia 2 arquivos .mp4 na pasta de upload pertencentes a outro cliente (Graziele Albino — psicanalista, Barra da Tijuca). Não pertencem a este projeto e foram descartados.
O Google Business registra 52 fotos publicadas — fonte possível para preencher as 14 fotos faltantes.
2 — INFORMAÇÕES DA EMPRESA
Campo	Informação
Nome	PEREIRA ADVOCACIA
Nicho	Escritório de Advocacia
Descrição institucional	❌ Não informada pelo cliente
Proposta de valor	❌ Não informada. Instagram declara: "Advogados especializados · + de 10 anos de experiência · Atuamos em diversas áreas"
Público-alvo	❌ Não informado
Serviços declarados	Direito Civil · Direito Penal · Direito do Trabalho · Direito Previdenciário · Direito do Consumidor
Diferenciais	❌ Não informados no formulário
História	❌ Não informada. Único dado: abertura em 2014
Categorias no Google	Serviços jurídicos · Advogado criminal · Advogado trabalhista · Escritório de advocacia · Advogado · Assistência jurídica · Advogado previdenciário
Telefone	(21) 3246-8501
WhatsApp	(21) 3246-8501 (mesmo número fixo — confirmar se é WhatsApp Business)
E-mail	❌ Não informado
Endereço	Rua Auristela, 450 – Loja C, Santa Cruz, Rio de Janeiro – RJ, 23550-351
Coordenadas	-22.93481340, -43.68869690
Área de atendimento	Santa Cruz
Horário	Seg. a Sex.: 9h às 18h · Sáb., Dom. e Feriados: fechado
Site atual	https://www.pereiraadvocacia.ag5agencia.site/início (site temporário AG5)
Instagram	@advocaciapereiraoficial — 43 posts, 696 seguidores
Facebook / LinkedIn	❌ Não informados
Google Business	https://share.google/x3u8LxCRu5mNGIFWN — Perfil ✅ Verificado
Place ID	ChIJ9w8HFW_7mwARs8WTcG4a4aA
CNPJ	❌ Não informado
Registro OAB	❌ Não informado. Certificados da OAB aparecem na parede da foto do retrato, mas o número não é legível.
Autorização de imagem	✅ Sim (100% — confirmado no formulário)

Sobre o profissional: As avaliações mencionam nominalmente "Dr. Célio" (Alamir Broker e Pedro Lucas). Nome completo, título e número da OAB não foram confirmados e não devem ser inseridos no site sem validação.

Menção relevante em avaliação (não confirmada como serviço oficial): um cliente descreve que o escritório também oferece "legalização de imóveis com engenheiros, arquitetos e corretores de imóveis". Não consta na lista de serviços declarada — vai para o checklist de pendências.

Quantidade de fotos e vídeos — impacto no direcionamento das seções:

3 fotos reais do escritório → alimentam exatamente a seção "Nosso escritório" em grid quebrado de 3 elementos (1 grande + 2 empilhadas). Não sobra e não falta.
1 retrato de qualidade → alocado no hero (imagem flutuante em losango) e reaproveitável na seção Sobre.
8 links de vídeo → geram uma seção dedicada de 8 cards em grid 4×2. Número perfeito para a malha.
Ausência de fotos de equipe → elimina a opção de layout "Grid de equipe com hover" (SOBRE opção E) e justifica a escolha por counters.
3 — AVALIAÇÕES

Plataforma: Google Business
Total de avaliações: 30
Nota média: 4,9
Link para avaliar: https://search.google.com/local/writereview?placeid=ChIJ9w8HFW_7mwARs8WTcG4a4aA

⚠️ A exportação recebida não traz a quantidade de estrelas por avaliação individual — apenas nome, tempo e texto. Como a regra primordial proíbe inventar dados, não é possível ordenar por estrelas decrescentes. As 15 avaliações estão listadas abaixo por ordem de recência, com o campo de estrelas marcado como não informado. Nenhum comentário de proprietário foi encontrado no material — nada foi removido.

Nome	Tempo	Estrelas	Texto
Gabriel Barbosa	3 meses atrás	não informado	Excelentes profissionais,super indico.
andre luis da silva	Editado 4 meses atrás	não informado	Um lugar onde você encontra tudo de assessoria advocatícias em todas a vertentes.Lá também existe legalizaçao de imóveis com engenheiros,arquitetos e corretores de imóveis com um cafezinho que só o seu Nelson sabe fazer.
Sérgio campos	5 meses atrás	não informado	Excelente. Bom atendimento, bons profissionais e esclarecimento total.
Isabela pereira	6 meses atrás	não informado	Excelente escritório de advocacia! Atendimento ágil, profissionais extremamente capacitados e comprometidos com o cliente. Atuam em diversas áreas do Direito com muita competência, clareza e transparência. Recomendo fortemente para quem busca seriedade e resultados.
Jurema marques de Santana	6 meses atrás	não informado	Melhores advogados de Santa Cruz. Indico de olhos fechados.
Nelson Faria	6 meses atrás	não informado	Excelentes profissionais. Um ambiente agradável e com um ótimo cafezinho.
JÉSSICA FEIJÓ	Editado 6 meses atrás	não informado	Um escritório de advocacia de excelência, composto por profissionais altamente qualificados.
Heitor Advíncola	Editado um ano atrás	não informado	Ótimos profissionais, excelentes, muito bom no que tem que ser feito, gostei muito.
Gustavo Coelho	um ano atrás	não informado	O melhor escritório de santa cruz sem dúvidas
Pedro Lucas	2 anos atrás	não informado	Melhor serviço de todos, celião meu pareceiro
guerraaopeso	4 anos atrás	não informado	Excelente atendimento e atenção! Parabéns!
Alamir Broker	5 anos atrás	não informado	Pode contar e confiar no Dr Célio. Ótimo advogado.
Renato S Souza	5 anos atrás	não informado	Tem muito, e tem advogado, em várias especialidadas.
ANDRE LUIZ PIRES	5 anos atrás	não informado	Escritório acima da média.
Adriana Guimaraes Moreira	6 anos atrás	não informado	Minha experiência foi ótima, coloquei uma causa nas mãos deles,e tive toda assistência e tudo foi muito rápido, amei,super indico,tenho indicado várias pessoas pra eles.

Leitura estratégica das avaliações (para copy do site):

Palavras que se repetem: excelente(s), profissionais, indico/recomendo, atendimento
Três avaliações mencionam espontaneamente o cafezinho e o ambiente agradável — sinal claro de acolhimento presencial, alinhado com o investimento visível na reforma do escritório. Isso justifica dar peso real à seção "Nosso escritório".
Duas avaliações posicionam o escritório como o melhor de Santa Cruz — território é diferencial competitivo declarado pelos próprios clientes.
Clareza e transparência aparecem explicitamente (Isabela pereira, Sérgio campos) — território de copy legítimo.
4 — ANÁLISE DE BRANDING

Nicho: Advocacia multiárea (Civil, Penal, Trabalhista, Previdenciário, Consumidor) — atendimento a pessoa física de bairro.

Posicionamento: Médio-alto. Não é premium corporativo (não há área empresarial, M&A ou tributário sofisticado; o endereço é loja de rua em Santa Cruz), mas também não é popular: o escritório foi reformado com mármore marmorizado, ripado de madeira nobre, divisória de vidro temperado e climatização, e as avaliações destacam ambiente e cuidado no atendimento. Posicionamento correto: "seriedade acessível" — acabamento premium, linguagem direta.

Estilo visual predominante: Editorial institucional com neo-grotesco de display. A logo é um brasão geométrico forte (losango dentro de círculo, "P" bicolor) — não é uma marca delicada nem serifada. Isso pede tipografia geométrica de display, não serifa clássica. A saturação do azul cobalto é alta e "de bandeira", o que empurra o projeto para linguagem de bloco sólido, não de gradiente ou luxo escuro.

Paleta confirmada (extraída via Pillow — dois passes, filtro condicional em resolução total):

Cor	Hex	Origem	Papel
Azul Cobalto	
#17459C	Extraída — fundo externo da logo	Primária
Azul do Losango	
#004996	Extraída — interior do losango	Secundária/profundidade
Azul Noite	
#0A2456	Derivada	Rodapé, contraste
Dourado	
#D5B463	Extraída — "P" da logo	Acento fino (filetes, underlines)
Dourado Claro	
#E3CB8C	Derivada	Hover
Nogueira	
#4A331F	Extraída — madeira das fotos internas	Bloco de calor
Pedra	
#F4F2EE	Derivada do mármore da fachada	Base do site
Pedra 2	
#E7E3DC	Derivada	Superfícies e divisórias
Grafite	
#161A1F	Derivada	Títulos
Cinza Texto	
#5A6068	Derivada	Corpo

Direção estética: Base clara em pedra quente, com blocos sólidos de cobalto sangrando pelas bordas, madeira nogueira como respiro tátil e dourado restrito a filetes de 1–2px. O motivo do losango (herdado diretamente da logo) substitui completamente a iconografia jurídica genérica — vira máscara de imagem, marcador de lista e separador do marquee.

Sensação de marca: Firmeza sem intimidação. Institucional sem frieza. Um escritório que investiu no próprio espaço e trata quem chega bem — literalmente, os clientes escrevem sobre o café.

Referências premium do mesmo nicho (para direção, não para cópia): Mattos Filho, Machado Meyer, Pinheiro Neto Advogados, TozziniFreire, BMA — todos usam base clara, tipografia grande de display, blocos de cor institucional saturada e ausência total de iconografia jurídica clichê.

⚠️ Checagem de diferenciação contra a BASE_CONHECIMENTO_AG5

Segmento: Advocacia · Bairro: Santa Cruz · Vizinhos a conferir: Paciência, Sepetiba, Guaratiba, Cosmos, Campo Grande

Concorrente AG5 no raio	Paleta usada	Fontes	Conflito?
Tavares e Macedo (Santa Cruz)	
#4B0F21 
#D9B76A vinho+dourado	Inter, Playfair Display	✅ Sem conflito de cor. Fontes evitadas.
Camilo e Pessanha (Campo Grande)	
#0D1B2E 
#F5F2EC navy+marfim	Inter, DM Sans, Cormorant	⚠️ Família azul — mas navy escuro, não cobalto saturado. Fontes evitadas.
Dra. Monique Freitas (Campo Grande)	
#1A3A52 petróleo+dourado	Inter, Crimson	⚠️ Família azul-petróleo. Fontes evitadas.
FGM (Rio de Janeiro)	
#0D2C43 
#C5A059 azul profundo+ouro	Inter, Playfair Display	⚠️ Azul+ouro — mas azul quase preto. Fontes evitadas.
Camacho / Gomes e Pimentel / Luanda Naiara / Batista e Calzolari (Campo Grande)	preto + dourado/âmbar	Inter, Playfair, Cinzel, Cormorant	Alerta de saturação ativo na base.

Aplicação da regra de exceção: o azul + dourado é a identidade real da marca Pereira (logo física aplicada na fachada do imóvel). A base determina: manter as cores do branding e divergir no layout. Aplicado da seguinte forma:

Tonalidade divergente: todos os azuis do portfólio AG5 em advocacia são navy/petróleo escuros (
#0D1B2E, 
#1A3A52, 
#0D2C43). O da Pereira é cobalto vivo e saturado (
#17459C) — família de matiz próxima, temperatura e luminosidade completamente distintas.
Base clara, não escura: enquanto ~10 sites de advocacia AG5 são dark/luxury, este é light/editorial sobre pedra 
#F4F2EE. Só Nohana (nude, Campo Grande) e Jéssica Moreira (verde oliva) são claros no segmento, e nenhum dos dois é editorial.
Dourado rebaixado: nos sites saturados o dourado é protagonista. Aqui é filete de 1–2px apenas, com a madeira nogueira assumindo o calor.
Tipografia inédita no portfólio: Syne + IBM Plex Sans + IBM Plex Mono. Nenhuma das três aparece na base — e nenhuma das fontes saturadas (Playfair, Cormorant, Crimson, Cinzel, Montserrat, Lora, Outfit, Poppins) foi usada. Também abandona o Inter, presente em quase todos os projetos.
Hero editorial tipográfico, não split nem fullscreen escuro — modelo não registrado em nenhum concorrente do raio.

⚠️ Limitação identificada na base: a BASE_CONHECIMENTO_AG5.md registra apenas paleta e fontes, não registra as combinações de layout (hero/serviços/depoimentos/sobre) usadas em cada projeto. Isso impede a verificação completa de repetição de layout exigida pelo briefing. Recomendação: adicionar uma coluna "Combinação de layout" à tabela principal.

5 — CHECKLIST DE PENDÊNCIAS
🔴 BLOQUEANTES (resolver antes do build ou antes do lançamento)
E-mail institucional — nenhum e-mail foi informado. O formulário de contato do site não tem destino.
Logo em alta resolução com fundo transparente — o arquivo atual é JPG 722×722 com fundo azul chapado. Necessário SVG ou PNG ≥1500px com transparência, além de uma versão monocromática branca para uso sobre os blocos cobalto e nogueira.
Número da OAB do responsável técnico — obrigatório no site por exigência do Provimento nº 205/2021 do CFOAB. Sem isso o site não pode ser publicado.
Nome completo e título do advogado responsável — as avaliações citam "Dr. Célio", mas o nome completo não foi confirmado. Não será inserido sem validação.
14 fotos faltantes — declaradas 19, recebidas 5. O Google Business tem 52 fotos publicadas: solicitar as originais ou autorizar extração.
Confirmação do WhatsApp — o número informado é fixo (21 3246-8501). Confirmar se é WhatsApp Business ativo ou fornecer o celular correto.
Descrição institucional e história do escritório — campos em branco no formulário. Sem isso, a seção Sobre e o texto do hero ficam sem substância real.
🟡 IMPORTANTES (impactam qualidade e conversão)
Público-alvo — não informado. Afeta diretamente o tom da seção "dor e solução".
Diferenciais competitivos — não informados pelo cliente. Hoje só existem os diferenciais que os clientes declararam nas avaliações (agilidade, clareza, ambiente, multiárea).
Descrição de cada uma das 5 áreas do Direito — o cliente listou apenas os nomes. As linhas 01–05 precisam de 1–2 frases reais por área.
FAQ — o cliente não respondeu nenhuma pergunta. Serão usadas apenas as 6 perguntas respondíveis com dados confirmados (áreas, horário, endereço, região, agendamento, tempo de atuação). Validar com o cliente e solicitar as perguntas reais que ele recebe.
Confirmar o serviço de "legalização de imóveis com engenheiros, arquitetos e corretores" — citado por um cliente em avaliação, mas ausente da lista oficial de serviços. Se for real, é um diferencial forte e deve virar uma sexta linha na seção de áreas.
Fotos do escritório sem elementos indesejados — a foto da recepção tem uma caixa de papelão visível; a foto da sala tem um climatizador portátil em primeiro plano. Solicitar refotografia ou autorizar crop/retoque.
Foto de equipe — nenhuma foto de grupo foi enviada. Sem ela, a seção Sobre fica restrita a counters.
Vídeos — os 8 conteúdos existem apenas como links do Instagram. Se o cliente enviar os arquivos .mp4 originais, é possível trocar os cards de link por players nativos, muito superiores em performance e retenção.
🟢 DESEJÁVEIS
CNPJ — para o rodapé institucional.
Facebook e LinkedIn — não informados.
Áreas de atendimento além de Santa Cruz — o cliente informou apenas "Santa Cruz", mas as avaliações vêm de perfis variados. Confirmar se atende Paciência, Sepetiba, Guaratiba, Cosmos e Campo Grande — impacta SEO local.
Assinatura digitalizada do advogado — usada em templates do nicho (ver Justicia) como elemento de credibilidade na seção Sobre.
Certificados/formações visíveis no retrato — se legíveis em alta resolução, podem virar uma faixa de credenciais real.
6 — ANÁLISE DE REFERÊNCIAS WEBFLOW

Ambos os templates foram acessados ao vivo, com página Home e Styleguide fetchados e analisados. URLs verificadas, não presumidas.

TEMPLATE 1 — MAAT (Law Firm) — Telio Templates

Marketplace: https://webflow.com/templates/html/maat-law-firm-website-template
Preview ao vivo: https://maat-law-firm.webflow.io/
Styleguide: https://maat-law-firm.webflow.io/infos/styleguide

HERO: Proporção ~60/40 (tipografia/imagem). Imagem de fundo à direita (estátua da Justiça, img-hero.jpg) ocupando o terço direito da tela; o H1 domina o restante. Título quebrado em 4 linhas empilhadas em caixa baixa: "multi-skilled / law firm / operating worldwide / since 1997". Elemento diferenciador: o título não é uma frase corrida — cada linha é um bloco independente com line-height: 1, criando uma parede tipográfica. Animação de entrada: as linhas sobem em máscara, em sequência de cima para baixo, e a imagem faz scale-down simultâneo. Âncora #who-we-are com scroll suave no rodapé do hero.

NAV: Header fixo com fundo transparente sobre o hero; logo branca à esquerda. Dropdown "Maat" com chevron abre submenu numerado (01 Our Story · 02 Team · 03 Careers) — a numeração é o assinatura do template e se repete nas expertises. Links diretos (Expertises, Blog, Contact) à direita. Hover: underline com origem à esquerda.

TIPOGRAFIA: Syne (display) + IBM Plex Sans (corpo), ambas Google Fonts. Escala do styleguide: H1 7.6em/1 · H2 6.8em/0.9 · H3 6em/1 · H4 4.5em/1 · H5 3em/1 · H6 2.2em/1 · parágrafo 1.25em/1.5. Uso criativo: H2 com line-height: 0.9 (menor que 1) provoca sobreposição visual entre linhas — recurso editorial deliberado. Títulos de seção quebrados em duas linhas separadas ("our" / "expertises", "who" / "we are").

CORES (do styleguide): Primária 
#212426 · Secundária 
#f0f0f0 · Acento 
#64a2ec.
→ No projeto Pereira, substituir por: primária 
#161A1F, secundária 
#F4F2EE, acento 
#17459C. A estrutura de 3 cores do MAAT mapeia perfeitamente na paleta da marca.

SERVIÇOS/CARDS: Lista vertical de 8 expertises numeradas 01–08, cada uma em linha full-width com: número em mono à esquerda, título em H4, parágrafo descritivo e link "see more". Sem ícones, sem grid de colunas, sem imagens. Espaçamento generoso entre linhas (~4em). É o oposto do card de ícone genérico.

ANIMAÇÕES (formato técnico):

Linhas do H1 → de translateY(100%) para translateY(0) em ~900ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: load, stagger: sim (~120ms)
Imagem do hero → de scale(1.15) para scale(1) em ~1400ms, easing: cubic-bezier(0.22, 1, 0.36, 1), trigger: load, stagger: não
Key figures (counters: +200, 8, 22, 15, 72) → de 0 para valor em ~1800ms, easing: easeOut, trigger: scroll (entrada em viewport), stagger: sim
Linhas de expertise → de translateY(40px) + opacity 0 para 0 + 1 em ~700ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: scroll, stagger: sim (~90ms)
Cards da equipe → imagem revela em clip-path de baixo para cima em ~800ms, trigger: scroll, stagger: sim
Carrossel de blog → translateX por setas, ~600ms, easing: ease-in-out, trigger: click

MICRO-INTERAÇÕES: Botões "oval" com texto duplicado no DOM — no hover, o texto original sobe e a cópia entra por baixo (efeito de rolagem vertical do label). Hover nas linhas de expertise destaca o número. Setas de carrossel com escala no hover.

ELEMENTOS DECORATIVOS: Praticamente nenhum ornamento — a decoração é a tipografia. Linhas divisórias de 1px separando as expertises. Ícone de estrela em SVG azul nos depoimentos.

RESUMO CONSTRUTIVO: Recrie o MAAT tratando o texto como arquitetura, não como conteúdo. Defina um H1 de clamp(3rem, 9vw, 9.5rem) com line-height: 0.88 em Syne 800, quebre a frase em <span> de linha e anime cada um com máscara overflow:hidden + translateY(100%)→0 em stagger. Toda a hierarquia sai de uma escala em EM ancorada em um único --fs-base. Sistema de espaçamento em 7 degraus (0.5/1/2/3/4/6/8 EM) aplicado como classes utilitárias. Serviços viram linhas numeradas full-width com número em mono, jamais cards com ícone. Containers em 4 larguras (100/90/80/60/40%) para alternar respiração entre seções. Cores em apenas 3 variáveis — primária escura, secundária clara, acento — o que torna a substituição pelo branding do cliente direta e sem retrabalho.

TEMPLATE 2 — JUSTICIA (Law Firm & Attorney) — BRIX Templates

Marketplace: https://webflow.com/templates/html/justicia-law-firm-website-template
Preview ao vivo: https://justiciatemplate.webflow.io/home
Styleguide: https://justiciatemplate.webflow.io/utility-pages/styleguide

HERO: Fullscreen 100vh com vídeo de fundo em loop (arquivo confirmado: 5e9dd41610cbe868b5d17e2c_justicia-video-background-transcode.mp4), overlay escuro, texto alinhado à esquerda em ~55% da largura. H1 "We are Justicia, a Law Firm in San Francisco, CA" + parágrafo + dois botões (primário "Contact Us" e outline "Practice Areas"). Elemento diferenciador: seta de scroll animada em SVG ancorada em #awards no rodapé do hero. Animação de entrada: título, parágrafo e botões entram em fade-up sequencial sobre o vídeo já em reprodução.

NAV: Header com logo à esquerda, 3 links centrais ancorados (#about-us, #practice-areas, #case-results) e botão "Contact Us" à direita. Ao rolar, o header ganha fundo sólido e sombra. Hover nos links: mudança de cor para o acento.

TIPOGRAFIA: Escala do styleguide: H1 68px · H2 66px · H3 24px · H4 18px · H5/H6 14px · Parágrafo padrão 18px · Parágrafo grande 28px. Salto brutal entre H2 (66px) e H3 (24px) — hierarquia binária: ou é título de seção monumental, ou é rótulo de card. Sem uso tipográfico experimental.

CORES (do styleguide): Acento 
#f3bb93 (pêssego) · Títulos 
#16181f · Corpo 
#6f727b · Cinza claro 
#bfc1c8.
→ No projeto Pereira, substituir por: acento 
#D5B463 (dourado da marca — mesma temperatura quente, mesma função de contraponto ao escuro), títulos 
#161A1F, corpo 
#5A6068, cinza claro 
#E7E3DC. A estrutura "escuro + neutro + um acento quente" mapeia diretamente na paleta Pereira.

SERVIÇOS/CARDS: "Practice Areas" em slider horizontal com 6 cards, navegação por setas SVG. Cada card: ícone SVG customizado no topo, H3 de 24px, parágrafo de 18px, link "Learn More". Fundo com padrão decorativo de pontos. Seção "Case Results" separada em 3 colunas com imagem + valor monetário grande + rótulo em caixa alta + descrição.

ANIMAÇÕES (formato técnico):

Faixa de prêmios (awards) → de translateX(0) para translateX(-50%) em ~28000ms, easing: linear, trigger: load, loop infinito, stagger: não
Blocos de conteúdo das seções → de opacity 0 + translateY(30px) para 1 + 0 em ~600ms, easing: ease-out, trigger: scroll, stagger: sim (leve)
Cards de practice area → hover: translateY(0) para translateY(-8px) + sombra em ~300ms, easing: ease, trigger: hover
Slider de practice areas / depoimentos → translateX por card em ~500ms, easing: ease-in-out, trigger: click nas setas
Valores de Case Results ($46.000.000 etc.) → entram em fade-up com stagger em ~600ms, trigger: scroll
Padrão de pontos decorativo → parallax sutil no scroll

MICRO-INTERAÇÕES: 4 estilos de botão no styleguide (Standard, Primary, Outline, Secondary/Large). Cards elevam no hover. Setas de slider com hover state. Seta de scroll do hero com bounce contínuo.

ELEMENTOS DECORATIVOS: Padrão de pontos em SVG repetido em 4 seções (about, practice areas, why-us, formulário) — sempre posicionado atrás/ao lado da imagem principal, criando profundidade. Assinatura manuscrita em SVG na seção "Why Justicia Law?" logo abaixo do nome e cargo do CEO — elemento de credibilidade muito eficaz no nicho jurídico. Selos/badges de premiação em faixa horizontal.

RESUMO CONSTRUTIVO: Recrie o Justicia pela lógica de "provas empilhadas": hero com vídeo em loop e overlay, imediatamente seguido por uma faixa marquee de selos que estabelece autoridade antes de qualquer texto institucional. Alterne blocos split (imagem + texto) com padrão de pontos SVG posicionado em position:absolute atrás da imagem para dar profundidade sem custo de assets. Use uma escala tipográfica binária — 66–68px para títulos de seção, 24px para títulos de card, 18px para corpo — sem meios-termos. Números grandes (valores, resultados, notas) são o principal recurso visual de credibilidade e devem receber tamanho de H2. Feche com assinatura manuscrita em SVG e formulário de 5 campos com padrão decorativo. Marquee com duplicação de conteúdo no DOM e translateX(-50%) em linear infinito é o mecanismo mais reaproveitável do template.

O que foi extraído de cada template para o projeto Pereira
Elemento	Fonte
Hero editorial com linhas empilhadas + máscara de revelação	MAAT
Escala tipográfica em EM + sistema de espaçamento em 7 degraus	MAAT
Serviços em linhas numeradas 01–05 (sem ícones)	MAAT
Counters animados ("key figures")	MAAT
Dupla tipográfica Syne + IBM Plex Sans	MAAT
Barra marquee horizontal infinita (translateX -50%, linear)	JUSTICIA
Números grandes como recurso de credibilidade (nota 4,9 em H2)	JUSTICIA
Blocos split alternados com elemento decorativo em position:absolute	JUSTICIA
Estrutura de acento único quente sobre base neutra	JUSTICIA
Formulário de contato ao lado de bloco de chamada	JUSTICIA

Descartado deliberadamente: hero com vídeo de fundo do Justicia (não há arquivos de vídeo — apenas links do Instagram); slider de cards com ícones do Justicia (viola a diretriz anti-genérico); padrão de pontos SVG (substituído pelo motivo de losango da própria marca).

7 — SISTEMA DE VARIAÇÃO DE LAYOUT
ESCOLHAS REGISTRADAS

Combinação: HERO-C · SERV-F · DEPO-A · SOBRE-A

HERO — [✓] C) Editorial — tipografia 8–12vw dominando 70% da tela, imagem pequena floating

Justificativa: o inventário de mídia é o fator decisivo. Há apenas 1 imagem de qualidade alta (o retrato tratado) e nenhum arquivo de vídeo. As opções B (fullscreen em camadas), D (vídeo loop) e H (foto/vídeo de fundo) estão tecnicamente inviabilizadas. A opção A (split 55/45) exigiria uma imagem forte de meia tela que não existe. O hero editorial resolve o problema transformando a limitação em direção estética: a tipografia carrega o peso, e a única imagem boa aparece pequena e mascarada em losango, valorizada pela escassez. Diverge de todo o portfólio AG5 em advocacia, dominado por splits e fullscreens escuros. Ganha o reforço da opção H apenas no sentido de fundo: fundo sólido em pedra 
#F4F2EE com bloco cobalto sangrando à direita — sem foto e sem vídeo de fundo.

SERVIÇOS — [✓] F) Numeração grande (01, 02, 03) como elemento visual

Justificativa: são exatamente 5 áreas do Direito, e o cliente não enviou descrições nem ícones. Um grid de cards com ícone exigiria 5 ícones inventados — proibido pela diretriz anti-genérico e pela regra primordial. A opção A (bento grid) precisaria de imagens por serviço, que não existem. As opções C (zig-zag), E (scroll horizontal) e G (fullscreen por serviço) exigem mídia por item. As linhas numeradas funcionam com texto puro, escalam de 5 para 6 áreas sem quebrar (caso o serviço de legalização de imóveis seja confirmado) e vêm diretamente do breakdown do MAAT.

DEPOIMENTOS — [✓] A) Marquee infinito horizontal

Justificativa: há 15 avaliações reais com textos de comprimentos muito variados — de "Escritório acima da média." (4 palavras) a depoimentos de 40 palavras. Um carrossel (opção E) ou grid assimétrico (opção D) exporia o desequilíbrio; a frase fullscreen (opção B) desperdiçaria 14 avaliações. O marquee duplo absorve a variação de comprimento com naturalidade, exibe muito volume social em pouco espaço vertical e reaproveita o mecanismo técnico já mapeado no Justicia. A nota 4,9 / 30 avaliações ganha um bloco fixo próprio acima das faixas, com o logo oficial do Google.

SOBRE/CREDENCIAIS — [✓] A) Counters animados + texto curto

Justificativa: decisão forçada pelo inventário. A opção E (grid de equipe) é inviável — não há foto de equipe. A opção C (foto grande com texto sobreposto) desperdiçaria o retrato, já alocado no hero. A opção B (timeline) exigiria a história do escritório, que o cliente não respondeu. A opção D (split com imagem fixa) repetiria a lógica do hero. Os counters usam apenas dados verificáveis: +10 anos (declarado pelo próprio cliente na bio do Instagram), 4,9 (nota Google real), 30 (avaliações reais), 5 (áreas declaradas). Nenhum número inventado. Vem do "key figures" do MAAT, sobre fundo nogueira extraído das fotos reais do escritório.

Diferenciação final confirmada contra a base AG5: cores da marca preservadas (cobalto 
#17459C + dourado 
#D5B463), com divergência forçada em luminosidade (light/editorial vs. dark/luxury), tipografia (Syne + IBM Plex — inéditas no portfólio, incluindo o abandono do Inter) e combinação de layout (HERO-C · SERV-F · DEPO-A · SOBRE-A).