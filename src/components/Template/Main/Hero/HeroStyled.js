import styled from "styled-components";

export const HeroStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)), url('https://zone-ui.vercel.app/assets/background/overlay-2.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 50px 190px;

    @media(max-width: 420px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 20px; 
    }

    .heroBox{
        display: flex;
        gap: 80px;
        padding: 80px 0;

        .heroLeftBox{
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            text-align: center;

            .gradientTextBox{
                font-weight: 800;
                margin-top: 16px;
                color: white;

                @media(max-width: 420px){
                    font-size: 40px;
                    text-align: center;
                }

                .gradientText{
                    background: linear-gradient(to right, #007bff, #ff9e6a);
                    -webkit-background-clip: text;
                    color: transparent;
                }
            }
            .heroDescription{
                color: #919EAB;
                font-weight: 600;
            }
            .heroFormBox{
                width: 480px;
                height: 54px;
                background-color: white;
                margin-top: 10px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding: 3px 5px;
        
                @media(max-width: 420px){
                    width: 350px;
                    height: auto;
                    flex-direction: column;
                }

                .searchIcon{
                    width: 40px;
                    color: gray;

                    @media(max-width: 420px){
                        display: none;
                    }
                }
                .autocomplete{
                    width: 190px;

                    .locationPlaceholder{
                        input{
                            outline: none;
                            border: none;
                        }
                    }
                }
                .searchIconButton{
                    width: 48px;
                    height: 48px;
                    border-radius: 10px;
                    margin-left: 2px;
                }
            }
            .heroSocialImgs{
                display: flex;
                align-items: center;
                gap: 45px;
                margin-top: 8px;
            }
            .viewsBox{
                display: flex;
                align-items: center;
                margin-top: 16px;

                .viewsDiv{
                    border-right: 1px dashed gray;
                    padding: 0 19px;
                }
                .noBorder{
                    padding: 0 19px ;
                }
                .viewsNum{
                    color: white;
                    font-weight: 600;
                }
                .viewsBy{
                    color: gray;
                }
            }
        }
    }

    .heroImg{
        width: 580px;
        object-fit: cover;

        @media(max-width: 420px){
            display: none;
        }
    }
`;