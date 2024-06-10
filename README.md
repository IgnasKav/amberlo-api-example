# amberlo-api

Setup:

1. Create Amberlo account
2. Login to account, open devloper tools, go to network tab and click on any request. Scroll down until you find "PortfolioId" header, copy the id. Paste `portfolioId` inside `api.ts` file.
3. Go to: [Amberlo swagger page](https://app.amberlo.io/login/docs/index.html), expand "CurrentUser" and execute `POST /current/secrets/`, you'll need to pass `portfolioId`. In the response you will receive `accessKey` and `secretKey`. Replace these valeus inside `api.ts`

Install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
