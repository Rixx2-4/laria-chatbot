# LARIA — Frontend

Tutor inteligente adaptativo. Interfaz Astro + React conectada al backend FastAPI (`feature/backend`).

## Idea

LARIA no es un chatbot genérico. El estudiante sube material, pregunta sobre ese documento, practica con quizzes y consulta su **perfil cognitivo**. La pedagogía (modo, dificultad, prerrequisitos, olvido) vive en el backend; esta UI solo consume la API.

## Requisitos

- Node 20+ / pnpm
- Backend LARIA en marcha (`PUBLIC_LARIA_API_URL`)
- CORS del backend debe incluir el origen del frontend (`http://localhost:4321` en local)

## Configuración

```bash
cp .env.example .env
# Por defecto: https://laria-ia.onrender.com
pnpm install
pnpm dev
```

Backend en Render:

| Uso | URL |
|-----|-----|
| Base | https://laria-ia.onrender.com |
| Health | https://laria-ia.onrender.com/health |
| Docs | https://laria-ia.onrender.com/docs |
| API | https://laria-ia.onrender.com/api/v1 |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Desarrollo en :4321 |
| `pnpm build` | Build estático |
| `pnpm preview` | Preview del build |

## Persistencia

**No se usa `localStorage` / `sessionStorage`.** Documentos, interacciones, quizzes y mastery viven en MongoDB vía API. El JWT de sesión está solo en memoria (recargar la página pide login de nuevo).

## Flujo de ramas (monorepo)

```
feature/frontend → develop → main
```

Este repo de trabajo se sincroniza a `sa2009966/LARIA-IA` en `feature/frontend`.

## Vercel

1. Root del proyecto: carpeta `frontend/` (en monorepo) o raíz (en este clone).
2. Variable `PUBLIC_LARIA_API_URL` = URL del backend (Render).
3. Añadir el dominio Vercel a `CORS_ORIGINS` del backend.
