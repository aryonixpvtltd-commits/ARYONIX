# ARYONIX Website — Worklog

---
Task ID: 1 (full rebuild after workspace reset)
Agent: Z.ai Code (main agent)
Task: The workspace was found reset to the pristine template between sessions (all custom components, lib modules, brand assets, the New Dimension export and the previous worklog were lost). Rebuilt the complete ARYONIX production site from the established design brief, now with SIX Selected Work entries including two fully browsable concept sites (New Dimension + Rockfold).

Work Log:
- Discovery: src/ reset to template (only ui/ + db/utils), public/brand + public/new-dimension gone, worklog gone, /home/z/nd-build and /tmp extracts gone. Survivors: upload/aryonixlogo.png, upload/new-dimension-aryonix-concept.zip, upload/rockfold-fitness-website.zip, template node_modules, dev server healthy.
- Brand assets: recreated PIL pipeline (scripts/make_brand_assets.py) — distance-based soft keying (bg ref [0,3,15], thresholds 20→62) on upload/aryonixlogo.png (1254×1254, baked navy bg) without recoloring the mark. Split content blocks: blue A mark (block0), ARYONIX wordmark (block1), light divider (block2), DESIGN. DEVELOP. DEPLOY. tagline (block3). Produced public/brand/{logo-mark 288×244, logo-wordmark 460×52, logo-full 760×581}.png + src/app/{icon 512, apple-icon 180, opengraph-image, twitter-image 1200×630 on #08090B}.png. All serve 200.
- Data layer: src/lib/site.ts (brand facts, nav), services.ts (8 services with inquiry preselect mapping), work.ts (6 entries, ProjectStatus union: "Concept Project" | "Prospective-Client Demo" | "Unapproved Concept Proposal", per-project caseStudy.disclaimer, optional liveDemo {href, linkLabel, note}), inquiry.ts (11 project types with per-type features, 6 budgets, 5 timelines, buildWhatsAppMessage + buildWhatsAppLink → wa.me/919359368382).
- Design system: globals.css — dark-only tokens (#08090B/#111317/#F3F4F6/#969BA5/#386BFF), .shell, .label-micro, .text-stroke, scroll-reveal gated on html.js (content visible without JS), marquee/hero-float/orbit-spin keyframes, dark scrollbars, blue selection, focus-visible ring, prefers-reduced-motion kill-switch. layout.tsx — Inter + Space Grotesk + Cormorant Garamond (ND mockup) + Archivo (RF mockup) via next/font, full metadata, Organization JSON-LD, html.js boot script.
- Primitives: Reveal (IntersectionObserver + reduced-motion safe), SectionHeader (indexed headers 01–06), LogoLockup (keyed mark+wordmark), TaglineMarquee (aria-hidden duplicate track).
- Nav: fixed, transparent→blurred on scroll, solid while mobile overlay open (avoids backdrop-filter containing-block trap), mobile dialog menu with aria wiring, Escape, focus in/out, scroll lock.
- Hero: exact brief copy + blue period signature, dual CTAs, tagline row, original all-CSS visual (browser frame with miniature ARYONIX homepage, overlapping palette/type specimen card, blueprint dot grid + registration marks).
- Services: sticky intro + 8 editorial rows; clicking a row dispatches "aryonix:preselect-type" CustomEvent and scrolls to #inquiry (verified: "E-commerce Websites" → step 2 with ecommerce checked).
- Studio: "Design-led. Engineering-grade." + 5 principles grid. Process: 6 numbered steps (01 Discover … 06 Evolve).
- Work: 6 entries with genuinely distinct mockups — FITNIQ (condensed italic + stripes + text-stroke), ORBIT (rings + orbit-spin + schedule rows), MERIDIAN (light editorial serif), FOLIO (whitespace grid), NEW DIMENSION (ivory/charcoal photo-led, Cormorant, demo-ribbon, Placeholder·Unsplash labels), ROCKFOLD FITNESS (dark cinematic, inline SVG badge with arc text + barbell, Archivo black headline "LIFT. REPEAT. BELONG.", real training photos, "Concept photography" + "Demo form · placeholders only" labels). Case-study Dialog per entry with per-project honest disclaimers.
- Demo viewer (demo-viewer.tsx): full-screen Dialog with top bar (title + per-project note + always-visible "Open in new tab" fallback + close) and iframe for the two exported concept sites.
- Inquiry: 4-step progressive disclosure (Contact → Project → Features & preferences → Review & send); validation with flushSync so focus lands on the first invalid field after React 19 batching (fixed during QA); role=alert errors, aria-invalid, values preserved across steps; feature chips derived from selected type (reset on change); review step with per-section Edit; WhatsApp handoff with confirmation panel (Reopen link, copy, collapsible preview, "not sent automatically / nothing stored" copy, email fallback, new-inquiry reset).
- Final CTA + footer: contact index (email/WhatsApp/Instagram/GitHub/website — real facts only), footer with auto year (© 2026 verified), safe-area padding, mt-auto sticky footer.
- New Dimension export rebuilt: zip → /home/z/nd-build/app, next.config (output:"export", basePath:"/new-dimension", images.unoptimized, ignore TS/ESLint), api route removed, node_modules hard-linked (cp -al) after fixing a wrong-destination copy, next build → out/ → public/new-dimension/ (6.5MB, 200-verified). Mockup photos re-copied to public/work/new-dimension/.
- next.config.ts rewrites (beforeFiles): /images/:path* → /new-dimension/images/:path* and /nd-monogram.svg → /new-dimension/nd-monogram.svg (fixes next/image+unoptimized basePath omission; ARYONIX site never uses /images/*).
- eslint.config.mjs ignores: public/new-dimension/**, public/rockfold/**, scripts/qa-*.png. Final lint clean (fixed react-hooks/preserve-manual-memoization by restructuring message useMemo deps; listener moved to useEffect; unused eslint-disable removed).

Agent Browser QA (screenshots in scripts/qa2-*.png):
- Desktop 1440×900: hero, marquee, services rows, all 6 work mockups, Rockfold + FITNIQ dialogs, studio, process, CTA, footer — all verified visually.
- Rockfold viewer: iframe loads /rockfold/index.html (title verified), 15 imgs (14 loaded; the "broken" one is the concept's own empty crossfade layer vLayerB by design), instant-scroll inside iframe works, viewer chrome note correct.
- ND viewer: iframe loads /new-dimension/index.html, images lazy-load on scroll (3/14 at open — rest fire on scroll, consistent with prior session).
- Form: empty submit → 2 role=alert errors + focus inq-fullName (after flushSync fix); bad email → specific message + focus inq-email + values preserved; short description error; full valid flow → step 4 review → WhatsApp popup on api.whatsapp.com with phone=919359368382 and the FULL encoded message (name/email/brand/type/description/features/budget/timeline) — payload verified in the popup URL; confirmation panel with Reopen/Copy/Preview + email fallback + new-inquiry reset. NOTE: after opening, evals defaulted to the popup tab (same false-reading trap as last session) — closed popup before verifying main tab.
- Services preselect: "E-commerce Websites" → step 2 with ecommerce radio checked.
- Mobile 390×844: no horizontal overflow; hero, menu overlay (opaque rgb(8,9,11), focus→first link), studio/process, footer verified; early "blank hero" screenshot was a mid-reveal-transition capture — DOM states confirmed "in" and re-screenshot correct.
- Console: zero page errors; only HMR/React-DevTools info. Dev log clean. Metadata icons + OG image + brand assets all 200.

Stage Summary:
- Full ARYONIX site rebuilt and hardened at / (single user-visible route), lint clean, dev server healthy on 3000.
- Selected Work now: 4 self-initiated concepts + 2 real-business browsable concepts (New Dimension demo, Rockfold unapproved proposal), each with honest labels at every level.
- WhatsApp journey verified end-to-end with exact recipient 919359368382.
- Key artifacts: src/components/* (16 components incl. demo-viewer), src/lib/* (4 data modules), public/brand/*, public/new-dimension/ (export), public/rockfold/ (static site), public/work/{new-dimension,rockfold}/ (mockup photos), scripts/make_brand_assets.py.
- Rebuild recipe for ND export: /home/z/nd-build/app (node_modules hard-linked) → ./node_modules/.bin/next build → cp out → public/new-dimension/. Rockfold needs no build (plain static files).

---
Task ID: 3
Agent: Z.ai Code (main)
Task: Remove the four "empty example" projects (FITNIQ, ORBIT FITNESS, MERIDIAN & CO., FOLIO) from the "Work that shows how we think" section — keep only the two real-business concepts (NEW DIMENSION, ROCKFOLD FITNESS).

Work Log:
- Removed the 4 self-initiated concept entries from src/lib/work.ts; reindexed NEW DIMENSION → "01", ROCKFOLD FITNESS → "02"
- Cleaned types in work.ts: Project["id"] now "new-dimension" | "rockfold"; variant union now "nd-cinematic" | "rf-cinematic"; ProjectStatus reduced to "Prospective-Client Demo" | "Unapproved Concept Proposal"; liveDemo made required (both projects have one)
- Rewrote NEW DIMENSION overview to drop the "Unlike the self-initiated studies above" reference
- Removed FitniqMockup / OrbitMockup / MeridianMockup / FolioMockup and their switch cases from src/components/project-mockups.tsx
- Updated work-section.tsx lead copy: now "Two concepts built for real businesses … Every entry is labelled honestly: no client engagement is implied, and nothing here is presented as client work."
- Removed now-unused CSS from globals.css: .text-stroke (FITNIQ) and .orbit-spin keyframes/class incl. reduced-motion reference
- Verified no stale references remain (grep for fitniq/orbit/meridian/folio/text-stroke/orbit-spin/old variants); only remaining hit is inquiry.ts "Personal portfolio" service option, which is an unrelated inquiry form category
- QA via agent-browser: #work has exactly 2 articles (01 NEW DIMENSION, 02 ROCKFOLD FITNESS); both case-study dialogs open with correct status/disclaimer; demo viewer opens /rockfold/index.html with honesty note; Escape closes viewer then dialog (layering intact); console clean; desktop + 390×844 mobile render with no horizontal overflow; lint clean
- Noted stale 404 log entries for /work/new-dimension/*.jpg — confirmed historical (files exist on disk since 07:25, current requests 200, images render in screenshots)

Stage Summary:
- Work section now contains only the two complete, browseable real-business concepts; all "empty example" placeholder studies removed
- Honest-positioning copy updated throughout the section; footer note ("Concept studies on this site are labelled as such") remains accurate
- No public/ or concept-site assets touched; both live demos (new-dimension, rockfold) unaffected

---
Task ID: 4
Agent: Z.ai Code (main)
Task: Add the uploaded Blend Studioo concept website (upload/blendstudio.html) as a third entry in the "Work that shows how we think" section.

Work Log:
- Assessed upload/blendstudio.html: self-contained ARYONIX concept (87KB) for Blend Studioo, a hair/beauty/grooming studio in Baner, Pune; concept cover, numbered services menu, dark ritual chapter, demo-mode booking, reviews deliberately linked to Google (no invented testimonials); only name/locality/live-URL asserted as facts
- Deployed verbatim to public/blendstudio/index.html (serves 200; imagery is the concept's own Unsplash hotlinks with fallback chains)
- Downloaded the concept's own licensed stock images to public/work/blend-studioo/ (hero.jpg 1100x1320 salon shot, colour.jpg 720x540 stylist shot — first Unsplash ID failed, used the concept's fallback ID)
- Added Fraunces via next/font/google (variable --font-fraunces-var, preload:false, normal+italic) in layout.tsx; mapped --font-fraunces token in globals.css @theme inline
- work.ts: extended ProjectStatus with "Unofficial Concept Study" (matches the concept's own on-page label); added entry id "blend-studioo", index "03", liveDemo href /blendstudio/index.html, honest description/scope/buildNotes/disclaimer (not commissioned or endorsed; details pending verification)
- project-mockups.tsx: added BlendStudiooMockup (variant "bs-editorial") — charcoal honesty ribbon, ivory split hero with Fraunces "Your beauty, your ritual." + champagne italic, salon photo with "Licensed stock · Unsplash" label, service-ticker strip with "Details pending verification" chip
- work-section.tsx: lead copy updated to "Three concepts built for real businesses"
- eslint.config.mjs: added public/blendstudio/** to ignores
- DemoViewer fix: same-origin iframe now forwards Escape (capture listener on iframe document, stable onOpenChange ref) — Escape closes the viewer even when focus is inside the concept site; benefits all three concepts
- Mobile overflow fix: nowrap ticker's intrinsic min-content propagated through the grid item (min-width:auto chain) widening the page to 689px; fixed with min-w-0 on the work-section visual grid item + min-w-0 on ticker + copy-only mobile layout (figure/lede hidden below sm); ribbon text now wraps instead of truncating
- QA via agent-browser: 3 entries (01 NEW DIMENSION / 02 ROCKFOLD FITNESS / 03 BLEND STUDIOO), statuses correct, Blend dialog + viewer + concept cover dismissal + services accordion + demo-mode form ("Nothing is stored or sent") all verified; Escape layering works from inside iframe; Rockfold viewer regression passed; desktop 1280 and mobile 390 no horizontal overflow; lint clean; dev.log clean

Stage Summary:
- Work section now presents three browseable real-business concepts, each with its own honest status: Prospective-Client Demo / Unapproved Concept Proposal / Unofficial Concept Study
- Blend Studioo concept is fully browseable in-page with all its honesty guards intact (concept cover, demo-mode form, stock labels, no-index meta)
- Shared DemoViewer improvement: Escape-from-iframe forwarding fixes keyboard dismissal for all embedded concept sites
- Layout hardening: work-section grid item min-w-0 prevents any future nowrap preview chrome from widening the page
