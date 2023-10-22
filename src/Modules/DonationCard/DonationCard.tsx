import React from 'react';
import { CardContentWrapper, CardWrapper } from './styles';
import { CardHeader } from './components/CardHeader';
import { FormContent } from './components/FormContent';

export const DonationCard: React.FC = () => {
    return (
        <CardWrapper>
            <CardContentWrapper>
                <CardHeader />
                <FormContent />
            </CardContentWrapper>
        </CardWrapper>
    );
}
