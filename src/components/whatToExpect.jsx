const WhatToExpect = () => {
    return ( 
        <div className="flex justify-between">
            <div className="w-1/2" data-aos="fade-right"data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <h1 className="lg:text-4xl md:text-3xl text-2xl mb-5 font-serif">What to expect in a photoshoot</h1>
                <p className="text-slate-500 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint similique dolores qui perferendis exercitationem consequuntur deleniti omnis eos molestiae, error nostrum quas sequi cum, iure at eius suscipit sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad veniam quas obcaecati quis quia a quod tempore expedita? Corporis est incidunt, cupiditate ipsum architecto et enim dolores cumque nulla.</p>
            </div>
            <div className="w-1/3" data-aos="fade-left"data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <img src="https://media.istockphoto.com/id/1334540364/photo/professional-photo-studio.jpg?s=612x612&w=0&k=20&c=vAkPZrkvFPbnzhyg3_x5MsADd1hNmAeTBNrNoILye4g=" alt="photoshoot" />
            </div>
        </div>
     );
}
 
export default WhatToExpect;