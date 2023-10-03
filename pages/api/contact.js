import { MongoClient } from 'mongodb';
// only excuted on the server side
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.7dgearf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=AtlasApp`;
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    //if invalid input
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      //send response
      // The 422 indicates that the action could not be
      // processed properly due to invalid data provided
      res.status(422).json({ mesage: 'Invalid input' });
      return;
    }

    //if input is valid
    const newMessage = {
      email,
      name,
      message,
    };
    //connect to db after confirming input and creating the
    //object that needs to be sent
    //connect() returns a promise
    let client;
    try {
      client = await MongoClient.connect(
        // 'mongodb+srv://Tirelo:Unw2eWUWmhBv0A7J@cluster0.7dgearf.mongodb.net/my-site?retryWrites=true&w=majority&appName=AtlasApp'
        connectionString
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    //use connected database (client) to input into.
    const db = client.db();
    //insert newMessage object into the database

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      //use mongodbs id as an id in the newMessage object
      newMessage.id = result.insertedId;
    } catch (error) {
      //close the connection to the db
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
    }
    //close connection
    client.close();
    res.status(201).json({ message: 'Completed!', message: newMessage });
  }
};
export default handler;
