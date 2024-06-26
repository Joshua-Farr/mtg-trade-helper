import styled from "styled-components";

const Button = styled.button`
  background-color: #c69239;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 20px;

  &:hover {
    cursor: pointer;
    background-color: rgba(198, 146, 57, 0.655);
    transition: 0.33s ease-out;
  }
  @media only screen and (max-width: 750px) {
    padding: 0.25em 1em;
    font-size: 0.75rem;
    border-radius: 10px;
    margin-inline: 0.25em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 750px) {
    gap: 0px;
  }
`;

type ButtonProps = {
  toggle: () => void;
  newHand: () => void;
  newCommanders: () => void;
  loading: boolean;
};

export const ButtonBar = (props: ButtonProps) => {
  return (
    <Wrapper>
      <Button onClick={() => props.toggle()}>Change Commander</Button>
      <Button onClick={() => props.newCommanders()} disabled={props.loading}>
        Randomize Pod
      </Button>
      <Button
        onClick={() => {
          props.newHand();
        }}
        disabled={props.loading}
      >
        Draw New Hand
      </Button>
    </Wrapper>
  );
};
