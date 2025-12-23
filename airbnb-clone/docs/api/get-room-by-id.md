GET /rooms/:id – Detalhes do Room

Retorna informações de um room específico, identificado pelo seu id.

Resposta - 200 OK:

{
  "createdAt": "2025-11-23T21:58:36.276Z",
  "pricePerDay": "614.65",
  "photo": "https://picsum.photos/seed/CM3KoIhQh/1422/249?grayscale&blur=1",
  "reviewNote": 76,
  "availableDays": 25,
  "city": "South Gideon",
  "description": "Ergonomic Pants made with Metal for all-day only support",
  "latitude": 18.6005,
  "longitude": -36.2943,
  "id": "1"
}


| Campo           | Tipo              | Descrição                              |
| --------------- | ----------------- | -------------------------------------- |
| `createdAt`     | string (ISO Date) | Data de criação do registro            |
| `pricePerDay`   | string            | Preço diário do room (string numérica) |
| `photo`         | string (URL)      | Imagem principal do room               |
| `reviewNote`    | number            | Nota da avaliação (0–100)              |
| `availableDays` | number            | Quantidade de dias disponíveis         |
| `city`          | string            | Cidade onde o room está localizado     |
| `description`   | string            | Descrição detalhada                    |
| `latitude`      | number            | Latitude aproximada                    |
| `longitude`     | number            | Longitude aproximada                   |
| `id`            | string            | Identificador único do room            |


Erros:

404 - Not Found:

{
  "error": "Room not found."
}


500 - Internal Server Error:

{
  "error": "Internal server error."
}
