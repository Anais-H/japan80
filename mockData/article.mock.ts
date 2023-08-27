import { Article, GroupArticle } from "../types/Article.type";

export const akinaNakamoriArticle: Article = {
    artistId: 1,
    artistNameRm: "Akina Nakamori",
    artistNameJp: "中森明菜",
    artistBirthday: "1965-07-13",
    birthCity: "Ôta",
    birthPrefecture: "Tôkyô",
    artistAvatar: "akina_nakamori/akina_nakamori_avatar.jpg",
    artistLongImage: "akina_nakamori/akina_nakamori_001.jpg",
    artistSquareImage: "akina_nakamori/akina_nakamori_002.jpg",

    isLiked: false,
    likes: 2000,
    bannerVideoFile: "akina_nakamori/akina_nakamori_banner_video",
    artistDescription1: "<p><b>Akina Nakamori</b> est une chanteuse et actrice japonaise.Elle naît le 13 juillet 1965 dans l'arrondissement d'Ôta à Tokyo et grandit à Kiyose.</p> "
        + "<p>Repérée à 16 ans lors de son passage dans l'émission Star Tanjô! sur la chaîne Nippon Television, elle signe un contrat avec Warner Pioneer. Son , Slow Motion, sort en 1982. La même année, le , Shôjo A devient son premier tube. En 1983, elle gagne en notoriété avec des tubes comme Second Love ou Kinku. Elle enchaîne ensuite les hits avec entre autres Kita Wing et Kazari ja nai no yo namida wa. Elle reçoit le Japan Record Award deux années de suite, pour Mi Amore en 1985 et DESIRE - Jônetsu en 1986. Elle partage l'affiche de plusieurs dramas, comme Sugao no mama de (1992) avec Narumi Yasuda ou Tsumetai tsuki aux côtés de Hiromi Tagasaku.</p>"
        + "<p>En 2010, elle annonce son retrait de la scène pour raisons de santé. 4 ans et 3 mois plus tard, elle apparaît en tant qu'invitée spéciale dans l'édition 2014 de l'émission musicale KÅhaku Uta Gassen, en direct d'un studio d'enregistrement à New York.</p>",

    artistDescription2: "<p><b>Akina</b> commence sa carrière au début des années 1980 au Japon. Elle enchaîne rapidement les succès grâce à une production discographique impressionnante, au rythme de 2 à 3 albums par an. Très vite, Nakamori Akina truste toutes les premières places au Japon, régnant de fait sur la J-Pop durant plus de six ans. En 1987, l'un de ses plus gros succès, l'album Desire, lui permet d’occuper le haut des hit parades japonais durant plusieurs semaines d'affilée.</p> "
        + "<p>En 1989, pourtant au sommet de sa gloire, Nakamori Akina fait une tentative de suicide à la suite de sa rupture avec le chanteur Masahiko KondÅ, et brise du coup sa trajectoire jusqu'à présent sans faute. S'ensuivent plusieurs années de difficultés où les albums beaucoup moins inspirés ne gagnent plus le haut des hit - parade japonais.</p> "
        + "<p>C'est finalement à la fin des années 1990 que Nakamori Akina retrouve un nouveau souffle avec la série des trois albums Uta Hime auxquels succèdent d'autres albums comme I Hope So en 2003. </p> "
        + "<p>En 2008, une tentative de chanson populaire de genre Enka ne donne pas les résultats escomptés.</p> "
        + "<p>Nakamori Akina se distingue des autres chanteuses japonaises par sa voix grave qui contraste beaucoup avec les productions habituelles des chanteuses japonaises.</p> "
        + "<p>Néanmoins, seul un public limité de fans a suivi Nakamori Akina dans sa nouvelle approche de la variété, plus tout à fait au goût de la jeunesse des années 2000.</p> "
        + "<p>Mais en octobre 2010, des problèmes de santé l'oblige à annuler brusquement ses spectacles de fin d'année, et à se retirer de la scène.Elle surprendra son public en apparaissant KÅhaku Uta Gassen le 31 décembre 2014, une première depuis 2002. Elle y a interprété Rojo - Tierra -, son premier single en plus de quatre ans, en direct d'un studio d'enregistrement aux États - Unis.Le single sortira le 21 janvier 2015 en version physique, suivi, une semaine plus tard, d'un nouveau cover album Utahime 4 -My Eggs Benedict-. Un nouveau single, unfixable, sortira le 30 septembre de la même année, suivi d'un nouvel album original, FIXER, le 30 décembre 2015, le premier en plus de 6 ans. 2016 aura été l'année de son retour sur scène, avec une série de plusieurs Dinner Shows à travers le Japon au mois de décembre, quelques jours après la sortie d'un nouveau cover album intitulé Belie sorti fin novembre.</p>",

    artistDescription3: "",

    facts: [
        {
            id: 123,
            content: "Le mangaka Izumi Matsumoto s'est inspiré de la chanson de Akina Shôjo A sur la frustration sexuelle d'une jeune fille rebelle pour créer le personnage culte de Madoka (Sabrina) dans son manga Kimagure Orange Road (anime Max et Compagnie).",
            source: "https://www.google.fr"
        },
    ],

    albums: [
        {
            id: 1,
            titleRm: "Prologue",
            titleJp: "プロローグ",
            artistName: "Akina Nakamori",
            releaseDate: "1982-07-01",
            type: "album",
            imgSrc: "akina_nakamori/albums/prologue.jpg",
            isLiked: true,
        },
        {
            id: 2,
            titleRm: "Variation",
            titleJp: "バリエーション",
            artistName: "Akina Nakamori",
            releaseDate: "1982-10-27",
            type: "album",
            imgSrc: "akina_nakamori/albums/variation.jpg",
            isLiked: true,
        },
    ],

    singles: [
        {
            id: 1,
            titleRm: "Shôjo A",
            titleJp: "少女A",
            artistName: "Akina Nakamori",
            releaseDate: "1982-07-28",
            type: "single",
            imgSrc: "akina_nakamori/singles/shoujo_a.jpg",
            isLiked: true,
        },
        {
            id: 2,
            titleRm: "Second Love",
            titleJp: "セカンド・ラブ",
            artistName: "Akina Nakamori",
            releaseDate: "1982-11-10",
            type: "single",
            imgSrc: "akina_nakamori/singles/second_love.jpg",
            isLiked: false,
        },
    ]
};

