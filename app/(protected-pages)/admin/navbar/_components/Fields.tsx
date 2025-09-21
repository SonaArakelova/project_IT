'use client'

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export function Fields() {
  const [selectedLang, setSelectedLang] = useState('en');

  // English 
  const [rowsEn, setRowsEn] = useState([
    { label: 'Programs', url: '/programs' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ]);
  const addRowEn = () => setRowsEn([...rowsEn, { label: '', url: '' }]);
  const deleteRowEn = (index: number) => setRowsEn(rowsEn.filter((_, i) => i !== index));
  const updateRowEn = (index: number, field: 'label' | 'url', value: string) => {
    const newRows = [...rowsEn];
    newRows[index][field] = value;
    setRowsEn(newRows);
  };
  const moveRowEn = (index: number, direction: 'up' | 'down') => {
    const newRows = [...rowsEn];
    if (direction === 'up' && index > 0) {
      [newRows[index - 1], newRows[index]] = [newRows[index], newRows[index - 1]];
      setRowsEn(newRows);
    } else if (direction === 'down' && index < newRows.length - 1) {
      [newRows[index + 1], newRows[index]] = [newRows[index], newRows[index + 1]];
      setRowsEn(newRows);
    }
  };

  // Armenian 
  const [rowsAm, setRowsAm] = useState([
    { label: 'Ծրագրեր', url: '/programs' },
    { label: 'Մեր մասին', url: '/about' },
    { label: 'Կապ', url: '/contact' },
  ]);
  const addRowAm = () => setRowsAm([...rowsAm, { label: '', url: '' }]);
  const deleteRowAm = (index: number) => setRowsAm(rowsAm.filter((_, i) => i !== index));
  const updateRowAm = (index: number, field: 'label' | 'url', value: string) => {
    const newRows = [...rowsAm];
    newRows[index][field] = value;
    setRowsAm(newRows);
  };
  const moveRowAm = (index: number, direction: 'up' | 'down') => {
    const newRows = [...rowsAm];
    if (direction === 'up' && index > 0) {
      [newRows[index - 1], newRows[index]] = [newRows[index], newRows[index - 1]];
      setRowsAm(newRows);
    } else if (direction === 'down' && index < newRows.length - 1) {
      [newRows[index + 1], newRows[index]] = [newRows[index], newRows[index + 1]];
      setRowsAm(newRows);
    }
  };

  // Russian 
  const [rowsRu, setRowsRu] = useState([
    { label: 'Программы', url: '/programs' },
    { label: 'О нас', url: '/about' },
    { label: 'Контакты', url: '/contact' },
  ]);
  const addRowRu = () => setRowsRu([...rowsRu, { label: '', url: '' }]);
  const deleteRowRu = (index: number) => setRowsRu(rowsRu.filter((_, i) => i !== index));
  const updateRowRu = (index: number, field: 'label' | 'url', value: string) => {
    const newRows = [...rowsRu];
    newRows[index][field] = value;
    setRowsRu(newRows);
  };
  const moveRowRu = (index: number, direction: 'up' | 'down') => {
    const newRows = [...rowsRu];
    if (direction === 'up' && index > 0) {
      [newRows[index - 1], newRows[index]] = [newRows[index], newRows[index - 1]];
      setRowsRu(newRows);
    } else if (direction === 'down' && index < newRows.length - 1) {
      [newRows[index + 1], newRows[index]] = [newRows[index], newRows[index + 1]];
      setRowsRu(newRows);
    }
  };

  const handleChange = (value: string) => {
    setSelectedLang(value);
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
              <Col span={8}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowEn(index, 'label', e.target.value)}
                />
              </Col>
              <Col span={8}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowEn(index, 'url', e.target.value)}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary">Save</Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => moveRowEn(index, 'up')}
                  >
                    ⬆️
                  </Button>
                  <Button
                    disabled={index === rowsEn.length - 1}
                    onClick={() => moveRowEn(index, 'down')}
                  >
                    ⬇️
                  </Button>
                  <Button danger onClick={() => deleteRowEn(index)} icon={<CloseOutlined />} />
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
              <Col span={8}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowAm(index, 'label', e.target.value)}
                />
              </Col>
              <Col span={8}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowAm(index, 'url', e.target.value)}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary">Պահպանել</Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => moveRowAm(index, 'up')}
                  >
                    ⬆️
                  </Button>
                  <Button
                    disabled={index === rowsAm.length - 1}
                    onClick={() => moveRowAm(index, 'down')}
                  >
                    ⬇️
                  </Button>
                  <Button danger onClick={() => deleteRowAm(index)} icon={<CloseOutlined />} />
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
              <Col span={8}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowRu(index, 'label', e.target.value)}
                />
              </Col>
              <Col span={8}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowRu(index, 'url', e.target.value)}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary">Сохранить</Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => moveRowRu(index, 'up')}
                  >
                    ⬆️
                  </Button>
                  <Button
                    disabled={index === rowsRu.length - 1}
                    onClick={() => moveRowRu(index, 'down')}
                  >
                    ⬇️
                  </Button>
                  <Button danger onClick={() => deleteRowRu(index)} icon={<CloseOutlined />} />
                </Space>
              </Col>
            </Row>
          ))}
          {rowsRu.length === 0 && <div>No rows available</div>}
        </Space>
      )}
    </Space>
  );
}









