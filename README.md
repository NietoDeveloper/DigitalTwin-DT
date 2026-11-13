<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:D4AF37,50:3a2f0b,100:0A0A0F&height=140&section=header&text=Digital%20Twin%20Video%20DT&fontColor=ffffff&fontSize=36&animation=fadeIn" alt="Digital Twin DT"/>
</p>

<p align="center">
  <b>Turn video + photos into sharp, navigable 3D digital twins.</b><br/>
  Open commercial &amp; technical showcase · runs 100 % locally
</p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black"/>
  <img alt="Node" src="https://img.shields.io/badge/Node.js-22-5FA04E?logo=nodedotjs&logoColor=white"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white"/>
  <img alt="AWS" src="https://img.shields.io/badge/AWS-cloud-FF9900?logo=amazonwebservices&logoColor=white"/>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-D4AF37"/>
</p>

> **What this repo is.** A small, open website that explains what **Digital Twin DT** does, how it is priced, what it is built with, and how it compares to the market. **It is not the product.** The product code is closed source and lives elsewhere. Here you can read, run and copy everything, because it is all commercial information.

## What the product does

1. **Capture** with any camera: a few sharp photos for detail plus a short video for coverage.
2. **Upload** with resumable, direct-to-storage transfers.
3. **Reconstruct** with a native C++ / Python pipeline that builds a 3D Gaussian Splatting model.
4. **Verify** against a quality gate before delivery.
5. **Explore & share** in the browser: walk the twin, measure, annotate, send a link.

Design principles: engineering first, little AI (generative inpainting capped at 4 % of a scene), and **one space = one twin** pricing.

## Plans (USD / month, as of Nov 2026)

| Plan | Price | Spaces | Allowance per twin |
|---|---|---|---|
| Free | $0 | – | demo twins only |
| Starter | $6 | 3 | 50 photos + 1 min video |
| Plus | $24 | 10 | 50 photos + 1 min video |
| **Pro** | **$55** | 10 | 400 photos + 5 min video |
| Business | $149 | 8 | 850 photos + 10 min video |
| Scale | $249 | 20 | 850 photos + 10 min video |
| Max | $339 | 30 | 850 photos + 10 min video |
| Enterprise | custom | custom | 3,000 photos + 40 min video |

A whole building is a single twin; its allowance is shared across floors or zones. The web app is always the source of truth for prices.

## Technology

| Interface | Services | Reconstruction | Cloud & delivery |
|---|---|---|---|
| React + TypeScript | Node.js + TypeScript | C++17 | AWS |
| Three.js / R3F | MongoDB | Python | Docker |
| Tailwind CSS | Redis | 3D Gaussian Splatting | CI/CD |
| Zustand | Wompi payments | GPU acceleration | Vercel |

## Honest status

| Item | Status |
|---|---|
| Fidelity target ≈ 97 % | **Target**, still being validated with real captures. Not a published benchmark. |
| Processing time 2–3 h (ideally < 2 h) | **Target**. Depends on capture size. |
| Measurements / annotations, plan & BIM compare | In progress |
| Structural element tracking, live option | Roadmap |
| Competitor prices | Public list prices found in Nov 2026, linked in the site. Verify at the source. |

## Run it locally

Requires Node.js ≥ 20.

```bash
git clone https://github.com/NietoDeveloper/Digital-Twin-DT.git
cd Digital-Twin-DT
npm install
npm run dev
```

- Web: <http://localhost:5173>
- API: <http://localhost:4100/api/health>

If the API is not running, the site falls back to the bundled content and says so in the hero.

**With Docker** (web on 8080, API on 4100):

```bash
npm run docker:up
```

### Add your photos and videos

Put files in [`apps/web/public/media`](apps/web/public/media/README.md) (`apartment.jpg`, `apartment.mp4`, …). Missing files show a blank "coming soon" frame.

## Monorepo layout

```
apps/web         Vite + React + TS + Tailwind + R3F showcase site
apps/api         Express + TS API that serves the content (local)
packages/content Typed content shared by both (plans, features, FAQ…)
```

Scripts: `npm run dev` · `npm run build` · `npm run typecheck` · `npm test`

## Not deployed on purpose

This showcase is meant to be cloned and run locally. It deliberately contains **no product source code, no infrastructure layout, no secrets**.

## License

[MIT](LICENSE) for this repository. The Digital Twin DT product, name, logo and brand belong to Software DT.

<p align="center">
  Built by <a href="https://github.com/NietoDeveloper"><b>Manuel Nieto</b></a> · <a href="https://softwaredt.com">softwaredt.com</a> · Software DT
</p>
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:D4AF37,50:3a2f0b,100:0A0A0F&height=70&section=footer"/>
</p>
