import React from 'react';
import PropTypes from 'prop-types';

const ValidDisplay = (props) => (
    <div className="row">
        <div className="valid col-8 mx-auto mt-3 p-4">
            <p className="text-center">The number is valid on the specified date.</p>
            <p ><span className="mr-2">Trader Name:</span>{props.name}</p>
            <p><span className="mr-2">Trader Address:</span>{props.address}</p>
        </div>

    </div>
);

ValidDisplay.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    companyType: PropTypes.string,
    isValid: PropTypes.bool

};

export { ValidDisplay };
