import React from 'react';
import {ImageListItem} from "@mui/material";

interface CardElementProps {
  data: {
    full: string,
    small: string;
  };
  description: string;
}

const CardElement: React.FC<CardElementProps> = ({data, description }) => {
  return (
    <ImageListItem key={data.full}>
      <img
        srcSet={`${data.full}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${data.full}?w=164&h=164&fit=crop&auto=format`}
        alt={description}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default CardElement;
