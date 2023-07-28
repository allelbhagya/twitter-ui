import styled from 'styled-components';
import Button from '../Button'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
> span {
    color: var(--gray);

    margin-bottom: 3px;
}
`;
export const  FollowButton = styled(Button)`
padding: 6px 12px;
`;