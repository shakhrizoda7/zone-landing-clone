import styled from "styled-components";

export const NewsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 80px 180px;
    
    .cardsBox{
        display: flex;
        align-items: flex-start;
        gap: 30px;
        
        .title{
            height: 50px;
            overflow: hidden;
            display: -webkit-box; 
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 600;
            margin-top: 10px;
    
            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .leftCard{
            width: 560px;
            height: 746px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            text-align: start;
            background: linear-gradient(to top, rgb(0, 0, 0, 1), rgb(0, 0, 0, 0.1)), url('https://zone-ui.vercel.app/assets/images/career/career-1.webp');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 16px;
            padding: 47% 40px 40px 40px;

            .leftCardTitle{
                margin: 0 !important;
                height: auto !important;
            }
    
            .description{
                width: 480px;
                height: 48px;
                overflow: hidden;
                display: -webkit-box; 
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                color: white;
                opacity: 0.48;
            }
        }

        .rightCard{
            width: 560px;
            gap: 30px;

            img{
                border-radius: 15px;
            }

            .imgOverlayBig{
                width: 264px;
                height: 362px;

                img{
                    width: 100%;
                    height: 264px;
                }
            }

            .imgOverlaySmall{
                width: 264px;
                height: 296px;

                img{
                    width: 100%;
                    height: 198px;
                }
            }            
        }
    }
`;