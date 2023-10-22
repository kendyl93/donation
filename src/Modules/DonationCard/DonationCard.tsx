import React from 'react';
import { CardContentWrapper, CardWrapper } from './styles';
import { CardHeader } from './components/CardHeader';

export const DonationCard: React.FC = () => {
    return (
        <CardWrapper>
            <CardContentWrapper>
                <CardHeader />
            </CardContentWrapper>
        </CardWrapper>
    );
}
