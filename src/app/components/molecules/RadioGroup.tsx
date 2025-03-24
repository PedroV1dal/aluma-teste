import { Radio } from "../atoms/Radio";

interface RadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const RadioGroup = ({
  label,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) => (
  <div className="space-y-2">
    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </span>
    <div className="flex gap-4">
      {options.map((option) => (
        <Radio
          key={option.value}
          id={`${name}-${option.value}`}
          name={name}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
        />
      ))}
    </div>
  </div>
);
