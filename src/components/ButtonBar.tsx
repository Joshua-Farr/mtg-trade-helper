import styled from "styled-components";

const Button = styled.button`
  background-color: #c69239;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 20px;

  &:hover {
    cursor: pointer;
    background-color: #816026;
    transition: 0.33s ease-out;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

type ButtonProps = {
  toggle: () => void;
};

export const ButtonBar = (props: ButtonProps) => {
  return (
    <Wrapper>
      <Button onClick={() => props.toggle()}>Change Commander</Button>
      <Button>Randomize Pod</Button>
      <Button>Randomize Hand</Button>
    </Wrapper>
  );
};
