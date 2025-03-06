import type {Metadata} from 'next';
import RootLayoutComponent from '@/core/layouts/root/root.layout';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import '@/assets/styles/style.scss';
import './page.style.scss';
import Head from 'next/head';


export const metadata: Metadata = {
    title: 'Next Solution',
    description: 'İdeyalarınızı Rəqəmsal Həllərə Çeviririk!',
    icons: 'favicon.ico',
};

export default function Layout({
                                   children
                               }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang='en'>
        <body className={'layout'}>
        <Head>
            <link rel='icon' type='favicon' href='/favicon.ico' />
        </Head>
        <link rel='icon' href='./favicon.ico' sizes='any'/>
        <AntdRegistry>
            <RootLayoutComponent>
                {children}
            </RootLayoutComponent>
        </AntdRegistry>

        </body>
        </html>
    );
}
