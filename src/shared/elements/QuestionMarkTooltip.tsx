import styled from '@emotion/styled';
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material';

export const QuestionMarkTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 500,
    fontSize: '15px',
    border: '1px solid #dadde9',
  },
}));
