import React from 'react';
import { CardContentWrapper, CardWrapper } from './styles';
import { CardHeader } from './components/CardHeader';
import { FormContent } from './components/FormContent';
import { FormStateProvider } from './context/FormStateContext';
import { TotalAmount } from './components/TotalAmount';
import { Summary } from './components/Summary';
import { Footer } from './components/Footer';

export const DonationCard: React.FC = () => {
    return (
        <CardWrapper>
            <CardContentWrapper>
                <CardHeader />
                <FormStateProvider>
                    <FormContent />
                    <TotalAmount />
                    <Summary />
                    <Footer />
                </FormStateProvider>
            </CardContentWrapper>
        </CardWrapper>
    );
}
