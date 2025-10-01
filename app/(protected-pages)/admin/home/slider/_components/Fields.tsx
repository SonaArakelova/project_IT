'use client';

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space, Switch, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import '@ant-design/v5-patch-for-react-19';

type SliderRow = {
  description: string;
  image: string;
  order: number;
  visible: boolean;
};

export function Fields() {
  const [selectedLang, setSelectedLang] = useState('en');

  // English
  const [rowsEn, setRowsEn] = useState<SliderRow[]>([
    {
      description: 'Welcome to our site!',
      image: '001.jpg',
      order: 1,
      visible: true,
    },
  ]);

  const addRowEn = () =>
    setRowsEn([...rowsEn,{ description: '', image: '', order: rowsEn.length + 1, visible: true },]);

  const updateRowEn = <K extends keyof SliderRow>(
    index: number,
    field: K,
    value: SliderRow[K]
  ) => {
    const newRows = [...rowsEn];
    newRows[index][field] = value;
    setRowsEn(newRows);
  };

  const deleteRowEn = (index: number) => {
    const deleted = rowsEn[index];
    console.log(`Deleted (EN) row ${index + 1}:`, deleted);
    const newRows = rowsEn.filter((_, i) => i !== index);
    const reOrdered = newRows.map((row, i) => ({ ...row, order: i + 1 }));
    setRowsEn(reOrdered);
  };

  const toggleVisibilityEn = (index: number) => {
    const newRows = [...rowsEn];
    newRows[index].visible = !newRows[index].visible;
    setRowsEn(newRows);
  };

  // Armenian
  const [rowsAm, setRowsAm] = useState<SliderRow[]>([
    {
      description: 'Բարի գալուստ մեր կայք։',
      image: '001.jpg',
      order: 1,
      visible: true,
    },
  ]);

  const addRowAm = () =>
    setRowsAm([...rowsAm,
      { description: '', image: '', order: rowsAm.length + 1, visible: true },
    ]);

  const updateRowAm = <K extends keyof SliderRow>(
    index: number,
    field: K,
    value: SliderRow[K]
  ) => {
    const newRows = [...rowsAm];
    newRows[index][field] = value;
    setRowsAm(newRows);
  };


  const deleteRowAm = (index: number) => {
    const deleted = rowsAm[index];
    console.log(`Deleted (AM) row ${index + 1}:`, deleted);
    const newRows = rowsAm.filter((_, i) => i !== index);
    const reOrdered = newRows.map((row, i) => ({ ...row, order: i + 1 }));
    setRowsAm(reOrdered);
  };

  const toggleVisibilityAm = (index: number) => {
    const newRows = [...rowsAm];
    newRows[index].visible = !newRows[index].visible;
    setRowsAm(newRows);
  };

  // Russian
  const [rowsRu, setRowsRu] = useState<SliderRow[]>([
    {
      description: 'Добро пожаловать на наш сайт!',
      image: '001.jpg',
      order: 1,
      visible: true,
    },
  ]);

  const addRowRu = () =>
    setRowsRu([ ...rowsRu,
      { description: '', image: '', order: rowsRu.length + 1, visible: true },
    ]);

  const updateRowRu = <K extends keyof SliderRow>(
    index: number,
    field: K,
    value: SliderRow[K]
  ) => {
    const newRows = [...rowsRu];
    newRows[index][field] = value;
    setRowsRu(newRows);
  };

  const deleteRowRu = (index: number) => {
    const deleted = rowsRu[index];
    console.log(`Deleted (RU) row ${index + 1}:`, deleted);
    const newRows = rowsRu.filter((_, i) => i !== index);
    const reOrdered = newRows.map((row, i) => ({ ...row, order: i + 1 }));
    setRowsRu(reOrdered);
  };

  const toggleVisibilityRu = (index: number) => {
    const newRows = [...rowsRu];
    newRows[index].visible = !newRows[index].visible;
    setRowsRu(newRows);
  };

  ///////

  const handleChange = (lang: string) => setSelectedLang(lang);

  const handleSave = (index: number) => {
    let row;
    if (selectedLang === 'en') row = rowsEn[index];
    else if (selectedLang === 'am') row = rowsAm[index];
    else if (selectedLang === 'ru') row = rowsRu[index];

    console.log(`Saving (${selectedLang.toUpperCase()}) row ${index + 1}:`, row);
  };
  const confirmDelete = (lang: string, index: number) => {
  Modal.confirm({
    title:
      lang === 'en'
        ? 'Are you sure you want to delete this row?'
        : lang === 'am'
        ? 'Վստա՞հ եք, որ ուզում եք ջնջել այս տողը։'
        : 'Вы уверены, что хотите удалить эту строку?',
    okText:
      lang === 'en' ? 'Yes, Delete' : lang === 'am' ? 'Այո, Ջնջել' : 'Да, удалить',
    cancelText: lang === 'en' ? 'Cancel' : lang === 'am' ? 'Չեղարկել' : 'Отмена',
    onOk() {
      if (lang === 'en') deleteRowEn(index);
      else if (lang === 'am') deleteRowAm(index);
      else if (lang === 'ru') deleteRowRu(index);
    },
  });
};


  const addRow = () => {
    if (selectedLang === 'en') addRowEn();
    else if (selectedLang === 'am') addRowAm();
    else if (selectedLang === 'ru') addRowRu();
  };



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
        <Button type="primary" onClick={addRow}>
          {selectedLang === 'en'
            ? 'Add Slide'
            : selectedLang === 'am'
            ? 'Ավելացնել սլայդ'
            : 'Добавить слайд'}
        </Button>
      </Space>

      {selectedLang === 'en' && (
        <Space direction="vertical" className="w-full">
          {rowsEn.map((row, index) => (
            <Row
              gutter={16}
              align="middle"
              key={index}
              style={{
                opacity: row.visible ? 1 : 0.5,
                boxShadow: row.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
              }}
            >
              <Col span={2}>
                <Input
                  type="number"
                  min={1}
                  value={row.order}
                  onChange={(e) =>
                    updateRowEn(index, 'order', Number(e.target.value))
                  }
                  title="Order"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <TextArea
                  value={row.description}
                  onChange={(e) =>
                    updateRowEn(index, 'description', e.target.value)
                  }
                  placeholder="Description"
                  disabled={!row.visible}
                  rows={1}  
                  //autoSize ?
                />
              </Col>
              <Col span={6}>
                <Input
                  value={row.image}
                  onChange={(e) => updateRowEn(index, 'image', e.target.value)}
                  placeholder="Image name e.g. 001.jpg"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button
                    type="primary"
                    onClick={() => handleSave(index)}
                    disabled={!row.visible}
                  >
                    Save
                  </Button>
                  <Button
                    danger
                    onClick={() => confirmDelete('en', index)}
                    disabled={!row.visible}
                  >
                    Delete
                  </Button>
                  <Switch
                    checked={row.visible}
                    onChange={() => toggleVisibilityEn(index)}
                    checkedChildren="Visible"
                    unCheckedChildren="Hidden"
                  />
                </Space>
              </Col>
            </Row>
          ))}
          {rowsEn.length === 0 && <div>No rows available</div>}
        </Space>
      )}

      {selectedLang === 'am' && (
        <Space direction="vertical" className="w-full">
          {rowsAm.map((row, index) => (
            <Row
              gutter={16}
              align="middle"
              key={index}
              style={{
                opacity: row.visible ? 1 : 0.5,
                boxShadow: row.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
              }}
            >
              <Col span={2}>
                <Input
                  type="number"
                  min={1}
                  value={row.order}
                  onChange={(e) =>
                    updateRowAm(index, 'order', Number(e.target.value))
                  }
                  title="Հերթ"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <TextArea
                  value={row.description}
                  onChange={(e) =>
                    updateRowAm(index, 'description', e.target.value)
                  }
                  placeholder="Նկարագրություն"
                  disabled={!row.visible}
                  rows={1} 
                />
              </Col>
              <Col span={6}>
                <Input
                  value={row.image}
                  onChange={(e) => updateRowAm(index, 'image', e.target.value)}
                  placeholder="Նկարի անուն օր. 001.jpg"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button
                    type="primary"
                    onClick={() => handleSave(index)}
                    disabled={!row.visible}
                  >
                    Պահպանել
                  </Button>
                  <Button
                    danger
                    onClick={() => confirmDelete('am', index)}
                    disabled={!row.visible}
                  >
                    Ջնջել
                  </Button>
                  <Switch
                    checked={row.visible}
                    onChange={() => toggleVisibilityAm(index)}
                    checkedChildren="Տեսանելի"
                    unCheckedChildren="Թաքնված"
                  />
                </Space>
              </Col>
            </Row>
          ))}
          {rowsAm.length === 0 && <div>Տողեր չկան</div>}
        </Space>
      )}

      {selectedLang === 'ru' && (
        <Space direction="vertical" className="w-full">
          {rowsRu.map((row, index) => (
            <Row
              gutter={16}
              align="middle"
              key={index}
              style={{
                opacity: row.visible ? 1 : 0.5,
                boxShadow: row.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
              }}
            >
              <Col span={2}>
                <Input
                  type="number"
                  min={1}
                  value={row.order}
                  onChange={(e) =>
                    updateRowRu(index, 'order', Number(e.target.value))
                  }
                  title="Порядок"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <TextArea
                  value={row.description}
                  onChange={(e) =>
                    updateRowRu(index, 'description', e.target.value)
                  }
                  placeholder="Описание"
                  disabled={!row.visible}
                  rows={1} 
                  //autoSize ?
                />
              </Col>
              <Col span={6}>
                <Input
                  value={row.image}
                  onChange={(e) => updateRowRu(index, 'image', e.target.value)}
                  placeholder="изображения напр. 001.jpg"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button
                    type="primary"
                    onClick={() => handleSave(index)}
                    disabled={!row.visible}
                  >
                    Сохранить
                  </Button>
                  <Button
                    danger
                    onClick={() => confirmDelete('ru', index)}
                    disabled={!row.visible}
                  >
                    Удалить
                  </Button>
                  <Switch
                    checked={row.visible}
                    onChange={() => toggleVisibilityRu(index)}
                    checkedChildren="Видимый"
                    unCheckedChildren="Скрыт"
                  />
                </Space>
              </Col>
            </Row>
          ))}
          {rowsRu.length === 0 && <div>Строк нет</div>}
        </Space>
      )}
    </Space>
    
  );
}
