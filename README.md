# **Sistema de Gestão de Funcionários - Frontend**  

Este projeto é uma aplicação frontend para gerenciar registros de funcionários, desenvolvida com React.js e estilizada com Bootstrap.

**Funcionalidades**  
Interface amigável para operações CRUD em dados de funcionários   
Navegação utilizando rotas do React Router    
Estilização com Bootstrap   

**Tecnologias Utilizadas**
React.js
Bootstrap
Axios (para requisições HTTP)   

**Pré-requisitos**  
Node.js   
npm ou yarn   

**Instalação**    
Passo a Passo    

Clone o repositório:
bash
Copiar código
git clone <https://github.com/KennerChristian/frontendapi-funcionarios.git>     


**Instalar dependências:**   
bash   
Copiar código   
npm install   


**Configurar a URL da API:**    
Atualize o arquivo src/services/api.js com a URL do seu backend:    
javascript     
Copiar código     
export default axios.create({     
  baseURL: "http://localhost:8080/api-funcionarios"     
});    


**Executar a aplicação:**     
bash    
Copiar código   
npm start    


**Deploy**    
Vercel    
Configurar o Vercel:    
Faça login ou crie uma conta no Vercel.    
Crie um novo projeto e conecte-o ao seu repositório GitHub.    
Deploy:    
Siga as instruções no Vercel para implantar sua aplicação.   

**Uso**   
Após iniciar a aplicação, você pode acessá-la em http://localhost:3000.    
A aplicação fornecerá uma interface para interagir com o backend e gerenciar registros de funcionários.