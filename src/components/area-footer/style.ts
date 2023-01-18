import styled from 'styled-components'

interface IStyle {
  color?: string
}
export const FooterWrapper = styled.div<IStyle>`
  display: flex;
  margin-top: 8px;

  .info {
    display: flex;
    align-items: center;
    padding: 4px 0;
    font-size: 17px;
    font-weight: 600;
    color: ${(props) => props.color};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`
