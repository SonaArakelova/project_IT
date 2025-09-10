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
import { Select, Input, Form } from 'antd';

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
    about: 'О нас',
    contact: 'Контакт',
  },
};

export function Fields() {

  const [selectedLang, setSelectedLang] = useState<Lang>('en');
  const [form] = Form.useForm();

  // Update form values when we change lang.
  useEffect(() => {
    form.setFieldsValue(translations[selectedLang]);
  }, [selectedLang, form]);

  const handleChange = (value: Lang) => {
    setSelectedLang(value);
  };



  return (
    <div style={{ padding: '24px' }}>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        <Select defaultValue="en" style={{ width: 120 }} onChange={handleChange}>
          <Option value="en">English</Option>
          <Option value="am">Armenian</Option>
          <Option value="ru">Russian</Option>
        </Select>
      </div>

      <h2> Edit Navbar for  {selectedLang.toUpperCase()} Language.</h2>

      <Form
        form={form}
        layout="vertical"
        initialValues={translations[selectedLang]}
        onFinish={(values) => {
          console.log('Updated values for:', selectedLang, values);
        }}
        style={{
            marginTop:'10px',
            backgroundColor: '#f9f9f9',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Form.Item label="Home " name="home">
          <Input />
        </Form.Item>

        <Form.Item label="About " name="about">
          <Input />
        </Form.Item>

        <Form.Item label="Contact " name="contact">
          <Input />
        </Form.Item>

        <Form.Item>
          <button type="submit">Save</button>
        </Form.Item>
      </Form>
    </div>
  );
}
