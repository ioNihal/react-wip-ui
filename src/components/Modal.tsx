"use client";

import React, { HTMLAttributes, useEffect, useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { useWIP } from '../hooks/useWIP';
import { isClient } from '../utils/ssr';
import { createPortal } from 'react-dom';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title = 'Feature Under Construction', 
  description = 'This feature is currently being developed and is not yet available.',
  className = '',
  ...props 
}) => {
  const { globalDisabled } = useWIP();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (globalDisabled || !isOpen || !mounted || !isClient) return null;

  return createPortal(
    <div className="rwip-modal-backdrop" onClick={onClose}>
      <div 
        className={`rwip-modal ${className}`} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rwip-modal-title"
        {...props}
      >
        <button 
          className="rwip-modal-close" 
          onClick={onClose} 
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <AlertCircle size={24} style={{ color: 'var(--rwip-color-primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h2 id="rwip-modal-title" className="rwip-modal-title">{title}</h2>
            <p className="rwip-modal-desc">{description}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
