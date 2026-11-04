/* =====================================================================
   LE MONDE DES BRIQUES — L'ARCHIPEL DES DÉCOUVERTES (éveil)
   ---------------------------------------------------------------------
   4 ILES = 4 NIVEAUX DE DIFFICULTÉ (plan validé par l'enseignant).
   Chaque ile a 4 bâtiments : histoire, géographie, le vivant,
   matière-énergie-techniques. L'ile suivante s'ouvre avec 80 % des
   étoiles dans CHAQUE bâtiment de l'ile précédente ; on y va en bateau.
   Formats de questions : voir monde-francais.js.
   ===================================================================== */
window.MDB_CONTENU = window.MDB_CONTENU || { personnages: {}, quetes: {} };
window.MDB_CONTENU.eveil = {
  "titre": "L'Archipel des Découvertes",
  "sousTitre": "Le monde de l'éveil",
  "symboles": [
    "⏳",
    "N",
    "♥",
    "⚙"
  ],
  "couleur": "#0b7285",
  "codeEnseignant": "1234",
  "accueil": {
    "nom": "Capitaine Boussole",
    "lignes": [
      "Bienvenue dans l'Archipel des Découvertes, {nom} ! Ici, on explore l'histoire, la géographie, le vivant et les inventions.",
      "L'archipel a quatre iles : ce sont quatre niveaux. Tu es sur l'Ile des Mousses (niveau 1). Viennent ensuite les Matelots, les Navigateurs et les Capitaines (niveau 4).",
      "Sur chaque ile, il y a quatre bâtiments : le musée du temps, la tour des cartes, la serre du vivant et l'atelier des inventions.",
      "Pour aller sur l'ile suivante, prends le bateau au ponton. Le passeur t'emmène quand tu as 80 % des étoiles dans chaque bâtiment.",
      "Et au milieu de l'archipel, le phare attend les vrais capitaines…"
    ],
    "indice": "L'Ile des Mousses est le niveau 1. Le bateau du ponton mène aux autres iles."
  },
  "habitantsCentre": [
    {
      "nom": "Le gardien du phare",
      "lignes": [
        "Tu vois le phare, au milieu de l'archipel ?",
        "Il s'ouvre aux enfants qui maitrisent l'Ile des Capitaines."
      ],
      "indice": "Le phare s'ouvre quand l'Ile des Capitaines est maitrisée."
    },
    {
      "nom": "La plongeuse Marina",
      "lignes": [
        "Bonjour ! Moi, je connais tous les secrets de la mer."
      ]
    },
    {
      "nom": "Le vieux loup de mer",
      "lignes": [
        "Dans chaque bâtiment, la 3e étoile se gagne un autre jour.",
        "C'est pour vérifier que tu n'as pas oublié !"
      ],
      "indice": "La 3e étoile d'un défi se gagne un autre jour."
    },
    {
      "nom": "L'explorateur Livingstone",
      "lignes": [
        "Bonjour ! J'ai fait le tour du monde trois fois."
      ]
    },
    {
      "nom": "La chercheuse d'or",
      "lignes": [
        "Des pièces dorées sont cachées sur toutes les iles…",
        "Même sur celles où tu ne peux pas encore aller !"
      ],
      "indice": "Des pièces dorées sont cachées sur toutes les iles."
    },
    {
      "nom": "Le peintre Ernest",
      "lignes": [
        "Bonjour ! Je peins les paysages de l'archipel."
      ]
    }
  ],
  "mairie": {
    "titre": "Le Phare des Découvertes",
    "description": "Le grand défi du gardien : des questions de toutes les matières, au niveau de fin de primaire.",
    "ferme": [
      "Le phare est fermé.",
      "Une affiche dit : « Le gardien recevra les enfants qui maitrisent l'Ile des Capitaines (80 % des étoiles dans chaque bâtiment). »"
    ],
    "condition": {
      "pourcent": 80
    },
    "maire": {
      "nom": "Le gardien du phare",
      "lignes": [
        "Bienvenue dans mon phare, {nom} !",
        "Tu maitrises les quatre iles de l'archipel. Bravo !",
        "Voici mon grand défi : des questions de toutes les matières. Réussis-le et tu deviendras Grand Explorateur !"
      ]
    },
    "defi": {
      "id": "eveil-grand-defi",
      "titre": "Le grand défi du phare",
      "type": "quiz",
      "nombreNecessaire": 10,
      "depuis": [
        "e3-hist-a",
        "e3-hist-b",
        "e3-hist-c",
        "e3-geo-a",
        "e3-geo-b",
        "e3-geo-c",
        "e3-viv-a",
        "e3-viv-b",
        "e3-viv-c",
        "e3-mat-a",
        "e3-mat-b",
        "e3-mat-c",
        "e4-hist-a",
        "e4-hist-b",
        "e4-hist-c",
        "e4-geo-a",
        "e4-geo-b",
        "e4-geo-c",
        "e4-viv-a",
        "e4-viv-b",
        "e4-viv-c",
        "e4-mat-a",
        "e4-mat-b",
        "e4-mat-c"
      ]
    }
  },
  "quartiers": [
    {
      "id": "i1",
      "niveau": 1,
      "titre": "Ile des Mousses",
      "sousTitre": "Niveau 1 · Les premiers défis",
      "couleur": "#e8443a",
      "symboles": [
        "1",
        "⏳",
        "N",
        "⚙"
      ],
      "ouvertParDefaut": true,
      "agent": {
        "nom": "Le passeur Marin",
        "ferme": [
          "Ahoy ! Mon bateau ne t'emmène pas encore sur l'Ile des Mousses."
        ]
      },
      "habitants": [
        {
          "nom": "Le pêcheur Yvon",
          "lignes": [
            "Le musée du temps est {b:i1-hist}.",
            "La tour des cartes est {b:i1-geo}."
          ],
          "indice": "Musée du temps : {b:i1-hist}. Tour des cartes : {b:i1-geo}."
        },
        {
          "nom": "La marchande Coco",
          "lignes": [
            "La serre du vivant est {b:i1-viv}.",
            "Et l'atelier des inventions est {b:i1-mat}."
          ],
          "indice": "Serre du vivant : {b:i1-viv}. Atelier des inventions : {b:i1-mat}."
        },
        {
          "nom": "Le mousse Tom",
          "lignes": [
            "Pour aller sur l'ile suivante, parle au passeur du ponton.",
            "Il t'emmène quand tu as 80 % des étoiles dans chaque bâtiment de cette ile."
          ],
          "indice": "Pour l'ile suivante : 80 % des étoiles dans chaque bâtiment, puis le bateau du ponton."
        }
      ],
      "batiments": [
        {
          "id": "i1-hist",
          "matiere": "Histoire",
          "titre": "Le musée du temps",
          "symbole": "⏳",
          "description": "La Préhistoire et la frise du temps.",
          "hote": {
            "nom": "L'archéologue Arcadine",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e1-hist-a",
              "titre": "Les premiers humains",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Le mot « Paléolithique » désigne l'âge de…","options":["la pierre taillée","la pierre polie","l'or et du cuivre","la pierre sculptée"],"correct":0,"explication":"Paléolithique signifie « pierre ancienne » : c'est l'âge de la pierre taillée, la plus longue période de la Préhistoire."},
                {"q":"Au Paléolithique, les humains se déplaçaient sans cesse pour suivre le gibier. On dit qu'ils étaient …","contexte":"Écris un seul mot.","type":"saisie","clavier":"texte","reponse":["nomades","nomade","des nomades"],"explication":"Un peuple nomade n'a pas d'habitation fixe : il se déplace selon la nourriture disponible."},
                {"q":"Comment les humains du Paléolithique se procuraient-ils leur nourriture ?","options":["par l'agriculture et l'élevage des bêtes","par la chasse, la pêche et la cueillette","par l'élevage et le commerce du sel","par la culture du blé et la pêche"],"correct":1,"explication":"Au Paléolithique, on ne cultive pas et on n'élève pas : on chasse, on pêche et on cueille."},
                {"q":"Dans quelle matière les outils du Paléolithique étaient-ils surtout fabriqués ?","options":["le fer","le bronze","le silex","le cuivre"],"correct":2,"explication":"Le silex est une pierre dure qui, une fois taillée, donne des bords très tranchants. Les métaux étaient encore inconnus."},
                {"q":"Comment appelle-t-on l'outil en silex taillé sur ses deux faces, utilisé pour couper, gratter ou frapper ?","options":["le harpon","le propulseur","la faucille","le biface"],"correct":3,"explication":"Le biface est taillé sur deux faces : c'est l'un des outils les plus anciens et les plus connus."},
                {"q":"À quoi servait le propulseur ?","options":["à lancer une sagaie plus loin","à allumer un feu bien plus vite","à moudre des grains de blé","à tisser de longs fils de laine"],"correct":0,"explication":"Le propulseur prolonge le bras du chasseur : la sagaie part plus loin et plus fort."},
                {"q":"Le harpon, souvent taillé dans un os ou un bois de renne, servait surtout à…","options":["couper des branches","pêcher des poissons","creuser le sol gelé","coudre des vêtements"],"correct":1,"explication":"Le harpon possède des crochets (barbelures) qui retiennent le poisson une fois piqué."},
                {"q":"La maitrise du feu permettait de se chauffer, de s'éclairer, de cuire les aliments et d'éloigner les animaux.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le feu a changé la vie des humains : chaleur, lumière, cuisson et protection contre les bêtes sauvages."},
                {"q":"Quelle méthode les humains de la Préhistoire utilisaient-ils pour allumer un feu ?","options":["frotter deux os mouillés ensemble","souffler fort sur des feuilles","frotter du bois ou frapper des pierres","taper un caillou contre la glace"],"correct":2,"explication":"En frottant vite deux morceaux de bois secs (ou en frappant certaines pierres), on obtient assez de chaleur pour enflammer de l'herbe sèche."},
                {"q":"Sur les parois des grottes, les artistes du Paléolithique ont surtout représenté…","options":["des maisons et des villages","des champs de blé et des moutons","des rois sur leur trône","des animaux comme des chevaux"],"correct":3,"explication":"L'art des cavernes montre surtout des animaux : chevaux, bisons, aurochs, cerfs, mammouths…"},
                {"q":"Avec quoi les artistes préhistoriques peignaient-ils sur les parois ?","options":["de l'ocre et du charbon de bois","de l'encre et une plume d'oie","de la craie et de l'huile d'olive","du jus de raisin et de la cire"],"correct":0,"explication":"Ils utilisaient des pigments naturels : terres colorées (ocre rouge ou jaune) et charbon de bois pour le noir."},
                {"q":"Les humains de la Préhistoire ont parfois laissé la trace de leurs mains sur les parois des grottes.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"On trouve des mains « négatives » : la main était posée sur la paroi et on soufflait de la couleur autour."},
                {"q":"Pour peindre au fond des grottes sombres, les artistes s'éclairaient avec…","options":["des lampes à pétrole","des lampes à graisse","des bougies en cire","des lanternes en verre"],"correct":1,"explication":"Ils brulaient de la graisse animale dans une pierre creusée, avec une mèche végétale."},
                {"q":"La grotte de Lascaux, célèbre pour ses peintures préhistoriques, se trouve…","options":["en Belgique","en Allemagne","en France","aux Pays-Bas"],"correct":2,"explication":"Lascaux, en France, est l'une des grottes ornées les plus célèbres du monde."},
                {"q":"À Spy, dans la province de Namur, on a découvert au 19e siècle des squelettes…","options":["de soldats romains","de mammouths nains","de chevaliers francs","d'hommes de Néandertal"],"correct":3,"explication":"Les hommes de Spy sont des Néandertaliens : une découverte très importante pour la Préhistoire."},
                {"q":"Quel animal vivait dans nos régions pendant les périodes froides du Paléolithique ?","options":["le mammouth laineux","le dromadaire du désert","le tyrannosaure géant","le kangourou roux"],"correct":0,"explication":"Pendant les glaciations, nos régions étaient froides : mammouths, rennes et rhinocéros laineux y vivaient."},
                {"q":"Les humains de la Préhistoire ont chassé les dinosaures.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les dinosaures ont disparu il y a environ 66 millions d'années, bien avant l'apparition des humains."},
                {"q":"Au Paléolithique, les humains vivaient tout le temps au fond des grottes.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"C'est une idée reçue : ils s'abritaient surtout à l'entrée des grottes, sous des abris de roche ou dans des huttes."},
                {"q":"Où s'abritaient souvent les chasseurs du Paléolithique ?","options":["dans des maisons en briques","sous des tentes en peaux de bêtes","dans des fermes en pierre","dans des villages fortifiés"],"correct":1,"explication":"Nomades, ils montaient des abris faciles à déplacer, faits de branches, d'os et de peaux."},
                {"q":"Avec quoi les humains du Paléolithique cousaient-ils leurs vêtements en peau ?","options":["une aiguille en fer","une aiguille en bronze","une aiguille en os","une aiguille en or"],"correct":2,"explication":"À la fin du Paléolithique, on fabrique de fines aiguilles en os. Les métaux ne sont pas encore connus."},
                {"q":"Quel métal les humains du Paléolithique utilisaient-ils ?","options":["surtout le fer","surtout le bronze","surtout le cuivre","aucun métal"],"correct":3,"explication":"Au Paléolithique, les métaux ne sont pas encore travaillés : tout est fait en pierre, os, bois ou peau."},
                {"q":"Pour tailler un silex, on le frappait avec…","options":["un galet bien dur","un marteau en fer","une hache en bronze","un ciseau en acier"],"correct":0,"explication":"Le galet sert de percuteur : chaque coup détache un éclat et rend le silex tranchant."},
                {"q":"Quelle période est la plus ancienne ?","options":["le Néolithique","le Paléolithique","l'âge du bronze","l'âge du fer"],"correct":1,"explication":"Le Paléolithique vient d'abord, puis le Néolithique, puis l'âge des métaux (bronze, puis fer)."},
                {"q":"Le Paléolithique est la plus longue période de l'histoire des humains.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le Paléolithique dure des centaines de milliers d'années, bien plus que toutes les périodes suivantes réunies."},
                {"q":"Que récoltaient les cueilleurs du Paléolithique ?","options":["du blé et de l'orge cultivés","des pommes de terre et du maïs","des baies, des racines et des noix","des légumes de leur potager"],"correct":2,"explication":"La cueillette consiste à ramasser ce qui pousse dans la nature, sans rien cultiver."},
                {"q":"Pourquoi les hommes du Paléolithique chassaient-ils souvent en groupe ?","options":["pour éviter de devoir marcher","pour attendre que le gibier vienne","pour apprendre à cultiver la terre","pour abattre de grands animaux"],"correct":3,"explication":"À plusieurs, on peut encercler et abattre un gros animal comme un mammouth ou un bison."},
                {"q":"Dans un animal chassé, on utilisait la viande, mais aussi la peau, les os et les tendons.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Rien ne se perdait : peau pour les vêtements, os pour les outils, tendons pour coudre."},
                {"q":"Comment appelle-t-on le spécialiste qui fouille le sol pour retrouver les objets laissés par les humains d'autrefois ?","options":["un archéologue","un paléontologue","un géologue","un astronome"],"correct":0,"explication":"L'archéologue étudie les traces laissées par les humains ; le paléontologue étudie les fossiles d'êtres vivants comme les dinosaures."}
              ]
            },
            {
              "id": "e1-hist-b",
              "titre": "Les premiers villages",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Le mot « Néolithique » désigne l'âge de…","options":["la pierre taillée","la pierre polie","l'or et du cuivre","la pierre peinte"],"correct":1,"explication":"Néolithique signifie « pierre nouvelle » : c'est l'âge de la pierre polie, après le Paléolithique."},
                {"q":"Au Néolithique, les humains s'installent dans des villages et ne se déplacent plus. Ils deviennent …","contexte":"Écris un seul mot.","type":"saisie","clavier":"texte","reponse":["sédentaires","sedentaires","sédentaire","sedentaire"],"explication":"Sédentaire est le contraire de nomade : on vit toujours au même endroit."},
                {"q":"Quel grand changement marque le début du Néolithique ?","options":["la chasse et la cueillette","la maitrise du feu","l'agriculture et l'élevage","la taille du silex"],"correct":2,"explication":"Au Néolithique, les humains produisent leur nourriture : ils cultivent des plantes et élèvent des animaux."},
                {"q":"L'agriculture qui arrive dans nos régions est d'abord apparue…","options":["en Scandinavie","en Amérique","en Australie","au Proche-Orient"],"correct":3,"explication":"Elle est née au Proche-Orient, puis s'est répandue lentement vers l'Europe."},
                {"q":"Vers quelle date les premiers agriculteurs arrivent-ils dans nos régions ?","options":["vers 5000 av. J.-C.","vers 500 ap. J.-C.","vers 50 av. J.-C.","vers 1500 ap. J.-C."],"correct":0,"explication":"Les premiers villages d'agriculteurs apparaissent dans nos régions vers 5000 avant Jésus-Christ."},
                {"q":"Quelles plantes les premiers agriculteurs de nos régions cultivaient-ils ?","options":["la pomme de terre et le maïs","le blé et l'orge","le café et le cacao","la tomate et le riz"],"correct":1,"explication":"Blé et orge viennent du Proche-Orient. Pomme de terre, maïs, tomate et cacao viennent d'Amérique et arrivent bien plus tard."},
                {"q":"Lequel de ces animaux n'était PAS élevé dans nos régions au Néolithique ?","options":["le mouton","le bœuf","la dinde","le porc"],"correct":2,"explication":"La dinde vient d'Amérique : elle n'arrive en Europe qu'au 16e siècle, après les voyages de découverte."},
                {"q":"Quel animal a été domestiqué le premier, déjà au Paléolithique ?","options":["le mouton","la vache","la poule","le chien"],"correct":3,"explication":"Le chien, descendant du loup, accompagnait déjà les chasseurs avant l'invention de l'agriculture."},
                {"q":"Domestiquer un animal, c'est…","options":["l'élever et le rendre utile à l'homme","le chasser pour manger sa viande","le dessiner sur la paroi d'une grotte","le relâcher loin dans la forêt"],"correct":0,"explication":"Un animal domestique vit avec les humains, qui l'élèvent pour sa viande, son lait, sa laine ou son aide."},
                {"q":"Pourquoi les paysans du Néolithique fabriquaient-ils des poteries ?","options":["pour décorer les murs de leurs grottes","pour conserver et cuire les aliments","pour transporter le feu de grotte en grotte","pour échanger contre des pièces d'or"],"correct":1,"explication":"Les pots en terre cuite servent à stocker les récoltes et à cuire la nourriture."},
                {"q":"À quoi servait surtout la hache en pierre polie ?","options":["à pêcher des poissons","à peindre les grottes","à abattre des arbres","à moudre les grains"],"correct":2,"explication":"Pour créer des champs, les premiers paysans devaient défricher la forêt avec leurs haches polies."},
                {"q":"Avec quel outil les paysans du Néolithique coupaient-ils les épis de céréales ?","options":["le harpon","le propulseur","le biface","la faucille"],"correct":3,"explication":"La faucille est un outil courbe ; au Néolithique, sa lame est faite de petits éclats de silex."},
                {"q":"À quoi servait la meule des paysans du Néolithique ?","options":["à écraser les grains en farine","à tailler les pierres de silex","à faire cuire les poteries","à tisser les fils de lin"],"correct":0,"explication":"On écrasait les grains entre deux pierres pour obtenir de la farine et préparer des galettes."},
                {"q":"À Spiennes, près de Mons, on a retrouvé…","options":["des mines de charbon romaines","de très anciennes mines de silex","des grottes couvertes de peintures","les ruines d'un château fort"],"correct":1,"explication":"Les minières néolithiques de Spiennes, où l'on extrayait le silex, sont inscrites au patrimoine mondial de l'Unesco."},
                {"q":"On a retrouvé des haches en silex de Spiennes loin de Mons : cela montre que les objets s'échangeaient.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Des objets retrouvés loin de leur lieu de fabrication prouvent qu'il existait des échanges entre groupes humains."},
                {"q":"Quels monuments préhistoriques peut-on voir à Wéris, dans la province de Luxembourg ?","options":["des beffrois et des églises","des thermes et des arènes","des dolmens et des menhirs","des remparts et des donjons"],"correct":2,"explication":"Wéris est célèbre pour ses mégalithes : de grandes pierres dressées ou assemblées au Néolithique."},
                {"q":"Un menhir est une grande pierre plantée verticalement dans le sol.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le menhir est une pierre dressée ; le dolmen ressemble à une grande table de pierre."},
                {"q":"À quoi servaient la plupart des dolmens ?","options":["de maisons d'habitation","de fours à poteries","d'enclos pour le bétail","de tombes collectives"],"correct":3,"explication":"Les dolmens étaient des sépultures : on y déposait les morts, souvent plusieurs personnes."},
                {"q":"Les maisons des premiers agriculteurs de nos régions étaient faites…","options":["de bois et de torchis","de briques et de tuiles","de pierre et d'ardoise","de béton et de verre"],"correct":0,"explication":"Le torchis est un mélange de terre et de paille appliqué sur un treillis de branches."},
                {"q":"Au Néolithique, on commence à tisser des tissus, par exemple avec les fibres du lin.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Grâce au tissage, les vêtements ne sont plus seulement faits de peaux de bêtes."},
                {"q":"Grâce aux récoltes mises en réserve, la population augmente au Néolithique.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Avec des réserves de nourriture, on souffre moins de la faim : les villages grandissent."},
                {"q":"Au Néolithique, les humains arrêtent complètement de chasser.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Agriculture et élevage deviennent essentiels, mais la chasse, la pêche et la cueillette continuent."},
                {"q":"Lequel de ces éléments est une nouveauté du Néolithique ?","options":["la chasse","l'agriculture","la cueillette","le feu"],"correct":1,"explication":"Chasse, cueillette et feu existaient déjà au Paléolithique. L'agriculture est la grande nouveauté du Néolithique."},
                {"q":"Dans nos régions, quelle technique est apparue le plus tard ?","options":["le biface","le propulseur","la poterie","le feu maitrisé"],"correct":2,"explication":"Le biface, le propulseur et le feu datent du Paléolithique ; la poterie arrive chez nous avec les agriculteurs du Néolithique."},
                {"q":"Un peuple sédentaire est un peuple qui…","options":["se déplace selon les saisons","suit les troupeaux de rennes","change de grotte chaque mois","vit toujours au même endroit"],"correct":3,"explication":"Sédentaire s'oppose à nomade : on reste au même endroit, près de ses champs."},
                {"q":"Quelle période vient juste après le Néolithique ?","options":["l'âge des métaux","le Paléolithique","le Moyen Âge","les Temps modernes"],"correct":0,"explication":"Après le Néolithique, on apprend à travailler le cuivre, le bronze puis le fer : c'est l'âge des métaux."},
                {"q":"Le bronze est un mélange de deux métaux. Lesquels ?","options":["le fer et l'étain","le cuivre et l'étain","le cuivre et l'or","le fer et l'argent"],"correct":1,"explication":"Le bronze est un alliage de cuivre et d'étain, plus dur que le cuivre seul."},
                {"q":"L'âge du fer vient avant l'âge du bronze.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"On a d'abord travaillé le cuivre, puis le bronze, et seulement ensuite le fer."}
              ]
            },
            {
              "id": "e1-hist-c",
              "titre": "La frise du temps",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"En combien de grandes périodes découpe-t-on l'histoire sur la frise chronologique ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["5","cinq"],"explication":"Préhistoire, Antiquité, Moyen Âge, Temps modernes et Époque contemporaine : 5 grandes périodes."},
                {"q":"Quelle est la première période de l'histoire des humains ?","options":["l'Antiquité","le Moyen Âge","la Préhistoire","les Temps modernes"],"correct":2,"explication":"Tout commence avec la Préhistoire, puis viennent l'Antiquité, le Moyen Âge, les Temps modernes et l'Époque contemporaine."},
                {"q":"Quelle période vient juste après l'Antiquité ?","options":["la Préhistoire","les Temps modernes","l'Époque contemporaine","le Moyen Âge"],"correct":3,"explication":"Ordre : Préhistoire, Antiquité, Moyen Âge, Temps modernes, Époque contemporaine."},
                {"q":"Quelle période vient juste avant l'Époque contemporaine ?","options":["les Temps modernes","le Moyen Âge","l'Antiquité","la Préhistoire"],"correct":0,"explication":"Les Temps modernes se terminent en 1789 ; l'Époque contemporaine commence alors."},
                {"q":"Dans quelle période vivons-nous aujourd'hui ?","options":["les Temps modernes","l'Époque contemporaine","le Moyen Âge","l'Antiquité"],"correct":1,"explication":"L'Époque contemporaine a commencé en 1789 et continue aujourd'hui."},
                {"q":"Quelle suite de périodes est dans le bon ordre ?","options":["Antiquité, Préhistoire, Moyen Âge","Préhistoire, Moyen Âge, Antiquité","Préhistoire, Antiquité, Moyen Âge","Moyen Âge, Antiquité, Préhistoire"],"correct":2,"explication":"L'Antiquité se place entre la Préhistoire et le Moyen Âge."},
                {"q":"Quelle suite de périodes est dans le bon ordre ?","options":["Temps modernes, Moyen Âge, Époque contemporaine","Moyen Âge, Époque contemporaine, Temps modernes","Époque contemporaine, Temps modernes, Moyen Âge","Moyen Âge, Temps modernes, Époque contemporaine"],"correct":3,"explication":"Les Temps modernes se placent entre le Moyen Âge et l'Époque contemporaine."},
                {"q":"Parmi ces périodes, laquelle est la plus récente ?","options":["les Temps modernes","le Moyen Âge","l'Antiquité","la Préhistoire"],"correct":0,"explication":"Dans cette liste, les Temps modernes viennent en dernier ; seule l'Époque contemporaine est plus récente."},
                {"q":"Parmi ces périodes, laquelle est la plus ancienne ?","options":["le Moyen Âge","l'Antiquité","les Temps modernes","l'Époque contemporaine"],"correct":1,"explication":"L'Antiquité vient juste après la Préhistoire, avant toutes les autres périodes de la liste."},
                {"q":"Quelle invention marque la fin de la Préhistoire et le début de l'Antiquité ?","options":["le feu","l'agriculture","l'écriture","l'imprimerie"],"correct":2,"explication":"L'histoire commence avec les premiers textes écrits, vers 3500 avant Jésus-Christ."},
                {"q":"Vers quelle date l'écriture a-t-elle été inventée ?","options":["vers 350 av. J.-C.","vers 35 000 av. J.-C.","vers 1500 ap. J.-C.","vers 3500 av. J.-C."],"correct":3,"explication":"Les premières écritures apparaissent vers 3500 avant Jésus-Christ : c'est le début de l'Antiquité."},
                {"q":"La Préhistoire est la période pendant laquelle les humains ne connaissaient pas encore …","contexte":"Écris le mot qui manque.","type":"saisie","clavier":"texte","reponse":["l'écriture","écriture","l'ecriture","ecriture","l’écriture","l’ecriture"],"explication":"Sans écriture, pas de textes : on connait la Préhistoire grâce aux objets et aux traces retrouvés."},
                {"q":"Quel évènement marque la fin de l'Antiquité et le début du Moyen Âge ?","options":["la chute de l'Empire romain d'Occident","l'invention de l'écriture en Mésopotamie","le premier voyage de Christophe Colomb","le début de la Révolution française"],"correct":0,"explication":"En 476, l'Empire romain d'Occident disparait : l'Antiquité laisse place au Moyen Âge."},
                {"q":"En quelle année l'Empire romain d'Occident a-t-il disparu ?","options":["1492","476","1789","1830"],"correct":1,"explication":"476 marque la fin de l'Antiquité et le début du Moyen Âge."},
                {"q":"On fait souvent commencer les Temps modernes avec le premier voyage de Christophe Colomb vers l'Amérique. En quelle année ?","options":["476","1789","1492","1830"],"correct":2,"explication":"En 1492, Christophe Colomb atteint l'Amérique : on le retient souvent comme début des Temps modernes."},
                {"q":"Quel évènement marque le début de l'Époque contemporaine ?","options":["l'indépendance belge de 1830","la chute de Rome en 476","le voyage de Colomb en 1492","la Révolution française de 1789"],"correct":3,"explication":"La Révolution française éclate en 1789 : c'est le début de l'Époque contemporaine."},
                {"q":"Quelle est la plus longue des cinq périodes ?","options":["la Préhistoire","l'Antiquité","le Moyen Âge","les Temps modernes"],"correct":0,"explication":"La Préhistoire dure des centaines de milliers d'années, bien plus que toutes les autres périodes réunies."},
                {"q":"Le Paléolithique et le Néolithique font partie de quelle période ?","options":["l'Antiquité","la Préhistoire","le Moyen Âge","les Temps modernes"],"correct":1,"explication":"Paléolithique (pierre taillée) et Néolithique (pierre polie) sont les deux grandes parties de la Préhistoire."},
                {"q":"Le Moyen Âge vient avant l'Antiquité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"C'est l'inverse : l'Antiquité se termine en 476, puis commence le Moyen Âge."},
                {"q":"Sur une frise chronologique, toutes les périodes ont la même durée.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les périodes n'ont pas la même durée : la Préhistoire est immense, les Temps modernes durent environ 300 ans."},
                {"q":"Sur une frise chronologique horizontale, où place-t-on le passé le plus lointain ?","options":["à droite","au milieu","à gauche","n'importe où"],"correct":2,"explication":"Une frise se lit de gauche à droite, comme une phrase : du plus ancien au plus récent."},
                {"q":"Les Temps modernes vont de 1492 à 1789. Ils durent donc environ…","options":["30 ans","1000 ans","3000 ans","300 ans"],"correct":3,"explication":"1789 − 1492 = 297, soit environ 300 ans."},
                {"q":"Le Moyen Âge va de 476 à 1492. Il dure donc environ…","options":["1000 ans","100 ans","500 ans","10 000 ans"],"correct":0,"explication":"1492 − 476 = 1016, soit environ 1000 ans."},
                {"q":"Combien d'années se sont écoulées entre 1492 et 1789 ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["297"],"explication":"On calcule 1789 − 1492 = 297 ans."},
                {"q":"Un siècle dure combien d'années ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["100","cent"],"explication":"Un siècle = 100 ans ; un millénaire = 1000 ans."},
                {"q":"Que signifie l'abréviation « av. J.-C. » ?","options":["avant Jules César","avant Jésus-Christ","avant la Conquête","avant les Croisades"],"correct":1,"explication":"La naissance de Jésus-Christ sert de point de repère à notre calendrier."},
                {"q":"Des humains peignent des bisons sur les parois d'une grotte. À quelle période cela se passe-t-il ?","options":["l'Antiquité","le Moyen Âge","la Préhistoire","les Temps modernes"],"correct":2,"explication":"L'art des cavernes date du Paléolithique, donc de la Préhistoire."},
                {"q":"La Belgique devient indépendante en 1830. À quelle période cela appartient-il ?","options":["les Temps modernes","le Moyen Âge","l'Antiquité","l'Époque contemporaine"],"correct":3,"explication":"1830 est après 1789 : c'est l'Époque contemporaine."},
                {"q":"Pour connaitre la Préhistoire, on ne peut pas lire de textes écrits à cette époque.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'écriture n'existait pas : on étudie les outils, les squelettes, les peintures et les traces retrouvées."}
              ]
            }
          ]
        },
        {
          "id": "i1-geo",
          "matiere": "Géographie",
          "titre": "La tour des cartes",
          "symbole": "N",
          "description": "Continents, océans, cartes et planètes.",
          "hote": {
            "nom": "Le cartographe Mercator",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e1-geo-a",
              "titre": "Continents et océans",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Combien de continents compte-t-on à l'école ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["6","six"],"explication":"Europe, Asie, Afrique, Amérique, Océanie et Antarctique : six continents."},
                {"q":"Quel est le plus grand continent ?","options":["l'Europe","l'Asie","l'Amérique","l'Afrique"],"correct":1,"explication":"L'Asie est le continent le plus vaste (et aussi le plus peuplé)."},
                {"q":"Sur quel continent se trouve le Maroc ?","options":["l'Océanie","l'Europe","l'Afrique","l'Asie"],"correct":2,"explication":"Le Maroc est au nord-ouest de l'Afrique, juste en face de l'Espagne."},
                {"q":"Sur quel continent se trouve le Brésil ?","options":["l'Amérique","l'Océanie","l'Afrique","l'Antarctique"],"correct":0,"explication":"Le Brésil est le plus grand pays d'Amérique du Sud."},
                {"q":"À quel continent appartient l'Australie ?","options":["l'Amérique","l'Antarctique","l'Océanie","l'Asie"],"correct":2,"explication":"L'Australie est la plus grande terre de l'Océanie."},
                {"q":"Sur quel continent se trouve le Japon ?","options":["l'Amérique","l'Europe","l'Océanie","l'Asie"],"correct":3,"explication":"Le Japon est un pays d'iles situé à l'est de l'Asie."},
                {"q":"Sur quel continent se trouve le Canada ?","options":["l'Antarctique","l'Europe","l'Asie","l'Amérique"],"correct":3,"explication":"Le Canada occupe le nord de l'Amérique."},
                {"q":"Sur quel continent se trouve la Chine ?","options":["l'Afrique","l'Asie","l'Europe","l'Océanie"],"correct":1,"explication":"La Chine est un immense pays d'Asie de l'Est."},
                {"q":"Quel continent est presque entièrement recouvert de glace ?","options":["l'Océanie","l'Europe","l'Arctique","l'Antarctique"],"correct":3,"explication":"L'Antarctique, autour du pôle Sud, est un continent couvert d'une épaisse calotte de glace."},
                {"q":"L'Arctique est un continent couvert de glace.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"L'Arctique est un océan, en partie gelé, autour du pôle Nord. Le continent glacé, c'est l'Antarctique."},
                {"q":"Sur quel continent n'y a-t-il aucun habitant permanent ?","options":["l'Océanie","l'Asie","l'Amérique","l'Antarctique"],"correct":3,"explication":"Il fait trop froid : seuls des scientifiques y séjournent dans des bases."},
                {"q":"Quel continent est le plus petit ?","options":["l'Europe","l'Océanie","l'Antarctique","l'Amérique"],"correct":1,"explication":"L'Océanie, avec l'Australie et de nombreuses iles, est le plus petit continent."},
                {"q":"Combien d'océans compte-t-on sur la Terre ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["5","cinq"],"explication":"Pacifique, Atlantique, Indien, Arctique et Austral : cinq océans."},
                {"q":"Quel est le plus grand océan ?","options":["l'Atlantique","le Pacifique","l'océan Indien","l'Arctique"],"correct":1,"explication":"Le Pacifique est le plus vaste océan, entre l'Asie, l'Océanie et l'Amérique."},
                {"q":"Quel est le plus petit océan ?","options":["l'Arctique","l'Atlantique","l'Austral","l'océan Indien"],"correct":0,"explication":"L'océan Arctique, autour du pôle Nord, est le plus petit des cinq."},
                {"q":"Quel océan sépare l'Europe et l'Afrique de l'Amérique ?","options":["l'océan Indien","l'Atlantique","l'Arctique","le Pacifique"],"correct":1,"explication":"L'Atlantique s'étend entre l'Europe et l'Afrique à l'est et l'Amérique à l'ouest."},
                {"q":"Quel océan entoure le continent antarctique ?","options":["l'océan Austral","l'océan Indien","l'Atlantique","l'océan Arctique"],"correct":0,"explication":"L'océan Austral entoure l'Antarctique, autour du pôle Sud."},
                {"q":"Quel océan se trouve autour du pôle Nord ?","options":["l'océan Atlantique","l'océan Pacifique","l'océan Austral","l'océan Arctique"],"correct":3,"explication":"Arctique = nord ; Austral = sud. Ne les confonds pas !"},
                {"q":"Quel océan baigne l'est de l'Afrique, le sud de l'Asie et l'ouest de l'Australie ?","options":["l'océan Indien","l'océan Austral","l'Atlantique","le Pacifique"],"correct":0,"explication":"L'océan Indien s'étend entre l'Afrique, l'Asie et l'Océanie."},
                {"q":"Quels océans bordent le continent américain, à l'est et à l'ouest ?","options":["l'Arctique et l'Austral","l'Atlantique et l'Indien","le Pacifique et l'Indien","l'Atlantique et le Pacifique"],"correct":3,"explication":"L'Atlantique est à l'est de l'Amérique, le Pacifique à l'ouest."},
                {"q":"Quelle mer sépare l'Europe de l'Afrique ?","options":["la mer du Nord","la mer Méditerranée","la mer Baltique","la mer des Caraïbes"],"correct":1,"explication":"La Méditerranée sépare le sud de l'Europe du nord de l'Afrique."},
                {"q":"Il y a plus d'eau que de terre à la surface de la Terre.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les océans et les mers couvrent environ 70 % de la surface de la Terre."},
                {"q":"La mer du Nord, qui borde la côte belge, fait partie de l'océan Atlantique.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La mer du Nord est une mer qui s'ouvre sur l'océan Atlantique."},
                {"q":"Avec quel continent l'Europe est-elle reliée par la terre, sans mer entre les deux ?","options":["l'Asie","l'Océanie","l'Afrique","l'Amérique"],"correct":0,"explication":"L'Europe et l'Asie forment un seul grand bloc de terre ; on parle parfois d'Eurasie."},
                {"q":"Lequel de ces pays se trouve en Afrique ?","options":["le Pérou","le Sénégal","le Vietnam","la Norvège"],"correct":1,"explication":"Le Sénégal est en Afrique de l'Ouest ; le Pérou est en Amérique, le Vietnam en Asie."},
                {"q":"Lequel de ces pays se trouve en Amérique ?","options":["le Kenya","l'Inde","le Mexique","la Pologne"],"correct":2,"explication":"Le Mexique est en Amérique du Nord, au sud des États-Unis."},
                {"q":"Un bateau quitte Anvers et traverse l'océan Atlantique vers l'ouest. Sur quel continent arrive-t-il ?","options":["l'Asie","l'Amérique","l'Afrique","l'Océanie"],"correct":1,"explication":"À l'ouest de l'Europe, de l'autre côté de l'Atlantique, se trouve l'Amérique."},
                {"q":"Sur quel continent se trouve la Belgique ?","type":"saisie","clavier":"texte","reponse":["Europe","l'Europe"],"explication":"La Belgique est un petit pays de l'ouest de l'Europe."}
              ]
            },
            {
              "id": "e1-geo-b",
              "titre": "Le globe et la carte",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quelle ligne imaginaire partage la Terre en hémisphère Nord et hémisphère Sud ?","options":["l'équateur","le méridien de Greenwich","le cercle polaire","le tropique du Cancer"],"correct":0,"explication":"L'équateur fait le tour de la Terre à égale distance des deux pôles."},
                {"q":"Comment s'appelle la ligne imaginaire qui fait le tour de la Terre à égale distance des deux pôles ?","type":"saisie","clavier":"texte","reponse":["équateur","l'équateur","equateur","l'equateur"],"explication":"L'équateur sépare l'hémisphère Nord de l'hémisphère Sud."},
                {"q":"Comment appelle-t-on la moitié de la Terre située au nord de l'équateur ?","options":["le cercle Nord","la zone Nord","le pôle Nord","l'hémisphère Nord"],"correct":3,"explication":"Hémisphère veut dire « demi-sphère » : la moitié d'une boule."},
                {"q":"La Belgique se trouve dans l'hémisphère Sud.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"La Belgique est au nord de l'équateur : elle est dans l'hémisphère Nord."},
                {"q":"L'Australie se trouve entièrement dans l'hémisphère Sud.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'Australie est tout entière au sud de l'équateur."},
                {"q":"Lequel de ces continents se trouve entièrement dans l'hémisphère Nord ?","options":["l'Europe","l'Asie","l'Amérique","l'Afrique"],"correct":0,"explication":"L'équateur traverse l'Afrique, l'Amérique et des iles d'Asie, mais pas l'Europe."},
                {"q":"Lequel de ces continents est traversé par l'équateur ?","options":["l'Afrique","l'Antarctique","l'Europe"],"correct":0,"explication":"L'équateur coupe l'Afrique à peu près en son milieu."},
                {"q":"Sur quel continent se trouve le pôle Sud ?","options":["l'Océanie","l'Amérique","l'Arctique","l'Antarctique"],"correct":3,"explication":"Le pôle Sud est au centre de l'Antarctique ; l'Arctique est un océan au nord."},
                {"q":"Où se trouve le pôle Nord ?","options":["au milieu de l'océan Arctique","au centre de l'Antarctique","au sud du Groenland","au bord de l'océan Indien"],"correct":0,"explication":"Le pôle Nord est au milieu de l'océan Arctique, sur la banquise (de l'eau de mer gelée)."},
                {"q":"La Terre tourne sur elle-même autour d'un axe imaginaire. Par où passe cet axe ?","options":["par la Belgique et l'Australie","par l'équateur et le pôle Nord","par les deux pôles","par deux points de l'équateur"],"correct":2,"explication":"L'axe de rotation de la Terre passe par le pôle Nord et le pôle Sud."},
                {"q":"Sur un globe, les pays gardent leur vraie forme, alors qu'une carte plane les déforme un peu.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le globe a la même forme que la Terre ; mettre une boule à plat déforme forcément un peu."},
                {"q":"Quel élément d'une carte indique de quoi elle parle, par exemple « Les rivières de Belgique » ?","options":["la légende","la rose des vents","l'échelle","le titre"],"correct":3,"explication":"Le titre dit ce que la carte représente ; on le lit en premier."},
                {"q":"À quoi sert la légende d'une carte ?","options":["à expliquer ses couleurs et ses symboles","à dire ce que représente la carte","à montrer où se trouve le nord","à donner l'âge de la carte"],"correct":0,"explication":"La légende explique ce que veulent dire les couleurs, les traits et les symboles."},
                {"q":"Quel élément d'une carte indique les directions (nord, sud, est, ouest) ?","options":["la rose des vents","l'échelle","la légende","le titre"],"correct":0,"explication":"La rose des vents permet de s'orienter sur la carte."},
                {"q":"Sur la plupart des cartes, quel point cardinal se trouve en haut ?","type":"saisie","clavier":"texte","reponse":["nord","le nord"],"explication":"Sauf indication contraire, le nord est en haut de la carte."},
                {"q":"Combien de directions indique une rose des vents avec les points cardinaux et les directions intermédiaires ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["8","huit"],"explication":"N, NE, E, SE, S, SO, O, NO : quatre points cardinaux et quatre directions intermédiaires."},
                {"q":"Quelle direction se trouve entre le nord et l'est ?","options":["le sud-est","le sud-ouest","le nord-ouest","le nord-est"],"correct":3,"explication":"Entre le nord et l'est, on combine les deux : nord-est."},
                {"q":"Quelle direction se trouve entre le sud et l'ouest ?","options":["le nord-ouest","le sud-ouest","le nord-est","le sud-est"],"correct":1,"explication":"Entre le sud et l'ouest : sud-ouest. On cite toujours nord ou sud en premier."},
                {"q":"Quelle direction est l'opposée du nord-ouest ?","options":["le nord-est","le sud-est","le sud-ouest","le sud"],"correct":1,"explication":"Pour trouver l'opposé, on inverse les deux parties : nord → sud, ouest → est."},
                {"q":"Tu regardes vers le nord. Quelle direction se trouve à ta droite ?","options":["l'est","le sud","l'ouest","le nord-ouest"],"correct":0,"explication":"Face au nord : l'est est à droite, l'ouest à gauche, le sud derrière."},
                {"q":"Tu regardes vers le sud. Quelle direction se trouve derrière toi ?","options":["l'ouest","le nord","l'est","le sud-est"],"correct":1,"explication":"Le nord est à l'opposé du sud."},
                {"q":"Sur le plan du village, la piscine est en haut à gauche de l'école. Dans quelle direction est-elle par rapport à l'école ?","options":["au sud-est","au nord-ouest","au nord-est","au sud-ouest"],"correct":1,"explication":"En haut = nord, à gauche = ouest : en haut à gauche, c'est le nord-ouest."},
                {"q":"Sur le plan du quartier, la boulangerie est en bas à droite de la gare. Dans quelle direction est-elle par rapport à la gare ?","options":["au nord-ouest","au sud-est","au nord-est","au sud-ouest"],"correct":1,"explication":"En bas = sud, à droite = est : en bas à droite, c'est le sud-est."},
                {"q":"Sur une carte de Belgique, Arlon est tout en bas à droite. Dans quelle partie du pays se trouve Arlon ?","options":["au sud-ouest","au nord-ouest","au sud-est","au nord-est"],"correct":2,"explication":"En bas à droite d'une carte orientée nord en haut, c'est le sud-est."},
                {"q":"De quel côté le Soleil se lève-t-il, à peu près ?","options":["à l'ouest","au sud","au nord","à l'est"],"correct":3,"explication":"Le Soleil se lève à l'est et se couche à l'ouest."},
                {"q":"Le Soleil se couche à l'est.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Le Soleil se lève à l'est et se couche à l'ouest."},
                {"q":"Sur une carte, que représente le plus souvent la couleur bleue ?","options":["les villes et les villages","les forêts et les prairies","les routes et les autoroutes","l'eau : mers, lacs, rivières"],"correct":3,"explication":"Le bleu indique l'eau ; on le vérifie toujours dans la légende."},
                {"q":"Sans légende, on ne peut pas être sûr de ce que signifient les symboles d'une carte.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"C'est la légende qui donne le sens des couleurs et des symboles."}
              ]
            },
            {
              "id": "e1-geo-c",
              "titre": "Le système solaire",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Qu'est-ce que le Soleil ?","options":["un satellite","une galaxie","une planète","une étoile"],"correct":3,"explication":"Le Soleil est une étoile : une énorme boule de gaz très chaude qui produit sa lumière."},
                {"q":"Combien de planètes compte le système solaire ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["8","huit"],"explication":"Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune."},
                {"q":"Quelle planète est la plus proche du Soleil ?","options":["Vénus","la Terre","Mercure","Mars"],"correct":2,"explication":"Mercure est la première planète en partant du Soleil."},
                {"q":"Quelle planète est la plus éloignée du Soleil ?","options":["Pluton","Neptune","Uranus","Saturne"],"correct":1,"explication":"Neptune est la huitième planète ; Pluton est une planète naine depuis 2006."},
                {"q":"Quelle est la plus grande planète du système solaire ?","options":["Neptune","la Terre","Jupiter","Saturne"],"correct":2,"explication":"Jupiter, une géante gazeuse, est la plus grande planète."},
                {"q":"Quelle est la plus petite planète du système solaire ?","options":["Mercure","la Terre","Vénus","Mars"],"correct":0,"explication":"Mercure est la plus petite des huit planètes."},
                {"q":"Quelle planète est surnommée « la planète rouge » ?","options":["Mars","Jupiter","Vénus","Mercure"],"correct":0,"explication":"Le sol de Mars contient beaucoup d'oxyde de fer (de la rouille), ce qui la rend rouge."},
                {"q":"Quelle planète a les anneaux les plus visibles ?","options":["Uranus","Saturne","Jupiter","Mars"],"correct":1,"explication":"Saturne est célèbre pour ses grands anneaux de glace et de roches."},
                {"q":"À quel rang se trouve la Terre en partant du Soleil ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["3","trois","3e","3ème","3eme","troisième","troisieme"],"explication":"Mercure, Vénus, puis la Terre : elle est la troisième planète."},
                {"q":"Quelle planète se trouve entre la Terre et Jupiter ?","options":["Mercure","Saturne","Vénus","Mars"],"correct":3,"explication":"L'ordre est : Mercure, Vénus, Terre, Mars, Jupiter…"},
                {"q":"Quelle planète vient juste après Saturne en s'éloignant du Soleil ?","options":["Mars","Uranus","Neptune","Jupiter"],"correct":1,"explication":"…Jupiter, Saturne, Uranus, Neptune."},
                {"q":"Dans quel ordre trouve-t-on les quatre planètes les plus proches du Soleil ?","options":["Mercure, Vénus, Mars, Terre","Vénus, Mercure, Terre, Mars","Mercure, Vénus, Terre, Mars","Mercure, Terre, Vénus, Mars"],"correct":2,"explication":"Truc : « Me Voici Toute Mouillée » pour Mercure, Vénus, Terre, Mars."},
                {"q":"Dans quel ordre trouve-t-on les quatre planètes les plus éloignées du Soleil ?","options":["Jupiter, Saturne, Uranus, Neptune","Jupiter, Uranus, Saturne, Neptune","Jupiter, Saturne, Neptune, Uranus","Saturne, Jupiter, Uranus, Neptune"],"correct":0,"explication":"Après Mars viennent Jupiter, Saturne, Uranus et enfin Neptune."},
                {"q":"Combien de planètes sont plus proches du Soleil que la Terre ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["2","deux"],"explication":"Seules Mercure et Vénus sont plus proches du Soleil que la Terre."},
                {"q":"Laquelle de ces planètes est une géante gazeuse ?","options":["Mars","Vénus","Mercure","Jupiter"],"correct":3,"explication":"Jupiter, Saturne, Uranus et Neptune sont des géantes ; les quatre premières sont rocheuses."},
                {"q":"Laquelle de ces planètes est rocheuse, comme la Terre ?","options":["Saturne","Uranus","Mars","Neptune"],"correct":2,"explication":"Mercure, Vénus, la Terre et Mars sont des planètes rocheuses."},
                {"q":"Quelle est la planète la plus chaude du système solaire ?","options":["Vénus","Mars","Jupiter","Mercure"],"correct":0,"explication":"Son épaisse atmosphère retient la chaleur : Vénus est plus chaude que Mercure, pourtant plus proche."},
                {"q":"Quelle planète très brillante, visible le soir ou le matin, est surnommée « l'étoile du berger » ?","options":["Vénus","Mercure","Jupiter","Mars"],"correct":0,"explication":"Vénus brille beaucoup, mais ce n'est pas une étoile : elle reflète la lumière du Soleil."},
                {"q":"Sur quelle planète la vie est-elle connue ?","options":["sur toutes les planètes rocheuses","uniquement sur la Terre","sur la Terre et sur Vénus","sur la Terre et sur Mars"],"correct":1,"explication":"À ce jour, la Terre est la seule planète où l'on connait la vie."},
                {"q":"Qu'est-ce que la Lune ?","options":["le satellite naturel de la Terre","une petite planète du système","une étoile proche de la Terre","une planète naine lointaine"],"correct":0,"explication":"La Lune tourne autour de la Terre : c'est son satellite naturel."},
                {"q":"La Lune produit sa propre lumière.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"La Lune ne brille pas par elle-même : elle renvoie la lumière du Soleil."},
                {"q":"Les planètes tournent autour du Soleil.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les huit planètes tournent autour du Soleil, chacune sur son orbite."},
                {"q":"Le Soleil tourne autour de la Terre.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"C'est l'inverse : la Terre tourne autour du Soleil."},
                {"q":"Pluton est la neuvième planète du système solaire.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Depuis 2006, Pluton est classée parmi les planètes naines."},
                {"q":"Combien de temps la Terre met-elle pour faire le tour du Soleil ?","options":["environ 30 jours","environ 24 heures","environ 365 jours","environ 7 jours"],"correct":2,"explication":"Un tour complet autour du Soleil dure environ 365 jours : c'est une année."},
                {"q":"Qu'est-ce qui se trouve entre Mars et Jupiter ?","options":["la Lune","la planète Vénus","une ceinture d'astéroïdes","la planète Saturne"],"correct":2,"explication":"Des milliers de blocs rocheux tournent autour du Soleil entre Mars et Jupiter."},
                {"q":"Quelle est l'étoile la plus proche de la Terre ?","options":["l'étoile Polaire","Vénus","le Soleil","la Lune"],"correct":2,"explication":"Le Soleil est une étoile, et c'est la plus proche de nous."},
                {"q":"Comment s'appelle la galaxie dans laquelle se trouve notre système solaire ?","options":["la nébuleuse du Crabe","la Voie lactée","la Grande Ourse","la ceinture d'astéroïdes"],"correct":1,"explication":"Notre système solaire fait partie d'une galaxie appelée la Voie lactée."}
              ]
            }
          ]
        },
        {
          "id": "i1-viv",
          "matiere": "Le vivant",
          "titre": "La serre du vivant",
          "symbole": "♥",
          "description": "L'appareil respiratoire.",
          "hote": {
            "nom": "La docteure Lise",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e1-viv-a",
              "titre": "Le voyage de l'air",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel est le bon trajet de l'air quand on inspire par le nez ?","options":["nez, trachée, poumons, bronches","nez, bronches, trachée, poumons","nez, œsophage, bronches, poumons","nez, trachée, bronches, poumons"],"correct":3,"explication":"L'air descend par la trachée, qui se divise en deux bronches, une pour chaque poumon."},
                {"q":"Lequel de ces organes ne fait PAS partie de l'appareil respiratoire ?","options":["les poumons","la trachée","l'œsophage","les bronches"],"correct":2,"explication":"L'œsophage conduit les aliments vers l'estomac : il appartient à l'appareil digestif."},
                {"q":"Comment s'appellent les minuscules sacs situés au bout des plus fines bronches ?","options":["les globules","les villosités","les alvéoles","les capillaires"],"correct":2,"explication":"Les alvéoles pulmonaires sont de minuscules sacs d'air ; les poumons en contiennent des millions."},
                {"q":"Pourquoi le poumon gauche est-il un peu plus petit que le poumon droit ?","options":["Il laisse de la place au foie.","Il laisse de la place au cœur.","Il travaille moins souvent.","Il reçoit moins d'air froid."],"correct":1,"explication":"Le cœur est placé entre les poumons, un peu vers la gauche : le poumon gauche lui laisse de la place."},
                {"q":"L'air que nous inspirons passe par l'œsophage avant d'arriver dans les poumons.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"L'air passe par la trachée ; l'œsophage, situé juste derrière, est le tuyau des aliments."},
                {"q":"À quoi servent les poils et le mucus qui tapissent l'intérieur du nez ?","options":["à rejeter le dioxyde de carbone","à fabriquer de l'oxygène pour le sang","à retenir les poussières de l'air","à pousser l'air vers l'estomac"],"correct":2,"explication":"Les poils et le mucus du nez filtrent l'air en retenant les poussières et une partie des microbes."},
                {"q":"Respirer par le nez plutôt que par la bouche permet de mieux…","options":["refroidir et sécher l'air","réchauffer et humidifier l'air","ajouter de l'oxygène à l'air","retirer le gaz carbonique de l'air"],"correct":1,"explication":"Dans le nez, l'air est filtré, réchauffé et humidifié avant de descendre vers les poumons."},
                {"q":"Quel petit clapet ferme l'entrée de la trachée quand on avale ?","options":["la luette","l'alvéole","le diaphragme","l'épiglotte"],"correct":3,"explication":"En avalant, l'épiglotte se rabat sur la trachée pour que les aliments partent dans l'œsophage."},
                {"q":"Où se trouvent les poumons ?","options":["dans le dos, sous les reins","dans le ventre, sous l'estomac","dans la cage thoracique","dans le cou, autour de la trachée"],"correct":2,"explication":"Les poumons sont dans la cage thoracique, protégés par les côtes, au-dessus du diaphragme."},
                {"q":"Quel organe se trouve entre les deux poumons ?","options":["l'estomac","le cœur","le foie","le pancréas"],"correct":1,"explication":"Le cœur est logé entre les deux poumons, dans la cage thoracique."},
                {"q":"Parmi ces parties, laquelle l'air atteint-il en dernier ?","contexte":"Choisis le bon ordre.","options":["la trachée","le larynx","les bronches","les alvéoles"],"correct":3,"explication":"Ordre du trajet : larynx, trachée, bronches, bronchioles et enfin alvéoles."},
                {"q":"Quelle partie l'air traverse-t-il juste après la trachée ?","contexte":"Choisis le bon ordre.","options":["les bronches","le larynx","les bronchioles","les alvéoles"],"correct":0,"explication":"La trachée se divise en deux bronches, qui se ramifient ensuite en bronchioles."},
                {"q":"Quel muscle en forme de dôme, situé sous les poumons, nous permet de respirer ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["diaphragme","le diaphragme"],"explication":"Le diaphragme sépare le thorax de l'abdomen ; c'est le principal muscle de la respiration."},
                {"q":"Qu'est-ce qui protège les poumons comme une cage ?","options":["le bassin","les omoplates","les côtes","les clavicules"],"correct":2,"explication":"Les côtes, attachées à la colonne vertébrale et au sternum, forment la cage thoracique."},
                {"q":"Les bronches se divisent en tubes de plus en plus fins, comme les branches d'un arbre.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les bronches se ramifient en bronchioles de plus en plus fines : on parle d'arbre bronchique."},
                {"q":"Une miette « passe de travers » et Lucas se met à tousser. À quoi sert cette toux ?","options":["à faire fondre la miette plus vite","à chasser la miette hors de la trachée","à envoyer la miette dans l'estomac","à pousser la miette vers les poumons"],"correct":1,"explication":"La toux est un réflexe : une forte expiration chasse ce qui est entré par erreur dans les voies respiratoires."},
                {"q":"La trachée est renforcée par des anneaux de cartilage. À quoi servent-ils ?","options":["à pousser les aliments","à la garder toujours ouverte","à fabriquer la salive","à filtrer les poussières"],"correct":1,"explication":"Les anneaux de cartilage empêchent la trachée de s'aplatir : l'air peut toujours passer."},
                {"q":"Les poumons sont des muscles qui se gonflent tout seuls pour faire entrer l'air.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les poumons ne sont pas des muscles : ils suivent les mouvements du diaphragme et des muscles entre les côtes."},
                {"q":"Les alvéoles pulmonaires sont entourées de…","options":["minuscules vaisseaux sanguins","minuscules os très fins","glandes qui font la salive","petits poils qui filtrent l'air"],"correct":0,"explication":"Autour des alvéoles passent de fins vaisseaux, les capillaires : l'air et le sang y sont tout proches."},
                {"q":"Où se trouvent les cordes vocales qui nous permettent de parler ?","options":["dans les bronches","dans le larynx","dans les alvéoles","dans l'œsophage"],"correct":1,"explication":"Les cordes vocales sont dans le larynx, en haut de la trachée ; l'air expiré les fait vibrer."},
                {"q":"Les poumons ressemblent à des éponges remplies de millions de petites alvéoles.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les poumons sont légers et spongieux car ils contiennent des millions d'alvéoles remplies d'air."},
                {"q":"Comment s'appellent les deux tubes qui partent de la trachée vers chaque poumon ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["bronches","les bronches","bronche","deux bronches"],"explication":"La trachée se divise en deux bronches : la bronche droite et la bronche gauche."},
                {"q":"Dans un poumon, dans quel ordre l'air passe-t-il ?","contexte":"Choisis le bon ordre.","options":["bronchiole, bronche, alvéole","bronche, bronchiole, alvéole","bronche, alvéole, bronchiole","alvéole, bronche, bronchiole"],"correct":1,"explication":"L'air va des plus gros tubes vers les plus petits : bronche, bronchiole, puis alvéole."},
                {"q":"Combien de poumons possède le corps humain ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["2","deux"],"explication":"Nous avons deux poumons, un à droite et un à gauche du cœur."},
                {"q":"Quand on respire par la bouche, vers quel conduit l'air se dirige-t-il ensuite ?","options":["vers les sinus","vers l'estomac","vers la trachée","vers l'œsophage"],"correct":2,"explication":"Que l'air entre par le nez ou par la bouche, il rejoint la gorge puis descend dans la trachée."}
              ]
            },
            {
              "id": "e1-viv-b",
              "titre": "Inspirer, expirer",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel gaz est le plus abondant dans l'air que nous respirons ?","options":["l'oxygène","l'azote","le dioxyde de carbone","la vapeur d'eau"],"correct":1,"explication":"L'air contient environ 4/5 d'azote et 1/5 d'oxygène ; le dioxyde de carbone y est en très petite quantité."},
                {"q":"Par rapport à l'air inspiré, l'air expiré contient davantage…","options":["de fines poussières de l'air","d'oxygène et d'azote","de dioxyde de carbone"],"correct":2,"explication":"Le corps garde une partie de l'oxygène et rejette du dioxyde de carbone, un déchet des cellules."},
                {"q":"L'air que nous expirons ne contient plus du tout d'oxygène.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"L'air expiré contient encore de l'oxygène, mais moins que l'air inspiré."},
                {"q":"Où se fait l'échange de gaz entre l'air et le sang ?","options":["dans les alvéoles","dans la trachée","dans le larynx","dans le nez"],"correct":0,"explication":"Les parois des alvéoles sont très fines : les gaz passent entre l'air et le sang des capillaires."},
                {"q":"Dans les alvéoles, dans quel sens passe l'oxygène ?","options":["du sang vers l'air","du sang vers la trachée","de l'air vers l'estomac","de l'air vers le sang"],"correct":3,"explication":"L'oxygène de l'air traverse la paroi des alvéoles et passe dans le sang."},
                {"q":"Dans les alvéoles, dans quel sens passe le dioxyde de carbone ?","options":["de l'air vers le sang","du sang vers l'œsophage","du sang vers l'air","de l'air vers le cœur"],"correct":2,"explication":"Le dioxyde de carbone, apporté par le sang, passe dans l'air des alvéoles puis est expiré."},
                {"q":"Quand on inspire, le diaphragme…","options":["se relâche et remonte","se contracte et remonte","reste totalement immobile","se contracte et s'abaisse"],"correct":3,"explication":"En se contractant, le diaphragme s'abaisse : la cage thoracique s'agrandit et l'air entre."},
                {"q":"Quand on inspire, le volume de la cage thoracique…","options":["diminue","augmente","ne change pas"],"correct":1,"explication":"Les côtes se soulèvent et le diaphragme s'abaisse : la cage thoracique s'agrandit."},
                {"q":"Quand on expire, le diaphragme…","options":["se relâche et remonte","se contracte et remonte","se contracte et s'abaisse","se relâche et s'abaisse"],"correct":0,"explication":"Le diaphragme se relâche et reprend sa forme de dôme : la cage rétrécit et l'air sort."},
                {"q":"Le diaphragme est un muscle.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le diaphragme est un grand muscle plat, en forme de dôme, situé sous les poumons."},
                {"q":"Pourquoi l'air entre-t-il dans les poumons quand on inspire ?","options":["L'estomac aspire l'air vers le bas du ventre.","La cage thoracique s'agrandit et les poumons suivent.","Le cœur pousse l'air dans les bronches et les poumons.","La trachée se contracte et avale l'air du nez."],"correct":1,"explication":"Quand la cage thoracique s'agrandit, les poumons s'étirent avec elle et l'air y est aspiré."},
                {"q":"Allongée, Chloé pose la main sur son ventre et inspire profondément. Que sent-elle ?","options":["Son ventre se creuse.","Son ventre ne bouge pas.","Son ventre se soulève."],"correct":2,"explication":"En s'abaissant, le diaphragme pousse les organes du ventre, qui se soulève à l'inspiration."},
                {"q":"Comment appelle-t-on le mouvement qui fait sortir l'air des poumons ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["expiration","l'expiration","expirer","une expiration"],"explication":"L'expiration fait sortir l'air chargé de dioxyde de carbone ; l'inspiration le fait entrer."},
                {"q":"Comment appelle-t-on le mouvement qui fait entrer l'air dans les poumons ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["inspiration","l'inspiration","inspirer","une inspiration"],"explication":"À l'inspiration, l'air riche en oxygène entre dans les poumons."},
                {"q":"Pourquoi notre corps a-t-il besoin d'oxygène ?","options":["pour fabriquer l'air des poumons","pour digérer sans aliments","pour fabriquer du dioxyde de carbone pur","pour produire l'énergie des cellules"],"correct":3,"explication":"Les cellules utilisent l'oxygène pour tirer l'énergie des nutriments."},
                {"q":"Le dioxyde de carbone que nous expirons est…","options":["un aliment pour nos muscles","un gaz fabriqué par le nez","un déchet produit par nos cellules","un gaz qui nourrit le cerveau"],"correct":2,"explication":"En produisant de l'énergie, les cellules rejettent du dioxyde de carbone, que le sang conduit aux poumons."},
                {"q":"Avec une paille, Adam souffle dans de l'eau de chaux : elle devient trouble. Qu'a-t-il montré ?","options":["L'air expiré contient beaucoup d'azote.","L'air expiré contient du dioxyde de carbone.","L'air expiré contient beaucoup d'oxygène."],"correct":1,"explication":"L'eau de chaux se trouble au contact du dioxyde de carbone : c'est le test de ce gaz."},
                {"q":"Yasmine souffle sur un miroir froid : il se couvre de buée. Que contient l'air expiré ?","options":["de la fumée","du sel","de l'oxygène pur","de la vapeur d'eau"],"correct":3,"explication":"La vapeur d'eau de l'air expiré se condense en fines gouttelettes sur le miroir froid."},
                {"q":"Le sang qui quitte les poumons est plus riche en oxygène que le sang qui y arrive.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Dans les poumons, le sang se charge en oxygène et se débarrasse du dioxyde de carbone."},
                {"q":"Quand respirons-nous ?","options":["seulement quand nous y pensons","seulement quand nous bougeons","seulement quand nous sommes éveillés","jour et nuit, même en dormant"],"correct":3,"explication":"La respiration est automatique : elle continue sans arrêt, même pendant le sommeil."},
                {"q":"Le hoquet est provoqué par des contractions brusques…","options":["de l'œsophage","de l'estomac","du diaphragme","du cœur"],"correct":2,"explication":"Le hoquet vient de contractions soudaines du diaphragme, suivies de la fermeture brusque du larynx."},
                {"q":"Lequel de ces animaux aquatiques respire avec des poumons, comme nous ?","options":["la carpe","le requin","la truite","le dauphin"],"correct":3,"explication":"Le dauphin est un mammifère : il remonte à la surface pour respirer de l'air avec ses poumons."},
                {"q":"Quelle étape du voyage de l'oxygène vient en dernier ?","contexte":"Choisis le bon ordre.","options":["Il descend dans les bronches.","Il entre par le nez.","Le sang l'apporte aux organes.","Il passe dans le sang des alvéoles."],"correct":2,"explication":"Ordre : nez, bronches, alvéoles, sang, puis organes qui l'utilisent."},
                {"q":"Quel gaz passe de l'air vers le sang dans les alvéoles ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["oxygène","l'oxygène","oxygene","l'oxygene","o2","dioxygène","le dioxygène","dioxygene","le dioxygene"],"explication":"L'oxygène passe des alvéoles dans le sang, qui le transporte vers tous les organes."},
                {"q":"Comment sont les parois des alvéoles ?","options":["très fines","épaisses et dures","faites de cartilage","couvertes de poils"],"correct":0,"explication":"Des parois très fines permettent aux gaz de passer facilement entre l'air et le sang."}
              ]
            },
            {
              "id": "e1-viv-c",
              "titre": "Prends soin de tes poumons",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quelle substance du tabac rend le fumeur dépendant ?","options":["le goudron","la nicotine","le monoxyde de carbone","la caféine"],"correct":1,"explication":"La nicotine agit sur le cerveau et crée une dépendance : il devient difficile d'arrêter."},
                {"q":"Que font les goudrons de la fumée de cigarette dans les poumons ?","options":["Ils les agrandissent.","Ils les nettoient.","Ils les encrassent.","Ils les réchauffent."],"correct":2,"explication":"Les goudrons se déposent dans les bronches et les alvéoles ; ils peuvent provoquer des cancers."},
                {"q":"Le monoxyde de carbone de la fumée de cigarette est dangereux car il…","options":["fait gonfler le diaphragme","bloque les cordes vocales et la voix","prend la place de l'oxygène dans le sang","empêche l'estomac de bien digérer les aliments"],"correct":2,"explication":"Le monoxyde de carbone se fixe sur les globules rouges à la place de l'oxygène."},
                {"q":"Respirer la fumée de cigarette des autres est mauvais pour la santé.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"C'est le tabagisme passif : les non-fumeurs respirent aussi les substances toxiques de la fumée."},
                {"q":"Complète : respirer la fumée de cigarette des autres, c'est le tabagisme …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["passif"],"explication":"Le tabagisme passif touche les personnes qui respirent la fumée sans fumer elles-mêmes."},
                {"q":"Pendant une course, ta respiration…","options":["ralentit","reste identique","s'arrête par moments","s'accélère"],"correct":3,"explication":"Pendant un effort, on respire plus vite et plus profondément."},
                {"q":"Pourquoi respire-t-on plus vite pendant un effort ?","options":["L'estomac réclame plus d'air.","Les muscles ont besoin de plus d'oxygène.","Les poumons ont besoin de se reposer.","Le sang contient trop d'oxygène."],"correct":1,"explication":"Les muscles qui travaillent consomment plus d'oxygène et rejettent plus de dioxyde de carbone."},
                {"q":"Lequel de ces gestes protège le mieux tes poumons ?","options":["respirer surtout par la bouche","courir le long des routes chargées","garder les fenêtres toujours fermées","éviter les lieux enfumés"],"correct":3,"explication":"La fumée de tabac encrasse et irrite les bronches, même chez ceux qui ne fument pas."},
                {"q":"Chez une personne asthmatique, pendant une crise…","options":["les bronches se resserrent et l'air passe mal","le cœur bat trop lentement pour envoyer l'air","l'œsophage se bouche et l'air ne passe plus","les côtes empêchent les poumons de bouger"],"correct":0,"explication":"Lors d'une crise d'asthme, les bronches se rétrécissent : respirer devient difficile."},
                {"q":"Faire du sport régulièrement entraine le cœur et les muscles qui servent à respirer.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Avec l'entrainement, le cœur et les muscles respiratoires deviennent plus efficaces : on s'essouffle moins vite."},
                {"q":"Pourquoi vaut-il mieux éviter de courir le long d'une route très fréquentée ?","options":["On y respire moins vite.","Le bruit y abime les poumons.","On y respire plus de gaz polluants.","L'air y contient trop d'oxygène."],"correct":2,"explication":"Les gaz d'échappement polluent l'air ; pendant l'effort, on en respire davantage."},
                {"q":"Quel geste aide à ne pas transmettre un rhume ?","options":["partager sa gourde","tousser dans sa main","garder ses mouchoirs usagés","tousser dans son coude"],"correct":3,"explication":"Tousser dans son coude évite de déposer les microbes sur les mains, puis sur les objets."},
                {"q":"Le rhume est causé par…","options":["le froid lui-même","un virus","un manque d'oxygène"],"correct":1,"explication":"Le rhume est une infection due à un virus ; le froid seul ne le provoque pas."},
                {"q":"Fumer augmente le risque d'avoir un cancer du poumon.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le tabac est la première cause du cancer du poumon."},
                {"q":"Lors d'un effort, que remarque-t-on souvent chez un fumeur ?","options":["Il respire plus lentement.","Il court plus longtemps.","Il n'a plus besoin d'air.","Il s'essouffle plus vite."],"correct":3,"explication":"Les bronches encrassées et le monoxyde de carbone réduisent l'oxygène qui arrive aux muscles."},
                {"q":"Pourquoi est-il bon d'aérer sa chambre chaque jour ?","options":["pour réchauffer les murs","pour renouveler l'air de la pièce","pour faire entrer les poussières","pour faire sortir l'oxygène"],"correct":1,"explication":"Aérer remplace l'air chargé d'humidité, de dioxyde de carbone et de poussières par de l'air neuf."},
                {"q":"Les bronches sont tapissées de mucus et de cils minuscules. À quoi servent-ils ?","options":["à fabriquer de l'oxygène pour le sang","à faire remonter les poussières vers la gorge","à faire descendre les poussières dans les alvéoles","à faire vibrer l'air pour parler"],"correct":1,"explication":"Les cils balaient le mucus chargé de poussières vers la gorge ; la fumée de tabac les abime."},
                {"q":"Les poumons d'un gros fumeur sont souvent…","options":["noircis par les goudrons","plus grands que la normale","plus roses que la normale"],"correct":0,"explication":"Les goudrons se déposent dans les poumons et les noircissent peu à peu."},
                {"q":"Quelle substance gluante et noirâtre de la fumée de tabac encrasse les poumons ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["goudron","goudrons","le goudron","les goudrons"],"explication":"Les goudrons de la fumée se déposent dans les voies respiratoires et peuvent causer des cancers."},
                {"q":"Au repos, Inès compte 18 respirations par minute ; après une course, 30. Que montre cette mesure ?","options":["L'effort ralentit la respiration.","L'effort accélère la respiration.","La respiration ne dépend pas de l'effort."],"correct":1,"explication":"Plus l'effort est intense, plus le nombre de respirations par minute augmente."},
                {"q":"Lequel de ces sports entraine le mieux le souffle ?","options":["la pétanque","le billard","la natation","les échecs"],"correct":2,"explication":"Les sports d'endurance, comme la natation, la course ou le vélo, entrainent le cœur et la respiration."},
                {"q":"La pollution de l'air peut…","options":["nettoyer les alvéoles","augmenter l'oxygène dans le sang","renforcer les poumons des enfants","irriter les bronches et faire tousser"],"correct":3,"explication":"Les particules et gaz polluants irritent les voies respiratoires et peuvent aggraver l'asthme."},
                {"q":"Quand un fumeur arrête de fumer, ses poumons commencent à mieux fonctionner.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Après l'arrêt du tabac, la respiration s'améliore peu à peu et les risques de maladie diminuent."},
                {"q":"Quel équipement protège les poumons d'un menuisier qui ponce du bois ?","options":["des bouchons d'oreilles","un masque anti-poussière","des lunettes de protection","des gants épais"],"correct":1,"explication":"Le masque retient les fines poussières de bois avant qu'elles n'entrent dans les voies respiratoires."},
                {"q":"Pourquoi le monoxyde de carbone d'un chauffage mal réglé est-il si dangereux ?","options":["Il colore l'air en noir.","Il sent très fort l'œuf pourri.","Il fait tousser tout de suite.","Il est invisible et sans odeur."],"correct":3,"explication":"On ne voit ni ne sent ce gaz toxique : un détecteur et un entretien des appareils sont indispensables."}
              ]
            }
          ]
        },
        {
          "id": "i1-mat",
          "matiere": "Matière, énergie et techniques",
          "titre": "L'atelier des inventions",
          "symbole": "⚙",
          "description": "Les engrenages et les leviers.",
          "hote": {
            "nom": "L'inventeur Gédéon",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e1-mat-a",
              "titre": "Dans quel sens ça tourne ?",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"La roue A tourne dans le sens des aiguilles d'une montre. Ses dents s'emboitent dans celles de la roue B. Dans quel sens tourne B ?","contexte":"Engrenages","options":["Elle reste bloquée, car les dents se coincent entre elles","Dans le sens des aiguilles d'une montre","Dans le sens inverse des aiguilles d'une montre"],"correct":2,"explication":"Deux roues dentées qui s'engrènent tournent toujours en sens contraires."},
                {"q":"La roue A entraine la roue B, qui entraine la roue C. Les trois roues sont en ligne. Dans quel sens tourne C ?","contexte":"Engrenages","options":["Dans le sens contraire de A","C reste bloquée et ne tourne pas","Dans le même sens que A"],"correct":2,"explication":"B tourne en sens contraire de A, puis C en sens contraire de B : C tourne donc comme A."},
                {"q":"Quatre roues dentées A, B, C et D sont en ligne : chacune entraine la suivante. Dans quel sens tourne D ?","contexte":"Engrenages","options":["Dans le sens contraire de A","Dans le même sens que A","D reste bloquée et ne tourne pas"],"correct":0,"explication":"Le sens change à chaque roue : B contre A, C comme A, D contre A."},
                {"q":"Deux roues dentées voisines, bien engrenées, tournent dans le même sens.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Quand une dent pousse la roue voisine, celle-ci part dans l'autre sens : les roues tournent en sens contraires."},
                {"q":"Cinq roues dentées A, B, C, D et E sont en ligne : chacune entraine la suivante. Quelles roues tournent dans le même sens que A ?","contexte":"Engrenages","options":["C et E","Seulement E","B, C, D et E","B et D"],"correct":0,"explication":"Une roue sur deux tourne comme A : la 3e (C) et la 5e (E)."},
                {"q":"Dans une rangée de roues dentées, chacune entraine la suivante. Dans quel sens tourne la 6e roue par rapport à la 1re ?","contexte":"Engrenages","options":["Dans le sens contraire de la 1re","Elle reste bloquée par les autres roues","Dans le même sens que la 1re"],"correct":0,"explication":"Les roues de rang pair (2e, 4e, 6e) tournent en sens contraire de la 1re."},
                {"q":"Trois roues dentées A, B et C sont placées en triangle : chacune s'engrène avec les deux autres. Lucas essaie de tourner A. Que se passe-t-il ?","contexte":"Engrenages","options":["Le système se bloque, rien ne tourne","B et C tournent dans le sens de A","Les trois roues tournent dans le même sens"],"correct":0,"explication":"B et C devraient tourner contre A, mais aussi l'une contre l'autre : c'est impossible, tout se bloque."},
                {"q":"Sur un vélo, le plateau (roue dentée des pédales) est relié par une chaine au pignon de la roue arrière. Si le plateau tourne vers l'avant, comment tourne le pignon ?","contexte":"Engrenages","options":["Dans le sens contraire du plateau","Il tourne une fois sur deux","Dans le même sens que le plateau"],"correct":2,"explication":"Avec une chaine, les deux roues dentées tournent dans le même sens."},
                {"q":"Deux roues dentées reliées par une chaine tournent en sens contraires.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"La chaine entoure les deux roues : elles tournent dans le même sens, comme sur un vélo."},
                {"q":"À quoi sert un engrenage ?","contexte":"Engrenages","options":["À transmettre un mouvement de rotation","À stocker de l'énergie électrique","À produire du mouvement sans aucun moteur"],"correct":0,"explication":"Un engrenage transmet la rotation d'une roue à une autre, en changeant parfois le sens ou la vitesse."},
                {"q":"Comment appelle-t-on une roue munie de dents qui s'emboitent dans celles d'une autre roue ?","contexte":"Engrenages","options":["une roue à aubes","une courroie","une manivelle","une roue dentée"],"correct":3,"explication":"Les dents d'une roue dentée s'emboitent dans celles de la roue voisine et l'entrainent."},
                {"q":"Deux roues sont reliées par une courroie croisée en forme de 8. La première tourne dans le sens des aiguilles d'une montre. Comment tourne la seconde ?","contexte":"Engrenages","options":["Dans le sens contraire de la première","Dans le même sens que la première","Elle ne tourne pas du tout, elle se bloque"],"correct":0,"explication":"Une courroie croisée inverse le sens de rotation ; une courroie non croisée le garde."},
                {"q":"Les roues A et B s'engrènent. Yasmine fait tourner B dans le sens inverse des aiguilles d'une montre. Comment tourne A ?","contexte":"Engrenages","options":["A reste immobile","Dans le sens inverse des aiguilles d'une montre","Dans le sens des aiguilles d'une montre"],"correct":2,"explication":"Peu importe la roue qu'on tourne : deux roues engrenées tournent toujours en sens contraires."},
                {"q":"Dans un engrenage, la roue qu'on fait tourner avec la manivelle s'appelle la roue motrice. Les autres roues sont…","contexte":"Engrenages","options":["entrainées par elle","toujours immobiles","toujours plus rapides"],"correct":0,"explication":"La roue motrice reçoit le mouvement (manivelle, moteur, pédales) et le transmet aux autres roues."},
                {"q":"Inès place des roues dentées en ligne. Elle veut que la dernière tourne dans le même sens que la première. Combien de roues peut-elle utiliser ?","contexte":"Engrenages","options":["3 roues","6 roues","2 roues","4 roues"],"correct":0,"explication":"Avec un nombre impair de roues en ligne, la dernière tourne dans le même sens que la première."},
                {"q":"Les roues A et B s'engrènent. Noah les écarte et place une troisième roue entre elles : A entraine la roue du milieu, qui entraine B. Qu'est-ce qui change pour B ?","contexte":"Engrenages","options":["Elle tourne maintenant beaucoup plus vite","Elle tourne maintenant dans le sens de A","Elle s'arrête maintenant de tourner"],"correct":1,"explication":"Une roue intermédiaire inverse le sens de la dernière roue, sans changer sa vitesse."},
                {"q":"Dans une horloge mécanique, des roues dentées transmettent le mouvement jusqu'aux aiguilles.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Les engrenages de l'horloge transmettent le mouvement et font tourner chaque aiguille à sa vitesse."},
                {"q":"Dans lequel de ces objets trouve-t-on des roues dentées ?","contexte":"Engrenages","options":["un ouvre-bouteille","un batteur à œufs à manivelle","une brouette","une paire de ciseaux de cuisine"],"correct":1,"explication":"Dans le batteur, la manivelle fait tourner une roue dentée qui entraine les fouets."},
                {"q":"Sept roues dentées A, B, C, D, E, F et G sont en ligne : chacune entraine la suivante. Sans compter A, combien de roues tournent dans le même sens que A ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["3","trois"],"explication":"Une roue sur deux tourne comme A : C, E et G, donc 3 roues."},
                {"q":"La roue A tourne dans le sens des aiguilles d'une montre. Elle entraine à la fois la roue B, placée à sa gauche, et la roue C, placée à sa droite. B et C ne se touchent pas. Comment tournent B et C ?","contexte":"Engrenages","options":["B dans le sens de A, C en sens contraire","Toutes les deux dans le sens de A","Toutes les deux en sens contraire de A"],"correct":2,"explication":"B et C touchent chacune A : elles tournent toutes les deux en sens contraire de A."},
                {"q":"Dans une rangée de roues dentées, si on fait tourner la dernière roue, la première tourne aussi.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Les dents restent emboitées : le mouvement se transmet dans un sens comme dans l'autre."},
                {"q":"Sur un vélo, à quoi sert la chaine ?","contexte":"Engrenages","options":["À relier la roue avant à la roue arrière","À transmettre le mouvement des pédales à la roue arrière","À freiner la roue arrière quand on descend une côte raide"],"correct":1,"explication":"La chaine relie le plateau des pédales au pignon de la roue arrière."},
                {"q":"Les roues A et B s'engrènent. Adam bloque la roue A avec la main. Que fait la roue B ?","contexte":"Engrenages","options":["Elle est bloquée aussi","Elle continue à tourner seule","Elle tourne dans l'autre sens"],"correct":0,"explication":"Les dents de B sont prises dans celles de A : si A ne bouge plus, B ne peut plus bouger."},
                {"q":"Quatre roues dentées A, B, C et D sont en ligne : chacune entraine la suivante. A tourne dans le sens inverse des aiguilles d'une montre. Quelles roues tournent dans le sens des aiguilles d'une montre ?","contexte":"Engrenages","options":["C seulement","B et D","D seulement","B et C"],"correct":1,"explication":"Le sens change à chaque roue : B et D tournent en sens contraire de A."},
                {"q":"Un engrenage peut changer le sens d'un mouvement de rotation.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Deux roues engrenées tournent en sens contraires : l'engrenage inverse le sens de rotation."},
                {"q":"Comment s'appelle la poignée coudée qu'on tourne à la main pour faire tourner une roue ?","contexte":"Engrenages","options":["la manivelle","la pédale","le pignon","la courroie"],"correct":0,"explication":"La manivelle est une poignée coudée : en la tournant, on fait tourner l'axe et la roue."}
              ]
            },
            {
              "id": "e1-mat-b",
              "titre": "Vite ou lentement ?",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"La roue A de 10 dents entraine la roue B de 20 dents. Quand A fait un tour complet, combien de tours fait B ?","contexte":"Engrenages","options":["deux tours entiers","dix tours","un demi-tour","un tour"],"correct":2,"explication":"Un tour de A fait passer 10 dents ; B en a 20 : elle ne fait qu'un demi-tour."},
                {"q":"La roue A de 30 dents entraine la roue B de 10 dents. A fait un tour complet. Combien de tours fait B ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["3","trois"],"explication":"Un tour de A fait passer 30 dents ; B en a 10 : elle fait 30 : 10 = 3 tours."},
                {"q":"La roue A de 12 dents entraine la roue B de 36 dents. Combien de tours doit faire A pour que B fasse un seul tour ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["3","trois"],"explication":"Pour un tour de B, il faut faire passer 36 dents : 36 : 12 = 3 tours de A."},
                {"q":"Deux roues dentées de tailles différentes s'engrènent. Laquelle tourne le plus vite ?","contexte":"Engrenages","options":["Celle qui a le plus de dents","Elles tournent à la même vitesse","Celle qui a le moins de dents"],"correct":2,"explication":"Les deux roues font passer autant de dents : la petite doit faire plus de tours."},
                {"q":"Deux roues engrenées qui ont le même nombre de dents tournent à la même vitesse.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Elles font le même nombre de tours, mais en sens contraires."},
                {"q":"La roue A de 40 dents entraine la roue B de 10 dents. A fait 2 tours. Combien de tours fait B ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["8","huit"],"explication":"2 tours de A font passer 80 dents ; B en a 10 : 80 : 10 = 8 tours."},
                {"q":"La roue A de 15 dents entraine la roue B de 45 dents. B a fait 2 tours. Combien de tours a fait A ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["6","six"],"explication":"2 tours de B, c'est 90 dents ; A en a 15 : 90 : 15 = 6 tours."},
                {"q":"Pour qu'une roue tourne plus vite que la roue motrice qui l'entraine, elle doit avoir…","contexte":"Engrenages","options":["moins de dents que la roue motrice","autant de dents que la roue motrice","plus de dents que la roue motrice"],"correct":0,"explication":"Une roue plus petite (moins de dents) doit faire plus de tours : elle tourne plus vite."},
                {"q":"La roue A (20 dents) entraine la roue B (50 dents), qui entraine la roue C (20 dents). A fait un tour. Combien de tours fait C ?","contexte":"Engrenages","options":["0,4 tour","1 tour","2,5 tours","5 tours"],"correct":1,"explication":"Chaque dent de A qui passe fait passer une dent de C ; A et C ont 20 dents : un tour chacune."},
                {"q":"Sur le vélo de Mehdi, le plateau a 42 dents et le pignon arrière en a 14. Quand Mehdi fait un tour de pédales, combien de tours fait la roue arrière ?","contexte":"Engrenages","options":["56 tours","14 tours","3 tours","1 tour"],"correct":2,"explication":"Le plateau fait passer 42 dents ; le pignon en a 14 : 42 : 14 = 3 tours de roue."},
                {"q":"Pour monter une côte raide dans les Ardennes, quel réglage du vélo rend le pédalage le plus facile ?","contexte":"Engrenages","options":["grand plateau et grand pignon","petit plateau et grand pignon","grand plateau et petit pignon"],"correct":1,"explication":"La roue arrière fait peu de tours par tour de pédales : on avance moins vite, mais on force moins."},
                {"q":"Quel réglage du vélo fait faire le plus de tours à la roue arrière pour un tour de pédales ?","contexte":"Engrenages","options":["grand plateau et petit pignon","petit plateau et petit pignon","petit plateau et grand pignon"],"correct":0,"explication":"Un grand plateau fait passer beaucoup de dents ; un petit pignon en a peu : la roue tourne beaucoup."},
                {"q":"Sur un vélo, le plateau a 40 dents et le pignon arrière en a 20. Pour un tour de pédales, combien de tours fait la roue arrière ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["2","deux"],"explication":"40 dents passent ; le pignon en a 20 : 40 : 20 = 2 tours de roue."},
                {"q":"Sur une horloge, pendant que l'aiguille des heures fait un tour complet, combien de tours fait l'aiguille des minutes ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["12","douze"],"explication":"L'aiguille des heures fait un tour en 12 heures ; celle des minutes fait un tour par heure."},
                {"q":"Pendant que l'aiguille des minutes fait un tour complet, combien de tours fait l'aiguille des secondes ?","contexte":"Horloge","options":["12","100","24","60"],"correct":3,"explication":"L'aiguille des minutes fait un tour en une heure, soit 60 minutes ; celle des secondes, un tour par minute."},
                {"q":"Dans une horloge, l'aiguille des heures et celle des minutes tournent dans le même sens.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Toutes les aiguilles tournent dans le sens des aiguilles d'une montre, mais à des vitesses différentes."},
                {"q":"Dans une horloge, les roues dentées servent surtout à…","contexte":"Horloge","options":["faire tourner les aiguilles à des vitesses différentes","faire tourner chaque aiguille dans un sens différent","faire avancer toutes les aiguilles à la même vitesse"],"correct":0,"explication":"Grâce à des roues de tailles différentes, chaque aiguille tourne à sa propre vitesse."},
                {"q":"Une grande roue de 60 dents entraine une petite roue de 12 dents. La grande roue fait un tour. Combien de tours fait la petite ?","contexte":"Engrenages","options":["5 tours","48 tours","un cinquième de tour","12 tours"],"correct":0,"explication":"60 dents passent ; la petite roue en a 12 : 60 : 12 = 5 tours."},
                {"q":"Quand une petite roue dentée entraine une grande roue dentée, la grande roue tourne plus lentement.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"La grande roue a plus de dents : elle fait moins de tours que la petite."},
                {"q":"Les roues A (24 dents) et B (8 dents) s'engrènent. Quelle phrase est juste ?","contexte":"Engrenages","options":["A tourne 3 fois plus vite que B","B tourne 3 fois plus vite que A","B tourne 16 fois plus vite que A","A et B tournent à la même vitesse"],"correct":1,"explication":"24 : 8 = 3. B, la plus petite, fait 3 tours quand A en fait un."},
                {"q":"La roue A de 10 dents fait 6 tours. Elle entraine la roue B de 20 dents. Combien de tours fait B ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["3","trois"],"explication":"6 tours de A font passer 60 dents ; B en a 20 : 60 : 20 = 3 tours."},
                {"q":"Dans un batteur à œufs à manivelle, une grande roue dentée entraine de petites roues dentées reliées aux fouets. Pourquoi ?","contexte":"Engrenages","options":["Pour que les fouets tournent moins vite que la manivelle","Pour que les fouets tournent plus vite que la manivelle","Pour que la manivelle tourne toute seule"],"correct":1,"explication":"La grande roue entraine des petites roues : à chaque tour de manivelle, les fouets font plusieurs tours."},
                {"q":"Théo a une roue de 8 dents et une roue de 32 dents qui s'engrènent. Il veut que l'autre roue tourne le plus lentement possible. Quelle roue doit-il tourner à la main ?","contexte":"Engrenages","options":["peu importe, c'est pareil","la roue de 8 dents","la roue de 32 dents"],"correct":1,"explication":"Si la petite roue entraine la grande, la grande fait 4 fois moins de tours : elle tourne lentement."},
                {"q":"La roue A a 16 dents et la roue B en a 48. Elles s'engrènent. Quand B fait un tour, combien de tours fait A ?","contexte":"Engrenages","options":["3 tours","32 tours","1 tour","un tiers de tour"],"correct":0,"explication":"Un tour de B fait passer 48 dents ; A en a 16 : 48 : 16 = 3 tours."},
                {"q":"Quand on pédale, le pignon arrière et la roue arrière du vélo font le même nombre de tours.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Le pignon est fixé sur l'axe de la roue arrière : quand on pédale, ils tournent ensemble."},
                {"q":"Lequel de ces objets utilise une chaine et des roues dentées pour transmettre le mouvement ?","contexte":"Engrenages","options":["la luge","la trottinette","le vélo","le skateboard"],"correct":2,"explication":"Sur le vélo, la chaine relie la roue dentée des pédales à celle de la roue arrière."}
              ]
            },
            {
              "id": "e1-mat-c",
              "titre": "La force des leviers",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Dans un levier, comment appelle-t-on le point autour duquel le levier pivote ?","contexte":"Leviers","options":["la charge","la force","le point d'appui"],"correct":2,"explication":"Le levier tourne autour du point d'appui, comme la planche d'une balançoire autour de son axe."},
                {"q":"Sur une brouette, où se trouve le point d'appui ?","contexte":"Leviers","options":["aux poignées","dans la caisse","à la roue"],"correct":2,"explication":"La brouette pivote autour de l'axe de sa roue : c'est le point d'appui."},
                {"q":"Sur une brouette, où se trouve la charge ?","contexte":"Leviers","options":["tout au bout des deux poignées","entre la roue et les poignées","devant la roue avant"],"correct":1,"explication":"La charge est dans la caisse, entre le point d'appui (la roue) et la force (les mains)."},
                {"q":"Sur une balançoire à bascule, où se trouve le point d'appui ?","contexte":"Leviers","options":["sous chacun des sièges","au milieu de la planche","à un bout de la planche"],"correct":1,"explication":"La planche pivote autour de son axe central : le point d'appui est au milieu."},
                {"q":"Zoé (30 kg) et son grand frère (45 kg) jouent sur une balançoire à bascule. Pour être en équilibre, qui doit s'assoir plus près du point d'appui ?","contexte":"Leviers","options":["le grand frère","aucun des deux","Zoé"],"correct":0,"explication":"Le plus lourd se rapproche du point d'appui pour équilibrer le plus léger."},
                {"q":"Sur une balançoire à bascule, papa (60 kg) est assis à 1 m du point d'appui. À quelle distance de l'autre côté Aya (30 kg) doit-elle s'assoir pour l'équilibrer ?","contexte":"Leviers","options":["3 m","1 m","50 cm","2 m"],"correct":3,"explication":"Aya pèse deux fois moins que papa : elle doit s'assoir deux fois plus loin du point d'appui."},
                {"q":"Plus on appuie loin du point d'appui, moins il faut de force pour soulever la charge.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Un long bras de levier côté force multiplie l'effort : on force moins."},
                {"q":"Nolan veut soulever une grosse pierre avec une longue barre posée sur une cale. Pour forcer le moins possible, où place-t-il la cale ?","contexte":"Leviers","options":["près de la pierre","près de ses mains","au milieu de la barre"],"correct":0,"explication":"La cale est le point d'appui : près de la charge et loin des mains, le levier est le plus efficace."},
                {"q":"Dans un levier, comment appelle-t-on l'objet qu'on veut soulever ou déplacer ?","contexte":"Leviers","options":["la charge","le point d'appui","la force"],"correct":0,"explication":"La charge (ou résistance) est ce qu'on soulève ; la force est l'effort qu'on fournit."},
                {"q":"Sur une tenaille, où se trouve le point d'appui ?","contexte":"Leviers","options":["au bout des poignées","au bout des mâchoires qui serrent","à l'axe entre les branches"],"correct":2,"explication":"Les deux branches pivotent autour de l'axe qui les relie : c'est le point d'appui."},
                {"q":"Pour enlever une capsule avec un ouvre-bouteille, où vaut-il mieux tenir l'outil ?","contexte":"Leviers","options":["tout près de la capsule","au milieu du manche","au bout du manche"],"correct":2,"explication":"En tenant loin du point d'appui, on force moins : c'est le principe du levier."},
                {"q":"Lequel de ces objets n'est PAS un levier ?","contexte":"Leviers","options":["une paire de ciseaux","un pied-de-biche","une brouette","une vis"],"correct":3,"explication":"La brouette, les ciseaux et le pied-de-biche pivotent autour d'un point d'appui ; la vis, non."},
                {"q":"Une paire de ciseaux est formée de deux leviers. Où est leur point d'appui ?","contexte":"Leviers","options":["au bout pointu des lames","à la vis qui relie les lames","dans les anneaux pour les doigts"],"correct":1,"explication":"Les deux lames pivotent autour de la vis centrale : c'est le point d'appui."},
                {"q":"Pour couper un carton épais avec des ciseaux, où vaut-il mieux le placer ?","contexte":"Leviers","options":["au bout des lames","près de la vis des ciseaux","n'importe où, c'est pareil"],"correct":1,"explication":"Près du point d'appui, la charge est proche et la force des mains est plus efficace."},
                {"q":"Un levier permet de soulever une charge lourde en utilisant moins de force.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"C'est tout son intérêt : bien placé, le levier multiplie la force qu'on exerce."},
                {"q":"Pourquoi vaut-il mieux placer le sable lourd près de la roue de la brouette ?","contexte":"Leviers","options":["Pour que la roue tourne beaucoup plus vite","Pour devoir soulever moins fort aux poignées","Pour que le sable devienne beaucoup moins lourd"],"correct":1,"explication":"Plus la charge est proche du point d'appui (la roue), moins l'effort aux poignées est grand."},
                {"q":"Pour ouvrir un pot de peinture, Lucas glisse un tournevis sous le couvercle et appuie sur le manche. Le bord du pot sert de…","contexte":"Leviers","options":["point d'appui","force","charge"],"correct":0,"explication":"Le tournevis pivote sur le bord du pot : c'est le point d'appui."},
                {"q":"Lucas ouvre un pot de peinture avec un tournevis posé sur le bord du pot. Dans ce levier, le couvercle est…","contexte":"Leviers","options":["le point d'appui","la force","la charge"],"correct":2,"explication":"Le couvercle est ce qu'on veut soulever : c'est la charge."},
                {"q":"Sur une balançoire à bascule, deux enfants de même masse sont assis à la même distance du point d'appui. Que fait la balançoire ?","contexte":"Leviers","options":["Elle penche du côté gauche","Elle penche du côté du plus grand","Elle est en équilibre"],"correct":2,"explication":"Même masse et même distance : les deux côtés s'équilibrent."},
                {"q":"Mehdi (40 kg) s'assoit à 1,5 m du point d'appui d'une balançoire à bascule. Son amie (40 kg aussi) s'assoit à 1 m de l'autre côté. Quel côté descend ?","contexte":"Leviers","options":["celui de Mehdi","aucun : c'est l'équilibre","celui de son amie"],"correct":0,"explication":"À masse égale, celui qui est le plus loin du point d'appui fait descendre son côté."},
                {"q":"Avec un pied-de-biche, Inès soulève une planche clouée. Pour forcer le moins possible, elle tient l'outil…","contexte":"Leviers","options":["au milieu du manche","tout près du point d'appui","tout au bout du manche"],"correct":2,"explication":"Plus la main est loin du point d'appui, moins il faut de force."},
                {"q":"Dans une brouette, le point d'appui se trouve entre la charge et la force.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Dans la brouette, c'est la charge qui est au milieu, entre la roue (point d'appui) et les mains (force)."},
                {"q":"Un levier a trois éléments : le point d'appui, la charge et la …","contexte":"Complète avec un mot.","type":"saisie","clavier":"texte","reponse":["force","la force","effort","l'effort"],"explication":"La force est l'effort qu'on exerce, par exemple avec les mains, pour déplacer la charge."},
                {"q":"Dans lequel de ces leviers le point d'appui est-il au milieu, entre la force et la charge ?","contexte":"Leviers","options":["le casse-noix","la brouette","la balançoire à bascule"],"correct":2,"explication":"Sur la balançoire, l'axe est au milieu ; dans la brouette et le casse-noix, c'est la charge qui est au milieu."},
                {"q":"Dans un casse-noix, où vaut-il mieux placer la noix pour la casser facilement ?","contexte":"Leviers","options":["près de l'articulation","n'importe où, c'est pareil","au bout des branches"],"correct":0,"explication":"Près du point d'appui (l'articulation), la force des mains est la plus efficace."},
                {"q":"Un ouvre-bouteille est un levier.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"L'ouvre-bouteille pivote en appui sur la capsule : la main appuie loin, et la capsule se soulève."}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "i2",
      "niveau": 2,
      "titre": "Ile des Matelots",
      "sousTitre": "Niveau 2 · On monte d'un cran",
      "couleur": "#f08c00",
      "symboles": [
        "2",
        "⏳",
        "N",
        "⚙"
      ],
      "ouvertParDefaut": true,
      "condition": {
        "quartier": "i1",
        "pourcent": 80
      },
      "agent": {
        "nom": "La capitaine Océane",
        "ferme": [
          "Ahoy ! Mon bateau ne t'emmène pas encore sur l'Ile des Matelots."
        ]
      },
      "habitants": [
        {
          "nom": "La pêcheuse Rosa",
          "lignes": [
            "Le musée du temps est {b:i2-hist}.",
            "La tour des cartes est {b:i2-geo}."
          ],
          "indice": "Musée du temps : {b:i2-hist}. Tour des cartes : {b:i2-geo}."
        },
        {
          "nom": "Le cuisinier Bao",
          "lignes": [
            "La serre du vivant est {b:i2-viv}.",
            "Et l'atelier des inventions est {b:i2-mat}."
          ],
          "indice": "Serre du vivant : {b:i2-viv}. Atelier des inventions : {b:i2-mat}."
        },
        {
          "nom": "La matelote Lou",
          "lignes": [
            "Pour aller sur l'ile suivante, parle au passeur du ponton.",
            "Il t'emmène quand tu as 80 % des étoiles dans chaque bâtiment de cette ile."
          ],
          "indice": "Pour l'ile suivante : 80 % des étoiles dans chaque bâtiment, puis le bateau du ponton."
        }
      ],
      "batiments": [
        {
          "id": "i2-hist",
          "matiere": "Histoire",
          "titre": "Le musée du temps",
          "symbole": "⏳",
          "description": "L'Antiquité et les Romains dans nos régions.",
          "hote": {
            "nom": "Le centurion Lucius",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e2-hist-a",
              "titre": "L'écriture et les dates",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Vers quelle date l'écriture a-t-elle été inventée ?","options":["vers 3500 av. J.-C.","vers 1500 av. J.-C.","vers 500 ap. J.-C.","vers 9000 av. J.-C."],"correct":0,"explication":"Les premières écritures apparaissent vers 3500 avant Jésus-Christ : l'Antiquité commence."},
                {"q":"Dans quelle région du monde est née la plus ancienne écriture connue ?","options":["en Gaule","en Mésopotamie","en Scandinavie","en Amérique"],"correct":1,"explication":"La Mésopotamie (l'Irak actuel), entre le Tigre et l'Euphrate, a vu naitre l'une des toutes premières écritures."},
                {"q":"Sur quel support écrivait-on en Mésopotamie ?","options":["des feuilles de papier","des tableaux noirs","des tablettes d'argile","des planches de chêne"],"correct":2,"explication":"On traçait les signes dans l'argile fraiche, qu'on laissait ensuite sécher ou qu'on faisait cuire."},
                {"q":"Avec quel outil traçait-on les signes dans l'argile fraiche ?","options":["une plume d'oie","un stylo à bille","un bâton de craie blanche","un roseau taillé"],"correct":3,"explication":"Le roseau taillé (calame) laisse dans l'argile des marques en forme de clous ou de coins."},
                {"q":"L'écriture cunéiforme doit son nom à ses signes, qui ont la forme de…","options":["clous ou de coins","cercles ou d'anneaux","vagues ou de spirales","fleurs ou de feuilles"],"correct":0,"explication":"« Cunéiforme » vient du latin cuneus, le coin : les signes ressemblent à de petits clous."},
                {"q":"Pourquoi a-t-on d'abord inventé l'écriture ?","options":["pour écrire des histoires pour les enfants","pour noter des récoltes et des troupeaux","pour envoyer des cartes de vœux","pour décorer les murs des maisons"],"correct":1,"explication":"Les premiers écrits sont surtout des comptes : quantités de grain, de bétail, échanges et impôts."},
                {"q":"L'invention de l'écriture marque le passage de la Préhistoire à l'Antiquité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"On parle d'Histoire quand on dispose de textes écrits : l'écriture ouvre l'Antiquité."},
                {"q":"Les Gaulois de nos régions ont laissé beaucoup de livres racontant leur propre histoire.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les Gaulois écrivaient très peu. On les connait surtout par les textes des Romains et par l'archéologie."},
                {"q":"L'alphabet que nous utilisons en français vient de celui des…","options":["Gaulois","Vikings","Romains","Francs"],"correct":2,"explication":"Nous écrivons avec l'alphabet latin, celui des Romains."},
                {"q":"Quel évènement sert de point de départ à notre calendrier ?","options":["la fondation de la ville de Rome","l'invention de l'écriture","la chute de l'Empire romain","la naissance de Jésus-Christ"],"correct":3,"explication":"On compte les années avant et après la naissance de Jésus-Christ."},
                {"q":"Que signifie l'abréviation « ap. J.-C. » ?","options":["après Jésus-Christ","après Jules César","après la conquête romaine","après la chute de Rome"],"correct":0,"explication":"« ap. J.-C. » signifie après Jésus-Christ ; « av. J.-C. » signifie avant Jésus-Christ."},
                {"q":"L'année 0 n'existe pas dans notre calendrier.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"On passe directement de l'an 1 av. J.-C. à l'an 1 ap. J.-C."},
                {"q":"Quelle année vient juste après l'an 1 av. J.-C. ?","options":["l'an 0","l'an 1 ap. J.-C.","l'an 2 av. J.-C.","l'an 2 ap. J.-C."],"correct":1,"explication":"Il n'y a pas d'an 0 : après l'an 1 av. J.-C. vient directement l'an 1 ap. J.-C."},
                {"q":"Avant Jésus-Christ, plus le nombre de l'année est grand, plus la date est…","options":["récente","proche de nous","ancienne","difficile à lire"],"correct":2,"explication":"Avant J.-C., on compte à rebours : 500 av. J.-C. est plus ancien que 100 av. J.-C."},
                {"q":"Quelle date est la plus ancienne ?","options":["500 av. J.-C.","300 av. J.-C.","900 ap. J.-C.","800 av. J.-C."],"correct":3,"explication":"Avant J.-C., le plus grand nombre est le plus ancien. Toute date après J.-C. est plus récente."},
                {"q":"Quelle date est la plus récente ?","options":["12 av. J.-C.","58 av. J.-C.","90 av. J.-C.","120 av. J.-C."],"correct":0,"explication":"Avant J.-C., le plus petit nombre est le plus proche de la naissance de Jésus-Christ, donc le plus récent."},
                {"q":"Quelle date est la plus ancienne ?","options":["100 av. J.-C.","200 av. J.-C.","300 ap. J.-C.","50 ap. J.-C."],"correct":1,"explication":"Les dates avant J.-C. sont plus anciennes que celles après J.-C. ; et 200 av. J.-C. précède 100 av. J.-C."},
                {"q":"Sur une frise, où se placent les dates avant Jésus-Christ ?","options":["à droite de l'an 1","au-dessus de l'an 1","à gauche de l'an 1","sous l'an 1"],"correct":2,"explication":"Une frise se lit de gauche à droite : les dates av. J.-C. sont à gauche du point de repère."},
                {"q":"En quel siècle se trouve l'année 476 ?","contexte":"Écris le numéro du siècle.","type":"saisie","clavier":"texte","reponse":["5","5e","5ème","5eme","cinquième","cinquieme","Ve","V","le 5e","le cinquième","le cinquieme"],"explication":"476 se situe entre 401 et 500 : c'est le 5e siècle."},
                {"q":"En quel siècle se trouve l'année 1830 ?","options":["le 18e siècle","le 20e siècle","le 8e siècle","le 19e siècle"],"correct":3,"explication":"Les années 1801 à 1900 forment le 19e siècle."},
                {"q":"En quel siècle vivons-nous aujourd'hui ?","options":["le 21e siècle","le 20e siècle","le 2e siècle","le 19e siècle"],"correct":0,"explication":"Les années 2001 à 2100 forment le 21e siècle."},
                {"q":"Le 1er siècle après Jésus-Christ va de l'an 1 à l'an 100.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Comme il n'y a pas d'an 0, le 1er siècle commence en l'an 1 et se termine en l'an 100."},
                {"q":"Les siècles s'écrivent souvent en chiffres romains. Que signifie « XIXe siècle » ?","options":["11e siècle","19e siècle","9e siècle","21e siècle"],"correct":1,"explication":"X vaut 10 et IX vaut 9 : XIX = 19."},
                {"q":"Combien d'années séparent 3500 av. J.-C. et 500 av. J.-C. ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["3000","3 000","trois-mille","trois mille"],"explication":"Les deux dates sont avant J.-C. : on soustrait 3500 − 500 = 3000 ans."},
                {"q":"Combien d'années séparent 476 et 1492 ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["1016","1 016"],"explication":"On calcule 1492 − 476 = 1016 ans."},
                {"q":"L'Antiquité va de 3500 av. J.-C. à 476 ap. J.-C. Elle dure donc environ…","options":["400 ans","1000 ans","4000 ans","40 000 ans"],"correct":2,"explication":"3500 ans avant J.-C. plus environ 500 ans après J.-C. : à peu près 4000 ans."},
                {"q":"La date de 3500 av. J.-C. marque le passage…","options":["de l'Antiquité au Moyen Âge","du Paléolithique au Néolithique","du Moyen Âge aux Temps modernes","de la Préhistoire à l'Antiquité"],"correct":3,"explication":"Vers 3500 av. J.-C., l'écriture apparait : la Préhistoire se termine, l'Antiquité commence."}
              ]
            },
            {
              "id": "e2-hist-b",
              "titre": "Les Belges face à Rome",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Comment Jules César appelle-t-il les peuples qui vivaient dans nos régions avant la conquête romaine ?","options":["les Belges","les Francs","les Vikings","les Saxons"],"correct":0,"explication":"César appelle « Belges » les peuples du nord de la Gaule ; notre pays leur doit son nom."},
                {"q":"Qui a écrit : « De tous les peuples de la Gaule, les Belges sont les plus braves » ?","options":["Charlemagne","Jules César","Clovis","Ambiorix"],"correct":1,"explication":"Cette phrase célèbre vient du livre de Jules César sur sa guerre en Gaule."},
                {"q":"Comment s'appelle le livre où Jules César raconte sa conquête de la Gaule ?","options":["Les Belges et Rome","Le Voyage en Gaule","La Guerre des Gaules","La Paix des Gaulois"],"correct":2,"explication":"Dans La Guerre des Gaules, César décrit ses combats et les peuples qu'il affronte."},
                {"q":"Vers quelle date Jules César conquiert-il la Gaule ?","options":["vers 50 ap. J.-C.","vers 500 ap. J.-C.","vers 3500 av. J.-C.","vers 50 av. J.-C."],"correct":3,"explication":"César mène la guerre des Gaules entre 58 et 51 avant Jésus-Christ."},
                {"q":"Quel chef des Éburons s'est révolté contre Jules César ?","options":["Ambiorix","Vercingétorix","Clovis","Charlemagne"],"correct":0,"explication":"Ambiorix, chef des Éburons, a infligé une lourde défaite aux Romains. Vercingétorix, lui, était le chef des Arvernes."},
                {"q":"La statue d'Ambiorix se dresse sur la grand-place de quelle ville belge ?","contexte":"Écris le nom de la ville.","type":"saisie","clavier":"texte","reponse":["Tongres","Tongeren","tongres"],"explication":"Tongres, dans la province de Limbourg, honore Ambiorix par une grande statue."},
                {"q":"Ambiorix a réussi à battre une partie de l'armée romaine avant que César ne se venge.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Vers 54 av. J.-C., les Éburons d'Ambiorix détruisent des troupes romaines ; César ravage ensuite leur territoire."},
                {"q":"Lequel de ces noms n'est PAS un peuple belge du temps de César ?","options":["les Nerviens","les Francs","les Éburons","les Ménapiens"],"correct":1,"explication":"Les Francs sont un peuple germanique qui s'installe chez nous bien plus tard, à la fin de l'Empire romain."},
                {"q":"Dans quoi vivaient la plupart des Gaulois ?","options":["des immeubles en pierre","des tentes en peaux de renne","des huttes au toit de chaume","des villas aux toits de tuiles"],"correct":2,"explication":"Les maisons gauloises étaient faites de bois et de torchis, avec un toit de paille (chaume)."},
                {"q":"Les Gaulois savaient travailler le fer.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les Gaulois étaient d'habiles forgerons : ils fabriquaient outils, armes et bijoux en métal."},
                {"q":"Chez les Gaulois, les prêtres qui connaissaient les plantes et les dieux s'appelaient…","options":["les légionnaires","les seigneurs","les bourgmestres","les druides"],"correct":3,"explication":"Les druides étaient prêtres, savants et juges : ils avaient une grande autorité."},
                {"q":"Les Gaulois croyaient en plusieurs dieux.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Comme les Romains, les Gaulois étaient polythéistes : ils honoraient de nombreux dieux."},
                {"q":"Les guerriers gaulois portaient tous des casques ornés de grandes ailes.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"C'est une image des bandes dessinées et des peintures du 19e siècle, pas une réalité historique."},
                {"q":"Les Gaulois portaient un pantalon appelé…","options":["les braies","la toge","la cotte","le pagne"],"correct":0,"explication":"Les braies sont le pantalon gaulois ; les Romains, eux, portaient la tunique et la toge."},
                {"q":"Quel vêtement est typiquement romain ?","options":["les braies","la toge","la cape en peau","le kilt"],"correct":1,"explication":"La toge, grande pièce de laine drapée, était portée par les citoyens romains."},
                {"q":"Quelle langue parlaient les Gaulois avant l'arrivée des Romains ?","options":["le latin","le français","une langue celte","le néerlandais"],"correct":2,"explication":"Les Gaulois parlaient des langues celtes. Le latin arrive avec les Romains, le français nait bien plus tard."},
                {"q":"Quelle langue parlaient les Romains ?","contexte":"Écris un seul mot.","type":"saisie","clavier":"texte","reponse":["latin","le latin","Latin"],"explication":"Le latin est la langue des Romains ; le français en descend."},
                {"q":"Comment appelle-t-on un soldat de l'armée romaine ?","contexte":"Écris un seul mot.","type":"saisie","clavier":"texte","reponse":["légionnaire","legionnaire","un légionnaire","un legionnaire"],"explication":"Les soldats romains étaient regroupés en légions : ce sont des légionnaires."},
                {"q":"Pourquoi l'armée romaine a-t-elle vaincu les peuples gaulois ?","options":["elle utilisait déjà des fusils","elle avait des chevaux et pas eux","elle combattait seulement la nuit","elle était nombreuse et bien entrainée"],"correct":3,"explication":"Les légions étaient disciplinées, entrainées et bien équipées, et les peuples gaulois étaient souvent divisés."},
                {"q":"Après la conquête, nos régions font partie d'une province romaine appelée…","options":["la Gaule Belgique","la Flandre romaine","la Wallonie latine","la Lotharingie"],"correct":0,"explication":"Les Romains ont créé la province de Gaule Belgique, qui s'étendait sur notre pays et au-delà."},
                {"q":"De quelle ville était dirigé l'Empire romain ?","options":["Tongres","Rome","Athènes","Paris"],"correct":1,"explication":"Rome, en Italie, était la capitale de l'Empire romain."},
                {"q":"Jules César a été le premier empereur romain.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"César a dirigé Rome, mais il n'a jamais été empereur. Le premier empereur est Auguste."},
                {"q":"Jules César et Ambiorix ont vécu pendant…","options":["la Préhistoire","le Moyen Âge","l'Antiquité","les Temps modernes"],"correct":2,"explication":"La conquête de la Gaule a lieu vers 50 av. J.-C., en pleine Antiquité."},
                {"q":"Quel évènement est le plus ancien ?","options":["la conquête de la Gaule","la naissance de Jésus-Christ","la chute de l'Empire romain","l'invention de l'écriture"],"correct":3,"explication":"Écriture (vers 3500 av. J.-C.), conquête (vers 50 av. J.-C.), naissance de Jésus-Christ, puis chute de Rome (476)."},
                {"q":"Quel évènement est le plus récent ?","options":["la chute de l'Empire romain","la révolte d'Ambiorix","la conquête de la Gaule","l'invention de l'écriture"],"correct":0,"explication":"La chute de l'Empire romain d'Occident a lieu en 476, longtemps après la conquête de César."},
                {"q":"Notre pays doit son nom aux anciens Belges décrits par Jules César.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le nom « Belgique » vient des Belges, les peuples du nord de la Gaule cités par César."}
              ]
            },
            {
              "id": "e2-hist-c",
              "titre": "Nos régions romaines",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Que veut dire « romanisation » ?","options":["la destruction des villes romaines","l'adoption du mode de vie romain","le départ des Romains vers Rome","la victoire des Gaulois sur Rome"],"correct":1,"explication":"Après la conquête, les habitants adoptent peu à peu la langue, les coutumes et les constructions des Romains."},
                {"q":"On appelle « gallo-romains » les habitants de la Gaule qui ont adopté le mode de vie romain.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Gallo-romain associe les Gaulois et les Romains : c'est la civilisation née de leur rencontre."},
                {"q":"Quelle ville est souvent présentée comme la plus ancienne de Belgique ?","options":["Bruxelles","Anvers","Tongres","Charleroi"],"correct":2,"explication":"Tongres était déjà une ville importante à l'époque romaine."},
                {"q":"Quel point commun ont Arlon, Tongres et Tournai ?","options":["elles sont toutes au bord de la mer","elles sont toutes en province de Liège","elles ont été fondées par Charlemagne","elles existaient à l'époque romaine"],"correct":3,"explication":"Ces trois villes étaient déjà des agglomérations romaines ; on y retrouve des vestiges de cette époque."},
                {"q":"Sur quel fleuve se trouve Tournai, ancienne ville romaine ?","options":["l'Escaut","la Meuse","le Rhin","la Seine"],"correct":0,"explication":"Tournai est traversée par l'Escaut, une voie de transport déjà utilisée à l'époque romaine."},
                {"q":"Dans quelle province belge se trouve Arlon ?","options":["la province de Namur","la province de Luxembourg","la province de Liège","la province de Hainaut"],"correct":1,"explication":"Arlon est le chef-lieu de la province de Luxembourg ; elle possède des vestiges romains."},
                {"q":"Dans quelle ville, qui a aussi une statue d'Ambiorix, se trouve le Musée gallo-romain ?","options":["Arlon","Tournai","Tongres","Namur"],"correct":2,"explication":"Le Musée gallo-romain de Tongres présente les traces de la Préhistoire et de l'époque romaine."},
                {"q":"À quoi servaient d'abord les voies romaines ?","options":["à faire courir les chevaux","à séparer les champs","à guider les bateaux","à déplacer vite les soldats"],"correct":3,"explication":"Les routes romaines permettaient aux armées, aux messagers et aux marchands de circuler rapidement."},
                {"q":"Les voies romaines étaient construites en plusieurs couches pour être solides.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Sous les pavés, plusieurs couches de pierres, de gravier et de sable rendaient la route durable."},
                {"q":"Une grande voie romaine reliait Bavay à Cologne en traversant nos régions par Tongres.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Cette chaussée romaine traversait la Belgique actuelle d'ouest en est ; certaines routes suivent encore son tracé."},
                {"q":"Le long des voies romaines, des bornes indiquaient…","options":["les distances","les températures","les heures","les marées"],"correct":0,"explication":"Les bornes milliaires indiquaient la distance en milles romains jusqu'à une ville."},
                {"q":"Dans nos campagnes, une villa romaine était…","options":["une petite maison de vacances","un grand domaine agricole","un château fort en pierre","un village gaulois fortifié"],"correct":1,"explication":"La villa comprenait la maison du propriétaire, des bâtiments de ferme et des champs ; on y produisait surtout des céréales."},
                {"q":"L'hypocauste des maisons romaines était un système…","options":["d'égouts sous les rues","d'éclairage à l'huile","de chauffage par le sol","de défense contre les voleurs"],"correct":2,"explication":"L'air chaud d'un foyer circulait sous le sol, posé sur de petits piliers, et chauffait les pièces."},
                {"q":"Les thermes romains étaient…","options":["des temples aux dieux","des écoles de soldats","des marchés couverts","des bains publics"],"correct":3,"explication":"Aux thermes, on se lavait, on se détendait et on se rencontrait : bains chauds, tièdes et froids."},
                {"q":"Dans l'amphithéâtre, les Romains assistaient surtout…","options":["à des combats de gladiateurs","à des matchs de football","à des tournois de chevaliers","à des courses de vélos"],"correct":0,"explication":"L'amphithéâtre accueillait des combats de gladiateurs et des spectacles avec des animaux."},
                {"q":"À quoi servait un aqueduc ?","options":["à protéger la ville des ennemis","à amener de l'eau en ville","à stocker du blé pour l'hiver","à relier deux villes par la route"],"correct":1,"explication":"L'aqueduc transportait l'eau des sources jusqu'aux fontaines et aux thermes."},
                {"q":"Dans une ville romaine, le forum était…","options":["le cimetière de la ville","la caserne des soldats","la grande place centrale","le port sur le fleuve"],"correct":2,"explication":"Le forum était le cœur de la ville : temples, marchés et bâtiments publics l'entouraient."},
                {"q":"Quel type de toit les Romains ont-ils répandu dans nos régions ?","options":["de la paille et des roseaux","des feuilles de palmier","de grandes plaques de verre","des tuiles en terre cuite"],"correct":3,"explication":"Avant les Romains, les toits étaient surtout en chaume ; les Romains apportent la tuile en terre cuite."},
                {"q":"Quels produits les marchands romains apportaient-ils du sud ?","options":["du vin et de l'huile d'olive","du chocolat et des pommes de terre","du café et du thé noir","du maïs et des tomates"],"correct":0,"explication":"Vin et huile d'olive voyageaient dans des amphores. Chocolat, pomme de terre, maïs et tomate viennent d'Amérique, découverte bien plus tard."},
                {"q":"Le français vient en grande partie du latin.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le latin parlé par les Gallo-Romains s'est transformé au fil des siècles pour donner le français."},
                {"q":"Les Romains écrivaient les nombres avec des lettres. Que vaut le chiffre romain X ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["10","dix"],"explication":"En chiffres romains : I = 1, V = 5, X = 10, L = 50, C = 100."},
                {"q":"À la fin de l'époque romaine, des villes comme Tongres et Arlon s'entourent de remparts.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Face aux invasions germaniques, les villes se protègent derrière de solides murailles."},
                {"q":"Quel peuple germanique s'installe dans nos régions à la fin de l'Empire romain ?","options":["les Nerviens","les Francs","les Éburons","les Arvernes"],"correct":1,"explication":"Les Francs franchissent le Rhin et s'installent dans le nord de la Gaule. Nerviens et Éburons étaient des peuples belges."},
                {"q":"En quelle année l'Empire romain d'Occident disparait-il ?","contexte":"Écris l'année.","type":"saisie","clavier":"texte","reponse":["476"],"explication":"En 476, le dernier empereur romain d'Occident est déposé : c'est la fin de l'Antiquité."},
                {"q":"La chute de l'Empire romain d'Occident marque la fin de l'Antiquité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"476 sépare l'Antiquité du Moyen Âge sur la frise chronologique."},
                {"q":"En 476, tout l'Empire romain disparait, à l'est comme à l'ouest.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Seul l'Empire d'Occident tombe. L'Empire romain d'Orient continue encore pendant près de mille ans."},
                {"q":"Une mosaïque retrouvée lors de fouilles dans une villa romaine est…","options":["un document reconstitué","une œuvre d'aujourd'hui","une trace du passé","une copie de musée"],"correct":2,"explication":"Un objet qui date vraiment de l'époque étudiée est une trace du passé."},
                {"q":"Quel évènement est le plus récent ?","options":["la révolte d'Ambiorix","la conquête de la Gaule par César","l'invention de l'écriture","la construction de remparts à Tongres"],"correct":3,"explication":"Les remparts sont construits à la fin de l'époque romaine, bien après la conquête de César."}
              ]
            }
          ]
        },
        {
          "id": "i2-geo",
          "matiere": "Géographie",
          "titre": "La tour des cartes",
          "symbole": "N",
          "description": "L'Europe des 27 et la Belgique.",
          "hote": {
            "nom": "La voyageuse Ella",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e2-geo-a",
              "titre": "Les pays de l'UE et leurs capitales",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Combien de pays font partie de l'Union européenne ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["27","vingt-sept"],"explication":"Depuis le départ du Royaume-Uni en 2020, l'Union européenne compte 27 pays."},
                {"q":"Quel pays a quitté l'Union européenne en 2020 ?","options":["le Royaume-Uni","la Norvège","la Suisse","l'Islande"],"correct":0,"explication":"Le Royaume-Uni est sorti de l'UE en 2020 ; la Norvège, la Suisse et l'Islande n'en ont jamais fait partie."},
                {"q":"Lequel de ces pays n'est pas membre de l'Union européenne ?","options":["le Portugal","l'Irlande","la Suisse","l'Autriche"],"correct":2,"explication":"La Suisse est entourée de pays de l'UE mais n'en fait pas partie."},
                {"q":"Quelle ville est la capitale de la Belgique et accueille plusieurs institutions de l'UE ?","options":["Bruxelles","Gand","Namur","Anvers"],"correct":0,"explication":"Bruxelles est la capitale de la Belgique et accueille la Commission européenne."},
                {"q":"Quelle est la capitale de la France ?","options":["Lille","Paris","Marseille","Lyon"],"correct":1,"explication":"Paris, sur la Seine, est la capitale de la France."},
                {"q":"Quelle est la capitale de l'Allemagne ?","options":["Francfort","Munich","Berlin","Hambourg"],"correct":2,"explication":"Berlin est la capitale de l'Allemagne, le pays le plus peuplé de l'UE."},
                {"q":"Quelle est la capitale des Pays-Bas ?","options":["Utrecht","Rotterdam","Eindhoven","Amsterdam"],"correct":3,"explication":"Amsterdam est la capitale des Pays-Bas ; Rotterdam est leur grand port."},
                {"q":"Quelle est la capitale du Grand-Duché de Luxembourg ?","type":"saisie","clavier":"texte","reponse":["Luxembourg","Luxembourg-ville"],"explication":"La capitale porte le même nom que le pays. Attention : Arlon est le chef-lieu de la province belge."},
                {"q":"Quelle est la capitale de l'Italie ?","type":"saisie","clavier":"texte","reponse":["Rome"],"explication":"Rome, traversée par le Tibre, est la capitale de l'Italie."},
                {"q":"Quelle est la capitale de l'Espagne ?","type":"saisie","clavier":"texte","reponse":["Madrid"],"explication":"Madrid est au centre de l'Espagne ; Barcelone est la deuxième ville du pays."},
                {"q":"Quelle est la capitale du Portugal ?","options":["Coimbra","Lisbonne","Madrid","Porto"],"correct":1,"explication":"Lisbonne, au bord de l'Atlantique, est la capitale du Portugal."},
                {"q":"Quelle est la capitale de la Grèce ?","type":"saisie","clavier":"texte","reponse":["Athènes","Athenes"],"explication":"Athènes est la capitale de la Grèce, au sud-est de l'Europe."},
                {"q":"Quelle est la capitale de l'Autriche ?","options":["Vienne","Innsbruck","Salzbourg","Graz"],"correct":0,"explication":"Vienne, sur le Danube, est la capitale de l'Autriche."},
                {"q":"Quelle est la capitale de l'Irlande ?","options":["Édimbourg","Cork","Belfast","Dublin"],"correct":3,"explication":"Dublin est la capitale de l'Irlande ; Belfast est en Irlande du Nord, au Royaume-Uni."},
                {"q":"Copenhague est la capitale de quel pays ?","options":["la Suède","la Norvège","le Danemark","la Finlande"],"correct":2,"explication":"Copenhague est la capitale du Danemark, au nord de l'Allemagne."},
                {"q":"Quelle est la capitale de la Suède ?","options":["Göteborg","Stockholm","Copenhague","Oslo"],"correct":1,"explication":"Stockholm est la capitale de la Suède ; Oslo est celle de la Norvège, hors UE."},
                {"q":"Helsinki est la capitale de quel pays ?","options":["le Danemark","la Finlande","la Suède","l'Estonie"],"correct":1,"explication":"Helsinki est la capitale de la Finlande, au bord de la mer Baltique."},
                {"q":"Quelle est la capitale de l'Estonie ?","options":["Riga","Tallinn","Helsinki","Vilnius"],"correct":1,"explication":"Pays baltes du nord au sud : Estonie (Tallinn), Lettonie (Riga), Lituanie (Vilnius)."},
                {"q":"Riga est la capitale de quel pays ?","options":["la Lettonie","la Lituanie","l'Estonie","la Pologne"],"correct":0,"explication":"Riga est la capitale de la Lettonie, le pays balte du milieu."},
                {"q":"Quelle est la capitale de la Lituanie ?","options":["Riga","Vilnius","Tallinn","Kaunas"],"correct":1,"explication":"Vilnius est la capitale de la Lituanie, le plus au sud des trois pays baltes."},
                {"q":"Varsovie est la capitale de quel pays ?","options":["la Tchéquie","la Hongrie","la Lituanie","la Pologne"],"correct":3,"explication":"Varsovie, sur la Vistule, est la capitale de la Pologne."},
                {"q":"Quelle est la capitale de la Tchéquie (République tchèque) ?","options":["Brno","Bratislava","Varsovie","Prague"],"correct":3,"explication":"Prague est la capitale de la Tchéquie ; Bratislava est celle de la Slovaquie."},
                {"q":"Bratislava est la capitale de quel pays ?","options":["la Croatie","la Slovaquie","la Tchéquie","la Slovénie"],"correct":1,"explication":"Bratislava (Slovaquie) et Ljubljana (Slovénie) : deux pays aux noms proches."},
                {"q":"Quelle est la capitale de la Slovénie ?","options":["Ljubljana","Vienne","Bratislava","Zagreb"],"correct":0,"explication":"Ljubljana est la capitale de la Slovénie, petit pays au sud de l'Autriche."},
                {"q":"Quelle est la capitale de la Croatie ?","options":["Zagreb","Belgrade","Split","Dubrovnik"],"correct":0,"explication":"Zagreb est la capitale de la Croatie ; Split et Dubrovnik sont sur la côte."},
                {"q":"Quelle est la capitale de la Hongrie ?","options":["Debrecen","Vienne","Bucarest","Budapest"],"correct":3,"explication":"Budapest (Hongrie) et Bucarest (Roumanie) : ne les confonds pas !"},
                {"q":"Bucarest est la capitale de quel pays ?","options":["la Hongrie","la Bulgarie","la Roumanie","la Croatie"],"correct":2,"explication":"Bucarest est la capitale de la Roumanie ; Budapest est celle de la Hongrie."},
                {"q":"Quelle est la capitale de la Bulgarie ?","options":["Bucarest","Varna","Sofia","Plovdiv"],"correct":2,"explication":"Sofia est la capitale de la Bulgarie ; Varna est un port de la mer Noire."},
                {"q":"Quelle est la capitale de Chypre, ile de la Méditerranée orientale ?","options":["Larnaca","La Valette","Limassol","Nicosie"],"correct":3,"explication":"Nicosie est la capitale de Chypre ; La Valette est celle de Malte."},
                {"q":"La Valette est la capitale de quel pays, une petite ile au sud de la Sicile ?","options":["la Grèce","Malte","la Croatie","Chypre"],"correct":1,"explication":"Malte, avec sa capitale La Valette, est le plus petit pays de l'UE."}
              ]
            },
            {
              "id": "e2-geo-b",
              "titre": "Montagnes, mers et fleuves d'Europe",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quelle chaine de montagnes sépare la France de l'Espagne ?","options":["les Alpes","les Vosges","les Pyrénées","les Carpates"],"correct":2,"explication":"Les Pyrénées forment une frontière naturelle entre la France et l'Espagne."},
                {"q":"Dans quelle chaine de montagnes se trouve le mont Blanc ?","options":["les Apennins","le Caucase","les Pyrénées","les Alpes"],"correct":3,"explication":"Le mont Blanc, environ 4 800 m, est le plus haut sommet des Alpes."},
                {"q":"Quelle est la plus haute montagne des Alpes ?","options":["le Cervin","le mont Blanc","le signal de Botrange","le mont Ventoux"],"correct":1,"explication":"Le mont Blanc, à la frontière entre la France et l'Italie, culmine à environ 4 800 m."},
                {"q":"Lequel de ces pays est traversé par les Alpes ?","options":["le Portugal","l'Autriche","la Pologne","le Danemark"],"correct":1,"explication":"Les Alpes traversent la France, l'Italie, la Suisse, l'Allemagne, l'Autriche et la Slovénie."},
                {"q":"Quelle chaine de montagnes se trouve entre la mer Noire et la mer Caspienne ?","options":["les Alpes","les Pyrénées","l'Oural","le Caucase"],"correct":3,"explication":"Le Caucase s'étend entre la mer Noire et la mer Caspienne."},
                {"q":"Quelle longue chaine de montagnes de Russie, orientée du nord au sud, sert de limite entre l'Europe et l'Asie ?","options":["les Carpates","le Caucase","les Alpes","l'Oural"],"correct":3,"explication":"Les monts Oural marquent la limite entre l'Europe et l'Asie."},
                {"q":"Quelle chaine de montagnes parcourt l'Italie du nord au sud ?","options":["les Pyrénées","les Carpates","les Vosges","les Apennins"],"correct":3,"explication":"Les Apennins forment la « colonne vertébrale » de l'Italie."},
                {"q":"Laquelle de ces chaines de montagnes est la plus haute ?","options":["les Alpes","le Massif central","les Vosges","l'Ardenne"],"correct":0,"explication":"Les Alpes dépassent 4 000 m ; l'Ardenne n'atteint même pas 700 m."},
                {"q":"Les Pays-Bas et le Danemark sont des pays très plats, presque sans montagnes.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Ces deux pays sont des pays de plaines ; une partie des Pays-Bas est même sous le niveau de la mer."},
                {"q":"Quel fleuve prend sa source dans les Alpes suisses et se jette dans la mer du Nord, aux Pays-Bas ?","options":["le Rhône","le Pô","le Rhin","le Danube"],"correct":2,"explication":"Le Rhin traverse la Suisse, longe la France, traverse l'Allemagne et les Pays-Bas."},
                {"q":"Le Rhin traverse l'Allemagne.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le Rhin est le grand fleuve de l'ouest de l'Allemagne avant d'entrer aux Pays-Bas."},
                {"q":"Quel fleuve traverse Vienne, Bratislava et Budapest ?","options":["la Volga","le Danube","l'Elbe","le Rhin"],"correct":1,"explication":"Le Danube traverse quatre capitales : Vienne, Bratislava, Budapest et Belgrade."},
                {"q":"Dans quelle mer le Danube se jette-t-il ?","options":["la mer du Nord","la mer Noire","la mer Baltique","la mer Méditerranée"],"correct":1,"explication":"Le Danube coule vers l'est et se jette dans la mer Noire."},
                {"q":"Dans quel pays le Danube prend-il sa source ?","options":["l'Allemagne","la Hongrie","l'Autriche","la Roumanie"],"correct":0,"explication":"Le Danube nait en Allemagne, dans la Forêt-Noire."},
                {"q":"Quel est le plus long fleuve d'Europe ?","options":["la Volga","le Danube","la Loire","le Rhin"],"correct":0,"explication":"La Volga, en Russie, est le plus long fleuve d'Europe ; elle se jette dans la mer Caspienne."},
                {"q":"Quel fleuve traverse Paris ?","type":"saisie","clavier":"texte","reponse":["Seine","la Seine"],"explication":"La Seine traverse Paris puis se jette dans la Manche."},
                {"q":"Quel fleuve français se jette dans la mer Méditerranée ?","options":["la Seine","l'Escaut","le Rhône","la Loire"],"correct":2,"explication":"Le Rhône nait en Suisse, traverse Lyon et se jette dans la Méditerranée."},
                {"q":"Quel fleuve traverse Lisbonne avant de se jeter dans l'Atlantique ?","options":["le Douro","le Pô","le Tage","l'Èbre"],"correct":2,"explication":"Le Tage traverse l'Espagne et le Portugal et se jette dans l'Atlantique à Lisbonne."},
                {"q":"Quel est le plus long fleuve d'Italie ?","options":["le Rhône","l'Arno","le Tibre","le Pô"],"correct":3,"explication":"Le Pô traverse le nord de l'Italie et se jette dans la mer Adriatique."},
                {"q":"Quel fleuve traverse Varsovie, la capitale de la Pologne ?","options":["la Vistule","la Seine","le Danube","le Rhin"],"correct":0,"explication":"La Vistule est le grand fleuve de la Pologne ; elle se jette dans la mer Baltique."},
                {"q":"Quel fleuve traverse Londres ?","options":["la Seine","le Rhin","la Tamise","l'Elbe"],"correct":2,"explication":"Londres, capitale du Royaume-Uni, est traversée par la Tamise."},
                {"q":"Quelle mer borde la côte belge ?","options":["la mer du Nord","la Manche","la Méditerranée","la mer Baltique"],"correct":0,"explication":"De La Panne à Knokke, la côte belge borde la mer du Nord."},
                {"q":"Quel bras de mer sépare la France de la Grande-Bretagne ?","options":["la mer Baltique","la mer Noire","la mer du Nord","la Manche"],"correct":3,"explication":"La Manche relie l'Atlantique à la mer du Nord ; un tunnel passe dessous."},
                {"q":"Quelle mer se trouve entre la Suède, la Finlande et les pays baltes ?","options":["la mer Baltique","la mer du Nord","la mer Noire","la Méditerranée"],"correct":0,"explication":"La mer Baltique est au nord-est de l'Europe ; les pays baltes lui doivent leur nom."},
                {"q":"Quelle mer baigne à la fois l'Espagne, l'Italie et la Grèce ?","options":["la mer Noire","la mer du Nord","la Méditerranée","la mer Baltique"],"correct":2,"explication":"La Méditerranée borde tout le sud de l'Europe."},
                {"q":"Quelle mer borde la Roumanie et la Bulgarie ?","options":["la mer Baltique","la mer du Nord","la mer Noire","la mer Adriatique"],"correct":2,"explication":"La Roumanie et la Bulgarie ont leur côte à l'est, sur la mer Noire."},
                {"q":"Quelle mer, partie de la Méditerranée, sépare l'Italie de la Croatie ?","options":["la mer du Nord","la mer Baltique","la mer Adriatique","la mer Noire"],"correct":2,"explication":"L'Adriatique s'étend entre la côte est de l'Italie et la Croatie."},
                {"q":"Quel océan baigne les côtes ouest du Portugal, de la France et de l'Irlande ?","options":["l'océan Indien","l'océan Pacifique","l'océan Arctique","l'océan Atlantique"],"correct":3,"explication":"L'Atlantique borde tout l'ouest de l'Europe."},
                {"q":"La mer Caspienne, à l'est du Caucase, est en réalité un immense lac salé, sans ouverture sur l'océan.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La mer Caspienne est fermée : c'est le plus grand lac du monde, et son eau est salée."}
              ]
            },
            {
              "id": "e2-geo-c",
              "titre": "La Belgique : régions et provinces",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Combien de provinces compte la Belgique ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["10","dix"],"explication":"Cinq provinces en Flandre et cinq en Wallonie ; Bruxelles n'est dans aucune province."},
                {"q":"Quelles sont les trois régions de la Belgique ?","options":["Flandre, Wallonie et Ardenne","flamande, française et germanophone","flamande, wallonne et Bruxelles-Capitale","flamande, wallonne et germanophone"],"correct":2,"explication":"Les régions s'occupent du territoire ; ne les confonds pas avec les communautés."},
                {"q":"Quelles sont les trois communautés de la Belgique ?","options":["flamande, wallonne et allemande","wallonne, flamande et bruxelloise","française, flamande et germanophone","française, wallonne et germanophone"],"correct":2,"explication":"Les communautés sont liées à la langue : français, néerlandais, allemand."},
                {"q":"Ton école dépend de la Fédération Wallonie-Bruxelles. C'est l'autre nom…","options":["de la Communauté française","de la Région bruxelloise","du Brabant wallon","de la Région wallonne"],"correct":0,"explication":"La Communauté française s'appelle aussi Fédération Wallonie-Bruxelles ; elle s'occupe notamment de l'enseignement."},
                {"q":"Dans quelle province se trouve la Communauté germanophone ?","options":["la province de Limbourg","la province de Liège","la province de Namur","la province de Luxembourg"],"correct":1,"explication":"Les communes germanophones (Eupen, Saint-Vith…) sont à l'est de la province de Liège."},
                {"q":"La Région de Bruxelles-Capitale fait partie de la province de Brabant flamand.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Bruxelles-Capitale ne fait partie d'aucune province ; elle est entourée par le Brabant flamand."},
                {"q":"Combien de provinces compte la Région wallonne ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["5","cinq"],"explication":"Hainaut, Namur, Liège, Luxembourg et Brabant wallon."},
                {"q":"Laquelle de ces provinces se trouve en Région flamande ?","options":["le Luxembourg","le Hainaut","Namur","le Limbourg"],"correct":3,"explication":"Les provinces flamandes : Anvers, Limbourg, Brabant flamand, Flandre occidentale et Flandre orientale."},
                {"q":"Quel est le chef-lieu de la province de Hainaut ?","options":["Tournai","Charleroi","La Louvière","Mons"],"correct":3,"explication":"Charleroi est la plus grande ville du Hainaut, mais le chef-lieu est Mons."},
                {"q":"Quel est le chef-lieu de la province de Liège ?","options":["Spa","Huy","Verviers","Liège"],"correct":3,"explication":"La province de Liège a pour chef-lieu la ville de Liège, au bord de la Meuse."},
                {"q":"Quelle ville est à la fois chef-lieu d'une province et capitale de la Wallonie ?","options":["Liège","Charleroi","Mons","Namur"],"correct":3,"explication":"Namur est le chef-lieu de la province de Namur et la capitale de la Région wallonne."},
                {"q":"Quel est le chef-lieu de la province de Luxembourg ?","options":["Arlon","Luxembourg","Bastogne","Marche-en-Famenne"],"correct":0,"explication":"Arlon est le chef-lieu de la province belge ; Luxembourg est la capitale du Grand-Duché."},
                {"q":"Quel est le chef-lieu de la province de Brabant wallon ?","options":["Nivelles","Waterloo","Wavre","Louvain-la-Neuve"],"correct":2,"explication":"Wavre est le chef-lieu du Brabant wallon."},
                {"q":"Quel est le chef-lieu de la province de Brabant flamand ?","options":["Malines","Bruxelles","Louvain","Wavre"],"correct":2,"explication":"Louvain (Leuven) est le chef-lieu du Brabant flamand ; Bruxelles n'est dans aucune province."},
                {"q":"Anvers est le chef-lieu de la province de…","contexte":"Écris le nom de la province.","type":"saisie","clavier":"texte","reponse":["Anvers"],"explication":"La province d'Anvers a pour chef-lieu la ville d'Anvers, grand port sur l'Escaut."},
                {"q":"Quel est le chef-lieu de la province de Limbourg ?","options":["Maastricht","Tongres","Hasselt","Genk"],"correct":2,"explication":"Hasselt est le chef-lieu du Limbourg belge ; Maastricht est aux Pays-Bas."},
                {"q":"Quel est le chef-lieu de la province de Flandre occidentale ?","options":["Ypres","Bruges","Ostende","Courtrai"],"correct":1,"explication":"Bruges est le chef-lieu de la Flandre occidentale, la province de la côte."},
                {"q":"Quel est le chef-lieu de la province de Flandre orientale ?","options":["Alost","Saint-Nicolas","Gand","Bruges"],"correct":2,"explication":"Gand, au confluent de l'Escaut et de la Lys, est le chef-lieu de la Flandre orientale."},
                {"q":"Combien de pays voisins la Belgique a-t-elle ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["4","quatre"],"explication":"La France, le Luxembourg, l'Allemagne et les Pays-Bas."},
                {"q":"Lequel de ces pays n'est pas voisin de la Belgique ?","options":["le Luxembourg","la Suisse","l'Allemagne","la France"],"correct":1,"explication":"La Suisse n'a pas de frontière avec la Belgique."},
                {"q":"Quelle région belge n'a de frontière avec aucun pays étranger ?","options":["la Région de Bruxelles-Capitale","la Région flamande","la Communauté germanophone","la Région wallonne"],"correct":0,"explication":"Bruxelles-Capitale est entièrement entourée par la Flandre."},
                {"q":"Dans quel pays l'Escaut prend-il sa source ?","options":["en Allemagne","en Belgique","en France","aux Pays-Bas"],"correct":2,"explication":"L'Escaut nait en France, traverse Tournai, Gand et Anvers, puis finit aux Pays-Bas."},
                {"q":"Quelle grande ville portuaire belge est traversée par l'Escaut ?","options":["Charleroi","Liège","Anvers","Namur"],"correct":2,"explication":"Anvers, sur l'Escaut, possède l'un des plus grands ports d'Europe."},
                {"q":"Quelles villes belges la Meuse traverse-t-elle ?","options":["Namur et Liège","Mons et Tournai","Gand et Anvers","Bruges et Ostende"],"correct":0,"explication":"La Meuse vient de France, traverse Dinant, Namur et Liège, puis entre aux Pays-Bas."},
                {"q":"Quelle rivière se jette dans la Meuse à Namur ?","options":["la Sambre","l'Ourthe","la Lesse","l'Escaut"],"correct":0,"explication":"La Sambre, qui passe par Charleroi, rejoint la Meuse à Namur."},
                {"q":"Dans quelle mer l'Escaut et la Meuse finissent-ils leur course ?","options":["la mer Baltique","la Manche","la Méditerranée","la mer du Nord"],"correct":3,"explication":"Les deux fleuves traversent les Pays-Bas et se jettent dans la mer du Nord."},
                {"q":"Dans quelle partie de la Belgique se trouve l'Ardenne ?","options":["au sud-est","au nord-est","au centre","au nord-ouest"],"correct":0,"explication":"L'Ardenne, région de plateaux boisés, est au sud-est du pays."},
                {"q":"Quel est le point le plus haut de la Belgique ?","options":["la citadelle de Namur","le mont Kemmel","la Baraque de Fraiture","le signal de Botrange"],"correct":3,"explication":"Le signal de Botrange, dans les Hautes Fagnes, atteint 694 m."},
                {"q":"Où trouve-t-on la plaine maritime et les polders en Belgique ?","options":["le long de la Meuse","dans l'Ardenne","en Lorraine belge","le long de la côte"],"correct":3,"explication":"Les polders sont des terres basses et plates, gagnées sur la mer, près de la côte."},
                {"q":"Plus on va du nord-ouest vers le sud-est de la Belgique, plus le relief s'élève.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le pays monte de la plaine côtière jusqu'aux hauteurs de l'Ardenne."}
              ]
            }
          ]
        },
        {
          "id": "i2-viv",
          "matiere": "Le vivant",
          "titre": "La serre du vivant",
          "symbole": "♥",
          "description": "La digestion et la circulation du sang.",
          "hote": {
            "nom": "Le biologiste Germinal",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e2-viv-a",
              "titre": "Le voyage des aliments",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel est le trajet des aliments dans le tube digestif ?","contexte":"Choisis le bon ordre.","options":["bouche, œsophage, estomac, gros intestin, intestin grêle","bouche, œsophage, estomac, intestin grêle, gros intestin","bouche, trachée, estomac, intestin grêle, gros intestin","bouche, estomac, œsophage, intestin grêle, gros intestin"],"correct":1,"explication":"Les aliments passent par la bouche, l'œsophage, l'estomac, l'intestin grêle puis le gros intestin."},
                {"q":"Quel tube conduit les aliments de la gorge jusqu'à l'estomac ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["œsophage","oesophage","l'œsophage","l'oesophage"],"explication":"L'œsophage est un tube musclé qui relie la gorge à l'estomac."},
                {"q":"Dans quel organe la plupart des nutriments passent-ils dans le sang ?","options":["l'œsophage","l'estomac","le gros intestin","l'intestin grêle"],"correct":3,"explication":"C'est dans l'intestin grêle que les nutriments traversent la paroi et passent dans le sang : c'est l'absorption."},
                {"q":"Quel organe en forme de poche brasse les aliments avec un suc acide ?","options":["le pancréas","l'estomac","le foie","le gros intestin"],"correct":1,"explication":"Les muscles de l'estomac brassent les aliments et le suc gastrique, très acide, commence à les digérer."},
                {"q":"Que récupère surtout le gros intestin dans les restes d'aliments ?","options":["la bile","l'oxygène","la salive","l'eau"],"correct":3,"explication":"Le gros intestin absorbe une grande partie de l'eau des restes ; ceux-ci forment ensuite les selles."},
                {"q":"Les aliments passent par le foie avant d'arriver dans l'intestin.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Le foie ne fait pas partie du tube digestif : il envoie la bile dans l'intestin, mais les aliments n'y passent pas."},
                {"q":"Par où les restes non digérés sortent-ils du corps ?","options":["par les reins","par la vessie","par le nombril","par l'anus"],"correct":3,"explication":"Les restes non digérés forment les selles, qui sortent par l'anus, au bout du gros intestin."},
                {"q":"Pourquoi l'intestin grêle s'appelle-t-il « grêle » ?","options":["parce qu'il est court","parce qu'il est dur","parce qu'il est froid","parce qu'il est mince"],"correct":3,"explication":"« Grêle » veut dire mince : l'intestin grêle est plus étroit que le gros intestin, mais bien plus long."},
                {"q":"L'intestin grêle est plus long que le gros intestin.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'intestin grêle mesure plusieurs mètres ; le gros intestin est plus large mais beaucoup plus court."},
                {"q":"Comment les aliments avancent-ils dans l'œsophage ?","options":["grâce à la salive qui les pousse","grâce à l'air que l'on avale","uniquement grâce à leur poids","grâce aux contractions de ses muscles"],"correct":3,"explication":"Les muscles de l'œsophage se contractent en vagues et poussent les aliments vers l'estomac."},
                {"q":"On peut avaler un aliment même la tête en bas.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les contractions des muscles de l'œsophage poussent les aliments, même contre la pesanteur."},
                {"q":"Où la digestion commence-t-elle ?","options":["dans l'œsophage","dans la bouche","dans l'intestin grêle","dans l'estomac"],"correct":1,"explication":"Dès la bouche, les dents découpent les aliments et la salive commence à les transformer."},
                {"q":"Quel organe n'est jamais traversé par les aliments ?","options":["le foie","l'œsophage","l'intestin grêle","l'estomac"],"correct":0,"explication":"Le foie est une glande digestive : il fabrique la bile, mais les aliments ne passent pas par lui."},
                {"q":"Parmi ces organes, lequel les aliments atteignent-ils en dernier ?","contexte":"Choisis le bon ordre.","options":["le gros intestin","l'intestin grêle","l'œsophage","l'estomac"],"correct":0,"explication":"Le gros intestin est la dernière partie du tube digestif avant l'anus."},
                {"q":"Quel organe les aliments traversent-ils juste après l'estomac ?","contexte":"Choisis le bon ordre.","options":["l'œsophage","le gros intestin","le foie","l'intestin grêle"],"correct":3,"explication":"À la sortie de l'estomac, les aliments passent dans l'intestin grêle."},
                {"q":"Complète : l'ensemble des organes qui transforment les aliments forme l'appareil …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["digestif"],"explication":"L'appareil digestif comprend le tube digestif et les glandes digestives (glandes salivaires, foie, pancréas)."},
                {"q":"Que deviennent les nutriments absorbés dans l'intestin grêle ?","options":["Ils partent directement vers les poumons.","Ils restent stockés dans l'intestin.","Le sang les transporte dans tout le corps.","Ils sont rejetés dans les selles."],"correct":2,"explication":"Une fois dans le sang, les nutriments sont distribués à toutes les cellules du corps."},
                {"q":"La paroi de l'intestin grêle est couverte de minuscules replis qui facilitent l'absorption. Ce sont…","options":["les valvules","les alvéoles","les papilles","les villosités"],"correct":3,"explication":"Les villosités augmentent énormément la surface de l'intestin grêle, ce qui facilite le passage des nutriments."},
                {"q":"La digestion transforme les aliments en éléments assez petits pour passer dans le sang.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La digestion découpe et transforme les aliments en nutriments capables de traverser la paroi de l'intestin."},
                {"q":"Que deviennent les fibres des légumes, que notre corps ne digère pas ?","options":["Elles sont transformées en oxygène dans l'intestin.","Elles passent dans le sang comme les sucres du pain.","Elles restent pour toujours au fond de l'estomac.","Elles aident le transit et finissent dans les selles."],"correct":3,"explication":"Les fibres ne sont pas absorbées : elles facilitent l'avancée des restes dans l'intestin."},
                {"q":"Le tube digestif est…","options":["un sac fermé situé dans le ventre","un tuyau qui relie le cœur à l'estomac","un long tuyau qui va de la bouche à l'anus","un tuyau qui relie le nez aux poumons"],"correct":2,"explication":"Le tube digestif est un long conduit ouvert aux deux bouts : la bouche et l'anus."},
                {"q":"Dans quel organe arrivent les aliments après avoir descendu l'œsophage ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["estomac","l'estomac"],"explication":"L'œsophage débouche dans l'estomac, où les aliments sont brassés avec le suc gastrique."},
                {"q":"Après la digestion, ce qui n'a pas été absorbé…","options":["forme les selles","repart vers l'estomac","devient de l'urine","devient du sang"],"correct":0,"explication":"Les restes non absorbés, avec de l'eau et des microbes de l'intestin, forment les selles."},
                {"q":"Quel organe du tube digestif est le plus long ?","options":["l'intestin grêle","le gros intestin","l'œsophage","l'estomac"],"correct":0,"explication":"Replié dans le ventre, l'intestin grêle est la partie la plus longue du tube digestif."},
                {"q":"Pourquoi l'œsophage n'est-il pas l'organe de l'absorption ?","options":["Il est rempli d'air.","Il est trop large pour les nutriments.","Il fabrique la bile à la place.","Les aliments ne font qu'y passer rapidement."],"correct":3,"explication":"L'œsophage transporte les aliments en quelques secondes ; l'absorption se fait surtout dans l'intestin grêle."}
              ]
            },
            {
              "id": "e2-viv-b",
              "titre": "Dents, salive et sucs",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quelles dents coupent les aliments, comme des ciseaux ?","options":["les incisives","les prémolaires","les canines","les molaires"],"correct":0,"explication":"Les incisives, à l'avant de la bouche, sont plates et tranchantes : elles coupent."},
                {"q":"Quelles dents écrasent et broient les aliments ?","options":["les molaires","les canines","les incisives"],"correct":0,"explication":"Les molaires, au fond de la bouche, sont larges : elles broient les aliments."},
                {"q":"Quelles dents pointues déchirent les aliments ?","options":["les molaires","les canines","les incisives"],"correct":1,"explication":"Les canines sont pointues : elles servent à déchirer, par exemple la viande."},
                {"q":"Combien de dents possède un adulte qui a toutes ses dents de sagesse ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["32","trente-deux"],"explication":"La denture adulte complète compte 32 dents, dont 4 dents de sagesse."},
                {"q":"Combien de dents de lait possède un jeune enfant ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["20","vingt"],"explication":"Les jeunes enfants ont 20 dents de lait, remplacées peu à peu par les dents définitives."},
                {"q":"Quel est le rôle de la salive ?","options":["nettoyer l'air qui entre par la bouche ouverte","absorber les nutriments directement dans la bouche","humidifier les aliments et commencer leur digestion","rendre les aliments acides avant l'estomac"],"correct":2,"explication":"La salive ramollit les aliments pour les avaler et commence la digestion de l'amidon."},
                {"q":"Nolan mâche longtemps un morceau de pain sans l'avaler : il devient sucré. Pourquoi ?","options":["Le pain absorbe le sucre de la langue.","La salive transforme l'amidon en sucre.","Les dents fabriquent du sucre."],"correct":1,"explication":"La salive contient une substance qui transforme l'amidon du pain en sucre."},
                {"q":"Où la bile est-elle stockée avant d'être envoyée dans l'intestin ?","options":["dans la vessie, sous le ventre","dans l'estomac, près du foie","dans la vésicule biliaire","dans le pancréas, sous l'estomac"],"correct":2,"explication":"La bile, fabriquée par le foie, est stockée dans la vésicule biliaire, attachée au foie."},
                {"q":"La bile aide surtout à digérer…","options":["les fibres","le sel","l'eau","les graisses"],"correct":3,"explication":"La bile découpe les graisses en fines gouttelettes, plus faciles à digérer."},
                {"q":"Dans quel organe le pancréas déverse-t-il son suc digestif ?","options":["dans le gros intestin","dans l'œsophage","dans l'intestin grêle","dans l'estomac"],"correct":2,"explication":"Le suc pancréatique arrive au début de l'intestin grêle, où il poursuit la digestion."},
                {"q":"Le foie est le plus gros organe situé à l'intérieur du corps.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le foie, placé à droite sous le diaphragme, est le plus gros organe interne."},
                {"q":"Quel organe produit le suc gastrique ?","options":["le pancréas","l'intestin grêle","l'estomac","le foie"],"correct":2,"explication":"« Gastrique » vient d'un mot grec qui veut dire estomac : c'est lui qui produit ce suc."},
                {"q":"Comment est le suc gastrique ?","options":["très salé","très acide","sans aucun gout","très sucré"],"correct":1,"explication":"Le suc gastrique est très acide : il aide à digérer et tue beaucoup de microbes."},
                {"q":"L'émail des dents est la matière la plus dure du corps humain.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'émail recouvre la couronne de la dent ; c'est la substance la plus dure du corps."},
                {"q":"Qu'est-ce qui provoque les caries ?","options":["le calcium contenu dans le lait et le fromage","le froid des boissons glacées et des glaces","des bactéries qui transforment le sucre en acide","la salive qui ronge peu à peu l'émail"],"correct":2,"explication":"Les bactéries de la plaque dentaire fabriquent un acide à partir du sucre : il attaque l'émail."},
                {"q":"Combien de fois par jour conseille-t-on de se brosser les dents ?","options":["au moins deux fois","une seule fois","une fois par semaine"],"correct":0,"explication":"On se brosse les dents au moins deux fois par jour, environ deux minutes, surtout le soir."},
                {"q":"Les dents écrasent et l'estomac brasse les aliments. Que font, eux, les sucs digestifs ?","options":["Ils les poussent vers le gros intestin.","Ils les découpent avec de petites dents.","Ils les transforment en nutriments.","Ils les réchauffent avant l'intestin."],"correct":2,"explication":"Les sucs digestifs transforment chimiquement les aliments en nutriments."},
                {"q":"Pourquoi faut-il bien mâcher ses aliments ?","options":["pour éviter que la salive se mélange","pour garder les aliments plus froids","pour faciliter le travail des sucs digestifs","pour faire entrer plus d'air dans l'estomac"],"correct":2,"explication":"Bien mâchés, les aliments sont en petits morceaux : les sucs digestifs les attaquent plus facilement."},
                {"q":"Lequel de ces organes n'est PAS une glande digestive ?","options":["le pancréas","le cœur","le foie","une glande salivaire"],"correct":1,"explication":"Les glandes salivaires, le foie et le pancréas fabriquent des sucs digestifs ; le cœur est une pompe."},
                {"q":"Qu'est-ce qu'un nutriment ?","options":["un déchet rejeté dans les selles","un aliment qui n'a pas été digéré","un suc qui digère les aliments dans l'estomac","une petite substance qui nourrit le corps"],"correct":3,"explication":"Les nutriments sont les éléments obtenus par la digestion ; le sang les apporte aux cellules."},
                {"q":"Comment s'appelle la partie visible de la dent, recouverte d'émail ? La …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["couronne","la couronne"],"explication":"La couronne est la partie visible de la dent ; la racine est cachée dans la gencive et l'os."},
                {"q":"Quel organe, situé à droite sous le diaphragme, fabrique la bile ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["foie","le foie"],"explication":"Le foie fabrique la bile, stockée ensuite dans la vésicule biliaire."},
                {"q":"À quoi sert la langue pendant le repas ?","options":["à mélanger les aliments et à les pousser vers la gorge","à fabriquer la bile qui digère les graisses","à fermer la trachée pendant toute la journée","à couper les aliments en très petits morceaux"],"correct":0,"explication":"La langue mélange les aliments avec la salive, forme une boulette et la pousse vers la gorge."},
                {"q":"Les dents de sagesse poussent généralement vers l'âge de 6 ans.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les dents de sagesse poussent tard, à la fin de l'adolescence ou chez le jeune adulte, et parfois jamais."},
                {"q":"Par quelles dents les dents de lait sont-elles remplacées ?","options":["par les dents définitives","par les dents de sagesse","par les canines uniquement","par d'autres dents de lait"],"correct":0,"explication":"À partir de 6 ans environ, les dents de lait tombent et laissent la place aux dents définitives."}
              ]
            },
            {
              "id": "e2-viv-c",
              "titre": "Le cœur et le sang",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Le cœur est…","options":["un sac rempli d'air","une glande digestive","un os creux","un muscle creux"],"correct":3,"explication":"Le cœur est un muscle creux qui se contracte pour pousser le sang dans les vaisseaux."},
                {"q":"Combien de cavités le cœur possède-t-il ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["4","quatre"],"explication":"Le cœur a quatre cavités : deux oreillettes en haut et deux ventricules en bas."},
                {"q":"Comment s'appellent les vaisseaux qui conduisent le sang du cœur vers les organes ?","options":["les veines","les artères","les nerfs","les bronches"],"correct":1,"explication":"Les artères partent du cœur ; les veines y reviennent."},
                {"q":"Comment s'appellent les vaisseaux qui ramènent le sang vers le cœur ?","options":["les nerfs","les bronches","les veines","les artères"],"correct":2,"explication":"Les veines ramènent le sang vers le cœur."},
                {"q":"Comment s'appellent les vaisseaux très fins, plus fins qu'un cheveu, qui relient artères et veines ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["capillaires","les capillaires","capillaire","vaisseaux capillaires","les vaisseaux capillaires"],"explication":"Les capillaires sont si fins que les globules rouges y passent un par un ; les échanges s'y font."},
                {"q":"Quel est le rôle des globules rouges ?","options":["combattre les microbes","transporter l'oxygène","arrêter les saignements","digérer les graisses"],"correct":1,"explication":"Les globules rouges transportent l'oxygène des poumons vers tous les organes."},
                {"q":"Quel est le rôle des globules blancs ?","options":["arrêter les saignements des plaies","transporter les nutriments vers les cellules","défendre le corps contre les microbes","transporter l'oxygène dans le corps"],"correct":2,"explication":"Les globules blancs protègent le corps contre les microbes."},
                {"q":"À quoi servent les plaquettes du sang ?","options":["à combattre les virus","à fabriquer la bile","à boucher les petites plaies","à transporter l'oxygène"],"correct":2,"explication":"Les plaquettes aident à former un caillot qui arrête le saignement."},
                {"q":"Comment s'appelle la partie liquide du sang qui transporte les nutriments ?","options":["la salive","le plasma","la bile","le suc gastrique"],"correct":1,"explication":"Le plasma est la partie liquide du sang ; il transporte nutriments, déchets et dioxyde de carbone."},
                {"q":"Le sang qui circule dans les veines est bleu.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Le sang est toujours rouge, plus ou moins foncé ; les veines paraissent bleutées à travers la peau."},
                {"q":"Le côté droit du cœur reçoit le sang pauvre en oxygène. Vers où l'envoie-t-il ?","options":["vers le cerveau","vers l'estomac","vers les jambes","vers les poumons"],"correct":3,"explication":"Le cœur droit envoie le sang vers les poumons, où il se recharge en oxygène."},
                {"q":"Le côté gauche du cœur reçoit le sang riche en oxygène. Vers où l'envoie-t-il ?","options":["seulement vers les poumons","seulement vers l'intestin","vers tous les organes du corps","seulement vers le cerveau"],"correct":2,"explication":"Le cœur gauche pousse le sang riche en oxygène dans les artères qui irriguent tout le corps."},
                {"q":"Dans le cœur, le sang du côté droit se mélange au sang du côté gauche.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Une cloison sépare le cœur droit du cœur gauche : les deux sangs ne se mélangent pas."},
                {"q":"Où peut-on facilement sentir son pouls ?","options":["au poignet","sur un cheveu","sur le bout du nez","sur un ongle"],"correct":0,"explication":"Au poignet ou au cou, une artère passe près de la peau : on y sent les battements."},
                {"q":"À quoi correspond le pouls que l'on sent au poignet ?","options":["aux mouvements de respiration","aux battements du cœur","aux contractions de l'estomac","au passage de l'air dans le bras"],"correct":1,"explication":"À chaque battement, le cœur envoie une poussée de sang dans les artères : c'est le pouls."},
                {"q":"Quelle quantité de sang un adulte possède-t-il environ ?","options":["environ un demi-litre","environ 5 litres","environ 50 litres"],"correct":1,"explication":"Un adulte a environ 5 litres de sang ; un enfant en a moins."},
                {"q":"Quel organe pompe le sang dans tout le corps ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["cœur","coeur","le cœur","le coeur"],"explication":"Le cœur est la pompe de l'appareil circulatoire : il bat sans arrêt, toute la vie."},
                {"q":"Pourquoi le sang doit-il circuler sans arrêt ?","options":["pour remplir les poumons de sang","pour refroidir le cœur qui chauffe sans arrêt","pour pousser les aliments dans l'intestin","pour apporter oxygène et nutriments aux cellules"],"correct":3,"explication":"Toutes les cellules ont besoin en permanence d'oxygène et de nutriments apportés par le sang."},
                {"q":"Dans quels vaisseaux se font les échanges entre le sang et les organes ?","options":["dans les grosses veines","dans les capillaires","dans les grosses artères"],"correct":1,"explication":"Les parois des capillaires sont très fines : oxygène, nutriments et déchets les traversent."},
                {"q":"Où les globules rouges sont-ils fabriqués ?","options":["dans les poumons","dans l'estomac","dans le cœur","dans la moelle des os"],"correct":3,"explication":"Les cellules du sang sont fabriquées dans la moelle rouge, à l'intérieur de certains os."},
                {"q":"Les veines possèdent des valvules qui empêchent le sang de revenir en arrière.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les valvules des veines, surtout dans les jambes, aident le sang à remonter vers le cœur."},
                {"q":"Le sang part du cœur vers les poumons, puis revient au cœur. Pourquoi va-t-il aux poumons ?","options":["pour se refroidir un peu","pour déposer les nutriments","pour se charger en oxygène","pour fabriquer des globules blancs"],"correct":2,"explication":"Dans les alvéoles, le sang se charge en oxygène et se débarrasse du dioxyde de carbone."},
                {"q":"Quel trajet suit le sang quand il part du cœur vers un muscle ?","contexte":"Choisis le bon ordre.","options":["cœur, capillaire, artère, veine, cœur","cœur, veine, capillaire, artère, cœur","cœur, artère, capillaire, veine, cœur","cœur, artère, veine, capillaire, cœur"],"correct":2,"explication":"Le sang quitte le cœur par une artère, passe dans les capillaires du muscle et revient par une veine."},
                {"q":"Complète : les globules qui transportent l'oxygène sont les globules …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["rouges"],"explication":"Les globules rouges contiennent l'hémoglobine, qui fixe l'oxygène et donne au sang sa couleur."},
                {"q":"Où le cœur est-il situé ?","options":["dans le ventre, sous le foie","derrière les reins, au centre","entre les poumons, un peu à gauche","sous l'estomac, à droite"],"correct":2,"explication":"Le cœur est dans la cage thoracique, entre les deux poumons, la pointe tournée vers la gauche."}
              ]
            }
          ]
        },
        {
          "id": "i2-mat",
          "matiere": "Matière, énergie et techniques",
          "titre": "L'atelier des inventions",
          "symbole": "⚙",
          "description": "Les états de la matière et les mélanges.",
          "hote": {
            "nom": "La chimiste Cliquette",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e2-mat-a",
              "titre": "Solide, liquide ou gaz ?",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Dans quel état la matière a-t-elle une forme propre, qui ne change pas quand on la déplace ?","contexte":"États de la matière","options":["l'état liquide","l'état gazeux","l'état solide"],"correct":2,"explication":"Un solide garde sa forme : une brique reste une brique, même dans un autre récipient."},
                {"q":"Que fait un liquide qu'on verse dans un récipient ?","contexte":"États de la matière","options":["Il remplit tout le récipient jusqu'en haut","Il garde sa forme de départ","Il prend la forme du récipient"],"correct":2,"explication":"Un liquide n'a pas de forme propre : il épouse le fond du récipient, mais garde son volume."},
                {"q":"Que fait un gaz enfermé dans un récipient fermé ?","contexte":"États de la matière","options":["Il reste en boule au centre du récipient","Il se dépose au fond du récipient","Il occupe tout l'espace disponible"],"correct":2,"explication":"Un gaz n'a ni forme ni volume propres : il se répand dans tout l'espace disponible."},
                {"q":"L'air est de la matière : il a une masse.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"L'air pèse peu, mais il pèse : un ballon gonflé à bloc est un peu plus lourd que dégonflé."},
                {"q":"Quand on penche un verre d'eau au repos, comment reste la surface de l'eau ?","contexte":"États de la matière","options":["horizontale","penchée comme le verre","bombée vers le haut"],"correct":0,"explication":"La surface d'un liquide au repos reste toujours horizontale."},
                {"q":"Lequel de ces exemples est un gaz ?","contexte":"États de la matière","options":["la cire de bougie","le sable","la vapeur d'eau","le lait"],"correct":2,"explication":"La vapeur d'eau est de l'eau à l'état gazeux ; elle est d'ailleurs invisible."},
                {"q":"Le sable peut se verser comme un liquide. Pourtant, c'est un solide. Pourquoi ?","contexte":"États de la matière","options":["Il prend la forme de n'importe quel récipient","Chaque grain garde sa propre forme","Il n'a aucune masse"],"correct":1,"explication":"Le sable est fait de petits grains solides ; chaque grain garde sa forme, et la surface ne reste pas plane."},
                {"q":"Laquelle de ces matières peut-on facilement comprimer (réduire de volume en appuyant) ?","contexte":"États de la matière","options":["l'air d'une pompe à vélo","l'eau d'une bouteille","le bois d'une planche"],"correct":0,"explication":"Les gaz se compriment facilement ; les liquides et les solides presque pas."},
                {"q":"Un liquide garde la même forme quand on le verse dans un autre récipient.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Un liquide n'a pas de forme propre : il prend la forme de chaque récipient."},
                {"q":"Dans quel état se trouve l'huile d'olive à la température de la classe ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["liquide","l'état liquide","état liquide","l'etat liquide","etat liquide"],"explication":"L'huile coule et prend la forme de la bouteille : elle est liquide."},
                {"q":"Laquelle de ces matières est liquide à la température de la classe ?","contexte":"États de la matière","options":["la cire","le sel","l'air","l'huile"],"correct":3,"explication":"Le sel et la cire sont solides, l'air est un gaz ; l'huile est liquide."},
                {"q":"Léa enfonce bien droit un verre retourné dans un bac d'eau. L'eau ne monte pas jusqu'au fond du verre. Pourquoi ?","contexte":"États de la matière","options":["L'air du verre prend de la place","Le verre vide repousse l'eau","L'eau est trop lourde pour monter"],"correct":0,"explication":"Le verre n'est pas vide : il contient de l'air, qui occupe un espace et empêche l'eau de monter."},
                {"q":"Le sucre en poudre est un liquide, puisqu'on peut le verser.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Chaque grain de sucre garde sa forme : le sucre en poudre est un solide."},
                {"q":"Mehdi bouche avec son doigt la sortie d'une pompe à vélo, puis pousse sur le piston. Que se passe-t-il ?","contexte":"États de la matière","options":["Le piston s'enfonce jusqu'au bout sans effort","Le piston s'enfonce un peu, puis résiste","Le piston ne bouge pas du tout"],"correct":1,"explication":"L'air enfermé se laisse comprimer, mais de plus en plus difficilement : il repousse le piston."},
                {"q":"Quels sont les trois états de la matière ?","contexte":"États de la matière","options":["dur, liquide, gazeux","solide, mou, liquide","solide, liquide, gazeux"],"correct":2,"explication":"Toute matière peut être solide, liquide ou gazeuse ; mou et dur ne sont pas des états."},
                {"q":"Un morceau de pâte à modeler change de forme quand on l'écrase. Dans quel état est-il ?","contexte":"États de la matière","options":["à l'état liquide","à l'état solide","à l'état gazeux"],"correct":1,"explication":"La pâte à modeler garde la forme qu'on lui donne et ne coule pas : c'est un solide."},
                {"q":"Dans un ballon de baudruche gonflé, où se trouve l'air ?","contexte":"États de la matière","options":["surtout au fond du ballon","surtout près de l'embout","dans tout le ballon"],"correct":2,"explication":"Un gaz se répartit dans tout l'espace qui lui est offert."},
                {"q":"Je n'ai pas de forme propre et j'occupe tout l'espace du récipient qui m'enferme. Dans quel état suis-je ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["gazeux","gaz","l'état gazeux","état gazeux","un gaz","l'etat gazeux","etat gazeux"],"explication":"Seul un gaz occupe tout l'espace disponible."},
                {"q":"L'eau peut exister à l'état solide, liquide et gazeux.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"La glace est solide, l'eau du robinet est liquide, la vapeur d'eau est gazeuse."},
                {"q":"Comment appelle-t-on l'eau à l'état solide ?","contexte":"États de la matière","options":["la rosée","la glace","la buée","la vapeur"],"correct":1,"explication":"La glace est de l'eau solide ; la buée et la rosée sont liquides, la vapeur est un gaz."},
                {"q":"Pourquoi peut-on encore faire entrer de l'air dans un pneu de vélo déjà gonflé ?","contexte":"États de la matière","options":["Parce que l'air se comprime","Parce que l'air devient liquide","Parce que l'air disparait"],"correct":0,"explication":"Un gaz se comprime : on peut en faire entrer davantage dans le même espace."},
                {"q":"Ahmed verse un litre d'eau d'une bouteille dans une casserole. Que devient son volume ?","contexte":"États de la matière","options":["Il reste le même","Il devient plus petit","Il devient plus grand"],"correct":0,"explication":"Un liquide change de forme selon le récipient, mais garde son volume."},
                {"q":"Un solide garde toujours sa forme propre, même si on le change de récipient.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Une bille reste une bille, dans une boite comme dans un verre : un solide a une forme propre."},
                {"q":"Le lait, le jus d'orange et le sirop de grenadine sont tous…","contexte":"États de la matière","options":["des gaz","des liquides","des solides"],"correct":1,"explication":"Ils coulent et prennent la forme du verre : ce sont des liquides."},
                {"q":"Lequel de ces exemples n'est PAS de la matière ?","contexte":"États de la matière","options":["la lumière","le bois","l'eau","l'air"],"correct":0,"explication":"L'air, l'eau et le bois occupent un espace et ont une masse ; la lumière, non."},
                {"q":"Pourquoi ne peut-on pas empiler un liquide en tas, comme des briques ?","contexte":"États de la matière","options":["Parce qu'il n'a pas de forme propre","Parce qu'il est toujours invisible","Parce qu'il est toujours trop léger"],"correct":0,"explication":"Un liquide coule : sans récipient, il s'étale, car il n'a pas de forme propre."}
              ]
            },
            {
              "id": "e2-mat-b",
              "titre": "Fondre, geler, s'évaporer",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Comment s'appelle le passage de l'état solide à l'état liquide ?","contexte":"Changements d'état","options":["la condensation","la solidification","la fusion","l'évaporation"],"correct":2,"explication":"Fusion : solide → liquide, comme un glaçon qui fond."},
                {"q":"Comment s'appelle le passage de l'état liquide à l'état solide ?","contexte":"Changements d'état","options":["la vaporisation","la condensation","la fusion","la solidification"],"correct":3,"explication":"Solidification : liquide → solide, comme l'eau qui gèle."},
                {"q":"Comment s'appelle le passage de l'état gazeux à l'état liquide ?","contexte":"Changements d'état","options":["la fusion","la condensation","la solidification","la vaporisation"],"correct":1,"explication":"Condensation : gaz → liquide, comme la buée sur une vitre froide."},
                {"q":"Comment s'appelle le passage de l'état liquide à l'état gazeux ?","contexte":"Changements d'état","options":["la fusion","la solidification","la condensation","la vaporisation"],"correct":3,"explication":"Vaporisation : liquide → gaz ; lente, c'est l'évaporation ; à gros bouillons, c'est l'ébullition."},
                {"q":"Un glaçon posé sur la table devient de l'eau liquide. Comment s'appelle ce changement d'état ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["fusion","la fusion"],"explication":"Le passage de l'état solide à l'état liquide est la fusion."},
                {"q":"À quelle température la glace d'eau pure fond-elle ?","contexte":"Changements d'état","options":["0 °C","-10 °C","10 °C","100 °C"],"correct":0,"explication":"L'eau pure gèle et la glace fond à 0 °C."},
                {"q":"À quelle température l'eau pure bout-elle, au niveau de la mer ? (en °C)","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["100","100 °C","100°C","100 degrés","cent","100 degres"],"explication":"Au niveau de la mer, l'eau pure bout à 100 °C."},
                {"q":"Le matin, de petites gouttes couvrent l'intérieur de la fenêtre froide de la chambre. Quel changement d'état s'est produit ?","contexte":"Changements d'état","options":["la fusion","la condensation","l'évaporation","la solidification"],"correct":1,"explication":"La vapeur d'eau de l'air touche la vitre froide et redevient liquide : c'est la condensation."},
                {"q":"Le linge mouillé sèche sur le fil. Où est passée l'eau ?","contexte":"Changements d'état","options":["Elle a été absorbée par le fil","Elle s'est évaporée dans l'air","Elle a disparu pour toujours"],"correct":1,"explication":"L'eau est devenue vapeur d'eau, invisible, et s'est mêlée à l'air : c'est l'évaporation."},
                {"q":"L'eau d'une flaque ne peut s'évaporer que si elle atteint 100 °C.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"L'évaporation se fait à toute température ; à 100 °C, l'eau bout : c'est l'ébullition."},
                {"q":"Aya met une bouteille en plastique pleine d'eau, bien fermée, au congélateur. Le lendemain, la bouteille est gonflée. Pourquoi ?","contexte":"Changements d'état","options":["Le froid fait gonfler le plastique","L'eau prend moins de place en gelant","L'eau prend plus de place en gelant"],"correct":2,"explication":"En devenant glace, l'eau augmente de volume : elle pousse sur les parois."},
                {"q":"Un glaçon de 20 g fond complètement dans un bocal fermé. Quelle masse d'eau liquide obtient-on ?","contexte":"Changements d'état","options":["plus de 20 g","moins de 20 g","20 g"],"correct":2,"explication":"Lors d'un changement d'état, la matière ne disparait pas : la masse reste la même."},
                {"q":"Un glaçon flotte sur l'eau.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"La glace prend plus de place que la même masse d'eau liquide : elle est plus légère à volume égal et flotte."},
                {"q":"Au-dessus d'une casserole d'eau qui bout, on voit une petite « fumée » blanche. Qu'est-ce que c'est ?","contexte":"Changements d'état","options":["de la fumée de combustion","de l'air chaud coloré","de minuscules gouttes d'eau liquide","de la vapeur d'eau, qui est invisible"],"correct":2,"explication":"La vapeur d'eau est invisible ; en se refroidissant dans l'air, elle se condense en gouttelettes visibles."},
                {"q":"Le chocolat a fondu dans la main de Nolan. Au frigo, il redevient dur. Comment s'appelle ce dernier changement ?","contexte":"Changements d'état","options":["la condensation","la vaporisation","la solidification","la fusion"],"correct":2,"explication":"Le chocolat passe de l'état liquide à l'état solide : c'est une solidification."},
                {"q":"Que faut-il faire pour que de la glace fonde ?","contexte":"Changements d'état","options":["lui apporter de la chaleur","la refroidir encore","la placer dans un endroit sombre"],"correct":0,"explication":"La fusion a besoin de chaleur : la glace fond quand on la réchauffe au-dessus de 0 °C."},
                {"q":"On chauffe un glaçon dans une casserole jusqu'à ce qu'il n'en reste plus rien. Quels changements d'état se succèdent ?","contexte":"Changements d'état","options":["fusion puis vaporisation","solidification puis fusion","condensation puis fusion","vaporisation puis fusion"],"correct":0,"explication":"La glace fond d'abord (fusion), puis l'eau liquide devient vapeur (vaporisation)."},
                {"q":"En hiver, l'eau d'une flaque gèle. Elle passe…","contexte":"Changements d'état","options":["de l'état gazeux à l'état solide","de l'état solide à l'état liquide","de l'état liquide à l'état solide"],"correct":2,"explication":"L'eau liquide devient glace : c'est une solidification."},
                {"q":"Le passage lent de l'eau liquide en vapeur, sans bouillir, comme pour une flaque au soleil, s'appelle l'…","contexte":"Complète avec un mot.","type":"saisie","clavier":"texte","reponse":["évaporation","l'évaporation","evaporation","l'evaporation"],"explication":"L'évaporation est une vaporisation lente, qui se fait à la surface du liquide."},
                {"q":"Quand l'eau pure bout dans la casserole, sa température continue de monter tant qu'on chauffe.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Pendant l'ébullition, l'eau pure reste à 100 °C : la chaleur sert à la transformer en vapeur."},
                {"q":"Pourquoi une flaque sèche-t-elle plus vite un jour de soleil et de vent ?","contexte":"Changements d'état","options":["La chaleur et le vent accélèrent l'évaporation","Le soleil transforme l'eau en glace","Le vent pousse toute l'eau de la flaque dans les égouts"],"correct":0,"explication":"La chaleur et le vent font passer l'eau plus vite à l'état de vapeur."},
                {"q":"Une canette sortie du frigo se couvre de gouttes sur sa face extérieure. D'où vient cette eau ?","contexte":"Changements d'état","options":["de la boisson qui traverse le métal","de la vapeur d'eau de l'air","du métal de la canette qui fond"],"correct":1,"explication":"La vapeur d'eau de l'air se condense au contact de la canette froide."},
                {"q":"Le beurre fond dans une poêle tiède. Est-ce encore du beurre ?","contexte":"Changements d'état","options":["Non, il est devenu une sorte d'huile","Non, il est devenu de l'eau","Oui, il a seulement changé d'état"],"correct":2,"explication":"La fusion est un changement d'état : la matière reste la même."},
                {"q":"Quel est le changement d'état inverse de la fusion ?","contexte":"Changements d'état","options":["la condensation","la vaporisation","la solidification"],"correct":2,"explication":"Fusion : solide → liquide ; solidification : liquide → solide."},
                {"q":"Quel est le changement d'état inverse de la vaporisation ?","contexte":"Changements d'état","options":["la solidification","la fusion","la condensation"],"correct":2,"explication":"Vaporisation : liquide → gaz ; condensation : gaz → liquide."},
                {"q":"Dans un congélateur réglé à -18 °C, dans quel état se trouve l'eau ?","contexte":"Changements d'état","options":["liquide","solide","gazeux"],"correct":1,"explication":"En dessous de 0 °C, l'eau est gelée : elle est à l'état solide."}
              ]
            },
            {
              "id": "e2-mat-c",
              "titre": "Mélanger et séparer",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Inès verse une cuillère de sucre dans un verre d'eau et mélange. Elle ne voit plus le sucre. Que s'est-il passé ?","contexte":"Mélanges et solutions","options":["Le sucre a disparu pour toujours","Le sucre a fondu comme un glaçon","Le sucre s'est évaporé dans l'air","Le sucre s'est dissous dans l'eau"],"correct":3,"explication":"Le sucre est toujours là (l'eau est sucrée) : il s'est dissous ; ce n'est pas une fusion."},
                {"q":"Quand le sel se dissout dans l'eau, il fond.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Fondre, c'est passer de solide à liquide par la chaleur. Dans l'eau, le sel se dissout."},
                {"q":"Comment appelle-t-on de l'eau sucrée où l'on ne voit plus du tout le sucre ?","contexte":"Mélanges et solutions","options":["un mélange hétérogène","de l'eau pure","une solution"],"correct":2,"explication":"Une solution est un mélange où l'on ne distingue plus les constituants."},
                {"q":"Comment séparer le sable de l'eau dans un mélange d'eau et de sable ?","contexte":"Mélanges et solutions","options":["en ajoutant du sel","en filtrant","en remuant plus fort"],"correct":1,"explication":"Le filtre retient les grains de sable et laisse passer l'eau."},
                {"q":"Léa filtre de l'eau salée avec un filtre à café. Qu'obtient-elle sous le filtre ?","contexte":"Mélanges et solutions","options":["de l'eau toujours salée","de l'eau douce, sans sel","du sel sec, sans eau"],"correct":0,"explication":"Le sel dissous passe à travers le filtre avec l'eau."},
                {"q":"Comment récupérer le sel dissous dans de l'eau salée ?","contexte":"Mélanges et solutions","options":["en laissant reposer l'eau","en faisant évaporer l'eau","en filtrant l'eau"],"correct":1,"explication":"Quand l'eau s'évapore, le sel reste au fond : c'est ainsi qu'on récolte le sel dans les marais salants."},
                {"q":"Noah laisse reposer un bocal d'eau boueuse. La terre se dépose au fond. Comment s'appelle cette méthode ?","contexte":"Mélanges et solutions","options":["l'évaporation","la filtration","la dissolution","la décantation"],"correct":3,"explication":"Décanter, c'est laisser reposer pour que les particules les plus lourdes tombent au fond."},
                {"q":"Dans un verre, Adam verse de l'eau puis de l'huile. Que se passe-t-il ?","contexte":"Mélanges et solutions","options":["L'huile se dissout dans l'eau","L'huile reste au-dessus de l'eau","L'huile coule tout au fond du verre, sous l'eau"],"correct":1,"explication":"L'huile ne se mélange pas à l'eau et, plus légère, elle flotte dessus."},
                {"q":"On peut dissoudre autant de sel qu'on veut dans un verre d'eau.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Au-delà d'une certaine quantité, le sel ne se dissout plus et se dépose au fond : la solution est saturée."},
                {"q":"Zoé dissout 10 g de sel dans 200 g d'eau. Quelle est la masse de l'eau salée obtenue (en g) ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["210","210 g"],"explication":"Rien ne disparait en se dissolvant : 200 g + 10 g = 210 g."},
                {"q":"Pour que le sucre se dissolve plus vite dans son thé, Chloé peut…","contexte":"Mélanges et solutions","options":["remuer avec une cuillère","laisser le thé refroidir","ajouter un glaçon"],"correct":0,"explication":"Remuer aide le sucre à se dissoudre plus vite ; le froid, au contraire, ralentit la dissolution."},
                {"q":"Dans quelle eau le sucre se dissout-il le plus vite ?","contexte":"Mélanges et solutions","options":["dans l'eau froide","dans l'eau glacée","dans l'eau chaude"],"correct":2,"explication":"Plus l'eau est chaude, plus le sucre se dissout vite."},
                {"q":"Lequel de ces mélanges est une solution ?","contexte":"Mélanges et solutions","options":["de l'eau et du sable","de l'eau et des cailloux","de l'eau et du sirop de grenadine","de l'eau et de l'huile de tournesol"],"correct":2,"explication":"Le sirop se mélange complètement à l'eau : on ne distingue plus les deux, c'est une solution."},
                {"q":"Pour séparer de la limaille de fer mélangée à du sable sec, quel outil est le plus efficace ?","contexte":"Mélanges et solutions","options":["un verre d'eau","un filtre à café","un aimant"],"correct":2,"explication":"L'aimant attire le fer, mais pas le sable."},
                {"q":"Pour séparer des pâtes de leur eau de cuisson, on utilise…","contexte":"Mélanges et solutions","options":["un entonnoir","une passoire","un aimant"],"correct":1,"explication":"Les trous de la passoire laissent passer l'eau et retiennent les pâtes."},
                {"q":"Le sucre dissous dans l'eau est toujours présent, même si on ne le voit plus.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"On le reconnait au gout : l'eau est sucrée. Le sucre s'est dissous, il n'a pas disparu."},
                {"q":"Le sable se dissout-il dans l'eau ?","contexte":"Mélanges et solutions","options":["Oui, si on mélange longtemps","Non, il se dépose au fond","Oui, si l'eau est bien chaude"],"correct":1,"explication":"Le sable ne se dissout pas : il retombe au fond quand on arrête de remuer."},
                {"q":"Comment obtenir du sel propre à partir d'un mélange de sel, de sable et d'eau ?","contexte":"Mélanges et solutions","options":["décanter, puis remuer l'eau","filtrer, puis faire évaporer l'eau","faire évaporer l'eau, puis filtrer"],"correct":1,"explication":"Le filtre retient le sable ; l'eau salée passe. En s'évaporant, l'eau laisse le sel."},
                {"q":"Que retient un filtre à café quand on filtre de l'eau boueuse ?","contexte":"Mélanges et solutions","options":["l'eau de la boue","rien du tout","les grains de terre"],"correct":2,"explication":"Le filtre retient les particules solides et laisse passer l'eau."},
                {"q":"Une vinaigrette faite d'huile et de vinaigre se sépare quand on la laisse reposer. Pourquoi ?","contexte":"Mélanges et solutions","options":["L'huile devient solide quand elle reste au repos","L'huile ne se mélange pas au vinaigre","Le vinaigre s'évapore très vite"],"correct":1,"explication":"L'huile ne se dissout pas dans le vinaigre : au repos, elle remonte et forme une couche."},
                {"q":"Lequel de ces solides se dissout dans l'eau ?","contexte":"Mélanges et solutions","options":["un clou en fer","le sable du bac","une bille en verre","le sel de cuisine"],"correct":3,"explication":"Le sel de cuisine se dissout dans l'eau ; le sable, le verre et le fer, non."},
                {"q":"Filtrer de l'eau boueuse la rend toujours bonne à boire.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Le filtre retire les particules visibles, mais pas les microbes ni ce qui est dissous."},
                {"q":"Grâce à quoi les marais salants produisent-ils du sel ?","contexte":"Mélanges et solutions","options":["la filtration de l'eau de mer","l'évaporation de l'eau de mer","la fusion de l'eau de mer"],"correct":1,"explication":"Le soleil et le vent font évaporer l'eau de mer ; le sel reste dans les bassins."},
                {"q":"Laisser reposer un mélange pour que les particules lourdes tombent au fond s'appelle la …","contexte":"Complète avec un mot.","type":"saisie","clavier":"texte","reponse":["décantation","la décantation","decantation","la decantation"],"explication":"Décanter, c'est laisser reposer : les particules lourdes se déposent au fond."},
                {"q":"Quel mélange peut-on séparer par décantation ?","contexte":"Mélanges et solutions","options":["de l'eau et du sable","de l'eau et du sel","de l'eau et du sucre"],"correct":0,"explication":"Le sable ne se dissout pas et tombe au fond ; le sel et le sucre dissous ne se déposent pas."},
                {"q":"Pour qu'un morceau de sucre se dissolve plus vite, on peut aussi…","contexte":"Mélanges et solutions","options":["l'écraser en poudre","le garder entier","le mettre au frigo"],"correct":0,"explication":"En poudre, le sucre touche l'eau sur une plus grande surface : il se dissout plus vite."}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "i3",
      "niveau": 3,
      "titre": "Ile des Navigateurs",
      "sousTitre": "Niveau 3 · Pour les costauds",
      "couleur": "#2b8a3e",
      "symboles": [
        "3",
        "⏳",
        "N",
        "⚙"
      ],
      "ouvertParDefaut": true,
      "condition": {
        "quartier": "i2",
        "pourcent": 80
      },
      "agent": {
        "nom": "Le batelier Noé",
        "ferme": [
          "Ahoy ! Mon bateau ne t'emmène pas encore sur l'Ile des Navigateurs."
        ]
      },
      "habitants": [
        {
          "nom": "Le gardien Paul",
          "lignes": [
            "Le musée du temps est {b:i3-hist}.",
            "La tour des cartes est {b:i3-geo}."
          ],
          "indice": "Musée du temps : {b:i3-hist}. Tour des cartes : {b:i3-geo}."
        },
        {
          "nom": "La jardinière Iris",
          "lignes": [
            "La serre du vivant est {b:i3-viv}.",
            "Et l'atelier des inventions est {b:i3-mat}."
          ],
          "indice": "Serre du vivant : {b:i3-viv}. Atelier des inventions : {b:i3-mat}."
        },
        {
          "nom": "Le navigateur Éric",
          "lignes": [
            "Pour aller sur l'ile suivante, parle au passeur du ponton.",
            "Il t'emmène quand tu as 80 % des étoiles dans chaque bâtiment de cette ile."
          ],
          "indice": "Pour l'ile suivante : 80 % des étoiles dans chaque bâtiment, puis le bateau du ponton."
        }
      ],
      "batiments": [
        {
          "id": "i3-hist",
          "matiere": "Histoire",
          "titre": "Le musée du temps",
          "symbole": "⏳",
          "description": "Le Moyen Âge et les Temps modernes.",
          "hote": {
            "nom": "La châtelaine Aliénor",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e3-hist-a",
              "titre": "Des Francs aux châteaux forts",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel peuple germanique s'installe dans nos régions à la fin de l'Empire romain d'Occident ?","options":["les Gaulois","les Huns","les Francs","les Vikings"],"correct":2,"explication":"Les Francs s'installent dans nos régions aux IVe et Ve siècles ; ils donneront plus tard leur nom à la France."},
                {"q":"La tombe de Childéric, le père de Clovis, a été découverte dans une ville de nos régions. Laquelle ?","options":["Tongres","Bruges","Arlon","Tournai"],"correct":3,"explication":"Tournai fut une des premières capitales des Francs ; on y a découvert la tombe du roi Childéric."},
                {"q":"Clovis était le roi de quel peuple ?","options":["des Saxons","des Vikings","des Francs","des Romains"],"correct":2,"explication":"Clovis est le roi des Francs ; il agrandit fortement son royaume à la fin du Ve siècle."},
                {"q":"Vrai ou faux ? Clovis s'est fait baptiser et est devenu chrétien.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Vers l'an 500, Clovis est baptisé à Reims ; beaucoup de Francs deviennent chrétiens après lui."},
                {"q":"Quelle religion Clovis adopte-t-il en se faisant baptiser ?","options":["le culte des dieux romains","le christianisme","le culte des dieux gaulois","le judaïsme"],"correct":1,"explication":"Le baptême fait entrer une personne dans la religion chrétienne : Clovis devient chrétien."},
                {"q":"En quelle année Charlemagne est-il couronné empereur à Rome ?","options":["1302","800","476","1096"],"correct":1,"explication":"Le jour de Noël de l'an 800, Charlemagne est couronné empereur à Rome."},
                {"q":"Qui couronne Charlemagne empereur en l'an 800 ?","options":["le pape","l'évêque de Liège","le roi d'Angleterre","son père Pépin"],"correct":0,"explication":"C'est le pape Léon III qui pose la couronne sur la tête de Charlemagne, à Rome."},
                {"q":"Quelle ville, aujourd'hui en Allemagne tout près de la frontière belge, était la capitale préférée de Charlemagne ?","contexte":"Écris le nom de la ville.","type":"saisie","clavier":"texte","reponse":["Aix-la-Chapelle","aix-la-chapelle","Aix la Chapelle","aix la chapelle","Aachen","aachen"],"explication":"Charlemagne vivait surtout dans son palais d'Aix-la-Chapelle, où il est enterré."},
                {"q":"Pour contrôler son immense empire, Charlemagne envoie partout des inspecteurs. Comment les appelle-t-on ?","options":["les bourgmestres","les missi dominici","les moines copistes","les chevaliers errants"],"correct":1,"explication":"Les missi dominici (« envoyés du maitre ») vont par deux vérifier que les ordres de l'empereur sont respectés."},
                {"q":"Vrai ou faux ? Après la mort de Charlemagne, son empire est partagé entre ses petits-fils (traité de Verdun, 843).","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"En 843, le traité de Verdun partage l'empire en trois royaumes entre les petits-fils de Charlemagne."},
                {"q":"Dans un château fort, comment s'appelle la grande tour principale, la plus solide ?","options":["la herse","le rempart","le donjon","le beffroi"],"correct":2,"explication":"Le donjon est la tour la plus haute et la plus solide : c'est le dernier refuge du seigneur."},
                {"q":"Quel est le rôle du pont-levis d'un château fort ?","options":["conserver la nourriture pendant un long siège","fermer l'entrée en se relevant au-dessus des douves","lancer de lourdes pierres sur les ennemis","protéger le haut des murailles contre les flèches"],"correct":1,"explication":"Relevé, le pont-levis bouche la porte et empêche de franchir le fossé."},
                {"q":"Comment appelle-t-on le fossé rempli d'eau qui entoure certains châteaux forts ?","options":["les créneaux","la basse-cour","les douves","la herse"],"correct":2,"explication":"Les douves sont un fossé, souvent rempli d'eau, qui empêche l'ennemi d'approcher des murs."},
                {"q":"Par quelles ouvertures étroites dans les murs les archers tirent-ils leurs flèches à l'abri ?","options":["les douves","les vitraux","les lucarnes","les meurtrières"],"correct":3,"explication":"Les meurtrières sont des fentes étroites : l'archer tire sans presque être visible."},
                {"q":"Le château de Bouillon, dans la province de Luxembourg, a appartenu à un célèbre chef de la première croisade. Lequel ?","options":["Charlemagne","Clovis","Godefroy de Bouillon","Charles Quint"],"correct":2,"explication":"Godefroy de Bouillon part en 1096 pour la première croisade ; le château porte son nom."},
                {"q":"Dans une seigneurie, comment appelle-t-on le paysan qui n'est pas libre et dépend de son seigneur ?","options":["le bourgeois","le vassal","le chevalier","le serf"],"correct":3,"explication":"Le serf est attaché à la terre du seigneur : il ne peut pas la quitter librement."},
                {"q":"Qu'est-ce que la corvée au Moyen Âge ?","options":["une bataille entre deux seigneurs","un travail gratuit dû au seigneur","une fête au château du seigneur","un impôt payé à l'Église"],"correct":1,"explication":"La corvée est un travail non payé (labourer, réparer les chemins…) que les paysans doivent au seigneur."},
                {"q":"Comment s'appelle l'impôt d'environ un dixième des récoltes que les paysans versent à l'Église ?","options":["la dime","la taille","la corvée","la banalité"],"correct":0,"explication":"La dime (du latin « dixième ») est la part des récoltes donnée à l'Église."},
                {"q":"Le paysan doit payer pour utiliser le moulin, le four et le pressoir du seigneur. Comment s'appellent ces taxes ?","options":["les banalités","les fiefs","les dimes","les corvées"],"correct":0,"explication":"Les banalités sont les taxes payées pour utiliser le moulin, le four ou le pressoir du seigneur."},
                {"q":"Au Moyen Âge, la société est divisée en trois groupes. Quel groupe a pour rôle de prier ?","options":["les paysans","la noblesse","le clergé","les bourgeois"],"correct":2,"explication":"Le clergé prie, la noblesse combat et les paysans travaillent la terre."},
                {"q":"Comment appelle-t-on la cérémonie au cours de laquelle un jeune noble devient chevalier ?","options":["le tournoi","l'adoubement","le baptême","le couronnement"],"correct":1,"explication":"Lors de l'adoubement, le jeune noble reçoit ses armes et devient chevalier."},
                {"q":"Un vassal reçoit une terre de son seigneur en échange de sa fidélité. Comment s'appelle cette terre ?","options":["un fief","un donjon","une commune","une dime"],"correct":0,"explication":"Le fief est la terre confiée au vassal, qui promet en échange fidélité et aide militaire."},
                {"q":"Vrai ou faux ? Au Moyen Âge, la plupart des habitants de nos régions sont des paysans.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Au Moyen Âge, la grande majorité des gens vivent à la campagne et cultivent la terre."},
                {"q":"Vrai ou faux ? Les chevaliers sont le plus souvent des paysans pauvres.","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les chevaliers appartiennent à la noblesse : il faut être riche pour avoir un cheval et des armes."},
                {"q":"Quel évènement est le plus ancien ?","options":["le règne de Clovis","le couronnement de Charlemagne","la première croisade","le partage de l'empire de Charlemagne"],"correct":0,"explication":"Ordre : Clovis (vers 500), Charlemagne empereur (800), traité de Verdun (843), première croisade (1096)."},
                {"q":"Quel évènement est le plus récent ?","options":["le baptême de Clovis","le couronnement de Charlemagne","la chute de Rome (476)","la première croisade"],"correct":3,"explication":"La première croisade part en 1096 ; les autres évènements sont bien plus anciens."},
                {"q":"Quelle date marque, sur la frise, le début du Moyen Âge ?","options":["800","3500 av. J.-C.","1492","476"],"correct":3,"explication":"En 476, la chute de l'Empire romain d'Occident marque la fin de l'Antiquité et le début du Moyen Âge."},
                {"q":"Pourquoi construit-on souvent les châteaux forts sur une colline ou un rocher ?","options":["pour voir arriver l'ennemi et mieux se défendre","pour éviter de payer des impôts au roi","pour attirer les marchands des villes","pour être plus près des champs de blé"],"correct":0,"explication":"Un château en hauteur permet de surveiller les environs et rend l'attaque plus difficile."}
              ]
            },
            {
              "id": "e3-hist-b",
              "titre": "Villes, beffrois et métiers",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"À partir des XIe et XIIe siècles, pourquoi les villes de nos régions grandissent-elles ?","options":["grâce au chemin de fer","grâce à la construction des voies romaines","grâce aux usines et au charbon","grâce au commerce et à l'artisanat"],"correct":3,"explication":"Marchands et artisans s'installent en ville : le commerce fait grandir les villes."},
                {"q":"Comment appelle-t-on les habitants des villes au Moyen Âge ?","options":["les moines","les serfs","les vassaux","les bourgeois"],"correct":3,"explication":"Le mot « bourgeois » vient de « bourg » : c'est l'habitant d'une ville."},
                {"q":"Quel tissu fabriqué en Flandre (Bruges, Gand, Ypres) a fait la richesse de ces villes au Moyen Âge ?","options":["le cuir","la soie","le drap de laine","le coton"],"correct":2,"explication":"Les villes flamandes étaient célèbres dans toute l'Europe pour leur drap de laine."},
                {"q":"D'où venait surtout la laine utilisée par les drapiers flamands au Moyen Âge ?","options":["de Chine","d'Égypte","d'Angleterre","d'Amérique"],"correct":2,"explication":"La laine arrivait surtout d'Angleterre par bateau ; l'Amérique était encore inconnue des Européens."},
                {"q":"Qu'est-ce qu'une charte de franchise ?","options":["une carte des routes du commerce","un texte qui accorde des libertés à une ville","un livre de prières recopié à la main","un impôt payé chaque année par les paysans au seigneur"],"correct":1,"explication":"Par une charte, le seigneur accorde des libertés et des droits aux habitants d'une ville."},
                {"q":"Quel bâtiment est le symbole des libertés d'une ville au Moyen Âge ?","options":["le moulin","le donjon","le beffroi","le monastère"],"correct":2,"explication":"Le beffroi, tour de la ville, montre la puissance et les libertés des bourgeois."},
                {"q":"Lequel de ces rôles n'est PAS celui d'un beffroi ?","options":["loger le seigneur et sa famille","garder les chartes et le trésor","guetter les incendies et les ennemis","abriter la cloche qui rythme la ville"],"correct":0,"explication":"Le beffroi appartient à la ville ; le seigneur, lui, loge dans son château."},
                {"q":"Vrai ou faux ? Les beffrois de Belgique et du nord de la France sont inscrits au patrimoine mondial de l'UNESCO.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Depuis 1999 (puis 2005), de nombreux beffrois de Belgique et de France figurent au patrimoine mondial."},
                {"q":"En 1302, près de Courtrai, les milices des villes flamandes battent les chevaliers du roi de France. Comment appelle-t-on cette bataille ?","options":["la bataille des Ardennes","la bataille de Waterloo","la bataille de l'Yser","la bataille des Éperons d'or"],"correct":3,"explication":"Après la victoire, on ramassa les éperons dorés des chevaliers vaincus : d'où son nom."},
                {"q":"Comment appelle-t-on l'association qui regroupe les artisans d'un même métier dans une ville du Moyen Âge ?","options":["une croisade","une abbaye","une corporation","une seigneurie"],"correct":2,"explication":"La corporation fixe les règles du métier : prix, qualité, horaires, formation."},
                {"q":"Dans une corporation, quel est l'ordre correct pour progresser dans un métier ?","options":["apprenti, compagnon, maitre","maitre, compagnon, apprenti","apprenti, maitre, compagnon","compagnon, apprenti, maitre"],"correct":0,"explication":"On commence apprenti, on devient compagnon, puis maitre après avoir réussi un chef-d'œuvre."},
                {"q":"Pour devenir maitre, un compagnon doit réaliser un travail parfait jugé par les maitres. Comment l'appelle-t-on ?","options":["un chef-d'œuvre","un apprentissage","un adoubement","une corvée"],"correct":0,"explication":"Le chef-d'œuvre prouve que le compagnon maitrise parfaitement son métier."},
                {"q":"Dans une corporation, comment appelle-t-on le jeune qui commence à apprendre le métier chez un maitre ?","contexte":"Écris un seul mot.","type":"saisie","clavier":"texte","reponse":["apprenti","un apprenti","l'apprenti","Apprenti"],"explication":"L'apprenti vit chez le maitre, qui le loge, le nourrit et lui apprend le métier."},
                {"q":"Pourquoi certaines rues anciennes s'appellent-elles « rue des Bouchers » ou « rue des Tanneurs » ?","options":["le seigneur y logeait ses soldats","les artisans d'un métier s'y regroupaient","on y vendait tous les produits de la ville","les moines y recopiaient leurs livres"],"correct":1,"explication":"Au Moyen Âge, les artisans d'un même métier travaillaient souvent dans la même rue."},
                {"q":"Quel style d'église a des murs épais, des arcs arrondis en plein cintre et de petites fenêtres ?","options":["le style roman","le style moderne","le style romain","le style gothique"],"correct":0,"explication":"L'art roman : murs épais, arcs arrondis, petites fenêtres, intérieur assez sombre."},
                {"q":"Quel style de cathédrale a des arcs brisés, de grandes fenêtres à vitraux et des arcs-boutants ?","options":["le style romain","le style gothique","le style roman","le style baroque"],"correct":1,"explication":"L'art gothique élève des églises hautes et lumineuses grâce aux arcs brisés et aux arcs-boutants."},
                {"q":"À quoi servent les arcs-boutants d'une cathédrale gothique ?","options":["à évacuer l'eau de pluie du toit","à soutenir les murs de l'extérieur","à sonner les heures de la journée","à faire entrer davantage de lumière"],"correct":1,"explication":"Les arcs-boutants épaulent les murs de l'extérieur, ce qui permet d'ouvrir de grandes fenêtres."},
                {"q":"Vrai ou faux ? La cathédrale Notre-Dame de Tournai mélange le style roman et le style gothique.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Sa nef est romane et son chœur gothique : on y voit les deux styles côte à côte."},
                {"q":"Pourquoi les vitraux des églises représentent-ils souvent des scènes de la Bible ?","options":["pour remplacer les cloches pendant les fêtes","pour enseigner la Bible à ceux qui ne savent pas lire","pour montrer aux visiteurs la richesse des paysans","pour empêcher le vent froid d'entrer dans l'église"],"correct":1,"explication":"La plupart des gens ne savaient pas lire : les images racontaient les histoires de la Bible."},
                {"q":"Au Moyen Âge, qui recopie les livres à la main dans les monastères ?","options":["les moines copistes","les serfs","les chevaliers du seigneur","les bourgeois"],"correct":0,"explication":"Avant l'imprimerie, les moines copistes recopiaient et décoraient les livres à la main."},
                {"q":"Lequel de ces documents est une trace du passé datant du Moyen Âge ?","options":["une maquette de château faite en classe","une bande dessinée sur les chevaliers","un film tourné en 2015 sur un château","une charte écrite en 1250 sur parchemin"],"correct":3,"explication":"Une trace du passé a été produite à l'époque étudiée ; les autres ont été faits aujourd'hui."},
                {"q":"Un dessin réalisé aujourd'hui pour montrer un marché au Moyen Âge est…","options":["une trace du passé","un objet archéologique","une source écrite médiévale","un document reconstitué"],"correct":3,"explication":"Il a été fait récemment pour imaginer le passé : c'est un document reconstitué."},
                {"q":"Vrai ou faux ? Le beffroi de Bruges, construit au Moyen Âge, est une trace du passé.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le beffroi date du Moyen Âge et est arrivé jusqu'à nous : c'est une trace du passé."},
                {"q":"Vrai ou faux ? Un film récent sur Charlemagne est une trace du passé de l'époque de Charlemagne.","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Un film récent est un document reconstitué : il n'a pas été produit à l'époque de Charlemagne."},
                {"q":"Quel évènement est le plus ancien ?","options":["la construction du beffroi de Bruges","le règne de Charlemagne","la bataille des Éperons d'or","le voyage de Christophe Colomb"],"correct":1,"explication":"Charlemagne (vers 800) vient avant le beffroi de Bruges (XIIIe s.), Courtrai (1302) et Colomb (1492)."},
                {"q":"Que construisent de nombreuses villes du Moyen Âge pour se protéger ?","options":["des remparts percés de portes","des terrils de charbon","des canaux pour les bateaux des marchands","des voies romaines pavées"],"correct":0,"explication":"Les remparts entourent la ville ; on y entre par des portes fermées la nuit."},
                {"q":"Au Moyen Âge, à quoi servaient surtout les halles aux draps d'Ypres ?","options":["à enfermer les prisonniers","à prier et célébrer la messe","à vendre et entreposer le drap","à loger les chevaliers du comte"],"correct":2,"explication":"Les halles étaient un grand marché couvert où l'on stockait et vendait le drap."},
                {"q":"Sur la frise chronologique, entre quelles dates se situe le Moyen Âge ?","options":["de 1492 à 1789","de 1789 à aujourd'hui","de 476 à 1492","de 3500 av. J.-C. à 476"],"correct":2,"explication":"Le Moyen Âge va de la chute de Rome (476) à l'arrivée de Colomb en Amérique (1492)."}
              ]
            },
            {
              "id": "e3-hist-c",
              "titre": "Imprimerie et grandes découvertes",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Qui met au point l'imprimerie à caractères mobiles en métal, vers 1450 ?","options":["Gutenberg","Christophe Colomb","Charlemagne","Mercator"],"correct":0,"explication":"Vers 1450, Gutenberg invente l'imprimerie à caractères mobiles en métal."},
                {"q":"Avant l'imprimerie, comment fabriquait-on les livres en Europe ?","options":["on les peignait sur les murs","on les tapait à la machine","on les gravait sur des tablettes","on les recopiait à la main"],"correct":3,"explication":"Chaque livre était recopié à la main, ce qui prenait des mois."},
                {"q":"Quelle est la conséquence principale de l'invention de l'imprimerie ?","options":["les livres disparaissent des bibliothèques","les livres deviennent nombreux et moins chers","les livres deviennent plus chers et plus rares","seuls les moines peuvent encore lire"],"correct":1,"explication":"On produit vite beaucoup d'exemplaires : les livres et les idées circulent davantage."},
                {"q":"Vrai ou faux ? Grâce à l'imprimerie, on produit un livre plus vite qu'en le recopiant à la main.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La presse imprime de nombreuses pages identiques bien plus vite qu'un copiste."},
                {"q":"Comment appelle-t-on l'invention de Gutenberg qui permet de reproduire un texte en de nombreux exemplaires ?","contexte":"Écris le nom de l'invention.","type":"saisie","clavier":"texte","reponse":["imprimerie","l'imprimerie","presse","la presse","presse à imprimer","la presse à imprimer","Imprimerie","presse a imprimer","la presse a imprimer"],"explication":"L'imprimerie permet de reproduire rapidement un même texte en de nombreux exemplaires."},
                {"q":"Dans quelle ville de nos régions l'imprimeur Christophe Plantin installe-t-il son grand atelier au XVIe siècle ?","options":["Arlon","Namur","Anvers","Mons"],"correct":2,"explication":"L'atelier de Plantin à Anvers est aujourd'hui le musée Plantin-Moretus, au patrimoine mondial."},
                {"q":"En quelle année Christophe Colomb atteint-il l'Amérique ?","options":["1492","1789","1830","1302"],"correct":0,"explication":"En 1492, Colomb traverse l'Atlantique et atteint les iles des Caraïbes."},
                {"q":"Que cherchait Christophe Colomb en naviguant vers l'ouest ?","options":["un nouveau continent inconnu","des terres glacées au nord","une route vers le sud de l'Afrique","une route vers les Indes et l'Asie"],"correct":3,"explication":"Colomb pensait rejoindre l'Asie par l'ouest ; il ignorait que l'Amérique se trouvait sur sa route."},
                {"q":"Pour quel pays Christophe Colomb entreprend-il son voyage de 1492 ?","options":["la France","la Belgique","l'Espagne","l'Angleterre"],"correct":2,"explication":"Colomb, né à Gênes, navigue pour les rois d'Espagne ; la Belgique n'existait pas encore."},
                {"q":"Combien de navires Christophe Colomb emmène-t-il lors de son premier voyage en 1492 ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["3","trois","Trois"],"explication":"Ses trois navires s'appelaient la Santa María, la Pinta et la Niña."},
                {"q":"Comment s'appelle le navire léger et rapide utilisé par les explorateurs du XVe siècle ?","options":["la galère","la caravelle","le paquebot","le drakkar"],"correct":1,"explication":"La caravelle est un navire léger, capable de naviguer loin en haute mer."},
                {"q":"Quels instruments aident les marins du XVe siècle à s'orienter en mer ?","options":["le baromètre et le radar","le GPS et la longue-vue","le radar et le sonar","la boussole et l'astrolabe"],"correct":3,"explication":"La boussole indique le nord ; l'astrolabe aide à se situer grâce aux astres."},
                {"q":"Pourquoi a-t-on appelé « Indiens » les habitants de l'Amérique ?","options":["Colomb croyait être arrivé aux Indes","Colomb était lui-même né en Inde","ils parlaient la langue de l'Inde","ils étaient venus d'Inde en bateau"],"correct":0,"explication":"Colomb pensait avoir atteint les Indes (l'Asie) : il a donc appelé les habitants « Indiens »."},
                {"q":"Quel explorateur portugais ouvre la route maritime vers l'Inde en contournant l'Afrique, en 1498 ?","options":["Gutenberg","Christophe Colomb","Vasco de Gama","Magellan"],"correct":2,"explication":"Vasco de Gama contourne l'Afrique par le sud et atteint l'Inde en 1498."},
                {"q":"Quelle expédition réalise le premier tour du monde, de 1519 à 1522 ?","options":["celle de Colomb","celle de Magellan","celle de Charlemagne","celle de Vasco de Gama"],"correct":1,"explication":"L'expédition de Magellan fait le premier tour du monde ; Magellan meurt en route."},
                {"q":"Vrai ou faux ? Magellan est rentré vivant de son tour du monde.","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Magellan est tué aux Philippines en 1521 ; Elcano ramène le dernier navire en Espagne."},
                {"q":"Que recherchaient surtout les Européens en Asie lors des grandes explorations ?","options":["du charbon et du fer","du pétrole et du gaz","des épices, de la soie et de l'or","du charbon, du fer et du bois de chêne"],"correct":2,"explication":"Les épices et la soie d'Asie valaient très cher en Europe."},
                {"q":"Quel cartographe, né à Rupelmonde en Flandre, est célèbre pour ses cartes du monde ?","options":["Godefroy de Bouillon","Gérard Mercator","Christophe Plantin","Vasco de Gama"],"correct":1,"explication":"Mercator, né à Rupelmonde en 1512, a dessiné une carte du monde célèbre en 1569."},
                {"q":"Quel empereur, né à Gand en 1500, règne sur nos régions, sur l'Espagne et sur des terres d'Amérique ?","options":["Napoléon","Charlemagne","Charles Quint","Léopold Ier"],"correct":2,"explication":"Charles Quint, né à Gand, dirige un immense empire « sur lequel le soleil ne se couche jamais »."},
                {"q":"Lequel de ces aliments a été rapporté d'Amérique en Europe après les grandes explorations ?","options":["le chou de Bruxelles","la pomme de terre","la pomme","le blé"],"correct":1,"explication":"La pomme de terre vient d'Amérique ; blé, pomme et chou étaient déjà connus en Europe."},
                {"q":"Laquelle de ces conséquences de la conquête de l'Amérique est exacte ?","options":["beaucoup d'Amérindiens meurent de maladies et de guerres","l'Amérique reste inconnue des Européens","les Amérindiens traversent l'océan et conquièrent l'Europe","les Européens ne rapportent rien d'Amérique"],"correct":0,"explication":"Guerres, travail forcé et maladies venues d'Europe tuent un très grand nombre d'Amérindiens."},
                {"q":"Les Espagnols ont conquis l'empire des Aztèques. Dans quel pays actuel se trouvait cet empire ?","options":["le Canada","le Pérou","le Brésil","le Mexique"],"correct":3,"explication":"Les Aztèques vivaient au Mexique ; les Incas, eux, vivaient au Pérou."},
                {"q":"Vrai ou faux ? Des millions d'Africains ont été réduits en esclavage et emmenés de force en Amérique.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Après les grandes explorations, la traite des esclaves déporte des millions d'Africains vers l'Amérique."},
                {"q":"Sur la frise, quel évènement marque la fin du Moyen Âge et le début des Temps modernes ?","options":["l'arrivée de Colomb en Amérique","la Révolution française","le couronnement de Charlemagne","la chute de l'Empire romain d'Occident"],"correct":0,"explication":"En Belgique, on fait commencer les Temps modernes en 1492, avec l'arrivée de Colomb en Amérique."},
                {"q":"Entre quelles dates se situent les Temps modernes ?","options":["de 800 à 1302","de 476 à 1492","de 1789 à aujourd'hui","de 1492 à 1789"],"correct":3,"explication":"Les Temps modernes vont de 1492 (Colomb) à 1789 (Révolution française)."},
                {"q":"Quel évènement est le plus récent ?","options":["le premier tour du monde","la bataille des Éperons d'or","l'arrivée de Colomb en Amérique","l'invention de l'imprimerie"],"correct":0,"explication":"Ordre : Courtrai (1302), imprimerie (vers 1450), Colomb (1492), tour du monde (1519-1522)."},
                {"q":"Une carte du monde dessinée par Mercator en 1569 est…","options":["un document reconstitué","une trace du passé","une photographie d'époque","une carte inventée aujourd'hui"],"correct":1,"explication":"Elle a été réalisée en 1569, à l'époque étudiée : c'est une trace du passé."},
                {"q":"Pour les Européens de 1492, comment est désignée l'Amérique ?","options":["les « Terres australes »","le « Royaume du Nord »","le « Nouveau Monde »","le « Vieux Continent »"],"correct":2,"explication":"Inconnue des Européens jusque-là, l'Amérique est appelée le « Nouveau Monde »."}
              ]
            }
          ]
        },
        {
          "id": "i3-geo",
          "matiere": "Géographie",
          "titre": "La tour des cartes",
          "symbole": "N",
          "description": "Climats, zones thermiques et système solaire.",
          "hote": {
            "nom": "Le météorologue Armand",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e3-geo-a",
              "titre": "Les zones de la Terre",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Entre quelles lignes imaginaires se trouve la zone chaude ?","options":["entre les deux cercles polaires","entre l'équateur et un pôle","entre les deux tropiques","entre un tropique et un cercle polaire"],"correct":2,"explication":"La zone chaude s'étend de part et d'autre de l'équateur, entre le tropique du Cancer et celui du Capricorne."},
                {"q":"En comptant séparément celles du nord et du sud, combien de zones thermiques compte la Terre ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["5","cinq"],"explication":"Une zone chaude, deux zones tempérées et deux zones polaires : cela fait 5 zones."},
                {"q":"Combien de zones tempérées y a-t-il sur la Terre ?","options":["2","1","3","4"],"correct":0,"explication":"Il y a une zone tempérée dans l'hémisphère nord et une autre dans l'hémisphère sud."},
                {"q":"Dans quelle zone thermique se trouve la Belgique ?","options":["la zone tempérée du sud","la zone tempérée du nord","la zone polaire du nord","la zone chaude"],"correct":1,"explication":"La Belgique est dans l'hémisphère nord, entre le tropique du Cancer et le cercle polaire arctique."},
                {"q":"Comment s'appelle le tropique situé dans l'hémisphère nord ? Tropique du…","type":"saisie","clavier":"texte","reponse":["Cancer","cancer","tropique du Cancer","le tropique du Cancer","du Cancer"],"explication":"Le tropique du Cancer est au nord de l'équateur ; le tropique du Capricorne est au sud."},
                {"q":"Quelle ligne imaginaire marque la limite de la zone polaire du sud ?","options":["le cercle polaire antarctique","le cercle polaire arctique","le tropique du Capricorne","le tropique du Cancer"],"correct":0,"explication":"Au sud, la zone polaire commence au cercle polaire antarctique ; au nord, au cercle polaire arctique."},
                {"q":"La zone chaude se trouve de part et d'autre de l'équateur.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'équateur passe au milieu de la zone chaude, entre les deux tropiques."},
                {"q":"Dans quelle zone le Soleil peut-il passer exactement au-dessus de nos têtes (au zénith) ?","options":["dans la zone tempérée","dans la zone chaude","dans la zone polaire"],"correct":1,"explication":"Le Soleil ne passe au zénith qu'entre les deux tropiques, c'est-à-dire dans la zone chaude."},
                {"q":"Qu'observe-t-on au-delà des cercles polaires ?","options":["des hivers aussi chauds que les étés","deux saisons des pluies chaque année","des jours ou des nuits de 24 heures","un Soleil toujours au zénith à midi"],"correct":2,"explication":"Au-delà des cercles polaires, il y a des jours où le Soleil ne se couche pas et des jours où il ne se lève pas."},
                {"q":"En général, plus on s'éloigne de l'équateur pour aller vers un pôle…","options":["plus il fait froid","plus il fait chaud","plus il pleut","plus il fait humide"],"correct":0,"explication":"En s'approchant des pôles, les rayons du Soleil arrivent de plus en plus inclinés et chauffent moins."},
                {"q":"Pourquoi fait-il plus chaud près de l'équateur ?","options":["les rayons solaires y arrivent très penchés","la Terre y est plus proche du Soleil","les nuits y sont beaucoup plus courtes","les rayons solaires y arrivent presque droits"],"correct":3,"explication":"Des rayons qui arrivent presque à la verticale concentrent leur chaleur sur une petite surface."},
                {"q":"En juillet, c'est l'été en Belgique. Quelle saison est-ce alors en Australie ?","options":["le printemps","l'été","l'hiver","l'automne"],"correct":2,"explication":"Les saisons sont inversées entre l'hémisphère nord et l'hémisphère sud, où se trouve l'Australie."},
                {"q":"Yasmine passe Noël chez son oncle à Buenos Aires, en Argentine. Quel temps l'attend ?","options":["un temps d'hiver","un temps d'automne","un temps d'été","un temps de printemps"],"correct":2,"explication":"L'Argentine est dans l'hémisphère sud : en décembre, c'est l'été là-bas."},
                {"q":"Quand c'est l'hiver dans l'hémisphère nord, c'est aussi l'hiver dans l'hémisphère sud.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les saisons sont inversées : quand c'est l'hiver au nord, c'est l'été au sud."},
                {"q":"Dans lequel de ces pays les saisons sont-elles inversées par rapport à la Belgique ?","options":["l'Afrique du Sud","le Canada","le Japon","la Norvège"],"correct":0,"explication":"L'Afrique du Sud est dans l'hémisphère sud ; les trois autres pays sont, comme nous, dans l'hémisphère nord."},
                {"q":"Dans quelle zone thermique se trouve la plus grande partie de l'Europe ?","options":["la zone chaude","la zone polaire","la zone tempérée"],"correct":2,"explication":"Presque toute l'Europe est entre le tropique du Cancer et le cercle polaire arctique."},
                {"q":"Quelle région d'Europe se trouve en grande partie au-delà du cercle polaire arctique ?","options":["la Bretagne","la Laponie","la Sicile","la Bavière"],"correct":1,"explication":"La Laponie, au nord de la Scandinavie et de la Finlande, connait le jour et la nuit polaires."},
                {"q":"Quel continent se trouve presque entièrement dans la zone polaire du sud ?","options":["l'Antarctique","l'Océanie","l'Afrique","l'Amérique"],"correct":0,"explication":"L'Antarctique entoure le pôle Sud et se trouve presque tout entier au-delà du cercle polaire antarctique."},
                {"q":"Quel océan se trouve dans la zone polaire du nord ?","options":["l'océan Indien","l'océan Austral","l'océan Arctique","l'océan Pacifique"],"correct":2,"explication":"L'océan Arctique entoure le pôle Nord ; l'océan Austral entoure l'Antarctique, au sud."},
                {"q":"Lequel de ces pays est traversé par l'équateur ?","options":["le Maroc","l'Égypte","le Kenya","la Tunisie"],"correct":2,"explication":"L'équateur traverse le centre de l'Afrique, notamment le Kenya ; les trois autres pays sont au nord de l'Afrique."},
                {"q":"Comment appelle-t-on la période où il fait nuit 24 heures sur 24 au-delà d'un cercle polaire ?","type":"saisie","clavier":"texte","reponse":["nuit polaire","la nuit polaire","une nuit polaire"],"explication":"Pendant la nuit polaire, le Soleil ne se lève pas ; pendant le jour polaire, il ne se couche pas."},
                {"q":"Au pôle Nord, vers le 21 juin, le Soleil ne se couche pas.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"En juin, l'hémisphère nord est penché vers le Soleil : c'est le jour polaire au pôle Nord."},
                {"q":"Une ville est située exactement sur le tropique du Capricorne. Dans quel hémisphère se trouve-t-elle ?","options":["l'hémisphère nord","sur l'équateur","l'hémisphère sud"],"correct":2,"explication":"Le tropique du Capricorne se trouve au sud de l'équateur, dans l'hémisphère sud."},
                {"q":"Tu pars de l'équateur et tu voyages vers le pôle Nord. Quelle ligne rencontres-tu en premier ?","options":["le tropique du Cancer","le cercle polaire arctique","le tropique du Capricorne","le cercle polaire antarctique"],"correct":0,"explication":"Du sud vers le nord : équateur, tropique du Cancer, cercle polaire arctique, puis pôle Nord."},
                {"q":"Dans la zone tempérée, combien de saisons distingue-t-on habituellement ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["4","quatre"],"explication":"Dans la zone tempérée, on distingue le printemps, l'été, l'automne et l'hiver."},
                {"q":"Dans quelle zone thermique vivent les ours blancs ?","options":["la zone polaire du sud","la zone polaire du nord","la zone tempérée du sud","la zone chaude"],"correct":1,"explication":"L'ours blanc vit sur la banquise de l'Arctique, autour du pôle Nord. Il n'y en a pas en Antarctique."},
                {"q":"Dans quelle zone thermique vivent les manchots empereurs ?","options":["la zone polaire du sud","la zone polaire du nord","la zone tempérée du nord","la zone chaude"],"correct":0,"explication":"Les manchots empereurs vivent en Antarctique, autour du pôle Sud."}
              ]
            },
            {
              "id": "e3-geo-b",
              "titre": "Les grands climats",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Chaud toute l'année, pluies abondantes presque tous les jours, pas de saison sèche. Quel climat est décrit ?","options":["le climat équatorial","le climat tropical","le climat désertique","le climat méditerranéen"],"correct":0,"explication":"Le climat équatorial, près de l'équateur, est chaud et très humide toute l'année."},
                {"q":"Chaud toute l'année, avec une saison des pluies et une saison sèche. Quel climat est décrit ?","options":["le climat équatorial","le climat océanique","le climat tropical","le climat polaire"],"correct":2,"explication":"Le climat tropical alterne une saison humide et une saison sèche, mais il fait chaud toute l'année."},
                {"q":"Presque jamais de pluie, des journées brulantes et des nuits fraiches. Quel climat est décrit ?","options":["le climat équatorial","le climat continental","le climat désertique","le climat océanique"],"correct":2,"explication":"Le désert reçoit très peu de pluie ; sans nuages, la chaleur du jour s'échappe vite la nuit."},
                {"q":"Froid toute l'année, un hiver très long et peu de précipitations, surtout sous forme de neige. Quel climat est décrit ?","options":["le climat polaire","le climat continental","le climat désertique","le climat montagnard"],"correct":0,"explication":"Le climat polaire règne près des pôles : il y fait froid toute l'année."},
                {"q":"Quatre saisons bien marquées, des températures modérées et des pluies réparties sur l'année. Quel climat est décrit ?","options":["le climat tropical","le climat polaire","le climat équatorial","le climat tempéré"],"correct":3,"explication":"Le climat tempéré, ni trop chaud ni trop froid, connait quatre saisons."},
                {"q":"Quel est le climat de la Belgique ?","options":["tempéré continental","tempéré océanique","méditerranéen","tropical humide"],"correct":1,"explication":"La Belgique, proche de l'océan Atlantique, a un climat tempéré océanique : doux et humide."},
                {"q":"Pourquoi les hivers sont-ils plutôt doux en Belgique ?","options":["grâce aux montagnes des Alpes voisines","grâce aux grandes forêts de l'Ardenne","grâce à l'océan Atlantique tout proche","grâce aux vents chauds venus du Sahara"],"correct":2,"explication":"L'océan se refroidit lentement : en hiver, il adoucit l'air des régions proches de la côte."},
                {"q":"Des étés chauds et secs, des hivers doux et pluvieux. Quel climat est décrit ?","options":["le climat océanique","le climat continental","le climat méditerranéen","le climat équatorial"],"correct":2,"explication":"Le climat méditerranéen, autour de la mer Méditerranée, a des étés chauds et secs."},
                {"q":"Des hivers très froids, des étés chauds et une grande différence de température entre les saisons. Quel climat est décrit ?","options":["le climat océanique","le climat méditerranéen","le climat équatorial","le climat continental"],"correct":3,"explication":"Loin de l'océan, l'air n'est pas adouci : les hivers sont rudes et les étés chauds."},
                {"q":"Quel climat trouve-t-on sur les côtes de la Grèce et du sud de l'Italie ?","options":["le climat océanique","le climat continental","le climat méditerranéen","le climat polaire"],"correct":2,"explication":"Ces côtes bordent la mer Méditerranée : étés chauds et secs, hivers doux."},
                {"q":"Quelle végétation pousse sous un climat équatorial ?","options":["la savane","la forêt dense","la toundra","la steppe"],"correct":1,"explication":"La chaleur et la pluie permanentes permettent une forêt dense, toujours verte."},
                {"q":"La savane, avec ses hautes herbes et quelques arbres dispersés, correspond à quel climat ?","options":["le climat équatorial","le climat tropical","le climat polaire","le climat océanique"],"correct":1,"explication":"La savane pousse là où une saison sèche alterne avec une saison des pluies : c'est le climat tropical."},
                {"q":"Quel est le plus grand désert chaud du monde ?","options":["le Kalahari","le désert de Gobi","l'Atacama","le Sahara"],"correct":3,"explication":"Le Sahara, au nord de l'Afrique, est le plus grand désert chaud du monde."},
                {"q":"Dans un désert chaud, il peut faire très chaud le jour et froid la nuit.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Sans nuages ni humidité, la chaleur accumulée le jour s'échappe rapidement pendant la nuit."},
                {"q":"Quelle région a un climat équatorial ?","options":["le désert du Sahara","la forêt amazonienne","la Laponie finlandaise","la côte belge"],"correct":1,"explication":"L'Amazonie, traversée par l'équateur, est chaude et humide toute l'année."},
                {"q":"En montagne, plus on monte en altitude…","options":["plus il fait chaud","plus il fait sec et chaud","plus il fait froid"],"correct":2,"explication":"La température baisse quand l'altitude augmente : les sommets sont froids, même près de l'équateur."},
                {"q":"Le climatogramme d'une ville indique entre 25 et 28 °C chaque mois et plus de 150 mm de pluie chaque mois. Quel est son climat ?","options":["tropical","équatorial","désertique","méditerranéen"],"correct":1,"explication":"Chaleur et fortes pluies tous les mois, sans saison sèche : c'est le climat équatorial."},
                {"q":"Une ville a −10 °C de moyenne en janvier, 20 °C en juillet, et des pluies moyennes. Quel est son climat ?","options":["océanique","méditerranéen","équatorial","continental"],"correct":3,"explication":"Hiver très froid et été chaud : la grande différence entre les saisons montre un climat continental."},
                {"q":"Une ville a 3 °C de moyenne en janvier, 17 °C en juillet, et de la pluie chaque mois. Quel est son climat ?","options":["continental","méditerranéen","polaire","océanique"],"correct":3,"explication":"Hiver doux, été frais et pluie toute l'année : c'est le climat océanique, comme en Belgique."},
                {"q":"Une ville a 11 °C de moyenne en janvier, 26 °C en juillet, et presque pas de pluie en été. Quel est son climat ?","options":["océanique","méditerranéen","continental","équatorial"],"correct":1,"explication":"Hiver doux et été chaud et sec : ce sont les caractéristiques du climat méditerranéen."},
                {"q":"Une région a des températures moyennes sous 0 °C pendant dix mois et à peine 5 °C en été. Quel est son climat ?","options":["continental","polaire","océanique","désertique"],"correct":1,"explication":"Des températures très basses presque toute l'année indiquent un climat polaire."},
                {"q":"Dans les régions de climat tropical, il fait froid pendant la saison sèche.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"En climat tropical, il fait chaud toute l'année ; c'est la pluie qui change selon la saison."},
                {"q":"Le dromadaire peut rester longtemps sans boire. À quel climat est-il adapté ?","options":["le climat désertique","le climat équatorial","le climat océanique","le climat polaire"],"correct":0,"explication":"Dans le désert, l'eau est rare : les animaux doivent supporter le manque d'eau."},
                {"q":"En climat tropical, comment appelle-t-on la saison où il pleut beaucoup ?","type":"saisie","clavier":"texte","reponse":["saison des pluies","la saison des pluies","saison humide","la saison humide"],"explication":"Le climat tropical alterne la saison des pluies et la saison sèche."},
                {"q":"Dans quelle région de France trouve-t-on un climat méditerranéen ?","options":["la Provence","la Bretagne","l'Alsace","la Normandie"],"correct":0,"explication":"La Provence borde la Méditerranée ; la Bretagne et la Normandie ont un climat océanique."},
                {"q":"Pourquoi les hivers sont-ils plus froids dans l'est de l'Europe qu'en Belgique ?","options":["parce qu'on est plus près de l'équateur","parce que la mer y est plus chaude","parce qu'il y pleut beaucoup plus","parce que l'océan y est plus loin"],"correct":3,"explication":"Loin de l'océan, l'air n'est plus adouci : le climat devient continental, avec des hivers rudes."},
                {"q":"Laquelle de ces régions a un climat polaire ?","options":["le Portugal","le Congo","le Groenland","l'Égypte"],"correct":2,"explication":"Le Groenland, très au nord, est en grande partie couvert de glace toute l'année."}
              ]
            },
            {
              "id": "e3-geo-c",
              "titre": "Jour, nuit, saisons et Lune",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Qu'est-ce qui provoque l'alternance du jour et de la nuit ?","options":["la révolution de la Terre autour du Soleil","le mouvement de la Lune autour de la Terre","le mouvement du Soleil autour de la Terre","la rotation de la Terre sur elle-même"],"correct":3,"explication":"En tournant sur elle-même, la Terre présente tour à tour chaque région au Soleil."},
                {"q":"Combien de temps la Terre met-elle pour faire un tour sur elle-même ?","options":["environ 24 heures","environ 12 heures","environ 7 jours","environ 365 jours"],"correct":0,"explication":"Un tour complet de la Terre sur elle-même dure environ 24 heures : c'est une journée."},
                {"q":"Combien de temps la Terre met-elle pour faire le tour du Soleil ?","options":["environ 30 jours","environ 24 heures","environ 365 jours","environ 100 jours"],"correct":2,"explication":"La Terre tourne autour du Soleil en environ 365 jours et un quart : c'est une année."},
                {"q":"Comment appelle-t-on le mouvement de la Terre autour du Soleil ?","type":"saisie","clavier":"texte","reponse":["révolution","la révolution","une révolution","revolution","la revolution","une revolution"],"explication":"La révolution est le tour autour du Soleil ; la rotation est le tour sur elle-même."},
                {"q":"Vu de Belgique, de quel côté le Soleil se lève-t-il ?","options":["à l'ouest","à l'est","au nord","au sud"],"correct":1,"explication":"La Terre tourne d'ouest en est : le Soleil semble donc se lever à l'est et se coucher à l'ouest."},
                {"q":"Vu de Belgique, dans quelle direction se trouve le Soleil vers midi ?","options":["au nord","au sud","à l'est","à l'ouest"],"correct":1,"explication":"Dans notre pays, le Soleil atteint sa plus grande hauteur vers midi, en direction du sud."},
                {"q":"À tout moment, une moitié de la Terre est éclairée par le Soleil.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La moitié tournée vers le Soleil est dans le jour, l'autre moitié est dans la nuit."},
                {"q":"Quand il est midi en Belgique, il fait nuit en Nouvelle-Zélande. Pourquoi ?","options":["elle est beaucoup plus loin du Soleil","la Lune y cache le Soleil toute la journée","la Terre y tourne plus lentement qu'ici","elle est du côté de la Terre non éclairé"],"correct":3,"explication":"La Nouvelle-Zélande se trouve de l'autre côté de la Terre, dans la moitié qui n'est pas éclairée."},
                {"q":"Les saisons s'expliquent par la révolution de la Terre et par…","options":["sa distance au Soleil qui change","la vitesse de sa rotation","l'inclinaison de son axe","les phases de la Lune"],"correct":2,"explication":"L'axe de la Terre est penché : selon sa place autour du Soleil, un hémisphère reçoit plus de lumière."},
                {"q":"C'est l'été en Belgique parce que la Terre est alors plus proche du Soleil.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"La Terre est même la plus proche du Soleil début janvier ! Les saisons viennent de l'inclinaison de son axe."},
                {"q":"En été, en Belgique, les journées sont…","options":["plus courtes que les nuits","plus longues que les nuits","aussi longues que les nuits"],"correct":1,"explication":"En été, notre hémisphère est penché vers le Soleil : les jours sont longs et les nuits courtes."},
                {"q":"Vers quelle date a lieu le jour le plus long de l'année en Belgique ?","options":["vers le 21 juin","vers le 21 mars","vers le 21 décembre","vers le 22 septembre"],"correct":0,"explication":"Le solstice d'été, vers le 21 juin, est le jour le plus long de l'année dans l'hémisphère nord."},
                {"q":"Comment appelle-t-on le jour le plus long ou le jour le plus court de l'année ?","type":"saisie","clavier":"texte","reponse":["solstice","le solstice","un solstice"],"explication":"Il y a deux solstices : celui de juin (jour le plus long chez nous) et celui de décembre (le plus court)."},
                {"q":"Que se passe-t-il le jour d'un équinoxe ?","options":["le jour est le plus long de toute l'année","la nuit est la plus longue de toute l'année","le Soleil ne se couche pas en Belgique","le jour dure à peu près autant que la nuit"],"correct":3,"explication":"« Équinoxe » veut dire « nuit égale » : le jour et la nuit durent environ 12 heures chacun."},
                {"q":"En hiver, en Belgique, le Soleil à midi est…","options":["plus haut dans le ciel qu'en été","plus bas dans le ciel qu'en été","à la même hauteur qu'en été"],"correct":1,"explication":"En hiver, notre hémisphère est penché à l'opposé du Soleil : le Soleil monte moins haut."},
                {"q":"Pourquoi fait-il plus froid en Belgique en hiver ?","options":["la Terre est alors très loin du Soleil","le Soleil produit moins de chaleur en hiver","la Lune cache une partie du Soleil","les rayons sont inclinés et les jours courts"],"correct":3,"explication":"Des rayons inclinés chauffent moins, et les journées courtes laissent peu de temps pour chauffer le sol."},
                {"q":"Combien de jours compte une année bissextile ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["366","trois-cent-soixante-six"],"explication":"Tous les 4 ans, on ajoute le 29 février pour rattraper les quarts de jour de la révolution."},
                {"q":"D'où vient la lumière de la Lune ?","options":["elle produit sa propre lumière","elle renvoie la lumière des étoiles","elle renvoie la lumière du Soleil","elle brule comme une petite étoile"],"correct":2,"explication":"La Lune ne produit pas de lumière : elle est éclairée par le Soleil, comme la Terre."},
                {"q":"Combien de temps dure environ un cycle complet des phases de la Lune ?","options":["environ une semaine","environ un mois","environ une année","environ une journée"],"correct":1,"explication":"Il faut environ 29 jours et demi pour passer d'une nouvelle lune à la suivante."},
                {"q":"Comment appelle-t-on la phase où l'on voit la Lune entièrement éclairée ?","type":"saisie","clavier":"texte","reponse":["pleine lune","la pleine lune","pleine Lune","la pleine Lune"],"explication":"À la pleine lune, la face tournée vers la Terre est entièrement éclairée par le Soleil."},
                {"q":"Lors de la nouvelle lune, où se trouve la Lune ?","options":["à l'opposé du Soleil par rapport à la Terre","juste derrière le Soleil","à côté de la planète Mars","entre la Terre et le Soleil"],"correct":3,"explication":"La face éclairée de la Lune est alors tournée vers le Soleil : de la Terre, on ne la voit presque pas."},
                {"q":"Les phases de la Lune sont causées par l'ombre de la Terre.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les phases dépendent de la partie éclairée de la Lune que nous voyons. L'ombre de la Terre provoque les éclipses."},
                {"q":"Vue de Belgique, une Lune en forme de « D » est…","options":["décroissante","pleine","croissante","nouvelle"],"correct":2,"explication":"Chez nous, la Lune « menteuse » : en forme de D, elle croit ; en forme de C, elle décroit."},
                {"q":"Quelle phase de la Lune vient entre le premier quartier et le dernier quartier ?","options":["la nouvelle lune","la pleine lune","le premier croissant","le dernier croissant"],"correct":1,"explication":"Ordre des phases : nouvelle lune, premier quartier, pleine lune, dernier quartier, puis nouvelle lune."},
                {"q":"Pourquoi voit-on toujours la même face de la Lune ?","options":["elle ne tourne pas du tout sur elle-même","sa rotation et sa révolution durent autant","la Terre lui cache toujours l'autre face","l'autre face n'est jamais éclairée"],"correct":1,"explication":"La Lune fait un tour sur elle-même pendant qu'elle fait un tour de la Terre : elle nous montre toujours la même face."},
                {"q":"Qu'est-ce que la Lune ?","options":["une planète du système solaire","le satellite naturel de la Terre","une petite étoile proche de nous","une comète qui tourne autour de nous"],"correct":1,"explication":"La Lune tourne autour de la Terre : c'est son satellite naturel."},
                {"q":"On ne peut voir la Lune que pendant la nuit.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"La Lune est souvent visible en plein jour, quand elle est au-dessus de l'horizon."},
                {"q":"Combien de temps dure environ une saison ?","options":["environ 1 mois","environ 6 mois","environ 3 mois","environ 2 semaines"],"correct":2,"explication":"Une année compte 4 saisons : chacune dure donc environ 3 mois."}
              ]
            }
          ]
        },
        {
          "id": "i3-viv",
          "matiere": "Le vivant",
          "titre": "La serre du vivant",
          "symbole": "♥",
          "description": "Classer les vivants, chaines alimentaires.",
          "hote": {
            "nom": "La naturaliste Jade",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e3-viv-a",
              "titre": "Qu'ont-ils en commun ?",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel attribut seuls les oiseaux possèdent-ils ?","options":["un bec dur","des ailes","des plumes","des œufs"],"correct":2,"explication":"Seuls les oiseaux ont des plumes ; d'autres animaux ont des ailes, pondent des œufs ou ont un bec."},
                {"q":"Quels attributs ont tous les mammifères ?","options":["des antennes et six pattes","des écailles et des nageoires","des poils et des mamelles","des plumes et un bec"],"correct":2,"explication":"Les mammifères ont des poils et les femelles ont des mamelles pour allaiter leurs petits."},
                {"q":"La chauve-souris a des ailes, des poils et des mamelles. C'est…","options":["un oiseau","un reptile","un mammifère","un insecte"],"correct":2,"explication":"Poils et mamelles en font un mammifère ; ses ailes sont des membres couverts d'une fine peau."},
                {"q":"Le dauphin est un poisson.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Le dauphin respire avec des poumons et allaite ses petits avec ses mamelles : c'est un mammifère."},
                {"q":"Comment appelle-t-on les animaux qui ont un squelette interne avec une colonne vertébrale ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["vertébrés","les vertébrés","vertebres","les vertebres","vertébré","vertebre"],"explication":"Les vertébrés ont une colonne vertébrale, faite de vertèbres, qui fait partie de leur squelette interne."},
                {"q":"Lequel de ces animaux n'a pas de squelette interne ?","options":["la mésange","l'escargot","le requin","la grenouille"],"correct":1,"explication":"L'escargot a un corps mou et une coquille, mais pas de squelette interne."},
                {"q":"Combien de pattes possède un insecte adulte ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["6","six"],"explication":"Les insectes adultes ont six pattes articulées, attachées au thorax."},
                {"q":"L'araignée est un insecte.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"L'araignée a huit pattes et un corps en deux parties : ce n'est pas un insecte."},
                {"q":"Quels attributs partagent le scarabée, l'araignée et le crabe ?","options":["un squelette externe et des pattes articulées","des poils sur tout le corps et des mamelles","un squelette interne et une colonne vertébrale","des plumes et un bec"],"correct":0,"explication":"Leur corps est protégé par une carapace (squelette externe) et leurs pattes sont articulées."},
                {"q":"Lequel de ces animaux possède quatre membres ?","options":["le requin","la grenouille","le ver de terre","l'escargot"],"correct":1,"explication":"La grenouille a deux pattes avant et deux pattes arrière : quatre membres."},
                {"q":"Le manchot ne vole pas, mais son corps est couvert de plumes. C'est…","options":["un poisson","un mammifère","un oiseau"],"correct":2,"explication":"Les plumes sont l'attribut des oiseaux, même s'ils ne volent pas, comme le manchot."},
                {"q":"Quel attribut le saumon et le lézard ont-ils en commun ?","options":["quatre membres","des plumes","des poils","un squelette interne"],"correct":3,"explication":"Le saumon et le lézard ont tous deux une colonne vertébrale : ce sont des vertébrés."},
                {"q":"L'ornithorynque pond des œufs, mais il a des poils et allaite ses petits. Avec qui le range-t-on ?","options":["avec les oiseaux","avec les reptiles","avec les mammifères"],"correct":2,"explication":"Il a des poils et des mamelles : c'est un mammifère, même s'il pond des œufs."},
                {"q":"Tous les animaux qui pondent des œufs sont des oiseaux.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les poissons, les insectes, les reptiles et même l'ornithorynque pondent aussi des œufs."},
                {"q":"Pour classer les êtres vivants, on les regroupe selon ce qu'ils ont en commun.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"On classe selon les attributs partagés (poils, plumes, squelette…), pas selon ce qui manque."},
                {"q":"Lequel de ces critères ne sert PAS à classer les animaux scientifiquement ?","options":["la présence de plumes","la présence de poils","la présence d'un squelette interne","le milieu où ils vivent"],"correct":3,"explication":"Des animaux très différents vivent dans le même milieu : on classe d'après leurs attributs."},
                {"q":"Lequel de ces animaux possède des mamelles ?","options":["la poule","la grenouille","la vache","la truite"],"correct":2,"explication":"La vache est un mammifère : elle allaite son veau avec ses mamelles."},
                {"q":"L'escargot a un corps mou et une coquille. Il fait partie des…","options":["reptiles","amphibiens","mollusques","insectes"],"correct":2,"explication":"Les mollusques ont un corps mou, souvent protégé par une coquille (escargot, moule)."},
                {"q":"En combien de parties est divisé le corps d'un insecte ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["3","trois"],"explication":"Le corps d'un insecte a trois parties : la tête, le thorax et l'abdomen."},
                {"q":"Lequel de ces animaux a des nageoires et un squelette interne ?","options":["la méduse","la crevette","le requin","la pieuvre"],"correct":2,"explication":"Le requin est un poisson : il a des nageoires et une colonne vertébrale."},
                {"q":"Les piquants du hérisson sont en réalité…","options":["des écailles pointues","des plumes durcies","des poils durcis"],"correct":2,"explication":"Les piquants du hérisson sont des poils transformés : le hérisson est un mammifère."},
                {"q":"Quel attribut partagent le chêne, la fougère et la mousse ?","options":["des parties vertes","des fruits charnus","des graines","des fleurs au printemps"],"correct":0,"explication":"La fougère et la mousse n'ont ni fleurs ni graines, mais toutes ces plantes ont des parties vertes."},
                {"q":"La chenille est la larve du papillon.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La chenille se transforme en chrysalide, puis en papillon : c'est le même animal."},
                {"q":"Lequel de ces animaux est un amphibien ?","options":["la tortue","la salamandre","le serpent","le lézard"],"correct":1,"explication":"La salamandre a une peau nue et humide ; ses larves vivent dans l'eau : c'est un amphibien."},
                {"q":"Quel animal possède à la fois un squelette interne, quatre membres et des plumes ?","options":["le saumon","la poule","le crocodile","la chauve-souris"],"correct":1,"explication":"La poule a un squelette interne, quatre membres (deux ailes et deux pattes) et des plumes."}
              ]
            },
            {
              "id": "e3-viv-b",
              "titre": "Des groupes emboités",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Le chat est rangé dans le groupe « poils ». Dans quels autres groupes est-il aussi ?","options":["« nageoires » et « squelette interne »","« quatre membres » et « squelette interne »","« squelette externe » et « poils »","« plumes » et « quatre membres »"],"correct":1,"explication":"Les groupes sont emboités : le groupe « poils » est dans « quatre membres », lui-même dans « squelette interne »."},
                {"q":"Tous les animaux qui ont des poils ont aussi un squelette interne.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le groupe « poils » est entièrement inclus dans le groupe « squelette interne »."},
                {"q":"Tous les animaux qui ont un squelette interne ont aussi des poils.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les poissons, les oiseaux, les reptiles ont un squelette interne mais pas de poils."},
                {"q":"Parmi ces groupes, lequel contient tous les autres ?","options":["squelette interne","plumes","poils","quatre membres"],"correct":0,"explication":"Le groupe « squelette interne » (vertébrés) contient le groupe « quatre membres », qui contient « poils » et « plumes »."},
                {"q":"Parmi ces groupes, lequel est le plus petit ?","options":["squelette interne","plumes","quatre membres"],"correct":1,"explication":"Seuls les oiseaux ont des plumes ; ce groupe est inclus dans les deux autres."},
                {"q":"Dans quel groupe peut-on ranger le pigeon et le lapin, mais pas la truite ?","options":["poils","plumes","quatre membres","squelette interne"],"correct":2,"explication":"Le pigeon et le lapin ont quatre membres ; la truite a un squelette interne mais des nageoires."},
                {"q":"Quel groupe réunit la truite, la grenouille et le moineau ?","options":["plumes","squelette interne","écailles","quatre membres"],"correct":1,"explication":"Les trois ont une colonne vertébrale ; la truite n'a pas quatre membres et la grenouille n'a pas d'écailles."},
                {"q":"Quel animal se range dans le groupe « quatre membres », mais ni dans « poils » ni dans « plumes » ?","options":["le saumon","le hibou","le crocodile","le chien"],"correct":2,"explication":"Le crocodile a quatre membres et des écailles, mais ni poils ni plumes."},
                {"q":"Le groupe des vertébrés réunit les animaux qui ont…","options":["un squelette interne avec une colonne vertébrale","six pattes et un corps en trois parties","un corps mou protégé par une coquille","un squelette externe et des pattes articulées"],"correct":0,"explication":"Vertébré vient de « vertèbre » : ces animaux ont une colonne vertébrale."},
                {"q":"Lequel de ces animaux n'entre dans aucun de ces groupes : « squelette interne », « quatre membres », « poils » ?","options":["la tortue","la carpe","le mouton","la coccinelle"],"correct":3,"explication":"La coccinelle est un insecte : elle a un squelette externe et six pattes articulées."},
                {"q":"Quel animal ne fait pas partie du groupe « plumes » ?","options":["le manchot","la poule","la chauve-souris","l'autruche"],"correct":2,"explication":"La chauve-souris vole, mais elle a des poils : elle est dans le groupe « poils »."},
                {"q":"Le crabe, la fourmi et l'araignée ont un squelette externe et des pattes articulées. Ils forment le groupe des…","options":["vertébrés","mollusques","amphibiens","arthropodes"],"correct":3,"explication":"Arthropode signifie « pattes articulées » : insectes, araignées, crustacés et millepattes en font partie."},
                {"q":"Complète : les animaux qui ont des poils et des mamelles forment le groupe des …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["mammifères","les mammifères","mammiferes","les mammiferes"],"explication":"Poils et mamelles caractérisent les mammifères."},
                {"q":"Complète : les animaux qui ont des plumes forment le groupe des …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["oiseaux","les oiseaux"],"explication":"Les plumes caractérisent les oiseaux."},
                {"q":"Lequel de ces groupes est inclus dans le groupe des vertébrés ?","options":["les arthropodes","les mollusques","les mammifères","les insectes"],"correct":2,"explication":"Tous les mammifères ont une colonne vertébrale : leur groupe est inclus dans celui des vertébrés."},
                {"q":"Dans un schéma de groupes emboités, où dessine-t-on le groupe « poils » ?","options":["à l'intérieur du groupe « plumes »","à l'extérieur du groupe « squelette interne »","à l'extérieur du groupe « quatre membres »","à l'intérieur du groupe « quatre membres »"],"correct":3,"explication":"Tous les animaux à poils ont quatre membres : le groupe « poils » est dessiné dans « quatre membres »."},
                {"q":"La baleine allaite son petit avec ses mamelles. Avec quel animal la range-t-on ?","options":["le thon","la pieuvre","la vache","le requin"],"correct":2,"explication":"Les mamelles font de la baleine un mammifère, comme la vache, même si elle vit dans la mer."},
                {"q":"Quel animal partage le plus d'attributs avec le chien ?","options":["l'escargot","le pigeon","la chauve-souris","la truite"],"correct":2,"explication":"Comme le chien, la chauve-souris a un squelette interne, quatre membres, des poils et des mamelles."},
                {"q":"La salamandre a un squelette interne et quatre membres, mais ni poils ni plumes. Dans quels groupes la ranges-tu ?","options":["« squelette interne », « quatre membres » et « poils »","« squelette interne » seulement","« squelette interne » et « quatre membres »","« quatre membres » seulement"],"correct":2,"explication":"On range un animal dans tous les groupes dont il possède l'attribut."},
                {"q":"Dans une classification en groupes emboités, un animal peut appartenir à plusieurs groupes à la fois.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le lapin est à la fois dans « poils », « quatre membres » et « squelette interne »."},
                {"q":"Pourquoi ne crée-t-on pas de groupe « animaux qui volent » ?","options":["Les animaux volants sont tous des oiseaux.","Trop peu d'animaux savent voler.","Des animaux très différents volent.","Voler n'est pas utile aux animaux."],"correct":2,"explication":"Le moineau, l'abeille et la chauve-souris volent mais ont des corps très différents."},
                {"q":"Le requin appartient au groupe…","options":["des mammifères","des vertébrés","des mollusques","des arthropodes"],"correct":1,"explication":"Le requin est un poisson : il a une colonne vertébrale, mais ni poils ni mamelles."},
                {"q":"La coccinelle a six pattes et un corps en trois parties. C'est un …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["insecte","un insecte"],"explication":"Six pattes et un corps en trois parties (tête, thorax, abdomen) : ce sont les attributs des insectes."},
                {"q":"Le groupe « poils » contient la souris et le cheval. Quel animal peut-on y ajouter ?","options":["le lézard","la carpe","le lapin","le canard"],"correct":2,"explication":"Le lapin a des poils ; le canard a des plumes, la carpe et le lézard ont des écailles."},
                {"q":"Le groupe « quatre membres » contient la grenouille, la tortue et le merle. Quel animal peut-on y ajouter ?","options":["la truite","la limace","le papillon","l'écureuil"],"correct":3,"explication":"L'écureuil a quatre membres ; la truite a des nageoires, la limace n'a pas de pattes et le papillon en a six."}
              ]
            },
            {
              "id": "e3-viv-c",
              "titre": "Qui mange qui ?",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Dans une chaine alimentaire, par quoi commence-t-elle toujours ?","options":["par un décomposeur","par un herbivore","par un végétal","par un carnivore"],"correct":2,"explication":"Le premier maillon est un producteur : une plante ou une algue qui fabrique sa propre matière."},
                {"q":"Pourquoi appelle-t-on les plantes vertes des « producteurs » ?","options":["Elles produisent des œufs au début du printemps.","Elles produisent la chaleur qui réchauffe le sol.","Elles se nourrissent de petits insectes du sol.","Elles fabriquent leur matière grâce à la lumière."],"correct":3,"explication":"Grâce à la lumière, à l'eau, aux sels minéraux et au dioxyde de carbone, la plante fabrique sa matière."},
                {"q":"Dans la chaine « herbe → lapin », que signifie la flèche ?","options":["« mange »","« est mangé par »","« se cache dans »","« vit à côté de »"],"correct":1,"explication":"La flèche va de celui qui est mangé vers celui qui mange : l'herbe est mangée par le lapin."},
                {"q":"Dans la chaine « herbe → campagnol → buse », la buse est…","options":["un consommateur herbivore","un décomposeur","un consommateur carnivore","un producteur"],"correct":2,"explication":"La buse mange le campagnol : c'est un consommateur qui se nourrit d'autres animaux."},
                {"q":"Comment appelle-t-on les champignons et les bactéries qui transforment les feuilles mortes ?","options":["des producteurs","des herbivores","des prédateurs","des décomposeurs"],"correct":3,"explication":"Les décomposeurs transforment les restes d'êtres vivants en sels minéraux."},
                {"q":"Comment appelle-t-on un animal qui se nourrit uniquement de végétaux ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["herbivore","un herbivore","herbivores"],"explication":"L'herbivore mange des végétaux : c'est le premier consommateur de la chaine."},
                {"q":"Complète la chaine : salade → … → hérisson","options":["chêne","limace","buse","renard"],"correct":1,"explication":"La limace mange la salade et le hérisson mange la limace."},
                {"q":"Quelle chaine alimentaire est correcte ?","contexte":"Choisis le bon ordre.","options":["mulot → blé → chouette","blé → mulot → chouette","blé → chouette → mulot","chouette → mulot → blé"],"correct":1,"explication":"Le blé (producteur) est mangé par le mulot, lui-même mangé par la chouette."},
                {"q":"Que se passerait-il d'abord si tous les renards d'une forêt disparaissaient ?","options":["Les lapins deviendraient plus nombreux.","Rien ne changerait dans la forêt.","Les lapins disparaitraient aussi.","L'herbe deviendrait plus abondante."],"correct":0,"explication":"Sans leur prédateur, les lapins se multiplient et mangent davantage d'herbe."},
                {"q":"Dans un jardin, tous les pucerons disparaissent. Quel animal en souffre le plus ?","options":["le ver de terre","le lapin","la limace","la coccinelle"],"correct":3,"explication":"La coccinelle se nourrit de pucerons : sans eux, elle manque de nourriture."},
                {"q":"Sans décomposeurs, les feuilles mortes s'accumuleraient sur le sol de la forêt.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les décomposeurs font disparaitre peu à peu les feuilles mortes en les transformant."},
                {"q":"Que rendent les décomposeurs au sol ?","options":["des sels minéraux utiles aux plantes","de la lumière pour les graines","de l'oxygène pour les racines des arbres","du sucre pour les animaux"],"correct":0,"explication":"Les sels minéraux libérés sont puisés par les racines : la matière est recyclée."},
                {"q":"Le renard mange des lapins, des souris, mais aussi des baies. C'est un…","options":["herbivore","omnivore","producteur"],"correct":1,"explication":"Un omnivore mange à la fois des animaux et des végétaux."},
                {"q":"Dans la chaine « algues → crevette → hareng → phoque », qui est le producteur ?","options":["les algues","le phoque","la crevette","le hareng"],"correct":0,"explication":"Les algues fabriquent leur matière grâce à la lumière : ce sont les producteurs."},
                {"q":"Dans la chaine « algues → crevette → hareng → phoque », combien y a-t-il de consommateurs ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["3","trois"],"explication":"La crevette, le hareng et le phoque sont des consommateurs ; les algues sont le producteur."},
                {"q":"D'où vient l'énergie au départ de toute chaine alimentaire ?","options":["du Soleil","de l'eau","des animaux","du sol"],"correct":0,"explication":"Les plantes utilisent la lumière du Soleil pour fabriquer leur matière."},
                {"q":"Qu'est-ce qu'un réseau alimentaire ?","options":["plusieurs chaines alimentaires reliées","un filet qui protège les poissons","une chaine alimentaire sans producteur","un groupe d'animaux de la même espèce"],"correct":0,"explication":"Dans la nature, un animal mange et est mangé par plusieurs espèces : les chaines s'entremêlent."},
                {"q":"La mésange mange des chenilles qui mangent des feuilles de chêne. Quel être vivant est au milieu de la chaine ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["chenille","chenilles","la chenille","les chenilles"],"explication":"La chaine est : chêne → chenille → mésange."},
                {"q":"Lequel de ces animaux est un herbivore ?","options":["le chevreuil","la chouette","la buse","le loup"],"correct":0,"explication":"Le chevreuil mange de l'herbe, des feuilles et des bourgeons."},
                {"q":"Lequel de ces animaux est un carnivore ?","options":["le chevreuil","le lapin","la buse","la vache"],"correct":2,"explication":"La buse est un rapace qui chasse surtout de petits rongeurs."},
                {"q":"Le ver de terre aide à recycler la matière morte du sol.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le ver de terre avale des débris de feuilles et de la terre, ce qui aide à les transformer."},
                {"q":"Pourquoi certains maraichers lâchent-ils des coccinelles dans leurs serres ?","options":["Elles mangent les feuilles malades.","Elles chassent les oiseaux.","Elles mangent les pucerons.","Elles pollinisent les fleurs."],"correct":2,"explication":"Les coccinelles dévorent les pucerons : on protège les cultures sans insecticide."},
                {"q":"Dans un compost, qui transforme les épluchures en terreau ?","options":["les carnivores","les herbivores","les producteurs","les décomposeurs"],"correct":3,"explication":"Champignons, bactéries et petits animaux du sol transforment les épluchures en terreau riche."},
                {"q":"Dans la chaine « chêne → chenille → mésange → épervier », quel est le dernier maillon ?","contexte":"Choisis le bon ordre.","options":["l'épervier","le chêne","la chenille","la mésange"],"correct":0,"explication":"L'épervier, un rapace, mange la mésange ; aucun animal de cette chaine ne le mange."},
                {"q":"Le loup mange le chevreuil. Pour le loup, le chevreuil est…","options":["une proie","un décomposeur","un producteur","un prédateur"],"correct":0,"explication":"Le loup est le prédateur ; l'animal chassé, le chevreuil, est sa proie."}
              ]
            }
          ]
        },
        {
          "id": "i3-mat",
          "matiere": "Matière, énergie et techniques",
          "titre": "L'atelier des inventions",
          "symbole": "⚙",
          "description": "L'électricité et le cycle de l'eau.",
          "hote": {
            "nom": "L'électricienne Volta",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e3-mat-a",
              "titre": "Le circuit électrique",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Pour qu'une ampoule s'allume, comment le circuit doit-il être ?","contexte":"Électricité","options":["coupé","fermé","ouvert"],"correct":1,"explication":"Le courant ne circule que dans un circuit fermé, une boucle sans interruption."},
                {"q":"À quoi sert un interrupteur ?","contexte":"Électricité","options":["À rendre la lumière plus forte","À ouvrir ou fermer le circuit","À produire le courant"],"correct":1,"explication":"L'interrupteur coupe ou rétablit le passage du courant dans le circuit."},
                {"q":"Quand l'interrupteur est ouvert, l'ampoule est allumée.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Interrupteur ouvert = circuit ouvert : le courant ne passe pas, l'ampoule est éteinte."},
                {"q":"Une pile plate de 4,5 V a deux lamelles en métal. Comment les appelle-t-on ?","contexte":"Électricité","options":["les bornes","les culots","les plots"],"correct":0,"explication":"Une pile a deux bornes : la borne + et la borne −."},
                {"q":"Léa relie une borne de la pile au culot d'une ampoule avec un seul fil. Rien d'autre ne touche l'ampoule. Pourquoi ne s'allume-t-elle pas ?","contexte":"Électricité","options":["Le circuit n'est pas fermé","La pile est beaucoup trop forte","Le fil est beaucoup trop long"],"correct":0,"explication":"Il faut une boucle complète : de la pile à l'ampoule, puis de l'ampoule à l'autre borne."},
                {"q":"Une ampoule à filament a deux points de contact. Lesquels ?","contexte":"Électricité","options":["le culot et le plot","le filament et le verre","le verre et le culot"],"correct":0,"explication":"Le courant entre par le plot (en bas) et sort par le culot (la partie en métal sur le côté), ou l'inverse."},
                {"q":"Quelle partie d'une ampoule à filament devient brillante quand le courant passe ?","contexte":"Électricité","options":["le filament","le culot","le plot","le verre"],"correct":0,"explication":"Le courant chauffe le fin filament si fort qu'il devient lumineux."},
                {"q":"Une pile et deux ampoules sont branchées l'une après l'autre, sur une seule boucle (en série). On dévisse une ampoule. Que fait l'autre ?","contexte":"Électricité","options":["Elle reste allumée","Elle s'éteint","Elle brille plus fort"],"correct":1,"explication":"En série, il n'y a qu'un chemin : si on l'ouvre à un endroit, le courant ne passe plus nulle part."},
                {"q":"Théo relie directement les deux bornes d'une pile avec un fil de cuivre, sans ampoule. Comment appelle-t-on cela ?","contexte":"Électricité","options":["un court-circuit","un circuit ouvert","un interrupteur"],"correct":0,"explication":"Le courant passe sans obstacle : le fil et la pile chauffent et la pile s'use très vite."},
                {"q":"Un court-circuit peut faire chauffer les fils et provoquer un incendie.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Dans un court-circuit, le courant devient très fort : les fils chauffent, ce qui est dangereux."},
                {"q":"Dans un circuit de classe, quel élément fournit le courant électrique ?","contexte":"Électricité","options":["le fil","l'interrupteur","la pile","l'ampoule"],"correct":2,"explication":"La pile est la source d'énergie du circuit ; l'ampoule, elle, reçoit le courant."},
                {"q":"Un circuit comprend une pile, une ampoule, un interrupteur et des fils formant une boucle. Quand l'ampoule s'allume-t-elle ?","contexte":"Électricité","options":["quand l'interrupteur est fermé","quand l'interrupteur est ouvert","quand on retire un des fils"],"correct":0,"explication":"Interrupteur fermé = circuit fermé : le courant circule et l'ampoule s'allume."},
                {"q":"Le filament de l'ampoule d'un circuit en série est cassé. Que se passe-t-il ?","contexte":"Électricité","options":["Le circuit est ouvert, rien ne s'allume","Le courant passe quand même","La pile se recharge toute seule pendant ce temps"],"correct":0,"explication":"Le filament cassé coupe la boucle : le courant ne peut plus circuler."},
                {"q":"Comment appelle-t-on un circuit coupé quelque part, dans lequel le courant ne peut pas circuler ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["ouvert","circuit ouvert","un circuit ouvert"],"explication":"Un circuit ouvert est interrompu : le courant ne circule pas."},
                {"q":"Pourquoi compare-t-on un circuit électrique à une boucle ?","contexte":"Électricité","options":["Les fils doivent toujours être enroulés en rond","Le courant part de la pile et y revient","L'ampoule doit toujours être ronde"],"correct":1,"explication":"Le courant sort par une borne de la pile, traverse le circuit et revient par l'autre borne."},
                {"q":"À la maison, à quoi sert l'interrupteur de la lampe du salon ?","contexte":"Électricité","options":["à garder l'électricité de la maison pour la nuit","à produire l'électricité de la lampe","à ouvrir ou fermer le circuit de la lampe"],"correct":2,"explication":"L'interrupteur ouvre ou ferme le circuit : il allume ou éteint la lampe."},
                {"q":"Une pile qui a beaucoup servi finit par s'user.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"La pile contient une réserve d'énergie limitée : quand elle est épuisée, l'ampoule ne s'allume plus."},
                {"q":"Combien de bornes possède une pile ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["2","deux"],"explication":"Une pile a deux bornes : la borne + et la borne −."},
                {"q":"Comment sont marquées les bornes d'une pile ?","contexte":"Électricité","options":["N et S","A et B","+ et −"],"correct":2,"explication":"Les bornes d'une pile sont la borne positive (+) et la borne négative (−) ; N et S, ce sont les pôles d'un aimant."},
                {"q":"Inès monte une boucle : pile, fil, ampoule, fil, retour à la pile. L'ampoule ne s'allume pas. Que doit-elle vérifier en premier ?","contexte":"Électricité","options":["que tous les contacts sont bien serrés","que les fils sont de la même couleur","que la pile est posée bien à plat sur la table"],"correct":0,"explication":"Un contact mal serré suffit à ouvrir le circuit."},
                {"q":"Une lampe de poche contient des piles, une ampoule (ou une LED) et…","contexte":"Électricité","options":["un interrupteur","un aimant","un thermomètre"],"correct":0,"explication":"Le bouton de la lampe de poche est un interrupteur : il ferme ou ouvre le circuit."},
                {"q":"La couleur du plastique des fils change le fonctionnement du circuit.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Les couleurs aident seulement à se repérer ; c'est le métal à l'intérieur qui conduit le courant."},
                {"q":"Deux ampoules sont branchées chacune sur sa propre boucle avec la même pile (en dérivation). On dévisse une ampoule. Que fait l'autre ?","contexte":"Électricité","options":["Elle reste allumée","Elle se met à clignoter","Elle s'éteint aussi"],"correct":0,"explication":"En dérivation, chaque ampoule a son propre chemin : l'autre boucle reste fermée."},
                {"q":"Dans une maison, une ampoule grillée n'éteint pas les autres lampes. Comment les lampes sont-elles branchées ?","contexte":"Électricité","options":["en dérivation","en court-circuit","en série"],"correct":0,"explication":"En dérivation, chaque lampe a son propre circuit : elles fonctionnent indépendamment."},
                {"q":"Dans un circuit simple avec une ampoule à filament, Nolan retourne la pile (il inverse + et −). Que fait l'ampoule ?","contexte":"Électricité","options":["Elle grille aussitôt, d'un coup","Elle ne s'allume plus","Elle s'allume toujours"],"correct":2,"explication":"Une ampoule à filament s'allume quel que soit le sens du courant (ce n'est pas le cas d'une LED)."}
              ]
            },
            {
              "id": "e3-mat-b",
              "titre": "Conducteurs, isolants et sécurité",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Comment appelle-t-on un matériau qui laisse passer le courant électrique ?","contexte":"Conducteurs et isolants","options":["un interrupteur","un conducteur","un isolant"],"correct":1,"explication":"Un conducteur laisse passer le courant ; un isolant l'arrête."},
                {"q":"Lequel de ces objets est un conducteur électrique ?","contexte":"Conducteurs et isolants","options":["une latte en plastique","un bouchon en liège","une gomme","une clé en fer"],"correct":3,"explication":"Le fer est un métal : il conduit le courant. Gomme, plastique et liège sont isolants."},
                {"q":"Lequel de ces objets est un isolant électrique ?","contexte":"Conducteurs et isolants","options":["un trombone en acier","une latte en bois sec","une cuillère en inox","une feuille d'aluminium"],"correct":1,"explication":"Le bois sec ne laisse pas passer le courant ; l'acier, l'inox et l'aluminium sont des métaux."},
                {"q":"Tous les métaux sont des conducteurs d'électricité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Le cuivre, le fer, l'aluminium, l'or… : tous les métaux laissent passer le courant."},
                {"q":"Pourquoi les fils électriques sont-ils entourés de plastique ?","contexte":"Conducteurs et isolants","options":["Le plastique isole et protège","Le plastique conduit mieux","Le plastique rend le fil plus léger"],"correct":0,"explication":"Le plastique est isolant : il empêche le courant de passer dans nos doigts ou d'un fil à l'autre."},
                {"q":"En quel métal est le plus souvent l'intérieur des fils électriques ?","contexte":"Conducteurs et isolants","options":["l'étain","le zinc","le plomb","le cuivre"],"correct":3,"explication":"Le cuivre conduit très bien le courant : c'est le métal des fils électriques."},
                {"q":"Lucas place la mine de graphite d'un crayon dans un circuit : l'ampoule s'allume faiblement. Que peut-on dire du graphite ?","contexte":"Conducteurs et isolants","options":["Il est isolant","Il produit du courant","Il conduit le courant"],"correct":2,"explication":"Le graphite n'est pas un métal, mais il conduit le courant."},
                {"q":"Le corps humain conduit l'électricité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"C'est pourquoi le courant d'une prise peut traverser le corps et causer une électrocution."},
                {"q":"Quelle est la tension du courant des prises dans une maison belge ?","contexte":"Sécurité","options":["12 V","1,5 V","230 V","4,5 V"],"correct":2,"explication":"Les prises fournissent 230 V : c'est très dangereux, contrairement à une pile de 4,5 V."},
                {"q":"Pourquoi ne faut-il jamais toucher un appareil électrique branché avec les mains mouillées ?","contexte":"Sécurité","options":["L'eau abime seulement l'appareil, sans danger","L'eau du robinet conduit le courant","L'eau rend l'appareil isolant"],"correct":1,"explication":"L'eau du robinet conduit le courant : avec des mains mouillées, le risque d'électrocution augmente."},
                {"q":"En classe, on peut faire des expériences avec une pile de 4,5 V sans risque d'électrocution.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Une pile de 4,5 V ne peut pas électrocuter ; le courant des prises (230 V), lui, est dangereux."},
                {"q":"Le cerf-volant de Mehdi est accroché à une ligne à haute tension. Que doit-il faire ?","contexte":"Sécurité","options":["Grimper au pylône pour le décrocher","Tirer très fort sur la ficelle","Le laisser et prévenir un adulte"],"correct":2,"explication":"Une ligne à haute tension peut électrocuter à distance : on n'y touche jamais, même par une ficelle."},
                {"q":"À quoi sert un cache-prise ?","contexte":"Sécurité","options":["à faire passer plus de courant","à fermer l'accès aux trous de la prise","à éclairer doucement le couloir pendant la nuit"],"correct":1,"explication":"Le cache-prise empêche les petits enfants d'introduire un objet dans la prise."},
                {"q":"Lequel de ces objets laisse passer le courant ?","contexte":"Conducteurs et isolants","options":["une balle en caoutchouc","une gomme blanche","un verre à eau","une pièce de 1 euro"],"correct":3,"explication":"La pièce est en métal : elle conduit. Le verre, le caoutchouc et la gomme sont isolants."},
                {"q":"Pourquoi les électriciens portent-ils des gants en caoutchouc ?","contexte":"Sécurité","options":["Le caoutchouc est isolant","Le caoutchouc est conducteur","Le caoutchouc tient chaud"],"correct":0,"explication":"Le caoutchouc arrête le courant : il protège les mains."},
                {"q":"Comment appelle-t-on un matériau qui ne laisse pas passer le courant électrique ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["isolant","un isolant","isolant électrique","un isolant électrique","isolant electrique","un isolant electrique"],"explication":"Un isolant (plastique, bois sec, verre, caoutchouc) arrête le courant."},
                {"q":"On peut sans danger retirer une tartine coincée dans un grille-pain branché avec un couteau en métal.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Le couteau en métal conduit le courant : il faut d'abord débrancher l'appareil."},
                {"q":"Le plastique d'un fil électrique est abimé et laisse voir le cuivre. Que faut-il faire ?","contexte":"Sécurité","options":["L'utiliser sans aucune crainte","Ne plus l'utiliser et le faire réparer","Le toucher pour vérifier s'il marche encore bien"],"correct":1,"explication":"Le cuivre nu peut transmettre le courant à la main : un fil abimé est dangereux."},
                {"q":"Lequel de ces matériaux est isolant ?","contexte":"Conducteurs et isolants","options":["le verre","le fer","l'aluminium","le cuivre"],"correct":0,"explication":"Le verre ne laisse pas passer le courant ; les trois autres sont des métaux."},
                {"q":"Mehdi place un objet entre deux fils d'un circuit ouvert. L'ampoule s'allume. Comment est l'objet ?","contexte":"Conducteurs et isolants","options":["conducteur","cassé","isolant"],"correct":0,"explication":"L'objet laisse passer le courant et ferme le circuit : il est conducteur."},
                {"q":"Dans le tableau électrique de la maison, quel appareil coupe automatiquement le courant en cas de problème ?","contexte":"Sécurité","options":["le disjoncteur","l'interrupteur","la prise"],"correct":0,"explication":"Le disjoncteur coupe le courant tout seul en cas de court-circuit ou de surcharge."},
                {"q":"On peut brancher autant d'appareils qu'on veut sur une même multiprise, sans aucun risque.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Trop d'appareils sur une multiprise font chauffer les fils : il y a un risque d'incendie."},
                {"q":"Pourquoi ne faut-il jamais utiliser un sèche-cheveux près d'une baignoire pleine ?","contexte":"Sécurité","options":["L'eau conduit le courant","Le bruit fait vibrer l'eau","L'air chaud fait bouillir l'eau"],"correct":0,"explication":"Si l'appareil tombe dans l'eau, le courant peut traverser l'eau et le corps."},
                {"q":"Pourquoi le manche d'un tournevis d'électricien est-il en plastique ?","contexte":"Sécurité","options":["Le plastique est conducteur","Le plastique est plus brillant","Le plastique est isolant"],"correct":2,"explication":"Le manche isolant empêche le courant d'atteindre la main."},
                {"q":"Lequel de ces objets permet de fermer un circuit ouvert ?","contexte":"Conducteurs et isolants","options":["une ficelle","un cure-dent en bois","un trombone en métal","un élastique"],"correct":2,"explication":"Le trombone est en métal, donc conducteur : il laisse passer le courant."}
              ]
            },
            {
              "id": "e3-mat-c",
              "titre": "Le voyage de l'eau",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Qu'est-ce qui fournit l'énergie qui fait fonctionner le cycle de l'eau ?","contexte":"Le cycle de l'eau","options":["le vent","les volcans","le Soleil","la Lune"],"correct":2,"explication":"La chaleur du Soleil fait évaporer l'eau des mers, des lacs et des rivières."},
                {"q":"Que fait l'eau des mers et des lacs sous l'effet de la chaleur du Soleil ?","contexte":"Le cycle de l'eau","options":["Elle se condense","Elle s'évapore","Elle s'infiltre","Elle gèle"],"correct":1,"explication":"Chauffée par le Soleil, l'eau devient vapeur et monte dans l'air : c'est l'évaporation."},
                {"q":"En montant, la vapeur d'eau se refroidit et forme de minuscules gouttelettes. Comment s'appelle ce changement d'état ?","contexte":"Le cycle de l'eau","options":["la fusion","l'évaporation","la condensation","l'infiltration"],"correct":2,"explication":"La vapeur d'eau (gaz) redevient liquide en se refroidissant : c'est la condensation."},
                {"q":"De quoi sont faits les nuages ?","contexte":"Le cycle de l'eau","options":["de gouttelettes d'eau et de glace","d'air chaud très léger","de fumée et de poussière","de vapeur d'eau invisible"],"correct":0,"explication":"Les nuages sont formés de minuscules gouttes d'eau liquide et de cristaux de glace."},
                {"q":"Comment appelle-t-on la pluie, la neige et la grêle ?","contexte":"Le cycle de l'eau","options":["les infiltrations","les condensations","les précipitations","les évaporations"],"correct":2,"explication":"Toute eau qui tombe du ciel, liquide ou solide, est une précipitation."},
                {"q":"Comment s'appelle l'eau de pluie qui coule à la surface du sol vers les ruisseaux ?","contexte":"Le cycle de l'eau","options":["l'infiltration","le ruissèlement","la condensation","l'évaporation"],"correct":1,"explication":"L'eau qui s'écoule à la surface du sol ruissèle jusqu'aux cours d'eau."},
                {"q":"Comment s'appelle l'eau de pluie qui pénètre dans le sol ?","contexte":"Le cycle de l'eau","options":["l'infiltration","le ruissèlement","la condensation","la précipitation"],"correct":0,"explication":"L'eau s'infiltre dans le sol et peut rejoindre les nappes d'eau souterraines."},
                {"q":"L'eau de pluie est salée, car elle vient en grande partie de la mer.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Quand l'eau de mer s'évapore, le sel reste dans la mer : la pluie est de l'eau douce."},
                {"q":"Quelle suite d'étapes du cycle de l'eau est dans le bon ordre ?","contexte":"Le cycle de l'eau","options":["évaporation, condensation, précipitations, ruissèlement","condensation, évaporation, ruissèlement, précipitations","précipitations, condensation, évaporation, ruissèlement"],"correct":0,"explication":"L'eau s'évapore, se condense en nuages, retombe en précipitations, puis ruissèle vers la mer."},
                {"q":"Pourquoi les gouttes d'eau d'un nuage finissent-elles par tomber ?","contexte":"Le cycle de l'eau","options":["Le nuage se réchauffe et se met à fondre","Le vent les pousse toujours très fort vers le bas","Elles grossissent et deviennent trop lourdes"],"correct":2,"explication":"Les gouttelettes se rassemblent en gouttes plus grosses, trop lourdes pour rester en l'air."},
                {"q":"En ville, sur les routes et les trottoirs bétonnés, que fait surtout l'eau de pluie ?","contexte":"Le cycle de l'eau","options":["Elle s'infiltre","Elle gèle","Elle ruissèle"],"correct":2,"explication":"Le béton et le goudron empêchent l'eau de s'infiltrer : elle ruissèle vers les égouts."},
                {"q":"Où va une grande partie de l'eau qui s'infiltre dans le sol ?","contexte":"Le cycle de l'eau","options":["dans les nappes d'eau souterraines","directement dans les nuages","jusqu'au centre brulant de la Terre"],"correct":0,"explication":"L'eau infiltrée s'accumule dans les nappes souterraines, qui alimentent les sources et les puits."},
                {"q":"Les plantes rejettent de la vapeur d'eau par leurs feuilles.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"C'est la transpiration des plantes : elle participe aussi au cycle de l'eau."},
                {"q":"Le matin, de petites gouttes d'eau couvrent l'herbe : c'est la rosée. D'où vient-elle ?","contexte":"Le cycle de l'eau","options":["d'une pluie fine de la nuit","de l'eau qui remonte du sol","de la vapeur d'eau de l'air"],"correct":2,"explication":"Au contact de l'herbe refroidie pendant la nuit, la vapeur d'eau de l'air se condense en gouttes."},
                {"q":"Grâce au cycle de l'eau, que devient la quantité totale d'eau sur Terre ?","contexte":"Le cycle de l'eau","options":["Elle augmente à chaque pluie","Elle diminue de moitié chaque année","Elle reste à peu près la même"],"correct":2,"explication":"L'eau change d'état et de lieu, mais elle ne disparait pas : elle circule sans cesse."},
                {"q":"Que devient la neige tombée en montagne quand arrive le printemps ?","contexte":"Le cycle de l'eau","options":["Elle fond et alimente les rivières","Elle s'infiltre sous forme de glace","Elle remonte d'un coup en nuage"],"correct":0,"explication":"En fondant, la neige devient de l'eau liquide qui ruissèle et s'infiltre."},
                {"q":"Quel changement d'état transforme la vapeur d'eau en gouttelettes dans les nuages ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["condensation","la condensation"],"explication":"La vapeur d'eau se refroidit en altitude et se condense en gouttelettes."},
                {"q":"Après sa traversée de la Belgique et des Pays-Bas, où la Meuse jette-t-elle son eau ?","contexte":"Le cycle de l'eau","options":["dans la mer Méditerranée","dans la mer Noire","dans la mer du Nord"],"correct":2,"explication":"La Meuse se jette dans la mer du Nord, où l'eau peut de nouveau s'évaporer."},
                {"q":"Le cycle de l'eau n'a ni début ni fin : l'eau circule sans cesse.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"L'eau passe sans arrêt de la mer à l'air, puis au sol et de nouveau à la mer."},
                {"q":"Comment appelle-t-on l'endroit où l'eau souterraine sort naturellement du sol ?","contexte":"Le cycle de l'eau","options":["un nuage","une flaque","une nappe","une source"],"correct":3,"explication":"Une source est l'endroit où l'eau d'une nappe souterraine ressort à la surface."},
                {"q":"Pourquoi le linge dehors sèche-t-il plus vite en été qu'en hiver ?","contexte":"Le cycle de l'eau","options":["Le soleil fait fondre l'eau du linge","Le vent souffle toujours plus en été","La chaleur accélère l'évaporation"],"correct":2,"explication":"Plus il fait chaud, plus l'eau s'évapore vite."},
                {"q":"Qu'est-ce que la grêle ?","contexte":"Le cycle de l'eau","options":["de la vapeur devenue visible","des grains de glace qui tombent","de la pluie tombée très chaude en été"],"correct":1,"explication":"La grêle est une précipitation solide : des grains de glace formés dans le nuage."},
                {"q":"Aya laisse au soleil une bouteille fermée contenant un peu d'eau. Des gouttes apparaissent sous le bouchon. Quels changements d'état a-t-elle observés ?","contexte":"Le cycle de l'eau","options":["la fusion puis la solidification","la condensation puis la solidification","l'évaporation puis la condensation"],"correct":2,"explication":"L'eau chauffée s'évapore, puis la vapeur se condense sur le bouchon plus frais."},
                {"q":"Le brouillard est un nuage qui touche le sol.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Comme un nuage, le brouillard est fait de minuscules gouttes d'eau en suspension dans l'air, mais au ras du sol."},
                {"q":"Quel trajet l'eau peut-elle faire dans le cycle de l'eau ?","contexte":"Le cycle de l'eau","options":["rivière → nuage → mer → pluie","mer → rivière → nuage → pluie","mer → nuage → pluie → rivière"],"correct":2,"explication":"L'eau s'évapore de la mer, forme des nuages, retombe en pluie et rejoint les rivières."}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "i4",
      "niveau": 4,
      "titre": "Ile des Capitaines",
      "sousTitre": "Niveau 4 · La fin de la primaire",
      "couleur": "#7048e8",
      "symboles": [
        "4",
        "⏳",
        "N",
        "⚙"
      ],
      "ouvertParDefaut": true,
      "condition": {
        "quartier": "i3",
        "pourcent": 80
      },
      "agent": {
        "nom": "La pilote Ondine",
        "ferme": [
          "Ahoy ! Mon bateau ne t'emmène pas encore sur l'Ile des Capitaines."
        ]
      },
      "habitants": [
        {
          "nom": "La vigie Anaïs",
          "lignes": [
            "Le musée du temps est {b:i4-hist}.",
            "La tour des cartes est {b:i4-geo}."
          ],
          "indice": "Musée du temps : {b:i4-hist}. Tour des cartes : {b:i4-geo}."
        },
        {
          "nom": "Le savant Cosmo",
          "lignes": [
            "La serre du vivant est {b:i4-viv}.",
            "Et l'atelier des inventions est {b:i4-mat}."
          ],
          "indice": "Serre du vivant : {b:i4-viv}. Atelier des inventions : {b:i4-mat}."
        },
        {
          "nom": "La capitaine Zélie",
          "lignes": [
            "Pour aller sur l'ile suivante, parle au passeur du ponton.",
            "Il t'emmène quand tu as 80 % des étoiles dans chaque bâtiment de cette ile."
          ],
          "indice": "Pour l'ile suivante : 80 % des étoiles dans chaque bâtiment, puis le bateau du ponton."
        }
      ],
      "batiments": [
        {
          "id": "i4-hist",
          "matiere": "Histoire",
          "titre": "Le musée du temps",
          "symbole": "⏳",
          "description": "L'Époque contemporaine et les traces du passé.",
          "hote": {
            "nom": "L'historien Gustave",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e4-hist-a",
              "titre": "Révolutions et naissance de la Belgique",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"En quelle année commence la Révolution française ?","options":["1789","1492","1815","1830"],"correct":0,"explication":"La Révolution française commence en 1789 et ouvre l'Époque contemporaine."},
                {"q":"Quel évènement du 14 juillet 1789 symbolise le début de la Révolution française ?","options":["la prise de la Bastille","la bataille de Waterloo","l'indépendance belge","le sacre de Napoléon"],"correct":0,"explication":"Le 14 juillet 1789, le peuple de Paris prend la Bastille, une prison symbole du pouvoir du roi."},
                {"q":"Quel texte de 1789 affirme que « les hommes naissent et demeurent libres et égaux en droits » ?","options":["la charte de franchise de Bruges","la Constitution du royaume de Belgique","la Déclaration des droits de l'homme","le traité de Verdun"],"correct":2,"explication":"La Déclaration des droits de l'homme et du citoyen (aout 1789) proclame la liberté et l'égalité."},
                {"q":"Avant la Révolution française, quels groupes avaient des privilèges, comme ne pas payer certains impôts ?","options":["les artisans et les marchands","les bourgeois et les paysans","les paysans et les ouvriers","la noblesse et le clergé"],"correct":3,"explication":"Nobles et membres du clergé étaient privilégiés ; la Révolution abolit ces privilèges."},
                {"q":"Sur la frise, la Révolution française marque le début de quelle période ?","options":["les Temps modernes","le Moyen Âge","l'Époque contemporaine","l'Antiquité"],"correct":2,"explication":"1789 sépare les Temps modernes de l'Époque contemporaine."},
                {"q":"Près de quelle localité belge Napoléon est-il définitivement battu, le 18 juin 1815 ?","options":["Bastogne","Marcinelle","Waterloo","Courtrai"],"correct":2,"explication":"Le 18 juin 1815, Napoléon perd la bataille de Waterloo, au sud de Bruxelles."},
                {"q":"Entre 1815 et 1830, nos régions font partie d'un royaume dirigé par Guillaume Ier. Lequel ?","options":["l'Empire allemand","le Royaume-Uni des Pays-Bas","le royaume d'Espagne","le royaume de France"],"correct":1,"explication":"Après Waterloo, nos régions sont réunies aux Pays-Bas sous le roi Guillaume Ier d'Orange."},
                {"q":"Quel opéra, joué à Bruxelles au théâtre de la Monnaie en aout 1830, est le symbole du début de la révolution belge ?","options":["La Muette de Portici","Carmen","Les Noces de Figaro","Le Barbier de Séville"],"correct":0,"explication":"Le 25 aout 1830, après « La Muette de Portici », des spectateurs sortent manifester dans les rues."},
                {"q":"En quelle année la Belgique devient-elle indépendante ?","contexte":"Écris l'année.","type":"saisie","clavier":"texte","reponse":["1830"],"explication":"En 1830, la Belgique se sépare du royaume des Pays-Bas et devient indépendante."},
                {"q":"De quel royaume la Belgique se sépare-t-elle en 1830 ?","options":["de l'Empire autrichien","du royaume des Pays-Bas","de l'Empire allemand","du royaume de France"],"correct":1,"explication":"En 1830, les Belges se révoltent contre le roi des Pays-Bas, Guillaume Ier."},
                {"q":"Lequel de ces mécontentements a poussé les Belges à se révolter en 1830 ?","options":["le roi voulait rétablir les châteaux forts","le roi voulait rendre nos régions à la France","le roi interdisait le chemin de fer","le roi favorisait le Nord et sa langue"],"correct":3,"explication":"Beaucoup de Belges trouvaient que Guillaume Ier favorisait le Nord, sa langue et sa religion."},
                {"q":"Qui devient le premier roi des Belges en 1831 ?","options":["Léopold Ier","Guillaume Ier","Albert Ier","Léopold II"],"correct":0,"explication":"Léopold Ier prête serment le 21 juillet 1831 : il est le premier roi des Belges."},
                {"q":"La fête nationale belge rappelle le serment du premier roi, Léopold Ier. Quel jour de juillet la fête-t-on ?","contexte":"Écris le numéro du jour.","type":"saisie","clavier":"texte","reponse":["21","21 juillet","le 21 juillet","vingt-et-un"],"explication":"Le 21 juillet 1831, Léopold Ier prête serment : c'est notre fête nationale."},
                {"q":"Comment s'appelle l'hymne national belge, écrit en 1830 ?","options":["le Chant des Wallons","la Brabançonne","la Marseillaise","l'Ode à la joie"],"correct":1,"explication":"La Brabançonne est l'hymne belge ; la Marseillaise est l'hymne de la France."},
                {"q":"Vrai ou faux ? Depuis 1831, la Belgique est une monarchie constitutionnelle : le roi doit respecter la Constitution.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La Constitution belge de 1831 fixe les règles que le roi et les autres pouvoirs doivent respecter."},
                {"q":"Après le Royaume-Uni, quel pays est le premier du continent européen à connaitre la révolution industrielle ?","options":["la Grèce","l'Espagne","l'Italie","la Belgique"],"correct":3,"explication":"Grâce à son charbon et à son fer, la Belgique s'industrialise très tôt, dès le début du XIXe siècle."},
                {"q":"Quelle machine est au cœur de la révolution industrielle du XIXe siècle ?","options":["le moteur électrique","le moulin à vent","l'ordinateur","la machine à vapeur"],"correct":3,"explication":"La machine à vapeur fait tourner les usines, les pompes des mines et les locomotives."},
                {"q":"Quel combustible fait surtout fonctionner les machines à vapeur du XIXe siècle ?","options":["l'uranium","le charbon","le bois de chêne","le pétrole"],"correct":1,"explication":"On brule du charbon pour chauffer l'eau et produire la vapeur."},
                {"q":"Le premier train de voyageurs du continent européen roule en 1835 entre Bruxelles et une autre ville belge. Laquelle ?","contexte":"Écris le nom de la ville.","type":"saisie","clavier":"texte","reponse":["Malines","malines","Mechelen","mechelen"],"explication":"Le 5 mai 1835, le premier train relie Bruxelles à Malines."},
                {"q":"Dans quelle zone de Belgique se trouvent la plupart des charbonnages au XIXe siècle ?","options":["le plateau ardennais","la côte de la mer du Nord","le sillon Sambre-et-Meuse","les polders flamands"],"correct":2,"explication":"Les charbonnages s'étendent du Borinage à Liège, le long de la Sambre et de la Meuse."},
                {"q":"Quel industriel anglais installe de grandes usines à Seraing, près de Liège, au début du XIXe siècle ?","options":["John Cockerill","Adolphe Sax","James Watt","Ernest Solvay"],"correct":0,"explication":"John Cockerill fonde à Seraing des usines de machines et de métal à partir de 1817."},
                {"q":"Quelle était la vie de beaucoup d'enfants d'ouvriers au XIXe siècle ?","options":["ils allaient tous à l'école jusqu'à l'âge de 18 ans","ils travaillaient de longues heures à la mine","ils ne travaillaient que le mercredi","ils partaient en vacances à la côte"],"correct":1,"explication":"Avant les lois qui l'ont interdit, de jeunes enfants travaillaient dans les mines et les usines."},
                {"q":"Qu'est-ce qu'un coup de grisou ?","options":["un incendie dans une filature de laine","une grève des ouvriers d'usine","une explosion de gaz dans une mine","un accident de train à vapeur"],"correct":2,"explication":"Le grisou est un gaz des mines de charbon qui peut exploser au contact d'une flamme."},
                {"q":"Pourquoi beaucoup de paysans partent-ils vivre en ville au XIXe siècle ?","options":["pour fuir la Révolution française","pour travailler dans les usines","pour échapper aux Romains","pour devenir chevaliers du roi"],"correct":1,"explication":"Les usines attirent les travailleurs de la campagne : les villes industrielles grandissent."},
                {"q":"Quel évènement est le plus ancien ?","options":["l'indépendance de la Belgique","le premier train Bruxelles-Malines","la bataille de Waterloo","la Révolution française"],"correct":3,"explication":"Ordre : 1789, 1815, 1830, 1835."},
                {"q":"Quel évènement est le plus récent ?","options":["l'indépendance de la Belgique","la prise de la Bastille","le premier train Bruxelles-Malines","la dernière défaite de Napoléon à Waterloo"],"correct":2,"explication":"Ordre : Bastille (1789), Waterloo (1815), indépendance (1830), premier train (1835)."},
                {"q":"L'ancien site minier du Grand-Hornu, près de Mons, est une trace du passé de quelle époque ?","options":["la révolution industrielle","la romanisation","l'époque des châteaux forts","l'époque de Charlemagne"],"correct":0,"explication":"Le Grand-Hornu, construit au début du XIXe siècle, témoigne de l'industrie du charbon."},
                {"q":"Vrai ou faux ? Au XIXe siècle, les ouvriers travaillaient souvent plus de 12 heures par jour.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Les journées de travail étaient très longues, souvent 12 à 14 heures, six jours sur sept."}
              ]
            },
            {
              "id": "e4-hist-b",
              "titre": "Guerres mondiales et immigration",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"En quelles années a lieu la Première Guerre mondiale ?","options":["1940-1945","1870-1871","1830-1831","1914-1918"],"correct":3,"explication":"La Première Guerre mondiale dure de 1914 à 1918."},
                {"q":"Pourquoi l'Allemagne envahit-elle la Belgique en aout 1914 ?","options":["pour aider la Belgique contre la France","pour traverser le pays et attaquer la France","pour fuir une invasion venue de Russie","pour s'emparer du port de Marseille"],"correct":1,"explication":"L'armée allemande veut passer par la Belgique pour attaquer la France plus vite."},
                {"q":"Vrai ou faux ? En 1914, la Belgique était un pays neutre.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La Belgique était neutre ; l'Allemagne viole cette neutralité en l'envahissant."},
                {"q":"Quel roi des Belges commande l'armée pendant la Première Guerre mondiale ?","options":["Léopold Ier","Léopold III","Albert Ier","Baudouin"],"correct":2,"explication":"Albert Ier, surnommé le « roi-chevalier », reste avec ses soldats sur le front de l'Yser."},
                {"q":"Le long de quel fleuve côtier l'armée belge arrête-t-elle les Allemands en octobre 1914 ?","options":["la Meuse","la Sambre","l'Escaut","l'Yser"],"correct":3,"explication":"En octobre 1914, l'armée belge tient le front de l'Yser, près de la mer du Nord."},
                {"q":"Comment les Belges bloquent-ils l'avance allemande près de Nieuport en 1914 ?","options":["en fermant le port d'Anvers","en inondant la plaine de l'Yser","en détruisant tous les ponts de la Meuse","en faisant sauter les charbonnages"],"correct":1,"explication":"On ouvre les écluses de Nieuport : l'eau de mer inonde la plaine et arrête l'ennemi."},
                {"q":"Comment appelle-t-on les longs fossés où vivent et combattent les soldats de 1914-1918 ?","options":["les remparts","les douves","les tranchées","les terrils"],"correct":2,"explication":"Les soldats vivent dans des tranchées creusées dans le sol, souvent pleines de boue."},
                {"q":"Près de quelle ville belge les gaz de combat sont-ils utilisés pour la première fois à grande échelle, en 1915 ?","options":["Liège","Ypres","Bastogne","Namur"],"correct":1,"explication":"Le 22 avril 1915, l'armée allemande lance des gaz toxiques près d'Ypres."},
                {"q":"La Première Guerre mondiale se termine par l'armistice du 11 novembre. En quelle année ?","contexte":"Écris l'année.","type":"saisie","clavier":"texte","reponse":["1918"],"explication":"L'armistice du 11 novembre 1918 met fin aux combats ; c'est un jour férié en Belgique."},
                {"q":"Quelle fleur est devenue le symbole du souvenir des soldats morts en Flandre en 1914-1918 ?","options":["le tournesol","la rose","la tulipe","le coquelicot"],"correct":3,"explication":"Les coquelicots poussaient sur les champs de bataille de Flandre : ils rappellent les soldats tombés."},
                {"q":"Quand l'armée allemande envahit-elle la Belgique pendant la Seconde Guerre mondiale ?","options":["en aout 1914","en juin 1945","en mai 1940","en septembre 1944"],"correct":2,"explication":"Le 10 mai 1940, l'Allemagne envahit la Belgique ; le pays est occupé jusqu'en 1944."},
                {"q":"Qui dirige l'Allemagne nazie pendant la Seconde Guerre mondiale ?","options":["Adolf Hitler","Charles Quint","Napoléon","Guillaume II"],"correct":0,"explication":"Adolf Hitler et le parti nazi dirigent l'Allemagne de 1933 à 1945."},
                {"q":"Pendant l'occupation, comment appelle-t-on les personnes qui luttent en secret contre l'occupant ?","options":["les missi dominici","les résistants","les collaborateurs","les bourgeois"],"correct":1,"explication":"Les résistants cachent des personnes, sabotent et diffusent des journaux clandestins."},
                {"q":"Pendant la guerre, la nourriture manque. Comment s'appelle le système qui limite la quantité de nourriture par personne ?","options":["le rationnement","l'armistice","la corvée","la dime"],"correct":0,"explication":"Avec le rationnement, chacun reçoit des timbres donnant droit à une petite quantité de nourriture."},
                {"q":"Vrai ou faux ? Pendant la Seconde Guerre mondiale, des milliers de Juifs de Belgique ont été déportés et assassinés.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Depuis la caserne Dossin à Malines, des milliers de Juifs et de Tsiganes sont déportés vers les camps nazis."},
                {"q":"En quel mois de l'année 1944 Bruxelles est-elle libérée ?","options":["en mai","en septembre","en janvier","en décembre"],"correct":1,"explication":"Les troupes alliées libèrent Bruxelles le 3 septembre 1944."},
                {"q":"Pendant l'hiver 1944-1945, quelle grande bataille se déroule autour de Bastogne ?","options":["la bataille de l'Yser","la bataille de Waterloo","la bataille des Ardennes","la bataille des Éperons d'or"],"correct":2,"explication":"Fin 1944, l'Allemagne attaque une dernière fois dans les Ardennes ; Bastogne résiste."},
                {"q":"En quelle année la Seconde Guerre mondiale se termine-t-elle en Europe ?","contexte":"Écris l'année.","type":"saisie","clavier":"texte","reponse":["1945"],"explication":"Le 8 mai 1945, l'Allemagne capitule : la guerre est finie en Europe."},
                {"q":"Après 1945, pourquoi la Belgique fait-elle venir de nombreux travailleurs étrangers ?","options":["toutes ses usines ont fermé","elle manque d'ouvriers pour ses mines","elle veut peupler la côte belge","elle a besoin de soldats pour une guerre"],"correct":1,"explication":"Pour produire beaucoup de charbon, la Belgique manque de mineurs et en fait venir de l'étranger."},
                {"q":"De quel pays viennent les premiers grands groupes de mineurs immigrés, dès 1946 ?","options":["de la Turquie","du Maroc","de l'Italie","de la Grèce"],"correct":2,"explication":"En 1946, un accord avec l'Italie fait venir des milliers de mineurs italiens."},
                {"q":"Que s'est-il passé au Bois du Cazier, à Marcinelle, le 8 aout 1956 ?","options":["le roi a ouvert un nouveau charbonnage","un train de charbon a déraillé en gare","un incendie dans la mine a tué 262 mineurs","une grève a fermé toutes les mines du pays"],"correct":2,"explication":"Un incendie au fond de la mine fait 262 morts, de 12 nationalités."},
                {"q":"Vrai ou faux ? Plus de la moitié des victimes du Bois du Cazier étaient des mineurs italiens.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Sur les 262 victimes, 136 étaient italiennes."},
                {"q":"Avec quels pays la Belgique signe-t-elle en 1964 des accords pour faire venir des travailleurs ?","options":["le Maroc et la Turquie","la Grèce et l'Italie","l'Italie et l'Espagne","la France et l'Allemagne"],"correct":0,"explication":"En 1964, la Belgique signe des accords avec le Maroc et la Turquie."},
                {"q":"Lequel de ces apports est lié à l'immigration en Belgique après 1945 ?","options":["l'invention du premier chemin de fer","la fondation de la ville de Tongres","la construction des beffrois médiévaux","de nouvelles cuisines, langues et traditions"],"correct":3,"explication":"Les immigrés ont enrichi la Belgique par leur travail, leur cuisine, leurs langues et leurs traditions."},
                {"q":"Qui est l'auteur de ce document ?","contexte":"Lettre d'un soldat belge, écrite dans une tranchée de l'Yser le 3 mars 1916 et adressée à sa mère : « Ici, la boue nous monte aux genoux et nous n'avons plus dormi depuis trois nuits. »","options":["sa mère","un officier allemand","un historien actuel","un soldat belge"],"correct":3,"explication":"L'auteur est celui qui a écrit le document : ici, un soldat belge."},
                {"q":"Que peut-on comprendre de façon implicite en lisant ce document ?","contexte":"Lettre d'un soldat belge, écrite dans une tranchée de l'Yser le 3 mars 1916 et adressée à sa mère : « Ici, la boue nous monte aux genoux et nous n'avons plus dormi depuis trois nuits. »","options":["les soldats vivent dans des conditions très dures","le soldat passe de bonnes vacances","la mère du soldat vit dans la tranchée","la guerre est déjà terminée en 1916"],"correct":0,"explication":"Le texte ne le dit pas directement, mais la boue et le manque de sommeil montrent une vie très dure."},
                {"q":"Une affiche de 1915 demande aux Belges de donner de l'argent pour soigner les soldats blessés. Quelle est l'intention de son auteur ?","options":["convaincre les gens d'aider","annoncer une fête au village","décrire un beau paysage","raconter la vie d'un roi"],"correct":0,"explication":"Une affiche de ce type veut convaincre : elle pousse les gens à donner."},
                {"q":"Pour bien comprendre une trace du passé, quelle question faut-il se poser d'abord ?","options":["Est-elle facile à lire ou non ?","Combien de pages compte-t-elle ?","De quelle couleur est son papier ?","Qui l'a faite, quand et pourquoi ?"],"correct":3,"explication":"Connaitre l'auteur, la date et l'intention aide à comprendre et à critiquer un document."},
                {"q":"Une photo prise à Marcinelle en aout 1956 montre des familles qui attendent devant les grilles de la mine. Ce document est…","options":["une trace du passé","un document reconstitué","un récit inventé","une carte thématique"],"correct":0,"explication":"La photo a été prise au moment de la catastrophe : c'est une trace du passé."}
              ]
            },
            {
              "id": "e4-hist-c",
              "titre": "Toute l'histoire sur la frise",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quelle est la bonne suite des cinq périodes de l'histoire ?","options":["Antiquité, Préhistoire, Moyen Âge, Temps modernes, Époque contemporaine","Préhistoire, Antiquité, Temps modernes, Moyen Âge, Époque contemporaine","Préhistoire, Antiquité, Moyen Âge, Temps modernes, Époque contemporaine","Préhistoire, Moyen Âge, Antiquité, Temps modernes, Époque contemporaine"],"correct":2,"explication":"Ordre des périodes : Préhistoire, Antiquité, Moyen Âge, Temps modernes, Époque contemporaine."},
                {"q":"Quel évènement sépare la Préhistoire de l'Antiquité ?","options":["la naissance de Jésus","l'arrivée des Romains","l'invention de l'écriture","la découverte du feu"],"correct":2,"explication":"L'Antiquité commence avec l'invention de l'écriture, vers 3500 av. J.-C."},
                {"q":"Vers quelle date l'écriture est-elle inventée ?","options":["vers 1450","vers l'an 1","vers 476 apr. J.-C.","vers 3500 av. J.-C."],"correct":3,"explication":"L'écriture apparait vers 3500 av. J.-C. ; vers 1450, c'est l'imprimerie."},
                {"q":"Dans quelle période se situe le règne de Charlemagne ?","options":["le Moyen Âge","l'Antiquité","les Temps modernes","l'Époque contemporaine"],"correct":0,"explication":"Charlemagne est couronné en 800 : c'est le Moyen Âge (476-1492)."},
                {"q":"Dans quelle période se situe l'indépendance de la Belgique ?","options":["le Moyen Âge","l'Époque contemporaine","les Temps modernes","l'Antiquité"],"correct":1,"explication":"1830 est après 1789 : c'est l'Époque contemporaine."},
                {"q":"Dans quelle période les Romains construisent-ils des routes et des villas dans nos régions ?","options":["les Temps modernes","la Préhistoire","l'Antiquité","le Moyen Âge"],"correct":2,"explication":"La romanisation de nos régions a lieu pendant l'Antiquité."},
                {"q":"Dans quelle période l'être humain commence-t-il à cultiver la terre et à élever des animaux ?","options":["le Moyen Âge","la Préhistoire","les Temps modernes","l'Antiquité"],"correct":1,"explication":"Agriculture et élevage apparaissent au Néolithique, la dernière partie de la Préhistoire."},
                {"q":"En quel siècle se situe l'année 1830 ?","contexte":"Écris le siècle en chiffres romains ou arabes (ex. : XVe ou 15e).","type":"saisie","clavier":"texte","reponse":["XIXe","19e","XIX","19","XIXème","19ème","XIXeme","19eme","XIXe siècle","19e siècle","dix-neuvième","dix-neuvieme","xixe","XIXe siecle","19e siecle"],"explication":"De 1801 à 1900, c'est le XIXe siècle."},
                {"q":"En quel siècle se situe l'année 1302, celle de la bataille des Éperons d'or ?","contexte":"Écris le siècle en chiffres romains ou arabes (ex. : XVe ou 15e).","type":"saisie","clavier":"texte","reponse":["XIVe","14e","XIV","14","XIVème","14ème","XIVeme","14eme","XIVe siècle","14e siècle","quatorzième","quatorzieme","xive","XIVe siecle","14e siecle"],"explication":"De 1301 à 1400, c'est le XIVe siècle."},
                {"q":"Quelle date est la plus ancienne ?","options":["l'an 1","30 apr. J.-C.","50 av. J.-C.","20 av. J.-C."],"correct":2,"explication":"Avant J.-C., plus le nombre est grand, plus la date est ancienne."},
                {"q":"Combien d'années séparent l'indépendance de la Belgique (1830) et le début de la Première Guerre mondiale (1914) ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["84"],"explication":"1914 − 1830 = 84 ans."},
                {"q":"Combien d'années séparent l'arrivée de Colomb en Amérique (1492) et la Révolution française (1789) ?","contexte":"Écris un nombre.","type":"saisie","clavier":"texte","reponse":["297"],"explication":"1789 − 1492 = 297 ans : c'est la durée des Temps modernes."},
                {"q":"Quel évènement est le plus ancien ?","options":["la chute de l'Empire romain d'Occident","la bataille des Éperons d'or à Courtrai","le couronnement de Charlemagne","le baptême de Clovis, roi des Francs"],"correct":0,"explication":"Ordre : chute de Rome (476), Clovis (vers 500), Charlemagne (800), Courtrai (1302)."},
                {"q":"Quel évènement est le plus récent ?","options":["la bataille de Waterloo","la catastrophe du Bois du Cazier","la fin de la Seconde Guerre mondiale","l'indépendance de la Belgique"],"correct":1,"explication":"Ordre : Waterloo (1815), indépendance (1830), fin de la guerre (1945), Bois du Cazier (1956)."},
                {"q":"Lequel de ces évènements se passe pendant les Temps modernes ?","options":["le premier tour du monde","le baptême de Clovis","la bataille de l'Yser","le premier train belge"],"correct":0,"explication":"Le premier tour du monde (1519-1522) se situe entre 1492 et 1789."},
                {"q":"Lequel de ces évènements se passe pendant l'Antiquité ?","options":["l'invention de l'imprimerie par Gutenberg","la construction des beffrois","la fondation de Tongres par les Romains","les peintures de la grotte de Lascaux"],"correct":2,"explication":"Tongres est fondée par les Romains ; Lascaux, c'est la Préhistoire, sans écriture."},
                {"q":"Lequel de ces objets est une trace de la Préhistoire ?","options":["un biface en silex taillé","une affiche de 1914","un parchemin du Moyen Âge","une pièce de monnaie romaine"],"correct":0,"explication":"Le biface en silex taillé est un outil des hommes préhistoriques."},
                {"q":"Lequel de ces objets date de l'Époque contemporaine ?","options":["une lampe de mineur de 1900","un biface en silex taillé","une tuile de villa romaine","une épée de chevalier"],"correct":0,"explication":"1900 est après 1789 : c'est l'Époque contemporaine."},
                {"q":"Vrai ou faux ? Jules César a vécu avant la naissance de Jésus-Christ.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Jules César conquiert la Gaule et nos régions vers 57-50 av. J.-C. ; il meurt en 44 av. J.-C."},
                {"q":"Vrai ou faux ? Charlemagne et Christophe Colomb ont vécu à la même époque.","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Charlemagne vit vers 800, Colomb vers 1492 : environ 700 ans les séparent."},
                {"q":"Vrai ou faux ? La chute de l'Empire romain d'Occident (476) marque le passage de l'Antiquité au Moyen Âge.","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"476 est la limite entre l'Antiquité et le Moyen Âge sur la frise."},
                {"q":"Qu'est-ce qu'un enfant de l'époque de Charlemagne n'a PAS pu connaitre ?","options":["la religion chrétienne","le livre imprimé","le pain de blé","le cheval de labour"],"correct":1,"explication":"L'imprimerie n'existe que vers 1450, environ 650 ans après Charlemagne."},
                {"q":"Quelle invention date de l'Époque contemporaine ?","options":["l'écriture","la caravelle des explorateurs","l'imprimerie","le chemin de fer"],"correct":3,"explication":"Le chemin de fer date du XIXe siècle (1835 en Belgique)."},
                {"q":"Sur une frise chronologique, où place-t-on 200 av. J.-C. par rapport à 100 av. J.-C. ?","options":["au même endroit, autour de l'an 1","plus à droite, car le nombre est plus grand","plus à droite, car c'est plus ancien","plus à gauche, car c'est plus ancien"],"correct":3,"explication":"200 av. J.-C. est plus ancien que 100 av. J.-C. : sur la frise, il se place plus à gauche."},
                {"q":"Quel personnage a vécu pendant les Temps modernes ?","options":["Jules César","Albert Ier","Clovis","Charles Quint"],"correct":3,"explication":"Charles Quint, né à Gand en 1500, vit pendant les Temps modernes."},
                {"q":"Combien de siècles environ séparent la chute de Rome (476) et l'arrivée de Colomb en Amérique (1492) ?","options":["environ 20 siècles","environ 5 siècles","environ 15 siècles","environ 10 siècles"],"correct":3,"explication":"1492 − 476 = 1016 ans, soit environ 10 siècles : c'est la durée du Moyen Âge."},
                {"q":"Quelle suite respecte l'ordre chronologique ?","options":["Clovis, Colomb, Charlemagne, Waterloo","Charlemagne, Clovis, Colomb, Waterloo","Clovis, Charlemagne, Colomb, Waterloo","Clovis, Charlemagne, Waterloo, Colomb"],"correct":2,"explication":"Clovis (vers 500), Charlemagne (800), Colomb (1492), Waterloo (1815)."},
                {"q":"Quelle période de l'histoire est de loin la plus longue ?","options":["la Préhistoire","le Moyen Âge","l'Antiquité","l'Époque contemporaine"],"correct":0,"explication":"La Préhistoire dure des centaines de milliers d'années, jusqu'à l'invention de l'écriture."},
                {"q":"Un château fort, un beffroi et une cathédrale gothique sont des traces de quelle période ?","options":["l'Antiquité","le Moyen Âge","l'Époque contemporaine","la Préhistoire"],"correct":1,"explication":"Châteaux forts, beffrois et cathédrales gothiques ont été construits au Moyen Âge."},
                {"q":"Lequel de ces évènements a eu lieu au XXe siècle ?","options":["l'indépendance de la Belgique","la catastrophe du Bois du Cazier","la Révolution française","le premier train de voyageurs belge"],"correct":1,"explication":"Le XXe siècle va de 1901 à 2000 : le Bois du Cazier date de 1956."}
              ]
            }
          ]
        },
        {
          "id": "i4-geo",
          "matiere": "Géographie",
          "titre": "La tour des cartes",
          "symbole": "N",
          "description": "Population et réchauffement climatique.",
          "hote": {
            "nom": "La gardienne du refuge Hildra",
            "genre": "fille"
          },
          "defis": [
            {
              "id": "e4-geo-a",
              "titre": "La population du monde",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Combien d'habitants compte environ la Terre aujourd'hui ?","options":["environ 8 millions","environ 800 millions","environ 8 milliards","environ 80 milliards"],"correct":2,"explication":"La population mondiale a dépassé 8 milliards d'habitants en 2022."},
                {"q":"Quel continent est le plus peuplé ?","options":["l'Asie","l'Afrique","l'Europe","l'Amérique"],"correct":0,"explication":"L'Asie compte à elle seule plus de la moitié des habitants de la Terre."},
                {"q":"Quelle part de la population mondiale vit en Asie ?","options":["environ un quart","environ un dixième","plus de la moitié","presque la totalité"],"correct":2,"explication":"Environ six humains sur dix vivent en Asie."},
                {"q":"Quels sont les deux pays les plus peuplés du monde ?","options":["l'Inde et la Chine","la Russie et le Canada","les États-Unis et le Brésil","le Japon et l'Indonésie"],"correct":0,"explication":"L'Inde et la Chine comptent chacune plus d'un milliard d'habitants."},
                {"q":"Quel continent n'a aucun habitant permanent ?","options":["l'Océanie","l'Afrique","l'Antarctique","l'Europe"],"correct":2,"explication":"En Antarctique, seuls des scientifiques séjournent pour un temps dans des bases."},
                {"q":"Que mesure la densité de population ?","options":["le nombre total d'habitants d'un pays","la superficie d'un pays en km²","le nombre de naissances par année","le nombre moyen d'habitants par km²"],"correct":3,"explication":"La densité indique combien d'habitants vivent, en moyenne, sur chaque km²."},
                {"q":"Quelle opération permet de calculer la densité de population ?","options":["superficie ÷ habitants","habitants ÷ superficie","habitants × superficie","habitants + superficie"],"correct":1,"explication":"On divise le nombre d'habitants par la superficie en km²."},
                {"q":"Un village de 20 km² compte 2 000 habitants. Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["100"],"explication":"2 000 ÷ 20 = 100 habitants par km²."},
                {"q":"Une commune de 30 km² compte 6 000 habitants. Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["200"],"explication":"6 000 ÷ 30 = 200 habitants par km²."},
                {"q":"Une ile de 50 km² compte 500 habitants. Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["10","dix"],"explication":"500 ÷ 50 = 10 habitants par km²."},
                {"q":"Une ville de 10 km² compte 40 000 habitants. Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["4000","4 000","4.000"],"explication":"40 000 ÷ 10 = 4 000 habitants par km²."},
                {"q":"Une ville de 100 km² compte 300 000 habitants. Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["3000","3 000","3.000"],"explication":"300 000 ÷ 100 = 3 000 habitants par km²."},
                {"q":"Une région de 2 000 km² compte 100 000 habitants. Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["50","cinquante"],"explication":"100 000 ÷ 2 000 = 50 habitants par km²."},
                {"q":"Commune A : 3 000 habitants sur 10 km². Commune B : 3 000 habitants sur 30 km². Laquelle est la plus densément peuplée ?","options":["la commune B","la commune A","elles ont la même densité"],"correct":1,"explication":"A : 3 000 ÷ 10 = 300 hab./km² ; B : 3 000 ÷ 30 = 100 hab./km². A est plus dense."},
                {"q":"Région A : 1 000 habitants sur 5 km². Région B : 4 000 habitants sur 40 km². Laquelle est la plus densément peuplée ?","options":["la région B","la région A","elles ont la même densité"],"correct":1,"explication":"A : 1 000 ÷ 5 = 200 ; B : 4 000 ÷ 40 = 100. Plus d'habitants ne veut pas dire plus dense."},
                {"q":"Un pays a une densité de 50 habitants par km² et une superficie de 1 000 km². Combien a-t-il d'habitants ?","contexte":"Réponds par un nombre.","type":"saisie","clavier":"texte","reponse":["50000","50 000","50.000"],"explication":"Habitants = densité × superficie : 50 × 1 000 = 50 000 habitants."},
                {"q":"Où trouve-t-on une très forte densité de population ?","options":["dans le désert du Sahara","au centre du Groenland","dans l'est de la Chine","au cœur de l'Amazonie"],"correct":2,"explication":"Les plaines et les côtes de l'est de la Chine sont parmi les régions les plus peuplées du monde."},
                {"q":"Laquelle de ces régions est presque vide d'habitants ?","options":["le nord de l'Inde","le delta du Nil","l'ile de Java","le nord du Canada"],"correct":3,"explication":"Le grand froid du nord du Canada rend la vie difficile : très peu de gens y vivent."},
                {"q":"Pourquoi le Sahara est-il très peu peuplé ?","options":["le manque d'eau y rend la vie difficile","il y fait trop froid toute l'année","les montagnes y sont beaucoup trop hautes","il est couvert de forêts très épaisses"],"correct":0,"explication":"Sans eau, il est très difficile de cultiver et de vivre : les déserts sont peu peuplés."},
                {"q":"Pourquoi de nombreuses personnes s'installent-elles près des fleuves et des côtes ?","options":["pour l'eau, les cultures et les échanges","parce qu'il y fait toujours plus chaud","parce que le sol y est plus élevé","pour échapper aux pluies abondantes"],"correct":0,"explication":"L'eau sert à boire et à cultiver, et les fleuves et la mer facilitent le transport et le commerce."},
                {"q":"Le long de quel fleuve vivent la plupart des habitants de l'Égypte ?","options":["le Nil","le Niger","le Congo","l'Amazone"],"correct":0,"explication":"L'Égypte est surtout désertique : la population se serre le long du Nil, qui apporte l'eau."},
                {"q":"Aujourd'hui, plus de la moitié des habitants du monde vivent en ville.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Depuis le début du XXIe siècle, les citadins sont plus nombreux que les habitants des campagnes."},
                {"q":"Un pays qui a beaucoup d'habitants a toujours une forte densité de population.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"La densité dépend aussi de la superficie : un pays immense peut être très peuplé mais peu dense."},
                {"q":"Lequel de ces pays est immense mais très peu densément peuplé ?","options":["les Pays-Bas","la Belgique","le Canada","le Bangladesh"],"correct":2,"explication":"Le Canada est très vaste et une grande partie de son territoire est froide : sa densité est faible."},
                {"q":"Parmi les continents habités, lequel compte le moins d'habitants ?","options":["l'Asie","l'Afrique","l'Europe","l'Océanie"],"correct":3,"explication":"L'Océanie (Australie, Nouvelle-Zélande, iles du Pacifique) est le continent habité le moins peuplé."},
                {"q":"Quel classement va du continent le plus peuplé au moins peuplé ?","options":["Afrique, Asie, Europe, Océanie","Asie, Europe, Afrique, Océanie","Asie, Afrique, Europe, Océanie","Europe, Asie, Océanie, Afrique"],"correct":2,"explication":"L'Asie est loin devant ; l'Afrique compte plus d'habitants que l'Europe ; l'Océanie ferme la marche."},
                {"q":"Quelle est l'unité de la densité de population ?","options":["km² par habitant","habitants par km²","habitants par an","km par habitant"],"correct":1,"explication":"La densité s'exprime en habitants par kilomètre carré (hab./km²)."},
                {"q":"Pourquoi les hautes montagnes comme l'Himalaya sont-elles peu peuplées ?","options":["le manque total de pluie","le froid et les fortes pentes","la chaleur trop étouffante","les inondations permanentes"],"correct":1,"explication":"En haute montagne, le froid et le relief rendent difficiles les cultures, les routes et l'habitat."}
              ]
            },
            {
              "id": "e4-geo-b",
              "titre": "Le réchauffement climatique",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel gaz, rejeté surtout quand on brule du charbon, du pétrole ou du gaz, renforce l'effet de serre ?","options":["l'oxygène que l'on respire","l'azote","l'hélium","le dioxyde de carbone"],"correct":3,"explication":"La combustion des énergies fossiles rejette du dioxyde de carbone (CO2), principal gaz à effet de serre dû à l'homme."},
                {"q":"Comment appelle-t-on le phénomène par lequel certains gaz de l'atmosphère retiennent la chaleur près de la Terre ?","type":"saisie","clavier":"texte","reponse":["effet de serre","l'effet de serre","un effet de serre"],"explication":"Comme les vitres d'une serre, ces gaz retiennent une partie de la chaleur."},
                {"q":"Sans effet de serre naturel, la Terre serait beaucoup plus froide.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'effet de serre naturel est utile ; c'est son renforcement par les activités humaines qui réchauffe la Terre."},
                {"q":"Quelle activité humaine renforce le plus l'effet de serre ?","options":["utiliser l'énergie du vent","planter des haies et des arbres","bruler du charbon, du pétrole et du gaz","produire de l'électricité solaire"],"correct":2,"explication":"Bruler des énergies fossiles libère de grandes quantités de dioxyde de carbone."},
                {"q":"Pourquoi abattre les grandes forêts aggrave-t-il le réchauffement ?","options":["les arbres produisent beaucoup de chaleur","les forêts empêchent la pluie de tomber","les arbres refroidissent les océans","les arbres absorbent le dioxyde de carbone"],"correct":3,"explication":"Les arbres captent du CO2 pour grandir ; sans eux, plus de CO2 reste dans l'air."},
                {"q":"Quel gaz à effet de serre est produit en grande quantité par la digestion des vaches ?","options":["l'oxygène","l'hydrogène","le méthane","l'hélium"],"correct":2,"explication":"Les ruminants rejettent du méthane, un puissant gaz à effet de serre."},
                {"q":"Lequel de ces combustibles n'est PAS une énergie fossile ?","options":["le charbon","le pétrole","le bois","le gaz naturel"],"correct":2,"explication":"Le charbon, le pétrole et le gaz naturel se sont formés sous terre pendant des millions d'années ; le bois repousse."},
                {"q":"Quelle conséquence du réchauffement observe-t-on dans les Alpes ?","options":["les glaciers fondent et reculent","les glaciers grandissent partout","il neige de plus en plus bas","les sommets deviennent plus hauts"],"correct":0,"explication":"Avec la hausse des températures, les glaciers de montagne perdent de la glace chaque année."},
                {"q":"Qu'est-ce qui fait monter le niveau des mers ?","options":["les pluies plus fortes sur les océans","les fleuves de plus en plus longs","la fonte des glaciers sur les continents","la banquise de plus en plus épaisse"],"correct":2,"explication":"L'eau des glaciers terrestres rejoint la mer, et l'eau des océans prend plus de place en se réchauffant."},
                {"q":"Quelles régions sont les plus menacées par la montée du niveau des mers ?","options":["les côtes basses et les deltas","les plateaux et les collines","les sommets des hautes montagnes","les déserts au cœur des continents"],"correct":0,"explication":"Les terres situées à peine au-dessus de la mer risquent d'être inondées."},
                {"q":"Le réchauffement climatique rend les canicules et les sècheresses plus fréquentes dans de nombreuses régions.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Une atmosphère plus chaude favorise les vagues de chaleur et le dessèchement des sols."},
                {"q":"Quel animal chasse les phoques sur la banquise de l'Arctique et souffre de sa fonte ?","options":["le dromadaire","l'ours polaire","le kangourou roux","le guépard"],"correct":1,"explication":"Sans banquise, l'ours polaire a beaucoup plus de mal à chasser les phoques."},
                {"q":"Lequel de ces gestes réduit les rejets de gaz à effet de serre ?","options":["laisser la lumière allumée","prendre la voiture pour 500 m","aller à l'école à vélo","chauffer avec la fenêtre ouverte"],"correct":2,"explication":"Le vélo ne brule aucun carburant : il ne rejette pas de dioxyde de carbone."},
                {"q":"Quelle source d'énergie produit de l'électricité sans rejeter de dioxyde de carbone ?","options":["l'énergie du vent","l'énergie du charbon","l'énergie du pétrole","l'énergie du gaz"],"correct":0,"explication":"Une éolienne transforme la force du vent en électricité sans rien bruler."},
                {"q":"Pourquoi manger des fruits et légumes locaux et de saison aide-t-il le climat ?","options":["ils contiennent beaucoup plus de vitamines","ils se conservent beaucoup plus longtemps au frigo","ils sont transportés sur de courtes distances","ils poussent plus vite que les autres"],"correct":2,"explication":"Moins de transport (et pas de serre chauffée) signifie moins de carburant brulé."},
                {"q":"Quel geste à la maison réduit le plus la consommation de chauffage ?","options":["isoler le toit et les murs","monter le chauffage la nuit","aérer toute la journée en hiver","chauffer aussi les pièces vides"],"correct":0,"explication":"Une maison bien isolée garde sa chaleur : on brule moins de combustible."},
                {"q":"Le réchauffement climatique actuel est surtout causé par…","options":["les éruptions volcaniques","les phases de la Lune","les tremblements de terre","les activités humaines"],"correct":3,"explication":"Les scientifiques ont montré que les gaz rejetés par les activités humaines sont la cause principale."},
                {"q":"Le trou dans la couche d'ozone est la cause principale du réchauffement climatique.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Ce sont deux problèmes différents : le réchauffement vient surtout des gaz à effet de serre comme le CO2."},
                {"q":"Comment appelle-t-on les énergies qui ne s'épuisent pas, comme le vent ou le soleil ? Les énergies…","type":"saisie","clavier":"texte","reponse":["renouvelables","renouvelable","énergies renouvelables","les énergies renouvelables","energies renouvelables","les energies renouvelables"],"explication":"Le vent, le soleil et l'eau qui coule se renouvèlent sans cesse : ce sont des énergies renouvelables."},
                {"q":"Un réfugié climatique est une personne qui…","options":["part en vacances vers un pays chaud","doit quitter sa région à cause du climat","étudie le climat dans un laboratoire","vit toute l'année dans un pays froid"],"correct":1,"explication":"Sécheresses, inondations ou montée des mers peuvent forcer des familles à partir."},
                {"q":"Quand la banquise (la glace qui flotte sur la mer) fond, cela fait monter fortement le niveau des mers.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Cette glace flotte déjà dans l'eau ; ce sont surtout les glaciers posés sur les continents qui font monter la mer."},
                {"q":"Quelle conséquence du réchauffement peut toucher la Belgique ?","options":["des hivers de plus en plus rigoureux","la disparition complète des pluies","des canicules plus fréquentes en été","l'apparition de glaciers en Ardenne"],"correct":2,"explication":"En Belgique aussi, les étés très chauds deviennent plus fréquents."},
                {"q":"Pour aller de Bruxelles à Rome, quel moyen de transport rejette le plus de CO2 par voyageur ?","options":["le train","l'avion","l'autocar","le covoiturage"],"correct":1,"explication":"L'avion consomme beaucoup de kérosène : par voyageur, il pollue bien plus que le train ou l'autocar."},
                {"q":"Que signifie « réchauffement climatique » ?","options":["une vague de chaleur pendant un été","le réchauffement de l'eau des piscines en plein été","le passage de l'hiver au printemps","la hausse de la température moyenne de la Terre"],"correct":3,"explication":"On parle de la température moyenne de toute la planète, sur de nombreuses années."},
                {"q":"Pourquoi réduire et recycler ses déchets aide-t-il le climat ?","options":["les déchets attirent fortement la chaleur du Soleil","fabriquer de nouveaux objets consomme de l'énergie","les poubelles rejettent de l'oxygène","le recyclage fait pousser des forêts"],"correct":1,"explication":"Produire et transporter des objets neufs demande de l'énergie, souvent fossile."},
                {"q":"Que peut faire une commune pour aider à limiter le réchauffement ?","options":["élargir les autoroutes","abattre les arbres des parcs","créer des pistes cyclables","éclairer les rues toute la journée"],"correct":2,"explication":"Des pistes cyclables encouragent le vélo plutôt que la voiture."}
              ]
            },
            {
              "id": "e4-geo-c",
              "titre": "Cartes et Belgique peuplée",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Quel type de carte montre le relief, les montagnes et les cours d'eau ?","options":["une carte politique","une carte routière","une carte des langues","une carte physique"],"correct":3,"explication":"La carte physique représente le milieu naturel : relief, fleuves, mers."},
                {"q":"Quel type de carte montre les pays, leurs frontières et leurs capitales ?","options":["une carte physique","une carte politique","une carte du relief","une carte du climat"],"correct":1,"explication":"La carte politique montre l'organisation des territoires : pays, frontières, capitales."},
                {"q":"Une carte qui montre seulement la densité de population des pays d'Europe est une carte…","options":["thématique","physique","politique"],"correct":0,"explication":"Une carte thématique présente un seul thème : densité, climat, langues, etc."},
                {"q":"Comment appelle-t-on une carte qui représente toute la surface de la Terre à plat ?","type":"saisie","clavier":"texte","reponse":["planisphère","un planisphère","le planisphère","planisphere","un planisphere","le planisphere"],"explication":"Le planisphère montre toute la Terre d'un seul coup d'œil, mais à plat."},
                {"q":"Quel est le principal avantage du globe par rapport au planisphère ?","options":["il montre toute la Terre d'un seul regard","il est plus facile à ranger dans un cartable","il montre en détail les rues des villes","il respecte la forme et la taille des terres"],"correct":3,"explication":"Le globe a la forme de la Terre : il ne déforme ni les continents ni les océans."},
                {"q":"Sur beaucoup de planisphères, les régions proches des pôles, comme le Groenland, paraissent plus grandes qu'en réalité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Mettre une boule à plat oblige à déformer : les régions proches des pôles sont souvent agrandies."},
                {"q":"Sur une carte physique, quelle couleur représente habituellement les hautes montagnes ?","options":["le vert","le bleu","le brun","le rose"],"correct":2,"explication":"Sur une carte physique, on passe du vert (basses altitudes) au jaune puis au brun (hautes altitudes)."},
                {"q":"Sur une carte physique, que représente en général le vert ?","options":["les terres de haute altitude","les terres de basse altitude","les mers peu profondes","les régions les plus boisées"],"correct":1,"explication":"Le vert indique les plaines basses ; ce n'est pas la couleur des forêts sur une carte du relief."},
                {"q":"Quel élément d'une carte explique la signification des couleurs et des symboles ?","options":["le titre","la légende","l'échelle","la rose des vents"],"correct":1,"explication":"La légende donne le sens de chaque couleur et de chaque symbole de la carte."},
                {"q":"Tu veux savoir quelles langues on parle dans les pays d'Europe. Quelle carte choisis-tu ?","options":["une carte physique","une carte du relief","une carte thématique","un plan de la ville"],"correct":2,"explication":"Les langues sont un thème particulier : on les trouve sur une carte thématique."},
                {"q":"Quelle carte utiliser pour trouver les hauteurs de l'Ardenne et le Signal de Botrange ?","options":["une carte politique","une carte de densité","une carte des langues","une carte physique"],"correct":3,"explication":"Le relief et les altitudes se lisent sur une carte physique."},
                {"q":"Pour connaitre les pays voisins de l'Allemagne, quelle carte est la plus utile ?","options":["une carte physique","une carte du climat","une carte des forêts","une carte politique"],"correct":3,"explication":"Les frontières entre les pays sont dessinées sur une carte politique."},
                {"q":"Quel axe de Belgique est très densément peuplé ?","options":["l'axe Bruxelles-Anvers-Gand","l'axe Arlon-Bastogne-Marche","la vallée de la Semois","le plateau des Hautes Fagnes"],"correct":0,"explication":"Entre Bruxelles, Anvers et Gand se succèdent villes, industries, ports et voies de communication."},
                {"q":"Le sillon Sambre-et-Meuse relie des villes comme…","options":["Bruges, Gand et Anvers","Arlon, Bastogne et Durbuy","Ostende, Ypres et Courtrai","Charleroi, Namur et Liège"],"correct":3,"explication":"Le sillon suit la Sambre puis la Meuse : Charleroi, Namur, Liège."},
                {"q":"Pourquoi le sillon Sambre-et-Meuse s'est-il fortement peuplé au XIXe siècle ?","options":["grâce aux plages et au tourisme","grâce aux forêts et à la chasse","grâce aux vignes et aux vergers","grâce aux charbonnages et aux usines"],"correct":3,"explication":"Le charbon a attiré la sidérurgie et de nombreuses usines, donc beaucoup de travailleurs."},
                {"q":"Laquelle de ces deux grandes régions belges est la moins densément peuplée ?","options":["la Région flamande","la Région wallonne"],"correct":1,"explication":"La Wallonie compte moins d'habitants que la Flandre sur une superficie plus grande."},
                {"q":"Quelle province belge est la moins densément peuplée ?","options":["la province d'Anvers","la province du Brabant flamand","la province de Hainaut","la province de Luxembourg"],"correct":3,"explication":"La province de Luxembourg, en pleine Ardenne, est la plus vaste et la moins peuplée."},
                {"q":"Pourquoi l'Ardenne est-elle peu peuplée ?","options":["un climat trop chaud pour cultiver","un relief accidenté couvert de forêts","l'absence totale de rivières","une côte trop exposée aux tempêtes"],"correct":1,"explication":"Plateaux, vallées encaissées et forêts rendent l'agriculture et les grandes industries plus difficiles."},
                {"q":"Quelle région de Belgique a la plus forte densité de population ?","options":["la Région de Bruxelles-Capitale","la Région flamande","la Région wallonne"],"correct":0,"explication":"Bruxelles est une grande ville sur un petit territoire : sa densité est très élevée."},
                {"q":"La Belgique fait partie des pays les plus densément peuplés d'Europe.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"La Belgique compte beaucoup d'habitants sur un territoire assez petit."},
                {"q":"Combien d'habitants compte environ la Belgique ?","options":["environ 12 millions","environ 2 millions","environ 50 millions","environ 120 millions"],"correct":0,"explication":"La Belgique compte près de 12 millions d'habitants."},
                {"q":"Une commune ardennaise compte 5 000 habitants sur 100 km². Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["50","cinquante"],"explication":"5 000 ÷ 100 = 50 habitants par km² : c'est peu, comme souvent en Ardenne."},
                {"q":"Une commune bruxelloise compte 60 000 habitants sur 10 km². Quelle est sa densité ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["6000","6 000","6.000"],"explication":"60 000 ÷ 10 = 6 000 habitants par km² : c'est très dense, comme en ville."},
                {"q":"La Belgique compte environ 12 000 000 d'habitants pour environ 30 000 km². Quelle est sa densité approximative ?","contexte":"Réponds en habitants par km² (un nombre).","type":"saisie","clavier":"texte","reponse":["400"],"explication":"12 000 000 ÷ 30 000 = 400 habitants par km² environ."},
                {"q":"Quelle ville se trouve entre Bruxelles et Anvers, sur cet axe très peuplé ?","options":["Arlon","Bastogne","Chimay","Malines"],"correct":3,"explication":"Malines se trouve entre Bruxelles et Anvers ; les autres villes sont en Wallonie, loin de cet axe."},
                {"q":"Quel document faut-il pour comparer les densités des provinces belges ?","options":["une carte physique","un globe terrestre","une carte du relief","une carte thématique"],"correct":3,"explication":"La densité est un thème : on la représente sur une carte thématique."},
                {"q":"La légende d'une carte de densité indique : plus la couleur est foncée, plus la densité est forte. Que montre une zone très foncée ?","options":["une zone très montagneuse","une zone très froide","une zone très peuplée","une zone très boisée"],"correct":2,"explication":"Sur une carte thématique, c'est la légende qui donne le sens des couleurs."}
              ]
            }
          ]
        },
        {
          "id": "i4-viv",
          "matiere": "Le vivant",
          "titre": "La serre du vivant",
          "symbole": "♥",
          "description": "Le corps qui travaille ensemble.",
          "hote": {
            "nom": "Le médecin Samir",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e4-viv-a",
              "titre": "Le corps en plein effort",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Pendant une course, de quoi les muscles ont-ils davantage besoin ?","options":["de dioxyde de carbone et d'eau","d'oxygène et de nutriments","de globules blancs et de bile","de salive et de bile"],"correct":1,"explication":"Les muscles utilisent l'oxygène et les nutriments (surtout des sucres) pour produire l'énergie du mouvement."},
                {"q":"Pendant un effort, pourquoi le cœur bat-il plus vite ?","options":["pour envoyer de l'air dans les poumons","pour fabriquer plus de globules blancs","pour accélérer la digestion du repas","pour apporter plus vite le sang aux muscles"],"correct":3,"explication":"Plus le cœur bat vite, plus le sang apporte rapidement l'oxygène et les nutriments aux muscles."},
                {"q":"Quels appareils accélèrent ensemble pendant un effort ?","options":["respiratoire et circulatoire","digestif et circulatoire","digestif et respiratoire"],"correct":0,"explication":"On respire plus vite et le cœur bat plus vite ; la digestion, elle, ralentit."},
                {"q":"Pendant un effort, les muscles rejettent davantage…","options":["de salive","de dioxyde de carbone","d'oxygène et de sucre","de globules rouges neufs"],"correct":1,"explication":"En produisant plus d'énergie, les muscles rejettent plus de dioxyde de carbone dans le sang."},
                {"q":"Par quels organes le dioxyde de carbone produit par les muscles quitte-t-il le corps ?","options":["le foie","les poumons","l'intestin","l'estomac"],"correct":1,"explication":"Le sang conduit le dioxyde de carbone aux poumons, d'où il est rejeté à l'expiration."},
                {"q":"Quel trajet suit l'oxygène pour aller des poumons jusqu'à un muscle de la jambe ?","contexte":"Choisis le bon ordre.","options":["alvéoles, veine, capillaires du muscle, cœur","alvéoles, cœur, artère, capillaires du muscle","cœur, alvéoles, veine, capillaires du muscle","alvéoles, artère, cœur, capillaires du muscle"],"correct":1,"explication":"L'oxygène passe dans le sang des alvéoles, revient au cœur, qui l'envoie par les artères jusqu'au muscle."},
                {"q":"Pourquoi transpire-t-on pendant un effort ?","options":["pour digérer plus vite","pour rejeter l'oxygène","pour refroidir le corps","pour nourrir les muscles"],"correct":2,"explication":"La sueur s'évapore sur la peau et refroidit le corps, qui chauffe pendant l'effort."},
                {"q":"Pourquoi le visage devient-il rouge pendant un effort ?","options":["La peau fabrique des globules rouges.","Les poumons manquent de sang.","Le cœur s'arrête un court moment.","Plus de sang passe près de la peau."],"correct":3,"explication":"Le sang afflue vers la peau pour évacuer la chaleur produite par les muscles."},
                {"q":"Pourquoi faut-il boire pendant un long effort ?","options":["pour refroidir directement les poumons","pour faire baisser le rythme du cœur","pour digérer plus vite le repas","pour remplacer l'eau perdue en transpirant"],"correct":3,"explication":"En transpirant, le corps perd de l'eau : il faut la remplacer pour éviter la déshydratation."},
                {"q":"Pendant un effort intense, la digestion ralentit.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Pendant l'effort, une grande partie du sang est dirigée vers les muscles plutôt que vers l'appareil digestif."},
                {"q":"La veille d'un match, Aya mange des pâtes. Que lui apportent-elles surtout ?","options":["du dioxyde de carbone pour le sang","de l'oxygène pour les muscles","des vitamines qui remplacent le sommeil","des glucides qui fournissent de l'énergie"],"correct":3,"explication":"Les pâtes sont riches en glucides (amidon) : une fois digérés, ils donnent de l'énergie aux muscles."},
                {"q":"Le pouls de Mehdi passe de 80 battements par minute au repos à 150 après une course. Pourquoi ?","options":["Le cœur se repose pendant la course.","Le cœur envoie plus de sang aux muscles.","Le sang devient plus épais en courant.","Les poumons ralentissent le cœur."],"correct":1,"explication":"Pendant l'effort, le cœur accélère pour apporter davantage d'oxygène aux muscles."},
                {"q":"Après l'effort, que fait le rythme du cœur ?","options":["Il continue d'accélérer.","Il reste élevé toute la journée.","Il s'arrête quelques minutes.","Il redescend peu à peu."],"correct":3,"explication":"Au repos, les muscles ont moins besoin d'oxygène : le cœur ralentit progressivement."},
                {"q":"En général, le cœur d'une personne entrainée retrouve plus vite son rythme de repos après un effort.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"L'entrainement rend le cœur plus efficace : il récupère plus vite après l'effort."},
                {"q":"Pourquoi est-on essoufflé après avoir monté des escaliers en courant ?","options":["Le cœur s'est arrêté de battre.","Les poumons sont occupés à digérer.","L'air des escaliers contient moins d'oxygène.","Les muscles réclament plus d'oxygène."],"correct":3,"explication":"Pour fournir plus d'oxygène aux muscles, on respire plus vite et plus fort."},
                {"q":"Que font les cellules des muscles avec l'oxygène et les nutriments ?","options":["Elles les renvoient aussitôt vers les poumons.","Elles fabriquent de la salive.","Elles fabriquent de nouveaux os du squelette.","Elles produisent l'énergie du mouvement."],"correct":3,"explication":"Dans les cellules, les nutriments sont « brulés » grâce à l'oxygène : cela libère de l'énergie."},
                {"q":"Quel appareil fournit au sang les nutriments utilisés par les muscles ?","options":["l'appareil digestif","l'appareil respiratoire","l'appareil circulatoire"],"correct":0,"explication":"L'appareil digestif transforme les aliments en nutriments, absorbés dans le sang par l'intestin grêle."},
                {"q":"Quel appareil fournit au sang l'oxygène utilisé par les muscles ?","options":["l'appareil respiratoire","l'appareil circulatoire","l'appareil digestif"],"correct":0,"explication":"Dans les alvéoles pulmonaires, l'oxygène de l'air passe dans le sang."},
                {"q":"Quel appareil distribue l'oxygène et les nutriments à tous les organes ? L'appareil …","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["circulatoire"],"explication":"L'appareil circulatoire (cœur, vaisseaux, sang) transporte oxygène et nutriments jusqu'aux cellules."},
                {"q":"Pourquoi faut-il s'échauffer avant le sport ?","options":["pour préparer peu à peu le cœur et les muscles","pour fatiguer les muscles avant le match","pour ralentir la respiration au départ","pour vider l'estomac avant l'effort"],"correct":0,"explication":"L'échauffement augmente progressivement le rythme du cœur, de la respiration et la température des muscles."},
                {"q":"Pourquoi éviter un gros repas juste avant un effort intense ?","options":["Le cœur ne peut pas battre l'estomac plein.","Les nutriments empêchent l'oxygène d'entrer.","Les aliments bouchent les bronches pendant la course.","Digestion et muscles réclament du sang en même temps."],"correct":3,"explication":"Pendant la digestion, l'intestin a besoin de sang ; pendant l'effort, les muscles aussi : on se sent mal."},
                {"q":"Pendant un effort, les muscles ont besoin d'oxygène, mais pas de nutriments.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les muscles ont besoin des deux : l'oxygène et les nutriments servent ensemble à produire l'énergie."},
                {"q":"Le cœur, comme les autres muscles, a besoin d'oxygène pour fonctionner.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le cœur est un muscle : il est lui-même nourri par des artères, les artères coronaires."},
                {"q":"Pendant un sprint, Zoé respire vite et profondément. Qu'y gagne-t-elle ?","options":["Moins d'air arrive à ses alvéoles.","Sa digestion s'accélère.","Plus d'air arrive à ses alvéoles.","Son cœur peut ralentir."],"correct":2,"explication":"En respirant plus vite et plus fort, plus d'oxygène passe dans le sang à chaque minute."},
                {"q":"Pendant une course, quel organe chasse plus souvent l'air chargé de dioxyde de carbone ?","options":["le cœur","l'estomac","les poumons","les reins"],"correct":2,"explication":"Les poumons expirent plus souvent pour évacuer le dioxyde de carbone produit par les muscles."}
              ]
            },
            {
              "id": "e4-viv-b",
              "titre": "Du repas aux cellules",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Après un repas, à quel endroit les nutriments passent-ils dans le sang ?","options":["au niveau de l'intestin grêle","au niveau des poumons","au niveau du gros intestin","au niveau de l'œsophage"],"correct":0,"explication":"La paroi de l'intestin grêle, couverte de villosités, laisse passer les nutriments dans le sang."},
                {"q":"Après un repas, le sang qui quitte l'intestin grêle est particulièrement riche…","options":["en salive","en nutriments","en oxygène","en bile"],"correct":1,"explication":"Ce sang s'est chargé en nutriments ; il a en revanche cédé une partie de son oxygène à l'intestin."},
                {"q":"Quelles sont les deux choses indispensables qu'une cellule de muscle reçoit du sang ?","options":["la bile et la salive","le dioxyde de carbone et l'eau","l'urine et les fibres","l'oxygène et les nutriments"],"correct":3,"explication":"Le sang apporte à chaque cellule l'oxygène et les nutriments dont elle a besoin pour vivre."},
                {"q":"Que rejette une cellule dans le sang ?","options":["des fibres et de l'amidon non digérés","de l'oxygène et des nutriments en plus","de la bile et du suc gastrique","du dioxyde de carbone et d'autres déchets"],"correct":3,"explication":"Les déchets des cellules sont emportés par le sang vers les poumons et les reins."},
                {"q":"Quels organes filtrent le sang pour fabriquer l'urine ?","options":["les reins","l'estomac","le cœur","les poumons"],"correct":0,"explication":"Les reins retirent des déchets du sang et fabriquent l'urine, stockée dans la vessie."},
                {"q":"Comment s'appelle le liquide fabriqué par les reins à partir des déchets du sang ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["urine","l'urine"],"explication":"L'urine contient de l'eau et des déchets retirés du sang par les reins."},
                {"q":"Où le sang prend-il l'oxygène, et où prend-il les nutriments ?","options":["dans les poumons ; dans l'estomac","dans le cœur ; dans l'estomac","dans l'intestin grêle ; dans les poumons","dans les poumons ; dans l'intestin grêle"],"correct":3,"explication":"L'oxygène entre dans le sang par les alvéoles, les nutriments par la paroi de l'intestin grêle."},
                {"q":"Le dioxyde de carbone produit par une cellule du pied quitte principalement le corps…","options":["par la peau, dans la sueur","par les poumons, à l'expiration","par l'anus, dans les selles","par les reins, dans l'urine"],"correct":1,"explication":"Le sang conduit le dioxyde de carbone jusqu'aux poumons, qui le rejettent dans l'air expiré."},
                {"q":"Les nutriments et l'oxygène sont transportés par le même sang.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Un seul sang circule dans le corps : il transporte à la fois l'oxygène et les nutriments."},
                {"q":"Comparé au sang qui en repart par une veine, le sang qui arrive à un muscle par une artère est…","options":["plus pauvre en oxygène","exactement pareil","plus riche en oxygène"],"correct":2,"explication":"Le muscle prélève de l'oxygène dans le sang : le sang qui repart en contient moins."},
                {"q":"Où les nutriments quittent-ils le sang pour entrer dans les cellules ?","options":["au niveau des capillaires","au niveau des poumons","au niveau du cœur","au niveau des grosses veines"],"correct":0,"explication":"Les parois des capillaires sont si fines que les nutriments et l'oxygène les traversent."},
                {"q":"Quel trajet suit le sucre d'une tartine pour arriver jusqu'à un muscle ?","contexte":"Choisis le bon ordre.","options":["bouche, estomac, sang, intestin grêle, muscle","bouche, estomac, intestin grêle, sang, muscle","bouche, intestin grêle, estomac, sang, muscle","bouche, estomac, gros intestin, poumons, muscle"],"correct":1,"explication":"Le sucre est digéré le long du tube digestif, absorbé dans l'intestin grêle, puis transporté par le sang."},
                {"q":"Si les poumons fonctionnaient mal, les muscles manqueraient surtout…","options":["de bile","de salive","d'oxygène","de nutriments"],"correct":2,"explication":"Les poumons apportent l'oxygène au sang ; s'ils fonctionnent mal, les muscles en reçoivent moins."},
                {"q":"Si l'intestin grêle absorbait mal, le sang manquerait surtout…","options":["d'oxygène","de globules blancs","de nutriments","de dioxyde de carbone"],"correct":2,"explication":"C'est l'intestin grêle qui fait passer les nutriments dans le sang."},
                {"q":"Pourquoi dit-on que les appareils respiratoire, digestif et circulatoire travaillent en équipe ?","options":["Le sang distribue ce que les deux autres lui apportent.","Ils se trouvent tous les trois dans le ventre.","Ils fonctionnent chacun leur tour, jamais ensemble.","Ils fabriquent tous les trois des sucs digestifs."],"correct":0,"explication":"Les poumons fournissent l'oxygène, l'intestin les nutriments, et le sang distribue tout aux cellules."},
                {"q":"Le sang transporte aussi la chaleur et aide à garder le corps à environ 37 °C.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le sang répartit la chaleur dans tout le corps, qui reste à une température proche de 37 °C."},
                {"q":"Quel liquide transporte à la fois l'oxygène, les nutriments et les déchets ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["sang","le sang"],"explication":"Le sang circule dans tout le corps et transporte oxygène, nutriments et déchets."},
                {"q":"Dans les cellules, grâce à quoi les nutriments sont-ils « brulés » pour libérer de l'énergie ?","options":["grâce à l'oxygène","grâce aux globules blancs","grâce à la bile","grâce au dioxyde de carbone"],"correct":0,"explication":"Comme un feu a besoin d'air, les cellules utilisent l'oxygène pour tirer l'énergie des nutriments."},
                {"q":"Lequel de ces éléments n'est PAS transporté par le sang ?","options":["les nutriments","les aliments non digérés","le dioxyde de carbone","l'oxygène"],"correct":1,"explication":"Les aliments non digérés restent dans le tube digestif et sortent dans les selles."},
                {"q":"Tableau : sang qui entre dans l'intestin : beaucoup d'oxygène, peu de nutriments. Sang qui en sort : moins d'oxygène, beaucoup de nutriments. Que montre-t-il ?","options":["L'intestin utilise de l'oxygène et donne des nutriments au sang.","L'intestin donne de l'oxygène et prend des nutriments au sang.","L'intestin fabrique de l'oxygène à partir des aliments.","L'intestin ne change rien à la composition du sang."],"correct":0,"explication":"Comme toutes les cellules, celles de l'intestin consomment de l'oxygène ; l'intestin envoie aussi les nutriments au sang."},
                {"q":"Tableau : sang qui entre dans les poumons : peu d'oxygène, beaucoup de dioxyde de carbone. Sang qui en sort : beaucoup d'oxygène, peu de dioxyde de carbone. Que montre-t-il ?","options":["Le sang prend des nutriments dans les poumons.","Le sang prend de l'oxygène et rejette du dioxyde de carbone.","Le sang rejette de l'oxygène et prend du dioxyde de carbone.","Le sang ne change pas en traversant les poumons."],"correct":1,"explication":"Dans les alvéoles, l'oxygène passe dans le sang et le dioxyde de carbone passe dans l'air expiré."},
                {"q":"Où va le sang chargé de nutriments juste après avoir quitté l'intestin ?","options":["vers l'estomac","vers les poumons","vers le foie","vers les reins"],"correct":2,"explication":"Le sang venant de l'intestin passe d'abord par le foie, qui stocke une partie des sucres."},
                {"q":"Les déchets transportés par le sang sortent du corps par les poumons et par les reins.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Le dioxyde de carbone sort par les poumons ; d'autres déchets sont éliminés par les reins dans l'urine."},
                {"q":"Pourquoi le cerveau a-t-il besoin que le sang circule sans arrêt ?","options":["Il fabrique tous les nutriments du corps.","Il a besoin de recevoir de la bile chaque jour.","Il a besoin en permanence d'oxygène et de sucre.","Il digère lui-même une partie des aliments."],"correct":2,"explication":"Le cerveau consomme beaucoup d'oxygène et de sucre : il ne supporte pas d'en être privé."},
                {"q":"Une cellule du bras reçoit l'oxygène venant des poumons. Par où ce sang est-il passé juste avant d'entrer dans l'artère ?","contexte":"Choisis le bon ordre.","options":["par l'estomac","par l'intestin","par le cœur","par les reins"],"correct":2,"explication":"Le sang oxygéné revient des poumons au cœur gauche, qui l'envoie ensuite dans les artères."}
              ]
            },
            {
              "id": "e4-viv-c",
              "titre": "Une bonne hygiène de vie",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Combien de temps d'activité physique conseille-t-on aux enfants, chaque jour ?","options":["au moins cinq heures","au moins une heure","environ dix minutes"],"correct":1,"explication":"Les spécialistes de la santé conseillent aux enfants au moins 60 minutes d'activité physique par jour."},
                {"q":"Combien d'heures de sommeil conseille-t-on environ à un enfant de 11 ans ?","options":["environ 10 heures","environ 6 heures","environ 14 heures"],"correct":0,"explication":"Entre 6 et 12 ans, on conseille environ 9 à 12 heures de sommeil par nuit."},
                {"q":"Quelle boisson faut-il choisir pour se désaltérer ?","options":["une boisson énergisante","un sirop sucré","l'eau","une boisson gazeuse sucrée"],"correct":2,"explication":"L'eau est la seule boisson indispensable : elle hydrate sans apporter de sucre."},
                {"q":"Pourquoi faut-il limiter les sodas ?","options":["Ils contiennent trop de vitamines.","Ils contiennent beaucoup de sucre.","Ils contiennent trop de calcium.","Ils contiennent trop de fibres."],"correct":1,"explication":"Le sucre des sodas favorise les caries et la prise de poids."},
                {"q":"Un repas équilibré contient…","options":["surtout des sucreries et des boissons","uniquement de la viande et du poisson","uniquement des légumes cuits à l'eau","des aliments de familles différentes"],"correct":3,"explication":"En variant les familles d'aliments, on apporte au corps tout ce dont il a besoin."},
                {"q":"Pourquoi faut-il manger des fruits et des légumes chaque jour ?","options":["Ils apportent surtout du sel et du sucre.","Ils remplacent l'eau qu'on doit boire.","Ils apportent vitamines, minéraux et fibres.","Ils apportent surtout des graisses utiles."],"correct":2,"explication":"Les fruits et légumes sont riches en vitamines, en minéraux et en fibres."},
                {"q":"Quels aliments faut-il consommer le moins souvent ?","options":["les légumes et les fruits frais","les sucreries et les aliments gras","le pain et les céréales complètes","l'eau et le lait"],"correct":1,"explication":"Les sucreries et les aliments très gras sont à garder pour les petits plaisirs occasionnels."},
                {"q":"Un petit-déjeuner aide à avoir de l'énergie pour la matinée.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Après la nuit, le petit-déjeuner apporte l'énergie utile pour bouger et se concentrer."},
                {"q":"Pourquoi se lave-t-on les mains avant de manger ?","options":["pour éliminer les microbes","pour réchauffer les mains","pour éviter les caries","pour digérer plus vite"],"correct":0,"explication":"Le savon élimine les microbes des mains, qui pourraient passer dans la bouche."},
                {"q":"Combien de temps environ faut-il se brosser les dents ?","options":["environ un quart d'heure","environ dix secondes","environ deux minutes"],"correct":2,"explication":"On conseille de se brosser les dents environ deux minutes, au moins deux fois par jour."},
                {"q":"Que peuvent provoquer les écrans juste avant de dormir ?","options":["Ils reposent les yeux pour la nuit.","Ils aident à s'endormir plus vite.","Ils peuvent retarder l'endormissement.","Ils remplacent une partie du sommeil."],"correct":2,"explication":"La lumière des écrans et l'excitation des jeux retardent l'endormissement."},
                {"q":"Que nous apportent surtout le lait et les produits laitiers ?","options":["de la vitamine C pour l'hiver","des fibres pour aider l'intestin","de l'oxygène pour les muscles","du calcium pour les os et les dents"],"correct":3,"explication":"Le calcium du lait, du yaourt et du fromage aide à construire les os et les dents."},
                {"q":"Que nous apportent les lentilles et les pois chiches ?","options":["surtout des graisses animales","des protéines et des fibres","surtout du sucre ajouté","surtout du sel"],"correct":1,"explication":"Les légumineuses sont riches en protéines végétales et en fibres."},
                {"q":"Quelle collation est la plus équilibrée à la récréation ?","options":["un paquet de chips","une pomme","une barre chocolatée","une canette de soda"],"correct":1,"explication":"Un fruit apporte des vitamines et des fibres, sans excès de sucre ajouté ni de graisses."},
                {"q":"Les vaccins aident le corps à se défendre contre certaines maladies.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Un vaccin apprend aux défenses du corps à reconnaitre un microbe avant de le rencontrer."},
                {"q":"Les antibiotiques soignent les rhumes et la grippe.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":1,"explication":"Les rhumes et la grippe sont causés par des virus ; les antibiotiques n'agissent que sur les bactéries."},
                {"q":"Que peut provoquer, avec le temps, un excès de sel dans l'alimentation ?","options":["des os plus solides et plus durs","une tension artérielle trop élevée","des dents plus blanches et plus dures","une meilleure vue la nuit"],"correct":1,"explication":"Trop de sel peut faire augmenter la tension artérielle, ce qui fatigue le cœur et les vaisseaux."},
                {"q":"Rester assis des heures devant un écran sans bouger…","options":["aide à mieux digérer","n'entraine ni le cœur ni les muscles","remplace une nuit de sommeil","entraine le cœur comme une course"],"correct":1,"explication":"Le manque de mouvement affaiblit le cœur et les muscles ; il faut bouger chaque jour."},
                {"q":"Pourquoi le sommeil est-il important pour un enfant ?","options":["Il arrête la respiration pour la reposer.","Il empêche le cœur de battre la nuit.","Il remplace les repas de la journée.","Il aide à récupérer, grandir et retenir."],"correct":3,"explication":"Pendant le sommeil, le corps récupère, la croissance se poursuit et le cerveau range ce qu'il a appris."},
                {"q":"Lequel de ces aliments est riche en fibres ?","options":["le beurre","le fromage","les lentilles","l'huile"],"correct":2,"explication":"Les fibres se trouvent dans les végétaux : légumineuses, légumes, fruits, céréales complètes."},
                {"q":"Quelle est la seule boisson indispensable à notre corps ?","contexte":"Écris ta réponse.","type":"saisie","clavier":"texte","reponse":["eau","l'eau","de l'eau"],"explication":"Notre corps contient beaucoup d'eau et en perd chaque jour : il faut en boire régulièrement."},
                {"q":"Quel menu est le plus équilibré ?","options":["saucisse, chips, fromage, chocolat","pâtes, pain, pommes de terre, gâteau","frites, hamburger, soda, glace","poisson, riz, brocolis, yaourt"],"correct":3,"explication":"Ce menu associe protéines, féculents, légumes et produit laitier, sans excès de gras ni de sucre."},
                {"q":"Les boissons énergisantes sont déconseillées aux enfants.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"ordreFixe":true,"correct":0,"explication":"Elles contiennent beaucoup de caféine et de sucre, mauvais pour le cœur et le sommeil des enfants."},
                {"q":"Que nous apportent surtout la viande, le poisson et les œufs ?","options":["des fibres pour l'intestin","des protéines pour construire le corps","de la vitamine C pour l'hiver","des sucres rapides pour l'effort"],"correct":1,"explication":"Les protéines servent à construire et à réparer le corps, notamment les muscles."},
                {"q":"Pourquoi faut-il éviter de grignoter des sucreries toute la journée ?","options":["Le sang ne transporte plus d'oxygène.","La salive devient de plus en plus sucrée chaque jour.","L'estomac ne peut plus fabriquer de suc.","Les dents sont attaquées plus souvent par l'acide."],"correct":3,"explication":"Après chaque prise de sucre, les bactéries produisent de l'acide : grignoter multiplie les attaques de l'émail."}
              ]
            }
          ]
        },
        {
          "id": "i4-mat",
          "matiere": "Matière, énergie et techniques",
          "titre": "L'atelier des inventions",
          "symbole": "⚙",
          "description": "L'énergie et les transformations.",
          "hote": {
            "nom": "L'ingénieur Hugo",
            "genre": "garcon"
          },
          "defis": [
            {
              "id": "e4-mat-a",
              "titre": "Les sources d'énergie",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Laquelle de ces sources d'énergie est renouvelable ?","contexte":"L'énergie","options":["le vent","le gaz naturel","le charbon","le pétrole"],"correct":0,"explication":"Le vent ne s'épuise pas ; le pétrole, le charbon et le gaz naturel, si."},
                {"q":"Laquelle de ces sources d'énergie n'est PAS renouvelable ?","contexte":"L'énergie","options":["le Soleil","le charbon","l'eau des rivières","le vent"],"correct":1,"explication":"Le charbon existe en quantité limitée : quand on l'a brulé, il est perdu."},
                {"q":"Pourquoi dit-on que le pétrole n'est pas renouvelable ?","contexte":"L'énergie","options":["Il met des millions d'années à se former","Il est beaucoup trop difficile à transporter","On ne le trouve que sous la mer"],"correct":0,"explication":"On consomme le pétrole bien plus vite qu'il ne se forme : ses réserves s'épuisent."},
                {"q":"Comment appelle-t-on le charbon, le pétrole et le gaz naturel ?","contexte":"L'énergie","options":["des énergies fossiles","des énergies renouvelables","des énergies solaires"],"correct":0,"explication":"Ils viennent de restes d'êtres vivants transformés pendant des millions d'années : ce sont des énergies fossiles."},
                {"q":"En quoi un panneau photovoltaïque transforme-t-il la lumière du Soleil ?","contexte":"L'énergie","options":["en électricité","en eau chaude","en gaz"],"correct":0,"explication":"Le panneau photovoltaïque produit de l'électricité ; le panneau solaire thermique, lui, chauffe de l'eau."},
                {"q":"Quelle énergie une éolienne transforme-t-elle en électricité ?","contexte":"L'énergie","options":["l'énergie du Soleil","l'énergie du vent","l'énergie des vagues"],"correct":1,"explication":"Le vent fait tourner les pales de l'éolienne, qui entrainent une génératrice."},
                {"q":"Dans une centrale hydroélectrique, grâce à quoi produit-on l'électricité ?","contexte":"L'énergie","options":["à l'uranium","au charbon brulé dans des fours","à l'eau en mouvement"],"correct":2,"explication":"L'eau qui s'écoule fait tourner des turbines, qui produisent l'électricité."},
                {"q":"Les centrales de Doel et de Tihange, en Belgique, sont des centrales…","contexte":"L'énergie","options":["nucléaires","hydroélectriques","éoliennes","solaires"],"correct":0,"explication":"Doel (près d'Anvers) et Tihange (près de Huy) sont les centrales nucléaires belges."},
                {"q":"Le bois est une source d'énergie renouvelable si l'on replante les arbres coupés.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"Les arbres repoussent : si on en replante autant qu'on en coupe, le bois ne s'épuise pas."},
                {"q":"Quelle forme d'énergie une ampoule allumée produit-elle, en plus de la lumière ?","contexte":"L'énergie","options":["de l'électricité","de la chaleur","du mouvement"],"correct":1,"explication":"Une ampoule allumée chauffe : une partie de l'électricité devient de la chaleur."},
                {"q":"Sous quelle forme l'énergie est-elle stockée dans une pile ?","contexte":"L'énergie","options":["lumineuse","thermique","de mouvement","chimique"],"correct":3,"explication":"La pile contient des produits chimiques qui produisent du courant en réagissant."},
                {"q":"Dans la dynamo d'un vélo, le mouvement de la roue est transformé en…","contexte":"L'énergie","options":["son","électricité","chaleur"],"correct":1,"explication":"La dynamo produit de l'électricité grâce au mouvement : le phare s'allume quand on roule."},
                {"q":"Quelle forme d'énergie les aliments fournissent-ils à notre corps ?","contexte":"L'énergie","options":["lumineuse","nucléaire","électrique","chimique"],"correct":3,"explication":"Les aliments contiennent de l'énergie chimique, que le corps transforme en mouvement et en chaleur."},
                {"q":"En quoi un moteur électrique transforme-t-il surtout l'électricité ?","contexte":"L'énergie","options":["en lumière","en son","en mouvement"],"correct":2,"explication":"Un moteur électrique fait tourner un axe : l'électricité devient du mouvement."},
                {"q":"Des éoliennes installées en mer du Nord produisent de l'électricité pour la Belgique.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"La Belgique a des parcs éoliens en mer du Nord, au large de la côte."},
                {"q":"Quel est l'inconvénient des énergies solaire et éolienne ?","contexte":"L'énergie","options":["Elles dépendent de la météo","Elles s'épuisent très vite","Elles rejettent de la fumée"],"correct":0,"explication":"Sans soleil ou sans vent, ces installations produisent peu ou pas d'électricité."},
                {"q":"Bruler du charbon, du pétrole ou du gaz rejette un gaz qui renforce l'effet de serre. Lequel ?","contexte":"L'énergie","options":["l'oxygène","l'hélium","l'azote","le dioxyde de carbone"],"correct":3,"explication":"La combustion des énergies fossiles rejette du dioxyde de carbone (CO₂), qui réchauffe le climat."},
                {"q":"D'où vient l'essence qu'on met dans les voitures ?","contexte":"L'énergie","options":["du pétrole","du gaz naturel","du bois","du charbon"],"correct":0,"explication":"L'essence et le diesel sont fabriqués à partir du pétrole."},
                {"q":"Comment appelle-t-on une source d'énergie qui ne s'épuise pas, comme le vent ou le Soleil ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["renouvelable","une énergie renouvelable","énergie renouvelable","renouvelables","une energie renouvelable","energie renouvelable"],"explication":"Une énergie renouvelable se renouvèle naturellement et rapidement."},
                {"q":"Quelle transformation d'énergie se produit dans un grille-pain ?","contexte":"L'énergie","options":["lumière → mouvement","chaleur → électricité","électricité → chaleur"],"correct":2,"explication":"Le courant chauffe les résistances du grille-pain : l'électricité devient chaleur."},
                {"q":"Quand tu pédales à vélo, quelle transformation d'énergie a lieu dans ton corps ?","contexte":"L'énergie","options":["électricité → mouvement","mouvement → énergie des aliments","énergie des aliments → mouvement"],"correct":2,"explication":"Tes muscles transforment l'énergie chimique des aliments en mouvement (et en chaleur)."},
                {"q":"L'énergie nucléaire est une énergie renouvelable.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Elle utilise l'uranium, un métal extrait du sol en quantité limitée."},
                {"q":"Pour sécher le linge sans dépenser d'électricité, quelle énergie peut-on utiliser ?","contexte":"L'énergie","options":["celle du mazout","celle du Soleil","celle du charbon"],"correct":1,"explication":"Étendu dehors, le linge sèche grâce à la chaleur du Soleil et au vent, gratuitement."},
                {"q":"La biomasse (bois, déchets végétaux…) est une énergie…","contexte":"L'énergie","options":["nucléaire","fossile","renouvelable"],"correct":2,"explication":"La biomasse vient de plantes qui repoussent : c'est une énergie renouvelable."},
                {"q":"Dans un barrage, que fait tourner l'eau qui s'écoule ?","contexte":"L'énergie","options":["un panneau solaire","une turbine","une pile"],"correct":1,"explication":"L'eau fait tourner la turbine, reliée à un alternateur qui produit l'électricité."}
              ]
            },
            {
              "id": "e4-mat-b",
              "titre": "Garder la chaleur",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Comment appelle-t-on un matériau qui laisse facilement passer la chaleur ?","contexte":"Chaleur et économies","options":["un bon conducteur thermique","un bon isolant thermique","un bon combustible pour le feu"],"correct":0,"explication":"Un conducteur thermique, comme le métal, transmet facilement la chaleur."},
                {"q":"Pourquoi le manche d'une casserole est-il souvent en bois ou en plastique ?","contexte":"Chaleur et économies","options":["Ce sont des conducteurs thermiques","Ils chauffent plus vite que le métal","Ce sont des isolants thermiques"],"correct":2,"explication":"Le bois et le plastique transmettent mal la chaleur : on peut tenir le manche sans se bruler."},
                {"q":"Une cuillère laissée dans une soupe chaude devient vite brulante. En quelle matière est-elle probablement ?","contexte":"Chaleur et économies","options":["en bois","en plastique","en métal"],"correct":2,"explication":"Le métal est un bon conducteur thermique : la chaleur monte vite dans le manche."},
                {"q":"Lequel de ces matériaux est un bon isolant thermique ?","contexte":"Chaleur et économies","options":["la laine","le cuivre","l'aluminium","le fer"],"correct":0,"explication":"La laine emprisonne de l'air et transmet mal la chaleur ; les métaux la transmettent bien."},
                {"q":"Un pull en laine produit de la chaleur.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Il ne produit pas de chaleur : il garde celle de ton corps, car la laine est isolante."},
                {"q":"Inès emballe un glaçon dans une écharpe en laine et en laisse un autre à l'air libre, dans la classe. Lequel fond le plus vite ?","contexte":"Chaleur et économies","options":["celui à l'air libre","les deux en même temps","celui dans l'écharpe"],"correct":0,"explication":"La laine isole : elle ralentit l'arrivée de la chaleur de la classe jusqu'au glaçon."},
                {"q":"Pourquoi le double vitrage isole-t-il mieux qu'une seule vitre ?","contexte":"Chaleur et économies","options":["L'air entre les vitres freine la chaleur","Les deux vitres produisent de la chaleur","Le verre épais conduit mieux la chaleur"],"correct":0,"explication":"La couche d'air (ou de gaz) entre les deux vitres est isolante."},
                {"q":"L'air chaud monte. Par où une maison mal isolée perd-elle donc beaucoup de chaleur ?","contexte":"Chaleur et économies","options":["par le toit","par la cave","par le jardin"],"correct":0,"explication":"L'air chaud monte et s'échappe par un toit mal isolé : on isole donc d'abord la toiture."},
                {"q":"En hiver, quel geste permet d'économiser l'énergie de chauffage ?","contexte":"Chaleur et économies","options":["laisser les fenêtres ouvertes en grand","fermer les portes des pièces chauffées","chauffer aussi les pièces inoccupées"],"correct":1,"explication":"Les portes fermées gardent la chaleur dans les pièces où l'on vit."},
                {"q":"Quelle ampoule consomme le moins d'électricité pour éclairer autant ?","contexte":"Chaleur et économies","options":["une ampoule à incandescence","une ampoule LED","une ampoule halogène"],"correct":1,"explication":"Une LED transforme presque toute l'électricité en lumière ; les autres en perdent beaucoup en chaleur."},
                {"q":"Un appareil en veille, avec sa petite lumière allumée, consomme encore un peu d'électricité.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"En veille, l'appareil reste branché et consomme : il vaut mieux l'éteindre complètement."},
                {"q":"Comment Adam peut-il économiser l'eau chaude, et donc l'énergie ?","contexte":"Chaleur et économies","options":["en prenant un grand bain","en prenant une douche courte","en laissant couler l'eau en se savonnant"],"correct":1,"explication":"Une douche courte utilise beaucoup moins d'eau chaude qu'un bain."},
                {"q":"Que permet de faire le fait de baisser le thermostat de la maison de 1 °C ?","contexte":"Chaleur et économies","options":["consommer moins d'énergie","consommer plus d'énergie","ne rien changer à la consommation"],"correct":0,"explication":"Chauffer un peu moins, c'est bruler moins de combustible et dépenser moins d'énergie."},
                {"q":"À quoi sert un panneau solaire thermique placé sur un toit ?","contexte":"Chaleur et économies","options":["à produire de l'électricité","à chauffer de l'eau","à refroidir la maison"],"correct":1,"explication":"Le panneau solaire thermique chauffe de l'eau ; c'est le panneau photovoltaïque qui produit l'électricité."},
                {"q":"Pourquoi les oiseaux gonflent-ils leurs plumes quand il fait froid ?","contexte":"Chaleur et économies","options":["L'air emprisonné dans les plumes isole","Les plumes gonflées produisent de la chaleur","Les plumes gonflées attirent le soleil"],"correct":0,"explication":"L'air immobile est un bon isolant : il garde la chaleur du corps de l'oiseau."},
                {"q":"Quel matériau place-t-on dans les murs et le toit d'une maison pour l'isoler ?","contexte":"Chaleur et économies","options":["des plaques de cuivre","des barres de fer","de la laine de roche"],"correct":2,"explication":"La laine de roche emprisonne de l'air : c'est un isolant thermique ; le cuivre et le fer sont conducteurs."},
                {"q":"Pourquoi une boite isotherme garde-t-elle les boissons fraiches ?","contexte":"Chaleur et économies","options":["Ses parois produisent du froid","Ses parois conduisent bien la chaleur","Ses parois isolantes freinent la chaleur"],"correct":2,"explication":"Les parois isolantes empêchent la chaleur de l'extérieur d'entrer rapidement."},
                {"q":"Le métal est un bon conducteur de la chaleur.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"C'est pour cela que les casseroles sont en métal : la chaleur passe bien vers les aliments."},
                {"q":"Lequel de ces gestes économise l'énergie ?","contexte":"Chaleur et économies","options":["éteindre la lumière en sortant","ouvrir longtemps le frigo","laisser la télévision en veille"],"correct":0,"explication":"Une lampe éteinte ne consomme rien ; la veille et un frigo ouvert gaspillent de l'énergie."},
                {"q":"Pourquoi une poêle a-t-elle un fond en métal ?","contexte":"Chaleur et économies","options":["pour bien conduire la chaleur","pour garder la poêle froide","pour bien isoler les aliments"],"correct":0,"explication":"Le métal transmet bien la chaleur du feu aux aliments."},
                {"q":"Beaucoup de maisons belges sont chauffées par une chaudière au mazout ou au gaz. Ces combustibles sont…","contexte":"Chaleur et économies","options":["des énergies fossiles","des énergies renouvelables","des énergies solaires"],"correct":0,"explication":"Le mazout vient du pétrole et le gaz naturel est aussi une énergie fossile."},
                {"q":"Dans quel sens la chaleur passe-t-elle toujours d'un objet à un autre ?","contexte":"Chaleur et économies","options":["du plus léger vers le plus lourd","du plus froid vers le plus chaud","du plus chaud vers le plus froid"],"correct":2,"explication":"La chaleur va toujours du corps chaud vers le corps froid, jusqu'à ce qu'ils aient la même température."},
                {"q":"Pourquoi met-on un couvercle sur la casserole pour faire bouillir de l'eau ?","contexte":"Chaleur et économies","options":["L'eau bout alors à une température bien plus basse","L'eau bout plus vite : on économise l'énergie","L'eau reste plus froide plus longtemps"],"correct":1,"explication":"Le couvercle garde la chaleur dans la casserole : l'eau chauffe plus vite."},
                {"q":"Comment appelle-t-on un matériau qui laisse mal passer la chaleur, comme la laine ou le polystyrène ?","contexte":"Réponds par un mot.","type":"saisie","clavier":"texte","reponse":["isolant","un isolant","isolant thermique","un isolant thermique"],"explication":"Un isolant thermique freine le passage de la chaleur."},
                {"q":"Quel instrument mesure la température ?","contexte":"Chaleur et économies","options":["le thermomètre","le pluviomètre","le baromètre"],"correct":0,"explication":"Le thermomètre mesure la température ; le baromètre, la pression de l'air ; le pluviomètre, la pluie."}
              ]
            },
            {
              "id": "e4-mat-c",
              "titre": "Physique ou chimique ?",
              "type": "quiz",
              "nombreNecessaire": 5,
              "questions": [
                {"q":"Un glaçon fond dans un verre.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":0,"ordreFixe":true,"explication":"La glace devient eau liquide : c'est toujours de l'eau. Un changement d'état est physique."},
                {"q":"Du bois brule dans le feu ouvert.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"La combustion transforme le bois en cendres, en fumée et en gaz : de nouvelles matières apparaissent."},
                {"q":"Un clou en fer rouille sous la pluie.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"La rouille est une nouvelle matière, formée par le fer, l'eau et l'air."},
                {"q":"Du sucre se dissout dans le thé.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":0,"ordreFixe":true,"explication":"Le sucre est toujours là (le thé est sucré) : un mélange est une transformation physique."},
                {"q":"Un œuf cuit dans l'eau bouillante.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"La cuisson transforme l'œuf : le blanc devient blanc et ferme, et on ne peut pas revenir en arrière."},
                {"q":"On découpe une feuille de papier en petits morceaux.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":0,"ordreFixe":true,"explication":"Les morceaux sont toujours du papier : seule la forme a changé."},
                {"q":"Un gâteau cuit dans le four.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"La cuisson change la pâte en une nouvelle matière : le gâteau."},
                {"q":"L'eau d'une flaque s'évapore au soleil.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":0,"ordreFixe":true,"explication":"L'eau liquide devient vapeur d'eau : c'est un changement d'état, donc physique."},
                {"q":"Le pain grille et noircit dans le grille-pain.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"Le pain grillé, noirci, est une nouvelle matière : c'est une transformation chimique."},
                {"q":"Quel signe montre le plus surement qu'une transformation chimique a eu lieu ?","contexte":"Transformations","options":["La matière change d'état","Une nouvelle matière apparait","La matière change de forme ou de taille"],"correct":1,"explication":"Dans une transformation chimique, de nouvelles matières se forment ; changer de forme ou d'état est physique."},
                {"q":"Que faut-il réunir pour qu'une combustion se produise ?","contexte":"Transformations","options":["oxygène et eau seulement","combustible, oxygène et chaleur","combustible, eau froide et lumière"],"correct":1,"explication":"Ce sont les trois côtés du « triangle du feu » : sans l'un d'eux, le feu s'éteint."},
                {"q":"On pose un verre retourné sur une bougie allumée. Après quelques secondes, la flamme s'éteint. Pourquoi ?","contexte":"Transformations","options":["Elle manque d'oxygène","Le verre refroidit la flamme","Le verre attire la flamme"],"correct":0,"explication":"La combustion consomme l'oxygène de l'air enfermé sous le verre ; sans oxygène, elle s'arrête."},
                {"q":"Une transformation chimique produit une ou plusieurs nouvelles matières.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":0,"ordreFixe":true,"explication":"C'est ce qui la distingue d'une transformation physique, où la matière reste la même."},
                {"q":"Quand le sel se dissout dans l'eau, une nouvelle matière se forme.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"Le sel est toujours là, dissous : c'est une transformation physique."},
                {"q":"Que reste-t-il dans la cheminée quand tout le bois a fini de bruler ?","contexte":"Transformations","options":["de la sciure","des copeaux","des cendres"],"correct":2,"explication":"La combustion a transformé le bois en cendres, en fumée et en gaz."},
                {"q":"Pourquoi la formation de la rouille est-elle une transformation chimique ?","contexte":"Transformations","options":["Le fer devient une nouvelle matière","Le fer devient liquide","Le fer change seulement de couleur et d'aspect"],"correct":0,"explication":"La rouille n'est plus du fer : c'est une nouvelle matière, friable et orangée."},
                {"q":"En présence de quoi la rouille se forme-t-elle sur le fer ?","contexte":"Transformations","options":["d'eau et d'air","de lumière seulement","de chaleur seulement"],"correct":0,"explication":"Le fer rouille quand il est en contact avec l'eau (ou l'humidité) et l'oxygène de l'air."},
                {"q":"Comment protéger un vélo de la rouille ?","contexte":"Transformations","options":["le laisser mouillé après lavage","le laisser dehors sous la pluie","le ranger à l'abri, au sec"],"correct":2,"explication":"Sans eau, le fer ne rouille pas : on range le vélo au sec et on le sèche après la pluie."},
                {"q":"Sur une bougie allumée, la cire fond près de la mèche, puis la cire brule dans la flamme. Quelle phrase est juste ?","contexte":"Transformations","options":["Il y a une transformation physique et une chimique","Il n'y a qu'une transformation chimique","Il n'y a qu'une transformation physique"],"correct":0,"explication":"La cire qui fond change d'état (physique) ; la cire qui brule est une combustion (chimique)."},
                {"q":"Laquelle de ces transformations est réversible (on peut revenir en arrière) ?","contexte":"Transformations","options":["l'œuf qui cuit","le clou qui rouille","l'eau qui gèle","le papier qui brule"],"correct":2,"explication":"La glace peut refondre en eau ; les trois autres sont des transformations chimiques."},
                {"q":"On peut « décuire » un œuf dur pour retrouver un œuf cru.","contexte":"Vrai ou faux ?","options":["Vrai","Faux"],"correct":1,"ordreFixe":true,"explication":"La cuisson est une transformation chimique : on ne peut pas revenir en arrière."},
                {"q":"Le lait oublié hors du frigo tourne et sent mauvais.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"Le lait tourné est une nouvelle matière, au gout et à l'odeur différents."},
                {"q":"Du vinaigre versé sur du bicarbonate fait de la mousse et des bulles de gaz.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":1,"ordreFixe":true,"explication":"Un gaz nouveau se forme : c'est une transformation chimique."},
                {"q":"Théo mélange du sable et des cailloux dans un seau.","contexte":"Transformation physique ou chimique ?","options":["physique","chimique"],"correct":0,"ordreFixe":true,"explication":"Le sable et les cailloux ne changent pas : on pourrait les séparer avec un tamis."},
                {"q":"Lequel de ces exemples est une combustion ?","contexte":"Transformations","options":["du beurre qui fond","du sel qui se dissout dans l'eau","un glaçon qui fond","une allumette qui brule"],"correct":3,"explication":"Une combustion est une transformation chimique avec flamme : l'allumette brule."}
              ]
            }
          ]
        }
      ]
    }
  ]
};
