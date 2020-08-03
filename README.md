Este projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app).


# Pacotes e libs usados: 

• [Material-UI](https://material-ui.com/pt/) - React components for faster and easier web development.</br>
• [Recharts](https://recharts.org/en-US/) - A composable charting library built on React components.</br>
• [Material-pickers](https://material-ui-pickers.dev/) - Date & Time pickers, built for @material-ui/core


## Soluções de UI/UX implementadas:

- Foi usada algumas das premissas das [Heurísticas de Jacob Nielsen](http://www.dclick.com.br/2012/02/12/heuristica/) de usabilide para uma Interface Homem-máquina:

• Logout e Login - Visão do Status do sistema como de logado com nome de usuário e ao apertar o Logout o sistema disparar um modal avisando ao usuário se tem certeza de fazer o Logout e ir para página de Login. (Reconhecer e diagnosticas possibilidade de erros)

• Estética minimalista - Dispondo do componentes do pacotes instalado, foi implementado um modelo mais minimalsita visando diminuir a poluição visual da tela com excesso de informações, jogando as informações mais detalhas para um rota de botão "LEARN MORE" onde o usuário poderia explorar melhor os dados de cada gráfico.

• Cores e constraste - Foi implementado um design e sistema de cores da empresa com padrões mais sóbrios, que visa a acessibilidade a usuário pode ter disfunções oculares que dificultem a visualização dos estados e cores do sistema.

• Correspondência entre o sistema e o mundo real - O sistema deve exmpressar a linguagem clara aos usuários, com palavras, frases e conceitos familiares ao usuário, ao invés de termos orientados ao sistema. 

• Botões com troca de cores - Foi também colocado um design de representação de seleção nos botões para uma melhor representação de status e design no sistema.


## Scripts disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições<br />
Você também verá erros de fiapos no console.

### `npm test`

Inicia o corredor de teste no modo de observação interativo.<br />
Consulte a seção sobre a [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações..

### `npm run build`

Cria o aplicativo para produção na `build` pasta.<br />
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é minificada e os nomes de arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações..

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Se você não estiver satisfeito com a ferramenta de construção e as opções de configuração, poderá fazê-lo  `eject` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente no seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto  `eject` , ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos com curadoria é adequado para implantações pequenas e médias e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronta para isso.

## Saber mais

Você pode aprender mais na documentação do [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender a reagir, consulte a [React documentation](https://reactjs.org/).

### Divisão de código

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analisando o tamanho do pacote

Esta seção foi movida para aqui: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Criando um aplicativo Web progressivo

Esta seção foi movida para aqui https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Configuração avançada

Esta seção foi movida para aqui: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

Esta seção foi movida para aqui: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` 

Esta seção foi movida para aqui: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
