/* =====================================================================
   LE MONDE DES BRIQUES — CONTENU MODIFIABLE PAR L'ENSEIGNANT
   ---------------------------------------------------------------------
   Ce fichier contient tous les textes et toutes les questions du jeu.
   Vous pouvez le modifier avec n'importe quel éditeur de texte, puis
   recharger la page du jeu. Aucun autre fichier n'est à toucher.

   {nom} est remplacé automatiquement par le prénom du héros.

   Deux sortes de questions :
   1) QCM :     { q: "...", options: ["a", "b", "c"], correct: 1, explication: "..." }
                (correct = position de la bonne réponse : 0 = la 1re, 1 = la 2e, ...)
                C'est le même format que vos fichiers exercices_*.js de LCML.
   2) Saisie :  { q: "...", type: "saisie", reponse: "90", unite: "min", explication: "..." }
                (reponse peut aussi être une liste : ["0,5", "1/2"] ; la virgule et le
                 point sont acceptés tous les deux)
   ===================================================================== */

window.MDB_CONTENU = {

  titre: "Le Monde des Briques",


  personnages: {
    guide: {
      nom: "Lina la guide",
      lignes: [
        "Salut {nom} ! Bienvenue sur l'île des Briques.",
        "Ici, tout est construit en briques : les maisons, les arbres… et même les ponts !",
        "Ramasse les pièces dorées que tu trouves en te promenant. Avec elles, tu pourras acheter un terrain et construire ta propre maison !",
        "Le Maitre Bâtisseur t'attend au bout de la plage, près du pont. Il s'est écroulé et il a besoin d'une tête bien faite !"
      ]
    },
    batisseur: {
      nom: "Maitre Boulon",
      avant: [
        "Ah, {nom} ! Tu tombes bien. Mon pont s'est écroulé dans la mer…",
        "De l'autre côté, c'est la grande île. De sa fontaine partent trois ponts : à l'ouest vers la Cité des Nombres (les maths), au nord vers le Hameau des Lettres (le français) et à l'est vers l'Archipel des Découvertes (l'éveil). Sans ce pont, impossible d'y aller !",
        "Chaque bonne réponse te fait gagner une planche. Il m'en faut 4 pour reconstruire le pont.",
        "Prends ton temps et réfléchis bien. On commence ?"
      ],
      apres: [
        "Quel beau pont ! Tu es un vrai bâtisseur, {nom}.",
        "Sur la grande île, va jusqu'à la fontaine : de là, un pont à l'ouest mène à la Cité des Nombres (maths), un au nord au Hameau des Lettres (français) et un à l'est à l'Archipel des Découvertes (éveil).",
        "Et quand tu auras gagné assez de pièces d'or, achète le terrain au sud de la fontaine : Madame Brique, juste à côté, vend tout ce qu'il faut pour bâtir ta maison !"
      ]
    },
    portail: {
      nom: "Portail de la Cité des Nombres",
      lignes: ["Le portail t'emmène à la Cité des Nombres !"]
    }
  },

  quetes: {
    pont: {
      titre: "Les planches du pont",
      recompense: "planche",
      nombreNecessaire: 4,
      questions: [
        { q: "7 × 8 = ?", options: ["54", "56", "63", "48"], correct: 1,
          explication: "7 × 8 = 56. Astuce : 5, 6, 7, 8 → 56 = 7 × 8." },
        { q: "0,5 + 0,25 = ?", options: ["0,30", "0,75", "0,525", "1"], correct: 1,
          explication: "On aligne les virgules : 0,50 + 0,25 = 0,75." },
        { q: "Combien valent les 3/4 de 20 ?", options: ["12", "15", "16", "5"], correct: 1,
          explication: "20 : 4 = 5, puis 5 × 3 = 15." },
        { q: "1 km = … m", options: ["100 m", "1 000 m", "10 000 m"], correct: 1,
          explication: "Kilo veut dire mille : 1 km = 1 000 m." },
        { q: "Quel nombre est le plus grand ?", options: ["0,8", "0,75", "0,09", "0,799"], correct: 0,
          explication: "On compare les dixièmes d'abord : 0,8 a 8 dixièmes, c'est le plus grand." },
        { q: "2,5 m = … cm", options: ["25 cm", "250 cm", "2 500 cm"], correct: 1,
          explication: "1 m = 100 cm, donc 2,5 m = 250 cm." },
        { q: "Quel est le périmètre d'un carré de 6 cm de côté ?", options: ["12 cm", "24 cm", "36 cm"], correct: 1,
          explication: "Un carré a 4 côtés égaux : 4 × 6 cm = 24 cm." },
        { q: "Quelle est l'aire d'un rectangle de 5 m sur 3 m ?", options: ["8 m²", "15 m²", "16 m²"], correct: 1,
          explication: "Aire du rectangle = longueur × largeur = 5 × 3 = 15 m²." },
        { q: "1/2 = …/8", options: ["2", "4", "6"], correct: 1,
          explication: "On multiplie le haut et le bas par 4 : 1/2 = 4/8." },
        { q: "Quel nombre est un multiple de 9 ?", options: ["56", "63", "74"], correct: 1,
          explication: "63 = 9 × 7. Astuce : 6 + 3 = 9, c'est divisible par 9." },
        { q: "Une brique coute 0,25 €. Combien coutent 8 briques ?", options: ["1,50 €", "2 €", "2,50 €"], correct: 1,
          explication: "4 briques coutent 1 €, donc 8 briques coutent 2 €." },
        { q: "Quel est le double de 3,5 ?", options: ["6,5", "7", "7,5"], correct: 1,
          explication: "3,5 + 3,5 = 7." },
        { q: "125 × 4 = ?", type: "saisie", reponse: "500",
          explication: "125 × 2 = 250, et 250 × 2 = 500." },
        { q: "1 h 30 min = … min", type: "saisie", reponse: "90", unite: "min",
          explication: "1 h = 60 min, donc 60 + 30 = 90 min." },
        { q: "36 : 4 = ?", type: "saisie", reponse: "9",
          explication: "4 × 9 = 36, donc 36 : 4 = 9." },
        { q: "Combien de briques de 2 plots faut-il pour faire une ligne de 18 plots ?", type: "saisie", reponse: "9", unite: "briques",
          explication: "18 : 2 = 9 briques." },
        { q: "Arrondis 4,67 à l'unité la plus proche.", type: "saisie", reponse: "5",
          explication: "Le chiffre des dixièmes est 6 (5 ou plus) : on arrondit à l'unité supérieure, 5." }
      ]
    }
  }
};


