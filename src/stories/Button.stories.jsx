import React from 'react';
import { fn } from 'storybook/test';

import { Button } from './Button';

export default {
  title: 'Design System/Buttons/Basic Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'outlined', 'ghost', 'text'] },
    color: { control: 'inline-radio', options: ['system', 'primary'] },
    size: { control: 'inline-radio', options: ['extraLarge', 'large', 'medium', 'small'] },
    forcedState: { control: 'inline-radio', options: ['default', 'hovered', 'focused'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { onClick: fn() },
};

export const Playground = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'large',
    forcedState: 'default',
    disabled: false,
    loading: false,
    label: 'Button',
  },
};

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10, color: '#212121' }}>{title}</div>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, max-content)',
        gap: 10,
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}

export const Matrix = {
  parameters: {
    controls: { disable: true },
  },
  render: function MatrixRender() {
    const variants = [
      { key: 'filled', label: 'Filled' },
      { key: 'outlined', label: 'Outlined' },
      { key: 'ghost', label: 'Ghost' },
      { key: 'text', label: 'Text' },
    ];
    const colors = [
      { key: 'system', label: 'System' },
      { key: 'primary', label: 'Primary' },
    ];
    const sizes = [
      { key: 'extraLarge', label: 'ExtraLarge' },
      { key: 'large', label: 'Large' },
      { key: 'medium', label: 'Medium' },
      { key: 'small', label: 'Small' },
    ];
    const states = [
      { key: 'enable', label: 'Enable' },
      { key: 'hovered', label: 'Hovered' },
      { key: 'focused', label: 'Focused' },
      { key: 'disabled', label: 'Disabled' },
      { key: 'loading', label: 'Loading' },
    ];

    const renderButton = ({ variant, color, size, state }) => {
      const common = { variant, color, size, label: 'Button' };
      if (state === 'hovered') return <Button {...common} forcedState="hovered" />;
      if (state === 'focused') return <Button {...common} forcedState="focused" />;
      if (state === 'disabled') return <Button {...common} disabled />;
      if (state === 'loading') return <Button {...common} loading label="" />;
      return <Button {...common} />;
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {variants.map((v) => (
          <Section key={v.key} title={v.label}>
            {colors.map((c) => (
              <div key={c.key} style={{ marginBottom: 14 }}>
                <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 8, color: '#424242' }}>{c.label}</div>
                {states.map((s) => (
                  <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 72, fontSize: 12, color: '#9e9e9e' }}>{s.label}</div>
                    <Grid>
                      {sizes.map((z) => (
                        <div key={z.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div style={{ fontSize: 10, color: '#9e9e9e' }}>{z.label}</div>
                          {renderButton({ variant: v.key, color: c.key, size: z.key, state: s.key })}
                        </div>
                      ))}
                    </Grid>
                  </div>
                ))}
              </div>
            ))}
          </Section>
        ))}
      </div>
    );
  },
};
