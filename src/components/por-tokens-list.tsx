import React from 'react';
import PorCard from './cards/por-card';

const PorTokenList= ({}) => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start justify-center gap-8 px-8'>
            <PorCard token={"IB01.bt"} ratio='100%' imageRoute={"/assets/tokens/ib01.svg"}/>
            <PorCard token={"CSPX.bt"} ratio='100%' imageRoute={"/assets/tokens/cspx.svg"}/>
            <PorCard token={"GD30D.bt"} ratio='100%' imageRoute={"/assets/tokens/gd30d.svg"}/>
            <PorCard token={"CNDX.bt"} ratio='100%' imageRoute={"/assets/tokens/cndx.svg"}/>
            <PorCard token={"IRS.bt"} ratio='100%' imageRoute={"/assets/tokens/irs.svg"}/>
        </div>  
    );
};

export default PorTokenList;