import { createStore } from "vuex";

export default createStore({
    state: {
        Exercies: [
            {
                id: "1",
                partie: "bras",
                nom: "curls en supination",
                cible: ["biceps", "deltoïdes"],
                equipement: ["haltère", "barre"],
                img: "https://i.goopics.net/dzca7d.gif",
                description:
                    "Saisissez l'haltère d'une main, alors que celle-ci se trouve en position neutre. En effectuant une rotation du poignet pour amener le pouce vers l'extérieur, pliez le bras à la force du biceps.",
            },
            {
                id: "2",
                partie: "bras",
                nom: "hammer curl",
                cible: ["biceps", "avant-bras"],
                equipement: "haltère",
                img: "https://i.goopics.net/23lgu9.gif",
                description:
                    "Saisissez l'haltère d'une main, alors que celle-ci se trouve en position neutre (pouce vers le haut, c'est à dire en prise marteau, d'ou le nom de l'exercie). Pliez le bras en gardant toujours le pouce vers le haut. Montez l'haltère le plus haut possible.",
            },
            {
                id: "3",
                partie: "bras",
                nom: "stretch curls",
                cible: "biceps",
                equipement: "élastique",
                img: "https://i.goopics.net/n2brob.gif",
                description:
                    "Debout, le pied droit en arrière, marchez sur l'élastique afin de le tendre à votre convenance pour lui donner la résistance appropriée. Saisissez-le avec votre main droite. A la force du biceps, ramenez l'avant-bras sur le bras en conservant la main en supination (auriculaire vers le corps).",
            },
            {
                id: "4",
                partie: "bras",
                nom: "curls sur banc incliné",
                cible: ["biceps", "avant-bras"],
                equipement: "haltère",
                img: "https://i.goopics.net/ju147u.gif",
                description:
                    "Haltères en mains, allongez-vous sur un banc incliné le plus horizontal possible. A la force du biceps, ramenez l'avant-bras sur le bras. Ne levez que légèrement le coude avant de redescendre.",
            },
            {
                id: "5",
                partie: "bras",
                nom: 'curls au pupitre "Larry Scott"',
                cible: ["biceps", "avant-bras"],
                equipement: ["haltère", "barre"],
                img: "https://i.goopics.net/9j44f5.gif",
                description:
                    "Assis, saississez une barre ou les haltères, main en supination (pouces à l'extérieur). Placez les bras sur le pupitre. Remontez la charge à la force du biceps.",
            },
            {
                id: "6",
                partie: "bras",
                nom: "brachial curls sur poulie basse",
                cible: "biceps",
                equipement: "poulie",
                img: "https://i.goopics.net/7mksbn.gif",
                description:
                    "Allongez-vous latéralement, côté droit sur un tapis de sol dans le prolongement de la poulie, tête vers la machine. Tendez le bras droit vers la poulie, puis fléchissez le bras pour amener la main à la base du cou. Puis retourner lentement dans la position initiale.",
            },
            {
                id: "7",
                partie: "bras",
                nom: "biceps, bras en croix, à la poulie haute",
                cible: "biceps",
                equipement: "poulie",
                img: "https://i.goopics.net/rjkvm7.gif",
                description:
                    "Debout au centre de la poulie vis-à-vis, bras écartés, poignées de la poulie haute saisies mains en supination: \n- inspirer et fléchir les avant-bras; \n- expirer en fin de mouvement.",
            },
            {
                id: "8",
                partie: "bras",
                nom: "power biceps curl à la poulie basse",
                cible: "biceps",
                equipement: "poulie",
                img: "https://i.goopics.net/lbyg1a.gif",
                description:
                    "La poulie est derrière vous, la poignée réglée légèrement en hauteur afin que le levier formée avec la main soit agréable, sans avoir à donner d'à-coup. Bloquez votre coude sur l'appui dorsal de la machine ou un banc. Penchez -vous en avant pour rammaser la poignée et remettez-vous en place. En prennant appui sur le coude, à la force du poids 1 seconde dans la position de contraction avant de redescendre, puis répétez.",
            },
            {
                id: "9",
                partie: "avant-bras",
                nom: "extension des poignets à la barre",
                cible: "avant-bras",
                equipement: "barre",
                img: "https://i.goopics.net/3kjck7.gif",
                description:
                    "Assis, les avants-bras reposant sur les cuisses ou sur un banc, la barre tenue mains en pronation, les poignets en flexion passive: \n- effectuer une extension des poignets.",
            },
            {
                id: "10",
                partie: "avant-bras",
                nom: "flexion des poignets à la barre",
                cible: "avant-bras",
                equipement: "barre",
                img: "https://i.goopics.net/yoeflp.gif",
                description:
                    "Assis, les avants-bras reposant sur les cuisses ou sur un banc, la barre tenue mains en supination( c'est à dire les pouces vers l'extérieur), les poignets en flexion passive: \n- inspirer et fléchir les poignets.",
            },
            {
                id: "11",
                partie: "avant-bras",
                nom: "flexion des avant-bras à la barre, mains en pronation",
                cible: ["avant-bras", "biceps"],
                equipement: "barre",
                img: "https://i.goopics.net/3ne4d2.gif",
                description:
                    "Debout, jambes légèrement écartées, bras tendus, maisn en pronation (c'est-à-dire pouces vers l'intérieur): \n- inspirer et fléchir les avnts-bras, expirer en fin de mouvement; \n- revenir à la position de départ en contrôant la descente de la barre.",
            },
            {
                id: "12",
                partie: "bras",
                nom: "triceps à la barre haute, mains en pronation",
                cible: "triceps",
                equipement: "poulie",
                img: "https://i.goopics.net/tzbeiy.gif",
                description:
                    "Debout, face à l'appareil, les mains sur la poignée coudes le long du corps: \n- inspirer et effectuer une extension des avant-bras en veillant à ne pas écarter les coudes du corps ;\n- expirer en fin de mouvement.",
            },
            {
                id: "13",
                partie: "bras",
                nom: "triceps à la poulie haute, mains en supination",
                cible: ["triceps", "avant-bras"],
                equipement: "poulie",
                img: "https://i.goopics.net/tzbeiy.gif",
                description:
                    "Debout, face à l'appareil, les bras le long du corps, les coudes fléchis, les mains sur les poignées:\r\n- inspirer et étendre les avant-bras en veillant à ne pas écarter les coudes du corps ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "14",
                partie: "bras",
                nom: "extension alternée des avant-bras à la poulie haute, main en supination",
                cible: "triceps",
                equipement: "poulie",
                img: "https://i.goopics.net/kjz9da.gif",
                description:
                    "Debout, face à l'appareil, la poignée saisie en supination : \n- inspirer et effectuer une extension de l'avant-bras; \n- expirer en fin de mouvement.",
            },
            {
                id: "15",
                partie: "bras",
                nom: "triceps à la poulie arrière atlas",
                cible: "triceps",
                equipement: "poulie",
                img: "https://i.goopics.net/1tqk61.gif",
                description:
                    "Assis sur la machine, dos à la poulie, la poignée saisie mains en pronation, les bras un peu plus haut que l'horizontale, les coudes fléchis : \n- inspirer et effectuer une extension des avant-bras en veillant à ne pas trop écarter les coudes ; \n- expirer en fin de mouvement.",
            },
            {
                id: "16",
                partie: "bras",
                nom: "extension des avant-bras à la barre, couché sur un banc",
                cible: "triceps",
                equipement: "barre",
                img: "https://i.goopics.net/oiauio.gif",
                description:
                    "Allongé sur un banc horizontal, la barre prise en pronation, les bras verticaux : \n- inspirer et effectuer une flexion des avant-bras, en veillant à ne pas trop écarter les coudes, pour descendre la barre au niveau du front ou derrière la tête; \n- revenir à la position de départ et expirer en fin d'effort.",
            },
            {
                id: "17",
                partie: "bras",
                nom: "tension des avant-bras, couché avec haltères",
                cible: "triceps",
                equipement: "haltère",
                img: "https://i.goopics.net/a5e34b.gif",
                description:
                    "Allongé sur un plan horizontal avec un haltère dans chaque main, bras verticaux: \n- inspirer et fléchir les avant-bras en contrôlant le mouvement; \n- revenir à la position de départ et expirer en fin d'effort.",
            },
            {
                id: "18",
                partie: "bras",
                nom: "extension vertical alternée des bras avec haltères",
                cible: "triceps",
                equipement: "haltère",
                img: "https://i.goopics.net/vi61cc.gif",
                description:
                    "Assis ou debout, l'haltère saisi d'une main, départ bras vertical : \n- inspirer et effectuer une flexion de l'avant-bras pour amener l'haltère derrière la nuque ; \n- revenir à la position de départ et expirer en fin de mouvement.",
            },
            {
                id: "19",
                partie: "bras",
                nom: "extension alternée des avant-bras avec un haltère, buste penché en avant",
                cible: "triceps",
                equipement: "haltère",
                img: "https://i.goopics.net/ro8h75.gif",
                description:
                    "Debout, les jambes légèrement fléchies, le buste penché en avant en conservant le dos droit. Le bras à l'horizontale, le long du corps, coude fléchi:\n- inspirer et effectuer une extension de l'avant-bras ;\n- expirer en fin de mouvement.",
            },
            {
                id: "20",
                partie: "bras",
                nom: "extension des avant-bras, assis, un haltère court tenu à deux mains",
                cible: "triceps",
                equipement: "haltère",
                img: "https://i.goopics.net/yl9dnn.gif",
                description:
                    "Assis, l'haltère saisi à deux mains derrière la nuque : \n- inspirer et effectuer une extension des avant-bras ; \n- expirer en fin de mouvement.",
            },
            {
                id: "21",
                partie: "bras",
                nom: "extension des avant-bras, assis à la barre",
                cible: "triceps",
                equipement: "haltère",
                img: "https://i.goopics.net/z2kpmr.gif",
                description:
                    "Assis ou debout, barre tenue les mains en pronation, bras verticaux:\r\n- inspirer et effectuer une flexion des avant-bras pour amener la barre derrière la nuque ;\r\n- revenir à la position de départ et expirer en fin d'extension.",
            },
            {
                id: "22",
                partie: "bras",
                nom: "dips ou repulsion entre deux bancs",
                cible: ["triceps", "pectauraux"],
                equipement: "poid du corps",
                img: "https://i.goopics.net/3iyyco.gif",
                description:
                    "les mains sur le bord d'un banc, les pieds reposant sur un autre banc, le corps dans le vide:\r\n- inspirer et effectuer une flexion des avant-bras suivie d'une répulsion ou extension des avant-bras;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "23",
                partie: "épaules",
                nom: "développé derrière de la nuque à la barre",
                cible: ["deltoïdes", "triceps"],
                equipement: "barre",
                img: "https://i.goopics.net/3ptscf.gif",
                description:
                    "Assis, le dos bien droit, la barre tenue derrière la nuque, saisie mains en pronation :\r\n- inspirer et développer la barre verticalement sans trop cambrer le dos ;\r\n- expirer en fin d'effort.",
            },
            {
                id: "24",
                partie: "épaules",
                nom: 'développé "devant" à la barre',
                cible: ["deltoïdes", "triceps"],
                equipement: "barre",
                img: "https://i.goopics.net/3ptscf.gif",
                description:
                    "Assis, dos bien droit, la barre tenue mains en pronation, reposant sur le haut de la poitrine:\r\n-inspirer et développer la barre verticalement ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "25",
                partie: "épaules",
                nom: "développé assis avec haltères",
                cible: ["deltoïdes", "triceps"],
                equipement: "haltère",
                img: "https://i.goopics.net/wsogbx.gif",
                description:
                    "Assis sur un banc, le dos bien droit, les haltères au niveau des épaules, tenus mains en pronation (pouces vers l'intérieur):\n- inspirer et développer jusqu'à tendre les bras verticalement;\n- expirer en fin de mouvement.",
            },
            {
                id: "26",
                partie: "épaules",
                nom: 'développé "devant" avec rotation des poignets',
                cible: ["deltoïdes", "triceps"],
                equipement: "haltère",
                img: "https://i.goopics.net/p1eioe.gif",
                description:
                    "Assis sur un banc, le dos bien droit, les bras fléchis, les coudes vers l'avant, les haltères saisis mains en supination (c'est-à-dire les pouces vers l'extérieur) et maintenus au niveau des épaules: \n- inspirer et développer jusqu'à tendre les bras verticalement en effectuant une rotation des poignets de 90° pour amener les mains en pronation (c'est-à-dire les pouces vers l'intérieur) ; \n- expirer en fin de mouvement.",
            },
            {
                id: "27",
                partie: "épaules",
                nom: "élévation latérale, buste penchée en avant",
                cible: ["deltoïdes", "trapèze haut", "trapèze bas"],
                equipement: "haltère",
                img: "https://i.goopics.net/b8z3vs.gif",
                description:
                    "Debout, les jambes écartées et légèrement fléchies, le buste penché en avant en conservant le dos plat, les bras pendants, haltères en mains, coudes légèrement fléchis : \n- inspirer et élever les bras jusqu'à l'horizontale ; \n- expirer en fin d'effort.",
            },
            {
                id: "28",
                partie: "épaules",
                nom: "élévation latérale des bras avec haltères",
                cible: ["deltoïdes", "trapèze haut"],
                equipement: "haltère",
                img: "https://i.goopics.net/yhrnwk.gif",
                description:
                    "Debout, jambes légèrement écartées, le dos bien droit, les bras le long du corps, un haltère dans chaque main : \n- élever les bras jusqu'à l'horizontale, coudes un peu fléchis ; \n- revenir à la position de départ",
            },
            {
                id: "29",
                partie: "épaules",
                nom: 'élévation alternée "en avant" ou frontal avec haltères',
                cible: "deltoïdes",
                equipement: "haltère",
                img: "https://i.goopics.net/ltctva.gif",
                description:
                    "Debout, les pieds légèrement écartés, les haltères pris en pronation reposant sur les cuisses ou légèrement sur les côtés : \n- inspirer et effectuer une élévation alternée des bras en avant (ou antépulsion) jusqu'au niveau des yeux ; \n- expirer en fin d'effort.",
            },
            {
                id: "30",
                partie: "épaules",
                nom: "élévation latérale, couché sur le côté",
                cible: "deltoïdes",
                equipement: "haltère",
                img: "https://i.goopics.net/89q1wv.gif",
                description:
                    "Allongé sur le côté, au sol ou sur un banc, un haltère en main pris en pronation: \n- inspirer et élever le bras jusqu'à la verticale ; jusqu'à une intensité maximale en fin de mouvement (quand les bras arrivent à l'horizontale); \n- expirer en fin de mouvement.",
            },
            {
                id: "31",
                partie: "épaules",
                nom: 'élévation "en avant" alternée à la poulie basse',
                cible: "deltoïdes",
                equipement: "poulie",
                img: "https://i.goopics.net/6frehn.gif",
                description:
                    "Debout, les pieds légèrement écartés, les bras le long du corps, la poignée en main, prise en pronation: \n- inspirer et élever en avant le bras jusqu'au niveau des yeux; \n- expirer en fin de mouvement.",
            },
            {
                id: "32",
                partie: "épaules",
                nom: 'élévation "en vant" à la poulie basse, main en supination',
                cible: "deltoïdes",
                equipement: "poulie",
                img: "https://i.goopics.net/6frehn.gif",
                description:
                    "Debout, les pieds légèrement écartés, les bras le long du corps, la poignée saisie main en semi-pronation (cet exercice se réalise avec une poignée spécialement adaptée à la prise en semi-pronation) : \n- inspirer et élever le bras en avant, jusqu'au niveau des yeux, expirer en fin de montée ; \n- revenir lentement en position de départ et recommencer.",
            },
            {
                id: "33",
                partie: "épaules",
                nom: "arrière des épaules aux poulies côte à côte",
                cible: ["deltoïdes", "trapèze bas"],
                equipement: "poulie",
                img: "https://i.goopics.net/eabetg.gif",
                description:
                    "Debout face aux poulies, les bras tendus en avant, la poignée droite saisie avec la main gauche et la poignée gauche saisie avec la main droite : \n- inspirer et écarter les bras, expirer en fin de mouvement ; \n- revenir à la position de départ en contrôlant le mouvement et recommencer.",
            },
            {
                id: "34",
                partie: "épaules",
                nom: "rotation externe du bras à la poulie",
                cible: ["deltoïdes", "trapèze bas"],
                equipement: "poulie",
                img: "https://i.goopics.net/9jxkpy.gif",
                description:
                    "La poulie descendue au niveau de la taille, le corps de profil par rapport à l'appareil, la poignée en main, le bras le long du corps, le coude fléchi, l'avant-bras contre le ventre : \n- effectuer une rotation externe du bras, en essayant si possible de maintenir le bras contre le corps et le coude fléchi.",
            },
            {
                id: "35",
                partie: "épaules",
                nom: "élévation latérale à la poulie basse, buste penché en avant",
                cible: ["deltoïdes", "trapèze bas"],
                equipement: "poulie",
                img: "https://i.goopics.net/ip1k7q.gif",
                description:
                    "Debout, les pieds écartés, jambes légèrement fléchies, le buste penché en avant en conservant le dos plat, les bras pendants, une poignée dans chaque main, les câbles se croisant : \n- inspirer et élever les bras jusqu'à l'horizontale ; \n- expirer en fin de mouvement.",
            },
            {
                id: "36",
                partie: "épaules",
                nom: "élévation latérale alternée à la poulie basse",
                cible: "deltoïdes",
                equipement: "poulie",
                img: "https://i.goopics.net/eabetg.gif",
                description:
                    "La poignée en main, le bras le long du corps :\r\n- inspirer et élever le bras jusqu'à l'horizontale ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "37",
                partie: "épaules",
                nom: 'élévation "en avant ou frontale" avec un haltère',
                cible: ["deltoïdes", "trapèze haut"],
                equipement: "haltère",
                img: "https://i.goopics.net/zeat35.gif",
                description:
                    "Debout, jambes légèrement écartées, dos bien droit, les abdominaux contractés, un haltère reposant sur les cuisses, tenu les mains croisées sur la poignée, paumes face à face, les bras tendus: \n- inspirer et élever l'haltère jusqu'au niveau des yeux; \n- redescendre doucement en évitant toute secousse ; \n- expirer en fin de mouvement.",
            },
            {
                id: "38",
                partie: "épaules",
                nom: 'élévation "en avant ou frontale" à la barre',
                cible: ["deltoïdes", "trapèze haut"],
                equipement: "barre",
                img: "https://i.goopics.net/haxhdu.gif",
                description:
                    "Debout, jambes légèrement écartées, la barre reposant sur les cuisses, saisie mains en pronation, le dos bien droit, les abdominaux contractés : \n- inspirer et élever la barre, bras tendus, jusqu'au niveau des yeux; \n- expirer en fin de mouvement.",
            },
            {
                id: "39",
                partie: "épaules",
                nom: "tirage vertical à la barre, mains écartées",
                cible: ["deltoïdes", "trapèze haut", "abdominaux"],
                equipement: "barre",
                img: "https://i.goopics.net/oceu4x.gif",
                description:
                    "Debout, jambes légèrement écartées, le dos bien droit, la barre saisie en pronation reposant sur les cuisses, les mains un peu plus écartées que la largeur des épaules: \n- inspirer et tirer la barre le long du corps jusqu'au menton en montant les coudes le plus haut possible ; \n- contrôler la descente de la barre en évitant toute secousse ; \n- expirer en fin d'effort.",
            },
            {
                id: "40",
                partie: "épaules",
                nom: "élévation latérale à la machine",
                cible: "deltoïdes",
                equipement: "machine assisté",
                img: "https://i.goopics.net/5my2qb.gif",
                description:
                    "Assis sur la machine, les poignées en main : \n- inspirer et élever les coudes jusqu'à l'horizontale; \n- expirer en fin de mouvement.",
            },
            {
                id: "41",
                partie: "épaules",
                nom: "arrière des épaules à la machine",
                cible: "deltoïdes",
                equipement: "machine assisté",
                img: "https://i.goopics.net/p1nffx.gif",
                description:
                    "Assis face à la machine, le buste appuyé sur le dossier, les bras tendus en avant, les poignées en main : \n- inspirer, écarter les bras et resserrer les omoplates en fin de mouvement ; \n- expirer.",
            },
            {
                id: "42",
                partie: "pectauraux",
                nom: "développé-incliné",
                cible: ["pectauraux", "deltoïdes", "triceps"],
                equipement: "barre",
                img: "https://i.goopics.net/jppglw.gif",
                description:
                    "Assis sur un banc incliné entre 45° et 60° , saisir la barre, mains en pronation, avec un écartement supérieur à celui des épaules: \n- inspirer et descendre la barre sur la fourchette sternale ; \n- développer, en expirant à la fin du mouvement.",
            },
            {
                id: "43",
                partie: "pectauraux",
                nom: 'développé-couché ou "bench press"',
                cible: ["pectauraux", "deltoïdes", "triceps"],
                equipement: "barre",
                img: "https://i.goopics.net/13xhl0.gif",
                description:
                    "Allongé sur un banc horizontal, les fessiers en contact avec le banc, les pieds au sol: \n- saisir la barre, mains en pronation en prenant un écartement supérieur à la largeur des épaules; \n- inspirer et descendre la barre en contrôlant le mouvement jusqu'à la poitrine; \n- développer en expirant en fin d'effort.",
            },
            {
                id: "44",
                partie: "pectauraux",
                nom: "développé-couché, mains resserrées",
                cible: ["pectauraux", "deltoïdes", "triceps"],
                equipement: "barre",
                img: "https://i.goopics.net/qmet0u.gif",
                description:
                    "Allongé sur un banc horizontal, les fessiers en contact avec le banc, les pieds au sol, saisir la barre mains en pronation avec un écartement variable de 10 à 40 cm selon la souplesse des poignets: \n- inspirer et descendre la barre sur la poitrine, les coudes écartés, en contrôlant le mouvement ; \n- développer, expirer en fin d'effort.",
            },
            {
                id: "45",
                partie: "pectauraux",
                nom: "développé-décliné",
                cible: ["pectauraux", "deltoïdes", "triceps"],
                equipement: "barre",
                img: "https://i.goopics.net/s1p9sx.gif",
                description:
                    "Allongé, tête en bas, sur un banc plus ou moins incliné (entre 20° et 40°), pieds fixés, saisir la barre, mains en pronation, avec un écartement égal ou supérieur à la largeur des épaules : \n- inspirer et descendre la barre sur le bas des pectoraux en contrôlant le mouvement; \n- développer en expirant en fin d'effort.",
            },
            {
                id: "46",
                partie: "pectauraux",
                nom: "développé-couché à la machine convergente",
                cible: ["pectauraux", "triceps"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/y7ll7f.gif",
                description:
                    "Allongé sur la machine, les fessiers en contact avec le banc, les pieds au sol, les poignées en mains: \n- inspirer et développer; \n- expirer en fin de mouvement.",
            },
            {
                id: "47",
                partie: "pectauraux",
                nom: '"dips" ou répulsions aux barres parallèles',
                cible: ["pectauraux", "triceps", "deltoïdes"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/6b6sid.gif",
                description:
                    "En appui sur les barres parallèles, les bras tendus, les jambes dans le vide: \n- inspirer et fléchir complètement les avant-bras pour amener la poitrine au niveau des barres; \n- effectuer la répulsion, expirer en fin d'effort.",
            },
            {
                id: "48",
                partie: "pectauraux",
                nom: "pompes",
                cible: ["pectauraux", "triceps"],
                equipement: "poid du corps",
                img: "https://i.goopics.net/al1ger.gif",
                description:
                    "En appui face au sol, les bras tendus, mains écartées de la largeur des épaules (ou plus), les pieds serrés ou très légèrement écartés: \n- inspirer et fléchir les bras pour amener la cage thoracique près du sol en évitant de creuser excessivement la région lombaires; \n- pousser jusqu'à l'extension complète des bras ; \n- expirer en fin de mouvement.",
            },
            {
                id: "49",
                partie: "pectauraux",
                nom: "développé-couché avec haltères",
                cible: ["pectauraux", "deltoïdes", "triceps"],
                equipement: "haltère",
                img: "https://i.goopics.net/43xvps.gif",
                description:
                    "Allongé sur un banc horizontal, les pieds au sol pour assurer la stabilité, coudes fléchis, mains en pronation en tenant les haltères au niveau de la poitrine : \n- inspirer et tendre les bras verticalement en effectuant une rotation des avant-bras pour ramener les mains face à face ; \n- lorsqu'elles se retrouvent face à face, il est possible d'effectuer une contraction isométrique pour localiser l'effort sur la partie sternale des grands pectoraux ; \n- expirer en fin de mouvement.",
            },
            {
                id: "50",
                partie: "pectauraux",
                nom: "écarté-couché avec haltères",
                cible: "pectauraux",
                equipement: "haltère",
                img: "https://i.goopics.net/auepv6.gif",
                description:
                    "Allongé sur un banc étroit pour ne pas gêner les mouvements des épaules, les haltères en mains, bras tendus ou coudes légèrement fléchis pour soulager l'articulation : \n- inspirer, puis écarter les bras jusqu'à l'horizontale ; \n- relever les bras jusqu'à la verticale en expirant; \n- provoquer une petite contraction isométrique en fin de mouvement pour accentuer le travail sur la partie sternale des pectoraux.",
            },
            {
                id: "51",
                partie: "pectauraux",
                nom: "développé-incliné avec haltères",
                cible: ["pectauraux", "triceps", "deltoïdes"],
                equipement: "haltère",
                img: "https://i.goopics.net/opoelh.gif",
                description:
                    "Assis sur un banc plus ou moins incliné (pas plus de 60° pour ne pas trop reporter le travail sur les deltoïdes), coudes fléchis, haltères saisis mains en pronation :\r\n- inspirer et tendre les bras verticalement en rapprochant les haltères ;\r\n- expirer en fin de mouvement",
            },
            {
                id: "52",
                partie: "pectauraux",
                nom: "écarté-incliné avec haltères",
                cible: ["pectauraux", "deltoïdes"],
                equipement: "haltère",
                img: "https://i.goopics.net/sdw5vf.gif",
                description:
                    "Assis sur un banc incliné entre 45° et 60°, haltères en mains, bras tendus verticalement ou légèrement fléchis pour soulager l'articulation du coude:\r\n- inspirer puis écarter les bras jusqu'à l'horizontale ;\r\n- relever les bras jusqu'à la verticale en expirant.",
            },
            {
                id: "53",
                partie: "pectauraux",
                nom: "écarté à la machine",
                cible: "pectauraux",
                equipement: "machine assisté",
                img: "https://i.goopics.net/6xxw83.gif",
                description:
                    "Assis sur la machine, bras écartés en position horizontale, coudes fléchis reposant sur le point d'application de la force, avant-bras et poignets relâchés: \n- inspirer et resserrer les bras au maximum ; \n- expirer en fin de mouvement.",
            },
            {
                id: "54",
                partie: "pectauraux",
                nom: "écarté debout à la poulie vis-à-vis",
                cible: "pectauraux",
                equipement: "poulie",
                img: "https://i.goopics.net/5ljfyg.gif",
                description:
                    "Debout, jambes légèrement écartées, le buste un peu incliné, bras écartés, poignées en mains, coudes légèrement fléchis : \n- inspirer et resserrer les bras pour amener les poignées en contact; \n- expirer en fin de contraction; \n- revenir sans à-coups à la position de départ et recommencer.",
            },
            {
                id: "55",
                partie: "pectauraux",
                nom: '"pull-over" avec haltères',
                cible: "pectauraux",
                equipement: "poulie",
                img: "https://i.goopics.net/1gfkz7.gif",
                description:
                    "Allongé sur un banc, pieds au sol, un haltère pris à deux mains, bras tendus, les disques reposant sur les paumes, pouces et index enserrant la poignée : \n- inspirer et descendre l'haltère derrière la tête en fléchissant légèrement les coudes ; \n- expirer en revenant à la position de départ",
            },
            {
                id: "56",
                partie: "pectauraux",
                nom: '"pull-over" à la barre, couché sur un banc horizontal',
                cible: ["pectauraux", "grand dorsal"],
                equipement: "barre",
                img: "https://i.goopics.net/gxkudb.gif",
                description:
                    "Bras tendus, la barre prise en pronation, mains écartées de la largeur des épaules : \n- inspirer en gonflant la poitrine au maximum et descendre la barre derrière la tête en fléchissant légèrement les coudes ; \n- expirer en revenant à la position de départ.",
            },
            {
                id: "57",
                partie: "dos",
                nom: "traction à la barre fixe",
                cible: ["grand dorsal", "biceps", "trapèze bas"],
                equipement: "barre de traction",
                img: "https://i.goopics.net/sjyzr4.gif",
                description:
                    "En suspension, à la barre fixe, mains très écartées en pronation: \n- inspirer et effectuer une traction pour amener la poitrine presque au niveau de la barre ; \n- expirer en fin de mouvement ; \n- revenir à la position de départ en contrôlant la descente et recommencer.",
            },
            {
                id: "58",
                partie: "dos",
                nom: "traction à la barre fixe, mains en supination",
                cible: ["grand dorsal", "trapèze bas"],
                equipement: "barre de traction",
                img: "https://i.goopics.net/qusl1b.gif",
                description:
                    "En suspension à la barre fixe, mains en supination écartées d'une largeur d'épaules; \n- inspirer et effectuer, en sortant la poitrine, une traction pour amener le menton à la hauteur de la barre; \n- expirer en fin de mouvement.",
            },
            {
                id: "59",
                partie: "dos",
                nom: "tirage-poitrine à la poulie haute",
                cible: ["grand dorsal", "trapèze bas", "deltoïdes"],
                equipement: "poulie",
                img: "https://i.goopics.net/29zlnm.gif",
                description:
                    "Assis face à l'appareil, les jambes calées, la barre prise en pronation, mains très écartées : \n- inspirer et tirer la barre jusqu'à la fourchette sternale en sortant la poitrine et en ramenant les coudes vers l'arrière ; \n- expirer en fin de mouvement.",
            },
            {
                id: "60",
                partie: "dos",
                nom: "tirage à la poulie basse prise serrée, mains en semi-pronation",
                cible: ["grand dorsal", "trapèze bas", "trapèze haut", "deltoïdes", "lombaires"],
                equipement: "poulie",
                img: "https://i.goopics.net/nh3l7d.gif",
                description:
                    "Assis, face à l'appareil, les pieds sur les cales, buste fléchi: \n- inspirer et ramener la poignée à la base du sternum, en redressant le dos et en timnt les coudes en arrière le plus loin possible ; \n- expirer en fin de mouvement et revenir sans à-coups à la position de départ.",
            },
            {
                id: "61",
                partie: "dos",
                nom: "tirage à la poulie basse avec une barre large, mains en pronation",
                cible: ["grand dorsal", "trapèze bas", "trapèze haut", "deltoïdes", "lombaires"],
                equipement: "poulie",
                img: "https://i.goopics.net/s5rwax.gif",
                description:
                    "Assis, face à l'appareil, les pieds sur les cales, buste fléchi, la barre saisie les mains en pronations (pouces vers l'intérieur) plus écartées que la largeur des épaules : \n- inspirer et tirer la barre vers la poitrine en redressant le dos et en maintenant les coudes levés ; \n- expirer en fin de mouvement et revenir sans à-coups à la position de départ.",
            },
            {
                id: "62",
                partie: "dos",
                nom: "tirage-nuque à la poulie haute",
                cible: ["grand dorsal", "trapèze bas", "biceps"],
                equipement: "poulie",
                img: "https://i.goopics.net/1i1t5f.gif",
                description:
                    "Assis face à l'appareil, les cuisses calées sous les boudins, la barre prise en pronation, mains très écartées:\r\n- inspirer et tirer la barre jusqu'à la nuque en ramenant les coudes le long du corps;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "63",
                partie: "dos",
                nom: "tirage-poitrine à la poulie haute avec une poignée à ses prises rapprochées",
                cible: ["grand dorsal", "biceps"],
                equipement: "poulie",
                img: "https://i.goopics.net/1i1t5f.gif",
                description:
                    "Assis, face à l'appareil, les genoux bloqués:\r\n- inspirer et ramener la poignée jusqu'au sternum en gonflant la poitrine et en inclinant légèrement le buste en arrière;\r\n- expirer en fin de mouvement",
            },
            {
                id: "64",
                partie: "dos",
                nom: "tirage bras tendus à la poulie haute",
                cible: ["grand dorsal", "triceps"],
                equipement: "poulie",
                img: "https://i.goopics.net/r3his2.gif",
                description:
                    "Debout, face à l'appareil, pieds légèrement écartés, barre saisie en pronation bras tendus, mains distantes d'une largeur d'épaules:\n- le dos fixé et la sangle abdominale contractée, inspirer et amener la barre jusqu'aux cuisses en conservant les bras tendus (ou les coudes très légèrement fléchis);\n- expirer en fin de mouvement.",
            },
            {
                id: "65",
                partie: "dos",
                nom: "tirage horizontal avec un haltère",
                cible: ["grand dorsal", "biceps", "deltoïdes", "trapèze haut"],
                equipement: "haltère",
                img: "https://i.goopics.net/g4ggw5.gif",
                description:
                    "L'haltère en main, pris en semi-pronation, la main et le genou opposés en appui sur le banc :\r\n- le dos fixé, inspirer et tirer l'haltère le plus haut possible, le bras le long du corps, en ramenant le coude bien en arrière ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "66",
                partie: "dos",
                nom: "tirage horizontal avec haltères",
                cible: ["grand dorsal", "biceps", "deltoïdes", "trapèze haut", "trapèze bas", "avant-bras", "lombaires"],
                equipement: "haltère",
                img: "https://i.goopics.net/vydvgy.gif",
                description:
                    "Debout, les genoux légèrement fléchis, le buste incliné plus ou moins à 45°, le dos bien plat, les bras relâchés le long du corps, un haltère dans chaque main, saisis mains en semi-pronation :\r\n- inspirer, effectuer un blocage respiratoire et une contraction isométrique de la sangle abdominale, tirer les haltères le plus haut possible en gardant les coudes le plus proches du corps et resserrer les omoplates en fin de mouvement ;\r\n- revenir à la position de départ et expirer",
            },
            {
                id: "67",
                partie: "dos",
                nom: "tirage horizontal à la barre",
                cible: ["grand dorsal", "biceps", "deltoïdes", "trapèze haut", "trapèze bas", "lombaires", "abdominaux"],
                equipement: "barre",
                img: "https://i.goopics.net/hki7vy.gif",
                description:
                    "Debout, les genoux légèrement fléchis, le buste incliné à 45°, dos bien plat, la barre saisie en pronation, mains plus écartées que la largeur des épaules et bras pendants:\r\n- inspirer, effectuer un blocage respiratoire et une contraction isométrique de la sangle abdominale, tirer la barre jusqu'à la poitrine ;\r\n- reprendre la position de départ et expirer.",
            },
            {
                id: "68",
                partie: "dos",
                nom: "tirage à la barre en T, sans appui ventral",
                cible: ["grand dorsal", "biceps", "deltoïdes", "trapèze haut", "trapèze bas", "lombaires", "abdominaux"],
                equipement: "barre",
                img: "https://i.goopics.net/1bc57b.gif",
                description:
                    "Genoux légèrement fléchis, la barre passant entre les jambes, les poignées saisies mains en pronation, le dos bien plat, le buste incliné à 45°: \n- inspirer et ramener la barre jusqu'à la poitrine; \n- expirer en fin de mouvement.",
            },
            {
                id: "69",
                partie: "dos",
                nom: "tirage à la barre en T avec appui ventral",
                cible: ["grand dorsal", "biceps", "deltoïdes", "trapèze haut", "trapèze bas"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/1bc57b.gif",
                description:
                    "En appui ventral sur le banc incliné :\r\n- inspirer et ramener la barre prise en pronation jusqu'à la poitrine ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "70",
                partie: "dos",
                nom: "soulevé de terre, jambes tendues",
                cible: ["fessiers", "ischio-jambiers", "lombaires"],
                equipement: "barre",
                img: "https://i.goopics.net/52n17z.gif",
                description:
                    "Debout, pieds légèrement écartés, face à la barre posée au sol :\n- inspirer, pencher le buste en avant, en gardant le dos cambré et, si possible, en conservant les jambes tendues ;\n- saisir la barre, mains en pronation, bras relâchés, et redresser le buste jusqu'à la verticale, le dos toujours fixé, la bascule s'effectuant au niveau des hanches ; expirer en fin de mouvement;\n- revenir à la position de départ, sans toutefois reposer la barre, et recommencer.",
            },
            {
                id: "71",
                partie: "dos",
                nom: "soulevé de terre",
                cible: [
                    "grand dorsal",
                    "trapèze haut",
                    "trapèze bas",
                    "quadriceps",
                    "adducteurs",
                    "ischio-jambiers",
                    "abdominaux",
                    "fessiers",
                    "mollets",
                    "lombaires",
                ],
                equipement: "barre",
                img: "https://i.goopics.net/uc4p4y.gif",
                description:
                    "Debout, face à la barre, jambes écartées, pieds vers l'extérieur, toujours dans l'axe des genoux : \n-fléchir les jambes pour amener les cuisses à l'horizontale ; saisir la barre, bras tendus, mains en pronation, à peu près écartées de la largeur des épaules (en inversant la prise d'une main - soit une main en supination et l'autre en pronation, on empêche la barre de rouler, ce qui permet de maintenir des charges extrêmement lourdes) ; \n- inspirer, bloquer la respiration, creuser légèrement le dos, contracter la sangle abdominale et tendre les jambes en redressant le buste pour se retrouver en position verticale, les épaules tirées en arrière ; expirer en fin de mouvement; \n- reposer la barre au sol en bloquant la respiration, sans jamais arrondir le dos.",
            },
            {
                id: "72",
                partie: "dos",
                nom: "soulevé de terre à la trap barre",
                cible: [
                    "grand dorsal",
                    "trapèze haut",
                    "trapèze bas",
                    "quadriceps",
                    "adducteurs",
                    "ischio-jambiers",
                    "abdominaux",
                    "fessiers",
                    "mollets",
                    "lombaires",
                ],
                equipement: "trap barre",
                img: "https://i.goopics.net/yifngo.gif",
                description:
                    "Debout, bien centré dans la barre (attention : un mauvais centrage entraînera une instabilité latérale), jambes légèrement écartées, le dos bien fixé et un peu cambré : \n-fléchir les jambes pour amener les cuisses à peu près à l'horizontale; \n- bras tendus, saisir les poignées de la barre en veillant à bien centrer la prise des mains; \n- inspirer, bloquer la respiration, contracter la sangle abdominale et la région lombaires et soulever la barre en tendant les jambes, sans jamais arrondir le bas du dos, expirer en fin d'effort ; \n-maintenir l'extension du corps deux secondes, puis reposer la barre en maintenant la sangle abdominale et la région lombaires contractées.",
            },
            {
                id: "73",
                partie: "dos",
                nom: "extension du buste au banc",
                cible: ["quadriceps", "ischio-jambiers", "lombaires"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/1b21gv.gif",
                description:
                    "Installé sur le banc, les chevilles bloquées, l'axe de flexion passant par l'articulation coxo-fémorale, le pubis en dehors du banc: \n- buste fléchi, effectuer une extension jusqu'à l'horizontale en relevant la tête ; \n- puis réaliser une hyperextension.",
            },
            {
                id: "74",
                partie: "dos",
                nom: "extension du buste à la machine",
                cible: "lombaires",
                equipement: "machine assisté",
                img: "https://i.goopics.net/1b21gv.gif",
                description:
                    "Assis sur le siège de l'appareil, le buste basculé en avant, le boudin de la machine placé au niveau des omoplates (ou scapulas): \n- inspirer et redresser le buste au maximum ; \n- revenir lentement en expirant à la position de départ et recommencer",
            },
            {
                id: "75",
                partie: "dos",
                nom: "tirage vertical à la barre, mains serrées",
                cible: ["trapèze haut", "trapèze bas", "deltoïdes", "lombaires"],
                equipement: "barre",
                img: "https://i.goopics.net/oceu4x.gif",
                description:
                    "Debout, jambes légèrement écartées, dos bien droit, la barre saisie mains en pronation, celles-ci écartées d'une largeur de paume ou un peu plus:\r\n- inspirer et tirer la barre le long du corps jusqu'au menton en montant les coudes le plus haut possible;\r\n- expirer et contrôler la descente de la barre en évitant toute secousse.",
            },
            {
                id: "76",
                partie: "dos",
                nom: "haussement d'épaules à la barre",
                cible: "trapèze haut",
                equipement: "barre",
                img: "https://i.goopics.net/d1ushu.gif",
                description:
                    "Debout, jambes légèrement écartées, face à la barre posée à même le sol ou sur un support: \n- la saisir mains en pronation ou en prise inversée si la charge est importante, avec un écartement un peu supérieur à la largeur des épaules; \n- les bras relâchés, le dos bien droit, les abdominaux contractés, effectuer des haussements d'épaules.",
            },
            {
                id: "77",
                partie: "dos",
                nom: "haussement et rotation des épaules avec haltères",
                cible: "trapèze haut",
                equipement: "haltère",
                img: "https://i.goopics.net/323bw8.gif",
                description:
                    "Debout, jambes légèrement écartées, tête bien droite ou un peu penchée en avant, bras relâchés le long du corps un haltère dans chaque main: hausser les épaules en leur faisant effectuer une rotation antéro-postérieure, puis revenir à la position initiale.",
            },
            {
                id: "78",
                partie: "dos",
                nom: "haussement d'épaules à la trap barre",
                cible: "trapèze haut",
                equipement: "trap barre",
                img: "https://i.goopics.net/d1ushu.gif",
                description:
                    "Debout, jambes légèrement écartées, face à la barre posée au sol ou sur un support : \n- saisir la barre en veillant à bien centrer la prise en mains (attention : avec des charges importantes sur une trap barre, une prise en mains mal ajustée fera basculer la barre vers l'avant ou l'arrière) ; \n-la tête bien droite ou légèrement en avant, les bras relâchés, le dos bien droit, les abdominaux contractés, effectuer des haussements d'épaules.",
            },
            {
                id: "79",
                partie: "dos",
                nom: "haussement d'épaules au cadre-guidé ou à la machine",
                cible: "trapèze haut",
                equipement: "machine assisté",
                img: "https://i.goopics.net/d1ushu.gif",
                description:
                    "Debout, face à l'appareil, saisir la barre en pronation, mains un peu plus écartées que la largeur des épaules ou, si la machine le permet, en semi-pronation, paumes face à face: \n- tête et dos bien droits, effectuer des haussements d'épaules",
            },
            {
                id: "80",
                partie: "jambes",
                nom: "flexion des cuisses avec haltères",
                cible: ["lombaires", "quadriceps", "ischio-jambiers", "fessier", "abdominaux"],
                equipement: "haltère",
                img: "https://i.goopics.net/ciulg4.gif",
                description:
                    "Debout, pieds légèrement écartés, un haltère dans chaque main, les bras relâchés:\n- regarder droit devant soi, inspirer, cambrer légèrement le dos et effectuer une flexion des cuisses;\n- quand les fémurs arrivent à l'horizontale, réaliser une extension des jambes pour revenir à la position initiale;\n- expirer en fin d'effort.",
            },
            {
                id: "81",
                partie: "jambes",
                nom: "flexion des cuisses avec un haltère tenu entre les jambes",
                cible: ["lombaires", "quadriceps", "ischio-jambiers", "fessiers", "abdominaux", "trapèze haut"],
                equipement: "haltère",
                img: "https://i.goopics.net/qceumi.gif",
                description:
                    "Debout, les jambes écartées, les pieds dirigés vers l'extérieur, un haltère maintenu entre les jambes : \n- regarder droit devant soi, cambrer légèrement le dos, inspirer, bloquer la respiration et effectuer une flexion des cuisses;\n- quand les fémurs arrivent à l'horizontale, réaliser une extension des jambes pour revenir à la position initiale ;\n- expirer en fin de mouvement",
            },
            {
                id: "82",
                partie: "jambes",
                nom: "squat barre devant",
                cible: ["lombaires", "quadriceps", "ischio-jambiers", "fessiers", "abdominaux", "adducteurs"],
                equipement: "barre",
                img: "https://i.goopics.net/yhhr46.gif",
                description:
                    "Debout, pieds plus ou moins écartés de la largeur des épaules, la barre saisie mains en pronation, reposant sur le haut des muscles pectoraux et sur les faisceaux antérieurs du deltoïde: \n- inspirer fortement pour maintenir une pression intra-thoracique qui empêchera le buste de s'affaisser vers l'avant, cambrer légèrement le dos, contracter la sangle abdominale et fléchir les cuisses pour les amener à l'horizontale; \n- revenir à la position initiale ; expirer en fin de mouvement.",
            },
            {
                id: "83",
                partie: "jambes",
                nom: "squat",
                cible: ["lombaires", "quadriceps", "ischio-jambiers", "fessiers", "abdominaux", "adducteurs"],
                equipement: "barre",
                img: "https://i.goopics.net/1w5xf3.gif",
                description:
                    "La barre posée sur le support, se glisser dessous et la placer sur les trapèzes un peu plus haut que les deltoïdes postérieurs ; saisir la barre à pleines mains avec un écartement variable selon les morphologies et tirer les coudes en arrière ; \n- inspirer fortement (pour maintenir une pression intra-thoracique qui empêchera le buste de s'affaisser vers l'avant), cambrer légèrement le dos, regarder droit devant soi et décoller la barre du support ; \n- reculer d'un ou deux pas, s'arrêter pieds parallèles (ou les pointes un peu vers l'extérieur), plus ou moins écartés de la largeur des épaules, s'accroupir en inclinant le dos vers l'avant, en contrôlant la descente et sans jamais arrondir la colonne vertébrale;\n- quand les fémurs arrivent à l'horizontale, effectuer une extension des jambes en redressant le buste pour se retrouver dans la position de départ; \n- expirer en fin de mouvement.",
            },
            {
                id: "84",
                partie: "jambes",
                nom: "squat jambes écartées",
                cible: ["quadriceps", "ischio-jambiers", "lombaires", "adducteurs", "abducteurs", "abdominaux", "fessiers"],
                equipement: "barre",
                img: "https://i.goopics.net/1w5xf3.gif",
                description:
                    "Ce mouvement s'effectue de la même façon que le squat classique, mais les jambes sont largement écartées et les pointes des pieds tournées vers l'extérieur.",
            },
            {
                id: "85",
                partie: "jambes",
                nom: "presse à cuisses inclinée",
                cible: ["ischio-jambiers", "quadriceps", "adducteurs", "lombaires"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/nrv2q8.gif",
                description:
                    "Installé sur l'appareil, le dos bien calé sur le dossier, les pieds moyennement écartés:\r\n- inspirer, débloquer la sécurité et fléchir les genoux au maximum de façon à ramener les cuisses sur les côtés de la cage thoracique ;\r\n- revenir en position de départ en expirant en fin de mouvement.",
            },
            {
                id: "86",
                partie: "jambes",
                nom: 'presse incliné ou "hack squat"',
                cible: ["quadriceps", "lombaires", "fessiers", "abdominaux", "ischio-jambiers"],
                equipement: "presse à cuisse",
                img: "https://i.goopics.net/9ocpwf.gif",
                description:
                    'Les jambes tendues, le dos contre le dossier, les épaules calées sous les boudins (hack signifie "attelage", les boudins rappelant le collier que l\'on passe aux animaux de trait), les pieds moyennement écartés: \n- inspirer, débloquer la sécurité et effectuer une flexion des jambes ; \n- revenir à la position de départ, expirer en fin de mouvement.',
            },
            {
                id: "87",
                partie: "jambes",
                nom: "box squat",
                cible: ["lombaires", "quadriceps", "ischio-jambiers", "fessiers", "abdominaux"],
                equipement: "barre",
                img: "https://i.goopics.net/zefnyz.gif",
                description: "Cette technique consiste à réaliser un squat en s'asseyant sur un banc pendant une ou deux secondes et en remontant.",
            },
            {
                id: "88",
                partie: "jambes",
                nom: "extension des jambes à la machine",
                cible: "quadriceps",
                equipement: "machine assisté",
                img: "https://i.goopics.net/tjks23.gif",
                description:
                    "Assis sur la machine, les mains agrippées aux poignées ou au siège pour maintenir le buste immobile, les genoux fléchis, les chevilles placées sous les boudins: \n- inspirer et effectuer une extension des jambes jusqu'à l'horizontale; \n- expirer en fin de mouvement.",
            },
            {
                id: "89",
                partie: "jambes",
                nom: 'ischio-jambiers, couhé à la machine, ou "leg curl"',
                cible: ["ischio-jambiers", "mollets"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/8ldnro.gif",
                description:
                    "Allongé à plat ventre sur la machine, mains sur les poignées, jambes tendues, chevilles engagées sous les boudins : \n- inspirer et effectuer une flexion simultanée des jambes, en essayant de toucher les fesses avec les talons ; expirer en fin d'effort; \n- revenir à la position de départ en contrôlant le mouvement.",
            },
            {
                id: "90",
                partie: "jambes",
                nom: "ischio-jambiers, debout alternés à la machine",
                cible: ["ischio-jambiers", "mollets"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/9dgeys.gif",
                description:
                    "Debout, le buste reposant sur le support, le genou calé, la jambe en extension, la cheville placée sous le boudin:\r\n- inspirer et fléchir le genou ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "91",
                partie: "jambes",
                nom: "ichio-jambiers, assis à la machine",
                cible: ["ischio-jambiers", "mollets"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/vixl7g.gif",
                description:
                    "Assise à la machine, jambes tendues, chevilles placées sur le boudin, cuisses calées, mains sur les poignées: \n- inspirer et effectuer une flexion des jambes ; \n- expirer en fin de mouvement.",
            },
            {
                id: "92",
                partie: "jambes",
                nom: 'flexion du buste en avant ou "good morning"',
                cible: ["ischio-jambiers", "fessiers", "lombaires"],
                equipement: "barre",
                img: "https://i.goopics.net/voe3hk.gif",
                description:
                    "Debout, pieds légèrement écartés, la barre reposant sur les trapèzes ou un peu plus bas sur les deltoïdes postérieurs: \n- inspirer et fléchir le buste en avant jusqu'à l'horizontale en gardant le dos bien droit, l'axe de flexion passant par l'articulation coxo-fémorale ; \n- retrouver la position de départ et expirer.",
            },
            {
                id: "93",
                partie: "jambes",
                nom: "adducteurs à la poulie basse",
                cible: "adducteurs",
                equipement: "poulie",
                img: "https://i.goopics.net/c7smtm.gif",
                description:
                    "Debout sur une jambe, l'autre reliée à la sangle, la main opposée en appui sur le cadre de la machine ou sur un support quelconque : \n- ramener la jambe en croisant par-devant celle qui est en appui.",
            },
            {
                id: "94",
                partie: "jambes",
                nom: "adducteurs à la machine",
                cible: "adducteurs",
                equipement: "machine assisté",
                img: "https://i.goopics.net/cb1kbf.gif",
                description:
                    "Assis sur la machine, jambes écartées :\r\n- resserrer les cuisses ;\r\n- revenir à la position de départ en contrôlant le mouvement.",
            },
            {
                id: "95",
                partie: "jambes",
                nom: "flexion et extension des pieds",
                cible: "mollets",
                equipement: ["poid du corps", "barre"],
                img: "https://i.goopics.net/rnqa6v.gif",
                description:
                    "Debout, l'avant des pieds engagé sur une marche, une main en appui sur le mur ou sur la rampe pour plus de stabilité:\r\n- effectuer lentement une flexion des pieds pour bien étirer les mollets:\r\n- puis enchaîner sur une extension des pieds (flexion plantaire) en maintenant l'articulation des genoux en extension, ou légèrement fléchie",
            },
            {
                id: "96",
                partie: "jambes",
                nom: "extension des pieds à la machine",
                cible: "mollets",
                equipement: ["machine assisté", "presse à cuisse"],
                img: "https://i.goopics.net/vb49nq.gif",
                description:
                    "Debout, le dos bien droit, les épaules sous les parties rembourrées de l'appareil, l'avant des pieds engagé sur la cale, les chevilles en flexion passive: \n- effectuer une extension des pieds (flexion plantaire) en maintenant toujours l'articulation des genoux en extension.",
            },
            {
                id: "97",
                partie: "jambes",
                nom: "extension d'un pied avec haltère",
                cible: "mollets",
                equipement: "haltère",
                img: "https://i.goopics.net/rnqa6v.gif",
                description:
                    "Debout sur une jambe, l'avant-pied engagé sur une cale, une main tenant un haltère, l'autre agrippée à un support pour un meilleur équilibre : \n- effectuer une extension du pied (flexion plantaire) en maintenant l'articulation du genou en extension ou très légèrement fléchie ; \n- revenir à la position initiale.",
            },
            {
                id: "98",
                partie: "jambes",
                nom: "mollets à la machine, poid reposant sur le bassin",
                cible: "mollets",
                equipement: "machine assisté",
                img: "https://i.goopics.net/vb49nq.gif",
                description:
                    "Les pieds sur la cale en flexion passive, jambes tendues, buste incliné, avant-bras reposant sur le support antérieur, la partie rembourrée de la machine reposant sur le bassin :\n- effectuer une extension des pieds ou flexion plantaire.",
            },
            {
                id: "99",
                partie: "jambes",
                nom: "extension des pieds, assis à la machine, ou presse à soléaires",
                cible: "mollets",
                equipement: "machine assisté",
                img: "https://i.goopics.net/ocmymw.gif",
                description:
                    "Assis sur l'appareil, le bas des cuisses engagé sous la partie rembourrée, l'avant des pieds sur le socle, les chevilles en flexion passive: effectuer une extension des pieds (flexion plantaire).",
            },
            {
                id: "100",
                partie: "jambes",
                nom: "soléaires à la barre",
                cible: "mollets",
                equipement: "barre",
                img: "https://i.goopics.net/oo745d.gif",
                description:
                    "Assis sur un banc, une cale placée sous l'avant des pieds, la barre posée sur le bas des cuisses: \n- effectuer une extension des pieds (flexion plantaire).",
            },
            {
                id: "101",
                partie: "fessiers",
                nom: "fente avant",
                cible: ["fessiers", "quadriceps"],
                equipement: "barre",
                img: "https://i.goopics.net/upgp1n.gif",
                description:
                    "Debout, jambes légèrement écartées, la barre derrière la nuque reposant sur les muscles trapèzes: \n- inspirer et effectuer un grand pas en avant en gardant le tronc le plus droit possible ; lors de la fente, la cuisse déplacée vers l'avant doit se stabiliser à l'horizontale ou légèrement en dessous ; \n- revenir en position initiale et expirer.",
            },
            {
                id: "102",
                partie: "fessiers",
                nom: "fente avant avec haltères",
                cible: ["fessiers", "quadriceps"],
                equipement: "haltère",
                img: "https://i.goopics.net/b7rki1.gif",
                description:
                    "Debout, jambes légèrement écartées, un haltère dans chaque main: \n- inspirer et effectuer un grand pas en gardant le buste le plus droit possible ; \n- lorsque la cuisse portée en avant arrive à l'horizontale ou légèrement en dessous, effectuer une extension tonique de celle-ci pour revenir à la position initiale ; \n- expirer en fin de mouvement.",
            },
            {
                id: "103",
                partie: "fessiers",
                nom: "extension de la hanche à la poulie basse",
                cible: ["fessiers", "ischio-jambiers"],
                equipement: "poulie",
                img: "https://i.goopics.net/ceqhfh.gif",
                description:
                    "Debout face à l'appareil, les mains sur la poignée, le bassin incliné en avant, une jambe en appui, l'autre reliée à la poulie basse:\r\n- effectuer une extension de la hanche.",
            },
            {
                id: "104",
                partie: "fessiers",
                nom: "extension de la hanche à la machine",
                cible: ["fessiers", "ischio-jambiers"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/9dgeys.gif",
                description:
                    "Le buste un peu incliné vers l'avant, les mains sur les poignées, une jambe en appui, l'autre ramenée légèrement en avant, le boudin placé sous l'articulation du genou à mi-distance de la cheville: \n- inspirer et ramener la cuisse en arrière pour porter la hanche en hyperextension ; \n- maintenir la contraction en isométrie pendant deux secondes, et revenir à la position de départ; expirer en fin d'extension.",
            },
            {
                id: "105",
                partie: "fessiers",
                nom: "extension de la hanche au sol",
                cible: ["fessiers", "ischio-jambiers"],
                equipement: "poid du corps",
                img: "https://i.goopics.net/85ftko.gif",
                description:
                    "Agenouillé sur une jambe, l'autre ramenée sous la poitrine, en appui sur les coudes ou sur les mains, bras tendus : \n- ramener la jambe fléchie sous la poitrine en arrière, jusqu'à effectuer une extension complète de la hanche.",
            },
            {
                id: "106",
                partie: "fessiers",
                nom: "relevé de bassin au sol",
                cible: ["fessiers", "ischio-jambiers"],
                equipement: "poid du corps",
                img: "https://i.goopics.net/1535ra.gif",
                description:
                    "Allongé sur le dos, les mains à plat sur le sol, les bras Je long du corps, les genoux fléchis:\r\n- inspirer et décoller les fesses du sol en poussant à fond sur les pieds;\r\n- maintenir la position deux secondes et redescendre Je bassin sans toutefois poser les fesses au sol;\r\n- expirer et recommencer.",
            },
            {
                id: "107",
                partie: "fessiers",
                nom: "abduction de la hanche, debout à la poulie basse",
                cible: "abducteurs",
                equipement: "poulie",
                img: "https://i.goopics.net/c7smtm.gif",
                description:
                    "Debout, une jambe en appui, l'autre reliée à la poulie basse, la main opposée en appui pour stabiliser le corps :\r\n- élever latéralement la jambe le plus haut possible.",
            },
            {
                id: "108",
                partie: "fessiers",
                nom: "abduction de la hanche, debout à la machine",
                cible: "abducteurs",
                equipement: "machine assisté",
                img: "https://i.goopics.net/c7smtm.gif",
                description:
                    "Debout sur la machine, une jambe en appui, le boudin placé sur la face externe de l'autre jambe au-dessous de l'articulation du genou: \n- élever latéralement la jambe le plus haut possible et revenir lentement à la position de départ.",
            },
            {
                id: "109",
                partie: "fessiers",
                nom: "abduction de la hanche au sol",
                cible: "abducteurs",
                equipement: "poid du corps",
                img: "https://i.goopics.net/jbc3hq.gif",
                description:
                    "Couché sur le côté, la tête maintenue : \n- effectuer une élévation latérale de la jambe, Je genou devant être toujours tendu et l'abduction ne devant pas dépasser les 70°.",
            },
            {
                id: "110",
                partie: "fessiers",
                nom: "abducteurs, assis à la machine",
                cible: "abducteurs",
                equipement: "machine assisté",
                img: "https://i.goopics.net/cb1kbf.gif",
                description: "Assis sur la machine : \n- écarter les cuisses au maximum.",
            },
            {
                id: "111",
                partie: "abdominaux",
                nom: "crunch",
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/fu3hrc.gif",
                description:
                    "Allongé sur le dos, les mains derrière la tête, les cuisses à la verticale, les genoux fléchis:\r\n- inspirer et décoller les épaules du sol en rapprochant les genoux de la tête par un enroulement du rachis ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "112",
                partie: "abdominaux",
                nom: "relevé du buste au sol",
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/fu3hrc.gif",
                description:
                    "Couché sur le dos, les genoux fléchis, les pieds au sol, les mains derrière la tête :\r\n- inspirer et relever le buste en arrondissant le dos ;\r\n- expirer en fin de mouvement ;\r\n- revenir à la position initiale, mais cette fois-ci sans reposer le buste ;",
            },
            {
                id: "113",
                partie: "abdominaux",
                nom: "relevé du buste à l'espalier",
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/2dqfwv.gif",
                description:
                    "Les pieds calés dans l'espalier, les cuisses à la verticale, le buste au sol, les mains\r\nderrière la tête :\r\n- inspirer et remonter le buste le plus haut possible en arrondissant la colonne vertébrale ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "114",
                partie: "abdominaux",
                nom: 'décollements des épaules avec enroulement vertébral ou "crunch", jambes en appui sur un banc',
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/fu3hrc.gif",
                description:
                    "Les jambes posées sur un banc, le buste au sol, mains derrière la tête: \n- inspirer et décoller les épaules en enroulant le dos pour essayer de toucher les genoux avec la tête ; \n- expirer en fin de mouvement.",
            },
            {
                id: "115",
                partie: "abdominaux",
                nom: "relevé du buste au banc incliné",
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/sqdow3.gif",
                description:
                    "Assis sur le banc, les pieds calés sous les boudins, les mains derrière la nuque, inspirer et\r\nincliner le buste sans jamais dépasser 20°:\r\n- remonter en arrondissant légèrement le dos pour mieux localiser sur le droit de l'abdomen ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "116",
                partie: "abdominaux",
                nom: "relevé du buste en suspension au banc",
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/fu3hrc.gif",
                description:
                    "Les pieds calés sous les boudins, le buste dans le vide, les mains derrière la tête : \n- inspirer et relever le buste pour essayer de toucher les genoux avec la tête, en veillant à toujours enrouler la colonne vertébrale; \n- expirer en fin de contraction.",
            },
            {
                id: "117",
                partie: "abdominaux",
                nom: 'enroulement vertébral ou "crunch" à la poulie haute',
                cible: "abdominaux",
                equipement: "poulie",
                img: "https://i.goopics.net/t9jn2w.gif",
                description:
                    "À genoux, la barre derrière la nuque : \n- inspirer et enrouler le rachis pour rapprocher le sternum du pubis; \n- expirer pendant l'exécution.",
            },
            {
                id: "118",
                partie: "abdominaux",
                nom: 'abdominaux ou "crunch" à la machine',
                cible: ["abdominaux", "quadriceps"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/t9jn2w.gif",
                description:
                    "Assis sur la machine, les mains tenant les poignées, les pieds calés sous\r\nles boudins :\r\n- inspirer et enrouler le rachis en essayant de rapprocher le plus possible le sternum du pubis ;\r\n- expirer en fin de mouvement.",
            },
            {
                id: "119",
                partie: "abdominaux",
                nom: "relevé de jambes à la planche inclinée et décollement du bassin",
                cible: ["abdominaux", "quadriceps"],
                equipement: "poid du corps",
                img: "https://i.goopics.net/h82bc4.gif",
                description:
                    "Allongé sur la planche inclinée, les mains agrippées aux barreaux, ou aux poignées: \n- relever les jambes jusqu'à l'horizontale ; \n- décoller ensuite le bassin en enroulant la colonne vertébrale pour essayer de toucher la tête avec les genoux.",
            },
            {
                id: "120",
                partie: "abdominaux",
                nom: "relevé des genoux à la chaise abdominale",
                cible: ["abdominaux", "quadriceps"],
                equipement: "machine assisté",
                img: "https://i.goopics.net/cnjenv.gif",
                description:
                    "En appui sur les coudes, le dos calé: \n- inspirer et remonter les genoux vers la poitrine en arrondissant le dos pour bien contracter la sangle abdominale; \n- expirer en fin de mouvement.",
            },
            {
                id: "121",
                partie: "abdominaux",
                nom: "relevé de jambes, suspendu à la barre",
                cible: "abdominaux",
                equipement: "barre de traction",
                img: "https://i.goopics.net/cnjenv.gif",
                description:
                    "En suspension à la barre fixe : \n- inspirer et remonter les genoux le plus haut possible en veillant à rapprocher le pubis du sternum par un enroulement du rachis; \n- expirer en fin de mouvement.",
            },
            {
                id: "122",
                partie: "abdominaux",
                nom: "rotation du buste avec bâton",
                cible: "abdominaux",
                equipement: "barre",
                img: "https://i.goopics.net/wsl13k.gif",
                description:
                    "Debout, jambes écartées, un bâton placé au niveau des trapèzes au-dessus des deltoïdes postérieurs, les mains reposant sur ce bâton sans toutefois trop appuyer :\n- effectuer des rotations du buste d'un côté puis de l'autre en maintenant le bassin immobile par une contraction isométrique des fessiers.",
            },
            {
                id: "123",
                partie: "abdominaux",
                nom: "flexion latéral du buste avec lest",
                cible: "abdominaux",
                equipement: ["haltère", "kettlebell"],
                img: "https://i.goopics.net/592yhx.gif",
                description:
                    "Debout, jambes légèrement écartées, une main derrière la tête, un haltère tenu dans l'autre main : \n- effectuer une flexion latérale du buste du côté opposé à l'haltère ; \n- revenir à la position initiale, ou la dépasser en effectuant cette fois-ci une flexion passive du buste ; \n- alterner les séries en changeant l'haltère de côté sans temps de récupération.",
            },
            {
                id: "124",
                partie: "abdominaux",
                nom: "flexion latéral du buste au banc",
                cible: "abdominaux",
                equipement: "poid du corps",
                img: "https://i.goopics.net/jbc3hq.gif",
                description:
                    "De côté, la hanche sur le banc, le buste dans le vide, les mains derrière la tête ou sur la poitrine, les pieds calés sous les boudins :\r\n- effectuer des flexions latérales du buste vers le haut.",
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
