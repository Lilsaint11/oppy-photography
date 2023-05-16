import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from 'react-router-dom';
        
const Sections = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1560173045-beaf11c65dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          title: 'Birthdays',
        },
        {
          img: 'https://media.istockphoto.com/id/1334542399/photo/elopement-wedding.jpg?b=1&s=170667a&w=0&k=20&c=gOAHukXp_Y2NlEbROxYZEt1YylO-fNJw6GbaBq292KU=',
          title: 'Weddings',
        },
        {
          img: 'https://media.istockphoto.com/id/1389918172/photo/studio-shot-of-an-attractive-young-woman-applying-makeup-against-a-brown-background.jpg?b=1&s=170667a&w=0&k=20&c=btaUGYnq3l8gVM57adMhhvOtyRmIATeMPWYaBQtNNWA=',
          title: 'Brand',
        },
        {
          img: 'https://media.istockphoto.com/id/1430286361/photo/beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=V-o3UJRFNybgzUm3gmjHpv1mPynnOKXhWNjo2TDWzDA=',
          title: 'Modelling',
        },
        {
          img: 'https://images.unsplash.com/photo-1612368871329-946fd8ddbb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG91dGRvb3IlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
          title: 'Outdoor',
        },
        {
          img: 'https://media.istockphoto.com/id/1344215933/photo/business-semiar-in-the-convention-center.jpg?b=1&s=170667a&w=0&k=20&c=HUbnk1FHAeBHVl52-TLszpF-t8xP3ckR94UGC9-GL3Q=',
          title: 'Videography',
        }
      ]
    return ( 

        <div>
            <h1 className='text-4xl flex items-center justify-center mb-5 font-serif'>Sections</h1>
            <div className="flex flex-wrap space-3">
            {itemData.map((item) => ( 
                <span className='w-1/2 h-48 relative'>  
                <Link to={`section-pages/${item.title}`}>
                  <img
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  className='w-full h-full object-cover cursor-pointer -z-50 hover:w-96'
                  />
                  <span className='absolute top-0 text-white z-40 text-2xl cursor-pointer  w-full h-full flex items-center justify-center hover:bg-[rgba(0,0,0,0.8)] hover:font-bold transition duration-300'>{item.title}</span>
                </Link>     
                </span >
        ))}
        </div>
        </div>
     );
}
 
export default Sections;