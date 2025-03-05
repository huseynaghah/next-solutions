import type {Metadata} from 'next';
import RootLayoutComponent from '@/core/layouts/root/root.layout';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import '@/assets/styles/style.scss';
import './page.style.scss';


export const metadata: Metadata = {
    title: 'Next Solution',
    description: 'İdeyalarınızı Rəqəmsal Həllərə Çeviririk!',
};

export default function Layout({
                                   children
                               }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang='en'>
        <body className={'layout'}>
        <AntdRegistry>
            <RootLayoutComponent>
                {children}
            </RootLayoutComponent>
        </AntdRegistry>

        </body>
        </html>
    );
}
