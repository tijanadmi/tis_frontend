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

Пре build-а проверити да коренски `.env` садржи адресу продукционог backend-а, на пример:

```text
VITE_BACKEND_URL=https://tis.firma.rs/api
```

`VITE_BACKEND_URL` се уграђује у JavaScript током build-а. Промена `.env` фајла након build-а не мења већ направљене фајлове, па након сваке промене адресе треба поново покренути build.

Није потребно улазити у фолдер сваке апликације. У корену пројекта покренути једну команду:

```text
npm run build
```

Команда прави продукциони излаз свих пет апликација у следећим фолдерима:

```text
apps/portal/build-output
apps/dispecerski-dnevnik/build-output
apps/pogonski-izvestaj/build-output
apps/rad-zastite/build-output
apps/sheme/build-output
```

На Caddy сервер пренети садржај сваког `build-output` фолдера у одговарајући директоријум, на пример:

```text
/srv/tis/portal
/srv/tis/dispecerski-dnevnik
/srv/tis/pogonski-izvestaj
/srv/tis/rad-zastite
/srv/tis/sheme
```

Не треба преносити изворни код ни `node_modules`, већ само садржај наведених `build-output` фолдера.

Ако је измењена само једна апликација, њен build се може направити из корена пројекта одговарајућом командом:

```text
npm run build --workspace @tis/portal
npm run build --workspace @tis/dispecerski-dnevnik
npm run build --workspace @tis/pogonski-izvestaj
npm run build --workspace @tis/rad-zastite
npm run build --workspace @tis/sheme
```

У том случају на сервер је довољно пренети `build-output` те апликације. За комплетан deployment препоручено је покренути `npm run build` и пренети свих пет излазних фолдера.

Web сервер мора да има SPA fallback на одговарајући `index.html` за сваки URL префикс. После преноса проверити портал и директно отварање путања сваке апликације.

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
