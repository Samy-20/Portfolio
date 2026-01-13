function MachineGear({ size = 500, color = "#F1F5F9" }) {
  const outerRadius = 120;

  const teethCount = 50;
  const toothWidth = 4;
  const toothHeight = 2;
  const angleStep = (2 * Math.PI) / teethCount;

  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      {/* OUTER BODY */}
      <circle
        cx="100"
        cy="100"
        r={outerRadius - 8}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      {/* GEAR TEETH */}
      {Array.from({ length: teethCount }).map((_, i) => {
        const angle = i * angleStep;
        const x = 100 + Math.cos(angle) * outerRadius;
        const y = 100 + Math.sin(angle) * outerRadius;
        const rotation = (angle * 180) / Math.PI;

        return (
          <rect
            key={i}
            x={x - toothWidth / 2}
            y={y - toothHeight}
            width={toothWidth}
            height={toothHeight}
            fill="none"
            stroke={color}
            strokeWidth="2"
            transform={`rotate(${rotation} ${x} ${y})`}
          />
        );
      })}

    </svg>
  );
}

export default MachineGear;
