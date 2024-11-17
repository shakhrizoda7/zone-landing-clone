import styled from "styled-components";

export const ExploreStyled = styled.div`
    width: 100%;
    height: 850px;
    padding: 120px 180px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 80px;

    .titleBox{
      align-items: center;
      text-align: center;
      
      .description{
        text-align: center;
      }
    }

    .gridContainer{
      gap: 24px;

      .gridItem{
        width: 357px;
        height: 212px;

        .gridCard{
          box-shadow: none;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .gridItemImg{
            width: 80px;
            height: 80px;
          }

          .gridCardTextsBox{
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            margin-top: 24px;

            .fontWeightText{
              font-weight: 700;
            }
            .fontColorText{
              color: #919EAB;
            }
          }
        }
      }
    }

    .uploadBtn{
      background-color: #1e293b;
      color: white;
      border-radius: 10px;
      text-transform: none;
    }
`;