import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    border-bottom: 1px solid #eee;
    transition: all 250ms ease;
    background-color: ${(props) =>
      props.theme.isAlpha ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'};
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? 'rgba(238,238,238,0)' : 'rgba(238,238,238,1)'};

    .top::before {
      position: absolute;
      z-index: -1;
      content: '';
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
      transition: 150ms opacity ease;
      opacity: ${(props) => (props.theme.isAlpha ? '0.5' : '0')};
    }

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

type SearchAreaWrapperType = {
  isSearch?: boolean
}
export const SearchAreaWrapper = styled.div<SearchAreaWrapperType>`
  transition: height 250ms ease;
  height: ${(props) => (props.isSearch ? '100px' : '0')};
`
