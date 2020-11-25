import React from "react";

const countnumber = {
  margin: "0.35em auto",
  fontStyle: "italic",
};

export default function ViewCount({ value }) {
  return (
    <div style={countnumber} className="countNumber">
      {value}
    </div>
  );
}
