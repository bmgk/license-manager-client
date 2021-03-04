import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useStyletron } from "baseui";

const LicenceDetails = () => {
  const [css] = useStyletron();

  return (
    <Card
      overrides={{ Root: { style: { maxWidth: "1000px", margin: "0 auto" } } }}
    >
      <StyledBody>
        <FlexGrid
          flexGridColumnCount={1}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
        >
          <FlexGridItem
            className={css({
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.8rem",
              padding: "1rem 0 2rem 0",
            })}
          >
            <span>Licence ID:</span>
            <span>1234567_MG</span>
          </FlexGridItem>
          <FlexGridItem
            className={css({
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.8rem",
              padding: "1rem 0 2rem 0",
            })}
          >
            <span>Remaining usage:</span>
            <span>1</span>
          </FlexGridItem>
        </FlexGrid>
      </StyledBody>
      <StyledAction></StyledAction>
    </Card>
  );
};

export default LicenceDetails;
