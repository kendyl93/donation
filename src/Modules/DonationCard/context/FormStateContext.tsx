import { createContext, useContext, useState, ReactNode } from 'react';
import { FormState, FormStateContextProps } from './types';



const FormStateContext = createContext<FormStateContextProps | undefined>(undefined);

const initialFormState: FormState = { amount: '', deadline: '' };

type FormStateProviderProps = {
    children: ReactNode;
}

export const FormStateProvider: React.FC<FormStateProviderProps> = ({ children }) => {
    const [formState, setFormState] = useState<FormState>(initialFormState);

    return (
        <FormStateContext.Provider value={{ formState, setFormState }}>
            {children}
        </FormStateContext.Provider>
    );
};

export const useFormState = (): FormStateContextProps => {
    const context = useContext(FormStateContext);
    if (!context) {
        throw new Error('useFormState must be used within a FormStateProvider');
    }
    return context;
};
