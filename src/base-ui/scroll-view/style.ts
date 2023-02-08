import styled from 'styled-components'

export const ScrollViewWrapper = styled.div`
  position: relative;
  .control {
    position: absolute;
    top: 17px;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 6px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid transparent;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 14%) 0 1px 1px 1px;
    z-index: 9;

    &:hover {
      background-color: #fff;
    }
    &:active {
      border-color: #e2e2e2;
      box-shadow: none;
    }

    &.left {
      left: 0;
      transform: translate(-50%);
    }

    &.right {
      right: 0;
      transform: translate(50%);
    }
  }

  .cover {
    position: absolute;
    top: -4px;
    width: 36px;
    height: 72px;
    z-index: 9;

    &.cover-left {
      left: -4px;
      background: linear-gradient(
        90deg,
        rgb(255, 255, 255) 0%,
        rgb(255, 255, 255) 17%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &.cover-right {
      right: -4px;
      background: linear-gradient(
        270deg,
        rgb(255, 255, 255) 0%,
        rgb(255, 255, 255) 17%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .scroll-content {
    overflow-x: hidden;
  }
`
