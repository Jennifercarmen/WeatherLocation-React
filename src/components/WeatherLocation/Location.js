import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => ( //destructuring
        <div className="LocationCont">
            <h3>
                {city}
            </h3>
        </div>
)

Location.propTypes= {
    city: PropTypes.string.isRequired
}
export default Location;