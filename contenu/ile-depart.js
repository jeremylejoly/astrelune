/* =====================================================================
   LES CHRONIQUES D'ASTRELUNE — L'ILE DE DÉPART (modifiable par l'enseignant)
   ---------------------------------------------------------------------
   Nouvelle organisation (05/11/2026) :
   - Aora, sur la place, pose 3 questions (comme les promeneurs des mondes) :
     tout juste du premier coup = 5 pièces d'or ; une erreur = réussir
     d'abord un autre défi avant de revenir.
   - Les 4 maisons de l'ile ont chacune UN défi : 5 bonnes réponses,
     2 erreurs permises (chaque erreur ajoute une question) = 5 pièces d'or.
     Les questions sont de niveau début de P5 : elles font découvrir
     comment fonctionnent les maisons des mondes.
   - Billet pour Rivebelle : 25 pièces (Aora + les 4 maisons).

   Chaque défi pioche UNE question dans chaque rubrique (5 rubriques =
   5 questions), dans un ordre au hasard. Une question peut être :
   - un QCM : { q, options: [...], correct: numéro (0 = la 1re), explication }
   - une réponse à écrire : { q, type: 'saisie', reponse, unite, explication }
   Questions d'Aora : { q, r: [bonne réponse, autre, autre], aide }.
   ===================================================================== */
