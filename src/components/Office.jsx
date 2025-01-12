import location from '../assets/location.png';

const Office = ({office}) => {
    return (
        <div className='flex items-center gap-6 border rounded-lg px-4 py-2 hover:border-secondary-light'>
            <img className='w-10 h-10 rounded-full p-2 bg-gray-200' src={location} alt="" />
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">{office.country}</h3>
                <p className='text-text-secondary'>{office.phone}</p>
                <p className='text-text-secondary underline'>{office.email}</p>
                <p className='text-text-secondary'>{office.address}</p>
            </div>
        </div>
    );
}

export default Office;