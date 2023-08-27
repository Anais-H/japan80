import { Artist } from "../types/Artist.type";
import { Survey } from "../types/Survey.type";
import { SurveyType } from "../utils/constants";

export const theArtist: Artist = {
    id: 1,
    slug: "akina_nakamori",
    imgSrc: "akina_nakamori/akina_nakamori_avatar.jpg",
    imgAlt: "Akina Nakamori",
    legend1: "Akina Nakamori",
    legend2: "中森明菜",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam malesuada turpis tortor, non varius tellus dapibus vel.Vivamus finibus lacinia tortor, a volutpat felis luctus sit amet. "
        + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export const theAlbum = {
    imgSrc: "Omega Tribe - Aqua City.jpg",
    imgAlt: "Omega Tribe's Aqua City Album cover",
    legend1: "Omega Tribe",
    legend2: "Aqua City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam malesuada turpis tortor, non varius tellus dapibus vel.Vivamus finibus lacinia tortor, a volutpat felis luctus sit amet. "
        + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export const theSurvey: Survey = {
    id: 3,
    type: SurveyType.SINGLE_CHOICE,
    question: "Hey, how are you doing ?",
    options: [{ label: "Very good", nb_votes: 0 }, { label: "Fine", nb_votes: 0 }, { label: "So so", nb_votes: 0 }, { label: "I've been better", nb_votes: 0 }],
    created_by: {
        username: "Hai-Lyn",
        profile_picture: "Hai-Lyn/profilePicture/Hai-Lyn_001.png",
    },
    created_at: "2022-04-12T12:30:06",
    start_at: "2022-05-0T00:00:00",
    duration: 30,
};

export const theSurveyResults: Survey[] = [
    {
        id: 2,
        type: SurveyType.SINGLE_CHOICE,
        question: "What music style do you listen to the most ?",
        options: [{ label: "Funk / Soul", nb_votes: 10 }, { label: "Rock", nb_votes: 3 }, { label: "Pop", nb_votes: 5 }, { label: "Fusion", nb_votes: 7 }],
        created_by: { username: "Mei-Yin", profile_picture: "Mei-Yin/profilePicture/Mei-Yin_001.jpg" },
        created_at: "2022-03-15T22:05:08",
        start_at: "2022-04-01T00:00:00",
        duration: 30,
    },
    {
        id: 1,
        type: SurveyType.SINGLE_CHOICE,
        question: "How old are you ?",
        options: [{ label: "0 - 9", nb_votes: 1 }, { label: "10 - 19", nb_votes: 54 }, { label: "20 - 29", nb_votes: 76 }, { label: "30 - 39", nb_votes: 21 },
        { label: "40 - 49", nb_votes: 21 }, { label: "50 - 59", nb_votes: 21 }, { label: "60+", nb_votes: 2 }],
        created_by: { username: "CityPopNumber1Fan", profile_picture: "CityPopNumber1Fan/profilePicture/CityPopNumber1Fan_001.jpg" },
        created_at: "2022-01-1T06:52:11",
        start_at: "2022-03-01T00:00:00",
        duration: 30,
    },
];

export const theAnime = {
    slug: "city-hunter",
    legend1: "City Hunter",
    legend2: "シティー ハンター",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam malesuada turpis tortor, non varius tellus dapibus vel.Vivamus finibus lacinia tortor, a volutpat felis luctus sit amet. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "city_hunter.jpg",
    imgAlt: "City Hunter",
};

export const flashNews = [
    {
        id: "1",
        title: "Junichi Inagaki releases a new album in collab with Tetsuji Hayashi",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "18 avril 2022",
    },
    {
        id: "2",
        title: "Akina chan no birthday desu yo !",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "13 juillet 2021",
    },
    {
        id: "3",
        title: "Et un autre titre...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "18 avril 2022",
    },
    {
        id: "4",
        title: "Omega Tribe is making their come back !",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "18 avril 2022",
    },
];


export const theContributors = [
    {
        username: "Hai-Lyn",
        profile_picture: "Hai-Lyn/profilePicture/Hai-Lyn_001.png",
    },
    {
        username: "CityPopNumber1Fan",
        profile_picture: "CityPopNumber1Fan/profilePicture/CityPopNumber1Fan_001.jpg",
    },
    {
        username: "Joey987KK",
        profile_picture: "Joey987KK/profilePicture/Joey987KK_001.webp",
    },
    {
        username: "Mei-Yin",
        profile_picture: "Mei-Yin/profilePicture/Mei-Yin_001.jpg",
    },
];


export const eventsOfTheDay = {
    debuteAnniversaries: [
        { slug: "i_re_in_for_re_in", text: "I re'in for re'in" },
        { slug: "akina_nakamori", text: "Akina Nakamori" },
    ],
    birthdays: [
        { slug: "nina_atsuko", text: "Nina Atsuko" },
        { slug: "junko_ohashi", text: "Junko Ohashi" },
    ],
};