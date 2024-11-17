import styled from "styled-components";

export const PostjobStyled = styled.div`
    width: 100%;
    height: 640px;
    background: linear-gradient(to bottom, rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)), url('https://zone-ui.vercel.app/assets/background/overlay-2.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;

    .postJobTexts{
        width: 550px;
        color: white;
    }
    .category{
        color: #078DEE !important;
    }
    .postJobBtn{
        text-transform: none;
        margin-top: 40px;
    }
`;