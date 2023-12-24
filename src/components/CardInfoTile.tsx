import styled from "styled-components";

import { getCardImage } from "../utils/magicAPI";
import { useEffect, useState } from "react";

interface CardInfoProps {
  name: string | string[];
}

const StyledTile = styled.div`
  border-radius: 15px;
  border: 1px solid white;
  padding: 1.5em 1.35em;
  background-color: #16324f;
  // background-color: rgba(198, 146, 57, 0.2); <-- for when the tile is the chosen commander

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
    transform: scale(1.45);
    transition: 0.1s ease-in;
  }
`;

// const StyledImage = styled.img`
//   // max-height: 100%;
//   border-radius: 10px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   //   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
//   //     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
//   height: 250px;
//   pointer-events: none;
// `;

const StyledDoubleImage = styled.img`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 200px;
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

export const CardInfoTile = (props: CardInfoProps) => {
  const [pictureUrl, setPictureUrl] = useState<string | string[] | undefined>();

  const fetchImages = async () => {
    let temp: string | string[] = props.name || [];

    try {
      if (Array.isArray(temp)) {
        const results = await Promise.allSettled(
          temp.map(async (name) => await getCardImage(name))
        );
        const images = results
          .filter((result) => result.status === "fulfilled")
          .map(
            (result) =>
              (result as PromiseFulfilledResult<string | undefined>).value
          )
          .filter((value) => value !== undefined) as string[];

        setPictureUrl(images);
      } else {
        // If props.name is a single string, fetch the image for that string
        const image = await getCardImage(temp);
        setPictureUrl(image ? [image] : []);
      }
    } catch (error) {
      console.error("Trouble fetching the commander's image, ", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  let commanderImages: any[] = [];

  if (Array.isArray(pictureUrl)) {
    commanderImages = pictureUrl.map((name) => (
      <StyledDoubleImage key={name} src={name} />
    ));
  }

  return (
    <StyledTile>
      <StyledCardName>{props.name}</StyledCardName>
      {/* {Array.isArray(pictureUrl) ? ( */}
      <CommanderWrapper>{commanderImages}</CommanderWrapper>
      {/* ) : (
        <StyledImage src={pictureUrl} />
      )} */}
    </StyledTile>
  );
};
