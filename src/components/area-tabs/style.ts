import styled from 'styled-components'

export const TabsWrapper = styled.div`
  box-sizing: border-box;
  .tabs {
    position: relative;
    white-space: nowrap;
    padding: 8px 0 18px;
    transition: transform 500ms;
    .item {
      box-sizing: border-box;
      min-width: 120px;
      height: 48px;
      padding: 14px 16px;
      margin-right: 16px;
      border-radius: 3px;
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      border: 0.5px solid #d8d8d8;
      background-color: #fff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
      color: ${(props) => props.theme.text.primaryColor};
      ${(props) => props.theme.mixin.boxShadow};

      &:hover {
        background-color: #fff;
      }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        color: #fff;
        border: solid 0.5px #00848a;
        background-color: ${(props) => props.theme.color.secondaryColor};
      }
    }
  }
`
