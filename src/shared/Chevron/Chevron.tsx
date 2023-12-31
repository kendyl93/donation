import { ChevronLeftWrapper, ChevronRightWrapper } from "./styles";

export enum DIRECTIONS {
  LEFT = "left",
  RIGHT = "right",
}

type ChevronProps = {
  direction?: DIRECTIONS;
  disabled?: boolean;
};

export const Chevron = ({
  disabled,
  direction = DIRECTIONS.LEFT,
}: ChevronProps) => {
  const Wrapper =
    direction === DIRECTIONS.RIGHT ? ChevronRightWrapper : ChevronLeftWrapper;

  return (
    <Wrapper disabled={disabled}>
      <svg
        role="img"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
          fill="#4D6475"
        />
      </svg>
    </Wrapper>
  );
};
