/* eslint-disable react/require-default-props */
import { ButtonComponent } from "./styles";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ButtonProps {
    text?: string;

    fullWidth?: boolean;
}

function Button({ text, fullWidth }: ButtonProps) {
    return <ButtonComponent fullWidth={fullWidth}>{text}</ButtonComponent>;
}

export default Button;
