# Données Réelles - Cabinet Dentaire Vang

Source: https://cabinetdentairevang.lu/en/

---

## 1. INFORMATIONS DU CABINET

**Nom complet:** Cabinet Dentaire Limpertsberg - Cabinet Dentaire Vang

**Localisation:** Limpertsberg, Luxembourg (2 minutes à pied de Glacis)

**Philosophie:**
- Soins de qualité pour des sourires sains
- Communication avec les patients
- Solutions de traitement personnalisées
- Accessibilité et prix abordables
- Confort des patients prioritaire
- Soins complets (procédures simples à complexes)
- Traitement pour tous les âges
- Installations modernes et confortables

---

## 2. CONTACT

### Adresse
```
19 Avenue de la Faïencerie
L-1510 Limpertsberg
Luxembourg
```

### Téléphones
- **Standard:** +352 26 26 20 46
- **Urgence:** +352 621 961 991

### Horaires
| Jour | Horaires |
|------|----------|
| Lundi | 10:00 - 18:30 |
| Mardi | 10:00 - 18:30 |
| Mercredi | 10:00 - 18:30 |
| Jeudi | 10:00 - 18:30 |
| Vendredi | 10:00 - 18:30 |
| Samedi | 10:00 - 14:00 |
| Dimanche | Fermé |

---

## 3. ÉQUIPE

### Dr. Aurélie Vang
- **Titre:** Dentiste
- **Langues:** Français, Néerlandais, Anglais

### Dr. Aygul Baroche
- **Titre:** Dentiste
- **Langues:** Français, Turc, Russe, Anglais

### Dr. Aissata Konate
- **Titre:** Dentiste
- **Langues:** Français, Malien, Anglais

---

## 4. SERVICES

1. **Soins dentaires / Traitement des caries**
2. **Consultation pour implants**
3. **Check-ups enfants et adultes / Soins préventifs**
4. **Intervention dentaire d'urgence**
5. **Dentisterie préventive**

---

## 5. CALL-TO-ACTION

- **Bouton principal:** "PRENDRE RDV" (Prendre rendez-vous)
- **Ligne d'urgence** accessible

---

## MAPPING AVEC LE PROTOTYPE ACTUEL

### ✅ Composants à mettre à jour

#### `Header.tsx`
**Actuel:** "Cabinet Dentaire" / "Votre sourire, notre priorité"
**Réel:** "Cabinet Dentaire Vang" ou "Cabinet Dentaire Limpertsberg"
**Tagline:** À définir (pas explicite sur le site)

---

#### `Hero.tsx`
**Actuel:** "Votre sourire mérite les meilleurs soins"
**Réel:** Axer sur "Soins de qualité pour des sourires sains" + localisation Limpertsberg
**CTA:** "PRENDRE RDV" + numéro d'urgence visible

---

#### `Services.tsx`
**Actuel:** 6 services avec icônes
```
1. Soins conservateurs
2. Esthétique dentaire
3. Prothèses
4. Orthodontie
5. Dentisterie pédiatrique
6. Urgences dentaires
```

**Réel:** 5 services principaux
```
1. Soins dentaires / Caries
2. Implants (consultation)
3. Check-ups préventifs (enfants & adultes)
4. Urgences dentaires
5. Dentisterie préventive
```

**Action:** Ajuster à 5 services ou garder 6 en développant certains

---

#### `About.tsx`
**Actuel:** 4 features (Excellence, Technologie, Disponibilité, Bien-être)

**Réel:** Points forts à mettre en avant
```
- Expérience et professionnalisme
- Localisation pratique (2 min de Glacis)
- Accessibilité et prix abordables
- Confort des patients
- Soins pour tous les âges
- Installations modernes
```

**Action:** Adapter les 4 cards avec ces valeurs

---

#### `Team.tsx`
**Actuel:** Description générique sans profils individuels

**Réel:** 3 dentistes avec noms, langues parlées
- Aurélie Vang (FR, NL, EN)
- Aygul Baroche (FR, TR, RU, EN)
- Aissata Konate (FR, Malien, EN)

**Action:** Créer 3 cartes avec photos (à récupérer ou utiliser placeholders) + langues

---

#### `Contact.tsx`
**Actuel:** Adresse Paris fictive, horaires génériques

**Réel:** Coordonnées Luxembourg
- Adresse: 19 Avenue de la Faïencerie, L-1510 Limpertsberg
- Tel: +352 26 26 20 46
- Urgence: +352 621 961 991
- Horaires: Lun-Ven 10h-18h30, Sam 10h-14h

**Action:** Remplacer toutes les infos de contact

---

#### `Testimonials.tsx`
**Actuel:** 3 témoignages fictifs

**Réel:** Aucun témoignage visible sur le site

**Action:**
- Option 1: Supprimer la section
- Option 2: Garder avec témoignages génériques
- Option 3: Demander de vrais témoignages au client

---

#### `Footer.tsx`
**Actuel:** "© 2024 Cabinet Dentaire"

**Réel:** Mettre "© 2024 Cabinet Dentaire Vang" ou "Cabinet Dentaire Limpertsberg"

---

## ASSETS DÉJÀ DISPONIBLES

Images dans `/assets` (selon vous):
- À vérifier si elles correspondent au cabinet réel ou si ce sont des stock photos

---

## DÉCISIONS À PRENDRE

1. **Nom du cabinet dans le header:**
   - "Cabinet Dentaire Vang" (nom de famille)
   - "Cabinet Dentaire Limpertsberg" (localisation)
   - Les deux ?

2. **Tagline:** Le site n'en a pas d'explicite. Garder "Votre sourire, notre priorité" ou créer nouveau ?

3. **Services:** Garder 6 ou réduire à 5 ?

4. **Testimonials:** Garder, supprimer ou remplacer ?

5. **Photos équipe:** Avez-vous des photos réelles des 3 dentistes ?

6. **Langue:** Le prototype est en français, le site a une version anglaise. Garder français uniquement ou prévoir multi-langue ?

7. **Formulaire de contact:** Garder ou remplacer par lien direct vers système de RDV ?
