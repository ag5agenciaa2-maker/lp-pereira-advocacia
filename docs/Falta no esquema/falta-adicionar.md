# 📋 Falta Adicionar no Schema
**Empresa:** Advogado Santa Cruz RJ - Pereira Advocacia | Direito Civil | Direito Penal
**Data de geração:** 22/08/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não informado pelo cliente em nenhuma fonte (dossiê confirma campo em branco). Sem e-mail, o `ContactPoint`/`email` do schema não pode ser preenchido.
- [ ] `founder.name` / número da OAB — **Bloqueante para publicação** segundo o dossiê (Provimento nº 205/2021 do CFOAB exige nº da OAB visível no site). As avaliações citam "Dr. Célio" mas o nome completo não foi confirmado — não inserido no schema por não estar validado.
- [ ] `legalName` (razão social) — Não exibida no site nem no dossiê.
- [ ] `address` — CEP incompleto na origem: dossiê traz `235550351` (10 dígitos, provável erro de digitação); usado o CEP correto `23550-351` já validado no restante do site/HTML.

## 🟡 IMPORTANTES

- [ ] `sameAs` Facebook — Não informado (dossiê confirma campo vazio).
- [ ] `sameAs` LinkedIn — Não aplicável/não informado.
- [ ] Horário de sábado/domingo — Cliente informa "Fechado" nos dois dias; `openingHoursSpecification` do schema inclui apenas Seg-Sex por não haver expediente nos demais dias (correto omitir, não é pendência real, registrado aqui para rastreabilidade).

## 🔵 COMPLEMENTARES

- [ ] `priceRange` — Preenchido como `"$$"` por estimativa de posicionamento (dossiê indica "seriedade acessível", não popular nem premium corporativo) — **validar com o cliente/Maurício** se está correto ou se deve ser omitido.
- [ ] `paymentAccepted` — Formas de pagamento não informadas no site.
- [ ] `datePublished` / `dateModified` — Não disponíveis; o bloco `WebPage` foi incluído sem essas datas.
- [ ] CNPJ — Não informado (também pendência já registrada na skill de SEO).

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — `11592575977465824691` (fonte: Pleper/docs raiz)
- [x] `identifier.Google Place ID` — `ChIJ9w8HFW_7mwARs8WTcG4a4aA` (fonte: Pleper/docs raiz)
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=11592575977465824691` aplicada (substituiu o link opaco `share.google/...` que estava no schema anterior)
- [x] `geo.latitude` / `geo.longitude` — Coordenadas do Pleper: `-22.9348134, -43.6886969` (mais precisas que geocodificação por endereço)
- [x] `name` — Oficial do Google Business: `Pereira Advocacia`
- [x] `alternateName` — `Advogado Santa Cruz RJ - Pereira Advocacia | Direito Civil | Direito Penal` (fórmula AG5 ETAPA 1.5 — nicho singular + cidade + UF na frente, 2 categorias-pai escolhidas entre as 5 áreas declaradas: Civil e Penal, por serem as áreas de maior volume de busca no nicho de advocacia de bairro)
- [x] `areaServed` — Bairro base Santa Cruz + 5 adjacentes (Paciência, Sepetiba, Guaratiba, Cosmos, Campo Grande), conforme tabela oficial da skill para esse bairro
- [x] `aggregateRating` — 4.9 / 30 avaliações, visível na seção "Avaliações" do site e confirmado no Pleper
- [x] `foundingDate` — `2014`, confirmado no dossiê (data de abertura da empresa)
- [x] `hasOfferCatalog` — 5 serviços (Civil, Penal, Trabalho, Previdenciário, Consumidor), extraídos da seção "Áreas de atuação" do site
- [x] `FAQPage` — 4 perguntas/respostas extraídas do acordeão FAQ visível no site
- [x] `sameAs` Instagram — `https://www.instagram.com/advocaciapereiraoficial/`

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
