import styled, {keyframes} from 'styled-components';

const ModalEnterAnimation = keyframes`
  0% {
    transform: translateY(5%);
    opacity: 0;
  }
`;

export const DatePickerModalContainer = styled.div`
  border-radius: 0.25em;
  min-width: 18.75em;
  width: 300px;
  position: absolute;
  box-shadow: 0 2px 6px 0px rgba(0,0,0,.15);
  background-color: #ffffff;
  z-index: 1001;
  top: ${props => props.modalPosition && props.modalPosition.y}px;
  left: ${props => props.modalPosition && props.modalPosition.x}px;

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

  .sdv-datepicker__controls {
    align-items: center;
  }

  .custom-dropdown {
    margin: 0;
    height: 24px;
  }

  .custom-dropdown>.custom-dropdown-toggle {
    border-color: transparent;
    font-size: 0.875rem;
    height: 24px;
  }

  .custom-dropdown>.custom-dropdown-toggle>.right-items>.dropdown-icon-holder {
    height: 24px;
    width: 24px;
  }

  .custom-dropdown>.custom-dropdown-toggle>.title {
    font-weight: 500;
  }

  .custom-dropdown>.custom-dropdown-toggle>.right-items>.dropdown-icon-holder>svg {
    fill: #000000;
    width: 12px;
    height: 12px;
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
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${props => props.theme.colors.darkblue2};
    outline: none;
    box-shadow: 0 0 4px 1px ${props => props.theme.colors.blue};
    z-index: 1;
  }
`;

export const DateButtonPlaceholder = styled.div`
  padding-bottom: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

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
    if(props.adjecentMonth) return props.theme.colors.grey[800];
    if(props.disabled) return '#B3B3B3';
    if(props.active) return '#FFFFFF';
    return '#444444'
  }};
  background: ${props => {
    if(props.disabled ) return props.theme.colors.grey[100]
    if(props.active) return '#000000'
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
  font-size: 0.875rem;
  font-weight: 500;
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
  font-size: 0.875rem;
  font-weight: 500;
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

export const DatePickerFooterButton = styled.button`
  background: #fff;
`;