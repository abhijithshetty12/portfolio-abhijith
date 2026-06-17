"use client";

import { useState } from "react";
import { GlassSlider } from "./GlassSlider";

export default function SliderDemo() {
  const [v, setV] = useState(42);

  return (
    <div className="p-8">
      <GlassSlider value={v} onChange={setV} min={0} max={100} step={1} label="Performance" />
    </div>
  );
}

