export type ProbabilityStyles = {
  accent: string;
  muted: string;
  badge: string;
  badgeClass: string;
  panelClass: string;
  barClass: string;
};

export function getProbabilityStyles(value: number): ProbabilityStyles {
  if (value > 80) {
    return {
      accent: "text-red-300",
      muted: "text-red-100/56",
      badge: "High",
      badgeClass:
        "border-red-300/20 text-red-100/70 bg-red-300/8 shadow-[0_0_24px_rgba(252,165,165,0.12)]",
      panelClass:
        "border-red-300/14 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.14),_transparent_42%),linear-gradient(180deg,rgba(20,5,5,0.96),rgba(7,2,2,0.96))]",
      barClass:
        "bg-[linear-gradient(90deg,_rgba(254,202,202,0.85),_rgba(248,113,113,0.95)_55%,_rgba(185,28,28,0.9))] shadow-[0_0_22px_rgba(248,113,113,0.52)]",
    };
  }

  if (value > 10) {
    return {
      accent: "text-amber-300",
      muted: "text-amber-100/60",
      badge: "Moderate",
      badgeClass:
        "border-amber-300/22 text-amber-100/74 bg-amber-300/8 shadow-[0_0_24px_rgba(252,211,77,0.1)]",
      panelClass:
        "border-amber-300/14 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_42%),linear-gradient(180deg,rgba(20,14,4,0.96),rgba(7,5,1,0.96))]",
      barClass:
        "bg-[linear-gradient(90deg,_rgba(254,240,138,0.85),_rgba(251,191,36,0.95)_55%,_rgba(217,119,6,0.9))] shadow-[0_0_22px_rgba(251,191,36,0.45)]",
    };
  }

  return {
    accent: "text-emerald-300",
    muted: "text-emerald-100/56",
    badge: "Cleared",
    badgeClass:
      "border-emerald-300/20 text-emerald-100/70 bg-emerald-300/8 shadow-[0_0_24px_rgba(110,231,183,0.12)]",
    panelClass:
      "border-emerald-300/10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.16),_transparent_42%),linear-gradient(180deg,rgba(4,15,10,0.96),rgba(1,5,3,0.96))]",
    barClass:
      "bg-[linear-gradient(90deg,_rgba(190,242,100,0.88),_rgba(74,222,128,0.96)_55%,_rgba(22,163,74,0.8))] shadow-[0_0_22px_rgba(74,222,128,0.6)]",
  };
}
