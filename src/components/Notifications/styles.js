import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  border: 0;
  background: none;
  position: relative;

  ${props => props.hasUnread && css`
    &::after {
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
      content: '';
      position: absolute;
      border-radius: 50%;
      background: #ff892e;
    }
  `}
`;

export const NotificationList = styled.div`
  width: 260px;
  padding: 15px 5px;
  position: absolute;
  border-radius: 4px;
  top: calc(100% + 30px);
  left: calc(50% - 130px);
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    width: 0;
    height: 0;
    top: -20px;
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    opacity: 0.6;
    font-size: 12px;
  }

  button {
    border: 0;
    margin: 0 5px;
    padding: 0 5px;
    font-size: 12px;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props => props.unread && css`
    &::after {
      width: 7px;
      height: 7px;
      content: '';
      margin-left: 5px;
      border-radius: 50%;
      background: #ff892e;
      display: inline-block;
    }
  `}
`;
