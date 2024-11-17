import styled from "styled-components";

export const GlobalStyled = styled.div`
    width: 100%;
    height: 787px;
    background-image: url('https://zone-ui.vercel.app/assets/illustrations/illustration-map.svg');
    background-repeat: no-repeat;
    background-position: -60px;
    padding: 120px 0 120px 160px;
    
    .globalBox{
        display: flex;
        gap: 80px;

        img{
            object-fit: cover;
        }

        .globalTitlesBox{
            width: 368px;

            .titleBox{
                align-items: start !important;
            }

            .viewAllBtn{
                margin-top: 40px;
                padding: 12px;
                background-color: #1A2027;
                color: white;
                text-transform: none;
                border-radius: 8px;
            }
        }

        .carouselBox{
            display: flex;
            align-items: center;
            flex: 1;
            height: 500px;
            gap: 32px;
            padding: 8px 0;
            margin-left: 120px;

            .carouselCard{
                display: flex;
                align-items: center;
                flex-direction: column;
                text-align: center;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                min-width: 280px;
                height: 450px;
                border: none;
                border-radius: 28px;

                .carouselImgBox{
                    height: 360px;
                    overflow: hidden;

                    .carouselImg{
                        width: 280px;
                        height: 360px;
                        transition: 0.3s;
            
                        &:hover{
                            transition: 0.3s;
                            transform: scale(1.1);
                        }
                    }
                }
                .carouselCardTexts{
                    margin-top: 8px;
                }
            }
        }
    }

    .scrollBtnBox{
        margin-left: 70%;
        margin-top: 16px;

        .scrollBtn{
            width: 15px;
            height: 15px;
            color: #1A2027;
            min-width: 40px;
        }
    }

`;