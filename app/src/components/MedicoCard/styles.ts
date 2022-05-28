import styled from "styled-components";

export const BlankDiv = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 350px;
    height: 400px;
    margin-right: 30px;
    margin-bottom: 45px;
    background-color: #49cccc;
    border-radius: 13px;
`;

export const PrimaryColorDiv = styled.div`
    display: flex;
    align-self: center;
    justify-content: start;
    flex-direction: column;
    width: 97%;
    height: 97%;
    background-color: white;
    border-radius: 8px;
`;

export const ImgDiv = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    margin-top: 10px;
    width: 93%;
    height: 250px;

    & img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    justify-content: start;
    margin-left: 12px;
    width: 93%;
    height: 100%;
    margin-top: 10px;

    & span {
        color: black;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const TextDivSecond = styled.div`
    margin-top: 8px;

    & span {
        color: black;
        font-weight: normal;
        font-size: 16px;
    }
`;

export const GreenBar = styled.div`
    background-color: #aee1d3;
    width: 100%;
    height: 8px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    min-height: 8px;
`;
