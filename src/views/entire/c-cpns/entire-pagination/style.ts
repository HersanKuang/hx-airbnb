import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page {
      margin: 0 9px;
      font-size: 14px;
      font-weight: 600;
    }
    .MuiPaginationItem-icon {
      margin: 0 2px;
      font-size: 28px;
      opacity: 0.7;
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
      cursor: default;
    }
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover {
      text-decoration: underline;

      &:hover.MuiPaginationItem-page.Mui-selected {
        text-decoration: none;
      }
    }

    .desc {
      margin: 16px 0 32px 0;
    }

    .other {
      color: #717171;
    }
  }
`
