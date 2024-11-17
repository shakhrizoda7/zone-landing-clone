import styled from "styled-components";

export const FeaturedStyled = styled.div`
    width: 100%;
    padding: 80px 160px;

    .tilesBox{
        display: flex;
        justify-content: space-between;

        .category{
            font-weight: 700;
            color: #919EAB;
        }
        .title{
            font-weight: 800;
            width: 700px;
        }
    }

    .gridBox{
        margin-top: 96px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 80px;

        .gridContainer{
            gap: 50px;
            
            .gridItem{
                width: 362px;
                height: 324px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        
                &:hover{
                    cursor: pointer;
                    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                    transition: 0.3s;
                }

                .gridCard{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    .gridCardBox{
                        padding: 24px;

                        .imgCheckbox{
                            display: flex;
                            align-items: flex-start;
                            justify-content: space-between;

                            img{
                                width: 48px;
                                border-radius: 8px;
                            }

                        }

                        .cardTextDatas{

                            .jobTitle{
                                font-weight: 700;
                                &:hover{
                                    text-decoration: underline;
                                }
                            }
                            .names{
                                margin-top: 8px;
                            }
                            .location{
                                display: flex;
                                align-items: center;
                                margin-top: 8px;
                                color: #637381;
                            }
                        }

                    }
                }

                .jobTimeYearBox{
                    border-top: 1px dashed lightgray;
                    padding: 8px 24px 16px 24px;

                    .jobTimeYearBoxGridItem{
                        width: 151px;
                    }

                    .jobTimeYearBoxTexts{
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        margin-top: 8px;
                        color: #637381;
                    }
                }
            }
        }
    }

    .viewBtn{
        text-transform: none;
        border-radius: 8px;
    }
`;