# ROCKFOLD FITNESS — Website Design Concept

**Studio:** ARYONIX · **Status:** UNAPPROVED CONCEPT PROPOSAL (not client-approved)
**Location (client-verified):** Grant Rd, beside Gera Bungalow, near Phoenix World School, Ubale Nagar, Wagholi, Pune, Maharashtra 411014

A premium, cinematic single-page fitness website concept. Static HTML + CSS + vanilla JS — no build step, no dependencies to install.

---

## 1 · What's inside

```
rockfold-fitness-website/
├── index.html        ← the entire website (self-contained: styles, scripts, embedded logo system)
├── 404.html          ← on-brand 404 page (used automatically by Vercel & most static hosts)
├── robots.txt        ← crawler rules (set final domain before deploy)
├── sitemap.xml       ← sitemap skeleton (set final domain before deploy)
├── vercel.json       ← minimal Vercel config (clean URLs)
├── package.json      ← optional helper scripts (no dependencies required)
└── README.md         ← this file
```

## 2 · Run it in VS Code

Any ONE of these options works:

**Option A — Live Server (recommended)**
1. Open the folder in VS Code (`File → Open Folder…`).
2. Install the **Live Server** extension (Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.

**Option B — Terminal**
```bash
npx serve .          # uses the package.json helper (needs Node.js)
# or
python3 -m http.server 3000    # then visit http://localhost:3000
```

**Option C — No tools at all**
Double-click `index.html`. Everything works (Google Fonts, Maps and imagery need internet).

## 3 · Embed the client's real logo (60 seconds)

The site ships with a built-in **vector rendition** of the badge so it never looks broken.
To use the actual emblem PNG:

1. Open the site → click **LOGO SETUP** (bottom-left corner).
2. Drag the emblem PNG into the panel — it applies site-wide instantly and is
   remembered in that browser (localStorage).
3. Click **Copy base64**, open `index.html`, find `LOGO_SRC` near the top of the
   page script, and paste the string between the quotes:
   ```js
   var LOGO_SRC = 'data:image/png;base64,…pasted string…';
   ```
4. Before launch, set `SHOW_LOGO_TOOL = false` (same script block) or delete the
   Logo Setup button + dialog.

The vector mark is defined once in an inline `<svg>` (`id="rfmark"`) — edit it there
if you ever want to tweak the stand-in badge.

## 4 · Deploy to Vercel

**Dashboard:** [vercel.com/new](https://vercel.com/new) → import or drag-drop this folder → Deploy.
Static files are auto-detected; `404.html` is picked up automatically.

**CLI:**
```bash
npm i -g vercel
vercel --prod
```

**After the domain is confirmed, update:**
- [ ] Uncomment the `<link rel="canonical">` in `index.html` and set the URL
- [ ] `sitemap.xml` + `robots.txt` — replace the placeholder domain
- [ ] Structured data — add `"logo"` with the absolute live URL
- [ ] Open Graph image — replace the placeholder photo URL if desired

## 5 · Verification checklist (business facts)

- [x] Street address — client-verified
- [x] Mobile — +91 96047 89090 (client-verified)
- [x] Hours — 6:00 AM – 11:00 PM (confirm open days: currently assumed Mon–Sun)
- [x] Google Maps — live embed in standard Google colors + client short link
- [x] Logo — embedded system (see §3)
- [ ] Email address — placeholder until supplied
- [ ] Social profile URLs — placeholders until supplied
- [ ] Service categories (Strength / Functional / PT / Conditioning) — still PROPOSED
- [ ] Trainers — 3 intentionally empty placeholder profiles; publish only verified names,
      roles, certifications, bios, portraits
- [ ] Photography — ALL images are licensed Unsplash placeholders, NOT photos of the gym
- [ ] Privacy policy text — placeholder dialog until supplied
- [ ] Form backend — see §6

### Photography placeholders (Unsplash License — replace with real gym photos)

| Unsplash photo ID | Used in |
|---|---|
| photo-1541534741688-6078c6bfb5c5 | Hero |
| photo-1571019613454-1cb2f99b2d8b | Brand statement |
| photo-1549476464-37392f717541 | Category — Strength Training |
| photo-1517836357463-d25dfeac3438 | Category — Functional Fitness |
| photo-1574680096145-d05b474e2155 | Category — Personal Training |
| photo-1526506118085-60ce8714f8c5 | Category — Conditioning |
| photo-1534438327276-14e5300c3a48 | Gallery FIG.01 |
| photo-1540497077202-7c8a3999166f | Gallery FIG.02 |
| photo-1521804906057-1df8fdb718b7 | Gallery FIG.03 |
| photo-1546483875-ad9014c88eba | Gallery FIG.04 |

Record photographer credits from each photo page before publishing.

## 6 · Implemented vs demo-only

**Fully implemented:** navigation (desktop + animated mobile menu), scroll reveals,
gallery crossfade viewer, form validation with accessible errors, honeypot spam trap,
smooth scrolling, reduced-motion support, SEO metadata, structured data, 404 page,
sitemap/robots, embedded logo system.

**Demonstration-only:** the enquiry form shows an explicit **DEMO MODE** success panel —
no data is transmitted or stored. To go live, POST the payload (name, phone, email,
goal, contact method) to a secure server endpoint or form service in the submit
handler. Never place API keys in this file.
