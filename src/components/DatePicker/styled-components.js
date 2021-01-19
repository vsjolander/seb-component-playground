import styled, {keyframes} from 'styled-components';

const ModalEnterAnimation = keyframes`
  0% {
    transform: translateY(5%);
    opacity: 0;
  }
`;

export const DatePickerModalContainer = styled.div`
  border-radius: 0.25em;
  border: 1px solid #0092e1;
  overflow: hidden;
  min-width: 18.75em;
  position: absolute;
  box-shadow: 0 2px 6px 0px rgba(0,0,0,.15);
  background-color: #ffffff;
  z-index: 1001;

  @media (max-width: 767px) {
    min-width: 100%;
    border-width: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    animation: ${ModalEnterAnimation} .15s ease-in-out;
  }
`;

export const DatePickerModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey[200]};

  @media (min-width: 576px) {
    display: none;
  }
`;

export const DatePickerModalFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.grey[200]};
`;

export const DatePickerModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  height: calc(100% - 6.5rem);
`;

export const FlatButton = styled.button`
  border: none;
  background: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateButtonWrapper = styled(FlatButton)`
  padding-bottom: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: ${props => {
    if(props.adjecentMonth) return 400;
    return 500
  }};
  color: ${props => {
    if(props.disabled) return '#B3B3B3'
    if(props.active) return '#FFFFFF'
    return '#444444'
  }};
  background: ${props => {
    if(props.adjecentMonth ) return props.theme.colors.grey[100]
    if(props.active) return props.theme.colors.darkblue1
    return '#FFFFFF';
  }};
`

export const DateButtonContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DatepickerCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 1rem;
  
  @media (min-width: 576px) {
    padding: 0 .25rem;
  }
;`

export const WeekdayContainer = styled.div`
  text-align: center;
  font-size: .75rem;
  padding: .5rem 0;
`


export const DatePickerMonthLabel = styled.div`
  background: ${(props) => props.theme.colors.grey[200]};
  padding: .5rem 1rem;
  font-size: .75rem;
  margin-bottom: .25rem;

  @media (min-width: 576px) {
    display: none;
  }
`

export const DatePickerOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    transition: opacity .4s cubic-bezier(.25,.8,.25,1);
    opacity: 0;
`