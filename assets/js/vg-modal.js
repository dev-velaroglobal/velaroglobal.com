'use strict';

/**
 * ModalManager — IIFE module that owns all modal open/close behaviour.
 *
 * SRP  : This module has one job — manage modal visibility.
 * OCP  : Any element with class `.vg-modal-overlay` is automatically handled;
 *        new modals need zero changes here.
 * DIP  : Depends on CSS class selectors (abstractions), not concrete element refs.
 */
const ModalManager = (() => {
  const OVERLAY_SELECTOR = '.vg-modal-overlay';
  const OPEN_CLASS       = 'open';

  // ── Private helpers ──────────────────────────────────────────────────────

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add(OPEN_CLASS);
  };

  const closeModal = (modal) => {
    modal.classList.remove(OPEN_CLASS);
  };

  const closeAllOpenModals = () => {
    document
      .querySelectorAll(`${OVERLAY_SELECTOR}.${OPEN_CLASS}`)
      .forEach(closeModal);
  };

  // ── Event handlers (small, single-purpose functions) ─────────────────────

  const onOverlayClick = (event) => {
    const clickedTheBackdrop = event.target === event.currentTarget;
    if (clickedTheBackdrop) closeModal(event.currentTarget);
  };

  const onEscapeKey = (event) => {
    if (event.key === 'Escape') closeAllOpenModals();
  };

  // ── Event handlers (small, single-purpose functions) continued ──────────

  const onCloseButtonClick = (event) => {
    const overlay = event.currentTarget.closest(OVERLAY_SELECTOR);
    if (overlay) closeModal(overlay);
  };

  // ── Listener registration ────────────────────────────────────────────────

  const attachOverlayListeners = () => {
    document
      .querySelectorAll(OVERLAY_SELECTOR)
      .forEach((overlay) => overlay.addEventListener('click', onOverlayClick));
  };

  // OCP: any button with [data-modal-close] triggers close — no IDs needed
  const attachCloseButtonListeners = () => {
    document
      .querySelectorAll('[data-modal-close]')
      .forEach((btn) => btn.addEventListener('click', onCloseButtonClick));
  };

  const attachKeyboardListener = () => {
    document.addEventListener('keydown', onEscapeKey);
  };

  // ── Public API ───────────────────────────────────────────────────────────

  const init = () => {
    attachOverlayListeners();
    attachCloseButtonListeners();
    attachKeyboardListener();
  };

  return { init, openModal, closeModal, closeAllOpenModals };
})();

document.addEventListener('DOMContentLoaded', () => ModalManager.init());
