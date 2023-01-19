import styled from 'styled-components'

export const SectionV3Wrapper = styled.div`
  .plus-room-list {
    margin: 0 -8px;

    // 重置scrollView的top样式
    .control {
      top: 50%;
      background-color: rgba(255, 255, 255, 0.9);
      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }
      &.left {
        transform: translate(-35%, -50%);
      }
      &.right {
        transform: translate(35%, -50%);
      }
    }

    .item {
      display: flex;
    }
  }
`
