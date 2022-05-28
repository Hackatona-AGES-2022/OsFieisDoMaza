import { DivIcon, ImageIcon, TextIcon } from "./styles";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IconProps {
    src: any;

    txt: string;

    // eslint-disable-next-line react/require-default-props
    alt?: string;
}

function Icon({ src, txt, alt }: IconProps) {
    return (
        <DivIcon>
            <ImageIcon src={src} alt={alt} />

            <TextIcon>{txt}</TextIcon>
        </DivIcon>
    );
}

export default Icon;
