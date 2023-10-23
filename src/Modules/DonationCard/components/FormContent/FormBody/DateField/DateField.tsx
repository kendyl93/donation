import { Field as ReactFinalFormField } from "react-final-form"
import { ArrowButtonWrapper, MonthWrapper, MonthYearDisplayWrapper, SelectorWrapper, YearWrapper } from "./styles"
import { Field } from "../../../../../../shared/Form/Field"
import { useDateField } from "./hooks"
import { monthNames } from "../../../../constants"

export const DateField = () => {
    const {
        handlePrevious,
        handleNext,
        isCurrentMonthAndYear,
        values: { monthIndex, year } = {}
    } = useDateField()

    return (
        <Field label="Every month until">
            <SelectorWrapper>
                <ArrowButtonWrapper title={isCurrentMonthAndYear ? 'Only future months are allowed' : 'Previous month'} disabled={isCurrentMonthAndYear} onClick={handlePrevious}>&lt;</ArrowButtonWrapper>
                <MonthYearDisplayWrapper>
                    <MonthWrapper>
                        {monthNames[monthIndex]}
                    </MonthWrapper>
                    <YearWrapper>
                        {year}
                    </YearWrapper>
                    <ReactFinalFormField name="monthIndex" component="input" type="hidden" />
                    <ReactFinalFormField name="year" component="input" type="hidden" />
                </MonthYearDisplayWrapper>
                <ArrowButtonWrapper title="Next month" onClick={handleNext}>&gt;</ArrowButtonWrapper>
            </SelectorWrapper>
        </Field >
    )
}