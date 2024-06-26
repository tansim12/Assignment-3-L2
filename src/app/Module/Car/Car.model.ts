import { Schema, model } from "mongoose";
import { TCar } from "./Car.interface";

const carSchema = new Schema<TCar>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isElectric: {
      type: Boolean,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    status: {
        type: String,
        enum: ["available", "unavailable"],
        default: "available",
      },
    isDeleted:{
        type:Boolean,
        default:false
    }
  },
  {
    timestamps: true,
  }
);

export const CarModel = model<TCar>("Car", carSchema);
