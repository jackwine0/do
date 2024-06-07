import React, { useState } from "react";

const Brief = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ backgroundColor: "gray", padding: "1em" }}>
      <h3>INTRO</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
        {showMore ? (
          <span>
            erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
            congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
            aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
            ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
            vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
            non fermentum. Sed dapibus pulvinar nibh tempor porta.
          </span>
        ) : (
          <span id="dots">...</span>
        )}
      </p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default Brief;
