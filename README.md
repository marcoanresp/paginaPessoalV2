# Página pessoal — versão Tailwind

Versão independente da página personalizada em `../code/index.html`, preservando conteúdo, imagem, links, layout responsivo, tema claro/escuro com persistência e navegação recolhível. Os arquivos originais permanecem intactos.

## Abrir

Abra `index.html` no navegador ou com o Live Server do VS Code. O CSS compilado está incluído: não é preciso instalar Node.js para visualizar a página. Os ícones Font Awesome continuam vindo do mesmo CDN da versão original e precisam de internet.

## Editar os estilos

Nesta pasta, execute:

```sh
npm ci
npm run build
```

Para recompilar automaticamente durante a edição:

```sh
npm run dev
```

- `index.html`: conteúdo e classes utilitárias do Tailwind.
- `assets/css/input.css`: entrada do Tailwind, cores dos temas, tipografia e ajustes de equivalência visual.
- `assets/css/styles.css`: CSS gerado, pronto para uso no navegador.
- `assets/js/script.js`: alternância de tema e menu móvel, sem dependência de Bootstrap.
- `assets/img/foto.svg`: cópia da imagem da página original.

Os breakpoints (576, 768, 992, 1200 e 1400 px), larguras dos contêineres, espaçamentos, tamanhos de fonte e cores reproduzem a referência. As menções a Bootstrap nos textos do portfólio foram preservadas para manter o conteúdo original; nenhuma biblioteca Bootstrap é carregada.

Compilação baseada na [documentação oficial do Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli).
