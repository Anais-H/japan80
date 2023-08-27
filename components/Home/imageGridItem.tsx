import Link from "next/link";
import { ReactElement } from "react";
import styles from '../../styles/imageGridItem.module.scss';

type ImageGridItemProps = {
    link?: string,
    imageSrc: string,
    imageAlt: string,
    legend1: string,
    legend2: string,
    roundImage: boolean,
    description: ReactElement | string,
};

export default function ImageGridItem({ link, imageSrc, imageAlt, legend1, legend2, roundImage, description }: ImageGridItemProps) {

    return (
        <div className={"flex flex-start flex-row"}>
            <div className="flex-1 flex flex-col al-items-center wb-keep-all">
                {link ?
                    <Link href={link}><img className={(link ? "clickable " : "") + (roundImage === true ? "img-round" : "img-square")} src={imageSrc} alt={imageAlt} /></Link>
                    : <img className={(link ? "clickable " : "") + (roundImage === true ? "img-round" : "img-square")} src={imageSrc} alt={imageAlt} />}

                <div className="flex flex-col">
                    {link ?
                        <>
                            <Link className="tal-center bold" href={link}>{legend1}</Link>
                            <Link className="tal-center" href={link}>{legend2}</Link>
                        </>
                        :
                        <>
                            <span className={"tal-center bold link"}>{legend1}</span>
                            <span className={"tal-center"}>{legend2}</span>
                        </>
                    }

                </div>
            </div>

            <div className="flex-2">
                {description}
            </div>
        </div >
    )
}