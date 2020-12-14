import React, {useState} from 'react';
import styled from 'styled-components';

const SlideToggleWrapper = styled.div`
  border: 0.0625rem solid #cecece;
  border-radius: 0.25rem;
  outline: none;
  box-sizing: border-box;
  min-height: 2.75rem;
  line-height: 1.5;
  font-size: 1rem;
  font-family: "SEBSansSerif", Arial, sans-serif;
  display: inline-block;
  border-color: transparent;
  height: auto;
  position: relative;
  padding-left: 2.75rem;
  min-height: 2rem;
  
  &, & > * {
    cursor: pointer;
  }

  &:hover input {
    & + label::after {
      left: ${props => props.isOn ? '1.125' : '.375'}rem;
    }

    & + label::before {
      background-color: ${props => props.isOn ? props.theme.colors.darkgreen2 : props.theme.colors.grey[500]};
    }
  }
`
const SlideToggleSwitch = styled.input`
  -webkit-appearance: none;
  appearance: none;
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:focus + label:before {
    box-shadow: 0px 0px 4px 1px ${props => props.theme.colors.blue};
    border: 1px solid ${props => props.theme.colors.darkblue2};
  }
`;

const SlideToggleLabel = styled.label`
  display: inline-block;
  border-radius: 0.25rem;
  position: relative;
  min-height: 2rem;
  padding-left: 0.5rem;
  position: initial;
  line-height: 2rem;

  &::before {
    background-color: ${props => props.isOn ? props.theme.colors.darkgreen1 : props.theme.colors.grey[400]};
    display: block;
    content: '';
    margin: 0 0.5rem -0.125rem 0;
    position: absolute;
    visibility: visible;
    outline: none;
    font-size: 1rem;
    border: 0.0625rem solid #adadad;
    transition: 250ms;
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 1.25rem;
    top: 0.625rem;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: none;
    height: 1.5rem;
    width: 2.75rem;
  }

  &:after {
    background-color: #fff;
    border-radius: 50%;
    border: 0.1875rem solid #fff;
    bottom: 0;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15), 0px 1px 0px 0px rgba(0, 0, 0, 0.06);
    content: '';
    display: block;
    height: 1.25rem;
    left: ${props => props.isOn ? '1.375' : '0.125'}rem;
    margin: auto;
    position: absolute;
    top: 0;
    transition: 150ms ease-in-out;
    width: 1.25rem;
  }

`;

const SlideToggle = ({initialState = false, ariaLabel = '', key=''}) => {

  const [isOn, setIsOn] = useState(initialState);
  
  const toggleIsOn = () => {
    setIsOn(state => !state);
  }

  return (
    <SlideToggleWrapper isOn={isOn} key={key} onClick={(e) => {
      e.preventDefault();
      toggleIsOn()
    }} >
      <SlideToggleSwitch isOn={isOn} type="checkbox" aria-label={ariaLabel} />
      <SlideToggleLabel isOn={isOn} className="custom-control-label form-check-label">{isOn ? 'On' : 'Off'}</SlideToggleLabel> 
    </SlideToggleWrapper>
  )
}

const ViewSlideToggle = () => (
    <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5">Slide Toggle</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>
                  Default
                </h3>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <SlideToggle />
                  </div>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
)

export default ViewSlideToggle;