export const anzenChitaiArticle: GroupArticle = {
    artistId: 2,
    artistNameRm: "Anzen Chitai",
    artistNameJp: "安全地帯",
    artistAvatar: "anzen_chitai/anzen_chitai_avatar.jpg",
    artistLongImage: "anzen_chitai/anzen_chitai_001.png",
    artistSquareImage: "anzen_chitai/anzen_chitai_002.jpg",

    isLiked: false,
    likes: 2000,
    bannerVideoFile: "anzen_chitai/anzen_chitai_banner_video",
    artistDescription1: "<p><b>Akina Nakamori</b> est une chanteuse et actrice japonaise.Elle naît le 13 juillet 1965 dans l'arrondissement d'Ôta à Tokyo et grandit à Kiyose.</p> "
        + "<p>Repérée à 16 ans lors de son passage dans l'émission Star Tanjô! sur la chaîne Nippon Television, elle signe un contrat avec Warner Pioneer. Son , Slow Motion, sort en 1982. La même année, le , Shôjo A devient son premier tube. En 1983, elle gagne en notoriété avec des tubes comme Second Love ou Kinku. Elle enchaîne ensuite les hits avec entre autres Kita Wing et Kazari ja nai no yo namida wa. Elle reçoit le Japan Record Award deux années de suite, pour Mi Amore en 1985 et DESIRE - Jônetsu en 1986. Elle partage l'affiche de plusieurs dramas, comme Sugao no mama de (1992) avec Narumi Yasuda ou Tsumetai tsuki aux côtés de Hiromi Tagasaku.</p>"
        + "<p>En 2010, elle annonce son retrait de la scène pour raisons de santé. 4 ans et 3 mois plus tard, elle apparaît en tant qu'invitée spéciale dans l'édition 2014 de l'émission musicale KÅhaku Uta Gassen, en direct d'un studio d'enregistrement à New York.</p>",

    artistDescription2: "<p><b>Akina</b> commence sa carrière au début des années 1980 au Japon. Elle enchaîne rapidement les succès grâce à une production discographique impressionnante, au rythme de 2 à 3 albums par an. Très vite, Nakamori Akina truste toutes les premières places au Japon, régnant de fait sur la J-Pop durant plus de six ans. En 1987, l'un de ses plus gros succès, l'album Desire, lui permet d’occuper le haut des hit parades japonais durant plusieurs semaines d'affilée.</p> "
        + "<p>En 1989, pourtant au sommet de sa gloire, Nakamori Akina fait une tentative de suicide à la suite de sa rupture avec le chanteur Masahiko KondÅ, et brise du coup sa trajectoire jusqu'à présent sans faute. S'ensuivent plusieurs années de difficultés où les albums beaucoup moins inspirés ne gagnent plus le haut des hit - parade japonais.</p> "
        + "<p>C'est finalement à la fin des années 1990 que Nakamori Akina retrouve un nouveau souffle avec la série des trois albums Uta Hime auxquels succèdent d'autres albums comme I Hope So en 2003. </p> "
        + "<p>En 2008, une tentative de chanson populaire de genre Enka ne donne pas les résultats escomptés.</p> "
        + "<p>Nakamori Akina se distingue des autres chanteuses japonaises par sa voix grave qui contraste beaucoup avec les productions habituelles des chanteuses japonaises.</p> "
        + "<p>Néanmoins, seul un public limité de fans a suivi Nakamori Akina dans sa nouvelle approche de la variété, plus tout à fait au goût de la jeunesse des années 2000.</p> "
        + "<p>Mais en octobre 2010, des problèmes de santé l'oblige à annuler brusquement ses spectacles de fin d'année, et à se retirer de la scène.Elle surprendra son public en apparaissant KÅhaku Uta Gassen le 31 décembre 2014, une première depuis 2002. Elle y a interprété Rojo - Tierra -, son premier single en plus de quatre ans, en direct d'un studio d'enregistrement aux États - Unis.Le single sortira le 21 janvier 2015 en version physique, suivi, une semaine plus tard, d'un nouveau cover album Utahime 4 -My Eggs Benedict-. Un nouveau single, unfixable, sortira le 30 septembre de la même année, suivi d'un nouvel album original, FIXER, le 30 décembre 2015, le premier en plus de 6 ans. 2016 aura été l'année de son retour sur scène, avec une série de plusieurs Dinner Shows à travers le Japon au mois de décembre, quelques jours après la sortie d'un nouveau cover album intitulé Belie sorti fin novembre.</p>",

    artistDescription3: "",

    facts: [
        {
            id: 123,
            content: "Le mangaka Izumi Matsumoto s'est inspiré de la chanson de Akina Shôjo A sur la frustration sexuelle d'une jeune fille rebelle pour créer le personnage culte de Madoka (Sabrina) dans son manga Kimagure Orange Road (anime Max et Compagnie).",
            source: "https://www.google.fr"
        },
    ],

    albums: [
        {
            id: 1,
            titleRm: "Prologue",
            titleJp: "プロローグ",
            artistName: "Anzen Chitai",
            releaseDate: "1982-07-01",
            type: "album",
            imgSrc: "akina_nakamori/albums/prologue.jpg",
            isLiked: true,
        },
        {
            id: 2,
            titleRm: "Variation",
            titleJp: "バリエーション",
            artistName: "Anzen Chitai",
            releaseDate: "1982-10-27",
            type: "album",
            imgSrc: "akina_nakamori/albums/variation.jpg",
            isLiked: true,
        },
    ],

    singles: [
        {
            id: 1,
            titleRm: "Shôjo A",
            titleJp: "少女A",
            artistName: "Akina Nakamori",
            releaseDate: "1982-07-28",
            type: "single",
            imgSrc: "akina_nakamori/singles/shoujo_a.jpg",
            isLiked: true,
        },
        {
            id: 2,
            titleRm: "Second Love",
            titleJp: "セカンド・ラブ",
            artistName: "Anzen Chitai",
            releaseDate: "1982-11-10",
            type: "single",
            imgSrc: "akina_nakamori/singles/second_love.jpg",
            isLiked: false,
        },
    ]
};