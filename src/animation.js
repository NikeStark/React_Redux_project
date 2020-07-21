import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

export const Bounce = styled.div`animation: 3s ${keyframes`${pulse}`} infinite; width:100px;`;