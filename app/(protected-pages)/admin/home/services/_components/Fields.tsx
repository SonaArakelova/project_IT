
'use client';

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space, Switch, Modal } from 'antd';
import {
  SettingOutlined,
  ToolOutlined,
  AppstoreOutlined,
  EditOutlined,
  PlusOutlined,
  MinusOutlined,
  CheckOutlined,
  CameraOutlined,
  CalendarOutlined,
  BugOutlined,
  CodeOutlined,
  CloudOutlined,
  UploadOutlined,
  DownloadOutlined,
  LockOutlined,
  UnlockOutlined,
  PhoneOutlined,
  DashboardOutlined,
  StarOutlined,
  HeartOutlined,
  DesktopOutlined
} from '@ant-design/icons';
import '@ant-design/v5-patch-for-react-19';

const { TextArea } = Input;
const iconOptions = [
  { label: 'ToolOutlined', value: 'ToolOutlined', icon: <ToolOutlined /> },
  { label: 'DesktopOutlined', value: 'DesktopOutlined', icon: <DesktopOutlined /> },
  { label: 'AppstoreOutlined', value: 'AppstoreOutlined', icon: <AppstoreOutlined /> },
  { label: 'SettingOutlined', value: 'SettingOutlined', icon: <SettingOutlined /> },
  { label: 'PlusOutlined', value: 'PlusOutlined', icon: <PlusOutlined /> },
  { label: 'MinusOutlined', value: 'MinusOutlined', icon: <MinusOutlined /> },
  { label: 'CheckOutlined', value: 'CheckOutlined', icon: <CheckOutlined /> },
  { label: 'CalendarOutlined', value: 'CalendarOutlined', icon: <CalendarOutlined /> },
  { label: 'CameraOutlined', value: 'CameraOutlined', icon: <CameraOutlined /> },
  { label: 'CloudOutlined', value: 'CloudOutlined', icon: <CloudOutlined /> },
  { label: 'CodeOutlined', value: 'CodeOutlined', icon: <CodeOutlined /> },
  { label: 'BugOutlined', value: 'BugOutlined', icon: <BugOutlined /> },
  { label: 'UploadOutlined', value: 'UploadOutlined', icon: <UploadOutlined /> },
  { label: 'DownloadOutlined', value: 'DownloadOutlined', icon: <DownloadOutlined /> },
  { label: 'LockOutlined', value: 'LockOutlined', icon: <LockOutlined /> },
  { label: 'UnlockOutlined', value: 'UnlockOutlined', icon: <UnlockOutlined /> },
  { label: 'PhoneOutlined', value: 'PhoneOutlined', icon: <PhoneOutlined /> },
  { label: 'DashboardOutlined', value: 'DashboardOutlined', icon: <DashboardOutlined /> },
  { label: 'StarOutlined', value: 'StarOutlined', icon: <StarOutlined /> },
  { label: 'HeartOutlined', value: 'HeartOutlined', icon: <HeartOutlined /> },
  { label: 'EditOutlined', value: 'EditOutlined', icon: <EditOutlined /> },
];

