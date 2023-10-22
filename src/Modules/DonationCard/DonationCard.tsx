import React from 'react';
import { CardContentWrapper, CardWrapper } from './styles';
import { CardHeader } from './components/CardHeader';
import { FormContent } from './components/FormContent';
import { FormStateProvider } from './context/FormStateContext';
import { TotalAmount } from './components/TotalAmount';

export const DonationCard: React.FC = () => {
    return (
        <CardWrapper>
            <CardContentWrapper>
                <FormStateProvider>
                    <CardHeader />
                    <FormContent />
                    <TotalAmount />
                </FormStateProvider>
            </CardContentWrapper>
        </CardWrapper>
    );
}
