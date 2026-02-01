import mongoose from "mongoose";

const carFeatureSchema = new mongoose.Schema(
  {
    ac: { type: Boolean, default: false },
    airbags: { type: Number, default: 0 },
    audio: { type: Boolean, default: false },
    bluetooth: { type: Boolean, default: false },
    usbPort: { type: Boolean, default: false },
    rearCamera: { type: Boolean, default: false },
    parkingSensor: { type: Boolean, default: false },
    abs: { type: Boolean, default: false },
    gps: { type: Boolean, default: false },
  },
  { _id: false },
);

const carSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    brand: { type: String, required: true },
    features: carFeatureSchema,
    model: { type: String, required: true },
    images: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Hatchback",
        "Sedan",
        "SUV",
        "MPV",
        "Crossover",
        "Pickup",
        "Luxury",
        "Electric",
      ],
      required: true,
    },
    year: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    transmission: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    seat_capacity: { type: String, required: true },
    licensePlate: { type: String, unique: true },
  },
  { timestamps: true },
);

const Car = mongoose.model("Car", carSchema);

export default Car;
