/* eslint-disable react/prop-types */

export function CardSection({ data }) {
    return (
        <section className="grid w-full gap-12 my-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {
                data.map(({ id, name, image, popular, price, rating, votes, available }) => {
                    const isPopular = popular ? 'absolute font-dm-sans text-black text-[0.625rem] bg-yellow rounded-xl px-2 py-0.5 m-2' : 'hidden'
                    const isRatedVotes = rating ? `(${votes} votes)` : 'No ratings'
                    const isRatedImage = rating ? "./Star_fill.svg" : "./Star.svg"
                    const isSoldOut = !available ? "block text-red font-dm-sans font-medium text-sm" : 'hidden'
                    return (
                        <article className='flex flex-col gap-3' key={id}>
                            <div>
                                <p
                                    className={isPopular}>Popular</p>
                                <img
                                    src={image}
                                    alt={`${name} image`}
                                    className='rounded-xl' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-dm-sans text-white text-sm font-medium'>{name}</h3>
                                <p className='bg-green font-dm-sans text-[0.75rem] text-black px-2 py-1 rounded-lg'>{price}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className='flex gap-1 items-center -my-1'>
                                    <img src={isRatedImage} alt="Star Rating" />
                                    <p className='font-dm-sans text-white text-sm'>{rating} <span className="text-gray-light">{isRatedVotes}</span></p>
                                </div>
                                <p className={isSoldOut}>Sold out</p>
                            </div>
                        </article>
                    )
                })
            }

        </section>

    )
}