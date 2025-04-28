import React from 'react';
import PorCard from './cards/por-card';

const PorTokenList= ({}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <PorCard
            token={"IB01.bt"}
            ratio='100%'
            imageRoute={"/assets/tokens/ib01.png"}
            /> 
        </div>  
    );
};

export default PorTokenList;