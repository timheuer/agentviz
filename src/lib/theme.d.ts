/**
 * Type declarations for theme.js design tokens.
 * Provides autocomplete and type safety for TS consumers without
 * renaming theme.js (which 40+ JS files import by extension).
 */

export type TrackType = "reasoning" | "tool_call" | "context" | "output";

export interface TrackTypeInfo {
  label: string;
  color: string;
  icon: string;
}

export interface Theme {
  bg: {
    base: string;
    surface: string;
    raised: string;
    overlay: string;
    hover: string;
    active: string;
  };
  border: {
    subtle: string;
    default: string;
    strong: string;
    focus: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    dim: string;
    ghost: string;
  };
  accent: {
    primary: string;
    subtle: string;
  };
  semantic: {
    success: string;
    warning: string;
    error: string;
    errorSubtle: string;
    info: string;
    live: string;
  };
  track: Record<TrackType, string>;
  agent: Record<string, string>;
  font: {
    mono: string;
    ui: string;
  };
  fontSize: Record<string, string>;
  space: Record<string, number>;
  radius: Record<string, number>;
  shadow: Record<string, string>;
  focus: { ring: string };
  transition: Record<string, string>;
  z: Record<string, number>;
}

export declare const theme: Theme;
export declare const TRACK_TYPES: Record<TrackType, TrackTypeInfo>;
export declare const AGENT_COLORS: Record<string, string>;
export declare function alpha(hex: string, opacity: number): string;
