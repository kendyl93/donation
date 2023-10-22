import React from 'react';
import logoSrc from '../../../../assets/logo.svg';

const LOGO_ALT_TEXT = 'natur.ally'

export const Logo = () => {
    return <img src={logoSrc} alt={LOGO_ALT_TEXT} />
}
