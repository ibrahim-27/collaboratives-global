import React from 'react';

const ServicesCard = ({ index, title, description, icon, subServices }) => {
    return (
        <div id={title.toLowerCase().replace(/\s+/g, '-')} className={`min-h-[32rem] grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4 md:px-8 ${index%2==0?"bg-primary":'bg-white'}`}>
            <div className={`flex justify-center items-center ${index%2==1?"order-2":''}`}>
                <img className="h-full w-full object-contain" src={icon} alt={title} />
            </div>
            <div className={`col-span-2 flex flex-col justify-center ${index%2==0?"text-gray-300":'text-gray-700'}`}>
                <h3 className={`text-3xl font-bold mb-4 ${index%2==0?"text-white":'text-gray-800'}`}>{title}</h3>
                <p className="text-lg mb-6">{description}</p>
                {subServices.length? <div>
                    <h4 className="text-2xl font-semibold underline mb-2">Sub Services:</h4>
                    <ul className="list-none list-inside text-justify flex flex-col gap-3">
                        {subServices.map((subService, index) => (
                            <li key={index} className="mb-2">
                                <h5 className="text-xl font-medium italic">{subService.title}</h5>
                                <p className="text-gray-400">{subService.description}</p>
                            </li>
                        ))}
                    </ul>
                </div> : ''}
            </div>
        </div>
    );
}

export default ServicesCard;