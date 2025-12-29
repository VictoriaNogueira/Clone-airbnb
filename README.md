# Clone-airbnb - Next.js
Criação de um clone simplificado do Airbnb, com duas telas principais: tela inicial (Home Page) e tela de detalhes do Produto (Room individual).

# Tecnologias utilizadas 
Next.js (App Router), React, TypeScript, Tailwind CSS e testes automatizados com Jest + React Testing Library.

# Como rodar o projeto
npm install
npm install lucide-react
npm install @heroicons/react
npm run dev
http://localhost:3000

# Estrutura do projeto
src/
 ├─ app/
 │   ├─ (pages)/
 │   │   ├─ (home)/
 │   │   │   ├─ layout.tsx
 │   │   │   └─ page.tsx
 │   │   └─ rooms/
 │   │       └─ [id]/
 │   │           └─ page.tsx
 │   │
 │   ├─ components/
 │   │   ├─ Header/
 │   │   │   ├─ Header.tsx
 │   │   │   └─ SearchBar.tsx
 │   │   ├─ RoomCard.tsx
 │   │   ├─ RoomMap.tsx
 │   │   └─ RoomPagination.tsx
 │   │
 │   ├─ favicon.ico
 │   ├─ globals.css
 │   └─ layout.tsx
 │
 ├─ components/__tests__/
 │   ├─ Header.test.tsx
 │   ├─ page.test.tsx
 │   ├─ RoomCard.test.tsx
 │   ├─ RoomMap.test.tsx
 │   └─ RoomPagination.test.tsx
 │
 ├─ services/
 │   └─ rooms.ts
 │
 ├─ types/
 │   └─ Room.ts
 │
 └─ lib/

# Funcionalidades
- Listagem de acomodações
- Paginação de resultados
- Card de acomodação com:
  - Imagem
  - Cidade
  - Preço
  - Avaliação
  - Disponibilidade
- Navegação dinâmica por ID
- Mapa integrado (OpenStreetMap via iframe)

# Testes
Os testes cobrem:
- Renderização de componentes
- Dados exibidos corretamente
- Paginação
- Links e navegação
- Mock de serviços e dependências externas
- Mock de `next/link` e `next/image`

# Executar os testes
npm test




