import styled from "styled-components";

import { ButtonProps } from ".";
import pixelToRem from "../../utils/pxToRem";

export const ButtonComponent = styled.button<ButtonProps>`
    background: white;

    width: ${({ fullWidth }) => (fullWidth ? "100%" : pixelToRem(200))};

    height: ${pixelToRem(60)};

    border: none;

    border-radius: 28px;

    color: var(--text);

    font: var(--text-3);

    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`;
