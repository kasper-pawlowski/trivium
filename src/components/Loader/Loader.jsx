import React from 'react';
import { Spinner, Wrapper } from './Loader.styles';

const Loader = ({ isFullHeight, variant }) => {
    return (
        <Wrapper {...(isFullHeight === true && { isFullHeight: true })}>
            <Spinner variant={variant} />
        </Wrapper>
    );
};

export default Loader;
