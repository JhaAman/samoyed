import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const themes = [
  { name: "Dark" },
  { name: "Light" },
  // { name: "Emerald" },
  // { name: "Pink" },
];

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-between p-8 text-xl font-bold bg-th-background-secondary text-th-primary-dark">
      <span>
        The current theme is: <strong>{theme}</strong>
      </span>
      <div>
        <label htmlFor="theme-select" className="mr-2 sr-only">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="px-3 py-1 text-gray-800 bg-white border border-gray-800"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">Select Theme</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeSwitch;
