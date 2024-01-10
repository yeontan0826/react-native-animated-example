import {ReactNode} from 'react';
import {View, ViewProps} from 'react-native';

interface IGapViewProps extends ViewProps {
  gap?: number;
  horizontal?: boolean;
}

const GapView = ({
  children,
  gap = 0,
  horizontal,
  ...viewProps
}: IGapViewProps) => {
  if (!Array.isArray(children)) {
    return children;
  }

  const childrenFilter = children.filter(child => child !== false);

  return (
    <View {...viewProps}>
      {Array.isArray(children)
        ? childrenFilter.map((child: ReactNode, index: number) => (
            <View
              key={String(index)}
              style={{
                marginRight:
                  horizontal && index !== childrenFilter.length - 1 ? gap : 0,
                marginBottom:
                  !horizontal && index !== childrenFilter.length - 1 ? gap : 0,
              }}>
              {child}
            </View>
          ))
        : children}
    </View>
  );
};

export default GapView;
