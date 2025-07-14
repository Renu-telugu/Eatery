import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://renuka:renu2005@cluster0.fk3b24r.mongodb.net/eatery"
    )
    .then(() => console.log("DB connected"));
};
