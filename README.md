# Totto Rodrigues — site oficial

Site estático (HTML + CSS + JavaScript, sem build), publicado pelo GitHub Pages a partir do branch `main`.

## Estrutura

```
/                              Home do autor (index.html)
/misterios-sem-respostas/      Landing page de Mistérios sem Respostas (identidade visual própria)
  assets/                      Imagens, capa e trailer da obra
/assets/                       Arquivos do site do autor
  css/site.css                 Estilos compartilhados (home e páginas futuras)
  js/site.js                   Menu mobile, cabeçalho e ano do rodapé
  img/                         Imagens da home, ícones e imagem de compartilhamento
/_modelos/pagina.html          Modelo para novas páginas internas (não indexado)
favicon.ico, apple-touch-icon.png, robots.txt, sitemap.xml
```

Todos os links internos são relativos (`misterios-sem-respostas/`, `../`), então o site funciona
tanto no endereço do GitHub Pages quanto no domínio próprio.

## Criar uma nova página (/livros/, /sobre/, /contato/, /roda-da-coruja/…)

1. Copie `_modelos/pagina.html` para `<nome>/index.html`.
2. Preencha título, descrição, canonical e Open Graph; remova o `noindex`.
3. Escreva o conteúdo dentro de `<main>`.
4. Adicione a URL em `sitemap.xml`.
5. Para Roda da Coruja: na home, troque `role="link" aria-disabled="true"` do botão
   "Conhecer o projeto" por `href="roda-da-coruja/"`.

## Pontos de edição rápida

- **Foto do autor:** comentário `FOTOGRAFIA OFICIAL DO AUTOR` em `index.html`.
- **Capa de Roda da Coruja:** comentário acima da placa tipográfica em `index.html`.
- **E-mail profissional:** comentário `E-MAIL PROFISSIONAL` em `index.html`.
- **Atualizações de bastidores:** comentário `ATUALIZAÇÕES FUTURAS` em `index.html`.
- **Links de compra de Mistérios sem Respostas:** objeto `CONFIG` no fim de
  `misterios-sem-respostas/index.html` (`fisicoUrl`, `digitalUrl`, `instagram`).

## Domínio (tottorodrigues.com.br)

1. No painel do registro.br, configure o DNS do domínio:
   - registros **A** de `tottorodrigues.com.br` para `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153` e `185.199.111.153`;
   - registro **CNAME** de `www` para `supertotto.github.io`.
2. No GitHub: *Settings → Pages → Custom domain* → `tottorodrigues.com.br` → salvar.
   (Isso cria o arquivo `CNAME` no repositório.)
3. Depois que o certificado for emitido, marque *Enforce HTTPS*.
