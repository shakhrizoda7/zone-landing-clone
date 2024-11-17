import styled from "styled-components";

export const HotcategoriesStyled = styled.div`
    width: 100%;
    padding: 120px 0 80px 0;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    .gridContainer{
        margin-top: 48px;
        gap: 32px;
        padding: 0 192px;

        .categoryCard{
            min-width: 258px;
            min-height: 258px;
            border: 1px solid rgba(145 158 171 / 0.2);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 16px;
            transition: 0.3s;
            
            &:hover{
                box-shadow: 0 25px 40px -12px rgb(0 0 0 / 0.10);
                cursor: pointer;
                transition: 0.3s;
            }
            &:active{
                transform: scale(0.9);
                transition: 0.3s;
            }

            .cardBox{
                width: 72px;
                height: 72px;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .img{
                    width: 40px;
                }
            }

            .title{
                font-weight: 600;
            }
            .jobNum{
                color: #919EAB;
            }
        }
    }
    
    .viewAllBtn{
        text-transform: none;
        border-radius: 8px;
        margin-top: 80px;
    }
`;