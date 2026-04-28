

## Plan: Wollaston Hanks — Client Feedback Implementation

### Summary
Restructure the homepage to match the client's exact 11-section layout, add a "Development Delivery" capability section, refine language/tone across all pages, and add a hero video background. Most structure already exists but needs repositioning from "consultancy" to "platform."

---

### What the client is asking for (gap analysis)

**Already done well:**
- Homepage hero with correct headline and CTAs
- Platform page with 3 divisions
- Submit Opportunity page
- Opportunities page
- UK/US region pages
- Founder section
- Overall navy/gold aesthetic

**Needs fixing:**

| Issue | Current State | Required |
|-------|--------------|----------|
| Homepage structure | 10 sections, close but missing Development Delivery section and wrong ordering | Exact 11-section layout per client spec |
| Platform Section 3 | Shows 4 cards (includes "Distressed Asset Solutions" separately) | Must show exactly 3 divisions: Strategic Development, Capital & Asset Advisory, Investment & Development Sales |
| Development Delivery section | Only exists on Platform page as small cards | Must be prominent Section 4 on homepage AND integrated across the site |
| Hero video | Static image | Cinematic looping video background required |
| Language tone | Some "we help", "learn more" phrases | Must use "originates", "structures", "delivers", "unlocks value" — remove all "services" language |
| Supporting Capabilities | Basic cards on Platform page | Needs expansion: development management, contractor coordination, infrastructure, electrical, CGI/visualisation, interior design, public consultation |
| CTA labels | Some generic | Must use "Submit Development Opportunity", "Investor Enquiry" etc. |

---

### Implementation Steps

#### 1. Homepage Restructure (Index.tsx) — Major rewrite

Reorganize to match the client's exact 11-section spec:

1. **Hero** — Add looping video background (use a stock video URL or placeholder `<video>` element with poster image fallback). Keep existing headline/CTAs.
2. **Platform Positioning** — Already exists as Section 2, minor copy refinement.
3. **Platform Overview** — Change from 4 cards to exactly 3 divisions with updated descriptions matching client's exact copy.
4. **Development Delivery** — NEW section. Full-width with list of capabilities: development management, infrastructure coordination, CGI & visualisation, interior design, stakeholder consultation.
5. **Featured Case Study** — Already exists, refine copy to emphasize "deal story" (acquisition strategy, planning uplift, transformation, value creation).
6. **Opportunity Types** — Already exists as grid of 6, keep as-is.
7. **Current Opportunities** — Already exists, keep as-is with CTAs "View Opportunities" + "Submit an Opportunity".
8. **Client Types** — Already exists as "Work With Us", rename and keep.
9. **Regions** — Already exists, keep as-is.
10. **Founder** — Already exists, keep as-is.
11. **Final CTA** — Already exists, update button labels to "Submit Development Opportunity" / "Investor Enquiry".

#### 2. Hero Video Integration

- Add a `<video>` element with `autoPlay`, `muted`, `loop`, `playsInline` attributes
- Use a free stock video of skyline/construction/waterfront (e.g., from Pexels CDN) or a placeholder with the existing hero image as poster/fallback
- Dark overlay on top for text legibility

#### 3. Platform Page Updates (Platform.tsx)

- Ensure exactly 3 divisions (not 4) — Strategic Development, Capital & Asset Advisory, Investment & Development Sales
- Expand Supporting Capabilities section to include all 7 items: development management, contractor coordination, infrastructure delivery, commercial electrical infrastructure, development visualisation, interior & spatial design, public consultation & stakeholder strategy

#### 4. Language & Tone Sweep

Update across all pages:
- Replace "Learn More" with "Explore" or remove
- Replace "we help" with "we originate/structure/deliver"
- Remove word "services" everywhere
- Add authority language: "£50M+ development opportunities", "institutional-level projects"
- Sales page: ensure positioned as "Strategic acquisition and disposal" not estate agency

#### 5. Development Delivery Page (New)

Create a dedicated `/platform/development-delivery` page covering:
- Development management
- Contractor coordination
- Infrastructure delivery
- Commercial electrical infrastructure
- Development visualisation (CGI, masterplans)
- Interior & spatial design
- Public consultation & stakeholder strategy

Add to navigation under Platform dropdown.

#### 6. Navigation Update (Header.tsx)

Update Platform dropdown to include:
- Strategic Development
- Capital & Asset Advisory
- Investment & Development Sales
- Development Delivery (new)

#### 7. Footer Update

Add Development Delivery link. Ensure language matches platform positioning.

---

### Files to Create
- `src/pages/DevelopmentDelivery.tsx` — New capability page

### Files to Modify
- `src/pages/Index.tsx` — Major restructure (11 sections, video hero, Development Delivery section, language updates)
- `src/pages/Platform.tsx` — 3 divisions + expanded capabilities
- `src/components/layout/Header.tsx` — Add Development Delivery to nav
- `src/components/layout/Footer.tsx` — Add link, tone updates
- `src/components/layout/PageHero.tsx` — Optional video variant support
- `src/App.tsx` — Add route for Development Delivery
- `src/pages/StrategicDevelopment.tsx` — Language refinements
- `src/pages/CapitalAdvisory.tsx` — Language refinements
- `src/pages/SalesPage.tsx` — Reposition as strategic disposal, not brokerage
- `src/pages/AssetRepositioning.tsx` — Language refinements
- `src/pages/About.tsx` — Language refinements
- `src/pages/UKRegion.tsx` — Ensure distinct messaging (planning-led, strategic land, major schemes)
- `src/pages/USRegion.tsx` — Ensure distinct messaging (asset repositioning, investment transactions, partnerships)
- `src/pages/Opportunities.tsx` — Minor tone updates
- `src/pages/SubmitOpportunity.tsx` — Update CTAs to match client spec

---

### Technical Notes

- Hero video will use a free stock video from Pexels/Pixabay CDN (direct URL) to avoid large file uploads. Falls back to the existing hero image as poster.
- No new dependencies required.
- Estimated ~15 files changed, 1 new file created.

