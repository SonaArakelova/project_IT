'use client'

import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, Space , Switch} from 'antd';
import '@ant-design/v5-patch-for-react-19';


type NavRow = {
  label: string;
  url: string;
  order: number;
 visible: boolean;
};


export function Fields() {
  const [selectedLang, setSelectedLang] = useState('en');


  // English 
  const [rowsEn, setRowsEn] = useState<NavRow[]>([
    { label: 'Programs', url: '/programs', order: 1, visible: true  },
    { label: 'About', url: '/about', order: 2 , visible: true },
    { label: 'Contact', url: '/contact', order: 3, visible: true  },
  ]);

  const addRowEn = () => setRowsEn([...rowsEn, { label: '', url: '', order: rowsEn.length + 1, visible: true }]);
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
  const deletedRow = rowsEn[index];
  console.log(`Deleted (EN) row ${index + 1}:`, deletedRow);

  const newRows = rowsEn.filter((_, i) => i !== index);
  const reOrdered = newRows.map((row, i) => ({ ...row, order: i + 1 }));
  setRowsEn(reOrdered);
};
  const toggleVisibilityEn = (index: number) => {
  const updated = [...rowsEn];
  updated[index].visible = !updated[index].visible;
  setRowsEn(updated);
 };

  // Armenian 
  const [rowsAm, setRowsAm] = useState<NavRow[]>([
    { label: 'Ծրագրեր', url: '/programs', order: 1, visible: true  },
    { label: 'Մեր մասին', url: '/about', order: 2 , visible: true },
    { label: 'Կապ', url: '/contact', order: 3 , visible: true },
  ]);

  const addRowAm = () => setRowsAm([...rowsEn, { label: '', url: '', order: rowsAm.length + 1, visible: true }]);
  const deleteRowAm = (index: number) => {
  const deletedRow = rowsAm[index];
  console.log(`Deleted (AM) row ${index + 1}:`, deletedRow);

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

  const toggleVisibilityAm = (index: number) => {
  const updated = [...rowsAm];
  updated[index].visible = !updated[index].visible;
  setRowsAm(updated);
};


  // Russian 
  const [rowsRu, setRowsRu] = useState<NavRow[]>([
    { label: 'Программы', url: '/programs', order: 1, visible: true  },
    { label: 'О нас', url: '/about', order: 2, visible: true  },
    { label: 'Контакты', url: '/contact', order: 3, visible: true  },
  ]);

  const addRowRu = () => {
    const nextOrder = rowsRu.length + 1;
    setRowsRu([...rowsRu, { label: '', url: '', order: nextOrder, visible: true }]);
  };

  const deleteRowRu = (index: number) => {
  const deletedRow = rowsRu[index];
  console.log(`Deleted (RU) row ${index + 1}:`, deletedRow);

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

  const toggleVisibilityRu = (index: number) => {
  const updated = [...rowsRu];
  updated[index].visible = !updated[index].visible;
  setRowsRu(updated);
};


  /////////
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
            <Row gutter={16} 
            align="middle" 
            key={index}
            style={{opacity: row.visible ? 1 : 0.5,boxShadow: row.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
              }}
              >
             <Col span={2}>
                <Input
                  type="number"
                  min={1}
                  step={1}
                  title="Order"
                  value={row.order}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val >= 1) {
                      updateRowEn(index, 'order', val);
                    }
                  }} 
                  disabled={!row.visible}
                  placeholder="Order"
                />
              </Col>

              <Col span={7}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowEn(index, 'label', e.target.value)}
                  placeholder="Label"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={7}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowEn(index, 'url', e.target.value)}
                  placeholder="URL"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button 
                  type="primary" 
                  onClick={() => handleSave(index)}
                  disabled={!row.visible}>Save</Button>
                  <Button
                    danger
                    onClick={() => deleteRowEn(index)}
                    disabled={!row.visible}
                  > Delete
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
            <Row gutter={16} 
            align="middle" 
            key={index}
            style={{opacity: row.visible ? 1 : 0.5,boxShadow: row.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
              }}

            >
                <Col span={2}>
                <Input
                  type="number"
                  value={row.order}
                  onChange={(e) => updateRowAm(index, 'order', Number(e.target.value))}
                  disabled={!row.visible}
                  title="Հերթականություն"
                />
              </Col>

              <Col span={7}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowAm(index, 'label', e.target.value)}
                  placeholder="Պիտակ"
                  disabled={!row.visible}

                />
              </Col>
              <Col span={7}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowAm(index, 'url', e.target.value)}
                  placeholder="Հասցե"
                  disabled={!row.visible}

                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary" 
                  onClick={() => handleSave(index)} 
                  disabled={!row.visible}
                    >Պահպանել
                    </Button>
                  <Button danger 
                  onClick={() => deleteRowAm(index)}
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

          {rowsAm.length === 0 && <div>No rows available</div>}
        </Space>
      )}

      {selectedLang === 'ru' && (
        <Space direction="vertical" className="w-full">
          {rowsRu.map((row, index) => (
            <Row gutter={16} align="middle" key={index}
             style={{opacity: row.visible ? 1 : 0.5,boxShadow: row.visible ? 'none' : '0 0 5px rgba(0,0,0,0.2)',
              }}
            >
                 <Col span={2}>
                <Input
                  type="number"
                  min={1}
                  step={1}
                  title= "Порядок"
                  value={row.order}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val >= 1) {
                      updateRowRu(index, 'order', val);
                    }
                  }}
                    disabled={!row.visible}
                  placeholder="Порядок"
                />
              </Col>

              <Col span={7}>
                <Input
                  value={row.label}
                  onChange={(e) => updateRowRu(index, 'label', e.target.value)}
                  placeholder="Метка"
                  disabled={!row.visible}

                />
              </Col>
              <Col span={7}>
                <Input
                  value={row.url}
                  onChange={(e) => updateRowRu(index, 'url', e.target.value)}
                  placeholder="Ссылка"
                  disabled={!row.visible}
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button type="primary" 
                  onClick={() => handleSave(index)}
                  disabled={!row.visible}
                  >Сохранить</Button>
                  <Button danger 
                  onClick={() => deleteRowRu(index)} 
                  disabled={!row.visible}>
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
          {rowsRu.length === 0 && <div> No rows available</div>}
        </Space>
      )}

    </Space>
  );
}



