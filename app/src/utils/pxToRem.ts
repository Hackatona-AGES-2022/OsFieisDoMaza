/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default function pixelToRem(...values: number[]) {
    return values

        .reduce((acc, current) => (acc += `${current / 16}rem `), "")

        .trim();
}
