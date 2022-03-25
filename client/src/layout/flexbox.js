import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const VFlex = styled(Flex)`
  flex-direction: column;
`;

export const Center = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const VCenter = styled(VFlex)`
  justify-content: center;
  align-items: center;
`;

export const RightAlign = styled(Flex)`
  justify-content: flex-end;
`;
