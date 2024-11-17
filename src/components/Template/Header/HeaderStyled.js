import styled from "styled-components";

export const HeaderStyled = styled.div`
    .headerBox{
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;
        padding: 8px 184px;

        @media(max-width: 420px){
            padding: 5px 20px;
        }

        .logoText{
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

        .headerList{
            display: flex;
            gap: 16px;

            @media(max-width: 420px){
                display: none;
            }

            .listBtn{
                align-items: center;

                .navItem{
                    &:hover{
                        color: lightgray;
                    }
                }
            }
        }

        .btnIcons{
            display: flex;
            align-items: center;
            gap: 16px;

            .settingIcon{
                animation: settingSpin 5s linear infinite;
            }
            .purchaseBtn{
                background-color: #1C252E;
                font-size: 12px;
                border-radius: 8px;
                text-transform: none;

                @media(max-width: 420px){
                    display: none;
                }
            }
        }

    }

    @keyframes settingSpin {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
`;