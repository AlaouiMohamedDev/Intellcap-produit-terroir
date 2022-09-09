import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const ISSERVER = typeof window === "undefined";

const initialState = {
  favItems:(!ISSERVER)&& (localStorage.getItem("favItems") ? JSON.parse(localStorage.getItem("favItems")): []),
  favTotalQuantity: 0,
  favTotalAmount: 0,
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addTofav(state, action) {
      const existingIndex = state.favItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        toast.info("Product already in wishlist", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, favQuantity: 1 };
        state.favItems.push(tempProductItem);
        toast.success("Product added to wishlist", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("favItems", JSON.stringify(state.favItems));
    },
    removeFromfav(state, action) {
      state.favItems.map((favItem) => {
        if (favItem.id === action.payload.id) {
          const nextfavItems = state.favItems.filter(
            (item) => item.id !== favItem.id
          );

          state.favItems = nextfavItems;

          toast.error("Product removed from wishlist", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("favItems", JSON.stringify(state.favItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.favItems.reduce(
        (favTotal, favItem) => {
          const { price, favQuantity } = favItem;
          const itemTotal = price * favQuantity;

          favTotal.total += itemTotal;
          favTotal.quantity += favQuantity;

          return favTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.favTotalQuantity = quantity;
      state.favTotalAmount = total;
    },
    clearfav(state, action) {
      state.favItems = [];
      localStorage.setItem("favItems", JSON.stringify(state.favItems));
      toast.error("fav cleared", { position: "bottom-left" });
    },
  },
});

export const { addTofav, removeFromfav, getTotals, clearfav } =
  favSlice.actions;

export default favSlice.reducer;
