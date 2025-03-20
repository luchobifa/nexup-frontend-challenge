import React from 'react';
import './StockFilter.css';

type StockFilterProps = {
  showOnlyInStock: boolean;
  onToggle: (show: boolean) => void;
};

export const StockFilter: React.FC<StockFilterProps> = ({
  showOnlyInStock,
  onToggle,
}) => {
  return (
    <div className="stock-filter">
      <label className="stock-filter-label">
        <input
          type="checkbox"
          checked={showOnlyInStock}
          onChange={(e) => onToggle(e.target.checked)}
          className="stock-filter-checkbox"
        />
        Show only in stock
      </label>
    </div>
  );
};
