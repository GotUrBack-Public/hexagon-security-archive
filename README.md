# Hexagon Security Archive

Öffentliches Verzeichnis der Hexagon Security Cases (HCS), gestaltet als mehrseitige, responsive Website mit heller, institutioneller Gestaltung.

## Projektstruktur

```
.
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
├── cases/
│   └── HCS-ASA-2026-001.html
└── README.md
```

## Funktionen

- HCS-Register mit Suchfunktion und Prioritätsfilter
- Einheitliche Kennungen und Prioritätsstufen Low / Medium / High
- Numerische Scores auf einer Skala von 0 bis 10
- Eigene Detailseite pro Sicherheitsmeldung
- Responsive Darstellung für Mobilgeräte und Desktop
- Keine Framework- oder Build-Abhängigkeiten

## Veröffentlichte Sicherheitsmeldungen

| HCS-Kennung | Priorität | Score | Bericht |
| --- | --- | ---: | --- |
| HCS-ASA-2026-001 | Low | 2,3/10 | [Originalbericht](https://github.com/GotUrBack-Public/HCS-ASA-2026-001) |

## Neue HCS-Meldung hinzufügen

1. Eine neue HTML-Fallakte unter `cases/` anlegen.
2. In `index.html` einen weiteren `.registry-row`-Eintrag ergänzen.
3. Die Werte `data-id` und `data-priority` für Suche und Filter setzen.
4. Kennung, Priorität, Score und Link zur Fallakte eintragen.

Prioritätswerte für `data-priority`: `low`, `medium`, `high`.

## GitHub Pages

Unter **Settings → Pages → Build and deployment** die Option **Deploy from a branch** auswählen, Branch `main` und Ordner `/(root)` einstellen und speichern.

## Bewertung

Die HCS-Scores sind die Bewertungsskala dieses Archivs und nicht automatisch CVSS-Werte.
