import React from "react";
import bahrain from "../assets/bahrain.webp";
import china from "../assets/china.webp";
import egypt from "../assets/egypt.webp";
import iraq from "../assets/iraq.jpg";
import jordan from "../assets/jordan.jpg";
import kuwait from "../assets/kuwait.png";
import malaysia from "../assets/malaysia.webp";
import pakistan from "../assets/pakistan.webp";
import qatar from "../assets/qatar.webp";
import srilanka from "../assets/srilanka.webp";
import taiwan from "../assets/taiwan.webp";
import thailand from "../assets/thailand.webp";
import uae from "../assets/uae.webp";
import vietnam from "../assets/vietnam.jpg";

// Reordered countries: GCC → Middle East → Asia
const countries = [
  { name: "Bahrain", flag: bahrain },
  { name: "Kuwait", flag: kuwait },
  { name: "Qatar", flag: qatar },
  { name: "UAE", flag: uae },
  { name: "Iraq", flag: iraq },
  { name: "Jordan", flag: jordan },
  { name: "Egypt", flag: egypt },
  { name: "China", flag: china },
  { name: "Malaysia", flag: malaysia },
  { name: "Pakistan", flag: pakistan },
  { name: "Sri Lanka", flag: srilanka },
  { name: "Taiwan", flag: taiwan },
  { name: "Thailand", flag: thailand },
  { name: "Vietnam", flag: vietnam },
];

export default function CountryTicker() {
// const solidDarkBlue =; // dark muted ashy blue

  const containerStyle = {
    overflow: "hidden",
    width: "100%",
    height: "30px", // thin ticker
    display: "flex",
    alignItems: "center",
    background: "#F8F8F8",
    fontFamily: "inherit",
    position: "relative",
  };

  const trackStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    animation: "tickerScroll 50s linear infinite", // slower
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    fontSize: "13px",
    lineHeight: 1,
    color: "#000", // black text
  };

  const flagStyle = {
    width: "16px",
    height: "16px",
    objectFit: "contain",
    marginRight: "5px",
    display: "inline-block",
    verticalAlign: "middle",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes tickerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-track:hover {
            animation-play-state: paused !important;
          }
        `}
      </style>

      <div className="ticker-track" style={trackStyle}>
        {/* Label at start */}
        <div
          style={{
            ...itemStyle,
            fontWeight: 800,
            fontSize: "14px",
            marginRight: "30px",
            background: "#FFFFFF", // white highlight
            padding: "2px 6px",
            borderRadius: "4px",
            textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          We Legalise Documents to be used in        </div>

        {/* Country flags and names */}
        {countries.concat(countries).map((c, i) => (
          <div
            className="ticker-item"
            style={{ ...itemStyle, fontWeight: 700 }}
            key={i}
          >
            <img src={c.flag} alt={c.name} style={flagStyle} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
