import { Field as ReactFinalFormField } from "react-final-form";
import {
  ArrowButtonWrapper,
  MonthWrapper,
  MonthYearDisplayWrapper,
  SelectorWrapper,
  YearWrapper,
} from "./styles";
import { Field } from "../../../../../../shared/Form/Field";
import { useDateField } from "./hooks";
import { monthNames } from "../../../../constants";
import { Chevron, DIRECTIONS } from "../../../../../../shared/Chevron";

export const DateField = () => {
  const {
    disabledArrowButtonLeft,
    disabledArrowButtonRight,
    handlePrevious,
    handleNext,
    values: { monthIndex, year } = {},
  } = useDateField();

  return (
    <Field label="Every month until">
      <SelectorWrapper>
        <ArrowButtonWrapper
          title={
            disabledArrowButtonLeft
              ? "Only future months are allowed"
              : "Previous month"
          }
          disabled={disabledArrowButtonLeft}
          onClick={handlePrevious}
        >
          <Chevron disabled={disabledArrowButtonLeft} />
        </ArrowButtonWrapper>
        <MonthYearDisplayWrapper>
          <MonthWrapper>{monthNames[monthIndex]}</MonthWrapper>
          <YearWrapper>{year}</YearWrapper>
          <ReactFinalFormField
            name="monthIndex"
            component="input"
            type="hidden"
          />
          <ReactFinalFormField name="year" component="input" type="hidden" />
        </MonthYearDisplayWrapper>
        <ArrowButtonWrapper
          title={disabledArrowButtonRight ? "Amount is too high" : "Next month"}
          onClick={handleNext}
          disabled={disabledArrowButtonRight}
        >
          <Chevron
            disabled={disabledArrowButtonRight}
            direction={DIRECTIONS.RIGHT}
          />
        </ArrowButtonWrapper>
      </SelectorWrapper>
    </Field>
  );
};
