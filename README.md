# ☁️ Cloud Resume Project (Vue 3 + AWS)

[![Build and Deploy Resume to AWS](https://github.com/white840117/cloud-resume-vue/actions/workflows/deploy.yml/badge.svg)](https://github.com/white840117/cloud-resume-vue/actions/workflows/deploy.yml)

A professional, high-availability resume website built with **Vue 3**, hosted on **AWS** and powered by a fully automated **DevOps CI/CD pipeline**. This project demonstrates the practical application of cloud architecture and modern development workflows.

🔗 **Live Demo:** [https://johnlo.cloud](https://johnlo.cloud)

---

## 🏗️ Architecture Overview

The system utilizes a **Serverless** architecture designed for scalability, security, and low latency:

* **Storage & Hosting**: **Amazon S3** for durable object storage, kept private and isolated from public access with **Origin Access Control (OAC)**.
* **Content Delivery**: **Amazon CloudFront** (CDN) for global distribution and low-latency delivery.
* **DNS Management**: **Amazon Route 53** for domain routing and health checks.
* **Security & Encryption**: **AWS Certificate Manager (ACM)** for SSL/TLS encryption (HTTPS).
* **Automated Deployment**: **GitHub Actions** with **AWS CLI** for a seamless CI/CD pipeline.
* **Infrastructure as Code**: **AWS CloudFormation** template in [`infra/template.yaml`](infra/template.yaml).

### Infrastructure as Code

The AWS resources were first created manually in the console, then brought under **CloudFormation** management (October 2026) without downtime or recreation:

1. Scanned the account with the **IaC generator** and generated a template for the existing resources.
2. Imported them into a stack with **resource import** ("Create stack with existing resources").
3. Verified with **drift detection** (`IN_SYNC`) and kept the site and deployments running throughout.

| Managed by the stack | Managed manually |
|---|---|
| S3 bucket, bucket policy, CloudFront distribution, Origin Access Control | Route 53 records, ACM certificate (`us-east-1`, passed in as the `AcmCertificateArn` parameter) |

Every resource uses `DeletionPolicy: Retain` and `UpdateReplacePolicy: Retain`, so deleting the stack or a replacing update never deletes the live resources. Preview infrastructure changes with a **change set** before executing them.

---

## 🚀 CI/CD Pipeline Workflow

To ensure a "Code-to-Cloud" experience, I implemented an automated deployment pipeline:
1.  **Code Commit**: Any update to the Vue source or content is pushed to the `main` branch.
2.  **GitHub Actions Trigger**: The push event triggers the deployment workflow.
3.  **Build**: The workflow runs `npm ci` and `npm run build` (Vite) to produce the static `dist/` bundle.
4.  **S3 Sync**: The built files are automatically synchronized to the S3 bucket.
5.  **CloudFront Invalidation**: The workflow clears the CloudFront edge cache, ensuring updates are visible globally in seconds.

Required repository secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET_NAME`, `CLOUDFRONT_DISTRIBUTION_ID`.

---

## 🧩 Site Structure

| Route | Page |
|---|---|
| `#/` | About — profile photo, career summary, contact links |
| `#/experience` | Work experience, education, certifications, skills |
| `#/projects` | Project cards, with a detail page per project (`#/projects/:id`) |
| `#/interests` | Interests and photo gallery |
| `#/island` | 3D interactive portfolio island (embeds `public/island.html`) |

Hash-based routing keeps deep links working on S3/CloudFront without extra rewrite rules. All resume content lives in `src/data/resume.js`, and photos live in `public/images/`.

> **Note:** `public/island.html` is a standalone page (Three.js loaded from the jsDelivr CDN) with its own copy of the content in a `DATA` object. Whenever `src/data/resume.js` changes, update the island's `DATA` by hand so both stay in sync.

---

## 🛠️ Tech Stack

* **Frontend**: Vue 3, Vue Router, Vite, CSS3 (Badger Red Theme)
* **Cloud Infrastructure**: Amazon Web Services (AWS)
* **DevOps**: GitHub Actions, AWS CloudFormation, YAML, Git
* **Networking**: DNS, CDN, SSL/TLS

---

## 💻 Local Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
```

---

## 🎓 About the Author

**Yun-Ting (John) Lo**
* **University of Wisconsin–Madison**: Master of Science in Information (MSIS)
* **Professional Background**: Former **Solution Architect** at **HPE** and **Marketing Assistant** at **Microsoft Taiwan**.
* **Focus**: Bridging the gap between technical architecture and strategic project management (TPM).

---
*Last Updated: October 2026*
