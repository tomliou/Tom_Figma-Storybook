import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

/**
 * Basic Button（依 Figma "Buttons > Basic Button" 規格）
 * - variants: filled / outlined / ghost / text
 * - colors: system / primary
 * - sizes: extraLarge / large / medium / small
 * - states: enable / hovered / focused / disabled / loading（由 story 透過 forcedState/disabled/loading 模擬）
 */
export const Button = ({
  variant = 'filled',
  color = 'system',
  size = 'extraLarge',
  forcedState = 'default',
  disabled = false,
  loading = false,
  label = 'Button',
  ...props
}) => {
  const isDisabled = disabled || loading;

  // Loading 時沒有可見文字，需提供 aria-label 讓螢幕閱讀器能讀出按鈕用途（通過 a11y 檢查）
  const accessibleName = loading ? (label ? `${label} 載入中` : '載入中') : undefined;

  return (
    <button
      type="button"
      className="ds-button"
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-forced-state={forcedState}
      data-loading={loading ? 'true' : 'false'}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-label={accessibleName}
      {...props}
    >
      {loading ? <span className="ds-button__spinner" aria-hidden="true" /> : label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'text']),
  color: PropTypes.oneOf(['system', 'primary']),
  size: PropTypes.oneOf(['extraLarge', 'large', 'medium', 'small']),
  forcedState: PropTypes.oneOf(['default', 'hovered', 'focused']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
