import styled from 'styled-components'

export const PicturesWrapper = styled.div`
  position: absolute;
  top: 80px;

  > .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.08);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    min-width: 48px;
    width: auto;
    padding: 6px 15px;
    font-size: 14px;
    font-weight: 800;
    line-height: 22px;
    border-radius: 4px;
    border: 1px solid transparent;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background: rgb(255, 255, 255);
      border-color: transparent;
      color: rgb(72, 72, 72);
    }
    &:focus {
      box-shadow: rgb(0 0 0 / 50%) 0 0 0 1px, rgb(255 255 255 / 70%) 0 0 0 5px;
      outline: none;
      transition: box-shadow 0.2s ease 0s;
    }
    &:active {
      background: rgb(226, 226, 226);
      border-color: transparent;
      color: rgb(72, 72, 72);
    }
  }
`
