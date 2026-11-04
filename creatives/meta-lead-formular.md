# Meta Instant Form (Lead Ad) · Schanbacher

Zum direkten Reinkopieren in den Werbeanzeigenmanager → *Formular erstellen*.

Die **Fragen, die Datenschutz-Angaben und die Danke-Seite sind für alle drei
Stellen identisch** – es unterscheiden sich nur Formularname, Intro und der
Link am Ende.

---

## Vor dem Ausfüllen: zwei Einstellungen ändern

**1. Formulartyp: „Höhere Absicht" statt „Höhere Lautstärke".**
Der Prüfschritt am Ende kostet ein paar Leads, filtert aber Fehlklicks heraus.
Das Ziel der Kampagne ist Qualität, nicht Menge.
Den Haken *„Leads müssen ihre Telefonnummer mit einem Einmal-Passcode
verifizieren"* nicht setzen – der bricht in der Praxis zu viele Bewerbungen ab.

**2. „Flexible Formularauslieferung" ausschalten.**
Die Option erlaubt Meta, Formularelemente **zu entfernen**. Jede Frage hier ist
ein K.-o.-Kriterium – wenn Meta eine davon streicht, ist die Vorfilterung weg.

---

## Formularname (nur intern sichtbar)

```
Schanbacher – Maler (m/w/d) – Screening
```

```
Schanbacher – Parkettleger (m/w/d) – Screening
```

```
Schanbacher – Raumausstatter (m/w/d) – Screening
```

---

## Intro

### Überschrift

```
Maler (m/w/d) in Filderstadt gesucht
```

```
Parkettleger (m/w/d) in Filderstadt gesucht
```

```
Raumausstatter (m/w/d) in Filderstadt gesucht
```

### Beschreibung — Maler

```
Familienbetrieb seit 1968, dritte Generation. Wir suchen Verstärkung in Vollzeit.

• Firmenwagen zur dienstlichen Nutzung
• Weihnachtsgeld
• Abwechslungsreiches und kreatives Arbeitsumfeld
• Eigenverantwortliches Arbeiten und Raum für eigene Ideen
• Standort Filderstadt-Bernhausen

Beantworte kurz ein paar Fragen – wir melden uns persönlich bei dir.
```

### Beschreibung — Parkettleger

```
Familienbetrieb seit 1968, dritte Generation. Wir suchen Verstärkung in Vollzeit.

• Weihnachtsgeld
• Individuelle Lern- und Weiterbildungsmöglichkeiten
• Abwechslungsreiches und kreatives Arbeitsumfeld
• Eigenverantwortliches Arbeiten und Raum für eigene Ideen
• Standort Filderstadt-Bernhausen

Beantworte kurz ein paar Fragen – wir melden uns persönlich bei dir.
```

### Beschreibung — Raumausstatter

```
Familienbetrieb seit 1968, dritte Generation. Wir suchen Verstärkung in Vollzeit.

• Firmenwagen zur dienstlichen Nutzung
• Weihnachtsgeld
• Individuelle Lern- und Weiterbildungsmöglichkeiten
• Abwechslungsreiches und kreatives Arbeitsumfeld
• Eigenverantwortliches Arbeiten und Raum für eigene Ideen

Beantworte kurz ein paar Fragen – wir melden uns persönlich bei dir.
```

---

## Fragen

### Kontaktinformationen (Meta-Standardfelder, anhaken)

- Vorname
- Nachname
- Telefonnummer
- E-Mail-Adresse

Kein Zusatzfeld, keine Adresse, kein Geburtsdatum.

### Benutzerdefinierte Fragen — alle „Multiple Choice", Antworten `Ja` / `Nein`

Vier Fragen. Es sind genau die vier Punkte, die auf der Karriereseite unter
**„Das setzen wir voraus"** stehen (`voraussetzungen()` in `index.html`) –
Anzeige, Formular und Screening verlangen damit exakt dasselbe. Das härteste
Kriterium steht zuerst.

**Die Ausbildung ist stellenspezifisch:** Für die Maler-Stelle zählt eine
Maler-Ausbildung, nicht irgendeine im Handwerk. „Handwerk" allein würde auch
Kfz-Mechatroniker oder Bäcker durchlassen. Die Fragen 2 bis 4 sind für alle
drei Stellen gleich.

```
Hast du eine abgeschlossene Ausbildung als Maler und Lackierer und mindestens 3 Jahre Berufserfahrung in dem Beruf?
```

Für die anderen beiden Stellen den Beruf tauschen:

