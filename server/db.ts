import mongoose, { ConnectOptions } from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
  const connectionParams: ConnectOptions = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    family: 4,
  };

  try {
    await mongoose.connect('mongodb://localhost:27017/pizza-hut', connectionParams);
    console.log('Connected to the database successfully');
  } catch (error) {
    console.log('Could not connect to the database');
    console.error(error);
  }
};

// Call the function to connect to the database
// connectToDatabase();
