import PropTypes from 'prop-types'

const SingleBook = ({id}) => {
    return (
        <div>
            <h2>This is from single book.{id}</h2>
        </div>
    );
};

SingleBook.propTypes = {
    id: PropTypes.number,
}

export default SingleBook;