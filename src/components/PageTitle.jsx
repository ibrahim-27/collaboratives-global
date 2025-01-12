const PageTitle = ({title, description}) => {
    return (
        <div className="my-12 flex flex-col gap-4 text-center text-primary">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-text-secondary mx-auto">
          {description}
        </p>
      </div>
    )
}

export default PageTitle