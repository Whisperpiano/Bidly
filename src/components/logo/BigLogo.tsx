import { useThemeStore } from "../../store/themeStore";

export default function BigLogo() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <svg
      width="92"
      height="69"
      viewBox="0 0 92 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="7.50781"
        y="49.5557"
        width="29.4335"
        height="10.6345"
        rx="2"
        transform="rotate(-75 7.50781 49.5557)"
        fill="#355987"
      />
      <rect
        x="18.1406"
        y="60.9178"
        width="47.0287"
        height="9.90601"
        rx="2"
        transform="rotate(-61.34 18.1406 60.9178)"
        fill="#355987"
      />
      <circle
        cx="40.5"
        cy="34.8983"
        r="27.5"
        stroke={theme === "dark" ? "#3777C0" : "#C7D9F0"}
        strokeWidth="5"
      />
      <rect
        y="33.404"
        width="25.0872"
        height="10.8267"
        rx="2"
        transform="rotate(-41.5526 0 33.404)"
        fill={theme === "dark" ? "#F3F6FC" : "#3777C0"}
      />
      <rect
        x="7.03613"
        y="48.3137"
        width="47.4419"
        height="10.8267"
        rx="2"
        transform="rotate(-41.5526 7.03613 48.3137)"
        fill={theme === "dark" ? "#F3F6FC" : "#3777C0"}
      />
      <rect
        x="17.832"
        y="60.3226"
        width="70.5277"
        height="10.8267"
        rx="2"
        transform="rotate(-41.5526 17.832 60.3226)"
        fill={theme === "dark" ? "#F3F6FC" : "#3777C0"}
      />
      <path
        d="M80.1191 9.73135C81.2925 9.69879 82.2415 10.679 82.171 11.8507L81.3779 25.0297C81.2734 26.7663 79.1548 27.5506 77.9446 26.3007L65.54 13.4879C64.3298 12.2379 65.1823 10.1457 66.9214 10.0975L80.1191 9.73135Z"
        fill={theme === "dark" ? "#F3F6FC" : "#3777C0"}
      />
    </svg>
  );
}
