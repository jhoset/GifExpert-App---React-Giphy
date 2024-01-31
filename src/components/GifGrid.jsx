import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({ category, id, onRemoveCategory }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <div className='result-header'>
                {!isLoading && (<h2> Result for: <i>{category}</i> </h2>)}
                {
                    isLoading && (<h2> Loading...</h2>)
                }
                <button onClick={() => onRemoveCategory(id)}> Delete Result </button>
            </div>

            <div className='card-grid'>
                {
                    images.map((gif) => (
                        <GifGridItem key={gif.id} {...gif} />
                    ))
                }
            </div>
        </>
    )

}
GifGrid.propTypes = {
    category: PropTypes.string,
    id: PropTypes.number,
    onRemoveCategory: PropTypes.func
}