/* =====================================================================
   LA CITÉ DES NOMBRES — l'univers des mathématiques
   ---------------------------------------------------------------------
   4 QUARTIERS = 4 NIVEAUX DE DIFFICULTÉ (plan validé par l'enseignant) :
     niveau 1 ≈ début de P5 · niveau 2 ≈ courant de P5
     niveau 3 ≈ courant de P6 · niveau 4 = fin de P6 (tout est mélangé)
   Chaque quartier a 5 bâtiments, un par matière :
     Nombres · Calculs · Grandeurs · Solides et figures · Problèmes

   DÉBLOCAGES
   - Dans un quartier ouvert, tous les bâtiments sont ouverts.
   - Le quartier suivant s'ouvre quand l'élève a au moins 80 % des étoiles
     dans CHAQUE matière du niveau précédent : condition { quartier, pourcent: 80 }.
   - L'enseignant peut ouvrir ou fermer un quartier (Menu > Espace enseignant).
   - L'hôtel de ville s'ouvre avec 80 % dans chaque matière du niveau 4.

   ÉTOILES (pour chaque défi)
     ★   réussir le défi (nombreNecessaire bonnes réponses)
     ★★  version experte : nombreNecessaire + 3 bonnes réponses, 3 erreurs maximum
     ★★★ réussir à nouveau la version experte UN AUTRE JOUR (révision)

   TYPES DE DÉFIS
     quiz      : gen: ["générateur", …]  (questions inventées par le jeu, adaptées au niveau)
                 et/ou questions: [...]
     probleme  : genp: "générateur" (problèmes à étapes) et/ou problemes: [...]
     fractions, balance : mini-jeux
     chrono    : calcul mental chronométré (duree, objectif, operations)
   Code de l'espace enseignant : codeEnseignant (à changer !)
   ===================================================================== */
