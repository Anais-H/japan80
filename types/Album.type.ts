export type Single = {
    id: number,
    artistName: string, //type="single" id={s.id} title={s.title} imgSrc={"../assets/artists/" + s.imgSrc} releaseDate={s.releaseDate} artistName={data.artistNameRm} isLiked={s.isLiked}
    type: string,
    titleRm: string,
    titleJp: string,
    releaseDate: string,
    imgSrc: string,
    isLiked: boolean,
};

export type Album = {
    id: number,
    artistName: string,
    type: string,
    titleRm: string,
    titleJp: string,
    releaseDate: string,
    imgSrc: string,
    isLiked: boolean,
};