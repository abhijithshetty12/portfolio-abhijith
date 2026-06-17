"use client";

import * as React from "react";

type GlassSliderProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
  className?: string;
};

const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

export function GlassSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  disabled = false,
  className = "",
}: GlassSliderProps) {
  const [dragging, setDragging] = React.useState(false);

  const percent = ((value - min) / (max - min)) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    onChange(clamp(Math.round(next / step) * step, min, max));
  };

  return (
    <div className={`w-full ${className}`}>
      {label ? (
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            {label}
          </span>
          <span className="text-[11px] text-zinc-300 font-medium tabular-nums">
            {value}
          </span>
        </div>
      ) : null}

      <div
        className={
          "relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)] " +
          (disabled ? "opacity-60" : "")
        }
      >
        <div className="relative px-4 py-4">
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-1 rounded-full bg-white/[0.08]" />
          <div
            className={
              "absolute left-4 top-1/2 -translate-y-1/2 h-1 rounded-full " +
              "bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 shadow-[0_0_18px_rgba(34,211,238,0.25)]"
            }
            style={{ width: `calc(${percent}% )` }}
          />

          <input
          aria-label={label ?? "Slider"}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={handleInputChange}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
          className="glass-slider"
        />

          <div
            aria-hidden="true"
            className={
              "pointer-events-none absolute top-1/2 -translate-y-1/2 " +
              "transition-transform duration-150"
            }
            style={{ left: `calc((${percent} / 100) * (100% - 2*1rem) + 1rem)` }}
          >
            <div
              className={
                "w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 " +
                "blur-[8px] opacity-70"
              }
              style={{ transform: `scale(${dragging ? 1.25 : 1})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

