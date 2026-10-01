// Last edited by you@example.com @ 01/10/26 11:37.
import { useEffect, useMemo, useRef, useState } from "react";

const MAX_CELLS = 1400;

const BackgroundRippleEffect = ({ cellSize = 56 }) => {
  const containerRef = useRef(null);
  const [grid, setGrid] = useState({ rows: 0, cols: 0, size: cellSize });
  const [clicked, setClicked] = useState(null); // { row, col, id }

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;

      // Khane bohat zyada na hon (performance), is liye zaroorat par size barhao
      let size = cellSize;
      while (Math.ceil(width / size) * Math.ceil(height / size) > MAX_CELLS) {
        size += 8;
      }

      setGrid({
        cols: Math.ceil(width / size),
        rows: Math.ceil(height / size),
        size,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [cellSize]);

  const cells = useMemo(
    () =>
      Array.from({ length: grid.rows * grid.cols }, (_, i) => ({
        i,
        row: Math.floor(i / grid.cols),
        col: i % grid.cols,
      })),
    [grid.rows, grid.cols],
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      <style>{`
        @keyframes cellRipple {
          0%   { opacity: 1; }
          50%  { background-color: rgba(132, 0, 255, 0.5); }
          100% { opacity: 1; }
        }
        .ripple-run {
          animation-name: cellRipple;
          animation-timing-function: ease-out;
          animation-fill-mode: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .ripple-run { animation: none !important; }
        }
      `}</style>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, ${grid.size}px)`,
          gridTemplateRows: `repeat(${grid.rows}, ${grid.size}px)`,
        }}
      >
        {cells.map((cell) => {
          const distance = clicked
            ? Math.hypot(cell.row - clicked.row, cell.col - clicked.col)
            : 0;

          return (
            <div
              key={`${cell.i}-${clicked ? clicked.id : 0}`}
              onClick={() =>
                setClicked({ row: cell.row, col: cell.col, id: Date.now() })
              }
              className={`border-[0.5px] border-gray-600/30 bg-[#1a1a1a]/40 hover:bg-purple-600/25 transition-colors duration-150 ${
                clicked ? "ripple-run" : ""
              }`}
              style={
                clicked
                  ? {
                      animationDelay: `${distance * 55}ms`,
                      animationDuration: `${200 + distance * 80}ms`,
                    }
                  : undefined
              }
            />
          );
        })}
      </div>

      {/* Upar neeche ka kinara dheere dheere gayab (aas paas ke sections se mel) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />
    </div>
  );
};

export default BackgroundRippleEffect;
