'use client';

import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DesktopOutlined,
  CustomerServiceOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Spin } from 'antd';
import '@ant-design/v5-patch-for-react-19';


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Welcome', ''),
  getItem(<Link href="/admin/dashboard">Dashboard</Link>, '/admin/dashboard', <PieChartOutlined />),
  getItem(<Link href="/admin/navbar">Navbar</Link>, '/admin/navbar', <DesktopOutlined />),

  getItem('Home Page', 'sub1', <UserOutlined />, [
    getItem(<Link href="/admin/home/services">Services</Link>, '/admin/home/services', <CustomerServiceOutlined />),

    getItem(<Link href="/admin/home/slider">Slider</Link>, '/admin/home/slider'),
    getItem(<Link href="/admin/home/top-products">Top Products</Link>, '/admin/home/top-products'),
    getItem(<Link href="/admin/home/alex">Alex</Link>, '/admin/home/alex'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem(<Link href="/admin/team/team1">Team 1</Link>, '/admin/team/team1'),
    getItem(<Link href="/admin/team/team2">Team 2</Link>, '/admin/team/team2'),
  ]),
  getItem(<Link href="/admin/files">Files</Link>, '/admin/files', <FileOutlined />),
];

export function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();



  const [mounted, setMounted]= useState(false);

  useEffect(()=>{
    setMounted(true)
  },[]);

 if (!mounted) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '1rem',
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
          }}
        >
          <button>Log Out</button>
        </Header>
        <Content style={{ margin: '0 16px',  }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: 'Admin' }, { title: pathname.split('/').pop() || '' }]}
          />
          <div
            style={{
              padding: 24,
              height: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React ©{new Date().getFullYear()} Created by ...
        </Footer>
      </Layout>
    </Layout>
  );
}

























// 'use client'


// import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';

// const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Dashboard', '1', <PieChartOutlined />),
//   getItem('Navbar', '2', <DesktopOutlined />),
//   getItem('Home page', 'sub1', <UserOutlined />, [
//     getItem('Slider', '3'),
//     getItem('Top products', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

// export  function ProtectedLayout({children,}: Readonly<{children: React.ReactNode;}>) {  const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: '1rem', background: colorBgContainer, display:'flex', justifyContent:'right', alignItems:'center' }} >
//             <button>Log Out</button>
//         </Header>
//         <Content style={{ margin: '0 16px' }}>
//           <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             {children}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           Ant Design ©{new Date().getFullYear()} Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };



// // export  function ProtectedLayout({children,}: Readonly<{children: React.ReactNode;}>) {
// //   return (
// //     <div>ProtectedLayout
// //         {children}</div>
// //   )
// // }

