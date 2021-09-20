import React from 'react';
import BudgetSection from '../components/BudgetSection';
import NewsSection from '../components/NewsSection';
import PartnershipsSection from '../components/PartnershipsSection';
import ProductsSection from '../components/ProductsSection';
import Slider from '../components/Slider';
import SpecialistSection from '../components/SpecialistSection';
const OnePage = () => {
    return (
        <div>
            <Slider/>
            <ProductsSection/>
            <NewsSection/>
            <SpecialistSection/>
            <PartnershipsSection/>
            <BudgetSection/>
        </div>
    )
}
export default OnePage;