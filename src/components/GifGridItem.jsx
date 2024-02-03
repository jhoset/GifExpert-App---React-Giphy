import PropTypes from 'prop-types'

export default function GifGridItem({title, url}) {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
