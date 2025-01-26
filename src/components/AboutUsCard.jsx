const AboutUsCard = ({title, description, img=null}) => {
    return (
      <>
        <div className="mx-auto flex flex-col gap-4 border shadow-lg rounded-lg py-8 px-4 w-full h-full 
           hover:shadow-primary-light transition-all duration-300 
          hover:-translate-y-2 hover:scale-[1.02]">
          {img? <img
                src={img}
                alt=""
                className="w-20 h-20 rounded-full mx-auto"
            />: ''}
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          <p className="text-text-secondary mx-auto w-full">
            {description}
          </p>
        </div>
      </>
    )
}

export default AboutUsCard