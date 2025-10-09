import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  required = false,
  className = ""
}) => {
  // Extract only the digits after +91 for display
  const displayValue = value.startsWith('+91') ? value.substring(3) : value;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    // Remove any non-digit characters
    inputValue = inputValue.replace(/[^\d]/g, '');
    
    // Limit to 10 digits (Indian mobile number)
    if (inputValue.length <= 10) {
      // Always store with +91 prefix
      const fullValue = '+91' + inputValue;
      onChange(fullValue);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="text-lg">🇮🇳</span>
          <span className="text-gray-500 font-medium">+91</span>
        </div>
      </div>
      <input
        type="tel"
        value={displayValue}
        onChange={handleChange}
        placeholder="Enter 10-digit mobile number"
        required={required}
        className={`w-full pl-16 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-sm ${className}`}
      />
    </div>
  );
};

export default PhoneInput;
