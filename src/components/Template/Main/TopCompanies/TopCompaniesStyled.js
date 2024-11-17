import styled from "styled-components";

export const TopcompaniesStyled = styled.div`
    width: 100%;
    background-color: #F4F6F8;
    padding: 120px 0 80px 0;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 60px;

    .companiesCardBox{
        display: flex;
        gap: 40px;
    }

    .companiesCard{
        width: 200px;
        height: 226px;
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 8px;
        padding: 40px 24px;
        border-radius: 16px;
        
        &:hover{
            transition: 0.3s;
            background-color: #fff;
            cursor: pointer;
        }
        img{
            width: 56px;
            border-radius: 8px;
        }
        .jobsNums{
            margin-top: 8px;
            color: #919EAB;
        }
    }
`;