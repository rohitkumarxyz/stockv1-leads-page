import React from 'react';

interface CitySelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const CitySelect: React.FC<CitySelectProps> = ({
  value,
  onChange,
  required = false,
  className = ""
}) => {
  const indianCities = [
    // Major Cities
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune',
    'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam',
    'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik',
    'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar', 'Varanasi',
    
    // State Capitals
    'Gandhinagar', 'Bhubaneswar', 'Raipur', 'Ranchi', 'Shimla', 'Dehradun', 'Gangtok',
    'Kohima', 'Imphal', 'Aizawl', 'Agartala', 'Shillong', 'Itanagar', 'Dispur',
    'Chandigarh', 'Puducherry', 'Kavaratti', 'Daman', 'Diu', 'Silvassa',
    
    // Other Important Cities
    'Surat', 'Amritsar', 'Allahabad', 'Howrah', 'Coimbatore', 'Madurai', 'Tiruchirappalli',
    'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukkudi', 'Tiruppur', 'Dindigul',
    'Thanjavur', 'Kumbakonam', 'Cuddalore', 'Kanchipuram', 'Karaikudi', 'Nagercoil',
    
    // North India
    'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Panchkula', 'Ambala', 'Karnal', 
    'Rohtak', 'Hisar', 'Sonipat', 'Gurgaon', 'Noida', 'Mathura', 'Vrindavan', 
    'Aligarh', 'Bareilly', 'Moradabad', 'Saharanpur', 'Muzaffarnagar', 'Haridwar', 
    'Rishikesh', 'Nainital', 'Almora', 'Pithoragarh', 'Haldwani', 'Rudrapur', 'Kashipur',
    
    // South India
    'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Gulbarga', 'Bellary', 'Tumkur', 
    'Shimoga', 'Davangere', 'Bijapur', 'Bidar', 'Raichur', 'Kolar', 'Kodaikanal',
    'Ooty', 'Coorg', 'Hampi', 'Badami', 'Pattadakal', 'Aihole',
    
    // East India
    'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 
    'Kharagpur', 'Bishnupur', 'Bankura', 'Purulia', 'Cuttack', 'Rourkela', 'Berhampur', 
    'Sambalpur', 'Puri', 'Baleshwar', 'Baripada', 'Balangir', 'Koraput', 'Rayagada', 'Jharsuguda',
    
    // West India
    'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Sangli', 'Satara', 'Ratnagiri', 
    'Jalgaon', 'Akola', 'Latur', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Nadiad', 
    'Anand', 'Bharuch', 'Navsari', 'Valsad',
    
    // Central India
    'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa', 
    'Murwara', 'Singrauli', 'Chhindwara', 'Khandwa', 'Morena', 'Bhind', 'Guna', 
    'Shivpuri', 'Vidisha', 'Sehore', 'Raisen',
    
    // Northeast India
    'Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Nagaon', 'Tinsukia',
    'Kokrajhar', 'Bongaigaon', 'Goalpara', 'Barpeta', 'Nalbari', 'Kamrup', 'Darrang', 
    'Sonitpur', 'Lakhimpur', 'Dhemaji', 'Sivasagar', 'Golaghat', 'Karbi Anglong',
    'Dima Hasao', 'Cachar', 'Karimganj', 'Hailakandi',
    
    // Union Territories
    'New Delhi', 'Port Blair', 'Karaikal', 'Mahe', 'Yanam', 'Lakshadweep', 'Andaman and Nicobar Islands'
  ].sort();

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-sm appearance-none cursor-pointer ${className}`}
      >
        <option value="">Select your city</option>
        {indianCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default CitySelect;
