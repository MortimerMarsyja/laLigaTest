import * as React from "react"

function Logo(props) {
  return (
    <svg x={0} y={0} viewBox="0 0 830 835.2" xmlSpace="preserve" {...props}>
      <style>{".prefix__st1{fill:#1d1d1b}"}</style>
      <path
        d="M301 351.7c16.8-24.9 42.5-43.7 71.4-51.8-5.1 3.5-9.5 8.1-13.7 12.6 14.9-1.9 30.4-.2 44.2 5.9 1.8 13.1 2.7 26.4 4.8 39.5 1.7-13.2 3-26.4 4.6-39.5 13.5-5.8 28.6-7.9 43.1-5.8l1 .8c0-.2.1-.7.1-.9-4.5-4.3-8.7-9-13.9-12.5 28.9 8.1 54.6 26.9 71.4 51.8-4.9-3.8-10.5-6.4-16.1-9.1 6.4 13.5 9.6 28.6 8.1 43.5-12.1 5.6-24.5 10.9-36.5 16.8 13.1-2.4 26.1-5.2 39.1-7.8 10.2 11.2 16.6 25.5 19.5 40.3 2.9-5.2 5.7-10.5 7.5-16.2 1 29.4-8.6 58.9-26.6 82 1.6-5.6 2.5-11.3 3.3-17-10.9 10.3-24.3 17.9-39 21.2-9.2-9.9-18.1-20.1-27.6-29.8 6.4 11.9 13.2 23.5 19.8 35.2-7.6 13.1-19.2 23.6-32.4 30.8 5.7 1 11.4 2 17.2 2.1-27.5 9.8-58.3 9.8-85.8 0 5.8-.1 11.6-1.1 17.4-2.1-13.3-7.2-24.8-17.7-32.4-30.9 6.5-11.7 13.4-23.3 19.7-35.2-9.5 9.7-18.3 20-27.7 29.7-14.6-3.4-28-10.9-38.8-21.2.8 5.8 1.6 11.5 3.3 17.1-18.1-23.2-27.7-52.8-26.7-82.2 1.9 5.8 4.7 11.1 7.6 16.4 2.7-14.9 9.3-29.2 19.5-40.5 13.1 2.5 26.1 5.4 39.2 7.8-12-6-24.3-11.2-36.5-16.8-1.5-14.9 1.7-30 8.1-43.5-5.7 2.8-11.3 5.5-16.2 9.3m106.5 12.1c-18.8 13.6-37.5 27.3-56.3 40.9 7.1 22.1 14.4 44.2 21.5 66.3 23.2 0 46.5.1 69.7-.1 7-22.1 14.4-44.1 21.4-66.2-18.7-13.7-37.5-27.4-56.3-40.9z"
        fill="#fff"
      />
      <path
        className="prefix__st1"
        d="M372.2 0h2.8c1.5 1.3 3 2.9 3.1 5.1 10.1 54.6 20.4 109.2 30.5 163.9.9 2.8-.7 6-3.7 6.4-20.6 3.7-40.7 10.6-59 20.7-30.6 16.7-56.5 41.9-73.8 72.2-1.1 1.9-2.5 4.1-5 4-3.3-.7-6.1-2.9-9-4.4-46.2-26.8-92.4-53.6-138.5-80.4-1.9-1.1-3.9-3-3.3-5.4 1.1-3.5 3.4-6.4 5.2-9.6C157.3 112.8 210.7 63.9 273 33c31.3-15.6 64.8-26.6 99.2-33zM465.2 41.3c50.9-1.3 102.1 8.1 149.2 27.3 36.3 14.8 70.2 35.4 100.1 60.8 1.7 1.5 3.5 2.8 4.9 4.5 1.3 2.1.5 4.8-1.2 6.4-36.4 41.9-72.8 83.9-109.1 125.9-1.1 1.2-2.4 2.6-4.2 2.6-2.3.1-3.9-1.8-5.5-3-41.2-35.9-98.5-52.5-152.5-44.1-2 .2-4.4 1-6.2-.4-1.5-.9-1.9-2.6-2.1-4.2L415.2 59.3c-.4-3-1.1-6-1.2-9.1-.1-2.3 1.9-4.2 4.1-4.4 15.6-2.7 31.3-4.1 47.1-4.5zM54.4 186.4c1.9-1.1 4-.5 5.8.5 49.2 26.4 98.5 52.8 147.7 79.2 3.1 1.4 3.1 5.5 1.2 8-26.5 48.1-30.4 107.9-10.3 159.1.7 2.1 2.2 4.5.9 6.7-1.2 2.3-4 2.7-6.1 3.7-51.1 19.6-102.2 39.3-153.3 59-2.2 1-5 .8-6.4-1.4-1.7-3.3-2.7-6.8-4.1-10.2C2.6 416.7.5 333.7 23.5 258.1c7.1-23.7 16.7-46.6 28.3-68.4.7-1.2 1.3-2.6 2.6-3.3zM707.4 195.5c1.9-1.2 4.3-.3 5.7 1.2 43.1 40.2 76.1 91 95.7 146.5 13 36.7 20 75.4 21.1 114.3v19.9c-.2 3.5-.2 7-.9 10.4-.9 2.5-3.8 3.1-6.1 2.9-55.7-2.8-111.4-5.3-167.1-8.1-3.4.1-5.3-3.5-4.6-6.5 3.2-54.6-18.8-110.1-58.6-147.7-1.6-1.6-3.6-3.1-4.2-5.3-.4-2.1 1.1-3.8 2.4-5.2 36.9-38.8 73.7-77.6 110.5-116.4 2-2.1 3.8-4.4 6.1-6zM389.6 284.8c39.9-5.4 81.8 7.7 111.5 35 26.1 23.5 42.8 57.1 45.4 92.2 3 35.2-8.3 71.4-30.7 98.8-22.5 27.9-56.1 46.5-91.8 50.6-39 4.9-79.9-7.9-109.1-34.2-26.5-23.3-43.5-57-46.4-92.1-2.8-31.1 5.3-63 22.6-88.9 22-33.4 58.9-56.5 98.5-61.4M301 351.7c4.9-3.8 10.6-6.5 16.2-9.1-6.4 13.5-9.6 28.6-8.1 43.5 12.1 5.7 24.5 10.9 36.5 16.8-13.1-2.4-26.1-5.2-39.2-7.8-10.2 11.3-16.7 25.6-19.5 40.5-2.9-5.3-5.7-10.6-7.6-16.4-1 29.4 8.6 59 26.7 82.2-1.7-5.6-2.5-11.4-3.3-17.1 10.8 10.3 24.3 17.9 38.8 21.2 9.4-9.8 18.2-20.1 27.7-29.7-6.3 11.9-13.2 23.4-19.7 35.2 7.6 13.1 19.2 23.7 32.4 30.8-5.7 1-11.5 2-17.4 2.1 27.5 9.8 58.3 9.8 85.8 0-5.8-.2-11.5-1.1-17.2-2.1 13.3-7.2 24.8-17.7 32.4-30.8-6.6-11.8-13.4-23.4-19.8-35.2 9.5 9.7 18.3 19.9 27.6 29.8 14.7-3.2 28.1-10.9 39-21.2-.8 5.7-1.6 11.5-3.3 17 18.1-23.1 27.6-52.7 26.6-82-1.8 5.7-4.6 11-7.5 16.2-2.9-14.8-9.3-29.1-19.5-40.3-13 2.6-26 5.5-39.1 7.8 12-5.9 24.3-11.2 36.5-16.8 1.5-14.9-1.7-30.1-8.1-43.5 5.6 2.7 11.2 5.3 16.1 9.1-16.8-24.9-42.4-43.7-71.4-51.8 5.2 3.5 9.4 8.2 13.9 12.5 0 .2-.1.7-.1.9l-1-.8c-14.5-2.1-29.7 0-43.1 5.8-1.6 13.2-2.9 26.4-4.6 39.5-2.1-13.1-3-26.4-4.8-39.5-13.8-6.1-29.3-7.8-44.2-5.9 4.3-4.5 8.6-9 13.7-12.6-29 7.9-54.7 26.8-71.4 51.7z"
      />
      <path
        className="prefix__st1"
        d="M407.5 363.8c18.8 13.6 37.5 27.3 56.4 40.8-7 22.1-14.4 44.1-21.4 66.2-23.2.1-46.5 0-69.7.1-7.2-22.1-14.4-44.2-21.5-66.3 18.7-13.6 37.5-27.2 56.2-40.8zM157.4 481.3c3.2-1.9 6.7.5 7.5 3.7 21.6 51.2 66.8 91.6 120 107.4 3.2.5 5.7 3.6 4.4 6.8-16.6 53.3-33.2 106.7-49.9 160-.6 3.3-4.2 5-7.2 3.6-42.1-12.8-81.8-33.3-116.7-60.2C65 663.9 24.7 612 0 553.3V551c1-1.7 2.5-3 4.4-3.7 51-21.9 101.9-44 153-66zM601.3 502.4c1.2-.2 2.5-.3 3.8-.1 55.3 4.4 110.7 8.6 166 13 3.1-.1 5.6 2.7 4.9 5.8-5 72.4-32.3 142.9-76.9 200-21.3 27.5-46.6 51.9-74.7 72.3-2.2 2-5.8 1.2-7.3-1.2-31.8-43.3-63.6-86.6-95.3-129.8-1.8-2.7-4.4-5-5.2-8.2-.5-2.9 2.3-4.6 4.3-6 44-32 72.8-83.7 76.9-137.8.2-3.1.2-7 3.5-8zM463.5 622.6c2.5-1.2 5.1.6 6.3 2.8 31 46.3 62.2 92.5 93.2 138.8 2.7 3.3-.2 7.2-3.5 8.5-70.5 47.5-157.8 69.3-242.4 60.7-21.5-2.1-42.9-6.1-63.8-12-2.8-.5-4.4-3.8-3.4-6.4 14.8-53.9 29.8-107.8 44.6-161.6.5-3.4 4.4-5 7.3-3.5 41.4 11.8 86.6 8.8 126.2-8 12.6-5.1 24.2-12 35.5-19.3z"
      />
    </svg>
  )
}

export default Logo
