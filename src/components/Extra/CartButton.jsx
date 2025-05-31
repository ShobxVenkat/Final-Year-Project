import React from "react";
import { FiShoppingCart } from "react-icons/fi";

function CartButton({ count, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background:
          "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        border: "none",
        borderRadius: 40,
        padding: "14px 24px",
        color: "white",
        fontWeight: "700",
        fontSize: 18,
        cursor: "pointer",
        boxShadow:
          "0 6px 15px rgba(245, 158, 11, 0.8), 0 0 8px rgba(245, 158, 11, 0.5)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        zIndex: 1000,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow =
          "0 8px 20px rgba(245, 158, 11, 1), 0 0 12px rgba(245, 158, 11, 0.8)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 6px 15px rgba(245, 158, 11, 0.8), 0 0 8px rgba(245, 158, 11, 0.5)";
      }}
      aria-label="Open Cart"
    >
      <FiShoppingCart size={28} />
      Cart
      {count > 0 && (
        <span
          style={{
            background: "#dc2626",
            borderRadius: "50%",
            padding: "4px 12px",
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            minWidth: 26,
            textAlign: "center",
            lineHeight: 1,
            boxShadow: "0 0 8px #dc2626",
            userSelect: "none",
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default CartButton;
