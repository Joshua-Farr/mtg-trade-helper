import styled from "styled-components";
import { formatNameForDisplay } from "../utils/formatNameForDisplay";

interface CardInfoProps {
  commanders: string | string[];
  index: number;
  listOfUrls: any[];
  loading: boolean;
}

const StyledTile = styled.div`
  border-radius: 15px;
  border: 1px solid white;
  padding: 1.5em 1.35em;
  background-color: #16324f;

  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  object-fit: contain;

  &:hover {
    cursor: pointer;
    // transform: scale(1.08);
    transform: scale(1.08);
    transition: 0.1s ease-in;
  }
`;

const StyledCommander = styled(StyledTile)`
  background-color: #343330;
`;

const ImageWrapper = styled.div`
  // border: 2px solid green;
`;

const StyledImage = styled.img`
  // max-height: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
  //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  height: 250px;
  pointer-events: none;
`;

const StyledCardName = styled.span`
  font-size: 1rem;
  margin-bottom: 1em;
`;

const CommanderWrapper = styled.div`
  display: flex;
  gap: 5px;
  // max-width: 250px;
  // border: 2px solid green;
`;

export const CommanderTile = (props: CardInfoProps) => {
  let commanderImages: any[] = [];

  if (Array.isArray(props.commanders)) {
    let imageUrl1 = "";
    let imageUrl2 = "";

    if (props.listOfUrls[props.index]) {
      imageUrl1 = props.listOfUrls[props.index][0] || "";
      imageUrl2 = props.listOfUrls[props.index][1] || "";
    }
    const imageUrls = [imageUrl1, imageUrl2];

    imageUrls.forEach((image) => {
      commanderImages.push(
        <StyledImage src={image} alt={`Commander Image ${image}`} />
      );
    });
  } else {
    if (props.commanders[props.index] === "Esika, God of the Tree") {
      commanderImages.push(
        <StyledImage
          src="https://cards.scryfall.io/large/front/f/6/f6cd7465-9dd0-473c-ac5e-dd9e2f22f5f6.jpg?1631050188"
          alt={`Commander Image Esika!`}
        />
      );
    } else {
      const imageUrl = props.listOfUrls[props.index];
      commanderImages.push(
        <StyledImage src={imageUrl} alt={`Commander Image ${imageUrl}`} />
      );
    }
  }

  return (
    <>
      {props.loading ? (
        <StyledTile>
          <StyledCardName>Loading Commander...</StyledCardName>
          <StyledImage
            src={"src/assets/cardback.jpg"}
            alt={`Commander is loading!`}
          />
        </StyledTile>
      ) : (
        <StyledTile>
          {typeof props.commanders === "string" ? (
            <StyledCardName>
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          ) : (
            <StyledCardName>
              {formatNameForDisplay(props.commanders)}
            </StyledCardName>
          )}
          <ImageWrapper>
            <CommanderWrapper>{commanderImages}</CommanderWrapper>
          </ImageWrapper>
        </StyledTile>
      )}
    </>
  );
};
