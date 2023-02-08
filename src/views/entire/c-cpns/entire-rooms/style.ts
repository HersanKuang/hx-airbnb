import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  position: relative;
  margin: 168px 24px 0;

  .title {
    padding-bottom: 8px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 24px -8px 0;
  }

  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
