# Hexagon Security Archive

A lightweight public index of Hexagon Security Cases (HCS).

## Website

The site is a static, dependency-free HTML page in `index.html`. It includes:
- HCS registry with search and priority filtering
- Low / Medium / High priority labels
- Numeric archive scores (not automatically CVSS scores)
- Links to the individual advisory repositories
- Organization and disclosure notes

## Current entries

| HCS ID | Priority | Score | Report |
| --- | --- | ---: | --- |
| HCS-ASA-2026-001 | Low | 2.3/10 | https://github.com/GotUrBack-Public/HCS-ASA-2026-001 |

## Updating the archive

Edit the entries in `index.html`. Each entry is an `<a class="entry">` element inside `#entries`. Set:
- `data-id` to the lowercase HCS identifier
- `data-priority` to `low`, `medium`, or `high`
- the visible HCS identifier, priority badge, score, and report URL

Update the total count near the top when adding entries.

## GitHub Pages

To publish this static site, open the repository's **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**, then save.

## Accuracy and disclosure

Team composition and .onion presence descriptions are presented as organization-provided statements, not independently verified facts. Do not publish an onion address unless it has been confirmed as an official address. Archive scores are separate from CVSS unless a report explicitly defines otherwise.

Only include security research that is authorized and responsibly disclosed.