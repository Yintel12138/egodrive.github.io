System.register(["./chunk-frameworks.js","./chunk-vendor.js"],(function(){"use strict";var e,t;return{setters:[function(t){e=t.h},function(e){t=e.a}],execute:function(){const n="SELECTED";t("details-menu-selected",".js-runner-group-component-visibility-menu",(function(e){const t=e.detail.relatedTarget,s=t.closest(".js-runner-group-form"),c=t.getAttribute("value");s.querySelector(".js-runner-group-targets-selection").hidden=c!==n,s.querySelector(".js-runner-group-targets-count").hidden=c!==n}),{capture:!0}),document.addEventListener("details-dialog-close",(function(e){const t=e.target.closest("selected-item-list");if(t){for(const e of t.items)e.checked=e.defaultChecked;t.updateCount()}})),t("click",".js-btn-select-items",(function(t){const n=t.target.closest("details-dialog"),s=t.target.closest("selected-item-list");if(e(n))for(const e of s.items)e.defaultChecked=e.checked;n.toggle(!1);s.querySelector("selected-item-count").updateCount(Number(s.selectedCount.textContent))}))}}}));
//# sourceMappingURL=chunk-runner-groups-c7bc1b54.js.map