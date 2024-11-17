import styled from "styled-components";

export const OurclientStyled = styled.div`
    width: 100%;
    height: 497px;
    padding: 80px 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 100px;

    .animationBigBox{
        display: flex;
        width: 1152px;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
    
        .animationBox{
            display: inline-flex;
            gap: 28px;
    
            &:hover{
                animation-play-state: paused;
                cursor: pointer;
            }
    
            .animationItem{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 168px;
                height: 81px;
                padding: 16px 8px;
                box-shadow: none;
                border-radius: 24px;
                border: 1px solid #F4F6F8;
                transition: 0.3s;
    
                &:hover{
                    transition: 0.3s;
                    background-color: #F4F6F8;
                    transform: scale(1.1);
                }
            }
        }
    }
`;