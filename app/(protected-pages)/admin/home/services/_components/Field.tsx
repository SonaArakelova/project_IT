
'use client';

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space, Tooltip } from 'antd';
import {
  ToolOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import '@ant-design/v5-patch-for-react-19';


const iconOptions = [
  { label: 'ToolOutlined', value: 'ToolOutlined', icon: <ToolOutlined /> },
  { label: 'AppstoreOutlined', value: 'AppstoreOutlined', icon: <AppstoreOutlined /> },
  { label: 'SettingOutlined', value: 'SettingOutlined', icon: <SettingOutlined /> },
  { label: 'UserOutlined', value: 'UserOutlined', icon: <UserOutlined /> },
  { label: 'HomeOutlined', value: 'HomeOutlined', icon: <HomeOutlined /> },
];

export function Field() {
  const [selectedLang, setSelectedLang] = useState('en');

  const [servicesEn, setServicesEn] = useState([
    { description: '', icon: '', order: '' },
  ]);
  const [servicesAm, setServicesAm] = useState([
    { description: '', icon: '', order: '' },
  ]);
  const [servicesRu, setServicesRu] = useState([
    { description: '', icon: '', order: '' },
  ]);


  const addService = () => {
    const newService = { description: '', icon: '', order: '' };
    if (selectedLang === 'en') setServicesEn([...servicesEn, newService]);
    else if (selectedLang === 'am') setServicesAm([...servicesAm, newService]);
    else if (selectedLang === 'ru') setServicesRu([...servicesRu, newService]);
  };

  const deleteService = (index: number) => {
    if (selectedLang === 'en') setServicesEn(servicesEn.filter((_, i) => i !== index));
    else if (selectedLang === 'am') setServicesAm(servicesAm.filter((_, i) => i !== index));
    else if (selectedLang === 'ru') setServicesRu(servicesRu.filter((_, i) => i !== index));
  };

  const updateService = (
    index: number,
    field: 'description' | 'icon' | 'order',
    value: string
  ) => {
    const update = (arr: typeof servicesEn) => {
      const newArr = [...arr];
      newArr[index][field] = value;
      return newArr;
    };

    if (selectedLang === 'en') setServicesEn(update(servicesEn));
    else if (selectedLang === 'am') setServicesAm(update(servicesAm));
    else if (selectedLang === 'ru') setServicesRu(update(servicesRu));
  };

  const handleChange = (value: string) => setSelectedLang(value);


 const handleSave = (index: number) => {
  let service;
  if (selectedLang === 'en') {
    service = servicesEn[index];
  } else if (selectedLang === 'am') {
    service = servicesAm[index];
  } else if (selectedLang === 'ru') {
    service = servicesRu[index];
  }

  console.log(`Saving service ${index + 1} in language "${selectedLang}":`, service);
};


return (
  <Space className="w-full" direction="vertical">
    <Space style={{ marginBottom: 16 }} align="center">
      <Select
        defaultValue="en"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'en', label: 'English' },
          { value: 'am', label: 'Armenian' },
          { value: 'ru', label: 'Russian' },
        ]}
      />
      <Button type="primary" onClick={addService}>
        {selectedLang === 'en'
          ? 'Add Service'
          : selectedLang === 'am'
            ? 'Ավելացնել ծառայություն'
            : 'Добавить услугу'}
      </Button>
    </Space>

    {selectedLang === 'en' && (
      <Space direction="vertical" className="w-full">
        {servicesEn.map((service, index) => (
          <Row gutter={16} align="middle" key={index}>
             <Col span={4}>
              <Input
               type="number"
                min={1}
                placeholder="Order"
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
              />
            </Col>
            <Col span={6}>
            <Tooltip title={service.description}>
              <Input
                placeholder="Description"
                value={service.description}
                onChange={(e) => updateService(index, 'description', e.target.value)}
              />
              </Tooltip>
            </Col>
            <Col span={6}>
              <Select
                placeholder="Select Icon"
                style={{ width: '100%' }}
                value={service.icon || undefined}
                onChange={(value) => updateService(index, 'icon', value)}
                options={iconOptions.map((option) => ({
                  label: (
                    <Space>
                      {option.icon}
                      {option.label}
                    </Space>
                  ),
                  value: option.value,
                }))}
              />
            </Col>
           
            <Col span={8}>
              <Space>
               <Button type="primary" onClick={() => handleSave(index)}>Save</Button>
                
                <Button danger onClick={() => deleteService(index)}>Delete</Button>
              </Space>
            </Col>
          </Row>
        ))}

        {servicesEn.length === 0 && <div>No services available</div>}
      </Space>
    )}

    {selectedLang === 'am' && (
      <Space direction="vertical" className="w-full">
        {servicesAm.map((service, index) => (
          <Row gutter={16} align="middle" key={index}>
              <Col span={4}>
              <Input
               type="number"
                min={1}
                placeholder="Հերթականություն"
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
              />
            </Col>
            <Col span={6}>
              <Input
                placeholder="Նկարագրություն"
                value={service.description}
                onChange={(e) => updateService(index, 'description', e.target.value)}
              />
            </Col>
            <Col span={6}>
              <Select
                placeholder="Ընտրել Icon"
                style={{ width: '100%' }}
                value={service.icon || undefined}
                onChange={(value) => updateService(index, 'icon', value)}
                options={iconOptions.map((option) => ({
                  label: (
                    <Space>
                      {option.icon}
                      {option.label}
                    </Space>
                  ),
                  value: option.value,
                }))}
              />
            </Col>
          
            <Col span={8}>
              <Space>
                <Button type="primary" onClick={() => handleSave(index)}>Պահպանել</Button>
                <Button danger onClick={() => deleteService(index)}>Ջնջել</Button>
              </Space>
            </Col>
          </Row>
        ))}

        {servicesAm.length === 0 && <div>Ծառայություններ չկան</div>}
      </Space>
    )}

    {selectedLang === 'ru' && (
      <Space direction="vertical" className="w-full">
        {servicesRu.map((service, index) => (
          <Row gutter={16} align="middle" key={index}>
              <Col span={4}>
              <Input
               type="number"
                min={1}
                placeholder="Порядок"
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
              />
            </Col>
            <Col span={6}>
              <Input
                placeholder="Описание"
                value={service.description}
                onChange={(e) => updateService(index, 'description', e.target.value)}
              />
            </Col>
            <Col span={6}>
              <Select
                placeholder="Выберите иконку"
                style={{ width: '100%' }}
                value={service.icon || undefined}
                onChange={(value) => updateService(index, 'icon', value)}
                options={iconOptions.map((option) => ({
                  label: (
                    <Space>
                      {option.icon}
                      {option.label}
                    </Space>
                  ),
                  value: option.value,
                }))}
              />
            </Col>
    
            <Col span={8}>
              <Space>
         <Button type="primary" onClick={() => handleSave(index)}>Сохранить</Button>
                <Button danger onClick={() => deleteService(index)}>Удалить</Button>
              </Space>
            </Col>
          </Row>
        ))}

        {servicesRu.length === 0 && <div>Нет доступных услуг</div>}
      </Space>
    )}
  </Space>
);

}


