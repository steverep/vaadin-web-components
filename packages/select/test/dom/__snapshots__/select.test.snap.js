/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["vaadin-select host default"] = 
`<vaadin-select>
  <label
    id="label-vaadin-select-0"
    slot="label"
  >
  </label>
  <div
    hidden=""
    id="error-message-vaadin-select-2"
    slot="error-message"
  >
  </div>
  <vaadin-select-value-button
    aria-expanded="false"
    aria-haspopup="listbox"
    aria-labelledby="label-vaadin-select-0 vaadin-select-3"
    aria-required="false"
    role="button"
    slot="value"
    tabindex="0"
  >
  </vaadin-select-value-button>
</vaadin-select>
`;
/* end snapshot vaadin-select host default */

snapshots["vaadin-select host helper"] = 
`<vaadin-select has-helper="">
  <label
    id="label-vaadin-select-0"
    slot="label"
  >
  </label>
  <div
    hidden=""
    id="error-message-vaadin-select-2"
    slot="error-message"
  >
  </div>
  <vaadin-select-value-button
    aria-describedby="helper-vaadin-select-1"
    aria-expanded="false"
    aria-haspopup="listbox"
    aria-labelledby="label-vaadin-select-0 vaadin-select-3"
    aria-required="false"
    role="button"
    slot="value"
    tabindex="0"
  >
  </vaadin-select-value-button>
  <div
    id="helper-vaadin-select-1"
    slot="helper"
  >
    Helper
  </div>
</vaadin-select>
`;
/* end snapshot vaadin-select host helper */

snapshots["vaadin-select host error"] = 
`<vaadin-select
  has-error-message=""
  invalid=""
>
  <label
    id="label-vaadin-select-0"
    slot="label"
  >
  </label>
  <div
    id="error-message-vaadin-select-2"
    role="alert"
    slot="error-message"
  >
    Error
  </div>
  <vaadin-select-value-button
    aria-describedby="error-message-vaadin-select-2"
    aria-expanded="false"
    aria-haspopup="listbox"
    aria-labelledby="label-vaadin-select-0 vaadin-select-3"
    aria-required="false"
    role="button"
    slot="value"
    tabindex="0"
  >
  </vaadin-select-value-button>
</vaadin-select>
`;
/* end snapshot vaadin-select host error */

snapshots["vaadin-select shadow default"] = 
`<div class="vaadin-select-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container part="input-field">
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="value">
    </slot>
    <div
      aria-hidden="true"
      part="toggle-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
<vaadin-select-overlay>
</vaadin-select-overlay>
`;
/* end snapshot vaadin-select shadow default */

snapshots["vaadin-select shadow disabled"] = 
`<div class="vaadin-select-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    disabled=""
    part="input-field"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="value">
    </slot>
    <div
      aria-hidden="true"
      part="toggle-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
<vaadin-select-overlay>
</vaadin-select-overlay>
`;
/* end snapshot vaadin-select shadow disabled */

snapshots["vaadin-select shadow readonly"] = 
`<div class="vaadin-select-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    part="input-field"
    readonly=""
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="value">
    </slot>
    <div
      aria-hidden="true"
      part="toggle-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
<vaadin-select-overlay>
</vaadin-select-overlay>
`;
/* end snapshot vaadin-select shadow readonly */

snapshots["vaadin-select shadow invalid"] = 
`<div class="vaadin-select-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    invalid=""
    part="input-field"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="value">
    </slot>
    <div
      aria-hidden="true"
      part="toggle-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
<vaadin-select-overlay>
</vaadin-select-overlay>
`;
/* end snapshot vaadin-select shadow invalid */

snapshots["vaadin-select shadow theme"] = 
`<div class="vaadin-select-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    part="input-field"
    theme="align-right"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="value">
    </slot>
    <div
      aria-hidden="true"
      part="toggle-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
<vaadin-select-overlay theme="align-right">
</vaadin-select-overlay>
`;
/* end snapshot vaadin-select shadow theme */