window.ASTRELUNE_ILE = {
  billet: 25,
  aora: {
    questions: [
      { q: "Combien font 6 × 5 ?", r: ['30', '35', '25'], aide: "Compte de 5 en 5, six fois : 5, 10, 15, 20, 25… et encore une fois !" },
      { q: "Lequel de ces mots est un verbe ?", r: ['courir', 'rapide', 'maison'], aide: "Un verbe dit ce que l'on fait. On peut dire « je… » devant : je cours." },
      { q: "Sur une boussole, quelle lettre montre le nord ?", r: ['N', 'S', 'O'], aide: "N comme Nord, S comme Sud, O comme Ouest, E comme Est." },
    ],
  },
  maisons: [
    { id: 'ile-francais', modele: 'maison-bleue', mat: 'francais', titre: 'La Maison des Mots', matiere: 'Les mots et les phrases',
      hote: { nom: 'La maitresse Mirelle', genre: 'fille' },
      description: "Bienvenue dans la Maison des Mots ! Ici, on joue avec les verbes, les noms et l'orthographe. Réussis mon défi pour gagner 5 pièces d'or.",
      defis: [
        { id: 'ile-francais-1', titre: 'Le défi des mots', type: 'quiz', unique: true, gain: 5, niveau: 1, nombreNecessaire: 5,
          rubriques: [
            { nom: 'conjugaison', questions: [
              { q: "Complète : « Nous ___ à l'école à pied. »", options: ['allons', 'allez', 'vont', 'va'], correct: 0, explication: "Avec « nous », le verbe aller au présent s'écrit « allons »." },
              { q: "Complète : « Tu ___ ton cartable. »", options: ['prends', 'prend', 'prendre', 'prenez'], correct: 0, explication: "Avec « tu », le verbe se termine par « s » : tu prends." },
              { q: "Complète : « Les enfants ___ dans la cour. »", options: ['jouent', 'joue', 'jouer', 'jouez'], correct: 0, explication: "« Les enfants », c'est « ils » : ils jouent, avec « ent » à la fin." },
            ] },
            { nom: 'nature des mots', questions: [
              { q: "Dans la phrase « Le chat noir dort. », quel mot est un verbe ?", options: ['dort', 'chat', 'noir', 'le'], correct: 0, explication: "« dort » dit ce que fait le chat : c'est le verbe dormir." },
              { q: "Dans la phrase « Une jolie fleur pousse. », quel mot est un nom ?", options: ['fleur', 'jolie', 'pousse', 'une'], correct: 0, explication: "« fleur » est un nom : on peut mettre « une » ou « la » devant." },
              { q: "Dans la phrase « Léa mange une pomme. », quel est le sujet ?", options: ['Léa', 'mange', 'une', 'pomme'], correct: 0, explication: "Qui est-ce qui mange ? C'est Léa : c'est le sujet." },
            ] },
            { nom: 'homophones', questions: [
              { q: "Complète : « Lucas ___ un vélo bleu. »", options: ['a', 'à'], correct: 0, explication: "On peut dire « Lucas avait un vélo » : c'est le verbe avoir, sans accent." },
              { q: "Complète : « Je vais ___ la piscine. »", options: ['a', 'à'], correct: 1, explication: "On ne peut pas dire « je vais avait la piscine » : on écrit « à » avec un accent." },
              { q: "Complète : « Le ciel ___ tout gris. »", options: ['est', 'et'], correct: 0, explication: "On peut dire « le ciel était gris » : c'est le verbe être, « est »." },
            ] },
            { nom: 'pluriel et accords', questions: [
              { q: "Quel est le pluriel de « un cheval » ?", options: ['des chevaux', 'des chevals', 'des chevaus', 'des chevaix'], correct: 0, explication: "Les mots en « al » font souvent leur pluriel en « aux » : un cheval, des chevaux." },
              { q: "Écris le pluriel : un ami, des …", type: 'saisie', reponse: 'amis', explication: "Au pluriel, on ajoute souvent un « s » : un ami, des amis." },
              { q: "Complète : « Les fleurs sont ___. »", options: ['jolies', 'jolie', 'jolis', 'joli'], correct: 0, explication: "« fleurs » est féminin et pluriel : jolie + e + s = jolies." },
            ] },
            { nom: 'vocabulaire', questions: [
              { q: "Quel mot est le contraire de « rapide » ?", options: ['lent', 'vite', 'court', 'léger'], correct: 0, explication: "Le contraire de rapide, c'est lent." },
              { q: "Quel mot a le même sens que « content » ?", options: ['joyeux', 'fâché', 'fatigué', 'timide'], correct: 0, explication: "Être content, c'est être joyeux." },
              { q: "Dans le dictionnaire, quel mot vient en premier ?", options: ['moulin', 'marché', 'maison', 'miroir'], correct: 2, explication: "Ils commencent tous par « m ». On regarde la 2e lettre : a (maison, marché), puis la 3e : i avant r. Donc « maison »." },
            ] },
          ] },
      ] },
    { id: 'ile-maths', modele: 'maison-rouge', mat: 'maths', titre: 'Le Comptoir des Nombres', matiere: 'Les nombres et les calculs',
      hote: { nom: 'La marchande Rosine', genre: 'fille' },
      description: "Bonjour ! Au Comptoir des Nombres, on compte, on calcule et on mesure. Aide-moi à tenir ma boutique et gagne 5 pièces d'or.",
      defis: [
        { id: 'ile-maths-1', titre: 'Les comptes de Rosine', type: 'quiz', unique: true, gain: 5, niveau: 1, nombreNecessaire: 5,
          rubriques: [
            { nom: 'numération', questions: [
              { q: "Comment s'écrit en chiffres « quatre-mille-deux-cent-cinq » ?", options: ['4 205', '4 250', '4 025', '4 520'], correct: 0, explication: "Quatre-mille = 4 000, deux-cents = 200, cinq = 5 : 4 205." },
              { q: "Quel est le plus grand nombre ?", options: ['9 870', '9 807', '9 078', '9 780'], correct: 0, explication: "Les milliers sont égaux (9). On compare les centaines : 8 est le plus grand, puis les dizaines : 7 > 0. C'est 9 870." },
              { q: "Dans le nombre 4 735, quel est le chiffre des centaines ?", type: 'saisie', reponse: '7', explication: "4 735 : 4 milliers, 7 centaines, 3 dizaines, 5 unités." },
            ] },
            { nom: 'calcul', questions: [
              { q: "Combien font 7 × 8 ?", type: 'saisie', reponse: '56', explication: "7 × 8 = 56 (table de 7 ou de 8)." },
              { q: "Combien font 250 + 150 ?", type: 'saisie', reponse: '400', explication: "250 + 150 = 400 (200 + 100 = 300 et 50 + 50 = 100)." },
              { q: "Combien font 100 − 37 ?", type: 'saisie', reponse: '63', explication: "100 − 37 = 63 (37 + 3 = 40, 40 + 60 = 100 : 3 + 60 = 63)." },
            ] },
            { nom: 'grandeurs', questions: [
              { q: "Écris le nombre qui manque : 1 m = … cm", type: 'saisie', reponse: '100', unite: 'cm', explication: "1 mètre = 100 centimètres." },
              { q: "Combien de minutes y a-t-il dans 1 heure ?", type: 'saisie', reponse: '60', unite: 'min', explication: "1 heure = 60 minutes." },
              { q: "Écris le nombre qui manque : 1 kg = … g", type: 'saisie', reponse: '1000', unite: 'g', explication: "1 kilogramme = 1 000 grammes." },
            ] },
            { nom: 'formes', questions: [
              { q: "Quelle figure a 4 côtés de même longueur et 4 angles droits ?", options: ['le carré', 'le rectangle', 'le triangle', 'le losange'], correct: 0, explication: "Le carré a 4 côtés égaux ET 4 angles droits. Le losange a 4 côtés égaux, mais pas d'angles droits." },
              { q: "Combien de côtés a un triangle ?", type: 'saisie', reponse: '3', explication: "Tri- veut dire trois : un triangle a 3 côtés." },
              { q: "Quel solide a 6 faces carrées ?", options: ['le cube', 'la boule', 'le cylindre', 'la pyramide'], correct: 0, explication: "Le cube a 6 faces carrées, comme un dé." },
            ] },
            { nom: 'problèmes', questions: [
              { q: "Rosine vend 3 sacs de 5 pommes. Combien de pommes vend-elle ?", type: 'saisie', reponse: '15', unite: 'pommes', explication: "3 × 5 = 15 pommes." },
              { q: "Un livre coute 8 €. Tom paie avec un billet de 20 €. Combien d'euros lui rend-on ?", type: 'saisie', reponse: '12', unite: '€', explication: "20 − 8 = 12 €." },
              { q: "Il y a 24 élèves. On fait des équipes de 4 élèves. Combien d'équipes y a-t-il ?", type: 'saisie', reponse: '6', unite: 'équipes', explication: "24 : 4 = 6 équipes." },
            ] },
          ] },
      ] },
    { id: 'ile-sciences', modele: 'maison-ronde', mat: 'eveil', titre: 'La Serre de l\'Ile', matiere: 'Les sciences',
      hote: { nom: 'L\'inventeur Bastien', genre: 'garcon' },
      description: "Entre dans ma serre ! J'observe les plantes, les animaux, l'eau et les machines. Réponds à mes questions de sciences et gagne 5 pièces d'or.",
      defis: [
        { id: 'ile-sciences-1', titre: 'Les observations de Bastien', type: 'quiz', unique: true, gain: 5, niveau: 1, nombreNecessaire: 5,
          rubriques: [
            { nom: 'les plantes', questions: [
              { q: "De quoi une plante verte a-t-elle besoin pour vivre ?", options: ["de lumière et d'eau", 'de sucre et de sel', 'de nuit et de froid', 'de sable et de vent'], correct: 0, explication: "Une plante verte a besoin de lumière, d'eau, d'air et de terre (sels minéraux)." },
              { q: "Quelle partie de la plante puise l'eau dans le sol ?", options: ['les racines', 'les feuilles', 'les fleurs', 'les fruits'], correct: 0, explication: "Les racines puisent l'eau et les sels minéraux dans le sol." },
              { q: "Après avoir été pollinisée, la fleur du pommier devient…", options: ['un fruit', 'une feuille', 'une racine', 'une tige'], correct: 0, explication: "La fleur pollinisée se transforme en fruit : la pomme, qui contient les pépins (les graines)." },
            ] },
            { nom: 'les animaux', questions: [
              { q: "Comment appelle-t-on un animal qui mange seulement des plantes ?", options: ['un herbivore', 'un carnivore', 'un omnivore', 'un rongeur'], correct: 0, explication: "Herbivore = qui mange de l'herbe, des plantes. Carnivore = de la viande. Omnivore = de tout." },
              { q: "Combien de pattes a un insecte ?", type: 'saisie', reponse: '6', unite: 'pattes', explication: "Tous les insectes ont 6 pattes. L'araignée en a 8 : ce n'est pas un insecte !" },
              { q: "Lequel de ces animaux est un mammifère ?", options: ['le chat', 'le requin', 'la truite', 'le crabe'], correct: 0, explication: "Le chat a des poils et la maman allaite ses petits : c'est un mammifère. Le requin et la truite sont des poissons, le crabe un crustacé." },
            ] },
            { nom: "l'eau", questions: [
              { q: "Que devient l'eau quand elle gèle ?", options: ['de la glace', 'de la vapeur', 'du sable', 'de la pluie'], correct: 0, explication: "L'eau qui gèle devient solide : c'est la glace." },
              { q: "À combien de degrés l'eau pure gèle-t-elle ?", type: 'saisie', reponse: '0', unite: '°C', explication: "L'eau pure gèle à 0 °C." },
              { q: "Quand l'eau bout, elle se transforme en…", options: ['vapeur', 'glace', 'neige', 'sel'], correct: 0, explication: "Vers 100 °C, l'eau bout et devient de la vapeur d'eau (un gaz)." },
            ] },
            { nom: 'le corps', questions: [
              { q: "Quel organe fait circuler le sang dans le corps ?", options: ['le cœur', 'le poumon', "l'estomac", 'le cerveau'], correct: 0, explication: "Le cœur est un muscle qui pompe le sang dans tout le corps." },
              { q: "Avec quel sens reconnais-tu une odeur ?", options: ["l'odorat", 'le goût', "l'ouïe", 'le toucher'], correct: 0, explication: "On sent les odeurs avec le nez : c'est l'odorat." },
              { q: "Comment appelle-t-on l'ensemble des os du corps ?", options: ['le squelette', 'les muscles', 'la peau', 'le sang'], correct: 0, explication: "Tous les os ensemble forment le squelette." },
            ] },
            { nom: 'matière et machines', questions: [
              { q: "Quel objet est attiré par un aimant ?", options: ['un clou en fer', 'une gomme', 'un crayon en bois', 'une feuille de papier'], correct: 0, explication: "L'aimant attire le fer : le clou est attiré, pas le bois, ni le papier, ni le caoutchouc." },
              { q: "Quel matériau laisse passer la lumière ?", options: ['le verre', 'le bois', 'la pierre', 'le carton'], correct: 0, explication: "Le verre est transparent : la lumière le traverse. C'est pour cela qu'on en met aux fenêtres." },
              { q: "Qu'est-ce qui fait tourner les ailes d'un moulin à vent ?", options: ['le vent', 'la pluie', 'la neige', 'la lune'], correct: 0, explication: "Le vent pousse les ailes et les fait tourner : c'est une énergie naturelle." },
            ] },
          ] },
      ] },
    { id: 'ile-geo', modele: 'maison-pecheur', mat: 'eveil', titre: 'La Cabane des Cartes', matiere: "L'histoire et la géographie",
      hote: { nom: 'Le cartographe Elouan', genre: 'garcon' },
      description: "Ahoy ! Je dessine des cartes et je collectionne les histoires d'autrefois. Montre-moi que tu sais t'orienter et voyager dans le temps : 5 pièces d'or à la clé !",
      defis: [
        { id: 'ile-geo-1', titre: 'Les cartes d\'Elouan', type: 'quiz', unique: true, gain: 5, niveau: 1, nombreNecessaire: 5,
          rubriques: [
            { nom: "s'orienter", questions: [
              { q: "De quel côté le soleil se lève-t-il ?", options: ["à l'est", "à l'ouest", 'au nord', 'au sud'], correct: 0, explication: "Le soleil se lève à l'est et se couche à l'ouest." },
              { q: "Sur une carte, le nord est le plus souvent…", options: ['en haut', 'en bas', 'à gauche', 'à droite'], correct: 0, explication: "Sur la plupart des cartes, le nord est en haut (une flèche N l'indique)." },
              { q: "Quel point cardinal est à l'opposé du nord ?", options: ['le sud', "l'est", "l'ouest", 'le nord-est'], correct: 0, explication: "Le sud est à l'opposé du nord, et l'ouest à l'opposé de l'est." },
            ] },
            { nom: 'la Belgique', questions: [
              { q: "Quelle est la capitale de la Belgique ?", options: ['Bruxelles', 'Liège', 'Namur', 'Anvers'], correct: 0, explication: "Bruxelles est la capitale de la Belgique (et aussi de l'Union européenne)." },
              { q: "Combien de provinces la Belgique compte-t-elle ?", type: 'saisie', reponse: '10', unite: 'provinces', explication: "La Belgique compte 10 provinces : 5 en Flandre et 5 en Wallonie." },
              { q: "Quelle mer borde la côte belge ?", options: ['la mer du Nord', 'la mer Baltique', 'la mer Noire', 'la mer Rouge'], correct: 0, explication: "La côte belge (Ostende, La Panne…) borde la mer du Nord." },
            ] },
            { nom: 'cartes et plans', questions: [
              { q: "Sur une carte, à quoi sert la légende ?", options: ['à expliquer les symboles', "à donner l'heure du jour", 'à écrire le nom du pays', 'à colorier la mer en bleu'], correct: 0, explication: "La légende explique ce que veulent dire les symboles et les couleurs de la carte." },
              { q: "Sur une carte, quelle couleur montre le plus souvent l'eau ?", options: ['le bleu', 'le rouge', 'le jaune', 'le brun'], correct: 0, explication: "Les mers, les lacs et les rivières sont dessinés en bleu." },
              { q: "Comment appelle-t-on le dessin d'un lieu vu du dessus ?", options: ['un plan', 'un portrait', 'un paysage', 'un graphique'], correct: 0, explication: "Un plan montre un lieu (une classe, un quartier) vu du dessus." },
            ] },
            { nom: 'le temps qui passe', questions: [
              { q: "Combien d'années y a-t-il dans un siècle ?", type: 'saisie', reponse: '100', unite: 'ans', explication: "Un siècle = 100 ans." },
              { q: "Combien d'années y a-t-il dans une décennie ?", type: 'saisie', reponse: '10', unite: 'ans', explication: "Une décennie = 10 ans." },
              { q: "Quelle période de l'histoire vient en premier ?", options: ['la Préhistoire', "l'Antiquité", 'le Moyen Âge', 'les Temps modernes'], correct: 0, explication: "Dans l'ordre : Préhistoire, Antiquité, Moyen Âge, Temps modernes, Époque contemporaine." },
            ] },
            { nom: "l'histoire", questions: [
              { q: "Comment vivaient les premiers humains, à la Préhistoire ?", options: ['de chasse et de cueillette', 'dans de grandes villes', 'en voyageant en voiture', 'dans des châteaux forts'], correct: 0, explication: "Les premiers humains chassaient, pêchaient et cueillaient des fruits et des plantes." },
              { q: "Au Moyen Âge, qui habitait le château fort ?", options: ['le seigneur', "l'astronaute", 'le président', 'le chevalier romain'], correct: 0, explication: "Le seigneur vivait dans le château fort, avec sa famille et ses chevaliers." },
              { q: "Sur une ligne du temps, on place…", options: ['des évènements dans l\'ordre', 'des villes et des routes', 'des mots dans l\'ordre alphabétique', 'des pays et leurs frontières'], correct: 0, explication: "Une ligne du temps range les évènements dans l'ordre où ils se sont passés." },
            ] },
          ] },
      ] },
  ],
};
