import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    background-color: #60616f;
    height: 100px;
    margin-top: 30px;
    margin-left: 10px;
    padding: 10px;
    margin-bottom: 20px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`;

export const FloatChild = styled.div`
    width: 30%;
    float: left;
    padding: 20px;
    border-right: 2px solid #49cccc;
`;

export const DoctorName = styled.p`
    color: white;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonCall = styled.div`
    display: flex;
    border-radius: 5px;
    background-color: #49cccc;
    width: 120px;
    height: 35px;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    cursor: pointer;
`;

export const ButtonErase = styled.div`
    display: flex;
    border-radius: 5px;
    background-color: red;
    width: 60px;
    height: 35px;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    color: white;
    cursor: pointer;
`;
