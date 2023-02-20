## Repo to reproduce the error

`Error: ENOENT: no such file or directory, open '<project_path>/.next/cache/webpack/client-development/schema.prisma'`

## Steps to trigger the error

1. Run `npm i`
2. Run `npm start`
3. Visit `http://localhost:3000/api/hello`

## Workaround

(It's already applied in `workaround` branch)

1. Set `output` in `schema.prisma` to shared monorepo `node_modules`

```
output = "../../node_modules/@prisma/client/<package_name>"
```

2. Import Prisma clients from `@prisma/client/<package_name>`
