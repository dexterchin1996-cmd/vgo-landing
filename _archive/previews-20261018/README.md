# Archive: Preview Pages (2026-10-18)

## Reason
- /coverage formal page now replaces these dev preview pages
- Both preview pages had hardcoded Chinese, violating D10
- Neither was in sitemap, navigation, or linked from anywhere

## Archived files
| Original path | Reason | Replacement |
|---|---|---|
| src/app/map-preview/page.tsx | Preview page with hardcoded Chinese | /coverage |
| src/app/regions-preview/page.tsx | Preview page with hardcoded Chinese | /coverage |
| src/components/MalaysiaMap.tsx | Only used by map-preview, depends on krackedmaps (T2 unknown source) | /coverage data list |

## Dependency note
- krackedmaps remains in package.json pending T2 audit
- After archiving, this component no longer ships in the build

## Rollback commands
git mv _archive/previews-20261018/map-preview-page.tsx src/app/map-preview/page.tsx
git mv _archive/previews-20261018/regions-preview-page.tsx src/app/regions-preview/page.tsx
git mv _archive/previews-20261018/MalaysiaMap.tsx src/components/MalaysiaMap.tsx

## Cooling period
Per CA-19, can be fully deleted after 30 days of stability
