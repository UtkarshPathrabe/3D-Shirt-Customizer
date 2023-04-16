import mongoose from 'mongoose';

const IPAddress = new mongoose.Schema({
  address: { type: String, required: true, unique: true, },
});

const IPAddressSchema = mongoose.model('IPAddress', IPAddress);

export default IPAddressSchema;