window.MDB_CONTENU.briqueville = {
  titre: "La Cité des Nombres",
  sousTitre: "Le monde des maths",
  symboles: ["+", "−", "×", "÷"],
  couleur: "#1f5fd1",
  codeEnseignant: "1234",

  accueil: {
    nom: "Pixel l'explorateur",
    lignes: [
      "Bienvenue à la Cité des Nombres, {nom} ! C'est le monde des maths.",
      "La ville a quatre quartiers. Ce sont quatre niveaux : on commence au Quartier des Apprentis (niveau 1), puis viennent les Bâtisseurs, les Architectes et enfin les Maitres (niveau 4).",
      "Dans chaque quartier, il y a cinq bâtiments, un par matière : les nombres, les calculs, les grandeurs, les solides et figures, et les problèmes.",
      "Pour passer au quartier suivant, il faut montrer que tu maitrises le niveau : 80 % des étoiles dans chaque matière !",
      "Ton carnet 📒 (en haut à droite) montre tes étoiles et garde les indices que tu récoltes.",
      "Commence par le Quartier des Apprentis : remonte l'avenue jusqu'à la grand-place, puis {route:n1}."
    ],
    indice: "Le Quartier des Apprentis (niveau 1) : depuis la grand-place, {route:n1}."
  },

  habitantsCentre: [
    { nom: "Madame Lucie", lignes: ["Bonjour ! Tu cherches ton chemin ?", "La grand-place est au centre de la ville. L'hôtel de ville est juste au-dessus de la fontaine."], indice: "L'hôtel de ville est au-dessus de la fontaine, sur la grand-place." },
    { nom: "Le facteur Bernard", lignes: ["Je connais toutes les adresses de la Cité des Nombres !", "Le Quartier des Apprentis est {q:n1}, celui des Bâtisseurs {q:n2}.", "Le Quartier des Architectes est {q:n3}, et celui des Maitres {q:n4}."], indice: "Apprentis : {q:n1}. Bâtisseurs : {q:n2}. Architectes : {q:n3}. Maitres : {q:n4}." },
    { nom: "Jojo le jardinier", lignes: ["Tu vois les barrières rouges et blanches ? Elles ferment les quartiers.", "L'agent de la barrière la lève quand tu as 80 % des étoiles dans chaque matière du quartier précédent."], indice: "Pour ouvrir un quartier : 80 % des étoiles dans chaque matière du quartier d'avant." },
    { nom: "Nina la cycliste", lignes: ["Dans chaque bâtiment, il y a des défis à trois étoiles.", "La troisième étoile, on ne peut la gagner qu'un autre jour. C'est pour vérifier que tu n'as pas oublié !"], indice: "La 3e étoile d'un défi se gagne un autre jour." },
    { nom: "Monsieur Paul", lignes: ["Chaque quartier mélange toutes les matières, du plus facile au plus difficile.", "Le niveau 4, chez les Maitres, c'est tout ce qu'il faut savoir à la fin de la 6e primaire !"], indice: "Les quartiers sont des niveaux : du niveau 1 (Apprentis) au niveau 4 (Maitres)." },
    { nom: "Léon le livreur", lignes: ["Il parait que la maire prépare un grand défi à l'hôtel de ville…", "Mais elle n'ouvre ses portes qu'aux enfants qui maitrisent le Quartier des Maitres !"], indice: "L'hôtel de ville s'ouvre avec 80 % des étoiles dans chaque matière du Quartier des Maitres." },
    { nom: "Chef de gare Marcel", lignes: ["Bienvenue à la gare de la Cité des Nombres !", "L'arche de la gare, au sud, te ramène à l'île des Briques quand tu veux. Ta progression reste enregistrée."], indice: "L'arche de la gare, au sud, ramène à l'île des Briques." },
    { nom: "Zoé la touriste", lignes: ["J'ai ramassé plein de pièces dorées en me promenant.", "Il y en a 40 cachées dans toute la ville, même dans les quartiers fermés !"], indice: "40 pièces dorées sont cachées dans la Cité des Nombres." }
  ],

  mairie: {
    titre: "L'hôtel de ville",
    description: "Le grand défi de la maire : des questions de toutes les matières, au niveau de fin de primaire.",
    ferme: ["Les portes de l'hôtel de ville sont fermées.", "Une affiche dit : « La maire recevra les enfants qui maitrisent le Quartier des Maitres (80 % des étoiles dans chaque matière). »"],
    condition: { pourcent: 80 },
    maire: { nom: "Madame la Maire", lignes: ["Bienvenue dans mon hôtel de ville, {nom} !", "Tu maitrises les quatre niveaux de la Cité des Nombres. Bravo !", "Voici mon grand défi : des questions de toutes les matières. Réussis-le et tu deviendras citoyen d'honneur !"] },
    defi: { id: "mairie-grand-defi", titre: "Le grand défi de la maire", type: "quiz", nombreNecessaire: 10, niveau: 4,
            gen: ["nbEcrire", "ecritures", "calcEcrit", "calcPourcent", "calcFractions", "grConv", "grAiresFig", "grVolumes", "sfAngleManquant", "sfPrismesPyramides", "pbMoyenne", "pbUneEtape"] }
  },

  quartiers: [
    // ------------------------------------------------------------ NIVEAU 1
    {
      id: "n1", niveau: 1, titre: "Quartier des Apprentis", sousTitre: "Niveau 1 · Les premiers défis",
      couleur: "#e8443a", symboles: ["1", "+", "m", "△"],
      ouvertParDefaut: true,
      agent: { nom: "Agent Rouge", ouvert: ["Bienvenue au Quartier des Apprentis, le niveau 1 !", "Ici, les cinq bâtiments sont ouverts : choisis ta matière. Pour ouvrir le quartier suivant, il te faudra 80 % des étoiles dans chacun."] },
      habitants: [
        { nom: "Mamie Chiffre", lignes: ["L'école des nombres est {b:n1-nombres}.", "Et la banque du calcul est {b:n1-calculs}."], indice: "École des nombres : {b:n1-nombres}. Banque du calcul : {b:n1-calculs}." },
        { nom: "Hugo le marchand", lignes: ["Le marché des mesures est {b:n1-grandeurs}.", "On y pèse, on y mesure et on y rend la monnaie !"], indice: "Le marché des mesures : {b:n1-grandeurs}." },
        { nom: "Fanny la dessinatrice", lignes: ["L'atelier des formes est {b:n1-formes}.", "Et l'agence des problèmes est {b:n1-problemes}."], indice: "Atelier des formes : {b:n1-formes}. Agence des problèmes : {b:n1-problemes}." }
      ],
      batiments: [
        { id: "n1-nombres", matiere: "Nombres", titre: "L'école des nombres", symbole: "#", hote: { nom: "La maitresse Sorélia", genre: "fille" },
          description: "Les nombres jusqu'au million, les fractions simples et les dixièmes.",
          defis: [
            { id: "m1-lire", titre: "Lire et écrire les nombres", type: "quiz", gen: ["nbEcrire", "nbRang", "nbDroite"], nombreNecessaire: 5 },
            { id: "m1-comparer", titre: "Comparer, ranger, arrondir", type: "quiz", gen: ["nbComparer", "nbRanger", "nbArrondir"], nombreNecessaire: 5 },
            { id: "m1-fractions", titre: "Fractions simples et dixièmes", type: "quiz", gen: ["frImage", "frDixiemes"], nombreNecessaire: 5 }
          ] },
        { id: "n1-calculs", matiere: "Calculs", titre: "La banque du calcul", symbole: "+", hote: { nom: "Le banquier Benoît", genre: "garcon" },
          description: "Les tables, le calcul mental et les opérations posées.",
          defis: [
            { id: "m1-tables", titre: "Tables de multiplication et divisions", type: "chrono", duree: 60, objectif: 12, operations: ["tables", ":"] },
            { id: "m1-mental", titre: "Calcul mental : +, −, × 10, 100, 1000", type: "chrono", duree: 60, objectif: 9, operations: ["mental2", "x10", "+", "-"] },
            { id: "m1-ecrit", titre: "Opérations posées", type: "quiz", gen: ["calcEcrit"], nombreNecessaire: 4 }
          ] },
        { id: "n1-grandeurs", matiere: "Grandeurs", titre: "Le marché des mesures", symbole: "m", hote: { nom: "La marchande Marthe", genre: "fille" },
          description: "Mètres, grammes, litres, heures et euros.",
          defis: [
            { id: "m1-conv", titre: "Convertir : km, m, cm, mm, kg, g, l, cl, ml", type: "quiz", gen: ["grConv"], nombreNecessaire: 5 },
            { id: "m1-heure", titre: "Lire l'heure et calculer des durées", type: "quiz", gen: ["grHeure", "grDurees"], nombreNecessaire: 5 },
            { id: "m1-monnaie", titre: "Payer au marché", type: "quiz", gen: ["grMonnaie"], nombreNecessaire: 5 }
          ] },
        { id: "n1-formes", matiere: "Solides et figures", titre: "L'atelier des formes", symbole: "△", hote: { nom: "Le dessinateur Linor", genre: "garcon" },
          description: "Triangles, quadrilatères, angles et droites.",
          defis: [
            { id: "m1-figures", titre: "Nommer les figures", type: "quiz", gen: ["sfNommer"], nombreNecessaire: 5 },
            { id: "m1-angles", titre: "Angle droit, aigu ou obtus ?", type: "quiz", gen: ["sfAngles"], nombreNecessaire: 5 },
            { id: "m1-droites", titre: "Droites parallèles et perpendiculaires", type: "quiz", gen: ["sfDroites"], nombreNecessaire: 5 }
          ] },
        { id: "n1-problemes", matiere: "Problèmes", titre: "L'agence des problèmes", symbole: "?", hote: { nom: "La détective Ombeline", genre: "fille" },
          description: "Des problèmes à une étape, des graphiques et des devinettes.",
          defis: [
            { id: "m1-pb", titre: "Problèmes à une étape", type: "quiz", gen: ["pbUneEtape"], nombreNecessaire: 4 },
            { id: "m1-graph", titre: "Lire un graphique", type: "probleme", genp: "graphiques", icone: "probleme" },
            { id: "m1-devinettes", titre: "Les devinettes du journal", type: "probleme", genp: "devinettes" }
          ] }
      ]
    },
    // ------------------------------------------------------------ NIVEAU 2
    {
      id: "n2", niveau: 2, titre: "Quartier des Bâtisseurs", sousTitre: "Niveau 2 · On monte d'un cran",
      couleur: "#f08c00", symboles: ["2", "%", "kg", "◇"],
      ouvertParDefaut: true, condition: { quartier: "n1", pourcent: 80 },
      agent: { nom: "Agent Orange", ferme: ["Halte ! Le Quartier des Bâtisseurs, c'est le niveau 2."], ouvert: ["Bienvenue au Quartier des Bâtisseurs, le niveau 2 !", "Les cinq matières t'attendent, un cran plus difficiles."] },
      habitants: [
        { nom: "Monsieur Truelle", lignes: ["L'école des nombres du niveau 2 est {b:n2-nombres}.", "La banque du calcul est {b:n2-calculs}."], indice: "École des nombres : {b:n2-nombres}. Banque du calcul : {b:n2-calculs}." },
        { nom: "Rosalie la maraichère", lignes: ["Mon marché des mesures est {b:n2-grandeurs}."], indice: "Le marché des mesures : {b:n2-grandeurs}." },
        { nom: "Igor le maçon", lignes: ["L'atelier des formes est {b:n2-formes}.", "L'agence des problèmes est {b:n2-problemes}."], indice: "Atelier des formes : {b:n2-formes}. Agence des problèmes : {b:n2-problemes}." }
      ],
      batiments: [
        { id: "n2-nombres", matiere: "Nombres", titre: "L'école des nombres", symbole: "#", hote: { nom: "Le maitre Barnolin", genre: "garcon" },
          description: "Jusqu'au milliard, multiples et diviseurs, fractions et centièmes.",
          defis: [
            { id: "m2-grands", titre: "Les nombres jusqu'au milliard", type: "quiz", gen: ["nbEcrire", "nbRang", "nbArrondir", "nbComparer", "nbDroite"], nombreNecessaire: 5 },
            { id: "m2-divis", titre: "Multiples, diviseurs, divisibilité", type: "quiz", gen: ["nbDivisibilite"], nombreNecessaire: 5 },
            { id: "m2-fractions", titre: "Fractions équivalentes et comparaison", type: "quiz", gen: ["frEquiv", "frComparer", "frQuantite"], nombreNecessaire: 5 },
            { id: "m2-centiemes", titre: "Les nombres décimaux aux centièmes", type: "quiz", gen: ["decCentiemes"], nombreNecessaire: 5 }
          ] },
        { id: "n2-calculs", matiere: "Calculs", titre: "La banque du calcul", symbole: "+", hote: { nom: "La banquière Mirabelle", genre: "fille" },
          description: "Calculer astucieusement, multiplier par deux chiffres, diviser.",
          defis: [
            { id: "m2-mental", titre: "× et : par 10, 100, 1000 avec des décimaux", type: "chrono", duree: 60, objectif: 8, operations: ["x10d"] },
            { id: "m2-astuce", titre: "Calculer astucieusement", type: "quiz", gen: ["calcAstuce"], nombreNecessaire: 5 },
            { id: "m2-ecrit", titre: "Opérations posées", type: "quiz", gen: ["calcEcrit"], nombreNecessaire: 4 }
          ] },
        { id: "n2-grandeurs", matiere: "Grandeurs", titre: "Le marché des mesures", symbole: "m", hote: { nom: "Le marchand Grainelot", genre: "garcon" },
          description: "Le tableau de conversion, les durées, la monnaie et les périmètres.",
          defis: [
            { id: "m2-conv", titre: "Le tableau de conversion", type: "quiz", gen: ["grConv"], nombreNecessaire: 5 },
            { id: "m2-temps", titre: "Heures, minutes, secondes", type: "quiz", gen: ["grDurees"], nombreNecessaire: 5 },
            { id: "m2-monnaie", titre: "Rendre la monnaie", type: "quiz", gen: ["grMonnaie"], nombreNecessaire: 5 },
            { id: "m2-perimetres", titre: "Périmètres", type: "quiz", gen: ["grPerimetre"], nombreNecessaire: 5 }
          ] },
        { id: "n2-formes", matiere: "Solides et figures", titre: "L'atelier des formes", symbole: "△", hote: { nom: "La sculptrice Giroline", genre: "fille" },
          description: "Familles de quadrilatères, triangles, symétrie et solides.",
          defis: [
            { id: "m2-quadri", titre: "Les familles de quadrilatères", type: "quiz", gen: ["sfQuadriProps"], nombreNecessaire: 6 },
            { id: "m2-triangles", titre: "Triangles et axes de symétrie", type: "quiz", gen: ["sfTriangles", "sfSymetrie"], nombreNecessaire: 5 },
            { id: "m2-solides", titre: "Les solides", type: "quiz", gen: ["sfSolides"], nombreNecessaire: 5 }
          ] },
        { id: "n2-problemes", matiere: "Problèmes", titre: "L'agence des problèmes", symbole: "?", hote: { nom: "Le détective Mystran", genre: "garcon" },
          description: "Problèmes à deux étapes, tableaux, graphiques et partages.",
          defis: [
            { id: "m2-etapes", titre: "Problèmes à deux étapes", type: "probleme", genp: "deuxEtapes" },
            { id: "m2-tableaux", titre: "Tableaux et graphiques", type: "probleme", genp: ["tableau", "courbe"] },
            { id: "m2-partages", titre: "Partages et proportionnalité", type: "probleme", genp: ["partage", "proportion"] }
          ] }
      ]
    },
    // ------------------------------------------------------------ NIVEAU 3
    {
      id: "n3", niveau: 3, titre: "Quartier des Architectes", sousTitre: "Niveau 3 · Pour les costauds",
      couleur: "#2b8a3e", symboles: ["3", "½", "m²", "°"],
      ouvertParDefaut: true, condition: { quartier: "n2", pourcent: 80 },
      agent: { nom: "Agent Vert", ferme: ["Halte ! Le Quartier des Architectes, c'est le niveau 3."], ouvert: ["Bienvenue au Quartier des Architectes, le niveau 3 !", "Ici, on travaille comme en 6e primaire."] },
      habitants: [
        { nom: "Madame Équerre", lignes: ["L'école des nombres est {b:n3-nombres}.", "La banque du calcul est {b:n3-calculs}."], indice: "École des nombres : {b:n3-nombres}. Banque du calcul : {b:n3-calculs}." },
        { nom: "Paolo le géomètre", lignes: ["Le marché des mesures est {b:n3-grandeurs}.", "L'atelier des formes est {b:n3-formes}."], indice: "Marché des mesures : {b:n3-grandeurs}. Atelier des formes : {b:n3-formes}." },
        { nom: "Clara l'ingénieure", lignes: ["L'agence des problèmes est {b:n3-problemes}.", "Attention : certains énoncés contiennent des données inutiles !"], indice: "Agence des problèmes : {b:n3-problemes}." }
      ],
      batiments: [
        { id: "n3-nombres", matiere: "Nombres", titre: "L'école des nombres", symbole: "#", hote: { nom: "La maitresse Inès", genre: "fille" },
          description: "Simplifier des fractions, les millièmes et les pourcentages.",
          defis: [
            { id: "m3-fractions", titre: "Simplifier et comparer des fractions", type: "quiz", gen: ["frSimplifier", "frComparer"], nombreNecessaire: 5 },
            { id: "m3-decimaux", titre: "Décimaux : millièmes, comparer, arrondir", type: "quiz", gen: ["decMilliemes", "decComparer", "decArrondir", "nbDroite"], nombreNecessaire: 5 },
            { id: "m3-pourcent", titre: "Les pourcentages simples", type: "quiz", gen: ["pourcentSimple"], nombreNecessaire: 5 }
          ] },
        { id: "n3-calculs", matiere: "Calculs", titre: "La banque du calcul", symbole: "+", hote: { nom: "Le banquier Oscar", genre: "garcon" },
          description: "Diviser par deux chiffres, multiplier des décimaux, les priorités.",
          defis: [
            { id: "m3-ecrit", titre: "Divisions et multiplications posées", type: "quiz", gen: ["calcEcrit"], nombreNecessaire: 4 },
            { id: "m3-priorites", titre: "Priorités et parenthèses", type: "quiz", gen: ["calcPriorites"], nombreNecessaire: 5 },
            { id: "m3-mental", titre: "× 0,5 ; × 0,25 ; × 0,1 de tête", type: "chrono", duree: 60, objectif: 8, operations: ["x05", "complement"] },
            { id: "m3-estimer", titre: "Estimer un ordre de grandeur", type: "quiz", gen: ["calcEstimer"], nombreNecessaire: 5 }
          ] },
        { id: "n3-grandeurs", matiere: "Grandeurs", titre: "Le marché des mesures", symbole: "m", hote: { nom: "La marchande Rosalie", genre: "fille" },
          description: "Conversions avec décimaux, aires et calendrier.",
          defis: [
            { id: "m3-conv", titre: "Conversions avec des décimaux", type: "quiz", gen: ["grConv"], nombreNecessaire: 6 },
            { id: "m3-aires", titre: "Aires du carré, du rectangle, du triangle", type: "quiz", gen: ["grAires"], nombreNecessaire: 5 },
            { id: "m3-calendrier", titre: "Horaires, calendrier, siècles", type: "quiz", gen: ["grCalendrier"], nombreNecessaire: 5 }
          ] },
        { id: "n3-formes", matiere: "Solides et figures", titre: "L'atelier des formes", symbole: "△", hote: { nom: "L'architecte Anouk", genre: "fille" },
          description: "Angles en degrés, cercle et développements des solides.",
          defis: [
            { id: "m3-angles", titre: "Mesurer et calculer des angles", type: "quiz", gen: ["sfMesureAngle", "sfSommeAngles"], nombreNecessaire: 5 },
            { id: "m3-cercle", titre: "Le cercle : rayon et diamètre", type: "quiz", gen: ["sfCercle"], nombreNecessaire: 5 },
            { id: "m3-developpements", titre: "Les développements des solides", type: "quiz", gen: ["sfDeveloppements"], nombreNecessaire: 5 }
          ] },
        { id: "n3-problemes", matiere: "Problèmes", titre: "L'agence des problèmes", symbole: "?", hote: { nom: "La détective Ombeline", genre: "fille" },
          description: "Problèmes à plusieurs étapes, moyennes, diagrammes et réductions.",
          defis: [
            { id: "m3-etapes", titre: "Problèmes à plusieurs étapes", type: "probleme", genp: "plusieursEtapes" },
            { id: "m3-moyenne", titre: "La moyenne", type: "quiz", gen: ["pbMoyenne"], nombreNecessaire: 4 },
            { id: "m3-diagrammes", titre: "Diagrammes circulaires", type: "probleme", genp: "circulaire" },
            { id: "m3-proportion", titre: "Échelles, proportions et réductions", type: "probleme", genp: ["proportion", "echelle", "reduction"] }
          ] }
      ]
    },
    // ------------------------------------------------------------ NIVEAU 4
    {
      id: "n4", niveau: 4, titre: "Quartier des Maitres", sousTitre: "Niveau 4 · La fin de la primaire",
      couleur: "#7048e8", symboles: ["4", "%", "cm³", "★"],
      ouvertParDefaut: true, condition: { quartier: "n3", pourcent: 80 },
      agent: { nom: "Agent Violet", ferme: ["Halte ! Le Quartier des Maitres, c'est le niveau 4 : celui de la fin de la primaire."], ouvert: ["Bienvenue au Quartier des Maitres, le niveau 4 !", "Ici, tout est mélangé, comme à l'épreuve de fin de primaire."] },
      habitants: [
        { nom: "Le professeur Pi", lignes: ["L'école des nombres est {b:n4-nombres}.", "La banque du calcul est {b:n4-calculs}."], indice: "École des nombres : {b:n4-nombres}. Banque du calcul : {b:n4-calculs}." },
        { nom: "Madame Compas", lignes: ["Le marché des mesures est {b:n4-grandeurs}.", "L'atelier des formes est {b:n4-formes}."], indice: "Marché des mesures : {b:n4-grandeurs}. Atelier des formes : {b:n4-formes}." },
        { nom: "Le juge Thémis", lignes: ["L'agence des problèmes est {b:n4-problemes}.", "Ses problèmes ressemblent à ceux de l'épreuve de fin de primaire."], indice: "Agence des problèmes : {b:n4-problemes}." }
      ],
      batiments: [
        { id: "n4-nombres", matiere: "Nombres", titre: "L'école des nombres", symbole: "#", hote: { nom: "Le directeur Lambert", genre: "garcon" },
          description: "Fractions, décimaux et pourcentages : passer d'une écriture à l'autre.",
          defis: [
            { id: "m4-ecritures", titre: "Fraction, décimal, pourcentage", type: "quiz", gen: ["ecritures"], nombreNecessaire: 6 },
            { id: "m4-melange", titre: "Tout sur les nombres", type: "quiz", gen: ["nbEcrire", "nbRang", "nbArrondir", "decComparer", "frComparer", "frSimplifier", "nbDivisibilite"], nombreNecessaire: 6 }
          ] },
        { id: "n4-calculs", matiere: "Calculs", titre: "La banque du calcul", symbole: "+", hote: { nom: "La banquière Clémence", genre: "fille" },
          description: "Quotients décimaux, fractions, pourcentages et chaines de calculs.",
          defis: [
            { id: "m4-ecrit", titre: "Divisions décimales posées", type: "quiz", gen: ["calcEcrit"], nombreNecessaire: 4 },
            { id: "m4-fractions", titre: "Fractions et pourcentages", type: "quiz", gen: ["calcFractions", "calcPourcent"], nombreNecessaire: 5 },
            { id: "m4-chaines", titre: "Chaines de calculs et priorités", type: "quiz", gen: ["calcChaine", "calcPriorites"], nombreNecessaire: 5 }
          ] },
        { id: "n4-grandeurs", matiere: "Grandeurs", titre: "Le marché des mesures", symbole: "m", hote: { nom: "Le marchand Grainelot", genre: "garcon" },
          description: "Aires de toutes les figures, volumes et échelles.",
          defis: [
            { id: "m4-aires", titre: "Aires et unités d'aire", type: "quiz", gen: ["grAiresFig", "grConvAires"], nombreNecessaire: 5 },
            { id: "m4-volumes", titre: "Volumes du cube et du parallélépipède rectangle", type: "quiz", gen: ["grVolumes"], nombreNecessaire: 5 },
            { id: "m4-echelles", titre: "Échelles et conversions", type: "quiz", gen: ["grEchelles", "grConv"], nombreNecessaire: 5 }
          ] },
        { id: "n4-formes", matiere: "Solides et figures", titre: "L'atelier des formes", symbole: "△", hote: { nom: "L'architecte Anouk", genre: "fille" },
          description: "Angles manquants, agrandissements, repérage et solides.",
          defis: [
            { id: "m4-angles", titre: "Calculer un angle manquant", type: "quiz", gen: ["sfAngleManquant"], nombreNecessaire: 5 },
            { id: "m4-agrandir", titre: "Agrandir, réduire, se repérer", type: "quiz", gen: ["sfAgrandir", "sfReperage"], nombreNecessaire: 5 },
            { id: "m4-solides", titre: "Prismes, pyramides et développements", type: "quiz", gen: ["sfPrismesPyramides", "sfDeveloppements"], nombreNecessaire: 5 }
          ] },
        { id: "n4-problemes", matiere: "Problèmes", titre: "L'agence des problèmes", symbole: "?", hote: { nom: "Le juge Thémis", genre: "garcon" },
          description: "Des problèmes comme à l'épreuve de fin de primaire.",
          defis: [
            { id: "m4-complexes", titre: "Problèmes complexes", type: "probleme", genp: "complexe" },
            { id: "m4-partages", titre: "Partages inégaux et pourcentages", type: "probleme", genp: ["partageInegal", "pourcentages"] },
            { id: "m4-graphiques", titre: "Lire et interpréter des graphiques", type: "probleme", genp: "graphChoix" }
          ] }
      ]
    }
  ]
};
