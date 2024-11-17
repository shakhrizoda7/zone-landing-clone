import styled from "styled-components";

export const DownloadStyled = styled.div`
    width: 100%;
    height: auto;
    padding: 80px 180px;
    display: flex;
    justify-content: space-between;

    .qrLeftSec{
        .qrBox{
            width: 490px;
            text-align: center;
    
            .description{
                color: black;
            }
        }
    
        .qrCard{
            width: 466px;
            margin-top: 40px;
            padding: 40px;
            border: 1px solid lightgray;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
    
            .qrCardBox{
                display: flex;
                align-items: center;
                gap: 30px;
            }
    
            .downloadSocials{
                display: flex;
                align-items: center;
                gap: 15px;
                border-top: 1px dashed lightgray;
                padding-top: 30px;
    
                img{
                    width: 154px;
                    object-fit: cover;
                    cursor: pointer;
                    transition: 0.3s;
    
                    &:active{
                        transition: 0.3s;
                        transform: scale(0.9);
                    }
                }
            }
        }
    }

    .downloadImg{
        img{
            width: 560px;
            height: 608px;
        }
    }
`;