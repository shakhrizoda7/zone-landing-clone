import styled from "styled-components";

export const CustomersayStyled = styled.div`
    width: 100%;
    height: 88vh;
    background-color: #F4F6F8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    .carouselBox{
        display: flex;
        width: 560px;
        height: 235px;
        overflow-x: scroll;
        text-align: center;

        .carouselCard{
            display: flex;
            flex-direction: column;
            background-color: transparent;
            box-shadow: none;
            border: none;
            min-width: 560px;

            .raiting{
                img{
                    width: 120px;
                }
            }
            .carouselSaysText{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 8px;
                margin-top: 16px;

                .says{
                    font-size: 20px;
                }
                .customerName{
                    font-weight: 600;
                    margin-top: 16px;
                }
                .category{
                    font-weight: 600;
                    color: #919EAB;
                    text-transform: none;
                }
            }
        }
    }

    .scrollBtnBox{
        margin-top: 40px;

        .scrollBtn{
            width: 15px;
            height: 15px;
            color: #1A2027;
            min-width: 40px;
        }
    }

`;