export function Fields() {
  const [selectedLang, setSelectedLang] = useState('en');

  const [servicesEn, setServicesEn] = useState([
  {
    description: 'Implementation and maintenance of server systems of any complexity',
    icon: 'CodeOutlined',
    order: '1',
    visible: true
  },
  {
    description: 'Design, implementation, and maintenance of networks of any complexity',
    icon: 'EditOutlined',
    order: '2',
    visible: true
  },
  {
    description: 'Technical and software maintenance of computers',
    icon: 'DesktopOutlined',
    order: '3',
    visible: true
  }
]);

 const [servicesAm, setServicesAm] = useState([
  {
    description: 'Ցանկացած բարդության սերվերային համակարգերի ներդրում և սպասարկում',
    icon: 'CodeOutlined',
    order: '1',
    visible: true
  },
  {
    description: 'Ցանկացած բարդության ցանցերի նախագծում, ներդրում և սպասարկում',
    icon: 'EditOutlined',
    order: '2',
    visible: true
  },
  {
    description: 'Համակարգիչների տեխնիկական և ծրագրային սպասարկում',
    icon: 'DesktopOutlined',
    order: '3',
    visible: true
  }
]);

const [servicesRu, setServicesRu] = useState([
  {
    description: 'Внедрение и обслуживание серверных систем любой сложности',
    icon: 'CodeOutlined',
    order: '1',
    visible: true
  },
  {
    description: 'Проектирование, внедрение и обслуживание сетей любой сложности',
    icon: 'EditOutlined',
    order: '2',
    visible: true
  },
  {
    description: 'Техническое и программное обслуживание компьютеров',
    icon: 'DesktopOutlined',
    order: '3',
    visible: true
  }
]);



  const addService = () => {
    const newService = { description: '', icon: '', order: '', visible: true };
    if (selectedLang === 'en') setServicesEn([...servicesEn, newService]);
    else if (selectedLang === 'am') setServicesAm([...servicesAm, newService]);
    else if (selectedLang === 'ru') setServicesRu([...servicesRu, newService]);
  };

const deleteService = (index: number) => {
  let deleted;
  if (selectedLang === 'en') {
    deleted = servicesEn[index];
    console.log(`Deleted EN service at index ${index}:`, deleted);
    setServicesEn(servicesEn.filter((_, i) => i !== index));
  } else if (selectedLang === 'am') {
    deleted = servicesAm[index];
    console.log(`Deleted AM service at index ${index}:`, deleted);
    setServicesAm(servicesAm.filter((_, i) => i !== index));
  } else if (selectedLang === 'ru') {
    deleted = servicesRu[index];
    console.log(`Deleted RU service at index ${index}:`, deleted);
    setServicesRu(servicesRu.filter((_, i) => i !== index));
  }
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

const toggleVisibility = (index: number) => {
  const update = (arr: typeof servicesEn, setter: typeof setServicesEn) => {
    const newArr = [...arr];
    newArr[index].visible = !newArr[index].visible;
    setter(newArr);
  };

  if (selectedLang === 'en') update(servicesEn, setServicesEn);
  else if (selectedLang === 'am') update(servicesAm, setServicesAm);
  else if (selectedLang === 'ru') update(servicesRu, setServicesRu);
};


const confirmDeleteService = (
  lang: string,
  index: number,
  deleteFn: (index: number) => void
) => {
  Modal.confirm({
    title:
      lang === 'en'
        ? 'Are you sure you want to delete this service?'
        : lang === 'am'
        ? 'Վստա՞հ եք, որ ուզում եք ջնջել այս ծառայությունը։'
        : 'Вы уверены, что хотите удалить эту услугу?',
    okText:
      lang === 'en'
        ? 'Yes, Delete'
        : lang === 'am'
        ? 'Այո, Ջնջել'
        : 'Да, удалить',
    cancelText:
      lang === 'en'
        ? 'Cancel'
        : lang === 'am'
        ? 'Չեղարկել'
        : 'Отмена',
    onOk() {
      deleteFn(index);
    },
  });
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
          <Row gutter={16} align="middle" key={index}
          style={{
              opacity: service.visible ? 1 : 0.5,
              boxShadow: service.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
            }}>
             <Col span={2}>
              <Input
               type="number"
                min={1}
                title="Order"
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
                disabled={!service.visible}
              />
            </Col>
            <Col span={8}>
              <TextArea
                rows={1}
                placeholder="Description"
                value={service.description}
                onChange={(e) => updateService(index, 'description', e.target.value)}
                disabled={!service.visible}
              />
            </Col>
            <Col span={6}>
              <Select
                placeholder="Select Icon"
                style={{ width: '100%' }}
                value={service.icon || undefined}
                onChange={(value) => updateService(index, 'icon', value)}
                disabled={!service.visible}
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
               <Button type="primary" 
               onClick={() => handleSave(index)}
                disabled={!service.visible}
                >Save</Button>
                
                <Button danger 
                onClick={() => confirmDeleteService(selectedLang, index, deleteService)}
                  disabled={!service.visible}
                  >Delete</Button>
                <Switch
                  checked={service.visible}
                  onChange={() => toggleVisibility(index)}
                  checkedChildren="Visible"
                  unCheckedChildren="Hidden"
                />
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
          <Row gutter={16} align="middle" key={index}
          style={{
    opacity: service.visible ? 1 : 0.5,
    boxShadow: service.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
  }}>
              <Col span={2}>
              <Input
               type="number"
                min={1}
                title="Հերթականություն"
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
                disabled={!service.visible}
              />
            </Col>
            <Col span={8}>
               <TextArea
                rows={1}                
                placeholder="Նկարագրություն"
                value={service.description}
                onChange={(e) => updateService(index, 'description', e.target.value)}
                disabled={!service.visible}
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
                disabled={!service.visible}
              />
            </Col>
          
            <Col span={8}>
              <Space>
                <Button type="primary" 
                onClick={() => handleSave(index)}
                disabled={!service.visible}
                >Պահպանել</Button>
                <Button danger 
                onClick={() => confirmDeleteService(selectedLang, index, deleteService)}
                disabled={!service.visible}
                >Ջնջել</Button>
                <Switch
                  checked={service.visible}
                  onChange={() => toggleVisibility(index)}
                    checkedChildren="Տեսանելի"
                    unCheckedChildren="Թաքնված"
                 />
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
          <Row gutter={16} align="middle" key={index}
          style={{
    opacity: service.visible ? 1 : 0.5,
    boxShadow: service.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
  }}>
              <Col span={2}>
              <Input
               type="number"
                min={1}
                title="Порядок"
                value={service.order}
                onChange={(e) => updateService(index, 'order', e.target.value)}
                disabled={!service.visible}
              />
            </Col>
            <Col span={8}>
              <TextArea
                rows={1}                
                placeholder="Описание"
                value={service.description}
                onChange={(e) => updateService(index, 'description', e.target.value)}
                disabled={!service.visible}
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
                disabled={!service.visible}
              />
            </Col>
    
            <Col span={8}>
              <Space>
               <Button type="primary" 
               onClick={() => handleSave(index)}
               disabled={!service.visible}
               >Сохранить</Button>
                <Button danger 
                onClick={() => confirmDeleteService(selectedLang, index, deleteService)}
                disabled={!service.visible}
                >Удалить</Button>
                <Switch
                  checked={service.visible}
                  onChange={() => toggleVisibility(index)}
                    checkedChildren="Видимый"
                    unCheckedChildren="Скрыт"
                />
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


