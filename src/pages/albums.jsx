import { motion } from "framer-motion"

const Albums = () => {
    const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast tears',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Binta birthday',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'egbon adugbo wedding',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'skincare brand',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'hon.Ajibola house warming',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Precious sapa moments',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Bbq and Thrillz',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Jerry music shots',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mimi birthday',
      author: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Madam Alajeobko burial',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: '2023 tech summit',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Stephen cashout moments',
      author: '@southside_customs',
      cols: 2,
    },
  ];

    return ( 
        <motion.div
         initial={{rotateY:25}}
         animate={{rotateY:0,transition:{duration:1}}}
         exit={{x:'-100vw',transition:{ease:'easeInOut'}}}
         className='flex flex-col items-center justify-center mx-5 sm:mx-10'>
            <h1 className='text-2xl mb-5 font-bold'>Albums</h1>
            <div className='w-full h-full flex flex-wrap items-center justify-center gap-2'>
                {itemData.map((item) => (
                    <div key={item.img} className='h-48 w-64 max-[560px]:w-full  max-[560px]:h-56  max-[560px]:bg-contain relative'>
                      <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                          className='h-full w-full'
                      />
                      <span className=' bg-[rgba(0,0,0,0.8)] text-white max-[560px]:w-full max-[560px]:h-16 max-[560px]:text-xl  w-64 h-10 absolute bottom-0 pl-3 flex items-center'>{item.title}</span>
                 
                    </div>
                ))}
            </div>
        </motion.div>
     );
}
 
export default Albums;