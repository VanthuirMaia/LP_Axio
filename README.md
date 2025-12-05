# AXIO – Landing Page Oficial

Landing page desenvolvida com **React + Vite + TypeScript + TailwindCSS**, criada para apresentar a AXIO — uma plataforma de automação inteligente para negócios que precisam organizar atendimento, reduzir faltas e modernizar o contato com clientes via WhatsApp.

---

## 🚀 Tecnologias Utilizadas

- **React 18**
- **Vite**
- **TypeScript**
- **TailwindCSS**
- **Lucide Icons**
- **Componentes UI personalizados (Lovable base)**

---

## 📂 Estrutura do Projeto

src/
components/ → Botões, Header, Seções da página
hooks/ → Hooks reutilizáveis
lib/ → Utilidades (ex: constantes do WhatsApp)
pages/ → Estrutura principal da LP
styles/ → CSS base + configurações Tailwind
App.tsx → Renderização geral
main.tsx → Entrada da aplicação
index.html → Template base
tailwind.config.ts
vite.config.ts
package.json

---

## ▶️ Como Rodar Localmente

Certifique-se de ter **Node 18+** instalado.

### 1. Instale as dependências

npm install

### 2. Rode o servidor de desenvolvimento

npm run dev

Acesse em:

http://localhost:5173

---

## 🛠 Ajustes Personalizáveis

### 🔗 Link do WhatsApp

Configurado em:

src/lib/whatsapp.ts

Edite:

export const WHATSAPP_NUMBER = "5587xxxxxxxx";
export const MSG_ATENDIMENTO = encodeURIComponent("Sua mensagem padrão");
export const MSG_DEMO = encodeURIComponent("Mensagem para demonstração");

Essas constantes são usadas nos botões de contato distribuídos pela LP.

---

## 📦 Build para Produção

Para gerar os arquivos prontos para subir ao servidor:

npm run build

Os arquivos finais ficarão em:

dist/

---

## 🚀 Deploy Manual (qualquer servidor)

1. Rode:

npm run build

2. Faça upload da pasta dist/ para o seu servidor
3. Configure o servidor para servir o arquivo:

/dist/index.html

como página inicial.

---

## 🎨 Customização de Estilos

O tema utiliza:

- Paleta **dark** com acentos em amarelo
- Gradientes configurados no :root
- Tailwind com tokens personalizados em:

src/index.css

Você pode ajustar:

- cores
- espaçamentos
- sombras
- gradientes
- animações

Diretamente via Tailwind ou nas variáveis CSS do projeto.

---

## 🧪 Recursos Inclusos

- Header fixo com CTA de WhatsApp
- Seção Hero animada
- Sessões explicativas
- Grid de segmentos atendidos
- Botões com hover suave
- Ícones do Lucide
- Layout totalmente responsivo

---

## 📞 Contato

**+55 87 99607 5897**
**+55 87 98153 1743**

Projeto desenvolvido para apresentação da **AXIO — Automação Inteligente para Negócios**.

---

## 📄 Licença

Uso pessoal e interno da AXIO.

© 2025 AXIO – Todos os direitos reservados.
