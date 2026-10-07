# Cloud Resume (Vue 3 + Vite)

Personal resume site for Yun-Ting (John) Lo — https://johnlo.cloud

- Pages: About, Experience, Projects (+ per-project pages), Interests/Gallery (hash routing)
- Content lives in `src/data/resume.js`; photos in `public/images/`
- Deploy: push to `main` → GitHub Actions builds with Vite and syncs `dist/` to S3, then invalidates CloudFront.
  Required repo secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET_NAME`, `CLOUDFRONT_DISTRIBUTION_ID`.

```bash
npm install
npm run dev
npm run build
```
