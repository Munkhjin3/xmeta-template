import React from "react";
import { Container } from "./container";
import { MarketBig } from "./market-big";
import { MarkerSmall } from "./market-small";
import { Typography } from "../ui";

export const Market = () => {
  return (
    <Container>
      <Typography variant={'heading2'} className="!text-start w-full ">Өнөөдрийн крипто зах зээл</Typography>
      <div className="grid md:grid-cols-3 gap-3 w-full mt-6">
        <MarkerSmall />

        <MarketBig />
      </div>
    </Container>
  );
};
