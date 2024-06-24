import * as React from 'react';
import CardElement from "./cardElement";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Grid, ImageList, Skeleton} from "@mui/material";

const fetchData = async () => {
  const { data } = await axios.get(`https://api.unsplash.com/photos?per_page=12&client_id=${process.env.NEXT_PUBLIC_API_KEY}`);
  return data;
};

export const Elevation = () => {
  const { data, isLoading} = useQuery({queryKey: ['gallery'], queryFn: () => {
    const data = fetchData();

    return data;
  }});

  if (isLoading){
    return <Grid >{
      Array.from(new Array(12)).map((_, idx) => (
        <Skeleton
          key={idx}
          sx={{ bgcolor: 'grey.900' }}
          variant="rectangular"
          width={210}
          height={118}
        />
      ))
    }
    </Grid>
  }

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {data.map((item: {urls: { full: string, small: string }, alt_description: string}) => (
        <CardElement data={item.urls} description={item.alt_description} key={item.urls.full}/>
      ))}
    </ImageList>
  );
}
