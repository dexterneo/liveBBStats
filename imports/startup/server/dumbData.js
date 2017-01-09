/*eslint no-console: "off"*/

import { Meteor } from 'meteor/meteor';

import { FederationConfig } from '../../api/federationConfig/schema.js';

Meteor.startup(() => {
	if (FederationConfig.find({}).count() === 0) {
		const regions = [
			'LR01 - ALPES',
			'LR02 - ALSACE',
			'LR03 - AQUITAINE',
			'LR04 - PAYS DE LA LOIRE',
			'LR05 - AUVERGNE',
			'LR06 - BOURGOGNE',
			'LR07 - BRETAGNE',
			'LR08 - CENTRE',
			'LR09 - CHAMPAGNE ARDENNE',
			'LR10 - COTE D\'AZUR',
			'LR11 - NORD/PAS-DE-CALAIS',
			'LR12 - FRANCHE-COMTÉ',
			'LR13 - LANGUEDOC ROUSSILLON',
			'LR14 - LIMOUSIN',
			'LR15 - LORRAINE',
			'LR16 - LYONNAIS',
			'LR17 - HAUTE NORMANDIE',
			'LR18 - BASSE NORMANDIE',
			'LR19 - ILE DE FRANCE',
			'LR20 - PICARDIE',
			'LR21 - POITOU-CHARENTES',
			'LR22 - PROVENCE',
			'LR23 - PYRENEES',
			'LR24 - CORSE',
			'LR30 - GUADELOUPE',
			'LR31 - MARTINIQUE',
			'LR32 - GUYANE',
			'LR33 - LA REUNION',
			'LR34 - NOUVELLE-CALEDONIE',
			'LR35 - POLYNESIE FRANCAISE',
			'LR36 - MAYOTTE',
			'LR37 - WALLIS ET FUTUNA',
			'LR38 - ST PIERRE ET MIQUELON',
			'LR99 - HANDI BASKET'
		];

		const departments = [
			'CD01 - AIN',
			'CD02 - AISNE',
			'CD03 - ALLIER',
			'CD04 - ALPES DE HAUTE PROVENCE',
			'CD05 - HAUTES ALPES',
			'CD06 - ALPES MARITIMES',
			'CD08 - ARDENNES',
			'CD09 - ARIEGE',
			'CD10 - AUBE',
			'CD11 - AUDE',
			'CD12 - AVEYRON',
			'CD13 - BOUCHES-DU-RHONE',
			'CD14 - CALVADOS',
			'CD15 - CANTAL',
			'CD16 - CHARENTE',
			'CD17 - CHARENTE MARITIME',
			'CD18 - CHER',
			'CD19 - CORREZE',
			'CD20 - CORSE',
			'CD21 - COTE D\'OR',
			'CD22 - COTES D\'ARMOR',
			'CD23 - CREUSE',
			'CD24 - DORDOGNE',
			'CD25 - DOUBS',
			'CD26 - DROME-ARDECHE',
			'CD27 - EURE',
			'CD28 - EURE ET LOIR',
			'CD29 - FINISTERE',
			'CD30 - GARD',
			'CD31 - HAUTE GARONNE',
			'CD32 - GERS',
			'CD33 - GIRONDE',
			'CD34 - HERAULT',
			'CD35 - ILLE-ET-VILAINE',
			'CD36 - INDRE',
			'CD37 - INDRE ET LOIRE',
			'CD38 - ISERE',
			'CD39 - JURA',
			'CD40 - LANDES',
			'CD41 - LOIR ET CHER',
			'CD42 - LOIRE',
			'CD43 - HAUTE-LOIRE',
			'CD44 - LOIRE-ATLANTIQUE',
			'CD45 - LOIRET',
			'CD46 - LOT',
			'CD47 - LOT-ET-GARONNE',
			'CD48 - LOZERE',
			'CD49 - MAINE ET LOIRE',
			'CD50 - MANCHE',
			'CD51 - MARNE',
			'CD52 - HAUTE-MARNE',
			'CD53 - MAYENNE',
			'CD54 - MEURTHE ET MOSELLE',
			'CD55 - MEUSE',
			'CD56 - MORBIHAN',
			'CD57 - MOSELLE',
			'CD58 - NIEVRE',
			'CD59 - NORD',
			'CD60 - OISE',
			'CD61 - ORNE',
			'CD62 - PAS DE CALAIS',
			'CD63 - PUY-DE-DOME',
			'CD64 - PYRENEES ATLANTIQUES',
			'CD65 - HAUTES PYRENEES',
			'CD66 - PYRENEES ORIENTALES',
			'CD67 - BAS-RHIN',
			'CD68 - HAUT-RHIN',
			'CD69 - RHONE',
			'CD70 - HAUTE SAONE',
			'CD71 - SAONE ET LOIRE',
			'CD72 - SARTHE',
			'CD73 - SAVOIE',
			'CD74 - HAUTE-SAVOIE',
			'CD75 - PARIS',
			'CD76 - SEINE-MARITIME',
			'CD77 - SEINE-ET-MARNE',
			'CD78 - YVELINES',
			'CD79 - DEUX SEVRES',
			'CD80 - SOMME',
			'CD81 - TARN',
			'CD82 - TARN ET GARONNE',
			'CD83 - VAR',
			'CD84 - VAUCLUSE',
			'CD85 - VENDEE',
			'CD86 - VIENNE',
			'CD87 - HAUTE-VIENNE',
			'CD88 - VOSGES',
			'CD89 - YONNE',
			'CD90 - TERRITOIRE DE BELFORT',
			'CD91 - ESSONNE',
			'CD92 - HAUTS DE SEINE',
			'CD93 - SEINE ST DENIS',
			'CD94 - VAL DE MARNE',
			'CD95 - VAL D\'OISE',
			'CD99 - HANDI BASKET',
			'CD9A - GUADELOUPE',
			'CD9B - MARTINIQUE',
			'CD9C - GUYANE',
			'CD9D - REUNION',
			'CD9E - NOUVELLE CALEDONIE',
			'CD9F - POLYNESIE F. - ILES VENT',
			'CD9G - MAYOTTE',
			'CD9H - WALLIS ET FUTUNA',
			'CD9J - ST PIERRE ET MIQUELON',
			'CD9K - SAINT-MARTIN',
			'CD9L - POLYNESIE F. - ILES SOUS LE VENT',
			'CD9M - POLYNESIE F. - TUAMOTU -GAMBIER',
			'CD9N - POLYNESIE F AUSTRALES MARQUISES'
		];

		const level = ['BASKET ENTREPRISES',
			'COUPE DE FRANCE JOE JAUNAY 1/32',
			'COUPE DE FRANCE ROBERT BUSNEL 1/32',
			'COUPE DE FRANCE U17F 1/32',
			'COUPE DE FRANCE U17M 1/32',
			'COUPE DE FRANCE U20F 1/16',
			'EXCELLENCE FEMININE',
			'EXCELLENCE MASCULINE',
			'INTER-REGIONALE FEMININE U15',
			'INTER-REGIONALE MASCULINE U15',
			'LIGUE FEMININE 2',
			'LIGUE FEMININE DE BASKET',
			'NATIONALE FEMININE 1 U17',
			'NATIONALE FEMININE 1',
			'NATIONALE FEMININE 2 U17',
			'NATIONALE FEMININE 2',
			'NATIONALE FEMININE 3',
			'NATIONALE FEMININE U15 ELITE',
			'NATIONALE MASCULINE 1',
			'NATIONALE MASCULINE 2',
			'NATIONALE MASCULINE 3',
			'NATIONALE MASCULINE U15 ELITE',
			'NATIONALE MASCULINE U17',
			'NATIONALE MASCULINE U18',
			'NATIONALE MASCULINE U20',
			'PRE-NATIONALE Féminine',
			'PRE-NATIONALE MASCULINE',
			'PROA',
			'PROB',
			'TROPHEE COUPE DE FRANCE SENIORS FEMININES 1/128',
			'TROPHEE COUPE DE FRANCE SENIORS MASCULINS 1/128',
			'U13 Féminines Elite',
			'U13 Féminines',
			'U13 MASCULINS Elite',
			'U13 MASCULINS',
			'U15 Féminines 1ère Division',
			'U15 Féminines 1ère Phase',
			'U15 Féminines 2ème Division',
			'U15 Masculin 1ère Phase',
			'U15 MASCULINS 1ère Division',
			'U15 MASCULINS 2ème Division',
			'U17 Elite MASCULIN',
			'U17 Féminine 1ère Phase',
			'U17 Féminines 1ère Division',
			'U17 Féminines 2ème Division',
			'U17 MASCULIN 1ère Phase',
			'U17 MASCULINS Division 1',
			'U17 MASCULINS Division 2',
			'U20 Elite Masculins',
			'U20 Féminine 1ère Phase',
			'U20 Féminines 1ère Division',
			'U20 Féminines 2ème Division',
			'U20 Masculin 1ère Phase',
			'U20 Masculins Division 2'
		];

		const poule = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		];
		console.log('Begin adding groups');
		poule.map((cur) => {
			return Meteor.call('addAGroup', cur);
		});
		console.log('Ending adding groups');

		console.log('Begin adding level');
		level.map((cur) => {
			return Meteor.call('addALevel', cur);
		});
		console.log('Ending adding level');

		console.log('Begin adding departments');
		departments.map((cur) => {
			return Meteor.call('addADepartment', cur);
		});
		console.log('Ending adding departments');

		console.log('Begin adding regions');
		regions.map((cur) => {
			return Meteor.call('addARegion', cur);
		});
		console.log('Ending adding regions');
	}
});
