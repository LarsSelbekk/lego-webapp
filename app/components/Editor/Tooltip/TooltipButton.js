import React from 'react';
import { RichUtils } from 'draft-js';
import cx from 'classnames';
import Icon from 'app/components/Icon';
import styles from './Tooltip.css';

export default (props) => {
  const blockType = RichUtils.getCurrentBlockType(props.editorState);
  const currentStyle = props.editorState.getCurrentInlineStyle();
  const active = props.type === 'block' ? props.style === blockType : currentStyle.has(props.style);

  return (
    <span
      className={cx(styles.tooltipButton, { [styles.tooltipButtonActive]: active })}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick(props.style);
      }}
    >
      <Icon name={props.icon} />
    </span>
  );
};