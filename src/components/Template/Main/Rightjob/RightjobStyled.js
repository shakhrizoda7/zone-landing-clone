import styled from "styled-components";

export const RightjobStyled = styled.div`
    width: 100%;
    height: 429px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9)), url('https://zone-ui.vercel.app/assets/images/career/newsletter.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;

    .titleBox{
        display: flex;
        align-items: center;

        .title{
            color: white;
        }
        .description{
            width: 500px;
            color: white;
            text-align: center;
        }
    }

    .emailForm{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 560px;
        height: 54px;
        background-color: white;
        padding: 0 0 0 20px;
        border-radius: 12px;

        input{
            flex: 1;
            border: none;
            outline: none;
            font-size: 15px;
            padding: 5px;
        }
        button{
            height: 100%;
            border-radius: 0 12px 12px 0;
        }
    }
`;