import styled from "styled-components";

export const FooterStyled = styled.div`
    width: 100%;
    
    .footerTopSec{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 80px 180px;
        
        .footerTopLeftBox{
            width: 368px;
            display: flex;
            align-items: start;
            flex-direction: column;
            gap: 40px;

            .footerLogo{
                display: flex;
                gap: 4px;
                align-items: flex-end;
                margin: 16px 0;
                font-weight: bold;

                .logoPoint{
                    width: 8px;
                    height: 8px;
                    background-color: #1976d2;
                    border-radius: 100%;
                    margin-bottom: 8px;
                }
            }
            
            .zoneTitle{
                color: #637381;
            }

            .footerEmailForm{
                display: flex;
                flex-direction: column;
                gap: 10px;

                .emailForm{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 368px;
                    height: 54px;
                    background-color: #F4F6F8;
                    padding: 5px 5px 5px  20px;
                    border-radius: 12px;
    
                    input{
                        flex: 1;
                        border: none;
                        outline: none;
                        font-size: 15px;
                        padding: 5px;
                        background-color: transparent;
                    }
                    button{
                        width: 104px;
                        height: 100%;
                        border-radius: 8px;
                        background-color: #1C252E;
                        text-transform: none;
                    }
                }
            }

            .footerBtn{
                display: flex;
                align-items: center;
                gap: 8px;

                button{
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            .downloadImg{
                display: flex;
                align-items: center;
                margin-top: 20px;

                img{
                    width: 154px;
                }
            }
        }

        .footerTopRightBox{
            padding-top: 30px;
            
            .gridBox{
                display: flex;
                gap: 50px;
    
                .listGrid{
                    width: auto !important;
                    row-gap: 10px;
                    
                    .list{
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
        
                        li{
                            padding: 0;
                            color: #637381;
        
                            &:hover{
                                cursor: pointer;
                                text-decoration: underline;
                            }
                        }
                    }
                }
                .listGridfullWidth{
                    display: flex;
                    gap: 50px;
                }
            }
        }
    }

    .footerBottomSec{
        width: 100%;
        height: 66px;
        padding: 24px 183px;
        color: #637381;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .footerBottomBox{
            display: flex;
            align-items: center;
            gap: 10px;

            .MuiTypography-root {
                &:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
`;