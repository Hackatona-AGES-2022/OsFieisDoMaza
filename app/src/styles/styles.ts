import { motion } from "framer-motion";
import styled from "styled-components";

import pixelToRem from "../utils/pxToRem";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface GalleryFlexContainerProps {
    flex?: "row" | "column";
    width?: string;
    margin?: string;
    padding?: string;
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ImageGalleryProps {
    width?: number;
    height?: number;
    src: string;
    borderRadius?: number;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const Container = styled.div<GalleryFlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.flex};
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
`;

export const Header = styled.div`
    display: flex;
    padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image<GalleryFlexContainerProps>`
    width: ${pixelToRem(300)};
    height: ${pixelToRem(300)};
    background-image: url("/images/logo.png");
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pixelToRem(815)};
    padding-bottom: ${pixelToRem(103)};
`;

export const FirstTitle = styled.div`
    color: var(--sun);
    font: var(--text-4);
    text-transform: uppercase;
    letter-spacing: ${pixelToRem(5)};
`;

export const SecondTitle = styled.p`
    color: var(--text);
    font: var(--font-display);

    span {
        color: var(--mars);
    }
`;

export const Subtitle = styled.p`
    color: var(--gray-05);
    font: var(--font-heading-3);
    max-width: ${pixelToRem(728)};
`;

export const InkGuy = styled.image`
    width: ${pixelToRem(550)};
    height: ${pixelToRem(600)};
    position: absolute;
    background-image: url("/images/open-doodles-dancing_1.png");
    background-repeat: no-repeat;
    right: 0;
    margin-right: 20px;
    margin-top: 50px;
    top: ${pixelToRem(10)};

    @media (max-width: ${pixelToRem(1200)}) {
        display: none;
    }
`;

export const DivButton = styled.div`
    width: ${pixelToRem(264)};
    padding-top: ${pixelToRem(32)};
`;

export const SectionAbout = styled.div<GalleryFlexContainerProps>`
    display: flex;
    justify-content: center;
    background-color: white;
    flex-direction: ${(props) => props.flex};
`;

export const DivProblemSolution = styled(motion.div)<GalleryFlexContainerProps>`
    max-width: ${pixelToRem(603)};
`;

export const SecondSubTitle = styled.p`
    font: var(--font-heading-1);
    color: var(--text);
    padding-top: ${pixelToRem(14)};
`;

export const TextMars = styled.p`
    font: var(--text-1);
    color: var(--gray-05);
    padding-top: ${pixelToRem(26)};
`;

export const GalleryContent = styled.div<GalleryFlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.flex};
    margin: ${pixelToRem(150, 100, 157, 300)};
`;

export const DivLogo = styled(motion.div)<GalleryFlexContainerProps>`
    max-width: ${pixelToRem(350)};
    margin-right: ${pixelToRem(30)};
`;

export const ImageGallery = styled.img<ImageGalleryProps>`
    width: ${({ width }) => width && pixelToRem(width)};
    height: ${({ height }) => height && pixelToRem(height)};
    border-radius: ${({ borderRadius }) =>
        borderRadius && pixelToRem(borderRadius)};
    object-fit: ${({ objectFit }) => objectFit};
`;

export const ContainerAbout = styled.div<GalleryFlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.flex};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    width: ${(props) => props.width};
    margin-top: ${pixelToRem(180)};
    gap: ${pixelToRem(200)};
`;

export const TextLogo = styled.p`
    font: var(--font-heading-1);
    color: var(--text);
`;

export const TextSubscribe = styled(motion.p)`
    font: var(--text-3);
    color: var(--mars-light);
    cursor: pointer;
    padding-top: ${pixelToRem(20)};
`;

export const SectionForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
`;

export const SectionFooter = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivImageFish = styled(motion.div)`
    align-self: flex-end;
    padding-right: 3%;
    width: 30%;
    & img {
        width: 100%;
    }
`;

export const DivFooterBottom = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const DivSocial = styled.div`
    display: flex;
    gap: ${pixelToRem(20)};

    & img {
        width: ${pixelToRem(25)};
        height: ${pixelToRem(25)};
    }
`;

export const DivFooterMenu = styled.div`
    gap: ${pixelToRem(53)};

    & ul {
        display: flex;
        list-style: none;
        gap: ${pixelToRem(53)};
    }

    & a {
        color: var(--text);
        font: var(--text-3);
        text-decoration: none;
    }
`;
