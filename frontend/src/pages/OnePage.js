import React from 'react';
import BudgetSection from '../components/BudgetSection';
import NewsSection from '../components/NewsSection';
import PartnershipsSection from '../components/PartnershipsSection';
import ProductsSection from '../components/ProductsSection';
import SpecialistSection from '../components/SpecialistSection';
const OnePage = () => {
    return (
        <div>
            <ProductsSection/>
            <NewsSection/>
            <SpecialistSection/>
            <PartnershipsSection/>
            <BudgetSection/>
        </div>
    )
}
export default OnePage;