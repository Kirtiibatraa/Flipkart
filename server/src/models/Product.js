const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 0, max: 5 },
    comment: { type: String, trim: true },
    reviewerName: { type: String, trim: true },
    reviewerEmail: { type: String, trim: true },
  },
  { _id: false }
);

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },

    brand: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    sku: {
      type: String,
      trim: true,
    },

    availabilityStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock", "Limited Stock", "Low Stock"],
      default: "In Stock",
    },

    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    minimumOrderQuantity: {
      type: Number,
      default: 1,
      min: 1,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    returnPolicy: {
      type: String,
      trim: true,
    },

    shippingInformation: {
      type: String,
      trim: true,
    },

    warrantyInformation: {
      type: String,
      trim: true,
    },

    weight: {
      type: Number,
      min: 0,
    },

    dimensions: {
      width: { type: Number, min: 0 },
      height: { type: Number, min: 0 },
      depth: { type: Number, min: 0 },
    },

    images: [{ type: String }],

    thumbnail: {
      type: String,
      trim: true,
    },

    tags: [{ type: String }],

    reviews: [ReviewSchema],

    meta: {
      createdAt: { type: Date },
      updatedAt: { type: Date },
      barcode: { type: String },
      qrCode: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
