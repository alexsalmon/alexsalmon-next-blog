import { ReactNode } from 'react';
import { NavigationBar } from '../navigation/NavigationBar';

type BodyProps = {
    children: ReactNode;
};

const Body = (props: BodyProps) => (
    <>
        <NavigationBar />

        <div className="layout antialiased">
            <div>{props.children}</div>
        </div>
    </>
);

export { Body };
