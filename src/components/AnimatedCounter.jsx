import { useCountUp } from '../hooks/useCountUp';

export default function AnimatedCounter({ value = 0, suffix = '', prefix = '', duration = 1600 }) {
  const [ref, display] = useCountUp({ value, duration });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
