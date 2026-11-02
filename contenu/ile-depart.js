/* =====================================================================
   LES CHRONIQUES D'ASTRELUNE — L'ILE DE DÉPART (modifiable par l'enseignant)
   ---------------------------------------------------------------------
   Les épreuves d'Aora : trois défis pour gagner les premières pièces d'or
   et payer la première traversée de Balthor.

   Chaque défi ne se fait qu'une fois (pas d'étoiles ★★ et ★★★ ici) et
   rapporte « gain » pièces d'or. Il faut « nombreNecessaire » bonnes
   réponses (2 cœurs, chaque erreur ajoute une question).

   rubriques : chaque défi pioche UNE question dans chaque rubrique, dans un
   ordre au hasard (si l'élève se trompe, on repart pour un tour). Une
   rubrique peut contenir :
   - questions : une liste de questions écrites ici (QCM ou saisie, même
     format que les fichiers monde-*.js) ;
   - depuis : les questions d'un ou plusieurs défis du monde 1 ;
   - gen : des exercices de maths générés (noms des générateurs de la v0.18).
   Le billet pour le premier monde coute 80 % de l'or que rapportent ces défis.
   ===================================================================== */
window.ASTRELUNE_ILE = {
  titre: "Les épreuves d'Aora",
  description: "Trois petites épreuves pour montrer que tu es prêt(e) à partir. Chacune rapporte des pièces d'or pour payer la barque de Balthor.",
  defis: [
    { id: 'ile-marche', titre: 'Les comptes du marché', type: 'quiz', unique: true, gain: 10, niveau: 1, nombreNecessaire: 4,
      rubriques: [
        { nom: 'calcul', gen: ['grMonnaie'] },
        { nom: 'numération', gen: ['nbComparer', 'nbRang'] },
        { nom: 'grandeurs', questions: [
          { q: "Écris le nombre qui manque : 1 m = … cm", type: 'saisie', reponse: '100', unite: 'cm', explication: "1 mètre = 100 centimètres." },
          { q: "Écris le nombre qui manque : 1 km = … m", type: 'saisie', reponse: '1000', unite: 'm', explication: "1 kilomètre = 1 000 mètres." },
          { q: "Écris le nombre qui manque : 1 kg = … g", type: 'saisie', reponse: '1000', unite: 'g', explication: "1 kilogramme = 1 000 grammes." },
          { q: "Écris le nombre qui manque : 1 l = … cl", type: 'saisie', reponse: '100', unite: 'cl', explication: "1 litre = 100 centilitres." },
          { q: "Combien de minutes y a-t-il dans 1 heure ?", type: 'saisie', reponse: '60', unite: 'min', explication: "1 heure = 60 minutes." },
          { q: "Combien de secondes y a-t-il dans 1 minute ?", type: 'saisie', reponse: '60', unite: 's', explication: "1 minute = 60 secondes." },
          { q: "Combien d'heures y a-t-il dans une journée complète ?", type: 'saisie', reponse: '24', unite: 'h', explication: "Une journée (jour et nuit) dure 24 heures." },
          { q: "Une demi-heure, c'est combien de minutes ?", type: 'saisie', reponse: '30', unite: 'min', explication: "60 minutes : 2 = 30 minutes." },
          { q: "Combien de centimes y a-t-il dans 1 euro ?", type: 'saisie', reponse: '100', unite: 'c', explication: "1 euro = 100 centimes." },
          { q: "Quelle est la longueur approximative d'un terrain de football ?", options: ['100 m', '100 cm', '100 km', '100 mm'], correct: 0, explication: "Un terrain de football mesure environ 100 mètres de long." },
          { q: "Quelle est la hauteur approximative d'une porte ?", options: ['2 cm', '2 m', '20 m', '2 km'], correct: 1, explication: "Une porte mesure environ 2 mètres de haut." },
          { q: "Quelle est la masse approximative d'une pomme ?", options: ['150 kg', '15 kg', '150 g', '15 mg'], correct: 2, explication: "Une pomme pèse environ 150 grammes." },
          { q: "Quelle est la contenance approximative d'une bouteille d'eau ?", options: ['1 ml', '1 l', '10 l', '1 cl'], correct: 1, explication: "Une grande bouteille d'eau contient environ 1 litre (ou 1,5 l)." },
        ] },
        { nom: 'géométrie', questions: [
          { q: "Quel quadrilatère a 4 côtés isométriques et 4 angles droits ?", options: ['le carré', 'le losange', 'le rectangle', 'le trapèze'], correct: 0, explication: "Le carré a 4 côtés de même longueur et 4 angles droits." },
          { q: "Quel quadrilatère a 4 angles droits, mais pas 4 côtés isométriques ?", options: ['le carré', 'le rectangle', 'le losange', 'le trapèze'], correct: 1, explication: "Le rectangle a 4 angles droits ; ses côtés opposés sont isométriques deux à deux." },
          { q: "Quel quadrilatère a 4 côtés isométriques, mais pas d'angle droit ?", options: ['le carré', 'le rectangle', 'le losange', 'le trapèze'], correct: 2, explication: "Le losange a 4 côtés de même longueur ; ses angles ne sont pas droits." },
          { q: "Quel polygone possède 3 côtés ?", options: ['le triangle', 'le pentagone', 'le quadrilatère', 'l\'hexagone'], correct: 0, explication: "« Tri » veut dire trois : le triangle a 3 côtés." },
          { q: "Combien de côtés possède un pentagone ?", type: 'saisie', reponse: ['5', 'cinq'], explication: "Le pentagone a 5 côtés." },
          { q: "Combien de côtés possède un hexagone ?", type: 'saisie', reponse: ['6', 'six'], explication: "L'hexagone a 6 côtés." },
          { q: "Combien d'angles droits possède un rectangle ?", type: 'saisie', reponse: ['4', 'quatre'], explication: "Le rectangle a 4 angles droits." },
          { q: "Comment se nomment deux droites qui se coupent en formant des angles droits ?", options: ['parallèles', 'perpendiculaires', 'horizontales', 'verticales'], correct: 1, explication: "Deux droites qui se coupent à angle droit sont perpendiculaires." },
          { q: "Comment se nomment deux droites qui ne se coupent jamais, même si on les prolonge ?", options: ['parallèles', 'perpendiculaires', 'horizontales', 'verticales'], correct: 0, explication: "Deux droites qui ne se rencontrent jamais sont parallèles." },
          { q: "Comment appelle-t-on un angle plus petit qu'un angle droit ?", options: ['un angle obtus', 'un angle plat', 'un angle aigu', 'un angle plein'], correct: 2, explication: "Un angle aigu est plus petit qu'un angle droit." },
          { q: "Comment appelle-t-on un angle plus grand qu'un angle droit, mais plus petit qu'un angle plat ?", options: ['un angle aigu', 'un angle obtus', 'un angle plein', 'un angle nul'], correct: 1, explication: "Un angle obtus est entre l'angle droit et l'angle plat." },
          { q: "Comment s'appelle le segment qui relie le centre d'un cercle à un point du cercle ?", options: ['le diamètre', 'le rayon', 'le compas', 'le milieu'], correct: 1, explication: "Le rayon va du centre jusqu'au cercle. Le diamètre, lui, traverse tout le cercle en passant par le centre." },
        ] },
      ] },
    { id: 'ile-mots', titre: 'Les mots de la gardienne', type: 'quiz', unique: true, gain: 10, nombreNecessaire: 4,
      rubriques: [
        { nom: 'vocabulaire', depuis: ['f1-synonymes'] },
        { nom: 'grammaire', depuis: ['f1-noms-det', 'f1-sujet-verbe'] },
        { nom: 'conjugaison', depuis: ['f1-present-qcm'] },
        { nom: 'orthographe', questions: [
          { q: "Quel mot est bien écrit ?", options: ['bibliotèque', 'bibliothèque', 'biblioteque', 'bibliothéque'], correct: 1, explication: "On écrit « bibliothèque », avec « th » et un accent grave." },
          { q: "Quel mot est bien écrit ?", options: ['aujourdhui', "aujour'dhui", "aujourd'hui", "aujourd'ui"], correct: 2, explication: "On écrit « aujourd'hui », avec une apostrophe après le « d »." },
          { q: "Quel mot est bien écrit ?", options: ['automne', 'autonne', 'automme', 'otomne'], correct: 0, explication: "On écrit « automne » : le « m » ne se prononce pas." },
          { q: "Quel mot est bien écrit ?", options: ['beaucou', 'baucoup', 'beaucoup', 'beaucoups'], correct: 2, explication: "On écrit « beaucoup », avec un « p » muet à la fin." },
          { q: "Quel mot est bien écrit ?", options: ['lontemps', 'longtemps', 'longtemp', 'longtant'], correct: 1, explication: "On écrit « longtemps » : long + temps." },
          { q: "Quel mot est bien écrit ?", options: ['éléfant', 'élephant', 'éléphant', 'éléphan'], correct: 2, explication: "On écrit « éléphant », avec « ph » et un « t » à la fin." },
          { q: "Quel mot est bien écrit ?", options: ['papiyon', 'papillon', 'papillion', 'pappillon'], correct: 1, explication: "On écrit « papillon », avec « ill »." },
          { q: "Quel mot est bien écrit ?", options: ['trotoir', 'trottoire', 'trottoir', 'trotoire'], correct: 2, explication: "On écrit « trottoir » : deux « t », et pas de « e » à la fin." },
          { q: "Quel mot est bien écrit ?", options: ['pharmacie', 'farmacie', 'pharmasie', 'pharmaci'], correct: 0, explication: "On écrit « pharmacie », avec « ph » et « c »." },
          { q: "Quel mot est bien écrit ?", options: ['toujour', 'toujours', 'toujourt', 'tousjours'], correct: 1, explication: "On écrit « toujours », avec un « s » à la fin." },
          { q: "Quel mot est bien écrit ?", options: ['maintenent', 'maintenan', 'maintnant', 'maintenant'], correct: 3, explication: "On écrit « maintenant », avec « ant » à la fin." },
          { q: "Quel mot est bien écrit ?", options: ['ospital', 'hopitale', 'hôpital', 'hôspital'], correct: 2, explication: "On écrit « hôpital », avec un « h » au début et un accent circonflexe sur le « o »." },
          { q: "Quel mot est bien écrit ?", options: ['orkestre', 'orchestre', 'orquestre', 'orchèstre'], correct: 1, explication: "On écrit « orchestre » : le « ch » se prononce « k »." },
          { q: "Quel mot est bien écrit ?", options: ['cahier', 'cayer', 'cahié', 'cahiet'], correct: 0, explication: "On écrit « cahier », avec un « h » et « er » à la fin." },
        ] },
      ] },
    { id: 'ile-globe', titre: 'Les secrets de l\'ile', type: 'quiz', unique: true, gain: 10, nombreNecessaire: 4,
      rubriques: [
        { nom: 'géographie', depuis: ['e1-geo-a'] },
        { nom: 'histoire', depuis: ['e1-hist-a', 'e1-hist-b'] },
        { nom: 'sciences', depuis: ['e1-viv-a', 'e1-mat-a'] },
        { nom: 'au choix', depuis: ['e1-hist-c', 'e1-geo-b', 'e1-geo-c', 'e1-viv-b', 'e1-mat-b'] },
      ] },
  ],
};
