# README de Estrutura — Pereira Advocacia

**Leia este arquivo ANTES de criar ou editar qualquer página deste projeto.**

---

## 1. Mapa de páginas

| Arquivo | Pasta | Profundidade (`{{BASE}}`) | Observação |
|---|---|---|---|
| `index.html` | raiz | (é a home — âncoras `#areas` etc. usadas direto, sem `{{BASE}}`) | Página principal, single-page, todas as seções vivem aqui |
| `termos-e-condicoes.html` | raiz | `` (vazio) | Página legal, `noindex, follow` |
| `politica-de-privacidade.html` | raiz | `` (vazio) | Página legal, `noindex, follow` |

Não há páginas em subpasta neste projeto ainda. Se uma for criada (ex.: `blog/post.html`), `{{BASE}}` = `../`.

---

## 2. Template canônico

Toda página nova (ou edição de nav/footer de página existente) **parte de**:
`docs/_nav-footer-template.html`

Esse arquivo contém, na ordem exata do `index.html`:
1. Nav/Header completo (com `.nav__pill`, menu desktop, botão hamburguer)
2. Footer completo (4 colunas + créditos)
3. Drawer mobile
4. Cookie banner + modal LGPD
5. Scripts na ordem correta

**Nunca copie nav/footer de uma página aleatória** — pode estar desatualizada. Sempre do template ou direto do `index.html` (fonte da verdade).

O placeholder `{{BASE}}` marca todo caminho relativo — substituir por `` (raiz) ou `../` (subpasta) ao colar.

---

## 3. Regra de profundidade

| Elemento | Raiz (`{{BASE}}` = vazio) | Subpasta (`{{BASE}}` = `../`) |
|---|---|---|
| Home | `href="/"` | `href="../"` |
| Âncora de seção | `href="/#areas"` | `href="../#areas"` |
| CSS | `href="style.css"` | `href="../style.css"` |
| Assets | `src="assets/logo...webp"` | `src="../assets/logo...webp"` |
| Scripts | `src="script.js"` | `src="../script.js"` |
| Páginas legais | `href="/termos-e-condicoes"` | `href="../termos-e-condicoes"` |

**Regra inviolável do projeto (herdada da skill de SEO):** zero `.html` em qualquer `href` de navegação, canonical, OG ou sitemap. URL pública sempre limpa (`/termos-e-condicoes`, nunca `/termos-e-condicoes.html`). O arquivo no disco continua com `.html` — só a URL pública é limpa.

---

## 4. Itens obrigatórios em TODA página

- [ ] Nav idêntico ao `index.html` (logo, menu desktop, botão hamburguer, CTA "Fale conosco")
- [ ] Footer idêntico (4 colunas: Marca, Navegação, Serviços, Contato + créditos)
- [ ] Drawer mobile completo (overlay + aside + menu + botão WhatsApp)
- [ ] Cookie banner LGPD + modal de preferências + botão flutuante `#ck-prefs-btn`
- [ ] `script.js` (sem `defer`, carrega antes) → `cookie-banner.js` (defer) → `wa-premium.js` (defer) → robô de analytics AG5 (defer), nesta ordem, no fim do `<body>`
- [ ] `<meta charset="UTF-8">`, `<meta name="viewport">`, `<link rel="canonical">` apontando para a URL limpa
- [ ] Favicon: `<link rel="icon" href="assets/favicon-pereira-advocacia.ico">` (ajustar `{{BASE}}` se em subpasta)
- [ ] Fontes: mesmo `<link>` do Google Fonts (Syne + IBM Plex Sans + IBM Plex Mono) com `preconnect`
- [ ] `<link rel="stylesheet" href="style.css">` e `<link rel="stylesheet" href="cookie-banner.css">`

---

## 5. Armadilhas conhecidas deste projeto

- **Nav/footer desatualizados nas páginas legais (corrigido em 22/08/2026):** `termos-e-condicoes.html` e `politica-de-privacidade.html` tinham um header simplificado (só logo + botão WhatsApp, sem menu nem hamburguer) e um footer resumido (só créditos, sem as 4 colunas) — divergente do `index.html`. Foram sincronizados via `skill-rodape-padrao-nas-paginas`. **Se voltar a divergir, é sinal de que alguém editou o `index.html` sem re-rodar esta skill.**
- **Âncoras de seção só existem na home.** Links como `#areas`, `#sobre`, `#avaliacoes`, `#contato` funcionam apenas dentro do `index.html`. Em qualquer outra página, usar `/#areas` (ou `{{BASE}}#areas`) para primeiro navegar à home e depois rolar até a seção.
- **`wa-premium.js` é fácil de esquecer** ao sincronizar páginas legais — ele não quebra a página se ausente, mas o comportamento premium do botão de WhatsApp fica inconsistente entre páginas. Sempre conferir os 4 scripts do fim do `<body>`.
- **Slug do robô de analytics AG5 é fixo:** `data-c="pereiraadvocacia"`. Não trocar nem inventar outro valor — slug errado descarta eventos silenciosamente.
- **CSS inline `<style>` nas páginas legais** (`.legal`, `.legal__wrap`, etc.) é exclusivo dessas páginas e não faz parte do template nav/footer — não mexer nele ao sincronizar.

---

## 6. Como verificar após sincronizar

Rodar estes checks em cada página secundária depois de aplicar o template:

```bash
grep -c "<header" arquivo.html       # deve ser 1
grep -c "<footer" arquivo.html       # deve ser 1
grep -c "id=\"drawer\"" arquivo.html # deve ser 1 (o drawer mobile)
grep -c "src=\"script.js\"" arquivo.html         # deve ser 1, nunca duplicado
grep -c "src=\"cookie-banner.js\"" arquivo.html  # deve ser 1
grep -c 'href="[^"]*\.html' arquivo.html         # deve ser 0 (regra de URL limpa)
```

No navegador, confirmar visualmente:
- Header aparece igual à home, no desktop e no mobile
- Footer com as 4 colunas, legível (texto claro sobre fundo escuro — não deve haver herança de cor que apague o texto)
- Hamburguer abre/fecha o drawer com animação
- Clicar em "Áreas" no menu leva de volta à home na seção certa
- Banner de cookies aparece na primeira visita
- Nenhum erro 404 no console (CSS, JS, imagens)

---

> O README descreve a ESTRUTURA, não substitui o template. Template = o código pra colar.
> README = as regras pra não errar. Os dois moram em `docs/` e nunca vão pro ar (bloqueados por `noindex`/fora do sitemap).
