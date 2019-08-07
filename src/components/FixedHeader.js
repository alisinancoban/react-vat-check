import React from 'react';
import PropTypes from 'prop-types';

const FixedHeader = () => (
    <div className="fixed py-3 pl-5">
        <div className="float-left pr-2">support@despatch@gmail.com</div>
        <div className="float-left pl-2 phone">+90534 871 2055</div>
        <div className="float-right">Despatch Cloud</div>
    </div>
);

FixedHeader.defaultProps = {
    title: 'App'
};

FixedHeader.propTypes = {
    title: PropTypes.string
};

export { FixedHeader };
