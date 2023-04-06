import React from "react";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div>
      <h1>This is home</h1>
      {tshirts.map((tshirt) => console.log(tshirt))}
    </div>
  );
};

export default Home;
<h1></h1>;
