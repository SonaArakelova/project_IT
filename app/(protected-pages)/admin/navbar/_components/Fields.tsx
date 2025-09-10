// 'use client';

// import { useState } from 'react';
// import { Select } from 'antd';

// export function Fields() {
//   const [selectedLang, setSelectedLang] = useState('en');

//   const handleChange = (value: string) => {
//     setSelectedLang(value);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'flex-end', 
//           marginBottom: '1rem',
//         }}
//       >
//         <Select
//           defaultValue="en"
//           style={{ width: 120 }}
//           onChange={handleChange}
//           options={[
//             { value: 'am', label: 'Arm' },
//             { value: 'ru', label: 'Rus' },
//             { value: 'en', label: 'Eng' },
//           ]}
//         />
//       </div>

//       {selectedLang === 'en' && <div>English </div>}
//       {selectedLang === 'am' && <div>Armenian </div>}
//       {selectedLang === 'ru' && <div>Russian </div>}
//     </div>
//   );
// }






'use client';

import { useEffect, useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

type Lang = 'en' | 'am' | 'ru';

const translations: Record<Lang, { home: string; about: string; contact: string }> = {
  en: {
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
  },
  am: {
    home: 'Գլխավոր',
    about: 'Մեր մասին',
    contact: 'Կապ',
  },
  ru: {
    home: 'Главная',
    about: 'Онас',
    contact: 'Контакт',
  },
};

export function Fields() {
  const [selectedLang, setSelectedLang] = useState<Lang>('en');
  const [fields, setFields] = useState(translations[selectedLang]);

  // Update fields
  useEffect(() => {
    setFields(translations[selectedLang]);
  }, [selectedLang]);

  const handleChangeLang = (value: Lang) => {
    setSelectedLang(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Updated values for:', selectedLang, fields);

  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        <Select defaultValue="en" style={{ width: 120 }} onChange={handleChangeLang}>
          <Option value="en">English</Option>
          <Option value="am">Armenian</Option>
          <Option value="ru">Russian</Option>
        </Select>
      </div>

      <h2> Edit Navbar for {selectedLang.toUpperCase()} Language.</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        style={{
          marginTop: '10px',
          backgroundColor: '#f9f9f9',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <label style={{ display: 'block', marginBottom: '8px' }}>
          Home
          <input
            type="text"
            name="home"
            value={fields.home}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',      
              borderRadius: '4px',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          About
          <input
            type="text"
            name="about"
            value={fields.about}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',      
              borderRadius: '4px',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Contact
          <input
            type="text"
            name="contact"
            value={fields.contact}
            onChange={handleInputChange}
            style={{
              border: '1px solid #ccc',      
              borderRadius: '4px',
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              boxSizing: 'border-box',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            marginTop: '16px',
            padding: '10px 16px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
