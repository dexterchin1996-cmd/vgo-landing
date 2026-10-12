# Changelog

All notable changes to vgo-landing (official website).

## [0.2.0] - 2026-10-12

### Added
- AppLinks section with 3 separate app entry cards (customer / merchant / technician)
- Horizontal swipe carousel with dot indicators
- AI Support floating entry (VGO AI Support)
- Login entry for returning users in Waitlist
- Design scan workflow (`impeccable.yml`) for automated design review
- Legal shell: unified style across all legal pages

### Fixed
- **P0** en-dash in terms page number range (`1–3` → `1-3`)
- **P0** emoji icons in AppLinks replaced with Lucide SVG icons
- **P1** `transition-all` (65 occurrences) replaced with specific transition properties
- **P1** `animate-bounce` (1 occurrence) removed
- **P1** `gray-on-color` (5 occurrences) contrast issue fixed: `text-gray-700` → `text-orange-950`
- **P1** `side-tab` (2 occurrences) removed from legal pages (h2 and note-box)

### Changed
- AppLinks layout: vertical stack → horizontal swipe carousel
- Hero gradient text removed (5 occurrences) for cleaner design
- Website proxy: Cloudflare Worker `vgo-website` now proxies to Vercel

### Design scan results
- Impeccable: 23 issues (15 gradient-text kept as brand color, 5 gray-on-color fixed, 2 side-tab fixed, 1 bounce fixed)
- Manual scan: 108 issues (all P0/P1 fixed)
- Tool version: design-scan v1.5.3

## [0.1.0] - 2026-10-09

### Added
- Initial website release
- 16 pages (home, about, services, terms, privacy, etc.)
- Multilingual support (zh / en / ms)
