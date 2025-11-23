import location from '../assets/location.png';

const Office = ({office}) => {
    return (
        <div className='group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1'>
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary/10 transition-colors flex-shrink-0">
                    <img className='w-6 h-6 object-contain' src={location} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-primary">{office.country}</h3>
                    <div className="space-y-1 text-gray-600 text-sm">
                        <p className="font-medium">{office.phone}</p>
                        <p className='text-secondary hover:underline cursor-pointer'>{office.email}</p>
                        <p className='leading-relaxed'>{office.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Office;