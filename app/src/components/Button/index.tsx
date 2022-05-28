/* eslint-disable react/require-default-props */
import { ButtonComponent } from "./styles";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ButtonProps {
    text?: string;

    fullWidth?: boolean;

    onClick?: () => any;
}

function Button({ text, fullWidth, onClick }: ButtonProps) {
    return (
        <ButtonComponent onClick={onClick} fullWidth={fullWidth}>
            {text}
        </ButtonComponent>
    );
}

export default Button;