```
Hast du eine abgeschlossene Ausbildung als Parkettleger und mindestens 3 Jahre Berufserfahrung in dem Beruf?
```

```
Hast du eine abgeschlossene Ausbildung als Raumausstatter und mindestens 3 Jahre Berufserfahrung in dem Beruf?
```

```
Hast du einen Führerschein der Klasse B?
```

```
Sprichst du Deutsch mindestens auf B2-Niveau?
```

```
Wohnst du im Umkreis von 30 km um Filderstadt?
```

Antwortoptionen bei jeder Frage:

```
Ja
```

```
Nein
```

**Nicht im Meta-Formular**, bewusst weggelassen, um bei vier Fragen zu
bleiben – diese drei K.-o.-Kriterien prüft weiterhin das Formular auf der
Karriereseite:

- Arbeitserlaubnis für mindestens 2 Jahre
- nie oder höchstens 3 Jahre in der Industrie
- höchstens 3 Monate am Stück arbeitssuchend

Wer über die Meta-Anzeige kommt, wird darauf also erst im Gespräch geprüft.
Wer über die Karriereseite kommt, fällt schon im Formular raus.

**Nicht gefragt:** das Alter (20–45). Eine Altersabfrage ist eine unmittelbare
Benachteiligung wegen des Alters nach § 1 AGG. Über das Meta-Targeting lässt
sie sich ebenfalls nicht abbilden, weil Stellenanzeigen als Special Ad Category
„Beschäftigung" laufen müssen und dort die Altersauswahl eingeschränkt ist.

---

## Datenschutzrichtlinie

### Link zur Datenschutzerklärung

```
https://www.schanbachergmbh.de/datenschutz/
```

### Link-Text

```
Datenschutzerklärung der Schanbacher GmbH
```

### Benutzerdefinierter Hinweis — Titel

```
Was mit deinen Daten passiert
```

### Benutzerdefinierter Hinweis — Text

```
Wir verwenden deine Angaben ausschließlich, um deine Bewerbung zu prüfen und dich zu kontaktieren – telefonisch oder per E-Mail. Die Fragen dienen allein dazu, vorab zu klären, ob die fachlichen Voraussetzungen für die Stelle passen.

Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Deine Daten werden vertraulich behandelt und nicht an unbefugte Dritte weitergegeben. Kommt es nicht zu einer Zusammenarbeit, löschen wir sie nach Abschluss des Bewerbungsverfahrens.

Du kannst deine Einwilligung jederzeit widerrufen – eine formlose E-Mail an info@schanbachergmbh.de genügt.
```

---

## Ende (Danke-Seite)

### Überschrift

```
Danke – wir melden uns bei dir!
```

### Beschreibung

```
Wir schauen uns deine Angaben an und melden uns persönlich bei dir – in der Regel telefonisch für ein kurzes, lockeres Erstgespräch.
```

### Button-Text

```
Mehr zur Stelle
```

### Website-Link

```
https://saviold.github.io/schanbacher/?stelle=maler
```

```
https://saviold.github.io/schanbacher/?stelle=parkettleger
```

```
https://saviold.github.io/schanbacher/?stelle=raumausstatter
```

---

## Wichtig: Wo die Leads landen

Leads aus dem Instant Form gehen **nicht** über die Karriereseite. Sie landen
in Meta (Business Suite → Instant Forms) und lösen daher **weder den
Lead-Table-Webhook noch die Web3Forms-Mail** aus.

Damit beide Wege zusammenlaufen, in der Lead Table die
Facebook-Lead-Ads-Integration mit dieser Seite und diesen Formularen
verbinden. Sonst müssen die Leads als CSV exportiert werden.

## Noch zu klären

- **Keine automatische Aussortierung:** Meta Instant Forms kennen keine
  K.-o.-Logik. Wer „Nein" klickt, wird trotzdem als Lead übermittelt. Die
  Fragen wirken über Selbstauswahl und liefern die Daten zum Sortieren – die
  harte Abweisung passiert nur auf der Karriereseite.
- **Löschfrist:** Im Hinweis steht „nach Abschluss des Bewerbungsverfahrens".
  Viele Betriebe halten Bewerberdaten wegen der AGG-Klagefrist 6 Monate vor.
  Falls das bei Schanbacher so gehandhabt wird, den Satz entsprechend ändern.
- **Datenschutz-URL:** `schanbachergmbh.de/datenschutz/` ist nicht gegengeprüft
  (aus dieser Umgebung nicht erreichbar). Meta lehnt das Formular ab, wenn der
  Link ins Leere geht.
