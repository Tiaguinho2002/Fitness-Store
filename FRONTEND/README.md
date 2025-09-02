# Título

<!-- Shields Exemplo, existem N diferentes shield em https://shields.io/ -->
![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/seu-repositorio)
![GitHub language count](https://img.shields.io/github/languages/count/seu-usuario/seu-repositorio)
![Github repo size](https://img.shields.io/github/repo-size/seu-usuario/seu-repositorio)
![Github stars](https://img.shields.io/github/stars/seu-usuario/seu-repositorio?style=social)

![Capa do Projeto](https://i.imgur.com/vQ2qog3.png)

> Projeto de E-Ecomerce de Suplementos.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Antes de começar, verifique se você possui o `NodeJS` instalado em sua máquina. Se não tiver, você pode baixar o `NodeJs` [aqui](https://nodejs.org/pt-br/download).

## Como executar o projeto

Siga as etapas abaixo para executar o projeto em sua máquina local:

Execute os seguintes comandos a partir da pasta raiz do projeto:

<!-- Aqui é tudo exemplo, só trocar -->

### Clone este repositório

```bash
git clone <link-do-repositorio>
```

Este link pode ser encontrado no botão verde acima `Code`.

### Instale as dependências

```bash
npm install
```

### Defina as variáveis de ambiente

Descrição de como definir as variáveis de ambiente

### Execute o Projeto

```bash
npm run dev
```

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte maneira:

```text
/
|-- pasta1/
|   |-- arquivo1
|   |-- arquivo2
|-- pasta2/
|   |-- arquivo3
|   |-- arquivo4
|-- ...
```

<!-- Outra forma de descrever é em texto corrido -->

### Disposição e estilos

* `pasta1`: Dados estruturados para serem reusados de maneira X. Por exemplo Y

* `pasta2`: Componentes que podem ser reusados entre as páginas. Por exemplo Z
  
* `...`: Outras informações

### Configurações e CI/CD

* `pasta3/arquivo`: Configurações técnicas do projeto.

## Como contribuir

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Criar a solicitação de pull.

Como alternativa, consulte a documentação do GitHub sobre [como criar uma solicitação de pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Membros do Projeto (Opcional)

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/tiaguinho2002">
        <img src="https://github.com/tiaguinho2002.png" width="100px">
        <br>
        <sub>
          <b>Tiago</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Licença

Este projeto está sob licença. Consulte [LICENSE](LICENSE.md) para obter mais informações.

## Voltar ao topo

[⬆ Voltar ao topo](#título)




    
         <h1 className='Products-name'>Whey Protein</h1>
            <div className='Products'> 
                <div className='product-whey-1'  >
                <a href="">
                    <img className='preferido-one' src={minhasImagems} alt="Whey Protein" />
                </a>
                <h3 title={'Whey Protein concentrado (1KG)'} >Whey Protein concentrado (1KG)</h3>
                <span price={66.90}>R$66,90</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
          </div>


            <div className='product-whey-2' id='2'>
                <a href="">
                    <img className='preferido-two' src={imgs} alt="Whey-protein" />
                </a>
                <h3>Whey Protein concentrado (2KG)</h3>
                <span>R$82,99</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart }className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-whey-3'>
                <a   href="">
                    <img className='preferido-tree'  src={imagens} alt="pré-treino" />
                </a>
                <h3>Whey Protein concentrado (3KG)</h3>
                <span>R$95,99</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-whey-4'>
                <a   href="">
                    <img className='preferido-tree'  src={imagens} alt="pré-treino" />
                </a>
                <h3>Whey Protein concentrado (4KG)</h3>
                <span>R$106,90</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            </div>


            <h1 className='Products-name'>Ganho de Massa</h1>
            <div className='Products'> 
                <div className='product-creatina-1'>
                <a href="">
                    <img className='preferido-one' src={minhasImagems} alt="Creatina" />
                </a>
                <h3> Creatina Monohidratada 250g</h3>
                <span>R$29,99</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-creatina-2'>
                <a href="">
                    <img className='preferido-two' src={imgs} alt="Whey-protein" />
                </a>
                <h3> Creatina 250g (Creapure)</h3>
                <span>R$39,90</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-creatina-3'>
                <a   href="">
                    <img className='preferido-tree'  src={imagens} alt="pré-treino" />
                </a>
                <h3> Creatina Monohidratada 500g</h3>
                <span>R$49,90</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-creatina-4'>
                <a   href="">
                    <img className='preferido-tree'  src={imagens} alt="pré-treino" />
                </a>
                <h3> Creatina 500g (Creapure)</h3>
                <span>R$65,66</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            </div>

            <h1 className='Products-name'>Ganho de Força</h1>
            <div className='Products'> 
                <div className='product-hipercalorico-1'>
                <a href="">
                    <img className='preferido-one' src={minhasImagems} alt="Creatina" />
                </a>
                <h3>Hipercalorico 500g</h3>
                <span>R$35,90</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-hipercalorico-2'>
                <a href="">
                    <img className='preferido-two' src={imgs} alt="Whey-protein" />
                </a>
                <h3>Hipercalorico 500g</h3>
                <span>R$45,99</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-hipercalorico-3'>
                <a   href="">
                    <img className='preferido-tree'  src={imagens} alt="pré-treino" />
                </a>
                <h3>Hipercalorico 500g</h3>
                <span>R$55,66</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            <div className='product-hipercalorico-4'>
                <a   href="">
                    <img className='preferido-tree'  src={imagens} alt="pré-treino" />
                </a>
                <h3>Hipercalorico 500g</h3>
                <span>R$69,99</span>
                <h4>no PIX, R$70.00 no pagamento via cartão em até 6x de R$8,33 sem juros</h4>
                <button onClick={ handleAddCart } className='btn-comprar'>Comprar</button>
            </div>
            </div>