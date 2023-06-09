import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import client from "../client"
import { useEffect, useState } from "react"


const Photography = () => {
  const [dataFetched,setDataFetched] = useState(false);
    console.log(dataFetched)
    useEffect(() => {
        client.fetch(
            `*[_type == "photo-gallery"] {
                mainImage{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => setDataFetched(data))
        .catch(console.error);
        
    },[])
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1683498802652-32af845236fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          title: 'Bed',
        },
        {
          img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
          title: 'Books',
        },
        {
          img: 'https://images.unsplash.com/photo-1683513561090-0835f3cb7719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          title: 'Sink',
        },
        {
          img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
          title: 'Kitchen',
        },
        {
          img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
          title: 'Blinds',
        },
        {
          img: 'https://images.unsplash.com/photo-1683372646973-16f862ba1a4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          title: 'Chairs',
        },
        {
          img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
          title: 'Laptop',
        },
        {
          img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
          title: 'Doors',
        },
        {
          img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1683127004449-e6ed3ea0c264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          title: 'Storage',
        },
        {
          img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
          title: 'Candle',
        },
        {
          img: 'https://images.unsplash.com/photo-1683567935747-6fa4d30c552d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          title: 'Coffee table',
        },
        {
            img: 'https://images.unsplash.com/photo-1683498802652-32af845236fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            title: 'Beda',
          },
          {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Booksa',
          },
          {
            img: 'https://images.unsplash.com/photo-1683513561090-0835f3cb7719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            title: 'Sinka',
          },
          {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchena',
          },
          {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blindsa',
          },
          {
            img: 'https://images.unsplash.com/photo-1683372646973-16f862ba1a4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            title: 'Chairsa',
          },
          {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptopa',
          },
          {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doorsa',
          },
          {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffeea',
          },
          {
            img: 'https://images.unsplash.com/photo-1683127004449-e6ed3ea0c264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            title: 'Storagea',
          },
          {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candlea',
          },
          {
            img: 'https://images.unsplash.com/photo-1683567935747-6fa4d30c552d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            title: 'Coffee tablea',
          },
      ];
    return ( 
      <>
        {dataFetched && <Box sx={{ width: '100%', height: '100%',  }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.title}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>}
      </>
     );
}
 
export default Photography;