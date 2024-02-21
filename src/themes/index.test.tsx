import { render, screen } from '@testing-library/react';
import ThemesContext from './themesContext';
import Themes from '.';

describe('Themes 组件测试', () => {
  it('正确接收并传递上下文', () => {
    // 模拟的上下文值
    const mockContextValue = {
      value: 'light',
      name: 'Light Theme'
      // 其他需要的属性和方法
    };

    // 创建一个测试的子组件，它会展示上下文中的一些数据
    const TestChild = (context) => <div>当前主题: {context.name}</div>;

    // 使用模拟的上下文值渲染 Themes 组件
    render(
      <ThemesContext.Provider value={mockContextValue}>
        <Themes>{(context) => <TestChild {...context} />}</Themes>
      </ThemesContext.Provider>
    );

    // 验证是否正确渲染了子组件，并且子组件接收到了正确的上下文
    expect(screen.getByText('当前主题: Light Theme')).toBeInTheDocument();
  });
});
