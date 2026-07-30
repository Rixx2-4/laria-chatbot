# Deploy LARIA frontend

## Producción actual

- App: https://laria-chatbot.vercel.app
- Repo GitHub: https://github.com/Rixx2-4/laria-chatbot (`main`)
- Espejo monorepo: https://github.com/sa2009966/LARIA-IA/tree/feature/frontend (`frontend/`)

## Variable obligatoria en Vercel

En Project Settings → Environment Variables:

```
PUBLIC_LARIA_API_URL=https://laria-ia.onrender.com
```

Sin esta variable, login/registro fallarán en producción.

Backend: https://laria-ia.onrender.com (`/health`, `/docs`, `/api/v1`).

Luego: **Redeploy**.

## CORS en el backend (Render / local)

`CORS_ORIGINS` debe incluir:

```json
["https://laria-chatbot.vercel.app","http://localhost:4321"]
```

## Re-apuntar Vercel al monorepo (opcional)

1. Vercel → Project → Settings → Git
2. Conectar `sa2009966/LARIA-IA`, rama `feature/frontend`
3. Root Directory: `frontend`
4. Build: `pnpm build` · Output: `dist`
5. Misma env `PUBLIC_LARIA_API_URL`
