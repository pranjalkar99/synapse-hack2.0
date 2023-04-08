import React from "react";
import response from "../response.json";

export default function Test() {
  console.log(response);

  let html2 = "";

  const theme = {
    backgroundColor: "blue",
    color: "#000",
    fontFamily: "sans-serif",
    fontSize: "16px",
    lineHeight: "1.5",
    padding: "0",
    margin: "0",
  };

  const themeHTML = `
    <div style="background-color: ${theme.backgroundColor}; color: ${theme.color}; font-family: ${theme.fontFamily}; font-size: ${theme.fontSize}; line-height: ${theme.lineHeight}; padding: ${theme.padding}; margin: ${theme.margin};">
  `;

  const themeHTMLEnd = `
    </div>
    `;

  let descriptionList = [];

  response.textAnnotations.map((text, index) => {
    let description = text.description;
    if (index === 0) {
      description.split("\n").map((line, index) => {
        descriptionList.push(line);
      });
    }
    if (index > 0) {
      const textVertices = text.boundingPoly.vertices;
      const width = Math.abs(textVertices[1].x - textVertices[0].x);
    //  give width a modulus value
        

      let height = textVertices[2].y - textVertices[1].y;
      if (height < 20) {
        height = 20;
      }
      if (index > 1) {
          const previousTextVertices =
            response.textAnnotations[index - 1].boundingPoly.vertices;
          const distance = textVertices[0].x - previousTextVertices[1].x;
      }

      let temporaryHTML = `
        <p style="position: relative; left: ${textVertices[0].x}px; top: ${textVertices[0].y}px; width: ${width}px; height: ${height}px;">
            ${description}
        </p>
      `;
      
      console.log(temporaryHTML);

      html2 = html2 + temporaryHTML;
    }
  });

  const fullHTML = themeHTML + html2 + themeHTMLEnd;

  return (
    <div>
      {/* <h1>Test</h1> */}
      <div
        style={{
          width: "900px",
          height: "100vh",
          overflow: "scroll",
          position: "relative",
          backgroundColor: "lightblue",
          color: "black",
          fontFamily: "sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "1.5",
          padding: "0",
          margin: "0",
        }}
        dangerouslySetInnerHTML={{ __html: html2 }}
      ></div>
    </div>
  );
}
