import React, { useState } from "react";
import BoxList from "./BoxList";
import BoxToggle from "./BoxToggle";

const Main = ({ movies }: { movies: any }) => {
  return (
    <main className="main">
      <BoxList movies={movies} />
      <BoxToggle />
    </main>
  );
};

export default Main;
