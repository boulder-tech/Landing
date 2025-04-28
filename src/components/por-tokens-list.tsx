import React from 'react';
import PofCard from './cards/pof-card';

const PorTokenList= ({}) => {
    return (
        <div>
            <PofCard
            token={"USDC"}
            ratio='100%'
            imageRoute={"/assets/Pof.png"}
            /> 
        </div>  
    );
};

export default PorTokenList;