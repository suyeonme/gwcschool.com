import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 400;
`;

const ModalCloseBtn = ({ id, onClose, text }) => {
  return (
    <Wrapper>
      <Input type="checkbox" id={id} name={id} value={id} onChange={onClose} />
      <Label htmlFor={id}>{text}</Label>
    </Wrapper>
  );
};

export default ModalCloseBtn;
