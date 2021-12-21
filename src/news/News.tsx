import { ReactNode } from 'react';

type INewsProps = {
  title?: string;
  yPadding?: string;
  children: ReactNode;
};

const News = (props: INewsProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {props.title && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { News };
