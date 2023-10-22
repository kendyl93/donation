import React from 'react';
import { CardContentWrapper, CardWrapper, CardInnerContentWrapper, SummaryWrapper } from './styles';
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
                <CardInnerContentWrapper>
                    <FormStateProvider>
                        <FormContent />
                        <SummaryWrapper>
                            <TotalAmount />
                            <Summary />
                        </SummaryWrapper>
                        <Footer />
                    </FormStateProvider>
                </CardInnerContentWrapper>
            </CardContentWrapper>
        </CardWrapper>
    );
}
