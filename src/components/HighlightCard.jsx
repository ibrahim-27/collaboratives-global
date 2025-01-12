const HighlightCard = ({ title, desc, icon }) => {
    return (
        <div className="flex flex-col gap-2 border hover:border-secondary-light p-6 rounded-lg">
            <div className="">
                <img className="rounded-lg" src={icon} alt={title} />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold ">{title}</h3>
                <p className="text-text-secondary">{desc}</p>
            </div>
        </div>
    );
}

export default HighlightCard;