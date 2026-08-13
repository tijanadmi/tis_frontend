# ТИС фронтенд

Ово је самосталан monorepo са пет независних React/Vite апликација и заједничким пакетима. Код је написан у JavaScript/JSX-у, без TypeScript-а.

## Апликације и URL путање

- Портал: `/`
- Диспечерски дневник: `/dispecerski-dnevnik/`
- Погонски извештај: `/pogonski-izvestaj/`
- Рад заштите: `/rad-zastite/`
- Шеме: `/sheme/`

## Прво покретање на другом рачунару

Потребни су Node.js и npm. У корену пројекта покренути:

```text
npm install
```

Копирати коренски `.env.example` у `.env` и унети адресу Go backend-а:

```text
VITE_BACKEND_URL=http://adresa-backenda:port
```

На Windows/PowerShell рачунару фајл се може направити командом:

```powershell
Copy-Item .env.example .env
```

Свих пет апликација чита исти коренски `.env`; нису потребни посебни `.env` фајлови у `apps` фолдерима. Стварни `.env` је наведен у `.gitignore` и не шаље се на GitHub.

Backend мора да дозволи cookie аутентификацију (`credentials: include`) са frontend origin-а.

## Локално покретање

Сваку апликацију покренути у посебном терминалу:

```text
npm run dev:portal
npm run dev:ddn
npm run dev:pogonski
npm run dev:zastita
npm run dev:sheme
```

Портови су редом 5100–5104. Портал је доступан на `http://localhost:5100` и аутоматски користи остале локалне портове.

## Продукциони build

```text
npm run build
```

Команда прави продукциони излаз сваке апликације у њеном `build-output` фолдеру. Web сервер мора да има SPA fallback на одговарајући `index.html` за сваки URL префикс.

Све апликације треба објавити на истом origin-у како би делиле аутентификациони cookie.

## Заједнички пакети

- `packages/ui`: стилови, layout и UI компоненте
- `packages/auth`: пријава, корисник, улоге и одјава
- `packages/api-client`: заједнички `apiFetch` и обнова токена
- `packages/hooks`: општи React hook-ови
- `packages/utils`: константе и помоћне функције
- `packages/config`: Vite alias-и и URL конфигурација

`apiLOVs.js` и `features/lovs` су намерно копирани у сваку доменску апликацију у првој фази миграције.

## GitHub

Пројекат је локално иницијализован као независан Git репозиторијум. GitHub remote није подешен. Након креирања празног GitHub репозиторијума додати remote и послати грану:

```text
git remote add origin URL_NOVOG_REPOZITORIJUMA
git push -u origin main
```
