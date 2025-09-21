'use client';

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


import {
  ToolOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const iconOptions = [
  { label: 'ToolOutlined', value: 'ToolOutlined', icon: <ToolOutlined /> },
  { label: 'AppstoreOutlined', value: 'AppstoreOutlined', icon: <AppstoreOutlined /> },
  { label: 'SettingOutlined', value: 'SettingOutlined', icon: <SettingOutlined /> },
  { label: 'UserOutlined', value: 'UserOutlined', icon: <UserOutlined /> },
  { label: 'HomeOutlined', value: 'HomeOutlined', icon: <HomeOutlined /> },
];


export function List() {
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

  const getServices = () => {
    if (selectedLang === 'en') return servicesEn;
    if (selectedLang === 'am') return servicesAm;
    return servicesRu;
  };

  const handleChange = (value: string) => setSelectedLang(value);

  return (
    <Space className="w-full" direction="vertical">
      <Space style={{ marginBottom: 16 }}>
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

      <Space direction="vertical" className="w-full">
        {getServices().map((service, index) => (
          <Row gutter={16} align="middle" key={index}>
            <Col span={6}>
              <Tooltip title={service.description}>
                <Input
                  placeholder={
                    selectedLang === 'en'
                      ? 'Description'
                      : selectedLang === 'am'
                      ? 'Նկարագրություն'
                      : 'Описание'
                  }
                  value={service.description}
                  onChange={(e) =>
                    updateService(index, 'description', e.target.value)
                  }
                />
              </Tooltip>
            </Col>
            <Col span={6}>
              <Select
                showSearch
                placeholder={
                  selectedLang === 'en'
                    ? 'Select Icon'
                    : selectedLang === 'am'
                    ? 'Ընտրել Icon'
                    : 'Выберите иконку'
                }
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
            <Col span={4}>
              <Input
                placeholder={
                  selectedLang === 'en'
                    ? 'Order'
                    : selectedLang === 'am'
                    ? 'Հերթականություն'
                    : 'Порядок'
                }
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
              />
            </Col>
            <Col span={8}>
              <Space>
                <Button type="primary">
                  {selectedLang === 'en'
                    ? 'Save'
                    : selectedLang === 'am'
                    ? 'Պահպանել'
                    : 'Сохранить'}
                </Button>
                <Button
                  danger
                  onClick={() => deleteService(index)}
                  icon={<CloseOutlined />}
                />
              </Space>
            </Col>
          </Row>
        ))}

        {getServices().length === 0 && (
          <div style={{ padding: '12px' }}>
            {selectedLang === 'en'
              ? 'No services available'
              : selectedLang === 'am'
              ? 'Ծառայություններ չկան'
              : 'Нет доступных услуг'}
          </div>
        )}
      </Space>
    </Space>
  );
}
