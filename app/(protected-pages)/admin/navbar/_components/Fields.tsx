'use client'

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space } from 'antd';
import '@ant-design/v5-patch-for-react-19';


type NavRow = {
  label: string;
  url: string;
  order: number;
};


export function Fields() {
  const [selectedLang, setSelectedLang] = useState('en');


  // English 
  const [rowsEn, setRowsEn] = useState<NavRow[]>([
    { label: 'Programs', url: '/programs', order: 1 },
    { label: 'About', url: '/about', order: 2 },
    { label: 'Contact', url: '/contact', order: 3 },
  ]);
  const addRowEn = () => setRowsEn([...rowsEn, { label: '', url: '', order: rowsEn.length + 1 }]);
  const updateRowEn = <K extends keyof NavRow>(
    index: number,
    field: K,
    value: NavRow[K]
  ) => {
    const newRows = [...rowsEn];
    newRows[index][field] = value;
    setRowsEn(newRows);
  };
  const deleteRowEn = (index: number) => {
    const newRows = rowsEn.filter((_, i) => i !== index);
    const reOrdered = newRows.map((row, i) => ({ ...row, order: i + 1 }));
    setRowsEn(reOrdered);
  };


  // Armenian 
  const [rowsAm, setRowsAm] = useState<NavRow[]>([
    { label: 'Ծրագրեր', url: '/programs', order: 1 },
    { label: 'Մեր մասին', url: '/about', order: 2 },
    { label: 'Կապ', url: '/contact', order: 3 },
  ]);

  const addRowAm = () => setRowsAm([...rowsEn, { label: '', url: '', order: rowsAm.length + 1 }]);
  const deleteRowAm = (index: number) => {
    const newRows = rowsAm.filter((_, i) => i !== index);
    const reOrdered = newRows.map((row, i) => ({ ...row, order: i + 1 }));
    setRowsAm(reOrdered);
  };
  const updateRowAm = <K extends keyof NavRow>(
    index: number,
    field: K,
    value: NavRow[K]
  ) => {
    const newRows = [...rowsAm];
    newRows[index][field] = value;
    setRowsAm(newRows);
  };


  // Russian 
  const [rowsRu, setRowsRu] = useState<NavRow[]>([
    { label: 'Программы', url: '/programs', order: 1 },
    { label: 'О нас', url: '/about', order: 2 },
    { label: 'Контакты', url: '/contact', order: 3 },
  ]);

  const addRowRu = () => {
    const nextOrder = rowsRu.length + 1;
    setRowsRu([...rowsRu, { label: '', url: '', order: nextOrder }]);
  };

  const deleteRowRu = (index: number) => {
    const filtered = rowsRu.filter((_, i) => i !== index);
    const reOrdered = filtered.map((row, i) => ({ ...row, order: i + 1 }));
    setRowsRu(reOrdered);
  };

  const updateRowRu = <K extends keyof NavRow>(
    index: number,
    field: K,
    value: NavRow[K]
  ) => {
    const newRows = [...rowsRu];
    newRows[index][field] = value;
    setRowsRu(newRows);
  };


  ////
  const handleChange = (value: string) => {
    setSelectedLang(value);
  };

  const handleSave = (index: number) => {
    let row;
    if (selectedLang === 'en') {
      row = rowsEn[index];
    } else if (selectedLang === 'am') {
      row = rowsAm[index];
    } else if (selectedLang === 'ru') {
      row = rowsRu[index];
    }

    console.log(`Saving row ${index + 1}:`, row);
  };


  const addRow = () => {
    if (selectedLang === 'en') addRowEn();
    else if (selectedLang === 'am') addRowAm();
    else if (selectedLang === 'ru') addRowRu();
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
        <Button type="primary" onClick={addRow}>
          {selectedLang === 'en'
            ? 'Add Row'
            : selectedLang === 'am'
              ? 'Ավելացնել տող'
              : 'Добавить строку'}
        </Button>
      </Space>

      {selectedLang === 'en' && (
        <Space direction="vertical" className="w-full">
          {rowsEn.map((row, index) => (
            <Row gutter={16} align="middle" key={index}>
             <Col span={4}>
                <Input
                  type="number"
                  min={1}
                  step={1}
                  value={row.order}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val >= 1) {
                      updateRowEn(index, 'order', val);
                    }
                  }} placeholder="Order"
                />
              </Col>

              <Col span={6}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowEn(index, 'label', e.target.value)}
                  placeholder="Label"
                />
              </Col>
              <Col span={6}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowEn(index, 'url', e.target.value)}
                  placeholder="URL"
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary" onClick={() => handleSave(index)}>Save</Button>
                  <Button
                    danger
                    onClick={() => deleteRowEn(index)}
                  > Delete
                  </Button>
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
            <Row gutter={16} align="middle" key={index}>
                <Col span={4}>
                <Input
                  type="number"
                  value={row.order}
                  onChange={(e) => updateRowAm(index, 'order', Number(e.target.value))}
                  placeholder="Հերթականություն"
                />
              </Col>

              <Col span={6}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowAm(index, 'label', e.target.value)}
                  placeholder="Պիտակ"
                />
              </Col>
              <Col span={6}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowAm(index, 'url', e.target.value)}
                  placeholder="Հասցե"
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary" onClick={() => handleSave(index)}>Պահպանել</Button>
                  <Button danger onClick={() => deleteRowAm(index)} >
                    Ջնջել
                  </Button>


                </Space>
              </Col>
            </Row>
          ))}

          {rowsAm.length === 0 && <div>No rows available</div>}
        </Space>
      )}

      {selectedLang === 'ru' && (
        <Space direction="vertical" className="w-full">
          {rowsRu.map((row, index) => (
            <Row gutter={16} align="middle" key={index}>
                 <Col span={4}>
                <Input
                  type="number"
                  min={1}
                  step={1}
                  value={row.order}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val >= 1) {
                      updateRowRu(index, 'order', val);
                    }
                  }}
                  placeholder="Порядок"
                />
              </Col>

              <Col span={6}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowRu(index, 'label', e.target.value)}
                  placeholder="Метка"
                />
              </Col>
              <Col span={6}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowRu(index, 'url', e.target.value)}
                  placeholder="Ссылка"
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary" onClick={() => handleSave(index)}>Сохранить</Button>
                  <Button danger onClick={() => deleteRowRu(index)} >
                    Удалить
                  </Button>
                </Space>
              </Col>
            </Row>
          ))}
          {rowsRu.length === 0 && <div> No rows available</div>}
        </Space>
      )}

    </Space>
  );
}









