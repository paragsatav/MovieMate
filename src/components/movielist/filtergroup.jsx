import React from "react";

const FilterGroup = ({minRate, onRatingClick, ratings}) => {
    return (
        <ul className="align-center movieFilter">
            {
                ratings.map(rate => 
                    (<li className= {minRate === rate ? "movieItem active" : "movieItem"}
                        key={rate} 
                        onClick={() => onRatingClick(rate)}>{rate}+ Star</li>)
                )
            }
                       
        </ul>
    );
}

export default FilterGroup;